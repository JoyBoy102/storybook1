import { createCard } from './Card';
import './Card.css';

export default {
    title: 'Molecules/Card',
    tags: ['autodocs'],
    argTypes: {
        title: { control: 'text' },
        text: { control: 'text' },
    },
};

export const Default = { 
    args: { title: 'Название курса', text: 'Описание курса' }, 
    render: (a) => createCard(a) 
};

export const WithCallback = { 
    args: { 
        title: 'Python для начинающих', 
        text: 'Полный курс с практикой',
        onClick: () => alert('Card clicked!')
    }, 
    render: (a) => createCard(a) 
};
