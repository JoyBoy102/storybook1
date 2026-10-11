import { createBadge } from './Badge';
import './Badge.css';

export default {
    title: 'Atoms/Badge',
    tags: ['autodocs'],
    argTypes: {
        variant: { control: { type: 'select' }, options: ['info', 'success', 'warning', 'error'] },
        label: { control: 'text' },
    },
};

export const Info = { args: { variant: 'info', label: 'Info' }, render: (a) => createBadge(a) };
export const Success = { args: { variant: 'success', label: 'Success' }, render: (a) => createBadge(a) };
export const Warning = { args: { variant: 'warning', label: 'Warning' }, render: (a) => createBadge(a) };
export const Error = { args: { variant: 'error', label: 'Error' }, render: (a) => createBadge(a) };

export const AllVariants = {
    render: () => {
        const wrap = document.createElement('div');
        wrap.style.cssText = 'display:flex;gap:8px;flex-wrap:wrap;';
        ['info', 'success', 'warning', 'error'].forEach((v) =>
            wrap.appendChild(createBadge({ variant: v, label: v.charAt(0).toUpperCase() + v.slice(1) }))
        );
        return wrap;
    },
};
