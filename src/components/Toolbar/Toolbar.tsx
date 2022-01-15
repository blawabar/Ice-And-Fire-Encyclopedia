import { useState, useEffect } from "react";
import { setCharactersFilter } from "../../data/characters-slice";
import { useAppDispatch } from "../../data/hooks";
import { useToolbarSelector } from "../../hooks";
import "./Toolbar.scss";

const Toolbar: React.FC = () => {
  const dispatch = useAppDispatch();
  const { rootCulture, rootGender, isToolbarDisabled } = useToolbarSelector();
  const [culture, setCulture] = useState(rootCulture);
  const [gender, setGender] = useState(rootGender);

  const handleOnChangeCulture = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = evt;
    const isCultureReset = !Boolean(value.length);
    const isCultureValueValid = Boolean(value.trim().length);

    if (isCultureReset || isCultureValueValid) {
      setCulture(value);
    }
  };

  const handleOnChangeGender = (evt: React.ChangeEvent<HTMLSelectElement>) =>
    setGender(evt.target.value);

  useEffect(() => {
    dispatch(setCharactersFilter({ culture, gender }));
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
          <option value=""> - Select gender - </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="unknown">Unknown</option>
        </select>
      </label>
    </div>
  );
};

export default Toolbar;
