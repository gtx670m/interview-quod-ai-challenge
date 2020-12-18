import React from "react";
import "./styles.scss";
import { useSelector } from "react-redux";

const Menu = () => {
  const { count } = useSelector((state) => state.list);
  return (
    <div className="Menu">
      <div className="badge">{count}</div>
    </div>
  );
};

export default Menu;
