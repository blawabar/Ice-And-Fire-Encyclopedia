import { Link } from "react-router-dom";
import {
  CHARACTERS_COLUMNS_NAMES,
  CharacterColumnName,
  HOUSE_URL,
} from "../data/constants";
import { Character } from "../data/types";

const useColumnsRenderer = (
  columnsNames: typeof CHARACTERS_COLUMNS_NAMES,
  data: Character,
) => {
  const {
    name,
    aliases,
    born,
    died,
    gender,
    culture,
    allegiances,
    books,
    url,
  } = data;

  return columnsNames.map((columnName, index) => {
    let columnValue: string | React.ReactNode | null = null;

    switch (columnName) {
      case CharacterColumnName.Character:
        const isNameSet = Boolean(name);
        const areAliasesSet = Boolean(aliases.length);
        columnValue =
          isNameSet && areAliasesSet
            ? `${name}, ${aliases.join(", ")}`
            : isNameSet
            ? name
            : areAliasesSet
            ? aliases.join(", ")
            : "Unknown";
        break;
      case CharacterColumnName.Alive:
        const isBornValueSet = Boolean(born);
        const isDiedValueSet = Boolean(died);
        const isCharacterAlive = isBornValueSet && !isDiedValueSet;
        const isCharacterDead = isBornValueSet && isDiedValueSet;
        columnValue = isCharacterAlive
          ? "Yes"
          : isCharacterDead
          ? "No, died at X years old"
          : "Unknown";
        break;
      case CharacterColumnName.Gender:
        const isGenderValueSet = Boolean(gender);
        columnValue = isGenderValueSet ? gender : "Unknown";
        break;
      case CharacterColumnName.Culture:
        const isCultureValueSet = Boolean(culture);
        columnValue = isCultureValueSet ? culture : "Unknown";
        break;
      case CharacterColumnName.Allegiances:
        columnValue = (
          <ul>
            {allegiances.map((url, index) => {
              const localUrl = url.substring(url.lastIndexOf("/") + 1);
              return (
                <li key={`${url}-${index}`}>
                  <Link to={`${HOUSE_URL}/${localUrl}`}>{`House#${
                    index + 1
                  }`}</Link>
                </li>
              );
            })}
          </ul>
        );
        break;
      case CharacterColumnName.NumberOfBooks:
        columnValue = books.length.toString();
        break;
    }

    return <td key={`${url}-${index}`}>{columnValue}</td>;
  });
};

export default useColumnsRenderer;
