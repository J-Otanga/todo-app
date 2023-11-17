
function addTo(){
    const toInput = document.querySelector("input");
    const item = document.createElement("li");
    const list =document.getElementById("todo-container");
    item.innerText = toInput.value;
    list.appendChild(item);
    toInput.value = "";
    item.addEventListener("click",() => {
        item.style.textDecoration = 'line-through'
    })
    }

function clearall(){
   const list = document.getElementById("todo-container");
   list.innerHTML = "";
}


    


