import Carousel from '@app/components/carousel';
import TopCategories from './top-categories.component';
import FeaturedTopic from './featured-topic.component';
import AppBussiness from './app-bussiness.component';
import TeachOnSection from './teach-on-section.component';
import BoardCourses from './board-course.component';
import PartnerBanner from './partner-banner.component';
import { carouselItems } from '@app/common/constants';
import LearnView from './learner-view.component';

type Props = {};

const Homepage = (props: Props) => {
  return (
    <div>
      <Carousel items={carouselItems} children />
      <PartnerBanner />
      <div className="ud-container component-margin discovery-units--discovery-units--SMDRP">
        <BoardCourses />
        <LearnView />
      </div>
      <TopCategories />
      <FeaturedTopic />
      <AppBussiness />
      <TeachOnSection />
    </div>
  );
};

export default Homepage;
