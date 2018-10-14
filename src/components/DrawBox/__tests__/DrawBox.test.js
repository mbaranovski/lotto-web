import React from 'react';
import { render, cleanup, within } from 'react-testing-library';
import DrawBox from '../DrawBox';
import {LOWER_DRAWS_SETTINGS, UPPER_DRAWS_SETTINGS} from '../../../settings';

beforeEach(cleanup);

test('should render default DrawBox according to the provided config', () => {
    const mockedData = {
        last: {
            nr: 1919,
            numbers: [1,2,3],
            supplementary: [4,5,6],
            date: { day: 24, month: 8, year: 2018 },
        },
        next: {
            nr: 2000,
            numbers: [6,7,8],
            date: { day: 25, month: 8, year: 2018 },
        }
    }
    const { getByText, getByTestId } = render(<DrawBox data={mockedData} config={UPPER_DRAWS_SETTINGS.MON_WED_LOTTO}/>);

    getByText('MON & WED LOTTO');
    getByText('Monday & Wednesday Lotto');
    getByText('Winning numbers');
    getByText('Supps');
    getByText('Fri Aug 24 2018');
    getByText('DRAW 1919');
    getByText('Prize details');
    getByText('Help & FAQ');

    within(getByTestId('winning-numbers')).getByText('1');
    within(getByTestId('winning-numbers')).getByText('2');
    within(getByTestId('winning-numbers')).getByText('3');

    within(getByTestId('special-numbers')).getByText('4');
    within(getByTestId('special-numbers')).getByText('5');
    within(getByTestId('special-numbers')).getByText('6');

    // Toggling next draw.
    getByTestId('toggle-draw').click();
    within(getByTestId('winning-numbers')).getByText('6');
    within(getByTestId('winning-numbers')).getByText('7');
    within(getByTestId('winning-numbers')).getByText('8');
    getByText('Sat Aug 25 2018');
});

test('should render kendoland custom DrawBox according to the provided config', () => {

    const { getByText, queryByTestId } = render(<DrawBox data={{}} config={UPPER_DRAWS_SETTINGS.KENOLAND}/>);

    getByText('KENOLAND');
    getByText('Draws every 4 minutes');
    getByText('BET NOW');
    expect(queryByTestId('winning-numbers')).toBeFalsy();
    expect(queryByTestId('special-numbers')).toBeFalsy();
});


test('should handle rendering Draw Boxes with number sequence', () => {
    const mockedData = {
        last: {
            numbers: [8462],
            date: { day: 24, month: 8, year: 2018 },
        }
    };

    const { getByTestId } = render(<DrawBox data={mockedData} config={LOWER_DRAWS_SETTINGS.WORLD_MILLIONS}/>);

    within(getByTestId('winning-numbers')).getByText('8');
    within(getByTestId('winning-numbers')).getByText('4');
    within(getByTestId('winning-numbers')).getByText('6');
    within(getByTestId('winning-numbers')).getByText('2');
});