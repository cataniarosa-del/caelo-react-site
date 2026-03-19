import type { Feature, Benefit, CaseStudy, Testimonial } from '@/lib/index';

export const features: Feature[] = [
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
];

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