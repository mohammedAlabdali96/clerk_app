import React from "react";
import { useState, useEffect}  from 'react'
import Card from '../components/card'

import Carousel from "../components/carousal";


const LandingPage = () => {
    const [page, setPage] = useState(1);
    const [data, setData] = useState(1);
    const [isRunning , setIsRunning] = useState()
    const [isLoading , setIsLoading] = useState(true)

    const fetchData = () => {
        return fetch("https://randomuser.me/api/?results=10")
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setData(data)
                setIsLoading(false)
            });
    }
    useEffect(() => {
        if(page % 8 ===0) {
            setIsLoading(true)
            fetchData()

        }
        if (page ===1) {
            fetchData()
        }
    },[page])









    if (isLoading) {
        return <div className="container-fluid mt-10 text-center">Loading</div>;
    }

    return (
        <>
        <div className="container-fluid">
            <div className="row justify-content-center align-content-center">
                <div className="col-6">
            <div className="input-group mb-3">
                <input type="text" className="form-control" aria-label="Text input with checkbox" />

                <div>
                    <div>
                        <button type="text" className="form-control btn btn-transparent border" aria-label="Text input with checkbox">
                            &&
                        </button>
                    </div>
                </div>
            </div>
                </div>
            </div>

        </div>
            <div className="container px-lg-10">
                {isLoading &&
                <div>Loading</div>
                }
                <Carousel
                    show={3}
                    setPage={setPage}
                    page={page}
                >

                    {data.results.map((user) => (
                    <div>
                        <div style={{padding: 8, maxWidth: 350}}>
                            <Card user={user}/>
                        </div>
                    </div>
                        ))}


                </Carousel>
            </div>

        </>
    );
};

export default LandingPage;