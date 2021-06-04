import { CHARACTERS_COLUMNS_NAMES } from "../../data/constants";
import { Character } from "../../data/types";
import { useColumnsRenderer } from "../../hooks";

export const TableRow: React.FC<{ data: Character }> = ({ data }) => {
  const columns = useColumnsRenderer(CHARACTERS_COLUMNS_NAMES, data);
  return <tr key={data.url}>{columns}</tr>;
};
