import React, { FC, useState, useEffect } from 'react';
import { Mono } from '../../../server/api';
import { FooObj } from './../../../type/type';
import { Table, Th, Td } from './Banl.styled';

export const MonoBank: FC = () => {
  const [mono, setMono] = useState<FooObj[]>([]);

  useEffect(() => {
    server();
  }, []);

  async function server() {
    const data: FooObj[] = await Mono();
    console.log('🚀 ~ data', data);
    setMono(data);
  }
  return (
    <div>
      <img
        src="https://asset.brandfetch.io/id-CBRc8NA/idvFFbpiTN.svg"
        alt="Логотип НБУ"
      />
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
