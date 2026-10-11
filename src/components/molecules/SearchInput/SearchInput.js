export const createSearchInput = ({
    placeholder = 'Введите название курса или навык, который хотите освоить',
    onSearch = null,
    ariaLabel = 'Поиск курса по названию или навыку',
} = {}) => {
    const container = document.createElement('div');
    container.className = 'search';

    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = placeholder;
    input.setAttribute('aria-label', ariaLabel);

    const button = document.createElement('button');
    button.type = 'button';
    button.setAttribute('aria-label', 'Найти курс');
    button.innerHTML = `
        <svg viewBox="0 0 48 45" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
            <path d="M22 31.5C28.0751 31.5 33 26.5751 33 20.5C33 14.4249 28.0751 9.5 22 9.5C15.9249 9.5 11 14.4249 11 20.5C11 26.5751 15.9249 31.5 22 31.5Z" stroke="#5A6B7D" />
            <path d="M30 28.5L38 36.5" stroke="#5A6B7D" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    `;

    if (onSearch) {
        const handleSearch = () => onSearch(input.value);
        button.addEventListener('click', handleSearch);
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') handleSearch();
        });
    }

    container.appendChild(input);
    container.appendChild(button);

    return container;
};
