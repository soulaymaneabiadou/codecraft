import { Grid, Callout, Quote, Socials } from '@components/shared';

const tags = {
  callout: {
    attributes: {
      title: { type: String },
      type: {
        type: String,
        default: 'note',
        matches: ['note', 'warning'],
        errorLevel: 'critical'
      }
    },
    render: Callout
  },
  quote: {
    attributes: {
      owner: { type: String }
    },
    render: Quote
  },
  grid: {
    render: Grid
  },
  'grid-card': {
    selfClosing: true,
    render: Grid.Card,
    attributes: {
      title: { type: String },
      description: { type: String },
      href: { type: String }
    }
  },
  socials: {
    selfClosing: true,
    render: Socials
  }
};

export default tags;
