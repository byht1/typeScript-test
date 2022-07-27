import React, { FC, useState, useEffect } from 'react';
import { worldData } from '../../../server/api';
import { Table, Th, Td } from './Banl.styled';

import { ReactComponent as IconMvf } from '../../../icon/icon-mvf.svg';

interface IDataWorld {
  name: string;
  value: string;
  date: string;
}

export const World: FC = () => {
  const [world, setWorld] = useState<IDataWorld[]>([]);

  useEffect(() => {
    serverWorld();
  }, []);

  async function serverWorld() {
    const data: IDataWorld[] = await worldData();
    setWorld(data.reverse());
  }

  return (
    <div>
      <IconMvf />
      <Table>
        <tbody>
          <tr>
            <Th>Офіційний курс</Th>
            <Th>На дату</Th>
          </tr>
        </tbody>
        {world.map(({ value, name, date }) => {
          return (
            <tbody key={value + 'world'}>
              <tr>
                <Td colSpan={2}>{name}</Td>
              </tr>
              <tr>
                <Td>{value}</Td>
                <Td>{date}</Td>
              </tr>
            </tbody>
          );
        })}
      </Table>
    </div>
  );
};
