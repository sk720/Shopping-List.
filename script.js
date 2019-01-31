var button = document.getElementById("enter");
var input document.getElementById("userInput");
var ul = document.querySelector("ul")
var deleteBtns = document.getElementByClassName("delete");
var items =ul.getElementByTagName("li");


for (var i = 0; i<deleteBtns.length;i++){
	deleteBtns[i].addEventsListener("click",removeParent,false);
}

function removeParent(evt){
	evt.target.removeEventListener("click",removeParent,false);
	evt.target.parentNode.remove();
}

function getEventTarget(e){
	e = e||window.event;
	return e.target||e.srcElement;
}
ul.onclick = function(event){
	var target = getEventTarget(event);
	target.classList.toogle("done");
}

//adding new items:

function inputLength(){
	return input.value.length;
}

function createListElement(){
	var btn = document.createElement("button");
	btn.onclick = removeParent;
	var li= document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.innerHTML = li.innerHTML+ " ";
	li.appendChild(btn);
	ul.appendChild(li);
	input.value= "";
}

function addToListAfterKeypress(event){
	if (inputLength()>0) {
		createListElement();
	}
}
function addToListAfterKeypress(event){
	if(inputLength()>0 && event.keycode ===13){
		createListElement();
	}
}

button.addEventsListener("click", addToListAfterKeypress);
input.addEventsListener("keypress", addToListAfterKeypress);
