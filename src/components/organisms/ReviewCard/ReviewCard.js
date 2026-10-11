export const createReviewCard = ({
    nickname = 'Ник пользователя',
    rating = 5,
    resourceName = 'Название ресурса с курсом',
    text = 'Текст отзыва',
} = {}) => {
    const review = document.createElement('div');
    review.className = 'review';

    const ans = document.createElement('div');
    ans.className = 'avatar-nick-stars';

    const avatar = document.createElement('svg');
    avatar.setAttribute('width', '57');
    avatar.setAttribute('height', '57');
    avatar.setAttribute('viewBox', '0 0 57 57');
    avatar.setAttribute('fill', 'none');
    avatar.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    avatar.setAttribute('aria-hidden', 'true');
    avatar.setAttribute('focusable', 'false');
    avatar.innerHTML = '<circle cx="28.5" cy="28.5" r="28.5" fill="#D9D9D9" />';

    const nickStars = document.createElement('div');
    nickStars.className = 'nick-stars';

    const nick = document.createElement('span');
    nick.textContent = nickname;

    const stars = document.createElement('div');
    stars.className = 'review-stars';
    for (let i = 0; i < 5; i++) {
        const s = document.createElement('svg');
        s.setAttribute('width', '23');
        s.setAttribute('height', '19');
        s.setAttribute('viewBox', '0 0 23 19');
        s.setAttribute('fill', 'none');
        s.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        s.setAttribute('aria-hidden', 'true');
        s.setAttribute('focusable', 'false');
        s.innerHTML = '<path d="M11.4127 0L14.1069 7.25532H22.8254L15.772 11.7394L18.4661 18.9947L11.4127 14.5106L4.3593 18.9947L7.05346 11.7394L4.19617e-05 7.25532H8.71855L11.4127 0Z" fill="#D9D9D9" />';
        stars.appendChild(s);
    }

    nickStars.appendChild(nick);
    nickStars.appendChild(stars);
    ans.appendChild(avatar);
    ans.appendChild(nickStars);

    const can = document.createElement('div');
    can.className = 'course-avatar-name';

    const resAvatar = document.createElement('svg');
    resAvatar.setAttribute('width', '57');
    resAvatar.setAttribute('height', '57');
    resAvatar.setAttribute('viewBox', '0 0 57 57');
    resAvatar.setAttribute('fill', 'none');
    resAvatar.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    resAvatar.setAttribute('aria-hidden', 'true');
    resAvatar.setAttribute('focusable', 'false');
    resAvatar.innerHTML = '<circle cx="28.5" cy="28.5" r="28.5" fill="#D9D9D9" />';

    const resName = document.createElement('span');
    resName.textContent = resourceName;

    can.appendChild(resAvatar);
    can.appendChild(resName);

    const rtext = document.createElement('span');
    rtext.className = 'review-text';
    rtext.textContent = text;

    review.appendChild(ans);
    review.appendChild(can);
    review.appendChild(rtext);

    return review;
};
