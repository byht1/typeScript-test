import { FC } from 'react';
import { IData } from '../../../type/type';
import { Table, Td, Th, IconMono, IconNbu } from './Banl.styled';
import { ReactComponent as IconMvf } from '../../../icon/icon-mvf.svg';

interface IProp {
  data: IData[];
  nameBank: string;
  isDate?: boolean;
}

const img: any = {
  // nbu: (
  //   <img
  //     src="https://bank.gov.ua/frontend/content/logo.png?v=4"
  //     alt="Логотип НБУ"
  //   />
  // ),
  privat: (
    <img
      src="https://api.privatbank.ua/img/logo-api.svg"
      alt="Логотип ПриватБанка"
    />
  ),
};

export const Bank: FC<IProp> = ({ data, isDate, nameBank }) => {
  return (
    <div>
      {nameBank === 'world' && <IconMvf />}
      {nameBank === 'nbu' && <IconNbu />}
      {nameBank && img[`${nameBank}`]}
      {nameBank === 'mono' && <IconMono />}
      <Table>
        <tbody>
          <tr>
            <Td></Td>
            <Th>{isDate ? 'Офіційний курс' : 'Продать'}</Th>
            <Th>{isDate ? 'На дату' : 'Купить'}</Th>
          </tr>
        </tbody>
        {data.map(({ name, buy, sale, date }: any) => {
          return (
            <tbody key={buy + 'nby'}>
              <tr>
                <Td>{name}</Td>
                <Td>{buy}</Td>
                <Td>{sale ? sale : date}</Td>
              </tr>
            </tbody>
          );
        })}
      </Table>
    </div>
  );
};
