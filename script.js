let calorieCounter = document.getElementById('calorie-counter');
let budgetNumberInput = document.getElementById('budget');
let entryDropdown = document.getElementById('entry-dropdown');
let addEntryButton = document.getElementById('add-entry');
let clearButton = document.getElementById('clear');
let output = document.getElementById('output');
let isError = false;

function cleanInputString(str)
{
    const regex = /[+-\s]/g;
    return str.replace(regex, '');
}

function isInvalidInput(str)
{
    const regex = /\d+e\d+/i;
    return str.match(regex);
}

function addEntry()
{
    const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`);
    const entryNumber = targetInputContainer.querySelectorAll(input[type="text"]).length;
    const HTMLString = `
    <label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
    <input placeholder= "Name" id="${entryDropdown.value}-${entryNumber}-name" type="text" ></input>
     <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
     <input type = "number" min ="0" placeholder="Calories" id="${entryDropdown.value}-${entryNumber}-calories"></input>
     `;

}

