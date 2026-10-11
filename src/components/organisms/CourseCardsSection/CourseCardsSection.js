import { createCard } from '../../molecules/Card/Card';

export const DEFAULT_COURSES = [
    { title: 'Название курса', text: 'Описание' },
    { title: 'Название курса', text: 'Описание' },
    { title: 'Название курса', text: 'Описание' },
    { title: 'Название курса', text: 'Описание' },
    { title: 'Название курса', text: 'Описание' },
    { title: 'Название курса', text: 'Описание' },
];

export const createCourseCardsSection = ({
    courses = DEFAULT_COURSES,
    onCardClick = null,
} = {}) => {
    const section = document.createElement('div');
    section.className = 'course-cards reveal is-visible';

    courses.forEach((c) => {
        section.appendChild(createCard({
            title: c.title,
            text: c.text,
            imageUrl: c.imageUrl || '',
            onClick: onCardClick ? () => onCardClick(c) : null,
        }));
    });

    return section;
};
