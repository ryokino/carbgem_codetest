// const wordsFunc = (num) => {
// 	let i = 0;
// 	let word;
// 	while (i < num) {
// 		if (i === 0) {
// 			word = 'ABC';
// 		} else {
// 			ls = ['A', word, 'B', word, 'C'];
// 			word = ls.join('');
// 		}
// 		console.log(`iの値が ${i} のとき、wordが ${word}`);
// 		i++;
// 	}
// 	return word;
// };

const wordsFunc = (num) => {
	let ls = ['A', 'B', 'C'];
	if (num === 1) {
	} else {
		const words = wordsFunc(num - 1);
		ls = ['A', words, 'B', words, 'C'];
	}
	return ls.join('');
};

const main = (inputValues) => {
	const [k, s, t] = inputValues.split(' ');
	const moziretsu = wordsFunc(k) + '\n';
	const result = moziretsu.substring(s - 1, t) + '\n';
	return result;
};

let test;

test = '10 123 139';
console.log('main(test) :>> ', main(test));
