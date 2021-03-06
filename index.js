let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");

const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") ); // str to arr

if (leadsFromLocalStorage) { // Checking if leadsFromLocalStorage is truthy
    myLeads = leadsFromLocalStorage;
    renderInput(myLeads);
}

tabBtn.addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        renderInput(myLeads);
    });
});

deleteBtn.addEventListener('dblclick', function() {
    localStorage.clear();
    myLeads = [];
    renderInput(myLeads);
});

// localStorage only supports strings. 
// Use JSON.stringify() => array to string
// JSON.parse() => string to array
// truthy
// falsy

// false
// 0
// ""
// null -> how you as a developer signalize emptiness
// undefined -> how JavaScript signalizes emptiness
// NaN

inputBtn.addEventListener('click', function() {
    myLeads.push(inputEl.value);
    inputEl.value = "";  // to clear out input after hitting the button
    localStorage.setItem("myLeads", JSON.stringify(myLeads)); // Saving  myLeads array to localStorage (key,value)
    renderInput(myLeads);
});

function renderInput(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
        <li>
            <a target='_blank' href='${leads[i]}'>
                ${leads[i]}
            </a>
        </li>
        `;
        // const li = document.createElement("li");
        // li.textContent = myLeads[i];
        // ulEl.append(li);
    };

    ulEl.innerHTML = listItems; // DOM Manipulation comes at a cost so instead of running innerHTML inside a for loop, we store it in a variable and then use innerHTML outside the loop.
}