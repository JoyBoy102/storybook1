const FOOTER_LOGO = `
<svg width="89" height="89" viewBox="0 0 89 89" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M44.1068 0C68.7377 0 88.4998 19.7621 88.4998 44.1068C88.5188 49.9419 87.3835 55.7231 85.1593 61.1177C82.9351 66.5123 79.6659 71.4137 75.5398 75.5398C71.4137 79.6659 66.5123 82.9351 61.1177 85.1593C55.7231 87.3835 49.9419 88.5188 44.1068 88.4998C19.7621 88.4998 0 68.7377 0 44.1068C0 19.7621 19.7621 0 44.1068 0ZM54.9902 52.6988C50.1213 59 41.2426 60.1453 35.2281 55.2764C29.2136 50.6941 28.3541 41.8154 33.223 35.5143C38.3785 29.4998 47.2571 28.3541 53.2717 32.9368C59.2862 37.8056 60.1456 46.6843 54.9902 52.6988ZM31.5049 81.6262L48.4028 65.3007C42.1017 66.733 35.5143 65.5873 30.3592 61.2909C24.3447 56.7086 21.7668 48.9756 22.6259 41.8154L7.44643 58.4271C7.44643 58.4271 5.4417 54.7039 4.86887 47.83L31.5049 26.9222C39.5241 21.194 50.4079 20.9077 58.1405 26.9222C66.733 33.7962 68.4511 46.3981 62.1503 55.8492L42.6745 83.6309C39.8107 83.6309 34.0824 82.7718 31.5049 81.6262Z" fill="#00B3E0" />
</svg>`;

const CONTACTS_ICON = `
<svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
    <path d="M17.5196 32.9366C26.1778 32.9366 33.1967 25.9177 33.1967 17.2595C33.1967 8.60127 26.1778 1.5824 17.5196 1.5824C8.8614 1.5824 1.84253 8.60127 1.84253 17.2595C1.84253 25.9177 8.8614 32.9366 17.5196 32.9366Z" stroke="currentColor" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M19.9596 17.9333C24.0458 18.7033 25.7389 20.7698 25.7389 20.7698C26.4404 21.9853 25.7389 23.6573 25.7389 23.6573C23.3692 26.6075 19.7736 26.9174 17.5015 26.9174C15.2302 26.9174 11.6347 26.6075 9.26488 23.6573C9.26488 23.6573 8.56343 21.9853 9.26488 20.7698C9.26488 20.7698 10.958 18.7041 15.0443 17.9333" stroke="currentColor" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M17.5016 18.704C20.1756 18.704 22.3432 16.2148 22.3432 13.1441C22.3432 10.0735 20.1756 7.58423 17.5016 7.58423C14.8276 7.58423 12.6599 10.0735 12.6599 13.1441C12.6599 16.2148 14.8276 18.704 17.5016 18.704Z" stroke="currentColor" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" />
</svg>`;

export const createFooter = ({
    disclaimer = 'NextStep не оказывает образовательных услуг',
    copyright = '© 2026 NextStep',
    brandName = 'NextStep',
    contactsTitle = 'Наши контакты',
    contacts = ['Telegram', '+798****5805', 'MAX', 'hypuk456@mail.ru', 'VK'],
} = {}) => {
    const footer = document.createElement('footer');
    footer.className = 'site-footer';

    const first = document.createElement('div');
    first.className = 'footer-first-part';
    const disclaimerSpan = document.createElement('span');
    disclaimerSpan.textContent = disclaimer;
    const copySpan = document.createElement('span');
    copySpan.textContent = copyright;
    first.appendChild(disclaimerSpan);
    first.appendChild(copySpan);

    const logo = document.createElement('div');
    logo.className = 'footer-logo';
    logo.innerHTML = FOOTER_LOGO;
    const brandSpan = document.createElement('span');
    brandSpan.textContent = brandName;
    logo.appendChild(brandSpan);

    const contactsBlock = document.createElement('div');
    contactsBlock.className = 'contacts-block';

    const contactsLogo = document.createElement('div');
    contactsLogo.className = 'our-contacts-logo';
    contactsLogo.innerHTML = CONTACTS_ICON;
    const ctSpan = document.createElement('span');
    ctSpan.textContent = contactsTitle;
    contactsLogo.appendChild(ctSpan);
    contactsBlock.appendChild(contactsLogo);

    const contactsList = document.createElement('div');
    contactsList.className = 'contacts';
    contacts.forEach((c) => {
        const s = document.createElement('span');
        s.textContent = c;
        contactsList.appendChild(s);
    });
    contactsBlock.appendChild(contactsList);

    footer.appendChild(first);
    footer.appendChild(logo);
    footer.appendChild(contactsBlock);

    return footer;
};
