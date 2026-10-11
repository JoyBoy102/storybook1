export const createCard = ({
    title = 'Название курса',
    text = 'Описание',
    imageUrl = '',
    onClick = null,
} = {}) => {
    const card = document.createElement('div');
    card.className = 'card';

    // Картинка слева (или placeholder)
    if (imageUrl) {
        const img = document.createElement('img');
        img.className = 'card__image';
        img.src = imageUrl;
        img.alt = title;
        card.appendChild(img);
    } else {
        const placeholder = document.createElement('svg');
        placeholder.setAttribute('viewBox', '0 0 126 138');
        placeholder.setAttribute('fill', 'none');
        placeholder.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        placeholder.setAttribute('aria-hidden', 'true');
        placeholder.setAttribute('focusable', 'false');
        placeholder.innerHTML = '<rect width="126" height="138" fill="#D9D9D9" />';
        card.appendChild(placeholder);
    }

    const textContainer = document.createElement('div');
    textContainer.className = 'card__text';

    const titleSpan = document.createElement('span');
    titleSpan.textContent = title;

    const descSpan = document.createElement('span');
    descSpan.textContent = text;

    textContainer.appendChild(titleSpan);
    textContainer.appendChild(descSpan);
    card.appendChild(textContainer);

    if (onClick) {
        card.addEventListener('click', onClick);
    }

    return card;
};
