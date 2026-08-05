-- CAELO — base del sistema editoriale multilingue
-- Eseguire nel SQL Editor del progetto Supabase.

create extension if not exists pgcrypto;

create table if not exists public.editorial_articles (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  author text not null default 'Claudia Catania',
  publication_date date not null default current_date,
  status text not null default 'draft'
    check (status in ('draft', 'published')),
  featured boolean not null default false,
  created_by uuid default auth.uid() references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.editorial_translations (
  id uuid primary key default gen_random_uuid(),
  article_id uuid not null
    references public.editorial_articles(id) on delete cascade,
  language text not null
    check (language in ('it', 'en', 'fr', 'de', 'es')),
  title text not null default '',
  category text not null default '',
  excerpt text not null default '',
  body text not null default '',
  meta_description text not null default '',
  translation_status text not null default 'empty'
    check (translation_status in ('empty', 'draft', 'reviewed', 'published')),
  machine_generated boolean not null default false,
  reviewed_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (article_id, language)
);

create table if not exists public.editorial_glossary (
  id uuid primary key default gen_random_uuid(),
  source_term text not null unique,
  en text not null default '',
  fr text not null default '',
  de text not null default '',
  es text not null default '',
  usage_note text not null default '',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists editorial_articles_set_updated_at
  on public.editorial_articles;
create trigger editorial_articles_set_updated_at
before update on public.editorial_articles
for each row execute function public.set_updated_at();

drop trigger if exists editorial_translations_set_updated_at
  on public.editorial_translations;
create trigger editorial_translations_set_updated_at
before update on public.editorial_translations
for each row execute function public.set_updated_at();

drop trigger if exists editorial_glossary_set_updated_at
  on public.editorial_glossary;
create trigger editorial_glossary_set_updated_at
before update on public.editorial_glossary
for each row execute function public.set_updated_at();

alter table public.editorial_articles enable row level security;
alter table public.editorial_translations enable row level security;
alter table public.editorial_glossary enable row level security;

-- Prima fase: il progetto Supabase deve avere soltanto gli account editoriali
-- autorizzati. In una fase successiva le policy saranno ristrette a una
-- tabella esplicita di amministratori.
drop policy if exists "Authenticated editors manage articles"
  on public.editorial_articles;
create policy "Authenticated editors manage articles"
on public.editorial_articles
for all
to authenticated
using (true)
with check (true);

drop policy if exists "Authenticated editors manage translations"
  on public.editorial_translations;
create policy "Authenticated editors manage translations"
on public.editorial_translations
for all
to authenticated
using (true)
with check (true);

drop policy if exists "Authenticated editors manage glossary"
  on public.editorial_glossary;
create policy "Authenticated editors manage glossary"
on public.editorial_glossary
for all
to authenticated
using (true)
with check (true);

grant select, insert, update, delete
on public.editorial_articles,
   public.editorial_translations,
   public.editorial_glossary
to authenticated;

insert into public.editorial_glossary
  (source_term, en, fr, de, es, usage_note)
values
  (
    'governance procedurale',
    'procedural governance',
    'gouvernance procédurale',
    'Verfahrensgovernance',
    'gobernanza procedimental',
    'Termine centrale CAELO: non sostituire con workflow management.'
  ),
  (
    'Glass Box procedurale',
    'Procedural Glass Box',
    'Glass Box procédurale',
    'prozedurale Glass Box',
    'Glass Box procedimental',
    'Mantenere Glass Box come espressione distintiva.'
  ),
  (
    'auditabilità',
    'auditability',
    'auditabilité',
    'Auditierbarkeit',
    'auditabilidad',
    'Riferita alla ricostruibilità verificabile del procedimento.'
  ),
  (
    'supervisione umana',
    'human oversight',
    'supervision humaine',
    'menschliche Aufsicht',
    'supervisión humana',
    'Preferire human oversight a human supervision nei testi regolatori.'
  ),
  (
    'procedimento amministrativo',
    'administrative procedure',
    'procédure administrative',
    'Verwaltungsverfahren',
    'procedimiento administrativo',
    'Usare procedure, non process, nei contesti giuridico-amministrativi.'
  ),
  (
    'Mother Engine',
    'Mother Engine',
    'Mother Engine',
    'Mother Engine',
    'Mother Engine',
    'Nome proprio dell’architettura comune: non tradurre.'
  )
on conflict (source_term) do update set
  en = excluded.en,
  fr = excluded.fr,
  de = excluded.de,
  es = excluded.es,
  usage_note = excluded.usage_note;
