import { CharactersRequestData } from "../data/types/character-types";
import {
  extractLastPageNumber,
  extractQueryParams,
  resolveCharacterAliveInfo,
  resolveCharacterNames,
} from "./";

const fakeHeaderWithLink = new Headers();
fakeHeaderWithLink.append(
  "link",
  `<https://anapioficeandfire.com/api/characters?page=2&pageSize=25>; rel="next", 
   <https://anapioficeandfire.com/api/characters?page=1&pageSize=25>; rel="first", 
   <https://anapioficeandfire.com/api/characters?page=86&pageSize=25>; rel="last"`,
);

const fakeHeaderWithoutLink = new Headers();

describe("extractLastPageNumber function allows", () => {
  test("obtaining the real number value of the last page returned in the valid ResponseHeader by API", () => {
    expect(extractLastPageNumber(fakeHeaderWithLink)).toBe(86);
  });
  test("providing a fallback value eq. to 1 for the last page returned in the empty ResponseHeader by API", () => {
    expect(extractLastPageNumber(fakeHeaderWithoutLink)).toBe(1);
  });
});

const fakeFullQueryParams: CharactersRequestData = {
  page: 1,
  pageSize: 25,
  gender: "female",
  culture: "Valemen",
};

const fullQueryParamsExpectedValue =
  "page=1&pageSize=25&gender=female&culture=Valemen";

const fakePartialQueryParams: CharactersRequestData = {
  page: 1,
  pageSize: 25,
  gender: "",
  culture: "",
};

const partialQueryParamsExpectedValue = "page=1&pageSize=25";

describe("extractQueryParams function allows", () => {
  test("obtaining the query params to be sent to the API", () => {
    expect(extractQueryParams(fakeFullQueryParams)).toBe(
      fullQueryParamsExpectedValue,
    );
  });
  test("obtaining the query params to be sent to the API and filter out those without values", () => {
    expect(extractQueryParams(fakePartialQueryParams)).toBe(
      partialQueryParamsExpectedValue,
    );
  });
});

describe("resolveCharacterAliveInfo function allows", () => {
  test("obtaining the information about a characters death age if such information is available", () => {
    expect(
      resolveCharacterAliveInfo("In 242 AC", "In 300 AC, at King's Landing"),
    ).toBe("No, died at 58 years old");
    expect(
      resolveCharacterAliveInfo(
        "In 183 AC or 184 AC",
        "In 196 AC, at Redgrass Field",
      ),
    ).toBe("No, died at 12 years old");
  });
  test("obtaining the information about characters 'alive' status if such information is available", () => {
    expect(resolveCharacterAliveInfo("In or around 286 AC (roughly)", "")).toBe(
      "Yes",
    );
  });
  test("providing a fallback information about characters 'alive' status", () => {
    expect(resolveCharacterAliveInfo("", "")).toBe("Unknown");
  });
});

const singleCharacterName = "Ambrose Butterwell";
const characterAliases = [
  "Old Milkblood",
  "The lord of cows",
  "Lord Butterbutt",
];

describe("resolveCharacterNames function allows", () => {
  test("obtaining character's name and aliases if such information is available", () => {
    expect(resolveCharacterNames(singleCharacterName, [""])).toBe(
      singleCharacterName,
    );
    expect(resolveCharacterNames(singleCharacterName, characterAliases)).toBe(
      [singleCharacterName, ...characterAliases].join(", "),
    );
  });
  test("providing a fallback character's name and aliases if such information is not available", () => {
    expect(resolveCharacterNames("", [""])).toBe("Unknown");
  });
});
