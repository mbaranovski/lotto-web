import React from 'react';
import {Number} from './Number';

export default class DrawBox extends React.Component {


    render() {

        const {wide, config: {bg, footer, color, special, title, subTitle}} = this.props;

        return (
            <div style={{borderLeftColor: color}} className={`draw-box__item ${wide ? 'draw-box__item--wide' : ''}`}>
                <div className="columns flex draw-box__top" style={{backgroundImage: `url(${bg})`}}>
                    <div className="draw-box__name">
                        <div className={`draw-box__title ${wide ? 'draw-box__title--big' : ''}`}>{title}</div>
                        <div className="draw-box__sub-title">{subTitle}</div>
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
                </div>

                <div className="columns flex draw-box__bottom">
                    <div className={`flex draw-box__bottom__results ${wide ? 'draw-box__bottom__results--wide' : ''}`}>
                        <div className="draw-box__bottom__results__side">
                            <div>Winning numbers</div>
                            <Number number={20}/>
                            <Number number={15}/>
                            <Number number={19}/>
                        </div>
                        <div className="draw-box__bottom__results__side">
                            <div>{special}</div>
                            <div><Number color={color} number={11}/></div>
                        </div>
                    </div>
                    <div className="draw-box__footer">
                        {footer.map(item => (<a className="draw-box__footer__link" href={item.link}>{item.name}</a>))}
                    </div>
                </div>
            </div>
        )
    }
}