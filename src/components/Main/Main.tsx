import React from 'react';
import { Container } from '../../App.styled';
import { PrivatBank } from './Bank/PrivatBank';
import { MonoBank } from './Bank/MonoBank';
import { Title, TitleDecoration, GrigBox } from './Main.styled';
import { Nby } from './Bank/Nby';

export const Main = () => {
  return (
    <main>
      <section>
        <Container>
          <Title>
            Курс <TitleDecoration>UAH</TitleDecoration> (гривні)
          </Title>
          <GrigBox>
            <Nby />
            <PrivatBank />
            <MonoBank />
          </GrigBox>
        </Container>
      </section>
    </main>
  );
};
