import {useEffect, useState} from 'react';
import {getFromLS, setToLS} from '../utils/storage';

export const useTheme = () => {
    const defaultTheme = getFromLS('defaultTheme');
    const [theme, setTheme] = useState(defaultTheme);
    const [themeLoaded, setThemeLoaded] = useState(false);

    const setMode = mode => {
        setToLS('theme', mode)
        setTheme(mode);
    };


    useEffect(() => {
        const localTheme = getFromLS('theme');
        localTheme ? setTheme(localTheme) : setTheme(defaultTheme);
        setThemeLoaded(true);
    }, []);

    return {theme, themeLoaded, setMode};
};