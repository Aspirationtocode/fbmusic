import React from 'react';
import Card from './Card.js';
import videos from './../../../static/assets/data/videos.json';

class InfoBar extends React.Component {
	render() {
		return (
			<div className="info-bar">
				{
					videos.map((video, i) => {
						return (
							<Card title={video.title} url={video.url} key={i}/>
						);
					})
				}
				<div className="info-bar__gradient"></div>
			</div>
		);
	}
}

export default InfoBar;
