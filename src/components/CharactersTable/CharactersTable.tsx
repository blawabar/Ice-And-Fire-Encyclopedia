import { CHARACTERS_COLUMNS_NAMES } from "../../data/constants";
import { CharactersData } from "../../data/types";
import { TableBody } from "./TableBody";
import { TableHead } from "./TableHead";
import "./CharactersTable.scss";

type Props = {
  data: CharactersData;
};

const CharactersTable: React.FC<Props> = ({ data }) => {
  return (
    <div className="wrapper">
      <table className="characters-table">
        <TableHead columnsNames={CHARACTERS_COLUMNS_NAMES} />
        <TableBody data={data} />
      </table>
    </div>
  );
};

export default CharactersTable;
