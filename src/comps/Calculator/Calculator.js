import React, { Component } from 'react';
import math from 'mathjs' ;

import './calculator.css' ;
import Screen from './Screen/Screen.js' ;
import Btns from './Btns/Btns.js' ;

class Calculator extends Component {
	constructor()
	{	super() ;
		this.str = '' ;
		this.disp = '' ;
		this.state = {
			text  : '0' ,
			owner : 'Manan' ,
			last  : 'start' ,
		}
	}

	parseEqual = () => {
		// let txt = text ;
		let txt = this.str ;
		txt = math.eval(txt) ;
		this.setState({text : (txt+'').slice(0, 10), last: 'answer'});
		console.log(txt) ;
	}

	onBtnClick = (char) => {
		const {last, text} = this.state ;
		const txt = text ;
		let test = '+-^x' + String.fromCharCode(247) ;
		if(char === 'C')
		{	this.setState({text : '0', last: 'start'});
		}
		else if(char === '=')
		{	this.parseEqual() ;
		}
		else if(char === String.fromCharCode(8676) )
		{
			this.str = this.str.slice(0, this.str.length -1) ;
			this.disp = this.disp.slice(0, this.disp.length -1) ;
			this.setState({text: text.slice(0, text.length -1)});
		}
		else if( test.includes(char) )
		{	
			if(last !== 'op' )
			{
				this.disp = txt + char ;
				this.str = this.disp.replace(/x/g, '*') ;
				this.str = this.str.replace(new RegExp(''+String.fromCharCode(247), 'g'), '/') ;
				this.str = this.str.replace(new RegExp(''+String.fromCharCode(183), 'g'), '.') ;
				this.setState({text : this.disp.slice(-10), last : 'op'});
			}
			else
			{	//Write
			}
		}
		else
		{	this.disp = ((last === 'answer' || last === 'start') ? char : txt + char) ;
			this.str = this.disp.replace(/x/g, '*') ;
			this.str = this.str.replace(new RegExp(''+String.fromCharCode(247), 'g'), '/') ;
			this.str = this.str.replace(new RegExp(''+String.fromCharCode(183), 'g'), '.') ;
			this.setState({text : this.disp.slice(-10), last:'number'});
			// console.log(this.str, this.disp) ;
		}
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
