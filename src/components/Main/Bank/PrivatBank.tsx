import React, { FC, useState, useEffect } from 'react';
import { privatBank } from '../../../server/api';
import { FooObj } from '../../../type/type';
import { Table, Th, Td } from './Banl.styled';

export const PrivatBank: FC = () => {
  const [privatBanc, setPrivatBanc] = useState<FooObj[]>([]);

  useEffect(() => {
    serverPrivat();
  }, []);

  async function serverPrivat() {
    const data: FooObj[] = await privatBank();
    setPrivatBanc(data);
  }
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
        {privatBanc.map(({ ccy, buy, sale }) => {
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
