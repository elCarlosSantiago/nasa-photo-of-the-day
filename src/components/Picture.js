import React from 'react';

export default function Picture(props) {
    const {dailyPicture} = props;

    return (
        <div className="picture">
            <img alt="Nasa's Daily and ever-changing photograph" src={dailyPicture} />
        </div>
    )
}