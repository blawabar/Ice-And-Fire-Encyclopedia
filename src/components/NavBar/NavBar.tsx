import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { SetCharactersPagination } from "../../data/actions";
import { useNavBarSelector } from "../../hooks";
import "./NavBar.scss";

const NavBar: React.FC = () => {
  const dispatch = useDispatch();
  const {
    rootPageSize,
    rootCurrentPage,
    rootLastPage,
    isNavBarHidden,
    isDisplayingFirstPage,
    isDisplayingLastPage,
  } = useNavBarSelector();
  const [rowsPerPage, setRowsPerPage] = useState(rootPageSize);
  const [currentPage, setCurrentPage] = useState(rootCurrentPage);

  const handleOnChangeRowsPerPage = (
    evt: React.ChangeEvent<HTMLSelectElement>,
  ) => setRowsPerPage(parseInt(evt.target.value));

  const handleOnLoadFirstPage = () => {
    setCurrentPage(1);
  };

  const handleOnLoadPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleOnLoadNextPage = () => {
    if (currentPage < rootLastPage) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handleOnLoadLastPage = () => {
    setCurrentPage(rootLastPage);
  };

  useEffect(() => {
    dispatch(
      SetCharactersPagination({
        page: 1,
        pageSize: rowsPerPage,
      }),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rowsPerPage]);

  useEffect(() => {
    dispatch(
      SetCharactersPagination({
        page: currentPage,
        pageSize: rowsPerPage,
      }),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  return isNavBarHidden ? null : (
    <nav className="nav-bar">
      <label>
        Rows per page:
        <select
          className="nav-bar__rows-per-page"
          value={rowsPerPage}
          onChange={handleOnChangeRowsPerPage}
        >
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
        </select>
      </label>
      <span className="nav-bar__page-info">{`Page ${rootCurrentPage} of ${rootLastPage}`}</span>
      <div className="nav-bar__buttons-group">
        <input
          type="button"
          className="nav-bar__page-btn"
          disabled={isDisplayingFirstPage}
          onClick={handleOnLoadFirstPage}
          value="First"
        />
        <input
          type="button"
          className="nav-bar__page-btn"
          disabled={isDisplayingFirstPage}
          onClick={handleOnLoadPrevPage}
          value="Prev"
        />
        <input
          type="button"
          className="nav-bar__page-btn"
          disabled={isDisplayingLastPage}
          onClick={handleOnLoadNextPage}
          value="Next"
        />
        <input
          type="button"
          className="nav-bar__page-btn"
          disabled={isDisplayingLastPage}
          onClick={handleOnLoadLastPage}
          value="Last"
        />
      </div>
    </nav>
  );
};

export default NavBar;
