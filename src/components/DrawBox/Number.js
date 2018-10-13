import React from 'react';

export const Number = ({color, number}) => (
    <div className="number" style={{borderColor: color}}>
        {number}
    </div>
)