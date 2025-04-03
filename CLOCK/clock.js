function update()
{
    let now=new Date(),
    hours=now.getHours(),
    minutes=now.getMinutes().toString().padStart(2,'0'),
    second=now.getSeconds().toString().padStart(2,'0');


    $("#clock").text(`${hours}:${minutes}:${second}`);
}
setInterval(update,1000)
update();