//creo un ciclo che mi stampi che mi stampi gli elementi della array opject in console
posts.forEach(element => {
    
    // creo i contenitori in pagina e stampo i miei elementi 
    const divPost = document.createElement('div');
    divPost.classList.add('post');

    let container = document.getElementById('container');
    container.appendChild(divPost);
   //creo una funzione per stampare in pagina i vari elementi del mio array object
   
   function creaPost (){
    let contenutoPost = `
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src=${image} alt="Phil Mangione">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${image1}</div>
                        <div class="post-meta__time">${created}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.</div>
            <div class="post__image">
                <img src="https://unsplash.it/600/300?image=171" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">80</b> persone
                    </div>
                </div> 
            </div>`
   };
   divPost.innerHTML = creaPost;
});
