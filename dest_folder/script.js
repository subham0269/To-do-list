const inp_box = document.querySelector("#inputbox");
const inp_list = document.querySelector("#TaskList");
const inp_icon = document.querySelector("#task_icon");
const button = document.querySelector("#btn");
const deleteIcon = document.querySelector("#deleteIcon");

const arr = []



button.addEventListener('click',function AddTask(){
    let taskname = inp_box.value;
    if(taskname == ""){
        alert("Please enter a valid Task Name!");
    }
    else {
        let newH1 = document.createElement("h1");
        newH1.innerHTML=taskname;
        inp_list.append(newH1);
        let newIcon = document.createElement("h2");
        newIcon.innerHTML = `<i class="ri-circle-line  hover:bg-slate-200 px-1 py-1 rounded-full"></i>`;
        inp_icon.append(newIcon);
        let newDeleteIcon = document.createElement("h3");
        newDeleteIcon.innerHTML = `<h3><i class=" hover:bg-slate-200 rounded-full px-1 py-1 ri-close-line"></i></h3>`;
        deleteIcon.append(newDeleteIcon);
    }
    inp_box.value="";
});




