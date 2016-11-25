import React from 'react';

export default function(props) {
	const classes = ['wrapper'];

	if (props.translated) {
		classes.push('wrapper--translated');
	}
  return (
    <div className={classes.join(' ')} onClick={props.closeDrower}>{props.children}</div>
  )
};
