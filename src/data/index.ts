import type { Feature, Benefit, CaseStudy, Testimonial } from '@/lib/index';

export const features: Feature[] = [
  {
    id: 'gestione-procedimenti',
    title: 'Gestione Automatizzata dei Procedimenti',
    description: 'Caelo automatizza l\'intero ciclo di vita dei procedimenti amministrativi, dalla ricezione alla conclusione, riducendo i tempi di elaborazione fino all\'80%.',
    icon: 'FileText',
    benefits: [
      'Riduzione dei tempi di elaborazione fino all\'80%',
      'Eliminazione degli errori manuali',
      'Tracciabilità completa di ogni fase',
      'Conformità automatica alle normative vigenti',
    ],
  },
  {
    id: 'linguaggio-semplificato',
    title: 'Semplificazione del Linguaggio Giuridico',
    description: 'Traduce automaticamente il linguaggio burocratico complesso in comunicazioni chiare e comprensibili per cittadini e operatori.',
    icon: 'MessageSquare',
    benefits: [
      'Comunicazioni accessibili a tutti i cittadini',
      'Riduzione delle richieste di chiarimento',
      'Miglioramento della trasparenza amministrativa',
      'Conformità WCAG 2.1 AAA per accessibilità',
    ],
  },
  {
    id: 'analisi-dati',
    title: 'Analisi Intelligente dei Dati',
    description: 'Elabora grandi volumi di documenti non strutturati, estraendo informazioni rilevanti e identificando pattern per decisioni più informate.',
    icon: 'BarChart3',
    benefits: [
      'Elaborazione di migliaia di documenti in minuti',
      'Estrazione automatica di dati chiave',
      'Identificazione di anomalie e pattern',
      'Dashboard analitiche in tempo reale',
    ],
  },
  {
    id: 'compliance-ai-act',
    title: 'Conformità AI Act Europea',
    description: 'Sistema progettato in piena conformità con l\'AI Act europeo, garantendo trasparenza, controllo umano e responsabilità nelle decisioni automatizzate.',
    icon: 'Shield',
    benefits: [
      'Conformità completa AI Act 2026',
      'Tracciabilità delle decisioni IA',
      'Controllo umano su decisioni critiche',
      'Audit trail completo per verifiche',
    ],
  },
  {
    id: 'integrazione-sistemi',
    title: 'Supporto ai processi esistenti',
    description: 'CAELO è progettato per affiancare i processi amministrativi già in uso, supportando il lavoro degli operatori senza richiedere la sostituzione immediata dei sistemi esistenti.',
    icon: 'Plug',
    benefits: [
      'Supporto documentale e procedimentale',
      'Adattabilità ai flussi operativi della PA',
      'Compatibilità con documenti e formati standard',
      'Affiancamento progressivo ai sistemi in uso',
    ],
  },
  {
    id: 'sicurezza-privacy',
    title: 'Sicurezza e Privacy by Design',
    description: 'Architettura progettata con i massimi standard di sicurezza e privacy, conforme GDPR e normative italiane sulla protezione dei dati.',
    icon: 'Lock',
    benefits: [
      'Crittografia end-to-end dei dati',
      'Conformità GDPR e normative italiane',
      'Hosting su infrastrutture certificate',
      'Backup automatici e disaster recovery',
    ],
  },
];

export const benefits: Benefit[] = [
  {
    id: 'efficienza-operativa',
    title: 'Efficienza Operativa',
    description: 'Riduzione drastica dei tempi di elaborazione dei procedimenti amministrativi, liberando risorse per attività a maggior valore aggiunto.',
    metric: '80%',
    impact: 'Riduzione dei tempi di elaborazione',
  },
  {
    id: 'riduzione-costi',
    title: 'Riduzione dei Costi',
    description: 'Ottimizzazione delle risorse umane e riduzione degli errori amministrativi che generano costi aggiuntivi e contenziosi.',
    metric: '60%',
    impact: 'Riduzione dei costi operativi',
  },
  {
    id: 'trasparenza',
    title: 'Trasparenza e Accountability',
    description: 'Tracciabilità completa di ogni decisione e azione, garantendo piena trasparenza verso cittadini e organi di controllo.',
    metric: '100%',
    impact: 'Tracciabilità delle decisioni',
 }
];