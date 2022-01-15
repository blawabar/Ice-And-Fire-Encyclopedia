import { useState, useEffect } from "react";
import { setCharactersPagination } from "../../data/characters-slice";
import { useAppDispatch } from "../../data/hooks";
import { useNavBarSelector } from "../../hooks";
import { PageButton } from "../PageButton";
import "./NavBar.scss";

const NavBar: React.FC = () => {
  const dispatch = useAppDispatch();
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
      setCharactersPagination({
        page: 1,
        pageSize: rowsPerPage,
      }),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rowsPerPage]);

  useEffect(() => {
    dispatch(
      setCharactersPagination({
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
        <PageButton
          label="First"
          isDisabled={isDisplayingFirstPage}
          onClick={handleOnLoadFirstPage}
        />
        <PageButton
          label="Prev"
          isDisabled={isDisplayingFirstPage}
          onClick={handleOnLoadPrevPage}
        />
        <PageButton
          label="Next"
          isDisabled={isDisplayingLastPage}
          onClick={handleOnLoadNextPage}
        />
        <PageButton
          label="Last"
          isDisabled={isDisplayingLastPage}
          onClick={handleOnLoadLastPage}
        />
      </div>
    </nav>
  );
};

export default NavBar;
