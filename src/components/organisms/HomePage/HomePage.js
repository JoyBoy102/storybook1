import { createHeader } from '../Header/Header';
import { createFooter } from '../Footer/Footer';
import { createBanner } from '../Banner/Banner';
import { createCheapsSection } from '../CheapsSection/CheapsSection';
import { createCourseCardsSection } from '../CourseCardsSection/CourseCardsSection';
import { createReviewsSection } from '../ReviewsSection/ReviewsSection';
import { createSearchInput } from '../../molecules/SearchInput/SearchInput';

export const createHomePage = ({} = {}) => {
    const container = document.createElement('div');
    container.className = 'container';

    // Header
    const header = createHeader();
    container.appendChild(header);

    const main = document.createElement('main');

    // Banner
    main.appendChild(createBanner());

    // Search
    const searchContainer = document.createElement('div');
    searchContainer.className = 'search__container';
    searchContainer.appendChild(createSearchInput());
    main.appendChild(searchContainer);

    // Cheaps
    const popular = document.createElement('section');
    popular.className = 'popular-courses';
    popular.appendChild(createCheapsSection());
    popular.appendChild(createCourseCardsSection());
    main.appendChild(popular);

    // Reviews
    main.appendChild(createReviewsSection());

    container.appendChild(main);

    // Footer
    container.appendChild(createFooter());

    return container;
};
