export const TableHead: React.FC<{ columnsNames: Array<string> }> = ({
  columnsNames,
}) => {
  return (
    <thead>
      <tr>
        {columnsNames.map((columnName) => (
          <th key={columnName}>{columnName}</th>
        ))}
      </tr>
    </thead>
  );
};
