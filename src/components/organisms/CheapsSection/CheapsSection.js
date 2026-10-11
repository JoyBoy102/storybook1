import { createChip } from '../../atoms/Chip/Chip';

export const DEFAULT_CHEAPS = [
    'Python', 'Веб-разработка', 'Data Science', 'Мобильная разработка', 'DevOps',
    'Кибербезопасность', 'AI', 'UI/UX Дизайн', 'QA', 'Аналитика данных',
    'Java', 'Frontend-разработка', 'Машинное обучение', 'GameDev', 'Встраиваемые системы',
    'Go', 'Технический писатель', 'Продуктовый менеджмент', 'C++', 'Базы данных',
    'Rust', 'Облачные технологии', 'Big Data', 'Системный администратор', 'No-code',
    'Тестирование ПО', 'SQL', 'Разработка игр', 'Kotlin', 'Архитектура ПО',
];

export const createCheapsSection = ({
    items = DEFAULT_CHEAPS,
    activeIndex = -1,
    onSelect = null,
} = {}) => {
    const section = document.createElement('section');
    section.className = 'popular-courses__cheaps';

    items.forEach((label, i) => {
        const chip = createChip({
            label,
            active: i === activeIndex,
            onClick: onSelect ? () => onSelect(label, i) : null,
        });
        section.appendChild(chip);
    });

    return section;
};
