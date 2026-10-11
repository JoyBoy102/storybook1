export const createCheckbox = ({
    checked = false,
    disabled = false,
    label = '',
    name = '',
} = {}) => {
    const container = document.createElement('label');
    container.className = 'checkbox-label';

    const checkbox = document.createElement('input');
    checkbox.className = 'checkbox';
    checkbox.type = 'checkbox';
    checkbox.checked = checked;
    checkbox.disabled = disabled;
    if (name) checkbox.name = name;

    const checkboxCustom = document.createElement('span');
    checkboxCustom.className = 'checkbox-custom';

    container.appendChild(checkbox);
    container.appendChild(checkboxCustom);

    if (label) {
        const labelText = document.createElement('span');
        labelText.className = 'checkbox-text';
        labelText.textContent = label;
        container.appendChild(labelText);
    }

    return container;
};
