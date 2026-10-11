import { createHomePage } from './HomePage';
import './HomePage.css';
import '../../atoms/Button/Button.css';
import '../../atoms/Chip/Chip.css';
import '../../molecules/Card/Card.css';
import '../../molecules/SearchInput/SearchInput.css';
import '../Header/Header.css';
import '../Footer/Footer.css';
import '../Banner/Banner.css';
import '../CheapsSection/CheapsSection.css';
import '../CourseCardsSection/CourseCardsSection.css';
import '../ReviewCard/ReviewCard.css';
import '../ReviewsSection/ReviewsSection.css';

export default {
    title: 'Pages/HomePage',
    tags: ['autodocs'],
    parameters: { layout: 'fullscreen' },
};

export const Default = {
    render: () => createHomePage(),
};
