import React from 'react';
import DrawBox from './DrawBox';

const DRAWS_SETTINGS = {
    POWERBALL: {
        bg: require('../../assets/images/draws/powerball.png'),
        footer: [{name: 'Prize details', link: '#'}, {name: 'Help & FAQ', link: '#'},],
        color: '#DD3437',
        special: 'Supps',
        title: 'POWERBALL',
        subTitle: 'Deawn every Thursday',
        dataName: 'powerBall',
        dataSpecialName: 'powerballs'

    },
    MON_WED_LOTTO: {
        bg: require('../../assets/images/draws/mon_wed_lotto.png'),
        footer: [{name: 'Prize details', link: '#'}, {name: 'Help & FAQ', link: '#'},],
        color: '#714C9C',
        special: 'Supps',
        title: 'MON & WED LOTTO',
        subTitle: 'Monday & Wednesday Lotto',
        dataName: 'monWedOz',
        dataSpecialName: 'supplementary'
    },
    TATTS_LOTTO: {
        bg: require('../../assets/images/draws/tattslotto.png'),
        footer: [{name: 'Prize details', link: '#'}, {name: 'Help & FAQ', link: '#'},],
        color: '#714C9C',
        special: 'Supps',
        title: 'TATTSLOTTO',
        subTitle: 'X Lotto, Gold Lotto, Saturday Lotto.',
        dataName: 'monWedOz',
        dataSpecialName: 'supplementary'
    },
    OZ_LOTTO: {
        bg: require('../../assets/images/draws/oz_lotto.png'),
        footer: [{name: 'Prize details', link: '#'}, {name: 'Help & FAQ', link: '#'},],
        color: '#714C9C',
        special: 'Supps',
        title: 'OZ LOTTO',
        subTitle: 'Drawn every Tuesday',
        dataName: 'monWedOz',
        dataSpecialName: 'supplementary'
    }
}

export default class DrawBoxContainer extends React.Component {


    render() {

        return (
            <div className="draw-box">
                <div className="flex draw-box__container">
                    <DrawBox config={DRAWS_SETTINGS.MON_WED_LOTTO} wide/>
                    <DrawBox config={DRAWS_SETTINGS.POWERBALL}/>
                    <DrawBox config={DRAWS_SETTINGS.POWERBALL}/>
                    <DrawBox config={DRAWS_SETTINGS.TATTS_LOTTO}/>
                    <DrawBox config={DRAWS_SETTINGS.OZ_LOTTO}/>
                </div>
            </div>
        )
    }
}