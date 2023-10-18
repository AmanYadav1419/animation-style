const app = document.getElementById("app");

for(let i = 0; i < 50; i++){
    let card = `
    <div class="card" style="background:hsl(${Math.floor(Math.random()* 360)}, 100%, 50%)">
    <img src="http://source.unsplash.com/random/?sig=${i}" alt=""/>
    </div>
    `;

    app.innerHTML += card;
}

window.addEventListener("mousemove",(e)=>{
    const mouseX = e.clientX ,
          mouseY = e.clientY ;

    const decX = mouseX / window.innerWidth,
          decY = mouseY/ window.innerHeight;

    const maxX = app.offsetWidth - window.innerWidth,
          maxY = app.offsetHeight - window.innerHeight;

    const panX = maxX * decX * -1,
          panY = maxY * decY * -1;

    app.animate(
        {
            translate:`${panX}px ${panY}px`
        },
        {
            duration:3000,
            easing:"ease",
            fill:"forwards",
        }
    );
});