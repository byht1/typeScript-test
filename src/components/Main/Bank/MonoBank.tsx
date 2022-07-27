import React, { FC, useState, useEffect } from 'react';
import { Mono } from '../../../server/api';
import { FooObj } from './../../../type/type';
import { Table, Th, Td, IconMono } from './Banl.styled';

export const MonoBank: FC = () => {
  const [mono, setMono] = useState<FooObj[]>([]);

  useEffect(() => {
    server();
  }, []);

  async function server() {
    const data: FooObj[] = await Mono();
    setMono(data);
  }
  return (
    <div>
      <IconMono />
      <Table>
        <tbody>
          <tr>
            <Th>Купить</Th>
            <Th>Продать</Th>
          </tr>
        </tbody>
        {mono.map(({ currencyCodeA, rateBuy, rateSell, rateCross }: any) => {
          return (
            <tbody key={(!rateCross ? rateBuy : rateCross) + 'mono'}>
              <tr>
                <Td colSpan={2}>{currencyCodeA}</Td>
              </tr>
              <tr>
                {!rateCross ? (
                  <>
                    <Td>{rateBuy}</Td>
                    <Td>{rateSell}</Td>
                  </>
                ) : (
                  <Td colSpan={2}>{rateCross}</Td>
                )}
              </tr>
            </tbody>
          );
        })}
      </Table>
    </div>
  );
};
