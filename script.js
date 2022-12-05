window.addEventListener("load", function () {

    const canvas = document.getElementById("canvas1");
    const ctx = canvas.getContext('2d');
    const CANVAS_HEIGHT = canvas.height = 600;
    const CANVAS_WIDTH = canvas.width = 600;
    const text = [' (e)Esperar',' (s)Saltar',' (f)Caer',' (c)Correr',' (n)Marearse',' (d)Descansar',' (r)Rodar',' (m)Morder',' (a)Acostarse',' (l)Reir']
    let player = new Image();
    player.src = './assets/shadow_dog.png';
    let x = 0;
    let frameX = 0;
    let xPosition = 6;
    let frameY = 0;
    let time = 0;
    let speed = 9;
    const spriteWidth = 575;
    const spriteHeight = 523;
    window.addEventListener("keydown", e => {
        let count = 0;
        text.forEach(element => {
            console.log(element.substring(2,3));
            if (e.key.toLocaleLowerCase() == element.substring(2,3)) {
                if (frameY!=count) {
                    frameX=0;
                }
                frameY = count;
                if (count==0||count==1||count==2||count==6||count==7) {
                    xPosition=6;
                }else if (count==3) {
                    xPosition=8
                }else if(count==4){
                    xPosition=10
                }else if(count==5){
                    xPosition=4
                }else if (count==8){
                    xPosition=11
                }else if(count==9){
                    xPosition=3
                }
            }
            count++;
        });

    });
    ctx.font = 14 + "px " + "Bangers";
    ctx.fillStyle = 'green';
    function animate() {
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        ctx.drawImage(player,
            frameX * spriteWidth, frameY * spriteHeight,
            spriteWidth, spriteHeight,
            0, 0, spriteWidth, spriteHeight);
        ctx.lineWidth = ".5";
        ctx.strokeStyle = "red";
        ctx.strokeText("Actualmente: " + text[frameY], 10, 50,);
        ctx.fillText(text, 10, 30);
        if (time == speed) {
            frameX++;
            speed+=9;
        }
        time++;
        if (xPosition < frameX){
            frameX = 0
        } 
        requestAnimationFrame(animate);
    }

    animate(0);
});