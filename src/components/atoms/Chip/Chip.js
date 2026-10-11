export const createChip = ({
    label = 'Chip',
    active = false,
    onClick = null,
    disabled = false,
} = {}) => {
    const chip = document.createElement('button');
    chip.className = active ? 'chip chip--active' : 'chip';
    chip.textContent = label;
    chip.disabled = disabled;
    chip.type = 'button';

    if (onClick) {
        chip.addEventListener('click', onClick);
    }

    return chip;
};
