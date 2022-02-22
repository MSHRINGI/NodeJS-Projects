
// fetching all checkbox
let checkBox = document.getElementsByClassName('checkBox');

// fetching all "li" div
let displayTask = document.getElementsByClassName('displayTask');

// toggling the class of checked and unchecked
for(let i=0; i<checkBox.length; i++){
    checkBox[i].addEventListener('click', function(){
        displayTask[i].classList.toggle("checkedStyle");
    });
}
