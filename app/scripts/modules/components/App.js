import React from 'react';
import FlexContainer from './FlexContainer';
import TopLine from './TopLine';
import PleerPoster from './PleerPoster';
import InfoBar from './InfoBar';
import Pleer from './Pleer';
import Drower from './Drower';
import Wrapper from './Wrapper';
import constants from './../constants';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			drowerOpened: false
		};
		this.toggleDrower = this.toggleDrower.bind(this);
		this.closeDrower = this.closeDrower.bind(this);
	}
	toggleDrower() {
		this.setState({
			drowerOpened: !this.state.drowerOpened
		})
	}
	closeDrower(event) {
		if (this.state.drowerOpened && event.nativeEvent.pageX >= constants.DROWER_WIDTH) {
			this.setState({
				drowerOpened: false
			})
		}
	}
	render() {
		return (
			<div>
				<Wrapper translated={this.state.drowerOpened} closeDrower={this.closeDrower}>
					<TopLine toggleDrower={this.toggleDrower}/>
					<FlexContainer>
						<PleerPoster />
						<InfoBar />
					</FlexContainer>
					<Pleer />
					<Drower />
				</Wrapper>
			</div>
		);
	}
};

export default App;
