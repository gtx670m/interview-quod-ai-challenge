import React, { useEffect } from "react";
import "./App.scss";
import List from "./components/List";
import Menu from "./components/Menu";
import { useWindowSize } from "./utils";
import { useAppDispatch } from "./app/store";
import { useSelector } from "react-redux";
import { fetch } from "./app/listSlice";

const App = () => {
  const { windowWidth = 0 } = useWindowSize();
  const { listIssue, recentList, loading } = useSelector((state) => state.list);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetch({ page: 1, per_page: 5 }));
  }, []);

  return (
    <div className="App">
      <Menu />
      <div className="content">
        <div className="list">
          <h1>List issue</h1>
          <List listIssue={listIssue} />
        </div>
        <div className="list">
          <h1>Recent issue</h1>
          <List listIssue={listIssue} />
        </div>
      </div>
    </div>
  );
};

export default App;
