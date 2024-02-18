import { LocalesFullText } from '@app/common/constants';
import { Images } from '@assets/images';
import React from 'react';

type Props = {};

const SlideBarFilter = (props: Props) => {
  const ratingsConfig = [
    { label: '4.5 & up', value: 4.5 },
    { label: '4.0 & up', value: 4.0 },
    { label: '3.5 & up', value: 3.5 },
    { label: '3.0 & up', value: 3.0 },
  ];
  const videoDurationConfig = [
    { label: '0-1 Hour', value: 'extraShort' },
    { label: '1-3 Hours', value: 'short' },
    { label: '3-6 Hours', value: 'medium' },
    { label: '6-17 Hours', value: 'long' },
    { label: '17+ Hours', value: 'extraLong' },
  ];
  const priceConfig = [
    { label: 'Paid', value: 'pricePaid' },
    { label: 'Free', value: 'priceFree' },
  ];
  const slidebarData = [
    {
      name: 'Ratings',
      data: ratingsConfig.map((item) => ({
        label: item.label,
        value: item.value,
        count: 3123,
      })),
      isCheckbox: false,
      isShowMore: false,
    },
    {
      name: 'Language',
      data: Object.entries(LocalesFullText).map(([key, value]) => ({
        label: value,
        value: key,
        count: 99,
      })),
      isCheckbox: true,
      isShowMore: false,
    },
    {
      name: 'Video Duration',
      data: videoDurationConfig.map((item) => ({
        label: item.label,
        value: item.value,
        count: 3123,
      })),
      isCheckbox: true,
      isShowMore: true,
    },
    {
      name: 'Price',
      data: priceConfig.map((item) => ({
        label: item.label,
        value: item.value,
        count: 3123,
      })),
      isCheckbox: true,
      isShowMore: false,
    },
  ];
  return (
    <>
      <div className="filter-panel--sidebar--ujDKQ">
        <form id="filter-form">
          <div>
            {slidebarData.map((item, index) => (
              <div className="accordion-panel-module--panel--3_kkG" key={index}>
                <span data-type="checkbox" data-checked="checked" style={{ display: 'none' }}></span>
                <div className="ud-btn ud-btn-large ud-btn-link ud-heading-lg ud-accordion-panel-toggler accordion-panel-module--panel-toggler--1RjML accordion-panel-module--outer-panel-toggler--AgeEB">
                  <h3 className="ud-accordion-panel-heading">
                    <button className="ud-btn ud-btn-large ud-btn-link ud-heading-lg js-panel-toggler accordion-panel-module--panel-toggler--1RjML">
                      <span className="ud-accordion-panel-title">{item.name}</span>
                    </button>
                  </h3>
                  <Images.MdKeyboardArrowDown className="ud-icon ud-icon-small ud-icon-color-neutral accordion-panel-module--expand-icon--2DZax" />
                </div>
                <div className="accordion-panel-module--content-wrapper--DIUt_">
                  <div className="ud-accordion-panel-content accordion-panel-module--content--jkZai">
                    <div className="show-more-module--container--2QPRN">
                      <span data-type="checkbox" data-checked="checked" style={{ display: 'none' }}></span>
                      <div className="show-more-module--content--cjTh0" style={{ maxHeight: '14.5rem' }}>
                        <div>
                          <div>
                            {item.data.map((element, index) =>
                              !item.isCheckbox ? (
                                <label className="ud-toggle-input-container ud-text-sm" key={index}>
                                  <input
                                    name={item.name}
                                    className="ud-sr-only ud-real-toggle-input"
                                    type="radio"
                                    value={element.value}
                                  />
                                  <span className="ud-fake-toggle-input ud-fake-toggle-radio ud-fake-toggle-radio-small"></span>
                                  <span className="star-rating-module--star-wrapper--VHfnS star-rating-module--medium--3kDsb">
                                    <Images.IoMdStar color="yellow" width={'none'} />
                                    <Images.IoMdStar color="yellow" width={'none'} />
                                    <Images.IoMdStar color="yellow" width={'none'} />
                                    <Images.IoMdStar color="yellow" width={'none'} />
                                    <Images.IoMdStarHalf color="yellow" width={'none'} />
                                  </span>
                                  <span className="filter--label--2IkUx" aria-hidden="true">
                                    {element.label}
                                  </span>
                                  <span className="filter--count--2rR0I">{element.count}</span>
                                </label>
                              ) : (
                                <>
                                  <label className="ud-toggle-input-container ud-text-sm">
                                    <input
                                      name={item.name}
                                      className="ud-sr-only ud-real-toggle-input"
                                      type="checkbox"
                                      value={element.value}
                                    />
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      className="ud-icon ud-icon-xsmall ud-fake-toggle-input ud-fake-toggle-checkbox"
                                    >
                                      <Images.TiTick />
                                    </svg>
                                    {element.label}
                                    <span className="filter--count--2rR0I">({element.count})</span>
                                  </label>
                                </>
                              ),
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </form>
      </div>
    </>
  );
};

export default SlideBarFilter;
