export const createPagination = ({
    current = 1,
    total = 5,
    onPageChange = null,
} = {}) => {
    const nav = document.createElement('nav');
    nav.className = 'pagination';
    nav.setAttribute('aria-label', 'Пагинация');

    const makeBtn = (label, page, opts = {}) => {
        const b = document.createElement('button');
        b.className = 'pagination__btn' + (opts.active ? ' pagination__btn--active' : '');
        b.type = 'button';
        b.textContent = label;
        if (opts.disabled) b.disabled = true;
        if (opts.aria) b.setAttribute('aria-label', opts.aria);
        if (!opts.disabled && onPageChange) b.addEventListener('click', () => onPageChange(page));
        return b;
    };

    nav.appendChild(makeBtn('‹', current - 1, { disabled: current <= 1, aria: 'Предыдущая страница' }));
    for (let i = 1; i <= total; i++) {
        nav.appendChild(makeBtn(String(i), i, { active: i === current }));
    }
    nav.appendChild(makeBtn('›', current + 1, { disabled: current >= total, aria: 'Следующая страница' }));

    return nav;
};
