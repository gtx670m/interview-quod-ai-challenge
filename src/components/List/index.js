import React from "react";
import "./styles.scss";
import PropTypes from "prop-types";
import { setHighlightIssue, addToRecentIssue } from "../../app/listSlice";
import { useAppDispatch } from "../../app/store";
import { useSelector } from "react-redux";

const List = (props) => {
  const { listIssue = [], interact = true } = props;
  const { highlightIssue = {} } = useSelector((state) => state.list);
  const dispatch = useAppDispatch();

  const handleHighlightIssue = (payload) => {
    dispatch(setHighlightIssue(payload));
    dispatch(addToRecentIssue(payload));
  };

  const renderListIssue = (listIssue) => {
    return listIssue.map((issue, index) => {
      const { id = "", title = "" } = issue;
      const isActive = highlightIssue.id === id;
      return (
        <li
          className={`${isActive ? 'active' : ''} ${interact ? 'interact' : 'dumb'}`}
          onClick={() => {
            if (interact) {
              handleHighlightIssue({ issue, isActive })
            }
          }}
          key={`issue_${index}`}
        >
          <span className="bold-text mr-6">{id}</span>
          {title.trim()}
        </li>
      );
    });
  };

  return (
    <div className="List">
      <ul>{renderListIssue(listIssue)}</ul>
    </div>
  );
};

List.propTypes = {
  listIssue: PropTypes.arrayOf(PropTypes.object),
  interact: PropTypes.bool,
};

export default List;
