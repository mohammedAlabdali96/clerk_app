import React from "react";
import Card from '../components/card'

import Carousel from "../components/carousal";

const LandingPage = () => {
    const images = [
        'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
        'https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80',
        'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80',
        'https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80'
    ]

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
                <Carousel
                    show={3}
                >
                    <div>
                        <div style={{padding: 8, maxWidth: 350}}>
                            <Card />
                        </div>
                    </div>
                    <div>
                        <div style={{padding: 8, maxWidth: 350}}>
                            <Card />
                        </div>
                    </div>
                    <div>
                        <div style={{padding: 8, maxWidth: 350}}>
                            <Card />
                        </div>
                    </div>
                    <div>
                        <div style={{padding: 8, maxWidth: 350}}>
                            <Card />
                        </div>
                    </div>
                    <div>
                        <div style={{padding: 8, maxWidth: 350}}>
                            <Card />
                        </div>
                    </div>
                    <div>
                        <div style={{padding: 8, maxWidth: 350}}>
                            <Card />
                        </div>
                    </div>
                    <div>
                        <div style={{padding: 8, maxWidth: 350}}>
                            <Card />
                        </div>
                    </div>
                    <div>
                        <div style={{padding: 8, maxWidth: 350}}>
                            <Card />
                        </div>
                    </div>
                </Carousel>
            </div>

        </>
    );
};

export default LandingPage;