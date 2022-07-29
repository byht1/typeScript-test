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
    dataServer(currencyTo, currencyResult);
    calcDataOne();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currencyTo, currencyResult]);

  useEffect(() => {
    calcDataOne();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [course]);

  async function dataServer(
    to: string = currencyTo,
    result: string = currencyResult
  ) {
    const data = await cacl(to, result);
    const course = Number((1 / data.result).toFixed(5));

    setСourse(course);
  }

  function calcDataOne(value: string = valueCalcOne) {
    const total: number = Number(value) / course;
    setValueCalcTwo(total.toFixed(5));
  }

  function calcDataTwo(value: string = valueCalcTwo) {
    const total: number = Number(value) / course;
    setValueCalcOne(total.toFixed(5));
  }

  const onChangeValueCalcOne = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue: string = event.target.value;
    setValueCalcOne(newValue);
    calcDataOne(newValue);
  };

  const onChangeValueCalcTwo = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue: string = event.target.value;
    setValueCalcTwo(newValue);
    calcDataTwo(newValue);
  };

  const onChangeCurrencyTo = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue: string = event.target.value;
    setCurrencyTo(newValue);
  };

  const onChangeCurrencyResult = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newValue: string = event.target.value;
    setCurrencyResult(newValue);
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
