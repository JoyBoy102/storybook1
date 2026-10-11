import { createReviewCard } from '../ReviewCard/ReviewCard';

const ARROW_LEFT = `
<svg class="arrow" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" role="button" tabindex="0" aria-label="Предыдущий отзыв">
    <path d="M9.58187 18.17L2 10.585L9.58187 3M2 10.585H19.33" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
</svg>`;

const ARROW_RIGHT = `
<svg class="arrow" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" role="button" tabindex="0" aria-label="Следующий отзыв">
    <path d="M4.33325 13H21.6666M14.0833 20.5833L21.6666 13L14.0833 5.41663" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
</svg>`;

export const DEFAULT_REVIEWS = [
    { nickname: 'Ник пользователя', rating: 5, resourceName: 'Название ресурса с курсом', text: 'Текст отзыва' },
    { nickname: 'Ник пользователя', rating: 5, resourceName: 'Название ресурса с курсом', text: 'Текст отзыва' },
];

export const createReviewsSection = ({
    reviews = DEFAULT_REVIEWS,
    onPrev = null,
    onNext = null,
} = {}) => {
    const section = document.createElement('section');
    section.className = 'reviews';

    const left = document.createElement('div');
    left.innerHTML = ARROW_LEFT;
    const leftArrow = left.firstElementChild;
    if (onPrev) leftArrow.addEventListener('click', onPrev);
    section.appendChild(leftArrow);

    reviews.forEach((r) => section.appendChild(createReviewCard(r)));

    const right = document.createElement('div');
    right.innerHTML = ARROW_RIGHT;
    const rightArrow = right.firstElementChild;
    if (onNext) rightArrow.addEventListener('click', onNext);
    section.appendChild(rightArrow);

    return section;
};
