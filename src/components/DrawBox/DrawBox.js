import React from 'react';
import PropTypes from 'prop-types';
import {Number} from './Number';
import KenolandDrawBox from '../Kenoland/KenolandDrawBox';

export default class DrawBox extends React.Component {

    state = {
        step: 'last'
    };

    toggleStep = () => this.props.config.toggleable && this.setState(state => ({step: state.step === 'last' ? 'next' : 'last'}));

    parseDrawingDate = ({day, month, year}) => new Date(`${month}.${day}.${year}`).toDateString();

    render() {
        const {data, config: {wide, background, footer, color, special, title, subTitle, type, logo, strong, time, order, dataSpecialName, numberSequence}} = this.props;

        if (type === 'kenoland') {
            return <KenolandDrawBox title={title} subTitle={subTitle} background={background}/>
        }

        const drawData = data[this.state.step];
        if (!drawData) return null;
        console.log('MICHAL: ', drawData)
        const numbers = numberSequence ? drawData.numbers[0].toString().split('') : drawData.numbers;
        const specialNumbers = drawData[dataSpecialName];
        return (
            <div style={{borderLeftColor: color}} className={`draw-box__item ${wide ? 'draw-box__item--wide' : ''}`}>
                <div className="columns flex draw-box__top" style={{background}}>
                    <div className="draw-box__name">
                        <div className={`draw-box__title ${wide ? 'draw-box__title--big' : ''}`}>{title}</div>
                        <div
                            className={`${strong ? 'draw-box__sub-title--big' : 'draw-box__sub-title'}`}>{subTitle}</div>
                        {time && <div className="draw-box__top__time"><i
                            className="draw-box__top__time-icon icon-clock-2"></i>{time}</div>}

                    </div>
                    <div className="flex draw-box__controls">
                        <i data-testid="toggle-draw" onClick={this.toggleStep} className="draw-box__arrow icon-arrow-67"></i>
                        <div className="draw-box__current-draw">
                            <div className="draw-box__current-draw__name">
                                DRAW {drawData.nr}
                            </div>
                            <div className="draw-box__current-draw__date">
                                {this.parseDrawingDate(drawData.date)}
                            </div>
                        </div>
                        <i onClick={this.toggleStep} className="draw-box__arrow icon-arrow-68"></i>
                    </div>
                    {logo && <img src={logo} className="draw-box__top__logo"/>}
                </div>

                <div className="columns flex draw-box__bottom">

                    <div className={`flex draw-box__bottom__results ${wide ? 'draw-box__bottom__results--wide' : ''}`}>
                        {numbers &&
                        <div data-testid="winning-numbers" className="draw-box__bottom__results__side">
                            <div>Winning numbers</div>
                            {numbers.map((number, index) => <Number key={`number-${index}`}
                                                                    number={number}/>)}
                        </div>}
                        {special && specialNumbers &&
                        <div data-testid="special-numbers" className="draw-box__bottom__results__side">
                            <div>{special}</div>
                            <div>{specialNumbers.map((number, index) => <Number
                                key={`special-number-${index}`}
                                color={color} number={number}/>)}</div>
                        </div>}
                    </div>
                    <div className="draw-box__footer">
                        {footer && footer.map((item, index) => (
                            <a key={`footer-link-${index}-${order}`} className="draw-box__footer__link"
                               href={item.link}>{item.name}</a>))}
                    </div>
                </div>
            </div>
        )
    }
}

DrawBox.propTypes = {
    config: PropTypes.object.isRequired
}