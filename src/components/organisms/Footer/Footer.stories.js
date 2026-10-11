import { createFooter } from './Footer';
import './Footer.css';

export default {
    title: 'Organisms/Footer',
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
};

export const Default = {
    args: {},
    render: (a) => createFooter(a),
};

export const CustomBrand = {
    args: {
        disclaimer: 'ООО «Некстстеп» — агрегатор онлайн-курсов',
        copyright: '© 2026 NextStep. Все права защищены',
    },
    render: (a) => createFooter(a),
};
