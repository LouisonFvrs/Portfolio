let popup = document.getElementById('popup');
let terminal = document.getElementById('terminal');
let leave = document.getElementById('leave');

leave.addEventListener("click", ()=> {
    if(getComputedStyle(popup).display != 'none'){
        popup.style.display = 'none';
        terminal.style.display='flex';
    }
    else{
        popup.style.display = 'flex';
        terminal.style.display = 'none';
    }
})