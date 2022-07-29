import React from 'react';
import { Container } from '../../App.styled';
import { Title, TitleDecoration, WraperMain, CalcBox } from './Main.styled';
import { Calc } from './Calc/Calc';
import { Banks } from './Bank/Banks';

export const Main = () => {
  return (
    <main>
      <section>
        <Container>
          <Title>
            Курс <TitleDecoration>UAH</TitleDecoration> (гривні)
          </Title>
          <WraperMain>
            <Banks />
            {/* <GrigBox>
              <World />
              <Nby />
              <PrivatBank />
              <MonoBank />
            </GrigBox> */}
            <CalcBox>
              <Calc />
            </CalcBox>
          </WraperMain>
        </Container>
      </section>
    </main>
  );
};
