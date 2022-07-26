import React, { useState, useEffect } from 'react';
import { Container } from '../../App.styled';
import { NBY, privatBank } from '../../server/api';
import { PrivatBank } from './Bank/PrivatBank';
import { Title, TitleDecoration, GrigBox } from './Main.styled';
import { FooObj } from './../../type/type';
import { Nby } from './Bank/Nby';

export const Main = () => {
  const [privatBanc, setPrivatBanc] = useState<FooObj[]>([]);
  const [nby, setNby] = useState<FooObj[]>([]);

  useEffect(() => {
    serverPrivat();
  }, []);

  async function serverPrivat() {
    const data: FooObj[] = await privatBank();
    const data2 = await NBY();
    setPrivatBanc(data);
    setNby(data2);
  }

  return (
    <main>
      <section>
        <Container>
          <Title>
            Курс <TitleDecoration>UAH</TitleDecoration> (гривні)
          </Title>
          <GrigBox>
            <PrivatBank list={privatBanc} />
            <Nby />
          </GrigBox>
        </Container>
      </section>
    </main>
  );
};
