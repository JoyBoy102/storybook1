import { createTooltip } from './Tooltip';
import './Tooltip.css';

export default {
    title: 'Molecules/Tooltip',
    tags: ['autodocs'],
    argTypes: {
        position: { control: { type: 'select' }, options: ['top', 'bottom'] },
    },
};

export const Top = { args: { text: 'Это подсказка', position: 'top' }, render: (a) => createTooltip(a) };
export const Bottom = { args: { text: 'Ещё подсказка', position: 'bottom' }, render: (a) => createTooltip(a) };
