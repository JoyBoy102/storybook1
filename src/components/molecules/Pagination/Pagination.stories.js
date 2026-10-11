import { createPagination } from './Pagination';
import './Pagination.css';

export default {
    title: 'Molecules/Pagination',
    tags: ['autodocs'],
    argTypes: {
        current: { control: { type: 'number', min: 1, max: 10 } },
        total: { control: { type: 'number', min: 1, max: 10 } },
    },
};

export const Default = { args: { current: 1, total: 5 }, render: (a) => createPagination(a) };
export const Middle = { args: { current: 3, total: 7 }, render: (a) => createPagination(a) };
export const Last = { args: { current: 5, total: 5 }, render: (a) => createPagination(a) };
