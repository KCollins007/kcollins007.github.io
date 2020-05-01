
    //Variables
let listenedDiv =document.querySelectorAll("#listened div");
console.log(listenedDiv);

//Fetching music information
fetch("assets/JS/music.json")
.then(res => res.json())
.then(data => {
    data.forEach(function(object) {
        object.lastlisten.forEach(function(item, index){
            console.log(item);
            listenedDiv[index].style.background = `url(${item["image"]}) no-repeat center center/cover`;
            listenedDiv[index].style.width = "200px";
            listenedDiv[index].style.height = "200px";

            listenedDiv[index].innerHTML = `${item["artist"]} ${item["song"]} ${item["last listen"]}`;
        });
   });
});

let artistDiv = document.querySelectorAll("#artist div")
console.log(artistDiv);

fetch("assets/JS/music.json")
.then(res => res.json())
.then(data => {
    data.forEach(function(object) {
        object.topartists.forEach(function(item, index){
            console.log(item);
            artistDiv[index].style.background = `url(${item["image"]}) no-repeat center center/cover`;
            artistDiv[index].style.width = "200px";
            artistDiv[index].style.height = "200px";

            artistDiv[index].innerHTML = `${item["artist"]} ${item["total listens"]}`;
        });
   });
});


function results()
{
    let name = document.getElementById('name').value;
    document.write("Thank you for your message "+ name);
}
