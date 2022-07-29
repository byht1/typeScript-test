import { useState, useLayoutEffect } from 'react';

export const useTheme = () => {
  const [theme, setTheme] = useState<string>('wihte');

  useLayoutEffect((): any => {
    document.documentElement.setAttribute('dark-theme', theme);

    return { theme, setTheme };
  }, [theme]);
};
