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
    const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length + 1;
    const HTMLString = `
   <label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
  <input type="text" id="${entryDropdown.value}-${entryNumber}-name" placeholder="Name" />
  <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
  <input type="number" min="0" id="${entryDropdown.value}-${entryNumber}-calories" placeholder="Calories"/>
     `;
    targetInputContainer.insertAdjacentHTML("beforeend", HTMLString);
}

function getCaloriesFromInputs(list)
{
    let calories = 0;
    for (const item of list)
        {
            const currVal = cleanInputString(item.value);
            const invalidInputMatch = isInvalidInput(currVal);
            if (invalidInputMatch)
                {
                    alert(`Invalid Input: ${invalidInputMatch[0]}`);
                    isError = true;
                    return null;
                }
            calories += Number(currVal);
        }
        return calories;
}

function calculateCalories(e)
{
    let breakfastNumberInputs = document.querySelectorAll("#breakfast input[type=number]");
    let lunchNumberInputs = document.querySelectorAll("#lunch input[type=number]");
    let dinnerNumberInputs = document.querySelectorAll("#dinner input[type=number]");
    let snacksNumberInputs = document.querySelectorAll("#snacks input[type=number]");
    let exerciseNumberInputs = document.querySelectorAll("#exercise input[type=number]");
    e.preventDefault();
    isError = false;
}
addEntryButton.addEventListener('click', addEntry);
