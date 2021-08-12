import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles } from '../theme/GlobalStyles';
import {useTheme} from '../theme/useTheme';
import CreateThemeContent from "../CreateThemeContent";


const Card = ({user}) => {



    // 4: Load all the fonts
    return (
        <>

                    <article className="border py-5 mx-2 card-carousal">
                        <div className="d-flex justify-content-center align-content-center">
                            <img width="100" height="100" src={user.picture.medium} className="rounded-circle"/>
                        </div>
                        <div className=" mt-5">
                            <div className="d-flex justify-content-start align-content-center my-2">
                                <p className="text-left small "><strong>Name:</strong><span className="ml-1">{user.name.first}</span></p>
                            </div>
                            <div className="d-flex justify-content-start align-content-center my-2">
                                <p className="text-left small"><strong>Emil:</strong><span className="ml-1">{user.email}</span></p>
                            </div>
                            <div className="d-flex justify-content-start align-content-center my-2">
                                <p className="text-left small"><strong>Phone Number:</strong><span className="ml-1">{user.phone}</span></p>
                            </div>
                            <div className="d-flex justify-content-start align-content-center my-2">
                                <p className="text-left small"><strong>Location:</strong><span className="ml-1">{user.location.country}</span>{user.location.state}<span className="ml-1">{user.location.street.name}</span>{user.location.street.number}</p>
                            </div>
                        </div>
                    </article>

            </>

    )
}

export default Card