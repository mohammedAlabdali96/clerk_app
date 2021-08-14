import React, { useState, useCallback } from 'react';
import { useTheme } from './theme/useTheme';



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


    return(
        <>
            <div className="d-md-flex justify-content-center align-content-center">
                    <div className="text-center px-2 pt-1">
                        <h6 className="text-xl-center my-3 my-md-0 text-md-right">Cards background color</h6>
                    </div>
                    <div className="border width-md-25 width-sm-100 d-flex justify-content-between align-content-center">
                        <span className="mt-1 pl-1">{theme.bgColor}</span>
                        <input className="my-1" type="color" name="bgColor" value= { theme.bgColor ? theme.bgColor : '#FFFFFF' } onChange={(e) => handleChange(e.target.value)}/>
                    </div>
            </div>
        </>
    )
};

export default CreateThemeContent;