import {
  CHARACTERS_COLUMNS_NAMES,
  CharacterColumnName,
} from "../data/constants";
import { Character } from "../data/types/character-types";
import {
  resolveCharacterNames,
  resolveCharacterAliveInfo,
  resolveAllegiancesList,
} from "../utils";

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
    let columnValue: React.ReactNode = null;

    switch (columnName) {
      case CharacterColumnName.Character:
        columnValue = resolveCharacterNames(name, aliases);
        break;
      case CharacterColumnName.Alive:
        columnValue = resolveCharacterAliveInfo(born, died);
        break;
      case CharacterColumnName.Gender:
        columnValue = Boolean(gender) ? gender : "Unknown";
        break;
      case CharacterColumnName.Culture:
        columnValue = Boolean(culture) ? culture : "Unknown";
        break;
      case CharacterColumnName.Allegiances:
        columnValue = resolveAllegiancesList(allegiances);
        break;
      case CharacterColumnName.NumberOfBooks:
        columnValue = books.length.toString();
        break;
    }

    return <td key={`${url}-${index}`}>{columnValue}</td>;
  });
};

export default useColumnsRenderer;
