import React from "react";
import Card from '../components/card'

import Carousel from "../components/carousal";

const LandingPage = () => {


    return (
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
            <Carousel
                show={3}
            >
                <div>
                    <div style={{padding: 8}}>
                        <Card />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <Card />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <Card />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <Card />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <Card />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <Card />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <Card />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <Card />
                    </div>
                </div>
            </Carousel>

        </div>
    );
};

export default LandingPage;