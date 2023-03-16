import React from "react";
import Data from './Data'
import './detailed-page-style.css'


const ProfileDetailedPage = () => {
    return ( 
       <>
        <div className="main-bg d-flex flex-row justify-content-center">
            <div className="d-flex flex-column justify-content-center">
            <h1 className="birthday-heading mb-4">Today's Birthday List</h1>
                {
                   
                 Data.map((item)=> {
                    const {id, name, age, image} = item;
                   
                    return (
                        <div className="profile-card shadow mb-3"  key={id}>
                            <div className="d-flex flex-row">
                                <img src={ image }  className="profile-image"/>
                                <div>
                                    <p className="profile-name">{name}</p>
                                    <p className="profile-age">{age} Years</p>
                                </div>
                            </div>
                        </div>
       )
    }
       )
       }
            </div>
        </div>
        
    </>
    )
}

export default ProfileDetailedPage;