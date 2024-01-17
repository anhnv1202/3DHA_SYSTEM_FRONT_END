import { Images } from '@assets/images';
import React from 'react';

type Props = {};

const Breadcrumb = (props: Props) => {
  return (
    <>
      <div className="course-landing-page__main-content course-landing-page__topic-menu">
        <div className="topic-menu topic-menu-condensed ud-breadcrumb">
          <a className="ud-heading-sm" href="/courses/development/">
            Development
          </a>
          <Images.FaAngleRight className="ud-icon ud-icon-xsmall ud-icon-color-neutral ud-breadcrumb-icon" />
          <a className="ud-heading-sm" href="/courses/development/data-science/">
            Data Science
          </a>
          <Images.FaAngleRight className="ud-icon ud-icon-xsmall ud-icon-color-neutral ud-breadcrumb-icon" />
          <a className="ud-heading-sm" href="/topic/chatgpt/">
            ChatGPT
          </a>
        </div>
      </div>
    </>
  );
};

export default Breadcrumb;
