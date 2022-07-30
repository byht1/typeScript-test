import React, { FC, useState, useLayoutEffect } from 'react';
import { HeaderBox, Logo, Button, Colo, BoxButton } from './Header.styled';

export const Header: FC = () => {
  const [cheked, setCheked] = useState<boolean>(true);
  const [theme, setTheme] = useState<string>('wihte');

  useLayoutEffect((): any => {
    document.documentElement.setAttribute('dark-theme', theme);
  }, [theme]);

  function themeTogle() {
    if (theme === 'dark') {
      setTheme('wihte');
    }
    if (theme === 'wihte') {
      setTheme('dark');
    }

    setCheked(prev => !prev);
  }

  return (
    <HeaderBox>
      <Logo>CurrencyCalculator</Logo>
      <BoxButton>
        <Button onClick={themeTogle}>
          <Colo cheked={cheked} />
        </Button>
      </BoxButton>
    </HeaderBox>
  );
};
