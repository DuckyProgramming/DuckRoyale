class wall{
    constructor(layer,x,y,width,height,type){
        this.layer=layer
        this.position={x:x,y:y}
        this.width=width
        this.height=height
        this.type=type
        this.collide=[entities.projectiles,entities.players]
        this.redundant=[false,false,false,false,false,false,false,false]
        this.standard=this.type!=3&&this.type!=5&&this.type!=5&&this.type!=7&&this.type!=8&&this.type!=9&&this.type!=10&&this.type!=11&&this.type!=12&&this.type!=14&&this.type!=16&&this.type!=19&&this.type!=22
        this.velocity={x:0,y:0}
        this.boundary=[]
        this.exploded=false
        this.time=0
    }
    set(){
        switch(this.type){
            case 1: case 2:
                if(game.level==6){
                    this.balls=[]
                    for(let a=0,la=this.width*this.height/225;a<la;a++){
                        this.balls.push([-this.width/2+(a*0.19%1)*this.width,random(-this.height/2,this.height/2),random(30,40),random(0,1)])
                    }
                }else if(game.level==8){
                    this.balls=[]
                    for(let a=0,la=(this.width-10)*(this.height-10)/400;a<la;a++){
                        this.balls.push([-this.width/2+(a*0.205%1)*(this.width-10)+5,random(-this.height/2+5,this.height/2-5),random(15,45),random(0,1),random(0,360),floor(random(4,7))])
                    }
                }else if(game.level==11){
                    this.balls=[]
                    for(let a=0,la=(this.width-10)*(this.height-10)/1000;a<la;a++){
                        this.balls.push([-this.width/2+(a*0.205%1)*(this.width-10)+5,random(-this.height/2+5,this.height/2-5),random(15,45),random(0,1),random(0,360),floor(random(4,7))])
                    }
                }
            break
            case 4: case 13: case 15:
                this.reload=0
            break
            case 6:
                this.carry=[]
                this.disable=false
            break
            case 8: case 9: case 12: case 19:
                this.recharge=0
            break
            case 16:
                this.recharge=0
                this.weapon=floor(random(0,20))==0?floor(random(36,40)):floor(random(0,9))+floor(random(0,1.5))*floor(random(1,4))*9
            break
            case 17:
                if(game.level==8){
                    this.balls=[]
                    for(let a=0,la=(this.width-10)*(this.height-10)/800;a<la;a++){
                        let pos=(a*0.205%1)
                        this.balls.push([-this.width/2+pos*(this.width-10)+5,random(-this.height/2+5+(this.height-10)*pos,this.height/2-5),random(15,45),random(0,1),random(0,360),floor(random(4,7))])
                    }
                }else if(game.level==11){
                    this.balls=[]
                    for(let a=random(0,1),la=(this.width-10)*(this.height-10)/2000;a<la;a++){
                        let pos=(a*0.205%1)
                        this.balls.push([-this.width/2+pos*(this.width-10)+5,random(-this.height/2+5+(this.height-10)*pos,this.height/2-5),random(15,45),random(0,1),random(0,360),floor(random(4,7))])
                    }
                }
            break
            case 18:
                if(game.level==8){
                    this.balls=[]
                    for(let a=0,la=(this.width-10)*(this.height-10)/800;a<la;a++){
                        let pos=(a*0.205%1)
                        this.balls.push([-this.width/2+pos*(this.width-10)+5,random(-this.height/2+5+(this.height-10)*(1-pos),this.height/2-5),random(15,45),random(0,1),random(0,360),floor(random(4,7))])
                    }
                }else if(game.level==11){
                    this.balls=[]
                    for(let a=random(0,1),la=(this.width-10)*(this.height-10)/2000;a<la;a++){
                        let pos=(a*0.205%1)
                        this.balls.push([-this.width/2+pos*(this.width-10)+5,random(-this.height/2+5+(this.height-10)*(1-pos),this.height/2-5),random(15,45),random(0,1),random(0,360),floor(random(4,7))])
                    }
                }
            break
            case 20:
                if(game.level==8){
                    this.balls=[]
                    for(let a=0,la=(this.width-10)*(this.height-10)/800;a<la;a++){
                        let pos=(a*0.205%1)
                        this.balls.push([-this.width/2+pos*(this.width-10)+5,random(-this.height/2+5,-this.height/2+5+(this.height-10)*(1-pos)),random(15,45),random(0,1),random(0,360),floor(random(4,7))])
                    }
                }else if(game.level==11){
                    this.balls=[]
                    for(let a=random(0,1),la=(this.width-10)*(this.height-10)/2000;a<la;a++){
                        let pos=(a*0.205%1)
                        this.balls.push([-this.width/2+pos*(this.width-10)+5,random(-this.height/2+5,-this.height/2+5+(this.height-10)*(1-pos)),random(15,45),random(0,1),random(0,360),floor(random(4,7))])
                    }
                }
            break
            case 21:
                if(game.level==8){
                    this.balls=[]
                    for(let a=0,la=(this.width-10)*(this.height-10)/800;a<la;a++){
                        let pos=(a*0.205%1)
                        this.balls.push([-this.width/2+pos*(this.width-10)+5,random(-this.height/2+5,-this.height/2+5+(this.height-10)*pos),random(15,45),random(0,1),random(0,360),floor(random(4,7))])
                    }
                }else if(game.level==11){
                    this.balls=[]
                    for(let a=random(0,1),la=(this.width-10)*(this.height-10)/2000;a<la;a++){
                        let pos=(a*0.205%1)
                        this.balls.push([-this.width/2+pos*(this.width-10)+5,random(-this.height/2+5,-this.height/2+5+(this.height-10)*pos),random(15,45),random(0,1),random(0,360),floor(random(4,7))])
                    }
                }
            break
            case 22:
                this.spin=sin(this.position.x/6+this.position.y/10)*20
            break
        }
    }
    checkHorizontal(){
        if(!this.remove){
            for(let a=0,la=entities.walls.length;a<la;a++){
                for(let b=0,lb=entities.walls[a].length;b<lb;b++){
                    let c=entities.walls[a][b]
                    if(c.type==this.type&&(c.position.x!=this.position.x||c.position.y!=this.position.y)){
                        if(abs(this.height-c.height)<1&&abs(c.position.x-(this.position.x+this.width/2+c.width/2))<1&&abs(c.position.y-this.position.y)<1&&!c.remove){
                            this.width+=c.width
                            this.position.x+=c.width/2
                            c.remove=true
                        }
                    }
                }
            }
        }
    }
    checkVertical(){
        if(!this.remove){
            for(let a=0,la=entities.walls.length;a<la;a++){
                for(let b=0,lb=entities.walls[a].length;b<lb;b++){
                    let c=entities.walls[a][b]
                    if(c.type==this.type&&(c.position.x!=this.position.x||c.position.y!=this.position.y)){
                        if(abs(this.width-c.width)<1&&abs(c.position.y-(this.position.y+this.height/2+c.height/2))<1&&abs(c.position.x-this.position.x)<1&&!c.remove){
                            this.height+=c.height
                            this.position.y+=c.height/2
                            c.remove=true
                        }
                    }
                }
            }
        }
    }
    formBoundary(){
        switch(this.type){
            case 17:
                this.boundary=[
                    [[{x:this.position.x-this.width/2,y:this.position.y+this.height/2},{x:this.position.x+this.width/2,y:this.position.y+this.height/2}]],
                    [],
                    [],
                    [[{x:this.position.x-this.width/2,y:this.position.y-this.height/2},{x:this.position.x-this.width/2,y:this.position.y+this.height/2}]],
                    [[{x:this.position.x-this.width/2,y:this.position.y-this.height/2},{x:this.position.x+this.width/2,y:this.position.y+this.height/2}]],
                    [],
                    [],
                    [],
                ]
            break
            case 18:
                this.boundary=[
                    [[{x:this.position.x-this.width/2,y:this.position.y+this.height/2},{x:this.position.x+this.width/2,y:this.position.y+this.height/2}]],
                    [],
                    [[{x:this.position.x+this.width/2,y:this.position.y-this.height/2},{x:this.position.x+this.width/2,y:this.position.y+this.height/2}]],
                    [],
                    [],
                    [[{x:this.position.x+this.width/2,y:this.position.y-this.height/2},{x:this.position.x-this.width/2,y:this.position.y+this.height/2}]],
                    [],
                    [],
                ]
            break
            case 20:
                this.boundary=[
                    [],
                    [[{x:this.position.x-this.width/2,y:this.position.y-this.height/2},{x:this.position.x+this.width/2,y:this.position.y-this.height/2}]],
                    [],
                    [[{x:this.position.x-this.width/2,y:this.position.y-this.height/2},{x:this.position.x-this.width/2,y:this.position.y+this.height/2}]],
                    [],
                    [],
                    [[{x:this.position.x+this.width/2,y:this.position.y-this.height/2},{x:this.position.x-this.width/2,y:this.position.y+this.height/2}]],
                    [],
                ]
            break
            case 21:
                this.boundary=[
                    [],
                    [[{x:this.position.x-this.width/2,y:this.position.y-this.height/2},{x:this.position.x+this.width/2,y:this.position.y-this.height/2}]],
                    [[{x:this.position.x+this.width/2,y:this.position.y-this.height/2},{x:this.position.x+this.width/2,y:this.position.y+this.height/2}]],
                    [],
                    [],
                    [],
                    [],
                    [[{x:this.position.x-this.width/2,y:this.position.y-this.height/2},{x:this.position.x+this.width/2,y:this.position.y+this.height/2}]],
                ]
            break
            case 22:
                this.boundary=[[],[],[],[],[],[],[],[]]
            break
            default:
                this.boundary=[
                    [[{x:this.position.x-this.width/2,y:this.position.y+this.height/2},{x:this.position.x+this.width/2,y:this.position.y+this.height/2}]],
                    [[{x:this.position.x-this.width/2,y:this.position.y-this.height/2},{x:this.position.x+this.width/2,y:this.position.y-this.height/2}]],
                    [[{x:this.position.x+this.width/2,y:this.position.y-this.height/2},{x:this.position.x+this.width/2,y:this.position.y+this.height/2}]],
                    [[{x:this.position.x-this.width/2,y:this.position.y-this.height/2},{x:this.position.x-this.width/2,y:this.position.y+this.height/2}]],
                    [],
                    [],
                    [],
                    [],
                ]
            break
        }
    }
    checkRedundancy(){
        if(this.position.y+this.height/2>=game.edge[1]){
            this.redundant[0]=true
            this.boundary[0]=[]
        }
        if(this.position.y-this.height/2<=0){
            this.redundant[1]=true
            this.boundary[1]=[]
        }
        if(this.position.x+this.width/2>=game.edge[0]){
            this.redundant[2]=true
            this.boundary[2]=[]
        }
        if(this.position.x-this.width/2<=0){
            this.redundant[3]=true
            this.boundary[3]=[]
        }
        for(let a=0,la=entities.walls.length;a<la;a++){
            for(let b=0,lb=entities.walls[a].length;b<lb;b++){
                let c=entities.walls[a][b]
                if(c.standard){
                    if(abs(c.position.y-(this.position.y+this.height/2+c.height/2))<1&&c.position.x-c.width/2<=this.position.x-this.width/2+1&&c.position.x+c.width/2>=this.position.x+this.width/2-1){
                        this.redundant[0]=true
                        this.boundary[0]=[]
                    }
                    if(abs(c.position.y-(this.position.y-this.height/2-c.height/2))<1&&c.position.x-c.width/2<=this.position.x-this.width/2+1&&c.position.x+c.width/2>=this.position.x+this.width/2-1){
                        this.redundant[1]=true
                        this.boundary[1]=[]
                    }
                    if(abs(c.position.x-(this.position.x+this.width/2+c.width/2))<1&&c.position.y-c.height/2<=this.position.y-this.height/2+1&&c.position.y+c.height/2>=this.position.y+this.height/2-1){
                        this.redundant[2]=true
                        this.boundary[2]=[]
                    }
                    if(abs(c.position.x-(this.position.x-this.width/2-c.width/2))<1&&c.position.y-c.height/2<=this.position.y-this.height/2+1&&c.position.y+c.height/2>=this.position.y+this.height/2-1){
                        this.redundant[3]=true
                        this.boundary[3]=[]
                    }
                }
            }
        }
    }
    checkOverlay(){
        for(let a=0,la=entities.walls.length;a<la;a++){
            for(let b=0,lb=entities.walls[a].length;b<lb;b++){
                let c=entities.walls[a][b]
                if(c.standard){
                    for(let d=0,ld=this.boundary[0].length;d<ld;d++){
                        if(abs(c.position.y-(this.position.y+this.height/2+c.height/2))<1&&c.position.x-c.width/2<this.boundary[0][d][0].x+1&&c.position.x+c.width/2>this.boundary[0][d][1].x-1){
                            this.boundary[0].splice(d,1)
                            d--
                            ld--
                        }
                    }
                    for(let d=0,ld=this.boundary[1].length;d<ld;d++){
                        if(abs(c.position.y-(this.position.y-this.height/2-c.height/2))<1&&c.position.x-c.width/2<this.boundary[1][d][0].x+1&&c.position.x+c.width/2>this.boundary[1][d][1].x-1){
                            this.boundary[1].splice(d,1)
                            d--
                            ld--
                        }
                    }
                    for(let d=0,ld=this.boundary[2].length;d<ld;d++){
                        if(abs(c.position.x-(this.position.x+this.width/2+c.width/2))<1&&c.position.y-c.height/2<this.boundary[2][d][0].y+1&&c.position.y+c.height/2>this.boundary[2][d][1].y-1){
                            this.boundary[2].splice(d,1)
                            d--
                            ld--
                        }
                    }
                    for(let d=0,ld=this.boundary[3].length;d<ld;d++){
                        if(abs(c.position.x-(this.position.x-this.width/2-c.width/2))<1&&c.position.y-c.height/2<this.boundary[3][d][0].y+1&&c.position.y+c.height/2>this.boundary[3][d][1].y-1){
                            this.boundary[3].splice(d,1)
                            d--
                            ld--
                        }
                    }
                    for(let d=0,ld=this.boundary[0].length;d<ld;d++){
                        if(abs(c.position.y-(this.position.y+this.height/2+c.height/2))<1&&c.position.x-c.width/2>this.boundary[0][d][0].x+1&&c.position.x+c.width/2<this.boundary[0][d][1].x-1){
                            this.boundary[0].push([{x:c.position.x+c.width/2,y:this.boundary[0][d][0].y},{x:this.boundary[0][d][1].x,y:this.boundary[0][d][1].y}])
                            this.boundary[0][d][1].x=c.position.x-c.width/2
                        }
                    }
                    for(let d=0,ld=this.boundary[1].length;d<ld;d++){
                        if(abs(c.position.y-(this.position.y-this.height/2-c.height/2))<1&&c.position.x-c.width/2>this.boundary[1][d][0].x+1&&c.position.x+c.width/2<this.boundary[1][d][1].x-1){
                            this.boundary[1].push([{x:c.position.x+c.width/2,y:this.boundary[1][d][0].y},{x:this.boundary[1][d][1].x,y:this.boundary[1][d][1].y}])
                            this.boundary[1][d][1].x=c.position.x-c.width/2
                        }
                    }
                    for(let d=0,ld=this.boundary[2].length;d<ld;d++){
                        if(abs(c.position.x-(this.position.x+this.width/2+c.width/2))<1&&c.position.y-c.height/2>this.boundary[2][d][0].y+1&&c.position.y+c.height/2<this.boundary[2][d][1].y-1){
                            this.boundary[2].push([{x:this.boundary[2][d][0].x,y:c.position.y+c.height/2},{x:this.boundary[2][d][1].x,y:this.boundary[2][d][1].y}])
                            this.boundary[2][d][1].y=c.position.y-c.height/2
                        }
                    }
                    for(let d=0,ld=this.boundary[3].length;d<ld;d++){
                        if(abs(c.position.x-(this.position.x-this.width/2-c.width/2))<1&&c.position.y-c.height/2>this.boundary[3][d][0].y+1&&c.position.y+c.height/2<this.boundary[3][d][1].y-1){
                            this.boundary[3].push([{x:this.boundary[3][d][0].x,y:c.position.y+c.height/2},{x:this.boundary[3][d][1].x,y:this.boundary[3][d][1].y}])
                            this.boundary[3][d][1].y=c.position.y-c.height/2
                        }
                    }
                    for(let d=0,ld=2;d<ld;d++){
                        for(let e=0,le=this.boundary[0].length;e<le;e++){
                            if(abs(c.position.y-(this.position.y+this.height/2+c.height/2))<1&&c.position.x-c.width/2<=this.boundary[0][e][d].x+1&&c.position.x+c.width/2>=this.boundary[0][e][d].x-1){
                                this.boundary[0][e][d].x=c.position.x+c.width/2*(1-d*2)
                            }
                        }
                        for(let e=0,le=this.boundary[1].length;e<le;e++){
                            if(abs(c.position.y-(this.position.y-this.height/2-c.height/2))<1&&c.position.x-c.width/2<=this.boundary[1][e][d].x+1&&c.position.x+c.width/2>=this.boundary[1][e][d].x-1){
                                this.boundary[1][e][d].x=c.position.x+c.width/2*(1-d*2)
                            }
                        }
                        for(let e=0,le=this.boundary[2].length;e<le;e++){
                            if(abs(c.position.x-(this.position.x+this.width/2+c.width/2))<1&&c.position.y-c.height/2<=this.boundary[2][e][d].y+1&&c.position.y+c.height/2>=this.boundary[2][e][d].y-1){
                                this.boundary[2][e][d].y=c.position.y+c.height/2*(1-d*2)
                            }
                        }
                        for(let e=0,le=this.boundary[3].length;e<le;e++){
                            if(abs(c.position.x-(this.position.x-this.width/2-c.width/2))<1&&c.position.y-c.height/2<=this.boundary[3][e][d].y+1&&c.position.y+c.height/2>=this.boundary[3][e][d].y-1){
                                this.boundary[3][e][d].y=c.position.y+c.height/2*(1-d*2)
                            }
                        }
                    }
                }
            }
        }
    }
    checkGap(){
        for(let a=0,la=4;a<la;a++){
            for(let b=0,lb=this.boundary[a].length;b<lb;b++){
                if(dist(this.boundary[a][b][0].x,this.boundary[a][b][0].y,this.boundary[a][b][1].x,this.boundary[a][b][1].y)<5){
                    this.boundary[a].splice(b,1)
                    b--
                    lb--
                }
            }
        }
    }
    checkBar(){
        for(let a=0,la=entities.walls.length;a<la;a++){
            for(let b=0,lb=entities.walls[a].length;b<lb;b++){
                let c=entities.walls[a][b]
                if((c.position.x!=this.position.x||c.position.y!=this.position.y)&&c.type==this.type){
                    for(let d=0,ld=2;d<ld;d++){
                        if(abs((this.position.y+this.height/2)-(c.position.y+c.height/2))<1&&!this.redundant[0]&&!c.redundant[0]){
                            for(let e=0,le=this.boundary[0].length;e<le;e++){
                                for(let f=0,lf=c.boundary[0].length;f<lf;f++){
                                    if(abs(this.boundary[0][e][d].x-c.boundary[0][f][1-d].x)<1){
                                        this.boundary[0][e][d].x=c.boundary[0][f][d].x
                                        c.boundary[0].splice(f,1)
                                        f--
                                        lf--
                                    }
                                }
                            }
                        }
                        if(abs((this.position.y-this.height/2)-(c.position.y-c.height/2))<1&&!this.redundant[1]&&!c.redundant[1]){
                            for(let e=0,le=this.boundary[1].length;e<le;e++){
                                for(let f=0,lf=c.boundary[1].length;f<lf;f++){
                                    if(abs(this.boundary[1][e][d].x-c.boundary[1][f][1-d].x)<1){
                                        this.boundary[1][e][d].x=c.boundary[1][f][d].x
                                        c.boundary[1].splice(f,1)
                                        f--
                                        lf--
                                    }
                                }
                            }
                        }
                        if(abs((this.position.x+this.width/2)-(c.position.x+c.width/2))<1&&!this.redundant[2]&&!c.redundant[2]){
                            for(let e=0,le=this.boundary[2].length;e<le;e++){
                                for(let f=0,lf=c.boundary[2].length;f<lf;f++){
                                    if(abs(this.boundary[2][e][d].y-c.boundary[2][f][1-d].y)<1){
                                        this.boundary[2][e][d].y=c.boundary[2][f][d].y
                                        c.boundary[2].splice(f,1)
                                        f--
                                        lf--
                                    }
                                }
                            }
                        }
                        if(abs((this.position.x-this.width/2)-(c.position.x-c.width/2))<1&&!this.redundant[3]&&!c.redundant[3]){
                            for(let e=0,le=this.boundary[3].length;e<le;e++){
                                for(let f=0,lf=c.boundary[3].length;f<lf;f++){
                                    if(abs(this.boundary[3][e][d].y-c.boundary[3][f][1-d].y)<1){
                                        this.boundary[3][e][d].y=c.boundary[3][f][d].y
                                        c.boundary[3].splice(f,1)
                                        f--
                                        lf--
                                    }
                                }
                            }
                        }
                        for(let g=4,lg=8;g<lg;g++){
                            if(this.boundary[g].length>0&&c.boundary[g].length>0&&abs(this.width/this.height-c.width/c.height)<0.01){
                                for(let e=0,le=this.boundary[g].length;e<le;e++){
                                    for(let f=0,lf=c.boundary[g].length;f<lf;f++){
                                        if(abs(this.boundary[g][e][d].x-c.boundary[g][f][1-d].x)<1&&abs(this.boundary[g][e][d].y-c.boundary[g][f][1-d].y)<1&&(c.boundary[g][f][d].y>this.boundary[g][e][d].y&&g<6||c.boundary[g][f][d].y<this.boundary[g][e][d].y&&g>=6)){
                                            this.boundary[g][e][d].x=c.boundary[g][f][d].x
                                            this.boundary[g][e][d].y=c.boundary[g][f][d].y
                                            c.boundary[g].splice(f,1)
                                            f--
                                            lf--
                                            this.checkBar()
                                        }else if(abs(this.boundary[g][e][d].x-c.boundary[g][f][d].x)<1&&abs(this.boundary[g][e][d].y-c.boundary[g][f][d].y)<1&&(c.boundary[g][f][1-d].y>this.boundary[g][e][d].y&&g<6||c.boundary[g][f][1-d].y<this.boundary[g][e][d].y&&g>=6)){
                                            this.boundary[g][e][d].x=c.boundary[g][f][1-d].x
                                            this.boundary[g][e][d].y=c.boundary[g][f][1-d].y
                                            c.boundary[g].splice(f,1)
                                            f--
                                            lf--
                                            this.checkBar()
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    formBounder(){
        let bounds=[this.position.x-this.width/2,this.position.x+this.width/2,this.position.y-this.height/2,this.position.y+this.height/2]
        for(let a=0,la=this.boundary.length;a<la;a++){
            for(let b=0,lb=this.boundary[a].length;b<lb;b++){
                for(let c=0,lc=2;c<lc;c++){
                    if(this.boundary[a][b][c].x<bounds[0]){
                        bounds[0]=this.boundary[a][b][c].x
                    }else if(this.boundary[a][b][c].x>bounds[1]){
                        bounds[1]=this.boundary[a][b][c].x
                    }
                    if(this.boundary[a][b][c].y<bounds[2]){
                        bounds[2]=this.boundary[a][b][c].y
                    }else if(this.boundary[a][b][c].y>bounds[3]){
                        bounds[3]=this.boundary[a][b][c].y
                    }
                }
            }
        }
        this.internalBounder={position:{x:bounds[0]/2+bounds[1]/2,y:bounds[2]/2+bounds[3]/2},width:bounds[1]-bounds[0],height:bounds[3]-bounds[2]}
        this.bounder={position:{x:bounds[0]/2+bounds[1]/2,y:bounds[2]/2+bounds[3]/2},width:bounds[1]-bounds[0]+50,height:bounds[3]-bounds[2]+50}
        /*this.neighbors=[]
        for(let a=0,la=entities.walls.length;a<la;a++){
            for(let b=0,lb=entities.walls[a].length;b<lb;b++){
                let c=entities.walls[a][b]
                if(
                    (c.boundary[4].length>0||c.boundary[5].length>0||c.boundary[6].length>0||c.boundary[7].length>0)&&
                    c.position.x+c.width/2>=this.position.x-this.width/2&&
                    c.position.x-c.width/2<=this.position.x+this.width/2&&
                    c.position.y+c.height/2>=this.position.y-this.height/2&&
                    c.position.y-c.height/2<=this.position.y+this.height/2
                ){
                    this.neighbors.push(c)
                }
            }
        }*/
    }
    display(layer){
        layer.push()
        layer.translate(this.position.x,this.position.y)
        layer.noStroke()
        switch(this.type){
            case 1:
                if(game.level==7){
                    layer.noFill()
                    layer.stroke(50,150,200)
                    layer.strokeWeight(4)
                    for(let a=0,la=4;a<la;a++){
                        for(let b=0,lb=this.boundary[a].length;b<lb;b++){
                            layer.line(
                                this.boundary[a][b][0].x+(a==2?-2:a==3?2:2)-this.position.x,
                                this.boundary[a][b][0].y+(a==0?-2:a==1?2:2)-this.position.y,
                                this.boundary[a][b][1].x+(a==2?-2:a==3?2:-2)-this.position.x,
                                this.boundary[a][b][1].y+(a==0?-2:a==1?2:-2)-this.position.y
                            )
                        }
                    }
                }else if(game.level==6){
                    layer.fill(30+this.position.y/layer.height*30,60-this.position.y/layer.height*15,30)
                    layer.rect(0,0,this.width+1,this.height+1)
                }else if(game.level==8||game.level==11){
                    layer.fill(100)
                    layer.rect(0,0,this.width+1,this.height+1,2)
                }else{
                    layer.fill(120)
                    layer.rect(0,0,this.width+1,this.height+1)
                }
            break
            case 2:
                if(game.level==6){
                    layer.fill(60+this.position.y/layer.height*60,120-this.position.y/layer.height*30,60)
                    layer.rect(0,0,this.width+1,this.height+1)
                }else{
                    layer.fill(120,200,120)
                    layer.rect(0,0,this.width+1,this.height+1)
                }
            break
            case 3:
                layer.fill(120,200,200)
                layer.rect(0,0,this.width+1,this.height+1)
            break
            case 4:
                layer.fill(220-this.reload/6,120,120)
                layer.rect(0,0,this.width+1,this.height+1)
            break
            case 5:
                if(!this.exploded){
                    layer.fill(240,120,120)
                    layer.rect(0,-this.height/6,this.width*0.6,this.height/3+1)
                    layer.fill(80)
                    layer.rect(0,this.height/6,this.width+1,this.height*2/3+1)
                }
            break
            case 6:
                layer.fill(40,120,40)
                layer.rect(0,0,this.width+1,this.height+1)
            break
            case 7:
                layer.fill(50)
                layer.rect(0,0,this.width+1,this.height+1)
                layer.fill(70)
                for(let a=0,la=this.height/game.tileset[1];a<la;a++){
                    layer.rect(0,-this.height/2+(a+0.5)*game.tileset[1],this.width+1,game.tileset[1]/5)
                }
            break
            case 8:
                for(let a=0,la=4;a<la;a++){
                    if(cos(a*90+this.time)>0){
                        layer.fill(60+cos(a*90+this.time)*40,55+cos(a*90+this.time)*40,50+cos(a*90+this.time)*40,1-this.recharge/60)
                        layer.rect(this.width/2*sin(a*90+this.time),0,(this.width+1)*cos(a*90+this.time),this.height+1)
                        layer.fill(240+cos(a*90+this.time)*40,120+cos(a*90+this.time)*40,60+cos(a*90+this.time)*40,1-this.recharge/60)
                        layer.ellipse(this.width/2*sin(a*90+this.time),0,this.width*cos(a*90+this.time)*0.6,this.height*0.6)
                        layer.fill(60+cos(a*90+this.time)*40,1-this.recharge/60)
                        layer.rect(this.width/2*sin(a*90+this.time),0,this.width*cos(a*90+this.time)*0.1,this.height*0.4)
                        layer.rect(this.width/2*sin(a*90+this.time)-this.width*cos(a*90+this.time)*0.12,0,this.width*cos(a*90+this.time)*0.08,this.height*0.4)
                        layer.rect(this.width/2*sin(a*90+this.time)+this.width*cos(a*90+this.time)*0.12,0,this.width*cos(a*90+this.time)*0.08,this.height*0.4)
                    }
                }
            break
            case 9:
                for(let a=0,la=4;a<la;a++){
                    if(cos(a*90+this.time)>0){
                        layer.fill(60+cos(a*90+this.time)*40,120+cos(a*90+this.time)*40,180+cos(a*90+this.time)*40,1-this.recharge/60)
                        layer.rect(this.width/2*sin(a*90+this.time),0,(this.width+1)*cos(a*90+this.time),this.height+1)
                        layer.fill(160+cos(a*90+this.time)*40,1-this.recharge/60)
                        layer.ellipse(this.width/2*sin(a*90+this.time),0,this.width*cos(a*90+this.time)*0.6,this.height*0.6)
                        layer.fill(240+cos(a*90+this.time)*40,40+cos(a*90+this.time)*40,40+cos(a*90+this.time)*40,1-this.recharge/60)
                        layer.rect(this.width/2*sin(a*90+this.time),0,this.width*cos(a*90+this.time)*0.45,this.height*0.15)
                        layer.rect(this.width/2*sin(a*90+this.time),0,this.width*cos(a*90+this.time)*0.15,this.height*0.45)
                    }
                }
            break
            case 11:
                layer.fill(60)
                layer.rect(0,this.height/4+1,this.width/3-2,this.height/2-2)
                layer.rect(-this.width/3,this.height/4+1,this.width/3-2,this.height/2-2)
                layer.rect(this.width/3,this.height/4+1,this.width/3-2,this.height/2-2)
                layer.rect(-this.width/6,-this.height/4+1,this.width/3-2,this.height/2-2)
                layer.rect(this.width/6,-this.height/4+1,this.width/3-2,this.height/2-2)
            break
            case 12:
                for(let a=0,la=4;a<la;a++){
                    if(cos(a*90+this.time)>0){
                        layer.fill(120+cos(a*90+this.time)*40,160+cos(a*90+this.time)*40,200+cos(a*90+this.time)*40,1-this.recharge/60)
                        layer.rect(this.width/2*sin(a*90+this.time),0,(this.width+1)*cos(a*90+this.time),this.height+1)
                        layer.fill(120+cos(a*90+this.time)*40,240+cos(a*90+this.time)*40,240+cos(a*90+this.time)*40,1-this.recharge/60)
                        layer.ellipse(this.width/2*sin(a*90+this.time),0,this.width*cos(a*90+this.time)*0.6,this.height*0.6)
                        layer.fill(40+cos(a*90+this.time)*40,120+cos(a*90+this.time)*40,120+cos(a*90+this.time)*40,1-this.recharge/60)
                        layer.rect(this.width/2*sin(a*90+this.time),-this.height*0.08,this.width*cos(a*90+this.time)*0.1,this.height*0.3)
                        layer.rect(this.width/2*sin(a*90+this.time),this.height*0.18,this.width*cos(a*90+this.time)*0.1,this.height*0.1)
                    }
                }
            break
            case 13:
                layer.fill(220-this.reload/6,220-this.reload/6,120)
                layer.rect(0,0,this.width+1,this.height+1)
            break
            case 15:
                layer.fill(220-this.reload/6,120,220-this.reload/6)
                layer.rect(0,0,this.width+1,this.height+1)
            break
            case 16:
                for(let a=0,la=4;a<la;a++){
                    if(cos(a*90+this.time)>0){
                        layer.fill(160+cos(a*90+this.time)*40,1-this.recharge/60)
                        layer.rect(this.width/2*sin(a*90+this.time),0,(this.width+1)*cos(a*90+this.time),this.height+1)
                        layer.fill(80+cos(a*90+this.time)*40,1-this.recharge/60)
                        layer.ellipse(this.width/2*sin(a*90+this.time),0,this.width*cos(a*90+this.time)*0.6,this.height*0.6)
                        layer.fill(220+cos(a*90+this.time)*40,1-this.recharge/60)
                        layer.rect(this.width/2*sin(a*90+this.time),-this.height*0.12,this.width*cos(a*90+this.time)*0.1,this.height*0.1)
                        layer.rect(this.width/2*sin(a*90+this.time),0,this.width*cos(a*90+this.time)*0.1,this.height*0.1)
                        layer.rect(this.width/2*sin(a*90+this.time),this.height*0.12,this.width*cos(a*90+this.time)*0.1,this.height*0.1)
                    }
                }
            break
            case 17:
                if(game.level==8||game.level==11){
                    layer.fill(100)
                }else{
                    layer.fill(120)
                }
                layer.triangle(
                    -this.width/2-0.5,-this.height/2-0.5,
                    -this.width/2-0.5,this.height/2+0.5,
                    this.width/2+0.5,this.height/2+0.5
                )
            break
            case 18:
                if(game.level==8||game.level==11){
                    layer.fill(100)
                }else{
                    layer.fill(120)
                }
                layer.triangle(
                    this.width/2+0.5,-this.height/2-0.5,
                    -this.width/2-0.5,this.height/2+0.5,
                    this.width/2+0.5,this.height/2+0.5
                )
            break
            case 19:
                for(let a=0,la=4;a<la;a++){
                    if(cos(a*90+this.time)>0){
                        layer.fill(120+cos(a*90+this.time)*40,1-this.recharge/60)
                        layer.rect(this.width/2*sin(a*90+this.time),0,(this.width+1)*cos(a*90+this.time),this.height+1)
                        layer.fill(40+cos(a*90+this.time)*40,200+cos(a*90+this.time)*40,40+cos(a*90+this.time)*40,1-this.recharge/60)
                        layer.ellipse(this.width/2*sin(a*90+this.time),0,this.width*cos(a*90+this.time)*0.6,this.height*0.6)
                        layer.fill(200+cos(a*90+this.time)*40,1-this.recharge/60)
                        layer.rect(this.width/2*sin(a*90+this.time),0,this.width*cos(a*90+this.time)*0.1,this.height*0.5)
                        layer.rect(this.width/2*sin(a*90+this.time)-this.width*cos(a*90+this.time)*0.15,0,this.width*cos(a*90+this.time)*0.1,this.height*0.3)
                        layer.rect(this.width/2*sin(a*90+this.time)+this.width*cos(a*90+this.time)*0.15,0,this.width*cos(a*90+this.time)*0.1,this.height*0.3)
                    }
                }
            break
            case 20:
                if(game.level==8||game.level==11){
                    layer.fill(100)
                }else{
                    layer.fill(120)
                }
                layer.triangle(
                    -this.width/2-0.5,-this.height/2-0.5,
                    -this.width/2-0.5,this.height/2+0.5,
                    this.width/2+0.5,-this.height/2-0.5
                )
            break
            case 21:
                if(game.level==8||game.level==11){
                    layer.fill(100)
                }else{
                    layer.fill(120)
                }
                layer.triangle(
                    -this.width/2-0.5,-this.height/2-0.5,
                    this.width/2+0.5,-this.height/2-0.5,
                    this.width/2+0.5,this.height/2+0.5
                )
            break
            case 22:
                if(layer.index!=game.hunt-1||game.hunt==0||game.gaming<=2){
                    layer.rotate(this.spin)
                    layer.fill(180,180,90)
                    layer.stroke(150,150,120)
                    layer.strokeWeight(1)
                    layer.textSize(15)
                    layer.text(`Z${floor((this.position.x-game.tileset[0]/2)/(16*game.tileset[0]))+1} - ${floor((this.position.y-game.tileset[1]*15.5)/(16*game.tileset[1]))+1}`,0,0)
                }
            break
        }
        //layer.stroke(255,150,50)
        //layer.noFill()
        //layer.rect(0,0,this.width,this.height)
        layer.pop()
        /*layer.stroke(255,150,50)
        layer.noFill()
        layer.rect(this.bounder.position.x,this.bounder.position.y,this.bounder.width-10,this.bounder.height-10)*/
    }
    displayOver(layer){
        layer.push()
        layer.translate(this.position.x,this.position.y)
        layer.noStroke()
        switch(this.type){
            case 1: case 17: case 18: case 20: case 21:
                if(game.level==6){
                    for(let a=0,la=this.balls.length;a<la;a++){
                        layer.fill(
                            30+(this.position.y+this.balls[a][1])/layer.height*30+this.balls[a][3]*30,
                            60-(this.position.y+this.balls[a][1])/layer.height*15+this.balls[a][3]*30,
                            30+this.balls[a][3]*30
                        )
                        regPoly(layer,this.balls[a][0],this.balls[a][1],floor(random(4,9)),this.balls[a][2]/2,this.balls[a][2]/2,this.balls[a][4])
                    }
                }else if(game.level==8||game.level==11){
                    for(let a=0,la=this.balls.length;a<la;a++){
                        layer.fill(
                            85+this.balls[a][3]*30,
                            85+this.balls[a][3]*30,
                            85+this.balls[a][3]*30
                        )
                        regStar(layer,this.balls[a][0],this.balls[a][1],this.balls[a][5],this.balls[a][2]*0.5,this.balls[a][2]*0.5,this.balls[a][2]*0.3,this.balls[a][2]*0.3,this.balls[a][4])
                    }
                }
            break
            case 2:
                if(game.level==6){
                    for(let a=0,la=this.balls.length;a<la;a++){
                        layer.fill(
                            60+(this.position.y+this.balls[a][1])/layer.height*60+this.balls[a][3]*30,
                            120-(this.position.y+this.balls[a][1])/layer.height*30+this.balls[a][3]*30,
                            60+this.balls[a][3]*30
                        )
                        regPoly(layer,this.balls[a][0],this.balls[a][1],floor(random(4,9)),this.balls[a][2]/2,this.balls[a][2]/2,this.balls[a][4])
                    }
                }
            break
            case 16:
                layer.fill(180,1-this.recharge/60)
                layer.textSize(8)
                try{
                    layer.text(types.weapon[types.player[this.weapon].weapon].name,0,-this.height)
                }catch(error){
                    print("Invalid Weapon ID:"+this.weapon,error)
                    this.remove=true
                }
            break
        }
        layer.pop()
        /*layer.stroke(50,50+this.type*100,200)
        layer.strokeWeight(4)
        for(let a=0,la=this.boundary.length;a<la;a++){
            for(let b=0,lb=this.boundary[a].length;b<lb;b++){
                layer.line(
                    this.position.x+this.boundary[a][b][0].x+(a==2?-2:a==3?2:2)-this.position.x,
                    this.position.y+this.boundary[a][b][0].y+(a==0?-2:a==1?2:2)-this.position.y,
                    this.position.x+this.boundary[a][b][1].x+(a==2?-2:a==3?2:-2)-this.position.x,
                    this.position.y+this.boundary[a][b][1].y+(a==0?-2:a==1?2:-2)-this.position.y
                )
            }
        }*/
    }
    update(){
        this.time++
        switch(this.type){
            case 4:
                if(this.reload>0){
                    this.reload--
                }
            break
            case 6:
                this.position.x+=2
                this.bounder.position.x+=2
                this.velocity.x=2
                for(let a=0,la=this.boundary.length;a<la;a++){
                    for(let b=0,lb=this.boundary[a].length;b<lb;b++){
                        for(let c=0,lc=this.boundary[a][b].length;c<lc;c++){
                            this.boundary[a][b][c].x+=2
                        }
                    }
                }
                if(this.time>layer.width*0.1){
                    this.position.y+=2
                    this.velocity.y=2
                    for(let a=0,la=this.boundary.length;a<la;a++){
                        for(let b=0,lb=this.boundary[a].length;b<lb;b++){
                            for(let c=0,lc=this.boundary[a][b].length;c<lc;c++){
                                this.boundary[a][b][c].y+=2
                            }
                        }
                    }
                    if(!this.disable){
                        this.bounder.position.y+=600
                        for(let a=0,la=this.carry.length;a<la;a++){
                            this.carry[a].disable=false
                        }
                        this.disable=true
                    }
                }else{
                    for(let a=0,la=this.carry.length;a<la;a++){
                        this.carry[a].position.x+=2
                    }
                }
                if(this.position.x>layer.height+50){
                    this.remove=true
                }
            break
            case 8: case 9: case 12: case 16: case 19:
                if(this.recharge>0){
                    if(game.level==11){
                        this.remove=true
                    }else{
                        this.recharge--
                    }
                }
            break
            case 13:
                if(this.reload>0){
                    this.reload--
                    if(this.reload==599||this.reload==579||this.reload==559){
                        entities.projectiles.push(new projectile(graphics.main[0],this.position.x-this.width/2-10,this.position.y,65,random(-92,-88),-1,150,180,false,-1))
                    }
                }
            break
            case 15:
                if(this.reload>0){
                    this.reload--
                    if(this.reload==599||this.reload==559){
                        entities.projectiles.push(new projectile(graphics.main[0],this.position.x-this.width/2-4,this.position.y-this.height/2-4,4,-27,-1,150,180,false,-1))
                        entities.projectiles.push(new projectile(graphics.main[0],this.position.x-this.width/2-4,this.position.y-this.height/2-4,4,-33,-1,150,180,false,-1))
                        entities.projectiles.push(new projectile(graphics.main[0],this.position.x-this.width/2-4,this.position.y-this.height/2-4,4,-39,-1,150,180,false,-1))
                        entities.projectiles.push(new projectile(graphics.main[0],this.position.x-this.width/2-4,this.position.y-this.height/2-4,4,-45,-1,150,180,false,-1))
                        entities.projectiles.push(new projectile(graphics.main[0],this.position.x-this.width/2-4,this.position.y-this.height/2-4,4,-51,-1,150,180,false,-1))
                        entities.projectiles.push(new projectile(graphics.main[0],this.position.x-this.width/2-4,this.position.y-this.height/2-4,4,-57,-1,150,180,false,-1))
                        entities.projectiles.push(new projectile(graphics.main[0],this.position.x-this.width/2-4,this.position.y-this.height/2-4,4,-63,-1,150,180,false,-1))
                    }else if(this.reload==579){
                        entities.projectiles.push(new projectile(graphics.main[0],this.position.x-this.width/2-4,this.position.y-this.height/2-4,4,-30,-1,150,180,false,-1))
                        entities.projectiles.push(new projectile(graphics.main[0],this.position.x-this.width/2-4,this.position.y-this.height/2-4,4,-36,-1,150,180,false,-1))
                        entities.projectiles.push(new projectile(graphics.main[0],this.position.x-this.width/2-4,this.position.y-this.height/2-4,4,-42,-1,150,180,false,-1))
                        entities.projectiles.push(new projectile(graphics.main[0],this.position.x-this.width/2-4,this.position.y-this.height/2-4,4,-48,-1,150,180,false,-1))
                        entities.projectiles.push(new projectile(graphics.main[0],this.position.x-this.width/2-4,this.position.y-this.height/2-4,4,-54,-1,150,180,false,-1))
                        entities.projectiles.push(new projectile(graphics.main[0],this.position.x-this.width/2-4,this.position.y-this.height/2-4,4,-60,-1,150,180,false,-1))
                    }
                }
            break
        }
        if(this.type!=7){
            for(let a=0,la=this.collide.length;a<la;a++){
                for(let b=0,lb=this.collide[a].length;b<lb;b++){
                    let c=this.collide[a][b]
                    if(a==0&&inBoxBox(this.bounder,c)&&this.type!=3&&this.type!=5&&this.type!=8&&this.type!=9&&this.type!=10&&this.type!=11&&this.type!=12&&this.type!=14&&this.type!=16&&this.type!=19&&this.type!=22&&(
                        c.type==5||c.type==8||c.type==17||c.type==28||c.type==29||
                        c.type==30||c.type==34||c.type==35||c.type==42||c.type==51||
                        c.type==52||c.type==60||c.type==61||c.type==62||c.type==65||
                        c.type==68||c.type==69||c.type==70
                    )){
                        let d=-1
                        if(d==-1){
                            d=collideBoxBox(this,c)
                        }
                        if(d==-1){
                            d=collideBoxBoxIndex2(this,c)
                        }
                        if(d==-1){
                            d=collideBoxBoxIndex1(this,c)
                        }
                        if(d>=0&&!this.redundant[d]){
                            let incident
                            let vecBall
                            switch(d){
                                case 0:
                                    if(c.velocity.y<0){
                                        c.position.y=this.position.y+this.height/2+c.height/2
                                        c.velocity.y*=-1
                                    }
                                break
                                case 1:
                                    if(c.velocity.y>0){
                                        c.position.y=this.position.y-this.height/2-c.height/2
                                        c.velocity.y*=-1
                                    }
                                break
                                case 2:
                                    if(c.velocity.x<0){
                                        c.position.x=this.position.x+this.width/2+c.width/2
                                        c.velocity.x*=-1
                                    }
                                break
                                case 3:
                                    if(c.velocity.x>0){
                                        c.position.x=this.position.x-this.width/2-c.width/2
                                        c.velocity.x*=-1
                                    }
                                break
                                case 4:
                                    c.position.y=this.position.y-this.height/2-c.height/2+this.height*max((c.position.x-c.width/2-this.position.x+this.width/2)/this.width,0)
                                    incident=atan2(game.tileset[0],-game.tileset[1])
                                    vecBall=[atan2(-c.velocity.x,-c.velocity.y),sqrt(c.velocity.x**2+c.velocity.y**2)]
                                    if(abs(incident-vecBall[0])<180||abs(incident-vecBall[0]-360)<180||abs(incident-vecBall[0]+360)<180){
                                        c.velocity.x=sin(incident*2-vecBall[0])*vecBall[1]
                                        c.velocity.y=cos(incident*2-vecBall[0])*vecBall[1]
                                        c.position.x+=c.velocity.x*0.1
                                        c.position.y+=c.velocity.y*0.1
                                    }
                                break
                                case 5:
                                    c.position.y=this.position.y-this.height/2-c.height/2+this.height*max((this.position.x+this.width/2-c.position.x-c.width/2)/this.width,0)
                                    incident=atan2(-game.tileset[0],-game.tileset[1])
                                    vecBall=[atan2(-c.velocity.x,-c.velocity.y),sqrt(c.velocity.x**2+c.velocity.y**2)]
                                    if(abs(incident-vecBall[0])<180||abs(incident-vecBall[0]-360)<180||abs(incident-vecBall[0]+360)<180){
                                        c.velocity.x=sin(incident*2-vecBall[0])*vecBall[1]
                                        c.velocity.y=cos(incident*2-vecBall[0])*vecBall[1]
                                        c.position.x+=c.velocity.x*0.1
                                        c.position.y+=c.velocity.y*0.1
                                    }
                                break
                                case 6:
                                    c.position.y=this.position.y+this.height/2+c.height/2+0.1-this.height*min((c.position.x-c.width/2-this.position.x+this.width/2)/this.width,0)
                                    c.velocity.y=0
                                    incident=atan2(-game.tileset[0],game.tileset[1])
                                    vecBall=[atan2(-c.velocity.x,-c.velocity.y),sqrt(c.velocity.x**2+c.velocity.y**2)]
                                    if(abs(incident-vecBall[0])<180||abs(incident-vecBall[0]-360)<180||abs(incident-vecBall[0]+360)<180){
                                        c.velocity.x=sin(incident*2-vecBall[0])*vecBall[1]
                                        c.velocity.y=cos(incident*2-vecBall[0])*vecBall[1]
                                        c.position.x+=c.velocity.x*0.1
                                        c.position.y+=c.velocity.y*0.1
                                    }
                                break
                                case 7:
                                    c.position.y=this.position.y+this.height/2+c.height/2+0.1-this.height*min((this.position.x+this.width/2-c.position.x-c.width/2)/this.width,0)
                                    c.velocity.y=0
                                    incident=atan2(game.tileset[0],game.tileset[1])
                                    vecBall=[atan2(-c.velocity.x,-c.velocity.y),sqrt(c.velocity.x**2+c.velocity.y**2)]
                                    if(abs(incident-vecBall[0])<180||abs(incident-vecBall[0]-360)<180||abs(incident-vecBall[0]+360)<180){
                                        c.velocity.x=sin(incident*2-vecBall[0])*vecBall[1]
                                        c.velocity.y=cos(incident*2-vecBall[0])*vecBall[1]
                                        c.position.x+=c.velocity.x*0.1
                                        c.position.y+=c.velocity.y*0.1
                                    }
                                break
                                case 8:
                                    c.position.x=this.internalBounder.position.x+this.internalBounder.width/2+c.width/2+0.1
                                    c.velocity.x*=-1
                                break
                                case 9:
                                    c.position.x=this.internalBounder.position.x-this.internalBounder.width/2-c.width/2+0.1
                                    c.velocity.x*=-1
                                break
                            }
                            if(c.type==30||c.type==60||c.type==65){
                                c.bounces++
                                if(c.bounces>=3){
                                    c.explode()
                                    c.active=false
                                }
                            }
                        }
                    }else if(a==0&&inBoxBox(this.bounder,c)&&c.active&&
                        this.type!=3&&this.type!=5&&this.type!=8&&this.type!=9&&this.type!=10&&this.type!=11&&this.type!=12&&this.type!=14&&this.type!=16&&this.type!=19&&this.type!=22
                    ){
                        let d=collideBoxBox(this,c)
                        if(d>=0&&!this.redundant[d]||c.timer==0&&inBoxBox(this,c)
                            &&!(this.type==17&&inPointTriangle(c.position,[
                                {x:this.position.x+this.width/2,y:this.position.y+this.height/2},
                                {x:this.position.x+this.width/2,y:this.position.y-this.height/2},
                                {x:this.position.x-this.width/2,y:this.position.y-this.height/2}
                            ]))&&!(this.type==18&&inPointTriangle(c.position,[
                                {x:this.position.x-this.width/2,y:this.position.y+this.height/2},
                                {x:this.position.x-this.width/2,y:this.position.y-this.height/2},
                                {x:this.position.x+this.width/2,y:this.position.y-this.height/2}
                            ]))&&!(this.type==20&&inPointTriangle(c.position,[
                                {x:this.position.x+this.width/2,y:this.position.y+this.height/2},
                                {x:this.position.x+this.width/2,y:this.position.y-this.height/2},
                                {x:this.position.x-this.width/2,y:this.position.y+this.height/2}
                            ]))&&!(this.type==21&&inPointTriangle(c.position,[
                                {x:this.position.x+this.width/2,y:this.position.y+this.height/2},
                                {x:this.position.x-this.width/2,y:this.position.y+this.height/2},
                                {x:this.position.x-this.width/2,y:this.position.y-this.height/2}
                            ]))
                        ){
                            if(
                                c.type!=7&&c.type!=23&&c.type!=25&&c.type!=32&&c.type!=37&&
                                c.type!=40&&c.type!=46
                            ){
                                c.active=false
                                c.speed=0
                                if(
                                    c.type==2||c.type==3||c.type==16||c.type==21||c.type==22||
                                    c.type==26||c.type==27||c.type==41||c.type==45||c.type==47||
                                    c.type==48||c.type==53||c.type==54||c.type==55||c.type==56||
                                    c.type==58||c.type==64||c.type==66
                                ){
                                    c.explode()
                                }
                            }
                        }
                    }else if(inBoxBox(this.internalBounder,c)&&!c.inactive&&this.type==3&&a==1){
                        c.velocity.x*=0.9
                        c.velocity.y*=0.6
                        c.jump.time=1
                        c.jump.active=1
                    }else if(a==1&&!c.inactive&&inBoxBox(this.bounder,c)
                        &&!(this.type==5&&(this.exploded))
                        &&!(this.type==8&&(this.recharge>0||c.weapon.uses>=(c.weaponData.uses==1?c.weaponData.uses:c.weaponData.uses*game.ammoMult)||c.weapon.uses<=0))
                        &&!(this.type==9&&(this.recharge>0||c.life>=c.base.life))
                        &&!((this.type==10||this.type==14)&&(c.id>0&&c.id<=game.gaming))
                        &&!(this.type==11)
                        &&!(this.type==12&&(this.recharge>0))
                        &&!(this.type==16&&(this.recharge>0||(c.id==0&&game.level==11)))
                        &&!(this.type==19&&(this.recharge>0||c.id==0||c.carryMoney>=2&&game.hunt!=-1||c.id!=game.hunt&&game.hunt>0||c.life<=0))
                    ){
                        this.collideSingle(c,false)
                    }
                }
            }
        }
    }
    collideSingle(c,repeat){
        let d=collideBoxBox(this,c)
        if(d>=0){
            switch(this.type){
                case 5:
                    this.exploded=true
                    entities.projectiles.push(new projectile(graphics.main[0],this.position.x,this.position.y+this.height/2,16,0,-1,100,2,false,-1))
                break
                case 8:
                    this.recharge=1800
                    c.weapon.uses=min(c.weaponData.uses==1?c.weaponData.uses:c.weaponData.uses*game.ammoMult,c.weapon.uses+ceil(c.weaponData.uses*game.ammoMult/2))
                break
                case 9:
                    this.recharge=1800
                    c.life=min(c.base.life,c.life+c.base.life/(c.weaponType==11||c.weaponType==13||c.weaponType==14||c.weaponType==62||c.weaponType==66?1:2))
                break
                case 10:
                    c.manage[2]=true
                    c.target.position.x=this.position.x+game.tileset[0]
                break
                case 11:
                    c.defendBuff=5
                break
                case 12:
                    this.recharge=1800
                    c.critBuff=600
                break
                case 14:
                    c.manage[2]=true
                    c.target.position.x=this.position.x-game.tileset[0]
                break
                case 16:
                    this.recharge=1800
                    c.newWeaponSet(this.weapon)
                    this.weapon=floor(random(0,20))==0?floor(random(36,40)):floor(random(0,9))+floor(random(0,1.5))*floor(random(1,4))*9
                break
                case 19:
                    this.recharge=1800
                    c.carryMoney++
                break
                default:
                    if(!this.redundant[d]){
                        switch(d){
                            case 0:
                                c.position.y=this.position.y+this.height/2+c.height/2+0.1
                                c.velocity.y=0
                            break
                            case 1:
                                c.position.y=this.position.y-this.height/2-c.height/2-0.1
                                c.velocity.y=0
                                c.jump.time=5
                                if((c.playerData.name=='PlayerPistol'||c.playerData.name=='PlayerPushPistol'||c.playerData.name=='PlayerPistolVulnerable'||c.playerData.name=='PlayerPistolConfuse'||c.playerData.name=='PlayerMedicDoubleJump')&&c.weapon.uses>0){
                                    c.jump.double=1
                                }
                                switch(this.type){
                                    case 2:
                                        c.bounceTime=15
                                    break
                                    case 4:
                                        if(this.reload==0&&c.id>0&&c.life>0&&c.attacking){
                                            this.reload=600
                                            for(let e=0,le=12;e<le;e++){
                                                entities.projectiles.push(new projectile(graphics.main[0],this.position.x,this.position.y-this.height/2,60,random(-157.5,-112.5),-1,100,180,false,-1))
                                                let mult=random(1.25,2.5)
                                                entities.projectiles[entities.projectiles.length-1].velocity.x*=mult
                                                entities.projectiles[entities.projectiles.length-1].velocity.y*=mult
                                            }
                                        }
                                    break
                                    case 15:
                                        if(this.reload==0&&c.id>0&&c.life>0&&c.attacking){
                                            this.reload=600
                                        }
                                    break
                                }
                                if(c.parachute){
                                    c.parachute=false
                                    if(!game.pvp){
                                        c.stuckTime=60
                                    }
                                }
                            break
                            case 2:
                                c.position.x=this.position.x+this.width/2+c.width/2+0.1
                                c.velocity.x=0
                            break
                            case 3:
                                c.position.x=this.position.x-this.width/2-c.width/2-0.1
                                c.velocity.x=0
                                switch(this.type){
                                    case 13: case 15:
                                        if(this.reload==0&&c.id>0&&c.life>0&&c.attacking){
                                            this.reload=600
                                        }
                                    break
                                }
                            break
                            case 4:
                                c.position.y=this.position.y-this.height/2-c.height/2-0.1+this.height*max((c.position.x-c.width/2-this.position.x+this.width/2)/this.width,0)
                                c.velocity.y=c.velocity.x*this.height/this.width
                                c.jump.time+=5
                                if(c.parachute){
                                    c.parachute=false
                                    if(!game.pvp){
                                        c.stuckTime=60
                                    }
                                }
                                c.velocity.x*=1-this.height/this.width*(game.level==11?0.1:0.2)
                            break
                            case 5:
                                c.position.y=this.position.y-this.height/2-c.height/2-0.1+this.height*max((this.position.x+this.width/2-c.position.x-c.width/2)/this.width,0)
                                c.velocity.y=-c.velocity.x*this.height/this.width
                                c.jump.time+=5
                                if(c.parachute){
                                    c.parachute=false
                                    if(!game.pvp){
                                        c.stuckTime=60
                                    }
                                }
                                c.velocity.x*=1-this.height/this.width*(game.level==11?0.1:0.2)
                            break
                            case 6:
                                c.position.y=this.position.y+this.height/2+c.height/2+0.1-this.height*max((c.position.x-c.width/2-this.position.x+this.width/2)/this.width,0)
                                c.velocity.y=-c.velocity.x*this.height/this.width
                                c.velocity.x*=1-this.height/this.width*(game.level==11?0.1:0.2)
                            break
                            case 7:
                                c.position.y=this.position.y+this.height/2+c.height/2+0.1-this.height*max((this.position.x+this.width/2-c.position.x-c.width/2)/this.width,0)
                                c.velocity.y=c.velocity.x*this.height/this.width
                                c.velocity.x*=1-this.height/this.width*(game.level==11?0.1:0.2)
                            break
                            case 8:
                                c.position.x=this.internalBounder.position.x+this.internalBounder.width/2+c.width/2+0.1
                                c.velocity.x=0
                            break
                            case 9:
                                c.position.x=this.internalBounder.position.x-this.internalBounder.width/2-c.width/2+0.1
                                c.velocity.x=0
                            break
                        }
                        /*if(d>=0&&d<=3&&!repeat){
                            for(let e=0,le=this.neighbors.length;e<le;e++){
                                this.neighbors[e].collideSingle(c,true)
                            }
                        }*/
                    }
                break
            }
        }
    }
}