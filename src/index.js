

const saveBtn = document.getElementById("save-btn")
const text = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")

// let items = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]


let items

render()




saveBtn.addEventListener("click", function () {
    if (!text.value) {
        return
    }

    items.push(text.value)
    localStorage.setItem("items", JSON.stringify(items))
    render()
})


function render() {
    items = JSON.parse(localStorage.getItem("items"))
    if (!items) {
        items = []
        return
    }
    
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


