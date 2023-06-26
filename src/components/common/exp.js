import React from 'react';

const Table = ({ data }) => {
  const versions = Object.keys(data);

  return (
    <table>
      <thead>
        <tr>
          <th>Version</th>
          <th>Month</th>
          <th>May</th>
          <th>April</th>
        </tr>
      </thead>
      <tbody>
        {versions.map((version) => {
          const tableData = data[version]['nexus_train_base'];
          return tableData.map((row, index) => (
            <tr key={`${version}_${index}`}>
              <td>{version}</td>
              <td>nexus_train_base</td>
              <td>{row.may}</td>
              <td>{row.April}</td>
            </tr>
          ));
        })}
      </tbody>
    </table>
  );
};

export default Table;
