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
      'riduzione degli errori operativi',
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
      'aumento della trasparenza amministrativa',
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
      'Ogni attività è tracciata e verificabile, garantendo trasparenza e controllo.',
    icon: 'Shield',
    benefits: [
      'tracciabilità completa delle operazioni',
      'audit trail strutturato',
      'spiegabilità delle indicazioni fornite',
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
      'nessuna modifica ai sistemi core',
      'introduzione progressiva nei processi',
    ],
  },
  {
    id: 'sicurezza-dati',
    title: 'Sicurezza e protezione dei dati',
    description:
      'Architettura progettata nel rispetto dei requisiti di sicurezza e protezione dati.',
    icon: 'Lock',
    benefits: [
      'controllo degli accessi',
      'gestione sicura dei dati',
      'tracciamento delle operazioni',
      'progettazione conforme alle normative vigenti',
    ],
  },
];

export const benefits: Benefit[] = [
  {
    id: 'efficienza-operativa',
    title: 'Efficienza Operativa',
    description:
      'Ottimizzazione dei processi amministrativi attraverso supporto strutturato e riduzione delle attività manuali.',
    metric: '',
    impact: 'Miglioramento della gestione operativa',
  },
  {
    id: 'riduzione-rischio',
    title: 'Riduzione del rischio operativo',
    description:
      'Supporto nella gestione delle pratiche con maggiore controllo e minore esposizione a errori procedurali.',
    metric: '',
    impact: 'Maggiore affidabilità dei processi',
  },
  {
    id: 'trasparenza',
    title: 'Trasparenza e accountability',
    description:
      'Tracciabilità completa delle attività e supporto alla verificabilità delle decisioni.',
    metric: '',
    impact: 'Controllo e auditabilità',
  },
];
