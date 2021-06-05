import { CharactersData } from "../../data/types/character-types";
import { TableRow } from "./TableRow";

export const TableBody: React.FC<{ data: CharactersData }> = ({ data }) => {
  return (
    <tbody>
      {data.map((character) => (
        <TableRow data={character} key={character.url} />
      ))}
    </tbody>
  );
};
