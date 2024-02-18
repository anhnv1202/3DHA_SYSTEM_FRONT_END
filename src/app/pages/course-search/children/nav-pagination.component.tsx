import { Images } from '@assets/images';
import React from 'react';
import { Link } from 'react-router-dom';

type Props = {};

const NavPagination = (props: Props) => {
  const navData = { currentPage: 1, totalPage: 22 };
  return (
    <>
      <nav className="pagination-module--container--1Dmb0">
        <Link
          className={`ud-btn ud-btn-medium ud-btn-secondary ud-btn-round ud-heading-sm ${
            navData.currentPage === 1 && 'ud-btn-disabled'
          } ud-btn-icon ud-btn-icon-medium ud-btn-icon-round pagination-module--prev--1K-2u`}
          to={''}
        >
          <Images.FaAngleLeft className="ud-icon ud-icon-small" />
        </Link>
        <Link
          to="/courses/search/?q=ai&amp;ratings=4.5&amp;sort=relevance&amp;src=ukw"
          className="ud-btn ud-btn-medium ud-btn-ghost ud-heading-sm pagination-module--page--1Ujec pagination-module--active--2doua"
        >
          1
        </Link>
        <Link
          to="/courses/search/?p=2&amp;q=ai&amp;ratings=4.5&amp;sort=relevance&amp;src=ukw"
          className="ud-btn ud-btn-medium ud-btn-ghost ud-heading-sm pagination-module--page--1Ujec"
        >
          2
        </Link>
        <Link
          to="/courses/search/?p=3&amp;q=ai&amp;ratings=4.5&amp;sort=relevance&amp;src=ukw"
          className="ud-btn ud-btn-medium ud-btn-ghost ud-heading-sm pagination-module--page--1Ujec"
        >
          3
        </Link>

        <Images.BsThreeDotsVertical className="ud-icon ud-icon-medium ud-icon-color-neutral pagination-module--ellipsis--lXlPS" />

        <Link
          to="/courses/search/?p=3&amp;q=ai&amp;ratings=4.5&amp;sort=relevance&amp;src=ukw"
          className="ud-btn ud-btn-medium ud-btn-ghost ud-heading-sm pagination-module--page--1Ujec"
        >
          231
        </Link>

        <Link
          to="/courses/search/?p=2&amp;q=ai&amp;ratings=4.5&amp;sort=relevance&amp;src=ukw"
          className={`ud-btn ud-btn-medium ud-btn-secondary ud-btn-round ud-heading-sm ${
            navData.currentPage === navData.totalPage && 'ud-btn-disabled'
          } ud-btn-icon ud-btn-icon-medium ud-btn-icon-round pagination-module--prev--1K-2u`}
        >
          <Images.FaAngleRight className="ud-icon ud-icon-small" />
        </Link>
      </nav>
    </>
  );
};

export default NavPagination;
