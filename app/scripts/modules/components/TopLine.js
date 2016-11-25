import React from 'react';

class TopLine extends React.Component {
	render() {
		return (
			<div className="top-line">
				<div className="top-line__icon top-line__icon--open-menu" onClick={this.props.toggleDrower}/>
				<div className="top-line__logo-icon" />
				<div className="top-line__logo-text">FavouriteBestMusic</div>
				<div className="top-line__social-icons">
					<div className="top-line__icon top-line__icon--youtube" />
					<div className="top-line__icon top-line__icon--soundcloud" />
					<div className="top-line__icon top-line__icon--vk" />
					<div className="top-line__icon top-line__icon--facebook" />
				</div>
			</div>
		);
	}
}

export default TopLine;
