import React, { FC, useState, useLayoutEffect } from 'react';
import { HeaderBox, Logo, Button, Colo, BoxButton } from './Header.styled';

export const Header: FC = () => {
  const [cheked, setCheked] = useState<boolean>(true);
  const [theme, setTheme] = useState<string>('wihte');

  useLayoutEffect((): any => {
    document.documentElement.setAttribute('dark-theme', theme);
  }, [theme]);

  function abs() {
    setTheme('dark');
    setCheked(prev => !prev);
  }

  return (
    <HeaderBox>
      <Logo>CurrencyCalculator</Logo>
      <BoxButton>
        <Button onClick={abs}>
          <Colo cheked={cheked} />
        </Button>
      </BoxButton>
    </HeaderBox>
  );
};
