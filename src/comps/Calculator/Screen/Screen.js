import React, { Component } from 'react';

import './screen.css' ;

class Screen extends Component {
	render() {
		return (
			<div className="scr">
				{this.props.text}
			</div>
		);
	}
}

export default Screen ;
