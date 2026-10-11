import { createHeader } from './Header';
import './Header.css';

export default {
    title: 'Organisms/Header',
    tags: ['autodocs'],
};

export const Default = {
    args: {},
    render: (a) => createHeader(a),
};

