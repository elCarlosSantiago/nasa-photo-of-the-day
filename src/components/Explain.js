import React from 'react';

export default function Explain(props){
    const {explanation} = props;

    return (
        <div className="textExplain">
            <p>{explanation}</p>
        </div>
    )
}