import React from 'react';
import HeadingCourseSearch from './children/heading-course-search.component';
import FilterPanelHeading from './children/filter-panel-heading.component';
import SlideBarFilter from './children/slide-bar-filter.component';
import CourseSearchedList from './children/course-searched-list.component';
import NavPagination from './children/nav-pagination.component';

type Props = {};

const CourseSearch = (props: Props) => {
  return (
    <>
      <div className="ud-app-loader ud-component--search--search ud-app-loaded">
        <div className="ud-container ud-page-wrapper">
          <HeadingCourseSearch foundCourses={99} searchName={'3123'} />
          <div className="course-directory--container--2H7uM">
            <div data-purpose="desktop-filter-container">
              <FilterPanelHeading />
              <div className="filter-panel--filtered-paginated-course-list--1XQjp">
                <div className="filter-panel--filtered-course-list--2_47Y">
                  <SlideBarFilter />
                  <CourseSearchedList />
                </div>
              </div>
            </div>
            <NavPagination />
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseSearch;
