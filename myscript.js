//creo un ciclo che mi stampi che mi stampi gli elementi della array opject in console
posts.forEach(element => {
    // const { id, content,media, author, likes, created}= posts;
    // console.log(element.author.name);
    // // creo i contenitori in pagina e stampo i miei elementi 
    // const divPost = document.createElement('div');
    // divPost.classList.add('post');

    let container = document.getElementById('container');
    // container.appendChild(divPost);
   //stampare in pagina i vari elementi del mio object
    let contenutoPost = `
            <div class="post">
                <div class="post__header">
                    <div class="post-meta">                    
                        <div class="post-meta__icon">
                            <img class="profile-pic" src=${element.author.image} alt="Phil Mangione">                    
                        </div>
                        <div class="post-meta__data">
                            <div class="post-meta__author">${element.author.name}</div>
                            <div class="post-meta__time">${element.created}</div>
                        </div>                    
                    </div>
                </div>
                <div class="post__text">${element.content}</div>
                <div class="post__image">
                    <img src=${element.media} alt="">
                </div>
                <div class="post__footer">
                    <div class="likes js-likes">
                        <div class="likes__cta">
                            <a class="like-button  js-like-button" href="#" data-postid="${element.id}">
                                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                                <span class="like-button__label">Mi Piace</span>
                            </a>
                        </div>
                        <div class="likes__counter">
                            Piace a <b id="${element.id}" class="js-likes-counter">${element.likes}</b> persone
                        </div>
                    </div> 
                </div>
            </div>`
        
container.innerHTML += contenutoPost;
});
 //creo un nuovo array per i post liked
 const likedPosts = [];
 //seleciono il bottone mi piace 

//seleziono il bottone mi piace 
let btLikes = document.querySelectorAll('.like-button');
let counters = document.querySelectorAll('.js-likes-counter')
// console.log(btLikes);
// creo una funzione dove al click sul "Mi Piace" cambio colore al testo e incremento il counter dei like
for (let i = 0; i < btLikes.length; i++){
    let likeBt = btLikes[i];
    // console.log(likeBt);
    likeBt.addEventListener("click",
        function(evento){
        evento.preventDefault();
        likeBt.classList.add("like-button_liked");
        // ricavo il contatore corrispondente 
        let counterLike = counters[i];
        // console.log(counters[i]);
        // mi ricavo il contenuto del counter 
        let valoreLike = parseInt(counterLike.innerHTML);
        console.log(valoreLike);
        //dobbiamo incrementare di 1 il valore di like
        valoreLike++;
        //inseriamo il valore aggiornato del valore dei like 
        counterLike.innerHTML = valoreLike; 
    })
}














    // if (btLike.classList.contains("like-button_liked")){
    //     const postId = btLike.getAttribute('data-postid');
    //     likedPosts.push(btLike);
//     //     console.log(likedPosts);
//     // }
//     }   
// ) 