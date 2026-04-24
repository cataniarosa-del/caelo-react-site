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
      title: 'Support décisionnel auditable pour l’administration publique',
      description:
        'Caelo est une plateforme basée sur l’intelligence artificielle conçue pour accompagner les opérateurs dans la gestion des procédures administratives, en réduisant les erreurs et les reprises.',
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
      title: 'Prüfbare Entscheidungsunterstützung für die öffentliche Verwaltung',
      description:
        'Caelo ist eine KI-basierte Plattform zur Unterstützung von Mitarbeitern bei der Verwaltung administrativer Verfahren, zur Reduzierung von Fehlern und Nacharbeit.',
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
      title: 'Soporte de decisiones auditable para la Administración Pública',
      description:
        'Caelo es una plataforma basada en inteligencia artificial diseñada para apoyar a los operadores en la gestión de procedimientos administrativos, reduciendo errores y reprocesos.',
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
