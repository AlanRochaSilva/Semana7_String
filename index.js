const createList = (...args) => {
    const ul = document.createElement('ul');
    textInsideLi = args[1] === undefined ? "Text " : args[1] + " ";
    for (let i = 0; i < args[0]; i++) {
        const li = document.createElement('li');
        li.innerText = textInsideLi + (i + 1);
        ul.appendChild(li);
    }
    const body = document.getElementsByTagName('body');
    body[0].appendChild(ul);

}
createList(3, "nada");