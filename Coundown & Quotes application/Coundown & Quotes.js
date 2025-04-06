const quotes=["Harry","Marry","Carry"]
const color=["red","green","yellow","pink","blue"]
let count=0;


function loop()
{
    let countdown=5;
    let colorindex=0;

    $("#loading").text(quotes[count]);
    $("#count").text(countdown);
    $("#quotes").css("background",color[colorindex]);


    const interval=setInterval(()=>{
        countdown--;
        colorindex=(colorindex+1)%color.length;

        $("#count").text(countdown)
        $("#quotes").css("background",color[colorindex]);

        if(countdown==0){
            clearInterval(interval);
            count=(count+1)%quotes.length;
            loop();
        }
    },1000)
}

loop();
