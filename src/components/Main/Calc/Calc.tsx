import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { cacl } from '../../../server/api';

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

type FormData = {
  value: string;
  value2: string;
  currencyOne: string;
  currencyTwo: string;
};

export const Calc: FC = () => {
  const [valueCalc, setvalueCalc] = useState<string>('');
  const { register, handleSubmit } = useForm<FormData>();

  const sublitHendler = handleSubmit(({ value, currencyOne, currencyTwo }) => {
    setvalueCalc(value);
    console.log(value, currencyOne, currencyTwo);
    setvalueCalc(cacl(value, currencyOne, currencyTwo).toString());
    console.log(valueCalc);
  });
  return (
    <form onSubmit={sublitHendler}>
      <div>
        <input {...register('value')} />
        <select {...register('currencyOne')}>
          {valueName.map(x => {
            return (
              <option key={x + '1'} value={x}>
                {x}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <input value={valueCalc} {...register('value2')} />
        <select {...register('currencyTwo')}>
          {valueName.map(x => {
            return (
              <option key={x + '2'} value={x}>
                {x}
              </option>
            );
          })}
        </select>
      </div>
      <input type="submit" />
    </form>
  );
};
