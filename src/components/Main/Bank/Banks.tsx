import { FC, useState, useEffect } from 'react';
import { GrigBox } from './Banl.styled';
import { Bank } from './Bank';
import { IData } from '../../../type/type';
import {
  serverWorldBank,
  serverNbu,
  serverPrivatBank,
  serverMonoBank,
} from '../../../server/api';

export const Banks: FC = () => {
  const [worldBank, setWorldBank] = useState<IData[]>([]);
  const [Nbu, setNbu] = useState<IData[]>([]);
  const [privatBank, setPrivatBank] = useState<IData[]>([]);
  const [monoBank, setMonoBank] = useState<IData[]>([]);

  useEffect(() => {
    serverDataWorldBank();
    serverDataPrivatBank();
    serverDataNbu();
    serverDataMonoBank();
  }, []);

  async function serverDataWorldBank() {
    const data: IData[] = await serverWorldBank();
    setWorldBank(data.reverse());
  }
  async function serverDataNbu() {
    const data: IData[] = await serverNbu();
    setNbu(data);
  }
  async function serverDataPrivatBank() {
    const data: IData[] = await serverPrivatBank();
    setPrivatBank(data);
  }
  async function serverDataMonoBank() {
    const data: IData[] = await serverMonoBank();
    setMonoBank(data);
  }

  return (
    <GrigBox>
      <Bank data={worldBank} isDate={true} nameBank={'world'} />
      <Bank data={Nbu} isDate={true} nameBank={'nbu'} />
      <Bank data={privatBank} isDate={false} nameBank={'privat'} />
      <Bank data={monoBank} isDate={false} nameBank={'mono'} />
    </GrigBox>
  );
};
