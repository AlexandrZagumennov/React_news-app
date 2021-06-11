import React from 'react';
import './DeveloperPhoto.scss';
import Photo from '../../Images/developer-photo.jpg'

const DeveloperPhoto = () => {
    return (
        <div className="developer-photo">
           <img src={Photo} alt = "Developer photo will print here" className="photo"/>
        </div>
    )
};

export default DeveloperPhoto;

