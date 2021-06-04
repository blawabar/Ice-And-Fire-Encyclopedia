import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacters } from "../../data/actions";
import { RootState } from "../../data/store";

const NavBar: React.FC = () => {
  const dispatch = useDispatch();
  const { rootCulture, rootGender, rootRowsPerPage } = useSelector(
    ({ requestData: { gender, culture, pageSize } }: RootState) => ({
      rootGender: gender || "",
      rootCulture: culture || "",
      rootRowsPerPage: pageSize,
    }),
  );
  const [rowsPerPage, setRowsPerPage] = useState(rootRowsPerPage);

  const handleOnChangeRowsPerPage = (
    evt: React.ChangeEvent<HTMLSelectElement>,
  ) => setRowsPerPage(parseInt(evt.target.value));

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

  return (
    <nav className="nav-bar">
      <label htmlFor="rowsPerPage">
        Rows per page:
        <select
          id="rowsPerPage"
          value={rowsPerPage}
          onChange={handleOnChangeRowsPerPage}
        >
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
        </select>
      </label>
      {/* TODO: add info about the current and the last page */}
      <button>First</button>
      <button>Prev</button>
      <button>Next</button>
      <button>Last</button>
    </nav>
  );
};

export default NavBar;
