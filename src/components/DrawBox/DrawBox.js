import React from 'react';
import PropTypes from 'prop-types';
import {Number} from './Number';
import KenolandDrawBox from '../Kenoland/KenolandDrawBox';

export default class DrawBox extends React.Component {
    render() {

        const {data: {numbers = [], specialNumbers = []}, config: {wide, background, footer, color, special, title, subTitle, type, logo, strong, time, order}} = this.props;

        if (type === 'kenoland') {
            return <KenolandDrawBox title={title} subTitle={subTitle} background={background}/>
        }

        return (
            <div style={{borderLeftColor: color}} className={`draw-box__item ${wide ? 'draw-box__item--wide' : ''}`}>
                <div className="columns flex draw-box__top" style={{background}}>
                    <div className="draw-box__name">
                        <div className={`draw-box__title ${wide ? 'draw-box__title--big' : ''}`}>{title}</div>
                        <div
                            className={`${strong ? 'draw-box__sub-title--big' : 'draw-box__sub-title'}`}>{subTitle}</div>
                        {time && <div className="draw-box__top__time"><i className="draw-box__top__time-icon icon-clock-2"></i>{time}</div>}

                    </div>
                    <div className="flex draw-box__controls">
                        <i className="draw-box__arrow icon-arrow-67"></i>
                        <div className="draw-box__current-draw">
                            <div className="draw-box__current-draw__name">
                                DRAW 3753
                            </div>
                            <div className="draw-box__current-draw__date">
                                Wed, 4 Apr 2018
                            </div>
                        </div>
                        <i className="draw-box__arrow icon-arrow-68"></i>
                    </div>
                    {logo && <img src={logo} className="draw-box__top__logo"/>}
                </div>

                <div className="columns flex draw-box__bottom">
                    <div className={`flex draw-box__bottom__results ${wide ? 'draw-box__bottom__results--wide' : ''}`}>
                        <div data-testid="winning-numbers" className="draw-box__bottom__results__side">
                            <div>Winning numbers</div>
                            {numbers.map((number, index) => <Number key={`number-${index}`} number={number}/>)}
                        </div>
                        {special && <div data-testid="special-numbers" className="draw-box__bottom__results__side">
                            <div>{special}</div>
                            <div>{specialNumbers.map((number, index) => <Number key={`special-number-${index}`} color={color} number={number}/>)}</div>
                        </div>}
                    </div>
                    <div className="draw-box__footer">
                        {footer && footer.map((item, index) => (
                            <a key={`footer-link-${index}-${order}`} className="draw-box__footer__link" href={item.link}>{item.name}</a>))}
                    </div>
                </div>
            </div>
        )
    }
}

DrawBox.propTypes = {
    config: PropTypes.object.isRequired
}