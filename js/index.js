//Write your Javascript code here
console.log("Shoppinglist")

// function Sum(a,b){
//     return a + b;
// }

// console.log(Sum(5,10));
// console.log(Sum(5,"10"));

// Opgave 1
function CreateLiElement(elementText, classAttribute, id){
    let newElement = document.createElement("li");
    newElement.setAttribute("class", classAttribute);
    newElement.setAttribute("id", id);

    let textNode = document.createTextNode(elementText);
    newElement.appendChild(textNode);

    return newElement;
}

let liste = document.getElementById("list");
liste.appendChild(CreateLiElement("Banana", "healthy", "4"));