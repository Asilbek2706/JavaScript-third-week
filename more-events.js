const notifyDoubleClick = (event) => {
    console.log(event);
    console.log('Element was double-clicked!');
}

const btn = document.getElementById('btn');
btn.addEventListener('dblclick', notifyDoubleClick);

// document.addEventListener('keydown', (event) => {
//     console.log("key" + event.key);
//     console.log("code" + event.code);
// })