const inp_box = document.querySelector("#inputbox");
const inp_list = document.querySelector("#TaskLIst");
const inp_icon = document.querySelector(".checked_box_Icon");
const button = document.querySelector("#btn");
const deleteIcon = document.querySelector(".deleteIcon");
const checkedIcon = document.querySelector(".checkedIcon");




button.addEventListener('click',function AddTask(){
    let taskname = inp_box.value;
    if(taskname == ""){
        alert("Please enter a valid Task Name!");
    }
    else {
        let newLi = document.createElement("li");
        newLi.innerHTML=`<div class="flex justify-between px-6">
        <div class="flex gap-4">
            <div class="checkedIcon" ><i class=" text-2xl ri-checkbox-blank-circle-line hover:bg-slate-200 rounded-full px-1 py-1 cursor-pointer"></i></div>
            
            <div class="checkedIcon Taskitems font-Poppins pt-1">${taskname}</div>
        </div>
        
        <div   class="flex"><i class="deleteIcon pt-1 ri-close-line hover:bg-slate-200 rounded-full px-2 py-1 cursor-pointer"></i></div>
    </div>`;
        
        inp_list.appendChild(newLi);
        
    }
    inp_box.value="";

    

});

inp_list.addEventListener( "click",function  taskCheck(e){
   
    const striped_text = document.createElement('div');
    striped_text.classList.add('done','flex','justify-between','px-6');
    striped_text.innerHTML=`<div class="flex gap-4 checkedIcon">
    <div class="checked_box_Icon" ><i class=" text-2xl ri-checkbox-blank-circle-line hover:bg-slate-200 rounded-full px-1 py-1 cursor-pointer"></i></div>
    <div class="" ><i class="text-2xl ri-checkbox-circle-fill  hover:bg-slate-200  rounded-full px-1 py-1 cursor-pointer text-orange-500"></i></div>
    <div class=" line-through font-Poppins pt-1">das</div> 
    </div>`

    if(e.target.tagName==='LI'){
        e.target.classList.toggle("done");
    }
    else if(e.target.tagName=="I"){
      
      e.target.parentElement.remove();
    }

})








// let tasks = [];

// button.addEventListener('click', function AddTask() {
//     let taskname = inp_box.value;
//     if (taskname == "") {
//         alert("Please enter a valid Task Name!");
//     } else {
//         // Add the task name to the tasks array
//         tasks.push(taskname); //append

//         // Clear the existing task list
//         inp_list.innerHTML = "";

//         // Use map function to create elements for each task
//         tasks.map((task, index) => {
//             let newH1 = document.createElement("h1");
//             newH1.innerHTML = task;
//             inp_list.appendChild(newH1);

//             let newIcon = document.createElement("h2");
//             newIcon.innerHTML = `<i class="ri-circle-line  hover:bg-slate-200 px-1 py-1 rounded-full"></i>`;
//             inp_icon.appendChild(newIcon);

//             let newDeleteIcon = document.createElement("h3");
//             newDeleteIcon.innerHTML = `<h3><i class=" hover:bg-slate-200 rounded-full px-1 py-1 ri-close-line" onclick="deleteTask(${index})"></i></h3>`;
//             deleteIcon.appendChild(newDeleteIcon);
//         });
//     }
//     inp_box.value = "";
// });

// // Delete function
// function deleteTask(index) {
//     // Remove the task at the specified index from the tasks array
//     tasks.splice(index, 1);

//     // Remove the corresponding HTML elements from the DOM
//     inp_list.removeChild(inp_list.childNodes[index]);
//     inp_icon.removeChild(inp_icon.childNodes[index]);
//     deleteIcon.removeChild(deleteIcon.childNodes[index]);

//     // Update the indices of the remaining elements
//     for (let i = index; i < tasks.length; i++) {
//         let deleteIconElement = deleteIcon.childNodes[i].firstChild;
//         deleteIconElement.setAttribute("onclick", `deleteTask(${i})`);
//     }
// }
