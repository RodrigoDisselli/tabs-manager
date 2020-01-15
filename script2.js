var database = [{"pageTitle": "Google"},{"pageTitle": "Youtube"},{"pageTitle": "Batata doce"},{"pageTitle": "Medium - Artigo"},];
const pagesList = document.getElementById("pages-list-id");
const searchInput = document.getElementById("search-input");

database.map(object => createListItem(object.pageTitle));

function createListItem(pageTitle) {
    var li = document.createElement("LI");
    li.innerHTML = `
        <div class='img' style='background-image: url(icon.png);'></div> 
        <div>
            <h3>${pageTitle}</h3>
            <h4>www.google.com.br/corrigi-hehehe</h4>
         </div>`;
    pagesList.appendChild(li);
}

searchInput.oninput = (event) => filterListItem(event.target.value);

function emptyMessage() {
    var div = document.createElement("LI");
    div.innerHTML = ``;
    pagesList.appendChild(div);
}

function filterListItem(text){
    pagesList.innerHTML = '';
    let result = database.filter( data => data.pageTitle.toLowerCase().includes(text.toLowerCase()));
    if (result.length == 0){

    }else {
        result.map(object => createListItem(object.pageTitle));
    }
}





document.addEventListener("keydown", function(event) {
    
    switch(event.code) {
        case "ArrowDown":
            event.preventDefault();
            console.log('down')
        break;
        case "ArrowUp":
            event.preventDefault();
            console.log('up')
        break;
        case "NumpadEnter":
            console.log('enter')
            if(document.getElementsByTagName("LI").length === 1){
                event.preventDefault();
                console.log('go to page')
            }
        break;
        case "Enter":
            console.log('enter')
            if(document.getElementsByTagName("LI").length === 1){
                event.preventDefault();
                console.log('go to page')
            }
        break;
    }
});

function navigate(action){
    if (action == 'up'){

    }
}

function select(index){
    document.getElementsByTagName("li")[index].className.add("select");
}

function removeSelect(index){
    document.getElementsByTagName("li")[index].className.remove("select");
}