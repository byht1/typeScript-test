import React, { FC, useState, useEffect } from 'react';
import { NBY } from '../../../server/api';
import { FooObj } from './../../../type/type';
import { Table, Th, Td } from './Banl.styled';

export const Nby: FC = () => {
  const [nby, setNby] = useState<FooObj[]>([]);

  useEffect(() => {
    server();
  }, []);

  async function server() {
    const data: FooObj[] = await NBY();
    setNby(data);
  }
  return (
    <div>
      <img
        src="https://bank.gov.ua/frontend/content/logo.png?v=4"
        alt="Логотип НБУ"
      />
      <Table>
        <tbody>
          <tr>
            <Th>Офіційний курс</Th>
            <Th>На дату</Th>
          </tr>
        </tbody>
        {nby.map(({ cc, rate, exchangedate }: any) => {
          return (
            <tbody key={rate + 'nby'}>
              <tr>
                <Td colSpan={2}>{cc}</Td>
              </tr>
              <tr>
                <Td>{rate}</Td>
                <Td>{exchangedate}</Td>
              </tr>
            </tbody>
          );
        })}
      </Table>
    </div>
  );
};
