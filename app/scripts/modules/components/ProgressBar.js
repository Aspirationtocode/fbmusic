import React, {PropTypes} from 'react';

class ProgressBar extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		const {props} = this;
		const progressBarWidth = props.currentTrackWidth / 100 * props.currentTrackSeek;
		return (
			<div className="progress-bar" style={{width: `${progressBarWidth}px`}} >{props.currentTrackTitle}</div>
		);
	}

}

ProgressBar.propTypes = {
	currentTrackTitle: PropTypes.string,
	currentTrackSeek: PropTypes.number,
	progress: PropTypes.number,
	changeTrackSeek: PropTypes.func,
};

export default ProgressBar;
