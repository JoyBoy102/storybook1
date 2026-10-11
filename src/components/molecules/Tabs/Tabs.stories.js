import { createTabs } from './Tabs';
import './Tabs.css';

export default {
    title: 'Molecules/Tabs',
    tags: ['autodocs'],
    argTypes: {
        activeIndex: { control: { type: 'number', min: 0, max: 5 } },
    },
};

export const Default = { args: { activeIndex: 0 }, render: (a) => createTabs(a) };
export const SecondActive = { args: { activeIndex: 1 }, render: (a) => createTabs(a) };
