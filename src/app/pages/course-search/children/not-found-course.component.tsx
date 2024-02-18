import React from 'react';

type Props = {};

const NotFoundCourse = (props: Props) => {
  return (
    <>
      <div className="ud-container ud-page-wrapper search--container--2jPTs">
        <h1 className="ud-heading-xl" data-purpose="safely-set-inner-html:search:no-results-for-query">
          Sorry, we couldn't find any results for <q>leadstoyou</q>
        </h1>
        <div>
          <h2 className="ud-heading-lg">Try adjusting your search. Here are some ideas:</h2>
          <ul>
            <li>Make sure all words are spelled correctly</li>
            <li>Try different search terms</li>
            <li>Try more general search terms</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NotFoundCourse;
