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
  sampleApp: {
    name: string
    description: string
    entities: string[]
  }
}

export const industries: Industry[] = [
  {
    id: 'oil-gas-energy',
    name: 'Oil, Gas & Energy',
    description: 'Manage assets, maintenance, and safety inspections',
    icon: '⚡',
    primaryColor: 'orange',
    features: ['Asset tracking', 'Maintenance scheduling', 'Safety inspections', 'Equipment monitoring'],
    sampleApp: {
      name: 'Field Asset Manager',
      description: 'Track and manage field equipment and maintenance schedules',
      entities: ['Equipment', 'Maintenance Records', 'Inspection Reports', 'Work Orders']
    }
  },
  {
    id: 'retail',
    name: 'Retail',
    description: 'Inventory management and customer orders',
    icon: '🛒',
    primaryColor: 'blue',
    features: ['Inventory tracking', 'Order management', 'Customer profiles', 'Sales analytics'],
    sampleApp: {
      name: 'Store Inventory Portal',
      description: 'Manage inventory levels, orders, and customer information',
      entities: ['Products', 'Orders', 'Customers', 'Inventory Locations']
    }
  },
  {
    id: 'transportation',
    name: 'Transportation & Logistics',
    description: 'Fleet management and shipment tracking',
    icon: '🚚',
    primaryColor: 'green',
    features: ['Vehicle tracking', 'Route optimization', 'Delivery scheduling', 'Driver management'],
    sampleApp: {
      name: 'Fleet Operations Dashboard',
      description: 'Monitor vehicles, routes, and delivery schedules',
      entities: ['Vehicles', 'Drivers', 'Routes', 'Deliveries']
    }
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    description: 'Production tracking and quality control',
    icon: '🏭',
    primaryColor: 'purple',
    features: ['Production monitoring', 'Quality checks', 'Material tracking', 'Workflow management'],
    sampleApp: {
      name: 'Production Tracker',
      description: 'Track production lines, materials, and quality metrics',
      entities: ['Production Lines', 'Materials', 'Quality Reports', 'Work Orders']
    }
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    description: 'Patient scheduling and records management',
    icon: '🏥',
    primaryColor: 'red',
    features: ['Appointment scheduling', 'Patient records', 'Resource allocation', 'Compliance tracking'],
    sampleApp: {
      name: 'Patient Appointment System',
      description: 'Schedule appointments and manage patient information',
      entities: ['Patients', 'Appointments', 'Providers', 'Medical Records']
    }
  },
  {
    id: 'finance',
    name: 'Financial Services',
    description: 'Request processing and approvals',
    icon: '💰',
    primaryColor: 'indigo',
    features: ['Request tracking', 'Approval workflows', 'Document management', 'Reporting'],
    sampleApp: {
      name: 'Financial Request Portal',
      description: 'Submit and track financial requests and approvals',
      entities: ['Requests', 'Approvals', 'Documents', 'Audit Logs']
    }
  }
]
