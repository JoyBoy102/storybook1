export const createTabs = ({
    tabs = ['Описание', 'Отзывы', 'Программа'],
    activeIndex = 0,
    onTabChange = null,
} = {}) => {
    const container = document.createElement('div');
    container.className = 'tabs';
    container.setAttribute('role', 'tablist');

    tabs.forEach((label, i) => {
        const tab = document.createElement('button');
        tab.className = 'tabs__tab' + (i === activeIndex ? ' tabs__tab--active' : '');
        tab.type = 'button';
        tab.textContent = label;
        tab.setAttribute('role', 'tab');
        tab.setAttribute('aria-selected', String(i === activeIndex));
        if (onTabChange) tab.addEventListener('click', () => onTabChange(label, i));
        container.appendChild(tab);
    });

    return container;
};
