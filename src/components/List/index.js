import React from "react";
import "./styles.scss";
import PropTypes from "prop-types";

const List = (props) => {
  const { listIssue = [] } = props;

  const renderListIssue = (listIssue) => {
    return listIssue.map((issue, index) => {
      const { id = "", title = "" } = issue;
      return (
        <li key={`issue_${index}`}>
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
};

export default List;
