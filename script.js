function changeSad(){
    document.getElementById("img").src="src/C1.gif";
}
document.getElementById("No").addEventListener("mouseover",function(){
    changeSad();
    let noButton=document.getElementById("No");
    let mainDiv=document.getElementById("main");

    let bodyWidth=window.innerWidth-noButton.clientWidth;
    let bodyHeight=window.innerHeight-noButton.clientHeight;

    let mainDivPos=mainDiv.getBoundingClientRect();
    let randomX,randomY;
    do{
        randomX=Math.floor(Math.random()*bodyWidth);
        randomY=Math.floor(Math.random()*bodyHeight);
    }while((randomX+noButton.clientWidth>mainDivPos.left && randomX<mainDivPos.right 
        && randomY+noButton.clientHeight>mainDivPos.top && randomY<mainDivPos.bottom));
    noButton.style.position="absolute";
    noButton.style.left=randomX+"px";
    noButton.style.top=randomY+"px";
    
    content=["Really?","Why not?","Heyy!!","Come on!","Seriously?","Chill!!","Think!!","Give a try!","Ha ha ha!!","I disagre!!","Not happening🗿"]
    noButton.innerHTML = "No<br><span style='font-size: 14px; color: gray;'>" 
    + content[Math.floor(Math.random() * content.length)] + "</span>";
        
});