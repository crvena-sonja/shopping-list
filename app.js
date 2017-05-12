const appState = {
	items: []
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




//EVENT LISTENERS
function addListeners(){
	//do some listening stuff
}


//TESTING FUNCTION CALLS
addItem(appState, "apples");
addItem(appState, "oranges")
addItem(appState, "bananas");
console.log(appState);
checkItem(appState, "bananas");
removeItem(appState, "bananas");

//console.log(appState);

//console.log("Helloooooo");

