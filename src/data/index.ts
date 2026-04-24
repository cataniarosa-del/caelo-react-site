import type { Feature, Benefit } from '@/lib/index';
import type { Language } from '@/i18n';

export const featuresByLanguage: Record<Language, Feature[]> = {
  it: [
    {
      id: 'supporto-procedimenti',
      title: 'Supporto alla gestione dei procedimenti',
      description:
        'Caelo affianca l’operatore nella gestione delle pratiche amministrative, supportando le diverse fasi del procedimento nel rispetto dei vincoli normativi e operativi.',
      icon: 'FileText',
      benefits: [
        'supporto alla gestione dei procedimenti complessi',
        'maggiore coerenza operativa',
        'tracciabilità delle attività svolte',
        'allineamento alle regole procedurali',
      ],
    },
    {
      id: 'interpretazione-linguaggio',
      title: 'Interpretazione del linguaggio amministrativo',
      description:
        'Trasforma comunicazioni e documenti complessi in informazioni operative comprensibili e utilizzabili.',
      icon: 'MessageSquare',
      benefits: [
        'lettura strutturata delle comunicazioni',
        'miglioramento della comprensione operativa',
        'supporto alla redazione di contenuti chiari',
        'maggiore trasparenza nel lavoro amministrativo',
      ],
    },
    {
      id: 'analisi-anomalie',
      title: 'Analisi delle informazioni e delle anomalie',
      description:
        'Supporta l’analisi dei dati e l’individuazione di criticità all’interno delle pratiche.',
      icon: 'BarChart3',
      benefits: [
        'estrazione delle informazioni rilevanti',
        'individuazione di anomalie e incoerenze',
        'supporto alla verifica dei dati',
        'evidenziazione dei punti critici',
      ],
    },
    {
      id: 'audit-controllo',
      title: 'Auditabilità e controllo',
      description:
        'Ogni attività è tracciata e verificabile, a supporto di trasparenza, controllo e accountability.',
      icon: 'Shield',
      benefits: [
        'tracciabilità completa delle operazioni',
        'audit trail strutturato',
        'restituzione motivata delle indicazioni',
        'supporto a verifiche e controlli',
      ],
    },
    {
      id: 'integrazione-sistemi',
      title: 'Integrazione con i sistemi esistenti',
      description:
        'Caelo è progettato per operare in modalità overlay, senza sostituire i sistemi già in uso.',
      icon: 'Plug',
      benefits: [
        'integrazione con sistemi legacy',
        'compatibilità con flussi operativi esistenti',
        'nessuna sostituzione dei sistemi core',
        'introduzione progressiva nei processi',
      ],
    },
    {
      id: 'scalabilita-procedimenti',
      title: 'Scalabilità su più procedimenti',
      description:
        'Caelo è progettato per supportare diversi procedimenti amministrativi della Pubblica Amministrazione, adattandosi ai contesti operativi e mantenendo coerenza metodologica.',
      icon: 'GitBranch',
      benefits: [
        'adattabilità a domini amministrativi differenti',
        'riuso del modello operativo su più contesti',
        'estensione progressiva dei casi d’uso',
        'coerenza, tracciabilità e controllo anche nella crescita',
      ],
    },
    {
      id: 'sicurezza-dati',
      title: 'Sicurezza e protezione dei dati',
      description:
        'Architettura progettata nel rispetto dei requisiti di sicurezza, protezione dei dati e presidio degli accessi.',
      icon: 'Lock',
      benefits: [
        'controllo degli accessi',
        'gestione sicura dei dati',
        'tracciamento delle operazioni',
        'progettazione orientata ai vincoli normativi vigenti',
      ],
    },
  ],

  en: [
    {
      id: 'supporto-procedimenti',
      title: 'Procedure management support',
      description:
        'Caelo supports operators in managing administrative cases, assisting the different stages of the procedure while respecting regulatory and operational constraints.',
      icon: 'FileText',
      benefits: [
        'support for complex administrative procedures',
        'greater operational consistency',
        'traceability of completed activities',
        'alignment with procedural rules',
      ],
    },
    {
      id: 'interpretazione-linguaggio',
      title: 'Administrative language interpretation',
      description:
        'Transforms complex communications and documents into clear, usable operational information.',
      icon: 'MessageSquare',
      benefits: [
        'structured reading of communications',
        'improved operational understanding',
        'support for drafting clear content',
        'greater transparency in administrative work',
      ],
    },
    {
      id: 'analisi-anomalie',
      title: 'Information and anomaly analysis',
      description:
        'Supports data analysis and the identification of critical issues within administrative cases.',
      icon: 'BarChart3',
      benefits: [
        'extraction of relevant information',
        'identification of anomalies and inconsistencies',
        'support for data verification',
        'highlighting of critical points',
      ],
    },
    {
      id: 'audit-controllo',
      title: 'Auditability and control',
      description:
        'Every activity is traceable and verifiable, supporting transparency, control and accountability.',
      icon: 'Shield',
      benefits: [
        'complete traceability of operations',
        'structured audit trail',
        'reasoned output for recommendations',
        'support for checks and controls',
      ],
    },
    {
      id: 'integrazione-sistemi',
      title: 'Integration with existing systems',
      description:
        'Caelo is designed to operate as an overlay without replacing systems already in use.',
      icon: 'Plug',
      benefits: [
        'integration with legacy systems',
        'compatibility with existing workflows',
        'no replacement of core systems',
        'progressive introduction into processes',
      ],
    },
    {
      id: 'scalabilita-procedimenti',
      title: 'Scalability across procedures',
      description:
        'Caelo is designed to support multiple administrative procedures, adapting to operational contexts while maintaining methodological consistency.',
      icon: 'GitBranch',
      benefits: [
        'adaptability to different administrative domains',
        'reuse of the operational model across contexts',
        'progressive extension of use cases',
        'consistency, traceability and control during growth',
      ],
    },
    {
      id: 'sicurezza-dati',
      title: 'Data security and protection',
      description:
        'Architecture designed around security, data protection and access control requirements.',
      icon: 'Lock',
      benefits: [
        'access control',
        'secure data management',
        'operation tracking',
        'design aligned with current regulatory constraints',
      ],
    },
  ],

  fr: [],
  de: [],
  es: [],
};

featuresByLanguage.fr = featuresByLanguage.en;
featuresByLanguage.de = featuresByLanguage.en;
featuresByLanguage.es = featuresByLanguage.en;

export const getFeatures = (lang: Language): Feature[] => {
  return featuresByLanguage[lang] || featuresByLanguage.it;
};

export const features: Feature[] = featuresByLanguage.it;

export const benefits: Benefit[] = [
  {
    id: 'efficienza-operativa',
    title: 'Efficienza operativa',
    description:
      'Ottimizzazione dei processi amministrativi attraverso supporto strutturato e maggiore continuità operativa.',
    metric: '',
    impact: 'Miglioramento della gestione operativa',
  },
  {
    id: 'riduzione-rischio',
    title: 'Riduzione del rischio operativo',
    description:
      'Supporto nella gestione delle pratiche con maggiore controllo e minore esposizione a incoerenze procedurali.',
    metric: '',
    impact: 'Maggiore affidabilità dei processi',
  },
  {
    id: 'trasparenza',
    title: 'Trasparenza e accountability',
    description:
      'Tracciabilità delle attività e supporto alla verificabilità delle indicazioni e dei passaggi operativi.',
    metric: '',
    impact: 'Controllo e auditabilità',
  },
];
