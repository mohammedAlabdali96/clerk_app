import React from 'react'

const Card = ({user}) => {

    return (
        <div className="border py-5">
            <div className="d-flex justify-content-center align-content-center">
            <img width="100" height="100" src={user.picture.medium} className="rounded-circle"/>
            </div>
                <div className="px-9 mt-5">
            <div className="d-flex justify-content-start align-content-center my-2">
            <h6 className="text-left">name:{user.name.first}</h6>
            </div>
            <div className="d-flex justify-content-start align-content-center my-2">
            <h6 className="text-left">emil:{user.email}</h6>
            </div>
            <div className="d-flex justify-content-start align-content-center my-2">
            <h6 className="text-left">Phone Number: {user.phone}</h6>
            </div>
            <div className="d-flex justify-content-start align-content-center my-2">
            <h6 className="text-left">location: {user.location.country} {user.location.state} {user.location.street.name} {user.location.street.number}</h6>
            </div>
                </div>
        </div>

    )
}

export default Card