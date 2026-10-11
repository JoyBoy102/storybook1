import { createReviewCard } from './ReviewCard';
import './ReviewCard.css';

export default {
    title: 'Organisms/ReviewCard',
    tags: ['autodocs'],
    argTypes: {
        nickname: { control: 'text' },
        resourceName: { control: 'text' },
        text: { control: 'text' },
        rating: { control: { type: 'number', min: 0, max: 5 } },
    },
};

export const Default = {
    args: {
        nickname: 'Ник пользователя',
        rating: 5,
        resourceName: 'Название ресурса с курсом',
        text: 'Текст отзыва',
    },
    render: (a) => createReviewCard(a),
};

export const FilledExample = {
    args: {
        nickname: 'Анна К.',
        rating: 5,
        resourceName: 'Skillbox — Python',
        text: 'Отличный курс! Много практики и понятная подача материала.',
    },
    render: (a) => createReviewCard(a),
};
