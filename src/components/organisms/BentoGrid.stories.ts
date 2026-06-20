import type { Meta, StoryObj } from '@storybook-astro/framework';
import BentoGrid from './BentoGrid.astro';

const meta: Meta<typeof BentoGrid> = {
  title: 'Organisms/BentoGrid',
  component: BentoGrid,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Bento grid layout for displaying news items. Requires an i18n translation function `t` as a prop.',
      },
    },
    layout: 'padded',
  },
  decorators: [
    (Story) => `
      <div style="max-width: 1248px; margin: 0 auto; padding: 24px;">
        ${Story()}
      </div>
    `,
  ],
  argTypes: {
    t: { control: 'object', description: 'Translation function mock' },
  },
};

export default meta;

type Story = StoryObj<typeof BentoGrid>;

const mockT = (key: string) => {
  const translations: Record<string, string> = {
    'news.featured.category': 'Top Story',
    'news.featured.headline': 'Swecha Hosted A Multi-Location AI Hackday',
    'news.featured.desc': 'We hosted a massive AI hackday across multiple colleges.',
    'news.btn.explore': 'Explore',
    'news.card1.headline': 'Datathon 2024',
    'news.card1.desc': 'Building datasets for local languages.',
    'news.btn.learn': 'Learn More',
    'news.card2.headline': 'Open AI License',
    'news.card2.desc': 'Releasing an open-source AI license draft.',
    'news.btn.read': 'Read',
    'news.card3.headline': 'AI for Social Good',
    'news.card3.desc': 'Empowering students to build AI for good.',
    'news.btn.view': 'View',
    'news.card4.headline': 'Community Meetups',
    'news.card4.desc': 'Join our weekend hacking sessions.',
    'news.btn.join': 'Join Us',
    'news.card5.headline': 'Digital Freedom',
    'news.card5.desc': 'Promoting digital rights and awareness.',
    'news.btn.readMore': 'Read More',
  };
  return translations[key] || key;
};

export const Default: Story = {
  args: {
    t: mockT,
  },
};
