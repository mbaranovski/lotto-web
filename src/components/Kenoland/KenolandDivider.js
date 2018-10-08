import React from 'react';
import kenolandLogo from '../../assets/images/kenoland.png';

const KenolandDivider = () => (
    <div className="kenoland-divider">
        <div className="kenoland-divider__wrapper">
            <img className="kenoland-divider__image" src={kenolandLogo} alt=""/>
            <div className="kenoland-divider__text"><strong>Over $350,000 in 6 days to lucky winners!</strong>&nbsp;KENOLAND keeps that winning feeling rolling!&nbsp;<a
                href="#">Learn More</a></div>
        </div>
    </div>
);

export default KenolandDivider;
