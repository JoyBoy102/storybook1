export const createTooltip = ({
    text = 'Подсказка',
    position = 'top',
} = {}) => {
    const wrap = document.createElement('span');
    wrap.className = 'tooltip-wrap';

    const trigger = document.createElement('button');
    trigger.className = 'tooltip-trigger';
    trigger.type = 'button';
    trigger.textContent = '?';

    const tip = document.createElement('span');
    tip.className = `tooltip tooltip--${position}`;
    tip.setAttribute('role', 'tooltip');
    tip.textContent = text;

    wrap.appendChild(trigger);
    wrap.appendChild(tip);

    return wrap;
};
