type Props = {
  cols: string[];
  row: unknown[];
  h: string;
};

const Table = ({ cols, row, h }: Props) => {
  return (
    <div
      className={`${h} border-separate overflow-clip flex flex-col overflow-y-auto`}
    >
      <table className="max-w-full text-sm text-left shadow-md table-auto bg-[#0f0f0f] text-gray-100">
        <thead className="w-full text-xs capitalize sticky top-0">
          <tr className="border-b border-gray-600">
            {cols.map((header, i) => (
              <th key={i} className="px-4 py-4 max-w-[150px] truncate">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="w-full text-xs">
          {row?.map((row, i) => (
            <tr
              className="border-b border-gray-600 hover:bg-gray-300 hover:text-gray-800"
              key={i}
            >
              {Object.keys(row).map((rowItem, i) => (
                <td
                  key={i}
                  className="px-4 py-3 max-w-[150px] truncate hover:text-clip  hover:overflow-x-visible cursor-pointer"
                >
                  {row[rowItem]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
