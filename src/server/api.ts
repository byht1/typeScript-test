import axios from 'axios';
import { FooObj } from './../type/type';

const idName: number[] = [840, 978];
const currencyСode: string[] = ['USD', 'EUR'];

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
  const server = await axios.get(serverDataURL1);
  const data: FooObj[] = await server.data.filter(
    (x: FooObj, i: number, arr: []) => arr.length - 1 !== i
  );
  return data;
};

export const NBY = async () => {
  const serverDataURL1 =
    'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';
  const server = await axios.get(serverDataURL1);
  const data = await server.data;
  // eslint-disable-next-line array-callback-return
  return data.filter((x: { r030: number }) => {
    for (const id of idName) {
      if (x.r030 === id) {
        return x;
      }
    }
  });
};

export const Mono = async () => {
  const serverDataURL1 = 'https://api.monobank.ua/bank/currency';
  const server = await axios.get(serverDataURL1);
  const data = await server.data;
  return data.filter(
    (x: { currencyCodeA: number | string; currencyCodeB: number }) => {
      for (let i = 0; i < idName.length; i += 1) {
        if (x.currencyCodeA === idName[i] && x.currencyCodeB === 980) {
          x.currencyCodeA = currencyСode[i];
          return x;
        }
      }
    }
  );
};

export const worldData = async () => {
  const serverDataURL1 =
    'https://api.exchangerate.host/latest?base=UAH&symbols=EUR,USD';
  const server = await axios.get(serverDataURL1);
  const data = await server.data;
  const dataKey: string[] = await Object.keys(data.rates);
  const dataValue: number[] = await Object.values(data.rates);
  let newData = [];
  for (let i = 0; i < dataKey.length; i++) {
    newData.push({
      name: dataKey[i],
      value: (1 / dataValue[i]).toFixed(2),
      date: data.date.split('-').reverse().join('.'),
    });
  }

  return newData;
};

export const cacl = async (to: string = 'UAH', result: string = 'USD') => {
  const serverDataURL1 = `https://api.exchangerate.host/convert?from=${to}&to=${result}`;
  const server = await axios.get(serverDataURL1);
  const data = await server.data;
  return data;
};
