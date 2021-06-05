import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCharacters } from "../../data/actions";
import { useToolbarSelector } from "../../hooks";
import "./Toolbar.scss";

const Toolbar: React.FC = () => {
  const dispatch = useDispatch();
  const { rootPageSize, rootCulture, rootGender, isToolbarDisabled } =
    useToolbarSelector();
  const [culture, setCulture] = useState(rootCulture);
  const [gender, setGender] = useState(rootGender);

  const handleOnChangeCulture = (evt: React.ChangeEvent<HTMLInputElement>) =>
    setCulture(evt.target.value);

  const handleOnChangeGender = (evt: React.ChangeEvent<HTMLSelectElement>) =>
    setGender(evt.target.value);

  useEffect(() => {
    const isCultureSet = Boolean(culture);
    const isGenderSet = Boolean(gender);
    const paginationData = { page: 1, pageSize: rootPageSize };

    if (isCultureSet && isGenderSet) {
      dispatch(getCharacters({ ...paginationData, culture, gender }));
    } else if (isGenderSet) {
      dispatch(getCharacters({ ...paginationData, gender }));
    } else if (isCultureSet) {
      dispatch(getCharacters({ ...paginationData, culture }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [culture, gender]);

  return (
    <div className="toolbar">
      <label htmlFor="culture">
        Culture:
        <input
          type="search"
          id="culture"
          value={culture}
          onChange={handleOnChangeCulture}
          disabled={isToolbarDisabled}
        />
      </label>
      <label htmlFor="gender">
        Gender:
        <select
          id="gender"
          value={gender}
          onChange={handleOnChangeGender}
          disabled={isToolbarDisabled}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="">Unknown</option>
        </select>
      </label>
    </div>
  );
};

export default Toolbar;
