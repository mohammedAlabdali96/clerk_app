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
                    <div className="col-11 text-center px-2 col-md-4 col-lg-3 col-xl-2 mt-1">
                        <h6 style={{backgroundColor: theme.bgColor}} className="text-xl-center my-3 my-md-0 text-md-right">change the card color</h6> {' '}
                    </div>
                    <div className="border col-11 col-md-5 col-lg-3 d-flex justify-content-between align-content-center">
                        <span className="mt-1">{theme.bgColor}</span>
                        <input className="mt-1" type="color" id="bg_color" name="bgColor" value= { theme.bgColor ? theme.bgColor : '#FFFFFF' } onChange={(e) => handleChange(e.target.value)}/>
                    </div>
            </div>
        </>
    )
};

export default CreateThemeContent;