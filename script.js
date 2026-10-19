let myLeads=[]
const inputBtn= document.getElementById("input-btn")
const inputEl=document.getElementById("input-el")
const ulEl=document.getElementById("ul-el");
const delEl=document.getElementById("delete-btn")
const tabEl=document.getElementById("tab-btn")
let leadsFromLocalStorage = [];
try {
    const savedLeads = JSON.parse(localStorage.getItem("myLeads"));
    if (Array.isArray(savedLeads)) {
        leadsFromLocalStorage = savedLeads;
    }
} catch {
    localStorage.removeItem("myLeads");
}

tabEl.addEventListener("click",function(){
    // chrome.tabs.query({active:true, currentWindow:true}, function(tabs){
    //     let activeTab=tabs[0]
    //     let activeTabId=activeTab.id
    // })

    chrome.tabs.query({active:true, currentWindow:true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
})



if(leadsFromLocalStorage){
    myLeads=leadsFromLocalStorage
    render(myLeads)
}

delEl.addEventListener("dblclick", function(){
    myLeads.length=0
    localStorage.removeItem("myLeads")
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
