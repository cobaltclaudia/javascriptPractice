const todos = [
    {
        id: 1,
        text: 'take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'something else ',
        isCompleted: false
    },
    {
      id: 1,
      text: 'another thing',
      isCompleted: true
    }
];

//for(let i=0; i < todos.length; i++){
//    console.log('for '+todos[0].text);
//}

//for (let todo of todos){
//console.log(todo.text);
//}

//let i = 0;
//while(i<5){
//    console.log('while '+i);
//    i++;
//}


// forEach, map, filter
//todos.forEach(function(todo) {
//    console.log(todo.text);
//});

// map
//const todoText = todos.map(function(todo) {
//    return todo.text;
//});
//console.log(todoText)

// filter
const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted == true;
}).map(function(todo){
    return todo.text;
});
console.log(todoCompleted)