let obj = {
    todoList: [
        {    number: 1,
            Title: "First item"
        },
        {
            number: 2,
            Title: "Second item"
        },
        {
            number: 3,
            Title: "Third item"
        },
        {   
            number: 4,
            Title: "Fourth item"
        },
        {
            number: 5,
            Title: "Fifth item"
        }

    ]  
};

// let jsonString = JSON.stringify(obj);
// let jsonString = JSON.parse(obj)



let todoListJSON = {
"todoList": [
{
"number": 1,
"Title": "First item"
},
{
"number": 2,
"Title": "Second item"
},
{
"number": 3,
"Title": "Third item"
},
{   
"number": 4,
"Title": "Fourth item"
},
{
"number": 5,
"Title": "Fifth item"
}
]
};

function printFirst5Todos() {
for (let i = 0; i < todoListJSON.todoList.length; i++) {
console.log(todoListJSON.todoList[i].Title);
}
}

printFirst5Todos();