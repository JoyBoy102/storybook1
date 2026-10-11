import { createReviewsSection, DEFAULT_REVIEWS } from './ReviewsSection';
import './ReviewsSection.css';

export default {
    title: 'Organisms/ReviewsSection',
    tags: ['autodocs'],
    parameters: { layout: 'fullscreen' },
};

export const Default = {
    render: () => createReviewsSection(),
};

export const WithRealData = {
    render: () => createReviewsSection({
        reviews: [
            { nickname: 'Анна К.', rating: 5, resourceName: 'Skillbox — Python', text: 'Отличный курс, много практики.' },
            { nickname: 'Иван П.', rating: 4, resourceName: 'GeekBrains — QA', text: 'Хорошая база, но мало реальных кейсов.' },
        ],
        onPrev: () => alert('prev'),
        onNext: () => alert('next'),
    }),
};
