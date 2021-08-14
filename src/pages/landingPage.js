import React from "react";
import { useState, useEffect, useRef}  from 'react'
import Slider from "react-slick";
import useWindowSize from "../hooks/useWindowSize";
import Card from '../components/card'


const LandingPage = () => {
    const [page, setPage] = useState(1);
    const [data, setData] = useState(1);
    const [isLoading , setIsLoading] = useState(true)
    const sliderRef = useRef();

    const windowSize = useWindowSize();
    const slidesToShow = windowSize === 'sm' || windowSize === 'md'  ? 1 : windowSize === 'lg' ? 2 : 3;



    const fetchData = () => {
        return fetch("https://randomuser.me/api/?results=100")
            .then((response) => response.json())
            .then((data) => {
                setData(data)
                setIsLoading(false)
            });
    }
    useEffect(() => {
        if(page % 90 ===0) {
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
    console.log(data.results.length)



    function NextArrow(props) {
        const { className, style } = props;
        const gotoNext = () => {
            setPage(page + 1)
            sliderRef.current.slickNext();
        }
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "red" }}
                onClick={gotoNext}
            />
        );
    }

    function PrevArrow(props) {
        const { className, style } = props;
        const gotoPrev = () => {
            sliderRef.current.slickPrev();
        }
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "green" }}
                onClick={gotoPrev}
            />
        );
    }


    const settings = {
        dots: false,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };
    console.log(windowSize)

    return (
        <>
            <div className="container px-lg-10">
                {isLoading &&
                <div>Loading</div>
                }



                    <div className="container">
                        <Slider     ref={sliderRef}
                                    {...settings}>
                            {data.results.map((user, i) => (
                            <div className="" key={i}>
                                <div className="d-flex justify-content-center align-content-stretch" >
                                    <Card user={user}/>
                                </div>
                            </div>
                                ))}
                        </Slider>
                    </div>
            </div>

        </>
    );
};

export default LandingPage;