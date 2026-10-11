import { createInput } from './Input';
import './Input.css';

export default {
    title: 'Atoms/Input',
    tags: ['autodocs'],
    argTypes: {
        type: { control: { type: 'select' }, options: ['text', 'password', 'email'] },
        disabled: { control: 'boolean' },
        placeholder: { control: 'text' },
    },
};

export const Text = { 
    args: { type: 'text', placeholder: 'Введите текст' }, 
    render: (a) => createInput(a) 
};

export const Password = { 
    args: { type: 'password', placeholder: 'Пароль' }, 
    render: (a) => createInput(a) 
};

export const Email = { 
    args: { type: 'email', placeholder: 'Почта' }, 
    render: (a) => createInput(a) 
};

export const Disabled = { 
    args: { type: 'text', placeholder: 'Отключен', disabled: true }, 
    render: (a) => createInput(a) 
};
