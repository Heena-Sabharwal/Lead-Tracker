let myLeads=[]
const inputBtn= document.getElementById("input-btn")
const inputEl=document.getElementById("input-el")
const ulEl=document.getElementById("ul-el");
const delEl=document.getElementById("delete-btn")
const leadsFromLocalStorage=JSON.parse(localStorage.getItem("myLeads"))

if(leadsFromLocalStorage){
    myLeads=leadsFromLocalStorage
    render(myLeads)
}

delEl.addEventListener("dblclick", function(){
    myLeads.length=0
    localStorage.clear()
    ulEl.innerHTML=""
})

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    inputEl.value=""
    render(myLeads)
})

function render(leads){
    let listItems = "";

    for (let i = 0; i < leads.length; i++) {
        listItems += `<li>
            <a target="_blank" href="${leads[i]}">${leads[i]}</a>
        </li>`;
    }
    ulEl.innerHTML = listItems;
}
