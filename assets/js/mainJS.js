let image = document.querySelectorAll(".imageSection");
let artist = document.querySelectorAll(".artistSection");
let song = document.querySelectorAll(".songSection");
let lastlisten = document.querySelectorAll(".lastlistenSection");
let image2 = document.querySelectorAll(".image2Section")
let image3 = document.querySelectorAll(".image3Section");
let artist3 = document.querySelectorAll(".artist3Section");
let totallisten3 = document.querySelectorAll(".totallisten3Section");
let song3 = document.querySelectorAll(".song3Section");

fetch("assets/js/music.json")
.then(res => res.json())
.then(data => {
    //data is a javaScript object in this case

    const {lastlistened, topartists, toptracks} = data //pull out keys from an object and use them as variables

    lastlistened.forEach(function(item, index) {   
            console.log(item);
            //image
            image[index].style.background = `url(${item["image"]}) no-repeat center center/cover`;
            image[index].style.width = "100px";
            image[index].style.height = "100px";
            //data
            song[index].innerHTML = `\"${item["song"]}\" `;
            artist[index].innerHTML = `${item["artist"]}`;
            lastlisten[index].innerHTML = `last listened <br><br>${item["last listen"]}`;          
        });

        topartists.forEach(function(item, index) {   
            console.log(item);
            image2[index].style.background = `url(${item["image"]}) no-repeat center center/cover`;
            image2[index].style.width = "200px";
            image2[index].style.height = "200px";

            image2[index].innerHTML = `<br><br><br><br><br>&nbsp;&nbsp;&nbsp;${item["artist"]}
            <br><br>&nbsp;&nbsp;&nbsp;${item["total listens"]}<br>`;
        });

        toptracks.forEach(function(item, index){
            console.log(item);
            image3[index].style.background = `url(${item["image"]}) no-repeat center center/cover`;
            image3[index].style.width = "80px";
            image3[index].style.height = "80px";

            song3[index].innerHTML = `${item["song"]}<br><br>${item["artist"]}`;
            totallisten3[index].innerHTML = `${item["total listens"]}`;
        });
});

function results() //In Contacts page where user inputs contact data
{
    let name = document.getElementById('name').value;
    alert (`Thank you for your name, phone number, and email address, ${name}`);
}

function myFunction(x) { //like/unlike heart function
    if ( x.classList.contains( "fa-heart") ) {
        x.classList.remove( "fa-heart" );
        x.classList.add( "fa-heart-o" );
    }
    else {
        x.classList.remove( "fa-heart-o" );
        x.classList.add( "fa-heart" );
    }
}

