import React from 'react';
import PropTypes from 'prop-types';
import DrawBox from './DrawBox';

const DrawBoxContainer = ({settings}) => <div className="draw-box">
    <div className="flex draw-box__container">
        {
            Object.values(settings)
                .sort((a, b) => a.order - b.order)
                .map((config) => (<DrawBox data={{}} key={`draw-box-${config.order}`} config={config}/>))
        }
    </div>
</div>

DrawBoxContainer.propTypes = {
    settings: PropTypes.object.isRequired
};

export default DrawBoxContainer;