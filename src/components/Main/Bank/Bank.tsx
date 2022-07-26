import React, { FC } from 'react';
import { FooObj } from '../../../type/type';
import { Table, Th, Td } from './Banl.styled';

interface IProp {
  list: FooObj[];
}

export const Bank: FC<IProp> = ({ list }) => {
  console.log('🚀 ~ list', list);
  return (
    <Table>
      <tbody>
        <tr>
          <Th>Купити</Th>
          <Th>Продати</Th>
        </tr>
        {list.map(({ ccy, buy, sale }) => {
          return (
            <>
              <tr>
                <Td colSpan={2}>{ccy}</Td>
              </tr>
              <tr>
                <Td>{buy}</Td>
                <Td>{sale}</Td>
              </tr>
            </>
          );
        })}
      </tbody>
    </Table>
  );
};
