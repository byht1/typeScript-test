import React, { useState, useEffect } from 'react';
import { Container } from '../../App.styled';
import { privatBank } from '../../server/api';
import { Bank } from './Bank/Bank';
import { Title, TitleDecoration } from './Main.styled';
import { FooObj } from './../../type/type';

export const Main = () => {
  const [privatBanc, setPrivatBanc] = useState<FooObj[]>([]);

  useEffect(() => {
    serverPrivat();
  }, []);

  async function serverPrivat() {
    const data: FooObj[] = await privatBank();
    setPrivatBanc(data);
  }

  return (
    <main>
      <section>
        <Container>
          <Title>
            Курс <TitleDecoration>UAH</TitleDecoration> (гривні)
          </Title>
          <div>
            <img
              src="https://api.privatbank.ua/img/logo-api.svg"
              alt="Логотип ПриватБанка"
            />
            <Bank list={privatBanc} />
          </div>
        </Container>
      </section>
    </main>
  );
};
