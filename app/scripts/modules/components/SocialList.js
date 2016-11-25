import React from 'react';

class SocialList extends React.Component {
  render() {
    return (
      <ul className="social-list">
				<li className="social-list__item">
					<a href="https://soundcloud.com/favouritebestmusic" className="social-list__link">soundcloud</a>
				</li>
				<li className="social-list__item">
					<a href="https://www.facebook.com/profile.php?id=100006799184644" className="social-list__link">facebook</a>
				</li>
				<li className="social-list__item">
					<a href="https://www.instagram.com/favouritebestmusic/" className="social-list__link">instagram</a>
				</li>
				<li className="social-list__item">
					<a href="https://vk.com/yeah__0" className="social-list__link">vk</a>
				</li>
				<li className="social-list__item">
					<a href="https://plus.google.com/u/0/108667992112725501514" className="social-list__link">google+</a>
				</li>
			</ul>
    )
  }
}

export default SocialList;
