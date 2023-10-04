/* Quand je clique sur l'icone*/
let icons = document.getElementById("icons");

/*Au click j'aimerais que tu me sortes et caches la classe active*/
icons.addEventListener("click", function(){
    nav.classList.toggle("active");
})

/*En cliquant sur l'un de ces bouton, la navbar se re range */
//pour se faire on va pointer tous nos liens
const links = document.querySelectorAll("nav li"); //Place toutes les balises enfants li dans la variable links

links.forEach(link =>{
    link.addEventListener("click", ()=>{ //Les 3 li, je les appel link qui est un ^paramètre,   puis on ajoute un évènnement click sur chacun des li vérifiable avec un console log
        nav.classList.remove("active"); // Enfin j'enlève la plasse li si jamais on clique 
    });
});