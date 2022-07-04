let x=3;
let name = 'ahmed';
let y=true ;
let z=null ;
console.log(x);
console.log(name);

let fruit=['orange' , 'apple' , 'kiwi']
fruit.push('soap');
fruit.pop();
console.log(Array.isArray(fruit));
console.log(fruit)

const person={
    firstname:'jon' ,
    age:30,
    city:'bos'
}
console.log(person);
console.log(person.age);
const {firstnaem , city , age }=person
console.log(city);

const todo=[
    {
        id:1 ,
        Text: 'hello',
        complete: true 
    },
    {
        id:2 ,
        Text: 'welcome',
        complete: true 
    },
    {
        id:3 ,
        Text: 'how',
        complete: false 
    },
];
console.log(todo[1].Text);

const toja = JSON.stringify (todo);
console.log(toja);



for(let i=0 ; i<10 ; i++)
{
    console.log(`for loop number:${i}`);

};

for(let i=0 ; i<todo.length ; i++)
{
    console.log(todo.length);
    console.log(`for loop number:${i}`);

};

for(let i=0 ; i<todo.length ; i++)
{
    console.log(todo.length);
    console.log(todo[i]);

};

 
 
let i=0;
while(i<10)
{
   
    console.log(`while loop number ${i}`);
    i++;
}
 
todo.forEach(function(hello)
{   
    console.log(hello.Text)
})

const todoText = todo.map(function(ma){
     return ma.text;
});
console.log(todoText);

const todofilter=todo.filter(function(sa)
{
    return sa.iscompleted===true ;
})
console.log(todofilter)


function Person(firstName, lastName , dob){
    this.first=firstName;
    this.Last=lastName;
    this.d= new Date(dob)
}
const person1=new Person('jon', 'doe' ,'4-3-2000');
console.log(person1) 