import LandingPage from "./pages/landingPage";
import {useTheme} from "./theme/useTheme";
import React, {useState} from "react";
import {ThemeProvider} from 'styled-components';
import {GlobalStyles} from "./theme/GlobalStyles";
import CreateThemeContent from "./CreateThemeContent";

function App() {
    const {theme, themeLoaded, setMode} = useTheme();
    const [newTheme, setNewTheme] = useState(theme);
    if(!theme) return null
    const createTheme = (t) => {
        setNewTheme(t);
        setMode(t);
    }

    if (!themeLoaded) return null;

    return (
        <>
            {themeLoaded && <ThemeProvider theme={theme}>
                <GlobalStyles/>

                <header className="my-4">
                    <CreateThemeContent newTheme={newTheme} ccreate={createTheme}/>
                </header>
                <LandingPage/>

            </ThemeProvider>
            }
        </>
    );
}

export default App;
