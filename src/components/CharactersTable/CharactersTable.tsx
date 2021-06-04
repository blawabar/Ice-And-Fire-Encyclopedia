import { CharactersData } from "../../data/types";

type Props = {
  data: CharactersData;
};

const CharactersTable: React.FC<Props> = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Character</th>
          <th>Alive</th>
          <th>Gender</th>
          <th>Culture</th>
          <th>Allegiances</th>
          <th># of Books</th>
        </tr>
      </thead>
      <tbody>
        {data.map(
          (
            { name, aliases, born, died, gender, culture, allegiances, books },
            index,
          ) => (
            <tr key={`${name}-${index}`}>
              <td>
                {name}, {aliases.join(", ")}
              </td>
              <td>
                {born} - {died}
              </td>
              <td>{gender}</td>
              <td>{culture}</td>
              <td>{allegiances.join(", ")}</td>
              <td>{books.length}</td>
            </tr>
          ),
        )}
      </tbody>
    </table>
  );
};

export default CharactersTable;
