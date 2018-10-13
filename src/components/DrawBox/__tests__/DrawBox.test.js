import React from 'react';
import { render, cleanup, within } from 'react-testing-library';
import DrawBox from '../DrawBox';
import {UPPER_DRAWS_SETTINGS} from '../../../settings';

beforeEach(cleanup);

test('should render default DrawBox according to the provided config', () => {

    const { getByText, getByTestId } = render(<DrawBox data={{numbers: [1,2,3], specialNumbers: [4,5,6]}} config={UPPER_DRAWS_SETTINGS.MON_WED_LOTTO}/>);

    getByText('MON & WED LOTTO');
    getByText('Monday & Wednesday Lotto');
    getByText('Winning numbers');

    within(getByTestId('winning-numbers')).getByText('1');
    within(getByTestId('winning-numbers')).getByText('2');
    within(getByTestId('winning-numbers')).getByText('3');

    within(getByTestId('special-numbers')).getByText('4');
    within(getByTestId('special-numbers')).getByText('5');
    within(getByTestId('special-numbers')).getByText('6');

    getByText('Prize details');
    getByText('Help & FAQ');
});

test('should render kendoland custom DrawBox according to the provided config', () => {

    const { getByText, queryByTestId } = render(<DrawBox data={{}} config={UPPER_DRAWS_SETTINGS.KENOLAND}/>);

    getByText('KENOLAND');
    getByText('Draws every 4 minutes');
    getByText('BET NOW');
    expect(queryByTestId('winning-numbers')).toBeFalsy();
    expect(queryByTestId('special-numbers')).toBeFalsy();
});