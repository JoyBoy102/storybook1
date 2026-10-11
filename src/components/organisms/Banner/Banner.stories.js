import { createBanner } from './Banner';
import './Banner.css';

export default {
    title: 'Organisms/Banner',
    tags: ['autodocs'],
    parameters: { layout: 'fullscreen' },
    argTypes: {
        title: { control: 'text' },
        subtitle: { control: 'text' },
    },
};

export const Default = {
    render: () => createBanner(),
};

export const CustomText = {
    args: {
        title: 'Найди свой идеальный курс',
        subtitle: 'Более 1000 курсов от проверенных платформ',
    },
    render: (a) => createBanner(a),
};
