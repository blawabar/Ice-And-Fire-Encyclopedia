import { Link } from "react-router-dom";
import { HOUSE_URL } from "../data/constants";
import { CharactersRequestData } from "../data/types/character-types";

export const extractQueryParams = (args: CharactersRequestData) =>
  Object.entries(args)
    .filter(([_, value]) => Boolean(value))
    .map(([key, value]) => `${key}=${value}`)
    .join("&");

export const extractLastPageNumber = (headers: Headers) =>
  parseInt(
    headers
      .get("Link")
      ?.split(",")
      .filter((path) => path.includes("last"))?.[0]
      .match(/page=([0-9]+)/)?.[1] || "1",
  );

export const resolveCharacterNames = (name: string, aliases: Array<string>) => {
  const isNameSet = Boolean(name);
  const areAliasesSet = Boolean(aliases.join());
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

export const resolveCharacterAliveInfo = (born: string, died: string) => {
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

export const resolveAllegiancesList = (allegiances: Array<string>) => {
  return Boolean(allegiances.length) ? (
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
  ) : (
    " - "
  );
};
