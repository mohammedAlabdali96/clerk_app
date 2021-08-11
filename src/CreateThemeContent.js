import React, { useState, useEffect } from 'react';
import { useTheme } from './theme/useTheme';



const CreateThemeContent = props => {
    const {theme} = useTheme();
    const [state, setState] = useState(theme);

    const handleChange = evt => {
        const value = evt.target.value;
        setState({
            [evt.target.name]: value
        });
        props.ccreate(state)
    }

    useEffect(() => {
        setState(theme)
    }, [theme]);

    return(
        <>
            <div>
                <section>
                    <div>
                    </div>
                    <div>
                        <label style={{backgroundColor: state.bgColor}} htmlFor="bg_color">change the card color</label> {' '}
                        <div className="border">{state.bgColor}</div>
                        <input type="color" id="bg_color" name="bgColor" value= { state.bgColor ? state.bgColor : '' } onChange={ handleChange }/>
                    </div>
                </section>
            </div>
        </>
    )
};

export default CreateThemeContent;