import React, { useState, useEffect, useCallback } from 'react';
import { useTheme } from './theme/useTheme';
import {setToLS} from "./utils/storage";



const CreateThemeContent = props => {
    const {theme, setMode} = useTheme();
    console.log(theme)
    const [state, setState] = useState(theme);


    const handleChange = useCallback(
        (val) => {
            setState({bgColor: val});
            setMode({bgColor: val})
            props.setColor({bgColor: val})
        },
        [state]
    );

    // useEffect(() => {
    //     setState(theme)
    // }, [theme]);

    return(
        <>
            <div className="row justify-content-center">
                <div className="col-6">
            <div className="row justify-content-center">
                    <div className="col-4 mt-1">
                        <label style={{backgroundColor: theme.bgColor}} htmlFor="bg_color">change the card color</label> {' '}
                    </div>
                    <div className="border col-6 d-flex justify-content-between align-content-center">
                        <span className="mt-1">{theme.bgColor}</span>
                        <input className="mt-1" type="color" id="bg_color" name="bgColor" value= { theme.bgColor ? theme.bgColor : '#FFFFFF' } onChange={(e) => handleChange(e.target.value)}/>
                    </div>
                    <div className="col-2 justify-content-center">
                    </div>
            </div>
                </div>
            </div>
        </>
    )
};

export default CreateThemeContent;