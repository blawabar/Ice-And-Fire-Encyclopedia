import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacters } from "../../data/actions";
import { RootState } from "../../data/store";
import "./NavBar.scss";

const NavBar: React.FC = () => {
  const dispatch = useDispatch();
  const {
    rootCulture,
    rootGender,
    rootRowsPerPage,
    rootCurrentPage,
    rootLastPage,
  } = useSelector(
    ({
      requestData: { gender, culture, pageSize },
      currentPage,
      lastPage,
    }: RootState) => ({
      rootGender: gender || "",
      rootCulture: culture || "",
      rootRowsPerPage: pageSize,
      rootCurrentPage: currentPage,
      rootLastPage: lastPage,
    }),
  );
  const [rowsPerPage, setRowsPerPage] = useState(rootRowsPerPage);
  const [currentPage, setCurrentPage] = useState(rootCurrentPage);

  const isDisplayingFirstPage = currentPage === 1;
  const isDisplayingLastPage = currentPage === rootLastPage;

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
      getCharacters({
        page: 1,
        pageSize: rowsPerPage,
        culture: rootCulture,
        gender: rootGender,
      }),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rowsPerPage]);

  useEffect(() => {
    dispatch(
      getCharacters({
        page: currentPage,
        pageSize: rowsPerPage,
        culture: rootCulture,
        gender: rootGender,
      }),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  return (
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
        <button
          className="nav-bar__page-btn"
          disabled={isDisplayingFirstPage}
          onClick={handleOnLoadFirstPage}
        >
          First
        </button>
        <button
          className="nav-bar__page-btn"
          disabled={isDisplayingFirstPage}
          onClick={handleOnLoadPrevPage}
        >
          Prev
        </button>
        <button
          className="nav-bar__page-btn"
          disabled={isDisplayingLastPage}
          onClick={handleOnLoadNextPage}
        >
          Next
        </button>
        <button
          className="nav-bar__page-btn"
          disabled={isDisplayingLastPage}
          onClick={handleOnLoadLastPage}
        >
          Last
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
