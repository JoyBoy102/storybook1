import { createButton } from './Button';
import './Button.css';

export default {
    title: 'Atoms/Button',
    tags: ['autodocs'],
    argTypes: {
        variant: { control: { type: 'select' }, options: ['primary', 'secondary', 'ghost', 'danger'] },
        size: { control: { type: 'select' }, options: ['sm', 'md', 'lg'] },
        disabled: { control: 'boolean' },
    },
};

export const Primary = { args: { variant: 'primary', label: 'Войти' }, render: (a) => createButton(a) };
export const Secondary = { args: { variant: 'secondary', label: 'Каталог' }, render: (a) => createButton(a) };

export const AllVariants = {
    render: () => {
        const wrap = document.createElement('div');
        wrap.style.cssText = 'display:flex;gap:12px;flex-wrap:wrap;';
        wrap.append(
            createButton({ variant: 'primary', label: 'Primary' }),
            createButton({ variant: 'secondary', label: 'Secondary' }),
        );
        return wrap;
    },
};

export const Sizes = {
    render: () => {
        const wrap = document.createElement('div');
        wrap.style.cssText = 'display:flex;gap:12px;align-items:center;';
        wrap.append(
            createButton({ size: 'sm', label: 'Small' }),
            createButton({ size: 'md', label: 'Medium' }),
            createButton({ size: 'lg', label: 'Large' }),
        );
        return wrap;
    },
};