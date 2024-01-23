import { useTranslation } from 'react-i18next';

type Props = {};
const coursesData = [
  {
    title: 'Design',
    imageUrl: 'https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg',
    href: '/en/courses/design/',
  },
  {
    title: 'Development',
    imageUrl: 'https://s.udemycdn.com/home/top-categories/lohp-category-development-v2.jpg',
    href: '/en/courses/development/',
  },
  {
    title: 'Marketing',
    imageUrl: 'https://s.udemycdn.com/home/top-categories/lohp-category-marketing-v2.jpg',
    href: '/en/courses/marketing/',
  },
  {
    title: 'IT and Software',
    imageUrl: 'https://s.udemycdn.com/home/top-categories/lohp-category-it-and-software-v2.jpg',
    href: '/en/courses/it-and-software/',
  },
  {
    title: 'Personal Development',
    imageUrl: 'https://s.udemycdn.com/home/top-categories/lohp-category-personal-development-v2.jpg',
    href: '/en/courses/personal-development/',
  },
  {
    title: 'Business',
    imageUrl: 'https://s.udemycdn.com/home/top-categories/lohp-category-business-v2.jpg',
    href: '/en/courses/business/',
  },
  {
    title: 'Photography',
    imageUrl: 'https://s.udemycdn.com/home/top-categories/lohp-category-photography-v2.jpg',
    href: '/en/courses/photography/',
  },
  {
    title: 'Music',
    imageUrl: 'https://s.udemycdn.com/home/top-categories/lohp-category-music-v2.jpg',
    href: '/en/courses/music/',
  },
];

const TopCategories = (props: Props) => {
  const { t } = useTranslation();
  return (
    <section className="ud-container component-margin mb-12">
      <h2 className="ud-heading-xl top-categories--title--oPDku"> {t('homepage.topCategories.title')}</h2>
      <div className="top-categories--desktop-top-categories--15H8Q">
        {coursesData.map((course, index) => (
          <a
            key={index}
            className="top-categories--category-card--15wjg ud-custom-focus-visible category-card--category-card--2aGYD"
            href={course.href}
          >
            <div className="category-card--img-wrapper--1-XAz">
              <img src={course.imageUrl} alt={`Course - ${course.title}`} width="300" height="300" loading="lazy" />
            </div>
            <div className="category-card--category-card-title--3TiqD" data-purpose="category-card-title-link">
              <span className="ud-heading-md ud-focus-visible-target">{course.title}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default TopCategories;
