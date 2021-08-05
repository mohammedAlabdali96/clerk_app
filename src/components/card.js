import React from 'react'

const Card = (props) => {

    return (
        <div className="border py-5">
            <div className="d-flex justify-content-center align-content-center">
            <img width="100" height="100" src="https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" className="rounded-circle"/>
            </div>
                <div className="px-9 mt-5">
            <div className="d-flex justify-content-start align-content-center my-2">
            <h6 className="text-left">name:</h6>
            </div>
            <div className="d-flex justify-content-start align-content-center my-2">
            <h6 className="text-left">emil:</h6>
            </div>
            <div className="d-flex justify-content-start align-content-center my-2">
            <h6 className="text-left">Phone Number:</h6>
            </div>
            <div className="d-flex justify-content-start align-content-center my-2">
            <h6 className="text-left">location:</h6>
            </div>
                </div>
        </div>

    )
}

export default Card