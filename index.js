// Write your solution here!
let cats=["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(){
    cats.push("Ralph");
}

function destructivelyPrependCat(){
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(frank){
    return [...cats, frank]
}

function prependCat(frank){
    return [frank, ...cats]
}

function removeLastCat(){
    return cats.slice(0, cats.length-1)
}

function removeFirstCat(){
    return cats.slice(1)
}