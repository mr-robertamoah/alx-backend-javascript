import getBudgetObject from './7-getBudgetObject';

export default function getfullbudgetobject(income, gdp, capita) {
	const budget = getbudgetobject(income, gdp, capita);
	const fullbudget = {
		...budget,
		getincomeindollars(income) {
			return `$${income}`;
		},
		getincomeineuros(income) {
			return `${income} euros`;
		},
	};

	return fullbudget;
}
