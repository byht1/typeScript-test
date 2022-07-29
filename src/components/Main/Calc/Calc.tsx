import React, { FC, useState, useEffect } from 'react';
// import { useForm } from 'react-hook-form';
import { cacl } from '../../../server/api';
import { CalcFormBox, Input, Div, Text, Span, Select } from './Calc.styled';

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

  useEffect(() => {
    dataServer(valueCalcOne);
  }, []);

  async function dataServer(
    value: string,
    n: number = 1,
    to: string = currencyTo,
    result: string = currencyResult
  ) {
    const data = await cacl(value, to, result);
    const course = Number((1 / data.result).toFixed(2));

    setСourse(course);
    if (n === 1) {
      const total: number = (await data.result) * Number(value);
      setValueCalcTwo(total.toFixed(2));
      return;
    }
    const total: number = await (Number(value) / data.result);
    setValueCalcOne(total.toFixed(2));
  }

  const onChangeValueCalcOne = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue: string = event.target.value;
    setValueCalcOne(newValue);
    dataServer(newValue);
  };

  const onChangeValueCalcTwo = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue: string = event.target.value;
    setValueCalcTwo(newValue);
    dataServer(newValue, 2);
  };

  const onChangeCurrencyTo = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue: string = event.target.value;
    setCurrencyTo(newValue);
    dataServer(valueCalcOne, 1, newValue, currencyResult);
  };

  const onChangeCurrencyResult = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newValue: string = event.target.value;
    setCurrencyResult(newValue);
    console.log('currencyTo', currencyTo);
    console.log('currencyTo', currencyTo);
    dataServer(valueCalcTwo, 2, currencyTo, newValue);
  };

  return (
    <CalcFormBox>
      <form>
        <div>
          <Input
            type="number"
            value={valueCalcOne}
            onChange={onChangeValueCalcOne}
          />
          <Select onChange={onChangeCurrencyTo} value={currencyTo}>
            {valueName.map(x => {
              return (
                <option key={x + '1'} value={x}>
                  {x}
                </option>
              );
            })}
          </Select>
        </div>
        <Div>
          <Input
            value={valueCalcTwo}
            type="number"
            onChange={onChangeValueCalcTwo}
          />
          <Select onChange={onChangeCurrencyResult} value={currencyResult}>
            {valueName.map(x => {
              return (
                <option key={x + '2'} value={x}>
                  {x}
                </option>
              );
            })}
          </Select>
        </Div>
        {course !== 0 && (
          <Text>
            <Span>За курсом: </Span>
            {course}
          </Text>
        )}
      </form>
    </CalcFormBox>
  );
};
