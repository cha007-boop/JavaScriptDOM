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
// liste.appendChild(CreateLiElement("Banana", "healthy", 4));

// Task 2
function AppendToList(listId, liElement){
    document.getElementById(listId).appendChild(liElement);
    AddDeleteButton(liElement);
}
AppendToList("list", CreateLiElement("Marshmellows", "unhealthy", 0))
AppendToList("list", CreateLiElement("Cashew nuts", "healthy", 1))
AppendToList("list", CreateLiElement("Beer", "unhealthy", 2))
AppendToList("list", CreateLiElement("Apples", "healthy", 3))
AppendToList("list", CreateLiElement("Banana", "healthy", 4));



// Task 3
function SetClassAttribute(elementId, classValue){
    document.getElementById(elementId).setAttribute("class", classValue);
}

AppendToList("list", CreateLiElement("Cola", null, 5));
SetClassAttribute(5, "unhealthy");

// Task 4
function DeleteElement(listId, liElement){
    document.getElementById(listId).removeChild(liElement);
}

//DeleteElement("list", document.getElementById(5));
//DeleteElement("list", document.getElementById("list").lastChild);

// Task 5
function EditLiText(elementId, newText){
    let item = document.getElementById(elementId);
    item.TEXT_NODE = document.createTextNode(newText);
    AddDeleteButton(item);

}

//EditLiText(5, "Soda");

// Task 6
function ListCount(listId) {
    return document.getElementById(listId).children.length;
}

console.log(ListCount("list"));

// Task 7
function MoveMarkedElements(fromListId, toListId){
    let oldList = document.getElementById(fromListId);
    let newList = document.getElementById(toListId);

    let markedElements = oldList.querySelectorAll(".unhealthy");
    markedElements.forEach(element => {
        newList.appendChild(element);
    });
}

function Add(){

    let grocery = document.getElementById("groceryName").value;
    let listId = "list"

    AppendToList(listId, CreateLiElement(grocery, "unhealthy", NextAvailableId(listId)));
    MoveMarkedElements("list", "listUnhealthy");
}

function NextAvailableId(listId){
    let greatestId = 0;

    let list = document.getElementById(listId);
    list.childNodes.forEach(element => {
        if (parseInt(element.id) >= greatestId) {
            greatestId = parseInt(element.id);
        }
    });
    greatestId++;
    return greatestId;
}

function AddDeleteButton(item){
    let DeleteButton = document.createElement("div");
    DeleteButton.setAttribute("class","listDeleteButton");
    DeleteButton.innerHTML = 
              "<button class=\"btn btn-danger\" id=\"delete\">"+
                "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"25\" height=\"25\" fill=\"currentColor\" class=\"bi bi-x\" viewBox=\"0 0 16 16\">"+
                  "<path d=\"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708\"/>"+
                "</svg>"+
              "</button>"
    item.insertBefore(DeleteButton, item.children[0]);

    DeleteButton.addEventListener("click", () => {
        DeleteElement(item.parentElement.id,item);
    });
    
}

document.getElementById("addButton").addEventListener("click", Add);

MoveMarkedElements("list", "listUnhealthy");





