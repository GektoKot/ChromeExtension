

const saveBtn = document.getElementById("save-btn")
const text = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")

// let items = []
let items = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]

render()



saveBtn.addEventListener("click", function () {
    if (text.value === undefined || text.value === "") {
        return
    }
    items.push(text.value)
    render()
})

function render() {
    let listItem = ""

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


