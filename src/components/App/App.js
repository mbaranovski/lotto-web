import React, {Component} from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import Divider from '../Divider/Divider';
import KenolandDivider from '../Kenoland/KenolandDivider';
import DrawBoxContainer from '../DrawBox/DrawBoxContainer';
import {LOWER_DRAWS_SETTINGS, UPPER_DRAWS_SETTINGS} from '../../settings';
import Spinner from '../Spinner/Spinner';

class App extends Component {

    state = {
        data: null
    }

    async componentDidMount() {
        const {data} = await axios.get('https://www.lottoland.com/api/drawings');
        this.setState({data})
    }

    render() {
        const {data} = this.state;

        return (
            <div className="columns main-layout">
                <div className="columns main-layout__container">
                    <Header/>
                    <Divider blackText={'CHECK OUT'} greenText={'LATEST LOTTO RESULTS'}/>
                    {data ? <React.Fragment>
                        <DrawBoxContainer data={data} settings={UPPER_DRAWS_SETTINGS}/>
                        <KenolandDivider/>
                        <Divider blackText={'NEVER LOSE A TICKET'}/>
                        <DrawBoxContainer data={data} settings={LOWER_DRAWS_SETTINGS}/>
                    </React.Fragment> : <Spinner />}

                </div>
            </div>
        );
    }
}

export default App;
