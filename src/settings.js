
// This can be easily externalized and fetched dynamically.

export const UPPER_DRAWS_SETTINGS = {
    MON_WED_LOTTO: {
        order: 1,
        background: `url(${require('./assets/images/draws/mon_wed_lotto.png')}) no-repeat center / cover`,
        footer: [{name: 'Prize details', link: '#'}, {name: 'Help & FAQ', link: '#'},],
        color: '#714C9C',
        special: 'Supps',
        title: 'MON & WED LOTTO',
        subTitle: 'Monday & Wednesday Lotto',
        dataName: 'monWedOz',
        dataSpecialName: 'supplementary',
        wide: true,
        toggleable: true
    },
    KENOLAND: {
        order: 2,
        background: `url(${require('./assets/images/draws/kenoland_lotto.png')}) no-repeat center / cover`,
        title: 'KENOLAND',
        subTitle: 'Draws every 4 minutes',
        type: 'kenoland'
    },
    POWERBALL: {
        order: 3,
        background: `url(${require('./assets/images/draws/powerball.png')}) no-repeat center / cover`,
        footer: [{name: 'Prize details', link: '#'}, {name: 'Help & FAQ', link: '#'},],
        color: '#3074AF',
        special: 'Supps',
        title: 'POWERBALL',
        subTitle: 'Drawn every Thursday',
        dataName: 'powerBall',
        dataSpecialName: 'powerballs',
        toggleable: true
    },
    TATTS_LOTTO: {
        order: 4,
        background: `url(${require('./assets/images/draws/tattslotto.png')}) no-repeat center / cover`,
        footer: [{name: 'Prize details', link: '#'}, {name: 'Help & FAQ', link: '#'},],
        color: '#DD3437',
        special: 'Supps',
        title: 'TATTSLOTTO',
        subTitle: 'X Lotto, Gold Lotto, Saturday Lotto.',
        dataName: 'saturdayOz',
        dataSpecialName: 'supplementary',
        toggleable: true
    },
    OZ_LOTTO: {
        order: 5,
        background: `url(${require('./assets/images/draws/oz_lotto.png')}) no-repeat center / cover`,
        footer: [{name: 'Prize details', link: '#'}, {name: 'Help & FAQ', link: '#'},],
        color: '#479E3D',
        special: 'Supps',
        title: 'OZ LOTTO',
        subTitle: 'Drawn every Tuesday',
        dataName: 'ozLotto',
        dataSpecialName: 'bonus',
        toggleable: true
    }
};

export const LOWER_DRAWS_SETTINGS = {
    US_POWER: {
        order: 1,
        background: 'linear-gradient(90deg, #FA6A52 0%, #E92A2A 100%)',
        logo: require('./assets/images/draws/us_power.png'),
        footer: [{name: 'Prize details', link: '#'}, {name: 'Bet Now', link: '#'},],
        color: '#FA6A52',
        special: 'P Ball',
        title: 'US POWER',
        subTitle: '$50 Million*',
        dataName: 'ozPowerBall',
        dataSpecialName: 'powerBall',
        wide: true,
        strong: true,
        time: '2 Std. 47 Min.',
        toggleable: true
    },
    WORLD_MILLIONS: {
        order: 2,
        background: 'linear-gradient(90deg, #51A7E4 0%, #1A4088 100%)',
        logo: require('./assets/images/draws/world_millions.png'),
        footer: [{name: 'Prize details', link: '#'}, {name: 'Bet Now', link: '#'},],
        color: '#51A7E4',
        title: 'WORLD MILLIONS',
        subTitle: '$50 Million',
        dataName: 'worldMillions',
        strong: true,
        time: '2 Std. 47 Min.',
        numberSequence: true,
        toggleable: false
    },
    US_MEGA_MILLIONS: {
        order: 3,
        background: 'linear-gradient(90deg, #88ADDF 0%, #3957C8 100%)',
        logo: require('./assets/images/draws/us_mega_millions.png'),
        footer: [{name: 'Prize details', link: '#'}, {name: 'Bet Now', link: '#'},],
        color: '#88ADDF',
        special: 'M Millions',
        title: 'US MEGA MILLIONS',
        subTitle: '$50 Million*',
        dataName: 'megaMillions',
        dataSpecialName: 'megaballs',
        strong: true,
        time: '2 Std. 47 Min.',
        toggleable: true

    },
    KENO247: {
        order: 4,
        background: 'linear-gradient(92.59deg, #ED1A3B 0%, rgba(198,22,139,0.5) 100%)',
        logo: require('./assets/images/draws/keno_247.png'),
        footer: [{name: 'Prize details', link: '#'}, {name: 'Bet Now', link: '#'},],
        color: '#ED1A3B',
        title: 'KENO 24/7',
        subTitle: '$50 Million',
        dataName: 'keno247',
        strong: true,
        time: '2 Std. 47 Min.',
        toggleable: true

    },
    FRI_LOTTO: {
        order: 5,
        background: 'linear-gradient(90deg, #E0017C 0%, #95248C 100%, rgba(144,38,141,0.5) 100%)',
        logo: require('./assets/images/draws/fri_lotto.png'),
        footer: [{name: 'Prize details', link: '#'}, {name: 'Bet Now', link: '#'},],
        color: '#E0017C',
        title: 'FRI LOTTO',
        subTitle: '$50 Million',
        dataName: 'fridayLotto',
        strong: true,
        time: '2 Std. 47 Min.',
        numberSequence: true,
        toggleable: false
    }
}