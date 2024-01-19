import Carousel from '@app/components/carousel';
import TopCategories from './children/top-categories.component';
import FeaturedTopic from './children/featured-topic.component';
import AppBussiness from './children/app-bussiness.component';
import TeachOnSection from './children/teach-on-section.component';
import BoardCourses from './children/board-course.component';
import PartnerBanner from './children/partner-banner.component';
import { carouselItems } from '@app/common/constants';
import LearnView from './children/learner-view.component';

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
