import { createCourseCardsSection, DEFAULT_COURSES } from './CourseCardsSection';
import './CourseCardsSection.css';

export default {
    title: 'Organisms/CourseCardsSection',
    tags: ['autodocs'],
    parameters: { layout: 'fullscreen' },
};

export const Default = {
    render: () => createCourseCardsSection(),
};

export const WithRealData = {
    render: () => createCourseCardsSection({
        courses: [
            { title: 'Python с нуля', text: 'Основы программирования и практика' },
            { title: 'Frontend-разработка', text: 'HTML, CSS, JavaScript, React' },
            { title: 'Data Science', text: 'Анализ данных и машинное обучение' },
        ],
    }),
};
