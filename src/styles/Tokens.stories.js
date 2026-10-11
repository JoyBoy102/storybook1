import './tokens.css';
import './tokens-dark.css';

export default {
    title: 'Foundations/Tokens',
    tags: ['autodocs'],
};

const Swatch = (name, varName) => {
    const el = document.createElement('div');
    el.style.cssText = 'display:flex;flex-direction:column;align-items:center;gap:8px;font-family:monospace;font-size:12px;';
    el.innerHTML = `
        <div style="width:80px;height:80px;background:var(${varName});border-radius:12px;border:1px solid #e5e7eb;"></div>
        <div>${name}</div>
        <div style="color:#6b7280;">${varName}</div>
    `;
    return el;
};

export const Colors = {
    render: () => {
        const wrap = document.createElement('div');
        wrap.style.cssText = 'display:flex;gap:16px;flex-wrap:wrap;';
        const pairs = [
            ['page bg', '--color-bg-page'],
            ['card bg', '--color-bg-card'],
            ['heading', '--color-heading'],
            ['text primary', '--color-text-primary'],
            ['text secondary', '--color-text-secondary'],
            ['border', '--color-border-card'],
            ['primary', '--color-btn-primary-bg'],
            ['secondary', '--color-btn-secondary-bg'],
            ['menu hover', '--color-menu-hover'],
            ['cheap bg', '--color-cheap-bg'],
            ['footer bg', '--color-footer-bg'],
        ];
        pairs.forEach(([name, v]) => wrap.appendChild(Swatch(name, v)));
        return wrap;
    },
};

export const Spacing = {
    render: () => {
        const wrap = document.createElement('div');
        wrap.style.cssText = 'display:flex;flex-direction:column;gap:12px;';
        [1, 2, 3, 4, 5, 6, 8, 12, 16].forEach((n) => {
            const row = document.createElement('div');
            row.style.cssText = 'display:flex;align-items:center;gap:16px;';
            row.innerHTML = `
                <code style="width:80px;">space-${n}</code>
                <div style="height:16px;width:var(--space-${n});background:var(--color-btn-primary-bg);border-radius:4px;"></div>
                <small style="color:#6b7280;">var(--space-${n})</small>
            `;
            wrap.appendChild(row);
        });
        return wrap;
    },
};

export const Typography = {
    render: () => {
        const wrap = document.createElement('div');
        wrap.style.cssText = 'display:flex;flex-direction:column;gap:12px;';
        const sizes = [
            ['page-title-hero', '--font-page-title-hero', '40px'],
            ['paragraph', '--font-paragraph', '36px'],
            ['section-title', '--font-section-title', '28px'],
            ['label-large', '--font-label-large', '24.75px'],
            ['card-title', '--font-card-title', '22.5px'],
            ['label', '--font-label', '15.75px'],
            ['button-text', '--font-button-text', '14px'],
            ['review', '--font-review', '11.25px'],
        ];
        sizes.forEach(([name, v, px]) => {
            const row = document.createElement('div');
            row.style.cssText = 'display:flex;align-items:baseline;gap:16px;';
            row.innerHTML = `
                <code style="width:120px;">${name}</code>
                <span style="font-size:var(${v});">Образец текста (${px})</span>
            `;
            wrap.appendChild(row);
        });
        return wrap;
    },
};

export const Radii = {
    render: () => {
        const wrap = document.createElement('div');
        wrap.style.cssText = 'display:flex;gap:24px;flex-wrap:wrap;';
        [['sm', '4px'], ['md', '8px'], ['lg', '16px'], ['pill', '999px']].forEach(([name, v]) => {
            const box = document.createElement('div');
            box.style.cssText = `width:100px;height:60px;background:var(--color-btn-secondary-bg);border-radius:${v};display:flex;align-items:center;justify-content:center;color:#fff;font-family:monospace;font-size:12px;`;
            box.textContent = `radius-${name}`;
            wrap.appendChild(box);
        });
        return wrap;
    },
};
