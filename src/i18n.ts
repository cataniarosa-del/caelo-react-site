export type Language = 'it' | 'en' | 'fr' | 'de' | 'es';

const it = {
  nav: {
    home: 'Home',
    features: 'Funzionalità',
    solutions: 'Soluzioni',
    about: 'Chi Siamo',
    contact: 'Contatti',
  },
  common: {
    demo: 'Richiedi una Demo',
    talk: 'Parla con il team',
  },
  home: {
    title: "L’architettura che governa l’intelligenza artificiale nei processi regolati",
    description:
      'CAELO struttura e orchestra procedure complesse attraverso regole esplicite, ruoli definiti, controlli, eccezioni e responsabilità verificabili. Ogni azione è tracciata, ogni passaggio è controllabile e ogni decisione resta sotto responsabilità umana.',
  },
  forms: {
    name: 'Nome',
    surname: 'Cognome',
    email: 'Email',
    message: 'Messaggio',
    submit: 'Invia richiesta',
    sending: 'Invio in corso...',
  },
};

export const translations: Record<Language, typeof it> = {
  it,

  en: {
    nav: {
      home: 'Home',
      features: 'Features',
      solutions: 'Solutions',
      about: 'About',
      contact: 'Contact',
    },
    common: {
      demo: 'Request a Demo',
      talk: 'Talk to the team',
    },
    home: {
      title: 'The architecture that governs artificial intelligence in regulated processes',
      description:
        'CAELO structures and orchestrates complex procedures through explicit rules, defined roles, controls, exceptions and verifiable responsibilities. Every action is traced, every step is controllable and every decision remains under human responsibility.',
    },
    forms: {
      name: 'Name',
      surname: 'Surname',
      email: 'Email',
      message: 'Message',
      submit: 'Send request',
      sending: 'Sending...',
    },
  },

  fr: {
    nav: {
      home: 'Accueil',
      features: 'Fonctionnalités',
      solutions: 'Solutions',
      about: 'À propos',
      contact: 'Contact',
    },
    common: {
      demo: 'Demander une démo',
      talk: 'Parler avec l’équipe',
    },
    home: {
      title: "L’architecture qui gouverne l’intelligence artificielle dans les processus réglementés",
      description:
        'CAELO structure et orchestre des procédures complexes au moyen de règles explicites, de rôles définis, de contrôles, d’exceptions et de responsabilités vérifiables. Chaque action est tracée, chaque étape est contrôlable et chaque décision reste sous responsabilité humaine.',
    },
    forms: {
      name: 'Prénom',
      surname: 'Nom',
      email: 'Email',
      message: 'Message',
      submit: 'Envoyer',
      sending: 'Envoi en cours...',
    },
  },

  de: {
    nav: {
      home: 'Startseite',
      features: 'Funktionen',
      solutions: 'Lösungen',
      about: 'Über uns',
      contact: 'Kontakt',
    },
    common: {
      demo: 'Demo anfordern',
      talk: 'Mit dem Team sprechen',
    },
    home: {
      title: 'Die Architektur, die künstliche Intelligenz in regulierten Prozessen steuert',
      description:
        'CAELO strukturiert und orchestriert komplexe Verfahren durch explizite Regeln, klar definierte Rollen, Kontrollen, Ausnahmen und überprüfbare Verantwortlichkeiten. Jede Aktion wird nachverfolgt, jeder Schritt bleibt kontrollierbar und jede Entscheidung unterliegt menschlicher Verantwortung.',
    },
    forms: {
      name: 'Vorname',
      surname: 'Nachname',
      email: 'E-Mail',
      message: 'Nachricht',
      submit: 'Senden',
      sending: 'Wird gesendet...',
    },
  },

  es: {
    nav: {
      home: 'Inicio',
      features: 'Funcionalidades',
      solutions: 'Soluciones',
      about: 'Quiénes somos',
      contact: 'Contacto',
    },
    common: {
      demo: 'Solicitar demo',
      talk: 'Hablar con el equipo',
    },
    home: {
      title: 'La arquitectura que gobierna la inteligencia artificial en los procesos regulados',
      description:
        'CAELO estructura y orquesta procedimientos complejos mediante reglas explícitas, roles definidos, controles, excepciones y responsabilidades verificables. Cada acción queda registrada, cada paso es controlable y cada decisión permanece bajo responsabilidad humana.',
    },
    forms: {
      name: 'Nombre',
      surname: 'Apellido',
      email: 'Correo electrónico',
      message: 'Mensaje',
      submit: 'Enviar solicitud',
      sending: 'Enviando...',
    },
  },
};
