
let myLeads = []

// turn myLeads array into a string
myLeads = JSON.parse(myLeads)
myLeads.push("www.leads2.com")
myLeads = JSON.stringify(myLeads)

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

localStorage.getItem("myLeads")
console.log(myLeads)

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
})

function renderLeads() {
    let listItems = ""

    for (let i = 0; i < myLeads.length; i++) {
        // listItems += "<li><a target='_blank' href=' " + myLeads[i] +"'>" + myLeads[i] + "</a></li> "
        //template string below
        listItems += `
        <li>
            <a target='_blank' href='${myLeads[i]}'>
            ${myLeads[i]}
            </a>
        </li> `
        
    }

    ulEl.innerHTML = listItems
}
