const appState = {
	items: []
};

//TEMPLATE
function itemTemplate(state, item){
	const shopClass = (item.checked ? "shopping-item__checked" : ""); 
	const id = state.items.indexOf(item);
	return `<li>
        <span id=${id} class="shopping-item ${shopClass}">${item.name}</span>
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
	if(state.items.length === 0){
		state.items.push({name: itemName, checked: false});
	}
	else{
		if(state.items.indexOf(itemName) === -1){
			state.items.push({name: itemName, checked: false});
		}
	}
	console.log(state);
}

function checkItem(state, itemName){
	if(state.items.length != 0){
		(state.items.find(item => item.name === itemName).checked) = true;
	}
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

function renderList(state, element) {
    let itemsHTML = state.items.map(item => itemTemplate(state, item));
    console.log(itemsHTML);
   
    element.append(itemsHTML);
    //console.log(element);
};


//EVENT LISTENERS

function addListeners(){

	$(".shopping-item-toggle").click(function(event){
		event.preventDefault();
		const clickedItem = $(this).closest('li').val();//.closest($('#shopping-item'));
		console.log("closest item:" + clickedItem);
		checkItem(appState, clickedItem);
		renderList(appState, $('.shopping-list'));
		//$(event.currentTarget.closest('li')).toggleClass("shopping-item__checked");
	});

	$("#js-shopping-list-form").submit(function(event){
		event.preventDefault();
		//console.log( $("#shopping-list-entry").val() );
		addItem(appState, $('#shopping-list-entry').val());
		renderList(appState, $('.shopping-list'));
	});

}


$(function () {

addListeners();

});

	
	//do some listening stuff




//TESTING FUNCTION CALLS
//addItem(appState, "blue cheese");
//addItem(appState, "ramen")
//addItem(appState, "bratwurst");
//console.log(appState);
//checkItem(appState, "ramen");
//removeItem(appState, "bananas");
//renderList(appState, $('.shopping-list'));
//console.log(appState);

//console.log("Helloooooo");

