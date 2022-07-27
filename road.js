class Road{
    constructor(x, width, laneCount=3){
        this.x=x;
        this.width=width;
        this.laneCount=laneCount;

        this.left=x-width/2;
        this.right=x+width/2;

        const infinity=100000;
        this.top=-infinity;
        this.bottom=infinity;

        const topleft={x:this.left,y:this.top};
        const topright={x:this.right,y:this.top};
        const bottomleft={x:this.left,y:this.bottom};
        const bottomright={x:this.right,y:this.bottom};
        this.borders=[
            [topleft, bottomleft],
            [topright, bottomright]
        ];
    }

    getLaneCentre(laneIndex){
        const laneWidth=this.width/this.laneCount;
        return this.left+laneWidth/2+Math.min(laneIndex, this.laneCount-1)*laneWidth;
    }

    draw(ctx){
        ctx.lineWidth =5;
        ctx.strokeStyle="white";

        for(let i=1;i<=this.laneCount-1;i++){
            const k=lerp(
                this.left,
                this.right,
                i/this.laneCount
            );
            
            ctx.setLineDash([30,35]);
                
            ctx.beginPath();
            ctx.moveTo(k, this.top);
            ctx.lineTo(k, this.bottom);
            ctx.stroke();

        }
        
        ctx.setLineDash([]);
        this.borders.forEach(border=>{
            ctx.beginPath();
            ctx.moveTo(border[0].x, border[0].y);
            ctx.lineTo(border[1].x, border[1].y);
            ctx.stroke();
        });
    }
}

