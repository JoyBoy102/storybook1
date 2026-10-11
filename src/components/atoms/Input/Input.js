export const createInput = ({
    type = 'text',
    placeholder = 'Введите текст',
    value = '',
    disabled = false,
    ariaLabel = '',
} = {}) => {
    const input = document.createElement('input');
    input.className = 'input';
    input.type = type;
    input.placeholder = placeholder;
    input.value = value;
    input.disabled = disabled;
    if (ariaLabel) input.setAttribute('aria-label', ariaLabel);
    return input;
};
