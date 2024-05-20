function swapTheme() {

    let status = document.getElementById('app').classList.value;
console.log(status);

if(status == 'day') {
    document.getElementById('app').classList.remove('day');
    document.getElementById('swap').classList.remove('button_day');

    document.getElementById('app').classList.add('night');
    document.getElementById('swap').classList.add('button_night');
}

else {
    document.getElementById('app').classList.remove('night');
    document.getElementById('swap').classList.remove('button_night');

    document.getElementById('app').classList.add('day');
    document.getElementById('swap').classList.add('button_day');
}

}





