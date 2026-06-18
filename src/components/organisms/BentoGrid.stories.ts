import type { Meta, StoryObj } from '@storybook-astro/framework';
import BentoGrid from './BentoGrid.astro';

const meta: Meta<typeof BentoGrid> = {
  title: 'Organisms/BentoGrid',
  component: BentoGrid,
  tags: ['autodocs'],
  argTypes: {
    t: { control: 'none' },
  },
};

export default meta;

type Story = StoryObj<typeof BentoGrid>;

const mockT = (key: string) => {
  const translations: Record<string, string> = {
    'news.featured.headline': 'Telangana ITEC Dept announces Datathon in association with Swecha to create Telugu LLM',
    'news.featured.desc': 'A collaborative effort to curate Telugu data and build state-of-the-art language models.',
    'news.featured.category': 'FEATURED STORY',
    'news.btn.explore': 'Explore',
    'news.btn.learn': 'Learn More',
    'news.btn.view': 'View Details',
    'news.btn.read': 'Read Article',
    'news.btn.join': 'Join Meetup',
    'news.btn.readMore': 'Read More',
    'news.card1.headline': 'ITEC Dept Datathon with Swecha',
    'news.card1.desc': 'Creating open source resources for regional languages.',
    'news.card2.headline': 'Safeguarding Open Source AI license released',
    'news.card2.desc': 'A draft license aimed at safeguarding open-source AI.',
    'news.card3.headline': 'AI Hackday with IIIT Hyderabad',
    'news.card3.desc': 'IIIT Hyderabad and Swecha hosted AI Hackday empowering 2000 students.',
    'news.card4.headline': 'Join Swecha Community Meetups',
    'news.card4.desc': 'Engage with open-source enthusiasts in Telangana.',
    'news.card5.headline': 'Digital Freedom Matters',
    'news.card5.desc': 'Discussing digital freedom and open source software.',
  };
  return translations[key] || key;
};

export const Default: Story = {
  args: {
    t: mockT,
  },
};
