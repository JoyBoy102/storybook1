export const createSpinner = ({
    size = 'md',
    label = 'Загрузка',
} = {}) => {
    const wrap = document.createElement('div');
    wrap.className = `spinner spinner--${size}`;
    wrap.setAttribute('role', 'status');
    wrap.setAttribute('aria-label', label);
    return wrap;
};
