import { Images } from '@assets/images';
import React from 'react';

type Props = {};

const FilterPanelHeading = (props: Props) => {
  const selectData = [
    { field: 'similar', label: 'Most Relevant', value: '' },
    { field: 'review', label: 'Most Reviewed', value: '' },
    { field: 'rating', label: 'Highest Rated', value: '' },
    { field: 'news', label: 'Newest', value: '' },
  ];
  const handleClickSelect = (value: string) => {
    // handle click
    // console.log(value);
  };
  return (
    <>
      <div className="filter-panel--heading--DCVJ_">
        <div className="filter-button-container--button-bar--RLdEH">
          <button type="button" className="ud-btn ud-btn-large ud-btn-secondary ud-heading-md">
            <Images.IoFilterOutline className="ud-icon ud-icon-small" />
            <span>Filter</span>
            <span>(1)</span>
          </button>
          <div className="ud-compact-form-group ud-form-group">
            <div className="ud-compact-form-control-container ud-compact-form-control-container-active">
              <div className="ud-select-container ud-select-container-large">
                <select className="ud-select ud-text-md ud-compact-form-control">
                  {selectData.map((element) => (
                    <option value={element.field} onClick={() => handleClickSelect(element.value)}>
                      {element.label}
                    </option>
                  ))}
                  <option value="most-reviewed">Most Reviewed</option>
                  <option value="highest-rated">Highest Rated</option>
                  <option value="newest">Newest</option>
                </select>
                <div className="ud-select-icon-container ud-select-icon-right">
                  <Images.MdKeyboardArrowDown className="ud-icon ud-icon-small ud-icon-color-neutral" />
                </div>
              </div>
              <label className="ud-form-label ud-heading-sm">
                <span className="ud-compact-form-label-content">
                  <span className="ud-compact-form-label-text">Sort by</span>
                </span>
              </label>
            </div>
          </div>
          <button
            type="button"
            className="ud-btn ud-btn-large ud-btn-ghost ud-heading-md filter-button-container--filter-clear--1y09G"
          >
            <span>Clear filters</span>
          </button>
        </div>
        <span className="ud-heading-md filter-panel--item-count--1Cj0H" role="status">
          4,602 results
        </span>
      </div>
    </>
  );
};

export default FilterPanelHeading;
