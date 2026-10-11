import { createSearchInput } from './SearchInput';
import './SearchInput.css';

export default {
    title: 'Molecules/SearchInput',
    tags: ['autodocs'],
    argTypes: {
        placeholder: { control: 'text' },
    },
};

export const Default = {
    args: { placeholder: 'Введите название курса или навык, который хотите освоить' },
    render: (a) => createSearchInput(a),
};

export const WithCallback = {
    args: {
        placeholder: 'Поиск...',
        onSearch: (query) => alert(`Searching for: ${query}`),
    },
    render: (a) => createSearchInput(a),
};
