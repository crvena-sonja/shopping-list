const appState = {
	items: []
};

//TEMPLATE
function itemTemplate(itemName){
	return `<li>
        <span class="shopping-item">${itemName}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>
	`
	};


//STATE MOD FUNCTIONS
function addItem(state, itemName){
	state.items.push(
	{	name: itemName,
		checked: false});
}

function checkItem(state, itemName){
	(state.items.find(item => item.name === itemName).checked) = true;
	console.log(state);

}

function removeItem(state, itemName){
	const toRemove = state.items.find(item => item.name === itemName);
	const index = state.items.indexOf(toRemove);
	if (index > -1){
		state.items.splice(index, 1);
	}
	console.log(appState);

}

//RENDER FUNCTIONS

function renderList(state, items) {
    let itemsHTML = state.items.map(item => itemTemplate(item.name));
    console.log(itemsHTML);
    //element.html(itemsHTML);
    $(".shopping-list").append(itemsHTML);
    console.log($(".shopping-list"));
};


$(function () {


$(".shopping-item-controls").click(function(event){
	$(event.currentTarget.closest('li')).toggleClass("shopping-item__checked");
});

});
//EVENT LISTENERS

function addListeners(){
	//do some listening stuff
}



//TESTING FUNCTION CALLS
addItem(appState, "milk");
addItem(appState, "oranges")
addItem(appState, "bananas");
console.log(appState);
checkItem(appState, "bananas");
removeItem(appState, "bananas");
renderList(appState, appState.items);
//console.log(appState);

//console.log("Helloooooo");

