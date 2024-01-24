type Props = {};

const CourseChapter = (props: Props) => {
  return (
    <>
      <div className=" p-[10px] box-border ">
        <div className="max-w-1100 mx-auto box-border ">
          <div className="w-40 float-lef">
            <div className="relative top-10 font-bold">Nguyen Thi Dieu Linh </div>
          </div>
          <div className="right">
            <div className="dropdown preview-dropdown">
              <button
                type="button"
                className="btn btn-default"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-eye icon"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"></path>
                  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"></path>
                </svg>
                Preview
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a href="https://payhip.com/DungBumVipPro/b-account/course/ACEtH" target="_blank" rel="noreferrer">
                    All course lessons
                  </a>
                </li>
                <li>
                  <a
                    href="https://payhip.com/DungBumVipPro/b-account/course/ACEtH?preview_type=student"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Course as enrolled student
                  </a>
                </li>
              </ul>
            </div>
            <a href="#!" className="btn btn-primary" data-toggle="modal" data-target="#add-section-modal">
              <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
              New Section
            </a>
          </div>
          <div className="clearfix"></div>
        </div>
      </div>
      <div className="curriculum-wrapper-outer js-curriculum-wrapper-outer">
        <ol className="list-unstyled ui-sortable">
          <li className="js-section-item" data-section-id-encrypted="nLWR3wO5za">
            <div className="section-heading js-section-heading ui-tree-wrapper">
              <div className="drag-handle js-drag-handle ui-sortable-handle">
                <svg width="16" height="16" viewBox="0 0 24 24">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9 4C7.9 4 7 4.9 7 6C7 7.1 7.9 8 9 8C10.1 8 11 7.1 11 6C11 4.9 10.1 4 9 4ZM7 12C7 10.9 7.9 10 9 10C10.1 10 11 10.9 11 12C11 13.1 10.1 14 9 14C7.9 14 7 13.1 7 12ZM9 20C10.1 20 11 19.1 11 18C11 16.9 10.1 16 9 16C7.9 16 7 16.9 7 18C7 19.1 7.9 20 9 20ZM17 6C17 7.1 16.1 8 15 8C13.9 8 13 7.1 13 6C13 4.9 13.9 4 15 4C16.1 4 17 4.9 17 6ZM15 10C13.9 10 13 10.9 13 12C13 13.1 13.9 14 15 14C16.1 14 17 13.1 17 12C17 10.9 16.1 10 15 10ZM13 18C13 16.9 13.9 16 15 16C16.1 16 17 16.9 17 18C17 19.1 16.1 20 15 20C13.9 20 13 19.1 13 18Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>

              <span className="checkbox-wrapper">
                <input type="checkbox" className="js-section-checkbox" />
              </span>

              <span className="name-wrapper">
                <span className="text js-section-name-text">First Section sadasd</span>
                <button type="button" className="btn-icon-action js-start-editing-section-name-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-pencil-square"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"></path>
                    <path
                      fill-rule="evenodd"
                      d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                    ></path>
                  </svg>
                </button>
              </span>

              <span className="edit-name-wrapper">
                <div className="form-inline js-editable-controls-wrapper"></div>
              </span>
            </div>

            <ol className="lesson-list js-lesson-list list-unstyled"></ol>

            <a href="#!" className="add-new-lesson-button js-add-new-lesson-button">
              <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
              <span className="text">Add new lesson</span>
            </a>
          </li>
        </ol>
      </div>
    </>
  );
};

export default CourseChapter;
