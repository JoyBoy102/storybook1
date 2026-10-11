export const createBanner = ({
    title = 'Онлайн-курсы со всего интернета',
    subtitle = 'Собрали лучшие онлайн-курсы со всего интернета. Выбирайте, сравнивайте, развивайтесь',
    imageUrl = '',
    imageAlt = 'Иллюстрация с онлайн-курсами NextStep',
} = {}) => {
    const banner = document.createElement('section');
    banner.className = 'banner';

    const text = document.createElement('div');
    text.className = 'banner__text';

    const h1 = document.createElement('h1');
    h1.textContent = title;
    const h2 = document.createElement('h2');
    h2.textContent = subtitle;
    text.appendChild(h1);
    text.appendChild(h2);

    banner.appendChild(text);

    if (imageUrl) {
        const img = document.createElement('img');
        img.className = 'banner__img';
        img.src = imageUrl;
        img.alt = imageAlt;
        img.loading = 'lazy';
        img.decoding = 'async';
        banner.appendChild(img);
    } else {
        const placeholder = document.createElement('div');
        placeholder.className = 'banner__img banner__img--placeholder';
        placeholder.textContent = 'banner_1.jpg';
        banner.appendChild(placeholder);
    }

    return banner;
};
