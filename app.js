// fetch('https://restcountries.com/v3.1/${value}').then((res)=>res.json()).then((data)=>{
//     console.log(data)
//     const div = document.getElementById('container') ;
//     data.forEach((item)=>{
//         const el = document.createElement('h1')
//         el.innerHTML = `<h2>${item.name.common}</h2><h1>Capital : ${item.capital}</h1>`
//         div.appendChild(el)
//     })
// })


const newList  = document.getElementById('newList')

console.log(newList)
const li1 = document.createElement('li')
const li2 = document.createElement('li')

li1.textContent = 'Elephant'
li2.textContent = 'lion'

console.log(li1,li2) ;
// appendChild()  single value
//append mulitple values  , insert at last
//prepant insert at first
newList.append(li1,li2)
const wrapper = document.getElementById('wrapper')

const h1 = document.createElement('h1') ;
h1.textContent = "Animals" ;
h1.style.color = "red" ;
h1.style.fontSize = "50px" ;


// wrapper.insertBefore(h1,newList)

newList.insertAdjacentElement('beforeend', h1)


//append  
//appendChild  //single 
//prepend
//insertBefore
//insertAdjacentElement


//FIXME - 
// newList.insertAdjacentHTML('beforebegin', '<h2>hello this is adjacenthtml</h2>')