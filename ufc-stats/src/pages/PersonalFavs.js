import React from 'react'
import homePageBackground2 from '../imgs/homePageBackground2.jpg'
import homePageBackground3 from '../imgs/homePageBackground3.jpg'


const PersonalFavs = () => {
    let favImage = homePageBackground2;
    function renderImage(e) {
        favImage = homePageBackground3;
        console.log("change")
    };
    return (
        <div>
            <img src={favImage} className="p-4 mt-1 h-20" alt="Logo" />
            <button onClick={renderImage}>
                Click
            </button>
            
        </div>
    )
}

export default PersonalFavs