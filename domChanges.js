console.log('domChanges.js');

const ul = document.querySelector('.items');
//ul.remove();
//ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'hey';
// children a nodelist
ul.children[1].innerText = 'hello';
ul.lastElementChild.innerHTML = '<h1>whats up!</h1>';

const btn = document.querySelector('.btn');
btn.style.background = 'blue';

// clikck, mouseover, mouseout, etc. (look up mdn docs)
btn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('click');
//    console.log(e.target.className);
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
//    document.querySelector('.items').lastElementChild.innerHTML = '<h1>hello</h1>';
    ul.lastElementChild.innerHTML = '<h1>hello</h1>';
})