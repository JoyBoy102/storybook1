import { createFormField } from './FormField';
import './FormField.css';

export default {
    title: 'Molecules/FormField',
    tags: ['autodocs'],
    argTypes: {
        type: { control: { type: 'select' }, options: ['text', 'email', 'password'] },
        required: { control: 'boolean' },
    },
};

export const Default = {
    args: { label: 'Почта', type: 'email', placeholder: 'you@example.com' },
    render: (a) => createFormField(a),
};

export const WithHelper = {
    args: { label: 'Пароль', type: 'password', placeholder: '••••••', helper: 'Минимум 8 символов' },
    render: (a) => createFormField(a),
};

export const WithError = {
    args: { label: 'Почта', type: 'email', placeholder: 'you@example.com', error: 'Некорректный адрес', required: true },
    render: (a) => createFormField(a),
};
