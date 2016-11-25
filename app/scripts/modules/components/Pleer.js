import React from 'react';
import { Howl } from 'howler';
import TrackText from './TrackText';
import PleerList from './PleerList';
import audios from './../../../static/assets/data/audios.json';

class Pleer extends React.Component {
	constructor(props) {
		super(props);
		this.playTrack = this.playTrack.bind(this);
		this.pauseTrack = this.pauseTrack.bind(this);
		this.changeTrackId = this.changeTrackId.bind(this);
		this.filterId = this.filterId.bind(this);
		this.changeTrackSeek = this.changeTrackSeek.bind(this);
		this.togglePleerList = this.togglePleerList.bind(this);
		this.closePleerList = this.closePleerList.bind(this);
		this.state = {
			pleerListOpened: false,
			playing: false,
			currentTrackId: 0,
			currentTrackTitle: audios[0].audioTitle,
			currentTrack: new Howl({
				src: [audios[0].audioUrl],
				onend: () => {
					this.changeTrackId(this.filterId(audios[0].audioId));
				}
			}),
			currentTrackDuration: 0,
			currentTrackSeek: 0,
		};
	}

	togglePleerList() {
		this.setState({
			pleerListOpened: !this.state.pleerListOpened
		});
	}

	closePleerList() {
		this.setState({
			pleerListOpened: false
		});
	}

	playTrack() {
		const {state} = this;
		this.setState({
			playing: true,
			currentTrackDuration: state.currentTrack.duration(),
		});

		setInterval(() => {
			this.updateTrackSeek();
		}, 100);

		state.currentTrack.play();
	}

	pauseTrack() {
		const {state} = this;
		this.setState({
			playing: false,
		});
		state.currentTrack.pause();
	}

	updateTrackSeek() {
		const {state} = this;
		this.setState({
			currentTrackSeek: 100 * state.currentTrack.seek() / state.currentTrack.duration(),
		});
	}

	changeTrackSeek(percent) {
		const {state} = this;
		state.currentTrack.seek(state.currentTrack.duration() / 100 * percent);
	}

	changeTrackId(id, playBoolean) {
		const {state} = this;
		state.currentTrack.stop();
		const newSrc = audios[id].audioUrl;
		const newTrack = new Howl({
			src: newSrc,
			onend: () => {
				this.changeTrackId(this.filterId(audios[id].audioId));
			}
		});

		this.setState({
			currentTrackId: id,
			currentTrack: newTrack,
			currentTrackTitle: audios[id].audioTitle,
			currentTrackSeek: 0,
		});

		if (playBoolean) {
			this.setState({
				playing: true
			});
			newTrack.play();
		}

		if (state.playing) {
			newTrack.play();
		}

	}

	filterId(id) {
		let filteredId;
		if (id === -1) {
			filteredId = audios.length - 1;
		} else if (id === audios.length) {
			filteredId = 0;
		} else {
			filteredId = id;
		}
		return filteredId;
	}

	render() {
		const {state} = this;
		const pleerClasses = ['pleer'];
		if (state.pleerListOpened) {
			pleerClasses.push('pleer--opened');
		}
		let icon;
		if (state.playing) {
			icon = <div className="pleer__icon pleer__icon--pause" onClick={this.pauseTrack} />;
		} else {
			icon = <div className="pleer__icon pleer__icon--play" onClick={this.playTrack} />;
		}
		return (
			<div className={pleerClasses.join(' ')} onMouseLeave={this.closePleerList}>
				<div className="pleer__wrapper">
					<div className="pleer__controls">
						<div className="pleer__icon pleer__icon--previous" onClick={() => {this.changeTrackId(this.filterId(--state.currentTrackId));}} />
						{icon}
						{<div className="pleer__icon pleer__icon--next" onClick={() => {this.changeTrackId(this.filterId(++state.currentTrackId));}} />}
					</div>
					<div className="pleer__playlist playlist" onClick={this.togglePleerList}>
						<div className="playlist__icon"></div>
						<div className="playlist__text">Playlist</div>
					</div>
					<div className="pleer__track-title track-title">
						<TrackText
							currentTrackSeek={state.currentTrackSeek}
							currentTrackTitle={state.currentTrackTitle}
							changeTrackSeek={this.changeTrackSeek}
						/>
					</div>
				</div>
				<PleerList changeTrackId={(id) => {this.changeTrackId(--id, true)}}/>
			</div>
		);
	}
}

export default Pleer;
