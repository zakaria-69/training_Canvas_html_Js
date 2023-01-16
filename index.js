function draw(){


const canvas = document.getElementById('foo');
const context = canvas.getContext('2d');



if (canvas.getContext){
    canvas.getContext('2d');
    context.fillStyle = 'rgb(200,0 ,0)';
    context.fillRect(10,10,50,50);
    context.fillStyle = 'rgb(0,0,200 ,0.5)';
    context.fillRect(30,30,50,50);    
}
else{
    context.font = "30px san-serif";
    context.fillStyle='red';
    context.fillText('Error Display',70,80);         
}
}


