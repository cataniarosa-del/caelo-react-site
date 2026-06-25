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
      'CAELO è un sistema di governance che struttura, controlla e gestisce i procedimenti amministrativi, garantendo coerenza operativa, tracciabilità e riduzione degli errori.',
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
        'CAELO is a governance system that structures, controls and manages administrative procedures, ensuring operational consistency, traceability and reduction of errors.',
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
        'CAELO est un système de gouvernance qui structure, contrôle et gère les procédures administratives, en garantissant la cohérence opérationnelle, la traçabilité et la réduction des erreurs.',
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
        'CAELO ist ein Governance-System, das Verwaltungsverfahren strukturiert, kontrolliert und steuert und dabei operative Konsistenz, Nachvollziehbarkeit und Fehlerreduzierung gewährleistet.',
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
        'CAELO es un sistema de gobernanza que estructura, controla y gestiona los procedimientos administrativos, garantizando coherencia operativa, trazabilidad y reducción de errores.',
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
