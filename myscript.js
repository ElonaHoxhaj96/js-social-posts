//creo un ciclo che mi stampi che mi stampi gli elementi della array opject in console
posts.forEach(element => {
    console.log(element);
});
// creo i contenitori in pagina e stampo i miei elementi 
const divPost = document.createElement('div');
divPost.classList.add('post');

let container = document.getElementById('container');
container.appendChild(divPost);
