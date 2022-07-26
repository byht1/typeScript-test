import React from 'react';

export const Nby = () => {
  return (
    <div>
      <img
        src="https://bank.gov.ua/frontend/content/logo.png?v=4"
        alt="Логотип НБУ"
      />
      {/* <Table>
        <tbody>
          <tr>
            <Th>Купити</Th>
            <Th>Продати</Th>
          </tr>
        </tbody>
        {list.map(({ ccy, buy, sale }) => {
          return (
            <tbody key={sale + buy}>
              <tr>
                <Td colSpan={2}>{ccy}</Td>
              </tr>
              <tr>
                <Td>{buy}</Td>
                <Td>{sale}</Td>
              </tr>
            </tbody>
          );
        })}
      </Table> */}
    </div>
  );
};
