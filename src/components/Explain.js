import React from 'react';

export default function Explain(props){
    const {explanation, copyright} = props;
    
    return (
        <div className="textExplain">
            <p>{explanation}</p>
            <p>{copyright}</p>
            
        </div>
    )
}