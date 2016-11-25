import React from 'react';

class Card extends React.Component {
	render() {
		const {props} = this;
		return (
			<div className="card">
				<div className="card__description">
					<div className="card__title">{props.title}</div>
					<div className="card__devider" />
				</div>	
				<iframe
					className="card__video"
					width="100%"
					height="auto"
					border="none"
					src={props.url}
					allowFullScreen
				>
				</iframe>
			</div>
		);
	}
}

export default Card;
