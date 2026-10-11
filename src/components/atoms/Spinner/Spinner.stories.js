import { createSpinner } from './Spinner';
import './Spinner.css';

export default {
    title: 'Atoms/Spinner',
    tags: ['autodocs'],
    argTypes: {
        size: { control: { type: 'select' }, options: ['sm', 'md', 'lg'] },
    },
};

export const Small = { args: { size: 'sm' }, render: (a) => createSpinner(a) };
export const Medium = { args: { size: 'md' }, render: (a) => createSpinner(a) };
export const Large = { args: { size: 'lg' }, render: (a) => createSpinner(a) };

export const AllSizes = {
    render: () => {
        const wrap = document.createElement('div');
        wrap.style.cssText = 'display:flex;gap:24px;align-items:center;';
        ['sm', 'md', 'lg'].forEach((s) => wrap.appendChild(createSpinner({ size: s })));
        return wrap;
    },
};
