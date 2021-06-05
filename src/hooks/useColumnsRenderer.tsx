import { Link } from "react-router-dom";
import {
  CHARACTERS_COLUMNS_NAMES,
  CharacterColumnName,
  HOUSE_URL,
} from "../data/constants";
import { Character } from "../data/types";

const resolveCharacterNames = (name: string, aliases: Array<string>) => {
  const isNameSet = Boolean(name);
  const areAliasesSet = Boolean(aliases.length);
  let characterNames = "Unknown";

  if (isNameSet && areAliasesSet) {
    characterNames = `${name}, ${aliases.join(", ")}`;
  } else if (isNameSet) {
    characterNames = name;
  } else if (areAliasesSet) {
    characterNames = aliases.join(", ");
  }

  return characterNames;
};

const resolveCharacterAliveInfo = (born: string, died: string) => {
  const isBornValueSet = Boolean(born);
  const isDiedValueSet = Boolean(died);
  const isCharacterAlive = isBornValueSet && !isDiedValueSet;
  const isCharacterDead = isBornValueSet && isDiedValueSet;
  let aliveInfo = "Unknown";

  if (isCharacterAlive) {
    aliveInfo = "Yes";
  } else if (isCharacterDead) {
    const bornYears = born.match(/[0-9]+/g);
    const yearOfDeath = died.match(/[0-9]+/g);

    // (BK) => just in case of an extreme 'edgecase' when years data might be broken
    if (!yearOfDeath || !bornYears) {
      return aliveInfo;
    }

    const yearOfBirth =
      bornYears.length === 1
        ? parseInt(bornYears[0])
        : Math.max(parseInt(bornYears[0]), parseInt(bornYears[1]));

    const characterAge = parseInt(yearOfDeath[0]) - yearOfBirth;

    aliveInfo = `No, died at ${characterAge} years old`;
  }

  return aliveInfo;
};

const resolveAllegiancesList = (allegiances: Array<string>) => {
  return (
    <ul>
      {allegiances.map((url, index) => {
        const localUrl = url.substring(url.lastIndexOf("/") + 1);
        return (
          <li key={`${url}-${index}`}>
            <Link to={`${HOUSE_URL}/${localUrl}`}>{`House-#${index + 1}`}</Link>
          </li>
        );
      })}
    </ul>
  );
};

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
