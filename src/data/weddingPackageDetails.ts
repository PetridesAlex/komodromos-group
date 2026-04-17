export type WeddingPackageDetailCopy = {
  summary: string
  summaryEl: string
  idealFor: string
  idealForEl: string
  planningWindow: string
  planningWindowEl: string
  inclusions: string[]
}

export const weddingPackageDetails: Record<string, WeddingPackageDetailCopy> = {
  basic: {
    summary:
      'A clear and elegant foundation for couples who want trusted coordination, disciplined timelines, and a polished wedding day without overproduction.',
    summaryEl:
      'Μια κομψή και ξεκάθαρη βάση για ζευγάρια που θέλουν αξιόπιστο συντονισμό και άψογη ημέρα γάμου χωρίς υπερβολές.',
    idealFor: 'Intimate to mid-size weddings with focused priorities and efficient decision making.',
    idealForEl:
      'Ιδανικό για μικρούς ή μεσαίους γάμους με ξεκάθαρες προτεραιότητες και γρήγορες αποφάσεις.',
    planningWindow: 'Recommended planning window: 4-6 months',
    planningWindowEl: 'Προτεινόμενο παράθυρο προετοιμασίας: 4-6 μήνες',
    inclusions: [
      'Core planning timeline and monthly checkpoints',
      'Vendor shortlist across key categories',
      'Ceremony + reception run sheet',
      'Guest logistics baseline guidance',
      'Final week confirmations and rehearsal flow',
      'Day-of coordination by lead planner',
    ],
  },
  'basic-plus': {
    summary:
      'Builds on Basic with richer styling guidance, expanded partner curation, and tighter guest-flow orchestration from arrival to after-party.',
    summaryEl:
      'Επεκτείνει το Basic με πιο ολοκληρωμένο styling, επιλεγμένους συνεργάτες και καλύτερη ροή εμπειρίας για τους καλεσμένους.',
    idealFor:
      'Couples wanting stronger visual direction and support while keeping the production scope controlled.',
    idealForEl:
      'Για ζευγάρια που θέλουν πιο έντονη αισθητική κατεύθυνση χωρίς μεγάλη αύξηση παραγωγής.',
    planningWindow: 'Recommended planning window: 6-8 months',
    planningWindowEl: 'Προτεινόμενο παράθυρο προετοιμασίας: 6-8 μήνες',
    inclusions: [
      'Everything in Basic',
      'Enhanced styling moodboards and palette curation',
      'Expanded vendor negotiation support',
      'Refined ceremony transitions and cue sheets',
      'Guest transport and hospitality touchpoint planning',
      'Extended on-site coordination window',
    ],
  },
  classic: {
    summary:
      'A full creative-and-production tier where concept, guest experience, and execution are managed as one coherent luxury narrative.',
    summaryEl:
      'Πλήρες πακέτο δημιουργικού σχεδιασμού και παραγωγής, με ενιαία εμπειρία και αρμονική εκτέλεση.',
    idealFor:
      'Destination couples and larger celebrations requiring structured collaboration across many partners.',
    idealForEl:
      'Ιδανικό για destination γάμους και μεγαλύτερες εκδηλώσεις με πολλούς συνεργάτες.',
    planningWindow: 'Recommended planning window: 8-10 months',
    planningWindowEl: 'Προτεινόμενο παράθυρο προετοιμασίας: 8-10 μήνες',
    inclusions: [
      'Everything in Basic Plus',
      'Full creative direction and styling architecture',
      'Lighting and atmosphere concept supervision',
      'Detailed guest journey mapping',
      'Multi-vendor production meetings and sign-off',
      'Dual coordinator presence on event day',
    ],
  },
  'classic-plus': {
    summary:
      'Advanced production for elevated celebrations with deeper personalization, technical staging precision, and extended hosting coverage.',
    summaryEl:
      'Αναβαθμισμένη παραγωγή για πιο απαιτητικές εκδηλώσεις με εξατομίκευση, τεχνική ακρίβεια και εκτεταμένη υποστήριξη.',
    idealFor:
      'Couples hosting multi-part wedding weekends or high-touch guest programmes.',
    idealForEl:
      'Για ζευγάρια που οργανώνουν πολυήμερο γαμήλιο πρόγραμμα με υψηλές απαιτήσεις φιλοξενίας.',
    planningWindow: 'Recommended planning window: 10-12 months',
    planningWindowEl: 'Προτεινόμενο παράθυρο προετοιμασίας: 10-12 μήνες',
    inclusions: [
      'Everything in Classic',
      'Expanded run-of-show with technical sequencing',
      'Bespoke detail program and stationery alignment',
      'Pre-event hosting experiences and briefings',
      'Extended supplier quality control',
      'Post-event wrap-down and vendor closure',
    ],
  },
  premium: {
    summary:
      'Our signature white-glove tier: complete discretion, maximum craftsmanship, and executive-level oversight from first brief to final farewell.',
    summaryEl:
      'Η κορυφαία επιλογή μας: απόλυτη διακριτικότητα, υψηλή αισθητική και πλήρης επίβλεψη μέχρι την τελευταία λεπτομέρεια.',
    idealFor:
      'Luxury celebrations where privacy, personalization, and flawless timing are non-negotiable.',
    idealForEl:
      'Για πολυτελείς γάμους όπου η ιδιωτικότητα, η εξατομίκευση και το άψογο timing είναι απαραίτητα.',
    planningWindow: 'Recommended planning window: 12+ months',
    planningWindowEl: 'Προτεινόμενο παράθυρο προετοιμασίας: 12+ μήνες',
    inclusions: [
      'Everything in Classic Plus',
      'Executive creative leadership and final approvals',
      'VIP hospitality and protocol handling',
      'Priority vendor network and premium access',
      'High-touch contingency and risk planning',
      'Full white-glove team coverage',
    ],
  },
  customised: {
    summary:
      'A fully bespoke engagement shaped around your vision, cultural needs, timeline, and investment parameters with custom scoping.',
    summaryEl:
      'Πλήρως προσαρμοσμένο πρόγραμμα με βάση το όραμα, το ύφος, το χρονοδιάγραμμα και το budget σας.',
    idealFor:
      'Couples with unique requirements, multi-location concepts, or non-standard production structures.',
    idealForEl:
      'Για ζευγάρια με μοναδικές απαιτήσεις, πολλαπλές τοποθεσίες ή μη τυπικές παραγωγικές ανάγκες.',
    planningWindow: 'Planning window and scope defined after private consultation',
    planningWindowEl: 'Χρονοδιάγραμμα και εύρος ορίζονται μετά από ιδιωτική συνάντηση',
    inclusions: [
      'Private strategic briefing and discovery workshop',
      'Custom scope architecture and phased budget model',
      'Tailored vendor ecosystem and contract strategy',
      'Bespoke production design and guest-experience flow',
      'Flexible team structure aligned to project complexity',
      'Executive oversight and premium delivery governance',
    ],
  },
}
