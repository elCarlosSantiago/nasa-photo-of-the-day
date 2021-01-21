import React from 'react';


export default function Nav(props) {
    const {title, date} = props;

    return (
        <div className='nav'>
            <h1>Daily Title: {title}</h1>
            <h2>{date}</h2>
        </div>
    )

}