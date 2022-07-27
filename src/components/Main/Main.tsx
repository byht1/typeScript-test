import React from 'react';
import { Container } from '../../App.styled';
import { PrivatBank } from './Bank/PrivatBank';
import { MonoBank } from './Bank/MonoBank';
import {
  Title,
  TitleDecoration,
  GrigBox,
  WraperMain,
  CalcBox,
} from './Main.styled';
import { Nby } from './Bank/Nby';
import { World } from './Bank/World';
import { Calc } from './Calc/Calc';

export const Main = () => {
  return (
    <main>
      <section>
        <Container>
          <Title>
            Курс <TitleDecoration>UAH</TitleDecoration> (гривні)
          </Title>
          <WraperMain>
            <GrigBox>
              <World />
              <Nby />
              <PrivatBank />
              <MonoBank />
            </GrigBox>
            <CalcBox>
              <Calc />
            </CalcBox>
          </WraperMain>
        </Container>
      </section>
    </main>
  );
};
