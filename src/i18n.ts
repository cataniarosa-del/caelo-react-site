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
    title: 'Supporto decisionale auditabile per la Pubblica Amministrazione',
    description:
      'Caelo è una piattaforma basata su intelligenza artificiale progettata per affiancare gli operatori nella gestione dei procedimenti amministrativi, riducendo errori, rilavorazioni e pratiche respinte.',
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
      title: 'Auditable decision support for Public Administration',
      description:
        'Caelo is an AI-based platform designed to support operators in managing administrative procedures, reducing errors, rework and rejected cases.',
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

  fr: it,
  de: it,
  es: it,
};
