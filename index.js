// Write your solution here!
let cats=['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat(name){
    cats.push(name)
}

function destructivelyPrependCat(name){
    cats.unshift(name)
}

function destructivelyRemoveLastCat(){
    cats.pop()
}

function destructivelyRemoveFirstCat(){
    cats.shift()
}


function appendCat(){
    let copyCat
    copyCat=[...cats,"Broom"]

    return copyCat;
}
function prependCat(){
    let copyCat
    copyCat=["Arnold",...cats]

    return copyCat;
}

function removeLastCat(){
    let copyCat
    copyCat=[...cats.slice(0,2)]

    return copyCat;
}

function removeFirstCat(){
    let copyCat
    copyCat=[...cats.slice(1)]

    return copyCat;
}
