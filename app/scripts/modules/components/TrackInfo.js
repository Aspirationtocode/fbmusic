import React, {PropTypes} from 'react';

const TrackInfo = (props) => {
	return (
		<div className="track-info">
			<div className="track-info__date">{`Posted on ${props.date}`}</div>
			<div className="track-info__title">{props.title}</div>
		</div>
	);
};

TrackInfo.propTypes = {
	date: PropTypes.string,
	title: PropTypes.string,
};

export default TrackInfo;
