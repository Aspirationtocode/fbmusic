import React, {PropTypes} from 'react';
import sizeMe from 'react-sizeme';
import ProgressBar from './ProgressBar.js';

class TrackText extends React.Component {
	constructor(props) {
		super(props);
		this.calculateTrackSeek = this.calculateTrackSeek.bind(this);
	}
	calculateTrackSeek(e) {
		const {props} = this;
		const width = props.size.width;
		props.changeTrackSeek(100 * e.nativeEvent.offsetX / width);
	}
	render() {
		const {props} = this;
		const trackTextWidth = props.size.width;
		return (
			<div>
				<div className="track-text" onClick={this.calculateTrackSeek}>{props.currentTrackTitle}</div>
				<ProgressBar
					currentTrackSeek={props.currentTrackSeek}
					currentTrackWidth={trackTextWidth}
					currentTrackTitle={props.currentTrackTitle}
				/>
			</div>
		);
	}
}

TrackText.propTypes = {
	currentTrackTitle: PropTypes.string,
	currentTrackSeek: PropTypes.number,
	size: PropTypes.object,
	changeTrackSeek: PropTypes.func,
};

export default sizeMe({ monitorWidth: true })(TrackText);
