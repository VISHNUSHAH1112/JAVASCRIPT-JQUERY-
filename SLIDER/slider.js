$(document).ready(function()
{
    let count=0;
    const imglength=$(".img").length;
    const imgwidth=$(".img").width();
    function slider(){
        $(".slide").css('transform',`translateX(-${count * imgwidth}px)`);
    }
    
    $("#next").click(function()
    {
        count=(count + 1)%imglength;
        slider();
    });
    
    $("#prev").click(function(){
        count=(count - 1 +imglength)%imglength
        slider();
    });

    setInterval(()=>{
        $(`next`).click();
    },3000)
})
