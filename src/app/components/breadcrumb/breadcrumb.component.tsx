import { BreadcrumbProps } from '@app/types';
import { Images } from '@assets/images';
import React from 'react';
import { Link } from 'react-router-dom';

type Props = { data: BreadcrumbProps[] };

const Breadcrumb = ({ data }: Props) => {
  return (
    <>
      <div className="course-landing-page__main-content course-landing-page__topic-menu">
        <div className="topic-menu topic-menu-condensed ud-breadcrumb">
          {data.map((item, index) => (
            <React.Fragment key={index}>
              <Link className="ud-heading-sm" to={item.path}>
                {item.title}
              </Link>
              {index !== data.length - 1 && (
                <Images.FaAngleRight className="ud-icon ud-icon-xsmall ud-icon-color-neutral ud-breadcrumb-icon" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default Breadcrumb;
