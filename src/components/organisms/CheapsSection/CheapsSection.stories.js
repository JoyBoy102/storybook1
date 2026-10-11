import { createCheapsSection, DEFAULT_CHEAPS } from './CheapsSection';
import './CheapsSection.css';

export default {
    title: 'Organisms/CheapsSection',
    tags: ['autodocs'],
    parameters: { layout: 'fullscreen' },
    argTypes: {
        activeIndex: { control: { type: 'number', min: -1, max: 29 } },
    },
};

export const Default = {
    args: { activeIndex: -1 },
    render: (a) => createCheapsSection(a),
};

export const WithActive = {
    args: { activeIndex: 0 },
    render: (a) => createCheapsSection(a),
};

export const FewItems = {
    render: () => createCheapsSection({ items: ['Python', 'Веб-разработка', 'Data Science', 'DevOps'] }),
};
