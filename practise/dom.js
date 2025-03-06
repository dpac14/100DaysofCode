// Dom  Manipulation 



//Styling Element
// const title = document.querySelector('#main-heading');

// title.style.color ='red'


// console.log(title);

// const listItems = document.querySelectorAll('.list-items');

// for(i = 0; i < listItems.length; i++){
//     listItems[i].style.fontSize = '2rem';
// }
//  console.log(listItems);
 

// Creating Elements

const ul = document.querySelector('ul');
const li = document.createElement('li');

// Adding Elements
 ul.append(li)

 // Modifying the text

//   const firstListItem = document.querySelector('.list-items')

//   console.log(firstListItem.innerText);
//   console.log(firstListItem.textContent);
//   console.log(firstListItem.innerHTML);

li.innerText = 'X-man';

// Modifying Attributes & Classes 
// Attribute.... 
//  li.setAttribute('id', 'main-heading');
//  li.removeAttribute('id') 
//     const title = document.querySelector('main-headig');


//Classes....
li.classList.add('list-items')
// li.classList.remove('list-items')
console.log(li.classList.contains('list-items'));

// Remove Element
 li.remove()





// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// GetElementById()

// const title = document.getElementById('main-heading')

// console.log(title);


// GetElementByClassName()


// const listItem = document.getElementsByClassName('list-items')
// console.log(listItem);


// getElementByTagName()

// const listItem = document.getElementsByTagName('li')
// console.log(listItem);

// // queryselector()
//  const container =document.querySelector('div')
//  console.log(container);
 

// querySelectorAll