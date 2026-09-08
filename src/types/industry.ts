export type IndustryType =
  | 'oil-gas-energy'
  | 'retail'
  | 'transportation'
  | 'manufacturing'
  | 'healthcare'
  | 'finance'

export interface Industry {
  id: IndustryType
  name: string
  description: string
  icon: string
  primaryColor: string
  features: string[]
  recommended?: boolean
  recordLabel: string
  sampleNames: [string, string]
  newRecordName: string
  scopeNote: string
  sampleApp: {
    name: string
    description: string
    entities: string[]
  }
}

const practiceFeatures = [
  'Add a record with validation',
  'Change status',
  'Search and filter',
  'Keep changes after refresh',
]

export const industries: Industry[] = [
  {
    id: 'oil-gas-energy',
    name: 'Oil, Gas & Energy',
    description: 'Practice tracking fictional equipment checks',
    icon: '⚡',
    primaryColor: 'orange',
    features: [...practiceFeatures],
    recordLabel: 'equipment check',
    sampleNames: ['Demo pump check', 'Demo valve check'],
    newRecordName: 'Demo gauge check',
    scopeNote:
      'Fictional equipment checks only; no live telemetry, safety decisions, operating instructions, or compliance claims.',
    sampleApp: {
      name: 'Equipment Check Practice',
      description: 'A local checklist for made-up equipment checks',
      entities: ['Equipment checks'],
    },
  },
  {
    id: 'retail',
    name: 'Retail',
    description: 'A small fictional stock-item board; recommended first',
    icon: '🛒',
    primaryColor: 'blue',
    features: [...practiceFeatures],
    recommended: true,
    recordLabel: 'stock item',
    sampleNames: ['Notebook pack', 'Desk organizer'],
    newRecordName: 'Blue notebook',
    scopeNote:
      'Fictional stock items only; no customer details, payments, live stock control, or purchasing.',
    sampleApp: {
      name: 'Store Inventory Practice',
      description: 'A local board for fictional stock items',
      entities: ['Stock items'],
    },
  },
  {
    id: 'transportation',
    name: 'Transportation & Logistics',
    description: 'Practice tracking made-up delivery preparation tasks',
    icon: '🚚',
    primaryColor: 'green',
    features: [...practiceFeatures],
    recordLabel: 'delivery task',
    sampleNames: ['Demo parcel labels', 'Demo crate packing'],
    newRecordName: 'Demo box sorting',
    scopeNote:
      'Fictional delivery tasks only; no driver details, addresses, GPS tracking, route optimization, or live dispatch.',
    sampleApp: {
      name: 'Delivery Task Practice',
      description: 'A local board for made-up delivery preparation',
      entities: ['Delivery tasks'],
    },
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    description: 'Practice tracking fictional workshop work items',
    icon: '🏭',
    primaryColor: 'teal',
    features: [...practiceFeatures],
    recordLabel: 'work item',
    sampleNames: ['Demo label batch', 'Demo packing batch'],
    newRecordName: 'Demo carton batch',
    scopeNote:
      'Fictional work items only; no machine control, safety procedures, quality certification, or production decisions.',
    sampleApp: {
      name: 'Workshop Task Practice',
      description: 'A local board for made-up workshop tasks',
      entities: ['Work items'],
    },
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    description: 'Practice tracking fictional clinic supply requests',
    icon: '🏥',
    primaryColor: 'red',
    features: [...practiceFeatures],
    recordLabel: 'supply request',
    sampleNames: ['Demo clipboard request', 'Demo folder request'],
    newRecordName: 'Demo label request',
    scopeNote:
      'Fictional clinic supplies only; no patients, health records, appointments, diagnosis, treatment, or compliance claims.',
    sampleApp: {
      name: 'Clinic Supply Practice',
      description: 'A local board for fictional non-clinical supplies',
      entities: ['Supply requests'],
    },
  },
  {
    id: 'finance',
    name: 'Financial Services',
    description: 'Practice tracking fictional internal office requests',
    icon: '💰',
    primaryColor: 'cyan',
    features: [...practiceFeatures],
    recordLabel: 'internal request',
    sampleNames: ['Demo report layout', 'Demo meeting agenda'],
    newRecordName: 'Demo training request',
    scopeNote:
      'Fictional internal requests only; no payments, account details, financial advice, approval authority, or compliance claims.',
    sampleApp: {
      name: 'Internal Request Practice',
      description: 'A local board for fictional office requests',
      entities: ['Internal requests'],
    },
  },
]
