//Write your Javascript code here
console.log("Shoppinglist")

// function Sum(a,b){
//     return a + b;
// }

// console.log(Sum(5,10));
// console.log(Sum(5,"10"));

// Task 1
function CreateLiElement(elementText, classAttribute, id){
    let newElement = document.createElement("li");
    if (classAttribute != null) {
        newElement.setAttribute("class", classAttribute);
    }
    newElement.setAttribute("id", id);

    let textNode = document.createTextNode(elementText);
    newElement.appendChild(textNode);

    return newElement;
}

// let liste = document.getElementById("list");
// liste.appendChild(CreateLiElement("Banana", "healthy", "4"));

// Task 2
function AppendToList(listId, liElement){
    document.getElementById(listId).appendChild(liElement);
}

AppendToList("list", CreateLiElement("Banana", "healthy", "4"))

// Task 3
function SetClassAttribute(elementId, classValue){
    document.getElementById(elementId).setAttribute("class", classValue);
}

AppendToList("list", CreateLiElement("Cola", null, "5"));
SetClassAttribute("5", "unhealthy");

// Task 4
function DeleteElement(listId, liElement){
    document.getElementById(listId).removeChild(liElement);
}

//DeleteElement("list", document.getElementById("5"));
//DeleteElement("list", document.getElementById("list").lastChild);

// Task 5
function EditLiText(elementId, newText){
    document.getElementById(elementId).textContent = newText;
}

EditLiText("5", "Soda");

// Task 6
function ListCount(listId) {
    return document.getElementById(listId).children.length;
}

console.log(ListCount("list"));