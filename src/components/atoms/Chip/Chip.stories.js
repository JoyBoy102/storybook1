import { createChip } from './Chip';
import './Chip.css';

export default {
    title: 'Atoms/Chip',
    tags: ['autodocs'],
    argTypes: {
        label: { control: 'text' },
        active: { control: 'boolean' },
        disabled: { control: 'boolean' },
    },
};

export const Default = { 
    args: { label: 'Python' }, 
    render: (a) => createChip(a) 
};

export const Active = { 
    args: { label: 'Веб-разработка', active: true }, 
    render: (a) => createChip(a) 
};

export const Disabled = { 
    args: { label: 'Disabled', disabled: true }, 
    render: (a) => createChip(a) 
};

export const AllChips = {
    render: () => {
        const wrap = document.createElement('div');
        wrap.style.cssText = 'display:flex;gap:8px;flex-wrap:wrap;';
        wrap.append(
            createChip({ label: 'Python' }),
            createChip({ label: 'Веб-разработка', active: true }),
            createChip({ label: 'Data Science' }),
            createChip({ label: 'DevOps' }),
        );
        return wrap;
    },
};
