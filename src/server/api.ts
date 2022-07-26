import axios from 'axios';
import { FooObj } from './../type/type';

export const privatBank = async () => {
  const serverDataURL1 =
    'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';
  const serverDataURL2 =
    'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=4';

  let privat: FooObj[] = [];
  const server1 = await axios.get(serverDataURL1);
  const server2 = await axios.get(serverDataURL2);
  const data1: FooObj[] = await server1.data.filter(
    (x: FooObj, i: number, arr: []) => arr.length - 1 !== i
  );
  const data2: FooObj[] = await server2.data.filter(
    (x: FooObj, i: number, arr: []) => arr.length - 1 !== i
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return (privat = [...data1, ...data2]);
};
