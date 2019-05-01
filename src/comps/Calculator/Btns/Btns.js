import React, { Component } from 'react';

import './btn.css' ;

class Btns extends Component {
	propsToBtn = () => {
		return this.props.data.map( (btn) => {
			return <button onClick={() => this.props.onClick(btn)} key={btn} 
						   className={"button "+this.props.extra} id={btn}> {btn} </button> 
		}) ;
	}

	render() {
		return (
			<div className="btn-con">
				{this.propsToBtn()}
			</div>
		);
	}
}

export default Btns ;
