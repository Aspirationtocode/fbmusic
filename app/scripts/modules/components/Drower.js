import React from 'react';
import SocialList from './SocialList';
import Subscribe from './Subscribe';

class Drower extends React.Component {
	render() {
		return (
			<div className="drower">
				<SocialList />
				<Subscribe />
			</div>
		)
	}
}

export default Drower;
