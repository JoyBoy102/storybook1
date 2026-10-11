import { createCheckbox } from './Checkbox';
import './Checkbox.css';

export default {
    title: 'Atoms/Checkbox',
    tags: ['autodocs'],
    argTypes: {
        checked: { control: 'boolean' },
        disabled: { control: 'boolean' },
        label: { control: 'text' },
    },
};

export const Default = { 
    args: { label: 'Запомнить пароль' }, 
    render: (a) => createCheckbox(a) 
};

export const Checked = { 
    args: { label: 'Согласен с условиями', checked: true }, 
    render: (a) => createCheckbox(a) 
};

export const Disabled = { 
    args: { label: 'Неактивный', disabled: true }, 
    render: (a) => createCheckbox(a) 
};

export const WithoutLabel = { 
    args: { checked: false }, 
    render: (a) => createCheckbox(a) 
};
