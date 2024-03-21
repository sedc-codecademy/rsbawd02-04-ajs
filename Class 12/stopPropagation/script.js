const prvi = document.getElementById('prvi');
const drugi = document.getElementById('drugi');
const dugme = document.getElementById('dugme');

dugme.onclick = function (event) {
    // if we want to stop event bubbling:
    event.stopPropagation(); 
    console.log('kliknuto dugme');
}

prvi.onclick = function () {
    console.log('kliknut prvi div');
}

drugi.onclick = function () {
    console.log('kliknut drugi div');
}


