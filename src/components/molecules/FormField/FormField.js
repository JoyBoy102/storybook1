export const createFormField = ({
    label = 'Поле',
    type = 'text',
    placeholder = '',
    error = '',
    helper = '',
    required = false,
    value = '',
} = {}) => {
    const wrap = document.createElement('div');
    wrap.className = `form-field${error ? ' form-field--error' : ''}`;

    const labelEl = document.createElement('label');
    labelEl.className = 'form-field__label';
    labelEl.textContent = label + (required ? ' *' : '');
    wrap.appendChild(labelEl);

    const input = document.createElement('input');
    input.className = 'form-field__input';
    input.type = type;
    input.placeholder = placeholder;
    input.value = value;
    wrap.appendChild(input);

    if (error) {
        const err = document.createElement('span');
        err.className = 'form-field__error';
        err.textContent = error;
        wrap.appendChild(err);
    } else if (helper) {
        const help = document.createElement('span');
        help.className = 'form-field__helper';
        help.textContent = helper;
        wrap.appendChild(help);
    }

    return wrap;
};
