// permutationの実装(web上で拾ってきた)
const permutation = (nums, k) => {
	let ans = [];
	if (nums.length < k) {
		return [];
	}
	if (k === 1) {
		for (let i = 0; i < nums.length; i++) {
			ans[i] = [nums[i]];
		}
	} else {
		for (let i = 0; i < nums.length; i++) {
			let parts = nums.slice(0);
			parts.splice(i, 1)[0];
			let row = permutation(parts, k - 1);
			for (let j = 0; j < row.length; j++) {
				ans.push([nums[i]].concat(row[j]));
			}
		}
	}
	return ans;
};

// 2つの配列の比較を実装
const eval_dict = (a, b, len) => {
	let result = a;
	for (let i = 0; i < len; i++) {
		if (a[i] > b[i]) {
			result = b;
			break;
		} else if (a[i] < b[i]) {
			result = a;
			break;
		} else continue;
	}
	return result;
};

// 置換の実装
const swap_dict = (original, cause) => {
	let result = [];
	original.map((value, index) => {
		result[cause[index] - 1] = value;
	});
	return result;
};

// 配列のリストに対して全てを作用させて、最小値の配列を出力する
const swapAllList = (ls, originalList, n) => {
	let appliedList = [];
	let ans = originalList;
	ls.reduce((prev, curr) => {
		appliedList = swap_dict(prev, curr);
		ans = eval_dict(ans, appliedList, n);
		return appliedList;
	}, originalList);
	return ans;
};

const main = (lines) => {
	const n = parseInt(lines.shift(), 10);
	const S = lines
		.shift()
		.split(' ')
		.map((ele) => parseInt(ele, 10));
	const m = parseInt(lines.shift(), 10);
	let rest = lines.map((ele) => ele.split(' '));
	rest = rest.map((ele) => ele.map((ele) => parseInt(ele, 10)));
	let result = S;
	let permutatedArray = permutation(rest, m);
	permutatedArray.map((element) => {
		let elementMin = swapAllList(element, S, n);
		result = eval_dict(result, elementMin, n);
	});
	return result;
};

process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
});
reader.on('line', (line) => {
	lines.push(line);
});
reader.on('close', () => {
	console.log(main(lines).join(' '));
});
