import React, { FC } from 'react';
import { FooObj } from '../../../type/type';
import { Table, Th, Td } from './Banl.styled';

interface IProp {
  list: FooObj[];
}

export const PrivatBank: FC<IProp> = ({ list }) => {
  return (
    <div>
      <img
        src="https://api.privatbank.ua/img/logo-api.svg"
        alt="Логотип ПриватБанка"
      />
      <Table>
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
      </Table>
    </div>
  );
};
