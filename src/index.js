

const saveBtn = document.getElementById("save-btn")
const text = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")

// let items = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]

let items = JSON.parse(localStorage.getItem("items"))

render()



saveBtn.addEventListener("click", function () {
    if (text.value === undefined || text.value === "") {
        return
    }

    items.push(text.value)
    localStorage.setItem("items", JSON.stringify(items))

    render()
})


function render() {
    let listItem = ""
    items = JSON.parse(localStorage.getItem("items"))
    
    for (let item of items) {
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


// for(let item of items) {
//     const liEl = document.createElement("li")
//     liEl.textContent = item
//     ulEl.append(liEl)
// }


