import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import audios from './../../../static/assets/data/audios.json';

class PleerList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Scrollbars style={{height: '200px'}}>
				<div className="pleer-list">
					{
						audios.map((audio) => {
							return (
								<div
									className="pleer-list__track-title"
									data-id={audio.audioId}
									onClick={() => {this.props.changeTrackId(audio.audioId)}}>{`${audio.audioTitle}`}
								</div>
							)
						})
					}
				</div>
      </Scrollbars>
		)
	}
}

export default PleerList;
