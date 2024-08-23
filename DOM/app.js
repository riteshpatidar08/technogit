//DOM manipulation 

//NOTE When the html file is run in the browser it convert into document object model where each element we have used in the "html elements converts into object where they have methods or property available to manipulate them".


//NOTE - SELECT ;
// always applies on the document object

//NOTE getElementsByTagName() ;

// REVIEW - GetElementsByTagName always

 //Return a //!SECTION HTMLCOLLECTION which looks like an array but it is not an array we cannot use array methods on it .

// const para = document.getElementsByTagName('p') ;
// console.log(para) ;

// //NOTE Converting html collection into array
// const paraArray = [...para];
// console.log(paraArray);

// paraArray.forEach((el)=>{
//     console.log(el.innerHTML)
// })

//NOTE getelementsByClassName
//NOTE getElementsByClassName also return a html collection ;
const li = document.getElementsByClassName('special') ;
console.log(li) ;


//NOTE getElementById 
//NOTE It will select the element by using the id
const heading = document.getElementById('heading');
console.log(heading) ;

//NOTE querySelector ;

const photo = document.querySelector('.special');

console.log(photo)

//NOTE querySelectorAll ;
//NOTE NodeList where we can directly use the forEach method without converting it to an array
const lii = document.querySelectorAll('.special');

console.log(lii)

lii.forEach((el)=>{
    console.log(el.textContent)
}) ;

//REVIEW 
//NOTE FOR SELECTING ELEMENTS 
//NOTE getElementsByTagName , getElementsByClassName, getElementById , querySelector and querySelectorAll all are available on the document object ...

//NOTE TO read or manipulate text content from the elements 
// textContent , innerText , innerHTML

console.log(document.body.innerText)
const para = document.getElementById('para');
console.log(para) ;
para.innerText = "hello"
para.innerHTML = `<span>hello this is implemented using innerHtml</span>` ;

//NOTE textContent = directly reads the text without performing calculation on the css the text is printed as it is as our file 
//NOTE innerText = preserves the css properties 
//NOTE InnerHtml = when you have to create html in in the element you have selected .

//value, href ,src 
const input = document.getElementById('bear');
console.dir(input.value) ;

//href
const a = document.getElementById('address');
console.log(a.href) ;
a.href = 'https://www.amazon.com'

//src 
const pic = document.getElementById('bear-photo');
console.log(pic.src)
pic.src = './../images/Screenshot (252).png'

//NOTE - changing styles on the element  ;
// heading.style.color='red';
// heading.style.backgroundColor = 'blue' ;

//NOTE setAttribute and get attribute ;
a.setAttribute('class','addressss') ;

//NOTE get the value of the specific attribute
console.log(a.getAttribute('class'))

input.setAttribute('placeholder','enter bear Name');

//removing classes or adding classes 
console.log(heading.classList.remove('h1'))
heading.classList.add('h1') ;

// NOTE create new elements using Js ;
// createElement() only available on the document object

const h2 = document.createElement('h2');
h2.innerText = "secondary heading"
console.log(h2) ;

//NOTE decide where to place your new created element then select the particular element where you have to place the new element.
//NOTE append to add element after the selected element
//NOTE prepend to add element before the selected element
heading.prepend(h2) ;  

const newli = document.createElement('li');
newli.textContent = 'new list';
console.log(newli) ;
const ul = document.getElementById('list');
// ul.prepend(newli) ;

//NOTE adding a newly created element to the document or html file
// append , appendChild 

//NOTE insertAdjacentElement(position , element)
// position have four values beforebegin , afterbegin , beforeend , afterend
ul.insertAdjacentElement('afterend', newli) ;


//NOTE EVENTS  
//click , mouseenter , moosueleave , keypress , onchange , onsubmit
//addEventListerner(eventName , function)
//click , mouseenter , mouseLeave
const btn = document.getElementById('btn');
btn.addEventListener('click', ()=>{
    document.body.style.backgroundColor = 'red'
})

//keypress , keydown and keyup
document.addEventListener('keyup',(event)=>{
if(event.key === 'f'){
    heading.style.color = 'red'
}
}) ;
// input.addEventListener('change', ()=>{
//     console.log(input.value)
// })

//submit ;
//REVIEW ALWAYS APPLY ON THE FORM TAG;
const form = document.getElementById('form');

form.addEventListener('submit',(event)=>{
    //Note prevents the default refreshing behaviour of the page when we try to submit the form.
    event.preventDefault();

 console.log(input.value);
})

