import React, { Component } from 'react';

import './calculator.css' ;
import Screen from './Screen/Screen.js' ;
import Btns from './Btns/Btns.js' ;

class Calculator extends Component {
	constructor()
	{	super() ;
		this.str = '' ;
		this.state = {
			text  : '0' ,
			owner : 'Manan' ,
		}
	}

	onBtnClick = (char) => {
		const txt = this.state.text ;
		this.str = (txt === '0' ? char : txt + char)
		this.setState({text : this.str});
	} 

	render() {
		return (
			<div className="base">
				<p className="owner"> {this.state.owner} </p>
				<div className="screenbase">
					<Screen text={this.state.text}/>
				</div>
				<div className="" >
					<Btns onClick={this.onBtnClick} extra="curved"
						  data={['%', String.fromCharCode(8730), String.fromCharCode(8676),'C']} />
					<Btns data={['!', '^', '(', ')']} 
						  onClick={this.onBtnClick} extra=""/>
					<Btns data={['7', '8', '9', String.fromCharCode(247)]} 
						  onClick={this.onBtnClick} extra=""/>
					<Btns data={['4', '5', '6', 'x']} 
						  onClick={this.onBtnClick} extra=""/>
					<Btns data={['1', '2', '3', '-']} 
						  onClick={this.onBtnClick} extra=""/>
					<Btns data={[String.fromCharCode(183), '0', '=', String.fromCharCode(43)]} 
						  onClick={this.onBtnClick} extra=""/>
				</div>
			</div>
		);
	}
}

export default Calculator ;
