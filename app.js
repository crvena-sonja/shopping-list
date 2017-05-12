const appState = {
	items: []
};

//TEMPLATE
function itemTemplate(state, item){
	const shopClass = (item.checked ? "shopping-item__checked" : ""); 
	return `<li id=${item.name}>
        <span class="shopping-item ${shopClass}">${item.name}</span>
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
	const objToAdd = {name: itemName, checked: false};
	//console.log(state.items.length);
	if(state.items.length === 0){
		state.items.push(objToAdd);
		//console.log("should add because its the first");
	}
	else{
		console.log(state.items.find(item => item.name === itemName));
		if(! state.items.find(item => item.name === itemName) ){
			// state.items.find(item => item.name === itemName) == false
			state.items.push(objToAdd);
			//console.log("should add");
		}
		//console.log("shouldn't add");
	}
	console.log(state);
}

function checkItem(state, itemName){
	if(state.items.length != 0){
		let foundItem = state.items.find(item => item.name === itemName);
		if(foundItem){ 
			foundItem.checked = !foundItem.checked;
		}
	}
	//console.log(state);
}

function removeItem(state, itemName){
	const toRemove = state.items.find(item => item.name === itemName);
	const index = state.items.indexOf(toRemove);
	if (index > -1){
		state.items.splice(index, 1);
	}
	//console.log(appState);

}

//RENDER FUNCTIONS

function renderList(state, element) {
    let itemsHTML = state.items.map(item => itemTemplate(state, item));
   
    element.html(itemsHTML);
    //console.log(itemsHTML);
    //console.log(element);
};


//EVENT LISTENERS

function addListeners(){

	$(".shopping-list").on('click', '.shopping-item-toggle' ,function(event){
		event.preventDefault();
		const clickedItem = $(this).closest($('li')).attr('id');
		//console.log($(this).closest('li').attr('id'));
		//console.log("closest item:" + clickedItem);
		checkItem(appState, clickedItem);
		renderList(appState, $('.shopping-list'));
	});

	$("#js-shopping-list-form").submit(function(event){
		event.preventDefault();
		//console.log( $("#shopping-list-entry").val() );
		addItem(appState, $('#shopping-list-entry').val());
		renderList(appState, $('.shopping-list'));
	});

	$(".shopping-list").on('click', '.shopping-item-delete' ,function(event){
		event.preventDefault();
		const clickedItem = $(this).closest($('li')).attr('id');
		//console.log($(this).closest('li').attr('id'));
		//console.log("closest item:" + clickedItem);
		removeItem(appState, clickedItem);
		renderList(appState, $('.shopping-list'));
	});

}


$(function () {

addListeners();

});

	
	



//TESTING FUNCTION CALLS
//addItem(appState, "blue cheese");
//addItem(appState, "ramen")
//addItem(appState, "bratwurst");
//checkItem(appState, "ramen");
//removeItem(appState, "bananas");
//renderList(appState, $('.shopping-list'));
//console.log(appState);

//console.log("Helloooooo");

