import axios from 'axios';
import { FooObj } from './../type/type';

const idName: number[] = [
  840, 978, 124, 756, 203, 826, 376, 578, 752, 985, 392,
];
const currencyСode: string[] = [
  'USD',
  'EUR',
  'CAD',
  'CHF',
  'CZK',
  'GBP',
  'ILS',
  'NOK',
  'SEK',
  'PLZ',
  'JPY',
];

// USD -- 840 Евро
// EUR -- 978 Доллар США
// CAD -- 124 Канадский доллар
// CHF -- 756 Швейцарский франк
// CZK -- 203 Чешская крона
// GBP -- 826 Фунт стерлингов Велико­британии
// ILS -- 376 Израильский шекель
// JPY -- 392 Японская йена
// NOK -- 578 Норвежская крона
// PLZ -- 985 Польский злотый
// SEK -- 752 Шведская крона

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

export const NBY = async () => {
  const serverDataURL1 =
    'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';
  const server1 = await axios.get(serverDataURL1);
  const data1 = await server1.data;
  return data1.filter((x: { r030: number }) => {
    for (const id of idName) {
      if (x.r030 === id) {
        return x;
      }
    }
  });
};
