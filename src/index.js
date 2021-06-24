

const saveBtn = document.getElementById("save-btn")
const saveTabBtn = document.getElementById("save-tab-btn")
const dltBtn = document.getElementById("delete-btn")
const text = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")

// let items = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
let items = []
let itemsFromStorage = JSON.parse(localStorage.getItem("items"))

if (itemsFromStorage) {
    items = itemsFromStorage
    render(items)
}

function render(arr) {

    let listItem = ""
    for (let item of arr) {
        listItem += `
                    <li>
                        
                        <a href="${item}" target='_blank'> 
                            ${item} 
                        </a>
                        
                    </li>
        `
    }
    ulEl.innerHTML = listItem
}


saveTabBtn.addEventListener("click", function () {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
        let url = tabs[0].url;
        items.push(url)
        localStorage.setItem("items", JSON.stringify(items))
        render(items)
    });



})

dltBtn.addEventListener("click", function () {
    localStorage.clear()
    items = []
    render(items)
})

saveBtn.addEventListener("click", function () {
    if (!text.value) {
        return
    }

    items.push(text.value)
    localStorage.setItem("items", JSON.stringify(items))
    render(items)
})






// for(let item of items) {
//     const liEl = document.createElement("li")
//     liEl.textContent = item
//     ulEl.append(liEl)
// }


