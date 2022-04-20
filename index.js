let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

// localStorage only supports strings. 
// Use JSON.stringify() => array to string
// JSON.parse() => string to array

inputBtn.addEventListener('click', function() {
    myLeads.push(inputEl.value);
    inputEl.value = "";  // to clear out input after hitting the button
    renderInput();
});

function renderInput() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
        <li>
            <a target='_blank' href='${myLeads[i]}'>
                ${myLeads[i]}
            </a>
        </li>
        `;
        // const li = document.createElement("li");
        // li.textContent = myLeads[i];
        // ulEl.append(li);
    };

    ulEl.innerHTML = listItems; // DOM Manipulation comes at a cost so instead of running innerHTML inside a for loop, we store it in a variable and then use innerHTML outside the loop.
}