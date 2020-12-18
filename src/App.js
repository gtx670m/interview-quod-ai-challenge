import React, { useEffect, useState } from "react";
import "./App.scss";
import List from "./components/List";
import Menu from "./components/Menu";
import { useAppDispatch } from "./app/store";
import { useSelector } from "react-redux";
import { fetch } from "./app/listSlice";

const App = () => {
  const { listIssue, recentIssue, loading } = useSelector((state) => state.list);
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetch({ page, per_page: 5 }));
  }, [page]);

  const handleClickNext = () => {
    setPage(page + 1);
  }

  return (
    <div className="App">
      <Menu />
      <div className="content">
        <div className="list-issue">
          <h1>List issue</h1>
          <List listIssue={listIssue} />
          <button
            className="nextBtn"
            onClick={handleClickNext}
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Next'}
          </button>
        </div>
        <div className="list-issue">
          <h1>Recent issue</h1>
          <List listIssue={recentIssue} interact={false} />
        </div>
      </div>
    </div>
  );
};

export default App;
