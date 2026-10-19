let myLeads=[]
const inputBtn= document.getElementById("input-btn")
const inputEl=document.getElementById("input-el")
const ulEl=document.getElementById("ul-el");

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value);
    let listItem = `<li>
                        <a target='_blank' href='${inputEl.value}'>${inputEl.value}</a>
                    </li>`
    ulEl.innerHTML+=listItem
    inputEl.value=""
})
