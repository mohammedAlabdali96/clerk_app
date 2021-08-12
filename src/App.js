import LandingPage from "./pages/landingPage";
import {useTheme} from "./theme/useTheme";
import React, {useState} from "react";
import {ThemeProvider} from 'styled-components';
import {GlobalStyles} from "./theme/GlobalStyles";
import CreateThemeContent from "./CreateThemeContent";

function App() {
    const {theme, themeLoaded, setMode} = useTheme();
    const [newTheme, setNewTheme] = useState(theme);
    if (!themeLoaded) return null;
    if(!theme) return  null
    const setColor = (t) => {
        setNewTheme(t);
        setMode(t);
    }


    return (
        <>
            {themeLoaded && <ThemeProvider theme={theme}>
                <GlobalStyles/>

                <header className="my-4 container-fluid">
                    <CreateThemeContent newTheme={newTheme} setColor={setColor}/>
                </header>
                <LandingPage/>

            </ThemeProvider>
            }
        </>
    );
}

export default App;
