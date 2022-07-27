const canvas= document.getElementById("myCanvas");
canvas.width = 200;


const ctx = canvas.getContext("2d");
const road=new Road(canvas.width/2, canvas.width*0.95);
const car=new Car(road.getLaneCentre(1),100,30,50,"KEYS");
const traffic=[
    new Car(road.getLaneCentre(1),1200,30,50,"DUMMY",4)
];
let t=-1000;
let w=0;
let p=0;
while(t<5000){
traffic.push(
    new Car(road.getLaneCentre(2+p%3),950-t+w,30,50,"DUMMY",4.9+t/5000)
);
traffic.push(
    new Car(road.getLaneCentre(0+p%3),200-(2*t)+w,30,50,"DUMMY",3.5+t/5000)
);
traffic.push(
    new Car(road.getLaneCentre(1+p%3),900-t+w,30,50,"DUMMY",4+t/5000)
);

t = t+800;
w+=100;
}

animate();

function animate(){
    for(let i=0;i<traffic.length;i++){
        traffic[i].update(road.borders,[]);
    }
    car.update(road.borders,traffic);

    canvas.height= window.innerHeight;

    ctx.save();
    ctx.translate(0,-car.y+canvas.height*0.7);

    road.draw(ctx);
    for(let i=0;i<traffic.length;i++){
        traffic[i].draw(ctx,"red");
    }
    car.draw(ctx,"black");

    ctx.restore();
    requestAnimationFrame(animate);
}