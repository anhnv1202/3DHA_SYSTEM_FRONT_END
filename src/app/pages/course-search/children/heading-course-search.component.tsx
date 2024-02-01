import { useTranslation } from 'react-i18next';

type Props = {
  foundCourses: number;
  searchName: string;
};

const HeadingCourseSearch = ({ foundCourses, searchName }: Props) => {
  const { t } = useTranslation();
  return (
    <>
      <header className="search--header-container--1q3H-">
        <h1 className="ud-heading-xl search--header-title--Et0Ha">
          {foundCourses.toLocaleString('en-US')} {t('courseSearch.heading.resultFor')} “{searchName}”
        </h1>
      </header>
    </>
  );
};

export default HeadingCourseSearch;
