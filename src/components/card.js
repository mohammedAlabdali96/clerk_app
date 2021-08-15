import React from 'react';


const Card = ({user}) => {
    return (
        <>
            <article className="py-5 mx-2 card-carousal">
                <div className="d-flex justify-content-center align-content-center">
                    <img width="100" height="100" alt=" " src={user.picture.medium} className="rounded-circle"/>
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
                        <p className="text-left small"><strong>Location:</strong><span
                            className="ml-1">{user.location.country}</span>{user.location.state}<span
                            className="ml-1"><br/>{user.location.street.name}</span>{user.location.street.number}</p>
                    </div>
                </div>
            </article>
        </>
    )
}

export default Card
