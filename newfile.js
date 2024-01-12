const data = [
    { id: 1, name: 'test' },
    { id: 2, name: 'test2' },
    { id: 3, name: 'test3' },
    { id: 1, add: 'jaipur' },
    { id: 2, add: 'kota' },
    { id: 3, add: 'jaipur' },
    { id: 1, phone: '123456' }, 
    { id: 2, phone: '234234234' }
];

const result = {};

data.forEach(item => {
    if (!result[item.id]) {
        result[item.id] = [];
    }
    result[item.id].push(item);
});

console.log(result);
