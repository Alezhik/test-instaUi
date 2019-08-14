import React from 'react';

const simple = [
	'', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 
	'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
];
const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
const preficses = ['', 'thousand', 'million', 'billion', 'trillion', 'quadrillion'];;

export default class NumberToText extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			numbetText: null
		};
	}

	reverseStr = str => str.split("").reverse().join("");

	convertNumberToText = event => {
		const stringNumber = parseInt(event.target.value).toString();
		const lenghtPreficses = Math.ceil(stringNumber.length / 3);

		let preficsesArray = [];
		for (let i = 0; i < lenghtPreficses; i++) {
			const start = 3 * i;
			const end = start + 3;
			const reversSTR = this.reverseStr(stringNumber).substring(start, end);
			preficsesArray.unshift(this.reverseStr(reversSTR));
		}

		let numbetText = '';
		preficsesArray.forEach((stringNumber, index) => {
			const partText = this.simpleNumber(stringNumber);
			if (partText) {
				numbetText = `${numbetText} ${this.simpleNumber(stringNumber)} ${preficses[lenghtPreficses - index -1]}`;
			}
		});

		this.setState({ numbetText });
	}

	simpleNumber = (stringNumber = '209') => {
		const workNumber = parseInt(stringNumber);

		let numberText = '';
		if (workNumber === 0) {
			return null
		};

		const firstNumber = Math.floor(workNumber / 100);
		if (firstNumber) {
			numberText = `${simple[firstNumber]} hundred`;
		}

		const nextTwo = workNumber % 100;
		if (nextTwo) {
			if (nextTwo < 20) {
				numberText = `${numberText} ${simple[nextTwo]}`;
			} else {
				const secondNumber = Math.floor(nextTwo / 10);
				const therdNumber = nextTwo % 10;
				numberText = `${numberText} ${tens[secondNumber]} ${simple[therdNumber]}`;
			}
		}

		return numberText;
	} 

	render() {
		const { numbetText } = this.state;
		return(
			<div style={{width: '100%', minHeight: '200px', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
				<input 
					onChange={event => this.convertNumberToText(event)} 
					type="number"
					min="0"
					max="999999"
					style={{}}
				/>
				<h3>{numbetText}</h3>
			</div>
		);
	}
};
