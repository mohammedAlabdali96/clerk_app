import { useEffect, useState } from 'react';
import { setToLS, getFromLS } from '../utils/storage';

export const useTheme = () => {
    const themes = getFromLS('all-themes');
    const [theme, setTheme] = useState(themes.data);
    const [themeLoaded, setThemeLoaded] = useState(false);

    const setMode = mode => {
        setToLS('theme', mode)
        setTheme(mode);
    };


    useEffect(() => {
        const localTheme = getFromLS('theme');
        localTheme ? setTheme(localTheme) : setTheme(themes.data);
        setThemeLoaded(true);
    }, [themeLoaded]);

    return { theme, themeLoaded, setMode };
};