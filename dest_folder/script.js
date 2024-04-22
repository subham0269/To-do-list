const inp_box = document.querySelector("#inputbox");
const inp_list = document.querySelector("#TaskLIst");
const inp_icon = document.querySelector(".checked_box_Icon");
const button = document.querySelector("#btn");
const deleteIcon = document.querySelector(".deleteIcon");
const checkedIcon = document.querySelector(".checkedIcon");
let array = [];

button.addEventListener('click',function AddTask(){
    // console.log(array);
    let taskname = inp_box.value;
    if(!taskname){
        alert("Please enter a valid Task Name!");
        return
    }

    let newLi = document.createElement("li");
    newLi.innerHTML=`
    <div class="pArEnT flex justify-between px-6">
        <div class="flex gap-4">
            <div class="checkedIcon" >
                <i class="circle-icon text-2xl ri-checkbox-blank-circle-line hover:bg-slate-200 rounded-full px-1 py-1 cursor-pointer"></i>
            </div>
            
            <div class="checkedIcon Taskitems font-Poppins pt-1">${taskname}</div>

        </div>
        <div class="flex"><i class="deleteIcon transition duration-150 hover:rotate-90 rotate-0 pt-1 ri-close-line hover:bg-slate-200 rounded-full px-2 py-1 cursor-pointer"></i>
        </div>
    </div>`;
    inp_list.appendChild(newLi);
    const aux = {
        checked: (!newLi.querySelector('.circle-icon').classList.contains('ri-checkbox-blank-circle-line')),
        task: `${taskname}`
    }
    
    array.push(aux);

    inp_box.value="";
});

inp_list.addEventListener("click", function(e) {
    // console.log(e.target)
    if (e.target.classList.contains("ri-checkbox-blank-circle-line") || e.target.classList.contains("ri-checkbox-circle-fill")) {
        const taskItem = e.target.closest(".flex").querySelector(".Taskitems");
        taskItem.classList.toggle("line-through");
        const checkIcon = e.target;
        checkIcon.classList.contains('ri-checkbox-blank-circle-line') ? checkIcon.classList.replace('ri-checkbox-blank-circle-line', 'ri-checkbox-circle-fill') : checkIcon.classList.replace('ri-checkbox-circle-fill', 'ri-checkbox-blank-circle-line');

        if (checkIcon.classList.contains('ri-checkbox-circle-fill')) {
            checkIcon.classList.add('text-orange-500');
        }

    } else if (e.target.classList.contains("deleteIcon")) {;
        const taskItem = e.target.closest(".pArEnT");
        taskItem.remove();
    }
});