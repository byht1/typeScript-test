import React, { FC, useState, useEffect } from 'react';
// import { useForm } from 'react-hook-form';
import { cacl } from '../../../server/api';
import { CalcFormBox } from './Calc.styled';

const valueName: string[] = [
  'UAH',
  'USD',
  'EUR',
  'CAD',
  'CHF',
  'CZK',
  'GBP',
  'ILS',
  'JPY',
  'NOK',
  'PLZ',
  'SEK',
];

// type FormData = {
//   value: string;
//   value2: string;
//   currencyOne: string;
//   currencyTwo: string;
// };

export const Calc: FC = () => {
  const [valueCalcOne, setValueCalcOne] = useState<string>('1');
  const [valueCalcTwo, setValueCalcTwo] = useState<string>('');
  const [currencyTo, setCurrencyTo] = useState<string>('UAH');
  const [currencyResult, setCurrencyResult] = useState<string>('USD');
  const [course, setСourse] = useState<number>(0);
  // const { register, handleSubmit } = useForm<FormData>();
  let v = 1;
  useEffect(() => {
    dataServer(valueCalcOne);
  }, []);

  // useEffect(() => {
  //   dataServer(valueCalcOne);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [valueCalcOne, currencyTo]);

  useEffect(() => {
    dataServer(valueCalcTwo, 2);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valueCalcTwo, currencyResult]);

  // const sublitHendler = handleSubmit(({ value, currencyOne, currencyTwo }) => {
  //   // dataServer();
  // });

  async function dataServer(value: string, n: number = 1) {
    const data = await cacl(value, currencyTo, currencyResult);

    setСourse(data.result);
    if (n === 1) {
      const total: number = (await data.result) * Number(value);
      setValueCalcTwo(total.toFixed(2));
    } else {
      const total: number = await (Number(value) / data.result);
      console.log('🚀 ~ total', total);
      setValueCalcOne(total.toFixed(2));
    }
  }

  return (
    <CalcFormBox>
      <form>
        <div>
          <input
            type="number"
            value={valueCalcOne}
            onChange={event => setValueCalcOne(event.target.value)}
          />
          <select onChange={event => setCurrencyTo(event.target.value)}>
            {valueName.map(x => {
              if (x === 'UAH') {
                <option selected key={x + '1'} value={x}>
                  {x}
                </option>;
              }
              return (
                <option key={x + '1'} value={x}>
                  {x}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <input
            value={valueCalcTwo}
            type="number"
            onChange={event => setValueCalcTwo(event.target.value)}
          />
          <select onChange={event => setCurrencyResult(event.target.value)}>
            {valueName.map(x => {
              if (x === 'USD') {
                return (
                  <option selected key={x + '2'} value={x}>
                    {x}
                  </option>
                );
              }
              return (
                <option key={x + '2'} value={x}>
                  {x}
                </option>
              );
            })}
          </select>
        </div>
        {course !== 0 && <p>{course}</p>}
      </form>
    </CalcFormBox>
  );
};
