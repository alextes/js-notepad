let i = 0;
const list = [];
while(true) {
	list.push({
		name: 'alex',
		age: 24
	});
	if (i % 10000 === 0) {
		console.log('mem', process.memoryUsage().heapUsed / 1000000);
	}
	i++;
}
