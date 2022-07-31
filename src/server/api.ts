import axios from 'axios';
import { FooObj, IData } from './../type/type';

const idName: number[] = [840, 978];
const currencyСode: string[] = ['USD', 'EUR'];

export const serverPrivatBank = async () => {
  const serverDataURL1 =
    'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';
  const server = await axios.get(serverDataURL1);
  const data: FooObj[] = await server.data.filter(
    (x: FooObj, i: number, arr: []) => arr.length - 1 !== i
  );

  const newData = newObjPrivat(data);

  return newData;
};

function newObjPrivat(data: FooObj[]) {
  const arr: IData[] = [];
  for (const d of data) {
    const obj: IData = {
      name: d.ccy,
      buy: Number(d.buy).toFixed(2),
      sale: Number(d.sale).toFixed(2),
    };

    arr.push(obj);
  }

  return arr;
}

export const serverNbu = async () => {
  const serverDataURL1 =
    'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';
  const server = await axios.get(serverDataURL1);
  const data = await server.data;
  const dataFilter = data.filter((x: { r030: number }) => {
    for (const id of idName) {
      if (x.r030 === id) {
        return x;
      }
    }
  });

  const neeData = newObjNBY(dataFilter);

  return neeData;
};

function newObjNBY(data: FooObj[]) {
  const arr: IData[] = [];
  for (const d of data) {
    const obj: IData = {
      name: d.cc,
      buy: d.rate.toFixed(2),
      date: d.exchangedate!,
    };

    arr.push(obj);
  }

  return arr;
}

export const serverMonoBank = async () => {
  const serverDataURL1 = 'https://api.monobank.ua/bank/currency';
  const server = await axios.get(serverDataURL1);
  const data = await server.data;
  const dataFilter = data.filter(
    (x: { currencyCodeA: number | string; currencyCodeB: number }) => {
      for (let i = 0; i < idName.length; i += 1) {
        if (x.currencyCodeA === idName[i] && x.currencyCodeB === 980) {
          x.currencyCodeA = currencyСode[i];
          return x;
        }
      }
    }
  );

  const newData = newObjMono(dataFilter);
  return newData;
};

function newObjMono(data: FooObj[]) {
  const arr: IData[] = [];
  for (const d of data) {
    const obj: IData = {
      name: d.currencyCodeA,
      buy: Number(d.rateBuy).toFixed(2),
      sale: Number(d.rateSell).toFixed(2),
    };

    arr.push(obj);
  }

  return arr;
}

export const serverWorldBank = async () => {
  const serverDataURL1 =
    'https://api.exchangerate.host/latest?base=UAH&symbols=EUR,USD';
  const server = await axios.get(serverDataURL1);
  const data = await server.data;
  const dataKey: string[] = await Object.keys(data.rates);
  const dataValue: number[] = await Object.values(data.rates);
  const newData: IData[] = newObjWorld(dataKey, dataValue, data.date);

  return newData;
};

function newObjWorld(dataKey: string[], dataValue: number[], date: string) {
  const arr: IData[] = [];
  for (let i = 0; i < dataKey.length; i++) {
    arr.push({
      name: dataKey[i],
      buy: (1 / dataValue[i]).toFixed(2),
      date: date.split('-').reverse().join('.'),
    });
  }

  return arr;
}

export const cacl = async (to: string = 'UAH', result: string = 'USD') => {
  const serverDataURL1 = `https://api.exchangerate.host/convert?from=${to}&to=${result}`;
  const server = await axios.get(serverDataURL1);
  const data = await server.data;
  return data;
};

// export const serverDataStat = async () => {
//   // to: string, result: string
//   const serverURL =
//     'https://api.exchangerate.host/timeseries?start_date=2022-01-01&end_date=2022-07-30&format=JSON&base=USD&symbols=UAH';
//   const server = await axios.get(serverURL);
//   const data = await server.data.rates;
//   const key = Object.keys(data);
//   const v: IDataStat[] = Object.values(data);
//   const value = v.map(x => Number(Object.values(x).join('')));

//   return { date: key, value };
// };
