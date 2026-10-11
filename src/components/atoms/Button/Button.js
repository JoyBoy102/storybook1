export const createButton = ({
    variant = 'primary',
    size = 'md',
    label = 'Кнопка',
    disabled = false,
} = {}) => {
    const btn = document.createElement('button');
    btn.className = `btn btn--${variant} btn--${size}`;
    btn.textContent = label;
    btn.disabled = disabled;
    btn.type = 'button';
    return btn;
};