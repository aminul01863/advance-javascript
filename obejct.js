const student = [
    { id: 21, name: 'aminul' },
    { id: 12, name: 'rana' },
    { id: 71, name: 'jankar' },
    { id: 42, name: 'mahbub' }
];
const names = student.map(s => s.name);
const ids = student.map(s => s.id);
const bigger = student.filter(s => s.id > 40);
const bigger1 = student.find(s => s.id > 40);
console.log(bigger1);