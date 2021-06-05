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
