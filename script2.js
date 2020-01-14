var database = [{"pageTitle": "Google"},{"pageTitle": "Youtube"},{"pageTitle": "Batata doce"},{"pageTitle": "Medium - Artigo"},];
const pagesList = document.getElementById("pages-list-id");
const searchInput = document.getElementById("search-input");


database.map(object => createListItem(object.pageTitle));

// database.filter(a => a.pageTitle === 'Google');

function createListItem(pageTitle) {
    var li = document.createElement("LI");
    li.innerHTML = `
        <div class='img' style='background-image: url(icon.png);'></div> 
        <div>
            <h3>${pageTitle}</h3>
            <h4>www.google.com.br/vini-otariohasuhsahuhdhsaudhduadsadh</h4>
         </div>`;
    pagesList.appendChild(li);
}

searchInput.addEventListener("keypress", (event) => {
    filterListItem(event.target.value);
    console.log("digitado: " + event.target.value)
});

function filterListItem(text){
    let listItens = document.getElementsByTagName("li");
    for(var i = 0; i < listItens.length; i ++){
        pagesList.removeChild(listItens[i]);
    }
    
    let result = database.filter( data => data.pageTitle.includes(text));
    console.log("resultado:")
    console.log(result);
    result.map(object => createListItem(object.pageTitle));
}


// document.getElementById("pages-list-id").innerHTML = "<li> <div class='img' style='background-image: url(icon.png);'></div> <div><h3>Page Title</h3><h4>www.google.com.br/vini-otariohasuhsahuhdhsaudhduadsadh</h4></div></li>"