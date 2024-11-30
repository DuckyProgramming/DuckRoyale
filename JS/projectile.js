class projectile{
    constructor(layer,x,y,type,direction,id,damage,time,crit,index){
        this.layer=layer
        this.position={x:x,y:y}
        this.type=type
        this.direction=direction
        this.id=id
        this.damage=damage
		this.crit=crit
		this.index=index
        this.width=2
        this.height=2
		this.exploded=false
		this.previous={position:{x:this.position.x,y:this.position.y}}
		switch(this.type){
			case 1: case 4: case 9: case 10: case 11: case 12: case 13: case 14: case 18: case 19:
			case 20: case 24: case 36: case 37: case 38: case 39: case 43: case 44: case 49: case 50:
			case 57: case 59: case 63: case 67: case 72:
				this.speed=random(6,8)
				this.time=random(time,time*2)
			break
			case 2: case 16: case 21: case 22: case 27: case 32: case 45: case 48: case 55: case 66:
				this.speed=5
				this.time=time
			break
			case 3:
				this.speed=0
				this.time=time
			break
			case 5: case 8: case 29: case 30: case 35: case 51: case 60: case 61: case 65: case 68:
			case 69: case 70:
				this.width=4
				this.height=4
				this.speed=6
				this.bounces=0
				this.time=time*(this.id==0?0.6:1)
				this.midpoint={position:{x:this.position.x,y:this.position.y}}
				this.past=[
					[this.position.x,this.position.y],
					[this.position.x,this.position.y],
					[this.position.x,this.position.y],
					[this.position.x,this.position.y],
					[this.position.x,this.position.y],
					[this.position.x,this.position.y],
					[this.position.x,this.position.y],
					[this.position.x,this.position.y],
					[this.position.x,this.position.y],
					[this.position.x,this.position.y],
					[this.position.x,this.position.y],
					[this.position.x,this.position.y]
				]
				this.velocity={x:this.speed*sin(this.direction),y:this.speed*cos(this.direction)-(this.type==68?0:4)}
			break
			case 6: case 33:
				this.speed=random(3,5)
				this.time=random(time,time*2)
			break
			case 7: case 23: case 40: case 46:
				this.width*=15
				this.height*=15
				this.speed=time/4
				this.time=5
			break
			case 15:
				this.speed=random(4,6.5)
				this.time=random(time,time*2)
			break
			case 17:
				this.width=6
				this.height=6
				this.speed=9
				this.time=time*(this.id==0?0.6:1)
				this.previous={position:{x:this.position.x,y:this.position.y}}
				this.midpoint={position:{x:this.position.x,y:this.position.y}}
				this.past=[
					[this.position.x,this.position.y],
					[this.position.x,this.position.y],
					[this.position.x,this.position.y],
					[this.position.x,this.position.y],
					[this.position.x,this.position.y],
					[this.position.x,this.position.y],
					[this.position.x,this.position.y],
					[this.position.x,this.position.y],
					[this.position.x,this.position.y],
					[this.position.x,this.position.y],
					[this.position.x,this.position.y],
					[this.position.x,this.position.y],
					[this.position.x,this.position.y],
					[this.position.x,this.position.y],
					[this.position.x,this.position.y],
					[this.position.x,this.position.y]
				]
				this.velocity={x:this.speed*sin(this.direction),y:this.speed*cos(this.direction)-4}
			break
			case 25:
				this.width*=15
				this.height*=15
				this.speed=time/4
				this.time=15
			break
			case 26: case 53: case 54: case 58:
				this.speed=3
				this.time=time
			break
			case 28:
				this.width=4
				this.height=4
				this.speed=10
				this.time=time*(this.id==0?0.6:1)
				this.previous={position:{x:this.position.x,y:this.position.y}}
				this.midpoint={position:{x:this.position.x,y:this.position.y}}
				this.past=[
					[this.position.x,this.position.y],
					[this.position.x,this.position.y],
					[this.position.x,this.position.y],
					[this.position.x,this.position.y],
					[this.position.x,this.position.y],
					[this.position.x,this.position.y],
					[this.position.x,this.position.y],
					[this.position.x,this.position.y],
					[this.position.x,this.position.y],
					[this.position.x,this.position.y],
					[this.position.x,this.position.y],
					[this.position.x,this.position.y]
				]
				this.velocity={x:this.speed*sin(this.direction),y:this.speed*cos(this.direction)-4}
			break
			case 31: case 47: case 56: case 64:
				this.speed=2
				this.time=time*2
			break
			case 34: case 42:
				this.width=3
				this.height=3
				this.speed=7
				this.bounces=0
				this.time=time*(this.id==0?0.6:1)
				this.previous={position:{x:this.position.x,y:this.position.y}}
				this.midpoint={position:{x:this.position.x,y:this.position.y}}
				this.past=[
					[this.position.x,this.position.y],
					[this.position.x,this.position.y],
					[this.position.x,this.position.y],
					[this.position.x,this.position.y],
					[this.position.x,this.position.y],
					[this.position.x,this.position.y],
					[this.position.x,this.position.y],
					[this.position.x,this.position.y],
					[this.position.x,this.position.y],
					[this.position.x,this.position.y],
					[this.position.x,this.position.y],
					[this.position.x,this.position.y]
				]
				this.velocity={x:this.speed*sin(this.direction),y:this.speed*cos(this.direction)-4}
			break
			case 41:
				this.speed=7
				this.time=time
			break
			case 52:
				this.width=4
				this.height=4
				this.speed=3.6
				this.bounces=0
				this.time=time*(this.id==0?0.6:1)
				this.previous={position:{x:this.position.x,y:this.position.y}}
				this.midpoint={position:{x:this.position.x,y:this.position.y}}
				this.past=[
					[this.position.x,this.position.y],
					[this.position.x,this.position.y],
					[this.position.x,this.position.y],
					[this.position.x,this.position.y],
					[this.position.x,this.position.y],
					[this.position.x,this.position.y],
					[this.position.x,this.position.y],
					[this.position.x,this.position.y],
					[this.position.x,this.position.y],
					[this.position.x,this.position.y],
					[this.position.x,this.position.y],
					[this.position.x,this.position.y]
				]
				this.velocity={x:this.speed*sin(this.direction),y:this.speed*cos(this.direction)-4}
			break
			case 62:
				this.width=3
				this.height=3
				this.speed=4.2
				this.bounces=0
				this.time=time*(this.id==0?0.6:1)
				this.previous={position:{x:this.position.x,y:this.position.y}}
				this.midpoint={position:{x:this.position.x,y:this.position.y}}
				this.past=[
					[this.position.x,this.position.y],
					[this.position.x,this.position.y],
					[this.position.x,this.position.y],
					[this.position.x,this.position.y],
					[this.position.x,this.position.y],
					[this.position.x,this.position.y],
					[this.position.x,this.position.y],
					[this.position.x,this.position.y],
					[this.position.x,this.position.y],
					[this.position.x,this.position.y],
					[this.position.x,this.position.y],
					[this.position.x,this.position.y]
				]
				this.velocity={x:this.speed*sin(this.direction),y:this.speed*cos(this.direction)-4}
			break
			case 71:
				this.speed=random(6,8.75)
				this.time=random(time,time*2)
			break
		}
		this.timer=0
        this.fade=1
        this.active=true
        this.remove=false
		this.base={time:this.time}
		if(this.crit==1){
			this.damage*=3
		}
    }
    display(layer){
        layer.push()
        layer.translate(this.position.x,this.position.y)
        layer.rotate(this.direction)
		layer.noStroke()
        switch(this.type){
			case 1:
				layer.fill(240-this.crit*200,240,40+this.crit*200,this.fade)
				layer.rect(0,4,1,8)
				layer.fill(240-this.crit*200,160,40+this.crit*200,this.fade)
				layer.rect(0,3,1,6)
				layer.fill(240-this.crit*200,80,40+this.crit*200,this.fade)
				layer.rect(0,2,1,4)
				layer.fill(250,this.fade)
				layer.ellipse(0,0,3)
			break
			case 2:
				layer.fill(240-this.crit*200,240,40+this.crit*200,this.fade)
				layer.rect(0,4,1,8)
				layer.fill(240-this.crit*200,160,40+this.crit*200,this.fade)
				layer.rect(0,3,1,6)
				layer.fill(240-this.crit*200,80,40+this.crit*200,this.fade)
				layer.rect(0,2,1,4)
				layer.fill(120,120+this.crit*200,120+this.crit*200,this.fade)
				layer.ellipse(0,0,6,20)
				if(!this.active&&this.fade<1){
					layer.fill(240-this.crit*200,240,40+this.crit*200,this.fade)
					layer.ellipse(0,0,240-this.fade*240)
					layer.fill(240-this.crit*200,160,40+this.crit*200,this.fade)
					layer.ellipse(0,0,160-this.fade*160)
					layer.fill(240-this.crit*200,80,40+this.crit*200,this.fade)
					layer.ellipse(0,0,80-this.fade*80)
				}
			break
			case 3:
				if(!this.active&&this.fade<1){
					layer.fill(240-this.crit*200,40,120+this.crit*200,this.fade)
					layer.ellipse(0,0,480-this.fade*480)
					layer.fill(240-this.crit*200,80,160+this.crit*200,this.fade)
					layer.ellipse(0,0,360-this.fade*360)
					layer.fill(240-this.crit*200,120,200+this.crit*200,this.fade)
					layer.ellipse(0,0,240-this.fade*240)
					layer.fill(240-this.crit*200,160,240+this.crit*200,this.fade)
					layer.ellipse(0,0,120-this.fade*120)
				}
			break
			case 4:
				layer.fill(240-this.crit*200,240,40+this.crit*200,this.fade)
				layer.rect(0,12,1,24)
				layer.fill(240-this.crit*200,160,40+this.crit*200,this.fade)
				layer.rect(0,9,1,18)
				layer.fill(240-this.crit*200,80,40+this.crit*200,this.fade)
				layer.rect(0,6,1,12)
				layer.fill(250,this.fade)
				layer.ellipse(0,0,3,4)
			break
			case 5: case 68:
				layer.rotate(-this.direction)
				layer.fill(240-this.crit*200,240,40+this.crit*200,this.fade)
				layer.ellipse(this.past[0][0]-this.position.x,this.past[0][1]-this.position.y,2)
				layer.fill(240-this.crit*200,160,40+this.crit*200,this.fade)
				layer.ellipse(this.past[4][0]-this.position.x,this.past[4][1]-this.position.y,4)
				layer.fill(240-this.crit*200,80,40+this.crit*200,this.fade)
				layer.ellipse(this.past[8][0]-this.position.x,this.past[8][1]-this.position.y,6)
				layer.fill(250,this.fade)
				layer.ellipse(0,0,8)
			break
			case 6:
				layer.fill(240-this.crit*200,120,this.crit*200,this.fade*this.time/this.base.time)
				layer.ellipse(0,0,60*(1-this.time/this.base.time))
				layer.fill(240-this.crit*200,180,this.crit*200,this.fade*this.time/this.base.time)
				layer.ellipse(0,0,30*(1-this.time/this.base.time))
			break
			case 7:
				if(!this.active&&this.fade<1){
					layer.fill(200-this.crit*200,200,200+this.crit*200,this.fade)
					layer.ellipse(0,0,30-this.fade*30)
				}
			break
			case 8:
				layer.rotate(-this.direction)
				layer.fill(240-this.crit*200,240,40+this.crit*200,this.fade)
				layer.ellipse(this.past[0][0]-this.position.x,this.past[0][1]-this.position.y,2)
				layer.fill(240-this.crit*200,160,40+this.crit*200,this.fade)
				layer.ellipse(this.past[4][0]-this.position.x,this.past[4][1]-this.position.y,4)
				layer.fill(240-this.crit*200,80,40+this.crit*200,this.fade)
				layer.ellipse(this.past[8][0]-this.position.x,this.past[8][1]-this.position.y,6)
				layer.fill(250,this.fade)
				layer.ellipse(0,0,12)
				layer.fill(250-this.crit*200,this.crit*200,this.crit*200,this.fade)
				layer.ellipse(0,0,4)
			break
			case 9:
				layer.fill(40,240,40+this.crit*200,this.fade)
				layer.rect(0,4,1,8)
				layer.fill(40,160,40+this.crit*200,this.fade)
				layer.rect(0,3,1,6)
				layer.fill(40,80,40+this.crit*200,this.fade)
				layer.rect(0,2,1,4)
				layer.fill(150,250,150,this.fade)
				layer.ellipse(0,0,3)
			break
			case 10:
				layer.fill(120,240,120+this.crit*200,this.fade)
				layer.rect(0,4,1,8)
				layer.fill(120,200,120+this.crit*200,this.fade)
				layer.rect(0,3,1,6)
				layer.fill(120,160,120+this.crit*200,this.fade)
				layer.rect(0,2,1,4)
				layer.fill(200,250,200,this.fade)
				layer.ellipse(0,0,3)
			break
			case 11:
				layer.fill(240-this.crit*200,240,120+this.crit*200,this.fade)
				layer.rect(0,4,1,8)
				layer.fill(240-this.crit*200,200,120+this.crit*200,this.fade)
				layer.rect(0,3,1,6)
				layer.fill(240-this.crit*200,160,120+this.crit*200,this.fade)
				layer.rect(0,2,1,4)
				layer.fill(200,250,200,this.fade)
				layer.ellipse(0,0,3)
			break
			case 12:
				layer.fill(240-this.crit*200,240,40+this.crit*200,this.fade)
				layer.rect(0,4,1,8)
				layer.fill(240-this.crit*200,160,40+this.crit*200,this.fade)
				layer.rect(0,3,1,6)
				layer.fill(240-this.crit*200,80,40+this.crit*200,this.fade)
				layer.rect(0,2,1,4)
				layer.fill(250-this.crit*200,250,100+this.crit*200,this.fade)
				layer.ellipse(0,0,6,3)
				layer.fill(250,this.fade)
				layer.ellipse(0,0,3)
			break
			case 13:
				layer.fill(240-this.crit*200,240,40+this.crit*200,this.fade)
				layer.rect(0,4,1,8)
				layer.fill(240-this.crit*200,160,40+this.crit*200,this.fade)
				layer.rect(0,3,1,6)
				layer.fill(240-this.crit*200,80,40+this.crit*200,this.fade)
				layer.rect(0,2,1,4)
				layer.fill(100-this.crit*200,250,100+this.crit*200,this.fade)
				layer.ellipse(0,0,6,3)
				layer.fill(250,this.fade)
				layer.ellipse(0,0,3)
			break
			case 14:
				layer.fill(240-this.crit*200,240,40+this.crit*200,this.fade)
				layer.rect(0,12,1,24)
				layer.rect(0,12,24,1)
				layer.fill(240-this.crit*200,160,40+this.crit*200,this.fade)
				layer.rect(0,9,1,18)
				layer.rect(0,12,18,1)
				layer.fill(240-this.crit*200,80,40+this.crit*200,this.fade)
				layer.rect(0,6,1,12)
				layer.rect(0,12,12,1)
				layer.fill(250,this.fade)
				layer.ellipse(0,0,3,4)
			break
			case 15:
				layer.fill(240-this.crit*200,120,this.crit*200,this.fade*this.time/this.base.time)
				layer.ellipse(0,0,60*(1-this.time/this.base.time))
				layer.fill(240-this.crit*200,180,this.crit*200,this.fade*this.time/this.base.time)
				layer.ellipse(0,0,30*(1-this.time/this.base.time))
			break
			case 16:
				layer.fill(240-this.crit*200,240,40+this.crit*200,this.fade)
				layer.rect(0,4,1,8)
				layer.fill(240-this.crit*200,160,40+this.crit*200,this.fade)
				layer.rect(0,3,1,6)
				layer.fill(240-this.crit*200,80,40+this.crit*200,this.fade)
				layer.rect(0,2,1,4)
				layer.fill(240-this.crit*200,240+this.crit*200,40+this.crit*200,this.fade)
				layer.ellipse(0,0,6,20)
				if(!this.active&&this.fade<1){
					layer.fill(240-this.crit*200,240,40+this.crit*200,this.fade)
					layer.ellipse(0,0,240-this.fade*240)
					layer.fill(240-this.crit*200,160,40+this.crit*200,this.fade)
					layer.ellipse(0,0,160-this.fade*160)
					layer.fill(240-this.crit*200,80,40+this.crit*200,this.fade)
					layer.ellipse(0,0,80-this.fade*80)
				}
			break
			case 17:
				layer.rotate(-this.direction)
				layer.fill(240-this.crit*200,240,40+this.crit*200,this.fade)
				layer.ellipse(this.past[0][0]-this.position.x,this.past[0][1]-this.position.y,2)
				layer.fill(240-this.crit*200,160,40+this.crit*200,this.fade)
				layer.ellipse(this.past[4][0]-this.position.x,this.past[4][1]-this.position.y,4)
				layer.fill(240-this.crit*200,80,40+this.crit*200,this.fade)
				layer.ellipse(this.past[8][0]-this.position.x,this.past[8][1]-this.position.y,6)
				layer.fill(240-this.crit*200,80,40+this.crit*200,this.fade)
				layer.ellipse(this.past[12][0]-this.position.x,this.past[12][1]-this.position.y,8)
				layer.fill(250,this.fade)
				layer.ellipse(0,0,10)
			break
			case 18:
				layer.fill(240-this.crit*200,240,40+this.crit*200,this.fade)
				layer.rect(0,4,1,8)
				layer.fill(240-this.crit*200,160,40+this.crit*200,this.fade)
				layer.rect(0,3,1,6)
				layer.fill(240-this.crit*200,80,40+this.crit*200,this.fade)
				layer.rect(0,2,1,4)
				layer.fill(250-this.crit*200,250,100+this.crit*200,this.fade)
				layer.rect(0,0,6,2)
				layer.fill(250,this.fade)
				layer.ellipse(0,0,3)
			break
			case 19:
				layer.fill(240-this.crit*200,240,40+this.crit*200,this.fade)
				layer.rect(0,4,1,8)
				layer.fill(240-this.crit*200,160,40+this.crit*200,this.fade)
				layer.rect(0,3,1,6)
				layer.fill(240-this.crit*200,80,40+this.crit*200,this.fade)
				layer.rect(0,2,1,4)
				layer.fill(250-this.crit*200,250,100+this.crit*200,this.fade)
				layer.ellipse(0,0,3,6)
				layer.fill(250,this.fade)
				layer.ellipse(0,0,3)
			break
			case 20:
				layer.fill(240-this.crit*200,240,40+this.crit*200,this.fade)
				layer.rect(0,4,1,8)
				layer.fill(240-this.crit*200,160,40+this.crit*200,this.fade)
				layer.rect(0,3,1,6)
				layer.fill(240-this.crit*200,80,40+this.crit*200,this.fade)
				layer.rect(0,2,1,4)
				layer.fill(250,this.fade)
				layer.ellipse(0,0,4)
				layer.fill(100,250,100,this.fade)
				layer.ellipse(0,0,2)
			break
			case 21:
				layer.fill(240-this.crit*200,240,40+this.crit*200,this.fade)
				layer.rect(0,4,1,8)
				layer.fill(240-this.crit*200,160,40+this.crit*200,this.fade)
				layer.rect(0,3,1,6)
				layer.fill(240-this.crit*200,80,40+this.crit*200,this.fade)
				layer.rect(0,2,1,4)
				layer.fill(120,120+this.crit*200,120+this.crit*200,this.fade)
				layer.ellipse(0,0,6,20)
				layer.fill(240,40,40,this.fade)
				layer.ellipse(0,0,4,12)
				if(!this.active&&this.fade<1){
					layer.fill(240-this.crit*200,120,this.crit*200,this.fade)
					layer.ellipse(0,0,240-this.fade*240)
					layer.fill(240-this.crit*200,80,this.crit*200,this.fade)
					layer.ellipse(0,0,160-this.fade*160)
					layer.fill(240-this.crit*200,40,this.crit*200,this.fade)
					layer.ellipse(0,0,80-this.fade*80)
				}
			break
			case 22:
				layer.fill(240-this.crit*200,240,40+this.crit*200,this.fade)
				layer.rect(0,4,1,8)
				layer.fill(240-this.crit*200,160,40+this.crit*200,this.fade)
				layer.rect(0,3,1,6)
				layer.fill(240-this.crit*200,80,40+this.crit*200,this.fade)
				layer.rect(0,2,1,4)
				layer.fill(120,120+this.crit*200,120+this.crit*200,this.fade)
				layer.ellipse(0,0,6,20)
				layer.fill(240,240,40,this.fade)
				layer.ellipse(0,0,4,12)
				if(!this.active&&this.fade<1){
					layer.fill(240-this.crit*200,240,40+this.crit*200,this.fade)
					layer.ellipse(0,0,480-this.fade*480)
					layer.fill(240-this.crit*200,160,40+this.crit*200,this.fade)
					layer.ellipse(0,0,320-this.fade*320)
					layer.fill(240-this.crit*200,80,40+this.crit*200,this.fade)
					layer.ellipse(0,0,160-this.fade*160)
				}
			break
			case 23:
				if(!this.active&&this.fade<1){
					layer.fill(240-this.crit*200,180,180+this.crit*200,this.fade)
					layer.ellipse(0,0,30-this.fade*30)
				}
			break
			case 24:
				layer.fill(240-this.crit*200,60,40+this.crit*200,this.fade)
				layer.rect(0,4,1,8)
				layer.fill(240-this.crit*200,40,40+this.crit*200,this.fade)
				layer.rect(0,3,1,6)
				layer.fill(240-this.crit*200,20,40+this.crit*200,this.fade)
				layer.rect(0,2,1,4)
				layer.fill(250,this.fade)
				layer.ellipse(0,0,3)
			break
			case 25:
				if(!this.active&&this.fade<1){
					layer.fill(200-this.crit*200,200,200+this.crit*200,this.fade)
					layer.ellipse(0,0,36-this.fade*36,27-this.fade*27)
				}
			break
			case 26:
				layer.fill(240-this.crit*200,240,40+this.crit*200,this.fade)
				layer.rect(0,4,1,7)
				layer.fill(240-this.crit*200,160,40+this.crit*200,this.fade)
				layer.rect(0,3,1,5)
				layer.fill(240-this.crit*200,80,40+this.crit*200,this.fade)
				layer.rect(0,2,1,3)
				layer.fill(120,120+this.crit*200,120+this.crit*200,this.fade)
				layer.ellipse(0,0,8,20)
				if(!this.active&&this.fade<1){
					layer.fill(240-this.crit*200,240,40+this.crit*200,this.fade)
					layer.ellipse(0,0,240-this.fade*240)
					layer.fill(240-this.crit*200,160,40+this.crit*200,this.fade)
					layer.ellipse(0,0,160-this.fade*160)
					layer.fill(240-this.crit*200,80,40+this.crit*200,this.fade)
					layer.ellipse(0,0,80-this.fade*80)
				}
			break
			case 27:
				layer.fill(240-this.crit*200,240,40+this.crit*200,this.fade)
				layer.rect(0,4,1,8)
				layer.fill(240-this.crit*200,160,40+this.crit*200,this.fade)
				layer.rect(0,3,1,6)
				layer.fill(240-this.crit*200,80,40+this.crit*200,this.fade)
				layer.rect(0,2,1,4)
				layer.fill(240-this.crit*200,240+this.crit*200,40+this.crit*200,this.fade)
				layer.ellipse(0,0,6,20)
				layer.fill(240,240,40,this.fade)
				layer.ellipse(0,0,4,12)
				if(!this.active&&this.fade<1){
					layer.fill(240-this.crit*200,240,40+this.crit*200,this.fade)
					layer.ellipse(0,0,240-this.fade*240)
					layer.fill(240-this.crit*200,160,40+this.crit*200,this.fade)
					layer.ellipse(0,0,160-this.fade*160)
					layer.fill(240-this.crit*200,80,40+this.crit*200,this.fade)
					layer.ellipse(0,0,80-this.fade*80)
				}
			break
			case 28:
				layer.rotate(-this.direction)
				layer.fill(240-this.crit*200,240,40+this.crit*200,this.fade)
				layer.ellipse(this.past[0][0]-this.position.x,this.past[0][1]-this.position.y,2)
				layer.fill(240-this.crit*200,160,40+this.crit*200,this.fade)
				layer.ellipse(this.past[4][0]-this.position.x,this.past[4][1]-this.position.y,4)
				layer.fill(240-this.crit*200,80,40+this.crit*200,this.fade)
				layer.ellipse(this.past[8][0]-this.position.x,this.past[8][1]-this.position.y,6)
				layer.fill(250,this.fade)
				regPoly(layer,0,0,16,4,4,0)
			break
			case 29:
				layer.rotate(-this.direction)
				layer.fill(240-this.crit*200,240,40+this.crit*200,this.fade)
				layer.ellipse(this.past[0][0]-this.position.x,this.past[0][1]-this.position.y,2)
				layer.fill(240-this.crit*200,160,40+this.crit*200,this.fade)
				layer.ellipse(this.past[4][0]-this.position.x,this.past[4][1]-this.position.y,4)
				layer.fill(240-this.crit*200,80,40+this.crit*200,this.fade)
				layer.ellipse(this.past[8][0]-this.position.x,this.past[8][1]-this.position.y,6)
				layer.fill(250,this.fade)
				layer.ellipse(0,0,12)
				layer.fill(250-this.crit*200,this.crit*200,this.crit*200,this.fade)
				layer.ellipse(0,0,4)
				layer.rotate(this.time*2)
				layer.quad(0,-1,-5,0,0,1,5,0)
				layer.quad(0,-5,-1,0,0,5,1,0)
			break
			case 30:
				layer.rotate(-this.direction)
				layer.fill(240-this.crit*200,240,40+this.crit*200,this.fade)
				layer.ellipse(this.past[0][0]-this.position.x,this.past[0][1]-this.position.y,2)
				layer.fill(240-this.crit*200,160,40+this.crit*200,this.fade)
				layer.ellipse(this.past[4][0]-this.position.x,this.past[4][1]-this.position.y,4)
				layer.fill(240-this.crit*200,80,40+this.crit*200,this.fade)
				layer.ellipse(this.past[8][0]-this.position.x,this.past[8][1]-this.position.y,6)
				layer.fill(250,this.fade)
				layer.ellipse(0,0,8)
				layer.fill(250-this.crit*200,this.crit*200,this.crit*200,this.fade)
				layer.rect(0,0,4)
				if(!this.active&&this.fade<1){
					layer.fill(240-this.crit*200,240,40+this.crit*200,this.fade)
					layer.ellipse(0,0,180-this.fade*180)
					layer.fill(240-this.crit*200,160,40+this.crit*200,this.fade)
					layer.ellipse(0,0,120-this.fade*120)
					layer.fill(240-this.crit*200,80,40+this.crit*200,this.fade)
					layer.ellipse(0,0,60-this.fade*60)
				}
			break
			case 31:
				layer.fill(240-this.crit*200,240,40+this.crit*200,this.fade)
				layer.rect(0,4,1,8)
				layer.fill(240-this.crit*200,160,40+this.crit*200,this.fade)
				layer.rect(0,3,1,6)
				layer.fill(240-this.crit*200,80,40+this.crit*200,this.fade)
				layer.rect(0,2,1,4)
				layer.fill(120,120+this.crit*200,120+this.crit*200,this.fade)
				layer.ellipse(0,0,6,20)
				layer.rect(0,0,8,8)
				if(!this.active&&this.fade<1){
					layer.fill(240-this.crit*200,240,40+this.crit*200,this.fade)
					layer.ellipse(0,0,240-this.fade*240)
					layer.fill(240-this.crit*200,160,40+this.crit*200,this.fade)
					layer.ellipse(0,0,160-this.fade*160)
					layer.fill(240-this.crit*200,80,40+this.crit*200,this.fade)
					layer.ellipse(0,0,80-this.fade*80)
				}
			break
			case 32:
				layer.stroke(120,120+this.crit*200,120+this.crit*200,this.fade)
				layer.strokeWeight(1)
				layer.noFill()
				layer.ellipse(0,0,6,20)
				if(!this.active&&this.fade<1){
					layer.noStroke()
					layer.fill(240-this.crit*200,240,40+this.crit*200,this.fade)
					layer.ellipse(0,0,240-this.fade*240)
					layer.fill(240-this.crit*200,160,40+this.crit*200,this.fade)
					layer.ellipse(0,0,160-this.fade*160)
					layer.fill(240-this.crit*200,80,40+this.crit*200,this.fade)
					layer.ellipse(0,0,80-this.fade*80)
				}
			break
			case 33:
				layer.fill(240-this.crit*200,120+this.crit*120,120+this.crit*200,this.fade*this.time/this.base.time)
				layer.ellipse(0,0,60*(1-this.time/this.base.time))
				layer.fill(240-this.crit*200,160+this.crit*80,160+this.crit*120,this.fade*this.time/this.base.time)
				layer.ellipse(0,0,30*(1-this.time/this.base.time))
			break
			case 34:
				layer.rotate(-this.direction)
				layer.fill(240-this.crit*200,240,40+this.crit*200,this.fade)
				layer.ellipse(this.past[0][0]-this.position.x,this.past[0][1]-this.position.y,1)
				layer.fill(240-this.crit*200,160,40+this.crit*200,this.fade)
				layer.ellipse(this.past[4][0]-this.position.x,this.past[4][1]-this.position.y,2)
				layer.fill(240-this.crit*200,80,40+this.crit*200,this.fade)
				layer.ellipse(this.past[8][0]-this.position.x,this.past[8][1]-this.position.y,3)
				layer.fill(250,this.fade)
				layer.ellipse(0,0,5)
			break
			case 35:
				layer.rotate(-this.direction)
				layer.fill(240-this.crit*200,240,40+this.crit*200,this.fade)
				layer.ellipse(this.past[0][0]-this.position.x,this.past[0][1]-this.position.y,2)
				layer.fill(240-this.crit*200,160,40+this.crit*200,this.fade)
				layer.ellipse(this.past[4][0]-this.position.x,this.past[4][1]-this.position.y,4)
				layer.fill(240-this.crit*200,80,40+this.crit*200,this.fade)
				layer.ellipse(this.past[8][0]-this.position.x,this.past[8][1]-this.position.y,6)
				layer.fill(250,250,200,this.fade)
				layer.ellipse(0,0,8)
			break
			case 36:
				layer.fill(240-this.crit*200,240,40+this.crit*200,this.fade)
				layer.rect(0,4,1,8)
				layer.fill(240-this.crit*200,160,40+this.crit*200,this.fade)
				layer.rect(0,3,1,6)
				layer.fill(240-this.crit*200,80,40+this.crit*200,this.fade)
				layer.rect(0,2,1,4)
				layer.fill(200,250,250,this.fade)
				layer.ellipse(0,0,3)
			break
			case 37:
				if(!this.active&&this.fade<1){
					layer.fill(100-this.crit*200,250,100+this.crit*200,this.fade)
					layer.ellipse(0,0,30-this.fade*30)
				}
			break
			case 38:
				layer.fill(240-this.crit*200,120+this.crit*200,240+this.crit*40,this.fade)
				layer.rect(0,4,1,8)
				layer.fill(240-this.crit*200,120+this.crit*200,240+this.crit*40,this.fade)
				layer.rect(0,3,1,6)
				layer.fill(240-this.crit*200,120+this.crit*200,240+this.crit*40,this.fade)
				layer.rect(0,2,1,4)
				layer.fill(200,250,250,this.fade)
				layer.quad(-4,0,0,-1,1,0,0,4)
				layer.fill(200,250,200,this.fade)
				layer.ellipse(0,0,3)
			break
			case 39:
				layer.fill(240-this.crit*200,240,40+this.crit*200,this.fade)
				layer.rect(0,12,1,24)
				layer.fill(240-this.crit*200,160,40+this.crit*200,this.fade)
				layer.rect(0,9,1,18)
				layer.fill(240-this.crit*200,80,40+this.crit*200,this.fade)
				layer.rect(0,6,1,12)
				layer.fill(250,200,200,this.fade)
				layer.ellipse(0,0,3,4)
			break
			case 40:
				if(!this.active&&this.fade<1){
					layer.fill(100-this.crit*200,250,100+this.crit*200,this.fade)
					layer.ellipse(0,0,40-this.fade*40)
					layer.fill(200-this.crit*200,200,200+this.crit*200,this.fade)
					layer.ellipse(0,0,30-this.fade*30)
				}
			break
			case 41:
				layer.fill(240-this.crit*200,240,40+this.crit*200,this.fade)
				layer.rect(0,4,1,8)
				layer.fill(240-this.crit*200,160,40+this.crit*200,this.fade)
				layer.rect(0,3,1,6)
				layer.fill(240-this.crit*200,80,40+this.crit*200,this.fade)
				layer.rect(0,2,1,4)
				layer.fill(120,120+this.crit*200,120+this.crit*200,this.fade)
				layer.ellipse(0,0,6,20)
				layer.triangle(-3,0,3,0,0,-15)
				if(!this.active&&this.fade<1){
					layer.fill(240-this.crit*200,240,40+this.crit*200,this.fade)
					layer.ellipse(0,0,240-this.fade*240)
					layer.fill(240-this.crit*200,160,40+this.crit*200,this.fade)
					layer.ellipse(0,0,160-this.fade*160)
					layer.fill(240-this.crit*200,80,40+this.crit*200,this.fade)
					layer.ellipse(0,0,80-this.fade*80)
				}
			break
			case 42:
				layer.rotate(-this.direction)
				layer.fill(240-this.crit*200,240,40+this.crit*200,this.fade)
				layer.ellipse(this.past[0][0]-this.position.x,this.past[0][1]-this.position.y,1)
				layer.fill(240-this.crit*200,160,40+this.crit*200,this.fade)
				layer.ellipse(this.past[4][0]-this.position.x,this.past[4][1]-this.position.y,2)
				layer.fill(240-this.crit*200,80,40+this.crit*200,this.fade)
				layer.ellipse(this.past[8][0]-this.position.x,this.past[8][1]-this.position.y,3)
				layer.fill(250,this.fade)
				layer.ellipse(0,0,9)
				layer.fill(250-this.crit*200,this.crit*200,this.crit*200,this.fade)
				layer.ellipse(0,0,3)
			break
			case 43:
				layer.fill(240-this.crit*200,240,40+this.crit*200,this.fade)
				layer.rect(0,4,1,8)
				layer.fill(240-this.crit*200,160,40+this.crit*200,this.fade)
				layer.rect(0,3,1,6)
				layer.fill(240-this.crit*200,80,40+this.crit*200,this.fade)
				layer.rect(0,2,1,4)
				layer.fill(250,250,0,this.fade)
				layer.ellipse(0,0,6,3)
				layer.fill(250,this.fade)
				layer.ellipse(0,0,3)
			break
			case 44:
				layer.fill(240-this.crit*200,240,40+this.crit*200,this.fade)
				layer.rect(0,4,1,8)
				layer.fill(240-this.crit*200,160,40+this.crit*200,this.fade)
				layer.rect(0,3,1,6)
				layer.fill(240-this.crit*200,80,40+this.crit*200,this.fade)
				layer.rect(0,2,1,4)
				layer.fill(250,125,0,this.fade)
				layer.ellipse(0,0,6,3)
				layer.fill(250,this.fade)
				layer.ellipse(0,0,3)
			break
			case 45:
				layer.fill(240-this.crit*200,240,40+this.crit*200,this.fade)
				layer.rect(0,4,1,8)
				layer.fill(240-this.crit*200,160,40+this.crit*200,this.fade)
				layer.rect(0,3,1,6)
				layer.fill(240-this.crit*200,80,40+this.crit*200,this.fade)
				layer.rect(0,2,1,4)
				layer.fill(120,120+this.crit*200,120+this.crit*200,this.fade)
				layer.ellipse(0,0,6,20)
				layer.fill(240-this.crit*200,this.crit*240,this.crit*240,this.fade)
				layer.ellipse(0,0,4,20)
				if(!this.active&&this.fade<1){
					layer.fill(240-this.crit*200,240,40+this.crit*200,this.fade)
					layer.ellipse(0,0,240-this.fade*240)
					layer.fill(240-this.crit*200,160,40+this.crit*200,this.fade)
					layer.ellipse(0,0,160-this.fade*160)
					layer.fill(240-this.crit*200,80,40+this.crit*200,this.fade)
					layer.ellipse(0,0,80-this.fade*80)
				}
			break
			case 46:
				if(!this.active&&this.fade<1){
					layer.fill(200-this.crit*200,200,200+this.crit*200,this.fade)
					layer.ellipse(0,0,30-this.fade*30)
					layer.rect(0,0,10-this.fade*10,40-this.fade*40)
					layer.rect(0,0,40-this.fade*40,10-this.fade*10)
				}
			break
			case 47:
				layer.fill(240-this.crit*200,240,40+this.crit*200,this.fade)
				layer.rect(0,4,1,8)
				layer.fill(240-this.crit*200,160,40+this.crit*200,this.fade)
				layer.rect(0,3,1,6)
				layer.fill(240-this.crit*200,80,40+this.crit*200,this.fade)
				layer.rect(0,2,1,4)
				layer.fill(120,120+this.crit*200,120+this.crit*200,this.fade)
				layer.ellipse(0,0,6,20)
				layer.fill(250,125,0,this.fade)
				layer.rect(0,0,8,8)
				if(!this.active&&this.fade<1){
					layer.fill(240-this.crit*200,240,40+this.crit*200,this.fade)
					layer.ellipse(0,0,240-this.fade*240)
					layer.fill(240-this.crit*200,160,40+this.crit*200,this.fade)
					layer.ellipse(0,0,160-this.fade*160)
					layer.fill(240-this.crit*200,80,40+this.crit*200,this.fade)
					layer.ellipse(0,0,80-this.fade*80)
				}
			break
			case 48:
				layer.fill(240-this.crit*200,240,40+this.crit*200,this.fade)
				layer.rect(0,4,1,8)
				layer.fill(240-this.crit*200,160,40+this.crit*200,this.fade)
				layer.rect(0,3,1,6)
				layer.fill(240-this.crit*200,80,40+this.crit*200,this.fade)
				layer.rect(0,2,1,4)
				layer.fill(120,120+this.crit*200,120+this.crit*200,this.fade)
				layer.ellipse(0,0,6,20)
				layer.fill(40,this.fade)
				layer.rect(0,0,4,4)
				if(!this.active&&this.fade<1){
					layer.fill(100,this.fade*3)
					layer.ellipse(0,0,1200-this.fade*1200)
				}
			break
			case 49:
				layer.fill(240-this.crit*200,60,40+this.crit*200,this.fade)
				layer.rect(0,4,1,8)
				layer.fill(240-this.crit*200,40,40+this.crit*200,this.fade)
				layer.rect(0,3,1,6)
				layer.fill(240-this.crit*200,20,40+this.crit*200,this.fade)
				layer.rect(0,2,1,4)
				layer.fill(250,this.fade)
				layer.rect(0,0,3)
			break
			case 50:
				layer.fill(240-this.crit*200,240,40+this.crit*200,this.fade)
				layer.rect(0,12,1,24)
				layer.fill(240-this.crit*200,160,40+this.crit*200,this.fade)
				layer.rect(0,9,1,18)
				layer.fill(240-this.crit*200,80,40+this.crit*200,this.fade)
				layer.rect(0,6,1,12)
				layer.fill(250,this.fade)
				layer.ellipse(0,0,3,4)
				layer.fill(100,250,100,this.fade)
				layer.ellipse(0,0,2,3)
			break
			case 51:
				layer.rotate(-this.direction)
				layer.fill(240-this.crit*200,240,40+this.crit*200,this.fade)
				layer.ellipse(this.past[0][0]-this.position.x,this.past[0][1]-this.position.y,2)
				layer.fill(240-this.crit*200,160,40+this.crit*200,this.fade)
				layer.ellipse(this.past[4][0]-this.position.x,this.past[4][1]-this.position.y,4)
				layer.fill(240-this.crit*200,80,40+this.crit*200,this.fade)
				layer.ellipse(this.past[8][0]-this.position.x,this.past[8][1]-this.position.y,6)
				layer.rotate(this.time*4)
				layer.fill(150,0,0,this.fade)
				layer.quad(-2,0,0,-10,2,0,0,10)
				layer.quad(-10,0,0,-2,10,0,0,2)
				layer.fill(250,this.fade)
				layer.ellipse(0,0,8)
			break
			case 52:
				layer.rotate(-this.direction)
				layer.fill(240-this.crit*200,240,40+this.crit*200,this.fade)
				layer.ellipse(this.past[0][0]-this.position.x,this.past[0][1]-this.position.y,1.5)
				layer.fill(240-this.crit*200,160,40+this.crit*200,this.fade)
				layer.ellipse(this.past[4][0]-this.position.x,this.past[4][1]-this.position.y,3)
				layer.fill(240-this.crit*200,80,40+this.crit*200,this.fade)
				layer.ellipse(this.past[8][0]-this.position.x,this.past[8][1]-this.position.y,4.5)
				layer.fill(250,this.fade)
				layer.ellipse(0,0,8)
			break
			case 53:
				layer.fill(240-this.crit*200,240,40+this.crit*200,this.fade)
				layer.rect(0,4,1,7)
				layer.fill(240-this.crit*200,160,40+this.crit*200,this.fade)
				layer.rect(0,3,1,5)
				layer.fill(240-this.crit*200,80,40+this.crit*200,this.fade)
				layer.rect(0,2,1,3)
				layer.fill(120,120+this.crit*200,120+this.crit*200,this.fade)
				layer.ellipse(0,0,6,20)
				layer.fill(240,40,40,this.fade)
				layer.ellipse(0,0,4,12)
				if(!this.active&&this.fade<1){
					layer.fill(240-this.crit*200,120,this.crit*200,this.fade)
					layer.ellipse(0,0,240-this.fade*240)
					layer.fill(240-this.crit*200,80,this.crit*200,this.fade)
					layer.ellipse(0,0,160-this.fade*160)
					layer.fill(240-this.crit*200,40,this.crit*200,this.fade)
					layer.ellipse(0,0,80-this.fade*80)
				}
			break
			case 54:
				layer.fill(240-this.crit*200,240,40+this.crit*200,this.fade)
				layer.rect(0,4,1,7)
				layer.fill(240-this.crit*200,160,40+this.crit*200,this.fade)
				layer.rect(0,3,1,5)
				layer.fill(240-this.crit*200,80,40+this.crit*200,this.fade)
				layer.rect(0,2,1,3)
				layer.fill(120,120+this.crit*200,120+this.crit*200,this.fade)
				layer.ellipse(0,0,6,20)
				layer.fill(240-this.crit*200,this.crit*240,this.crit*240,this.fade)
				layer.ellipse(0,0,4,20)
				if(!this.active&&this.fade<1){
					layer.fill(240-this.crit*200,240,40+this.crit*200,this.fade)
					layer.ellipse(0,0,240-this.fade*240)
					layer.fill(240-this.crit*200,160,40+this.crit*200,this.fade)
					layer.ellipse(0,0,160-this.fade*160)
					layer.fill(240-this.crit*200,80,40+this.crit*200,this.fade)
					layer.ellipse(0,0,80-this.fade*80)
				}
			break
			case 55:
				layer.fill(240-this.crit*200,240,40+this.crit*200,this.fade)
				layer.rect(0,4,1,8)
				layer.fill(240-this.crit*200,160,40+this.crit*200,this.fade)
				layer.rect(0,3,1,6)
				layer.fill(240-this.crit*200,80,40+this.crit*200,this.fade)
				layer.rect(0,2,1,4)
				layer.fill(240-this.crit*200,240+this.crit*200,40+this.crit*200,this.fade)
				layer.ellipse(0,0,6,20)
				layer.fill(240-this.crit*200,240+this.crit*200,120+this.crit*200,this.fade)
				layer.ellipse(0,0,3,10)
				if(!this.active&&this.fade<1){
					layer.fill(240-this.crit*200,240,40+this.crit*200,this.fade)
					layer.ellipse(0,0,240-this.fade*240)
					layer.fill(240-this.crit*200,160,40+this.crit*200,this.fade)
					layer.ellipse(0,0,160-this.fade*160)
					layer.fill(240-this.crit*200,80,40+this.crit*200,this.fade)
					layer.ellipse(0,0,80-this.fade*80)
				}
			break
			case 56:
				layer.fill(240-this.crit*200,240,40+this.crit*200,this.fade)
				layer.rect(0,4,1,8)
				layer.fill(240-this.crit*200,160,40+this.crit*200,this.fade)
				layer.rect(0,3,1,6)
				layer.fill(240-this.crit*200,80,40+this.crit*200,this.fade)
				layer.rect(0,2,1,4)
				layer.fill(250-this.crit*200,250,100+this.crit*200,this.fade)
				layer.rect(0,0,10,12)
				layer.fill(120,120+this.crit*200,120+this.crit*200,this.fade)
				layer.ellipse(0,0,6,20)
				layer.rect(0,0,8,8)
				if(!this.active&&this.fade<1){
					layer.fill(240-this.crit*200,240,40+this.crit*200,this.fade)
					layer.ellipse(0,0,240-this.fade*240)
					layer.fill(240-this.crit*200,160,40+this.crit*200,this.fade)
					layer.ellipse(0,0,160-this.fade*160)
					layer.fill(240-this.crit*200,80,40+this.crit*200,this.fade)
					layer.ellipse(0,0,80-this.fade*80)
				}
			break
			case 57:
				layer.fill(240-this.crit*200,240,40+this.crit*200,this.fade)
				layer.rect(0,12,1,24)
				layer.rect(0,16,12,1)
				layer.rect(0,8,12,1)
				layer.fill(240-this.crit*200,160,40+this.crit*200,this.fade)
				layer.rect(0,9,1,18)
				layer.rect(0,16,9,1)
				layer.rect(0,8,9,1)
				layer.fill(240-this.crit*200,80,40+this.crit*200,this.fade)
				layer.rect(0,6,1,12)
				layer.rect(0,16,6,1)
				layer.rect(0,8,6,1)
				layer.fill(250,this.fade)
				layer.ellipse(0,0,3,4)
			break
			case 58:
				layer.fill(240-this.crit*200,240,40+this.crit*200,this.fade)
				layer.rect(0,4,1,7)
				layer.fill(240-this.crit*200,160,40+this.crit*200,this.fade)
				layer.rect(0,3,1,5)
				layer.fill(240-this.crit*200,80,40+this.crit*200,this.fade)
				layer.rect(0,2,1,3)
				layer.fill(120,120+this.crit*200,120+this.crit*200,this.fade)
				layer.ellipse(0,0,6,20)
				layer.fill(240,240,40,this.fade)
				layer.ellipse(0,0,4,12)
				if(!this.active&&this.fade<1){
					layer.fill(240-this.crit*200,240,40+this.crit*200,this.fade)
					layer.ellipse(0,0,480-this.fade*480)
					layer.fill(240-this.crit*200,160,40+this.crit*200,this.fade)
					layer.ellipse(0,0,320-this.fade*320)
					layer.fill(240-this.crit*200,80,40+this.crit*200,this.fade)
					layer.ellipse(0,0,160-this.fade*160)
				}
			break
			case 59:
				layer.fill(240-this.crit*200,240,40+this.crit*200,this.fade)
				layer.rect(0,4,1,8)
				layer.fill(240-this.crit*200,160,40+this.crit*200,this.fade)
				layer.rect(0,3,1,6)
				layer.fill(240-this.crit*200,80,40+this.crit*200,this.fade)
				layer.rect(0,2,1,4)
				layer.fill(250,250,0,this.fade)
				layer.ellipse(0,0,6,3)
				layer.fill(250,125,0,this.fade)
				layer.ellipse(0,0,3,6)
				layer.fill(250,this.fade)
				layer.ellipse(0,0,3)
			break
			case 60:
				layer.rotate(-this.direction)
				layer.fill(240-this.crit*200,240,40+this.crit*200,this.fade)
				layer.ellipse(this.past[0][0]-this.position.x,this.past[0][1]-this.position.y,2)
				layer.fill(240-this.crit*200,160,40+this.crit*200,this.fade)
				layer.ellipse(this.past[4][0]-this.position.x,this.past[4][1]-this.position.y,4)
				layer.fill(240-this.crit*200,80,40+this.crit*200,this.fade)
				layer.ellipse(this.past[8][0]-this.position.x,this.past[8][1]-this.position.y,6)
				layer.fill(250,this.fade)
				layer.ellipse(0,0,10)
				layer.fill(240-this.crit*200,this.crit*240,this.crit*240,this.fade)
				layer.ellipse(0,0,4,10)
				if(!this.active&&this.fade<1){
					layer.fill(240-this.crit*200,240,40+this.crit*200,this.fade)
					layer.ellipse(0,0,180-this.fade*180)
					layer.fill(240-this.crit*200,160,40+this.crit*200,this.fade)
					layer.ellipse(0,0,120-this.fade*120)
					layer.fill(240-this.crit*200,80,40+this.crit*200,this.fade)
					layer.ellipse(0,0,60-this.fade*60)
				}
			break
			case 61:
				layer.rotate(-this.direction)
				layer.fill(240-this.crit*200,240,40+this.crit*200,this.fade)
				layer.ellipse(this.past[0][0]-this.position.x,this.past[0][1]-this.position.y,2)
				layer.fill(240-this.crit*200,160,40+this.crit*200,this.fade)
				layer.ellipse(this.past[4][0]-this.position.x,this.past[4][1]-this.position.y,4)
				layer.fill(240-this.crit*200,80,40+this.crit*200,this.fade)
				layer.ellipse(this.past[8][0]-this.position.x,this.past[8][1]-this.position.y,6)
				layer.rotate(this.time*4)
				layer.fill(150,0,150,this.fade)
				layer.quad(-2,0,0,-10,2,0,0,10)
				layer.quad(-10,0,0,-2,10,0,0,2)
				layer.fill(250,this.fade)
				layer.ellipse(0,0,8)
			break
			case 62:
				layer.rotate(-this.direction)
				layer.fill(240-this.crit*200,240,40+this.crit*200,this.fade)
				layer.ellipse(this.past[0][0]-this.position.x,this.past[0][1]-this.position.y,0.75)
				layer.fill(240-this.crit*200,160,40+this.crit*200,this.fade)
				layer.ellipse(this.past[4][0]-this.position.x,this.past[4][1]-this.position.y,1.5)
				layer.fill(240-this.crit*200,80,40+this.crit*200,this.fade)
				layer.ellipse(this.past[8][0]-this.position.x,this.past[8][1]-this.position.y,2.25)
				layer.fill(250,this.fade)
				layer.ellipse(0,0,5)
			break
			case 63:
				layer.fill(240-this.crit*200,240,40+this.crit*200,this.fade)
				layer.rect(0,4,1,8)
				layer.fill(240-this.crit*200,240,80+this.crit*200,this.fade)
				layer.rect(0,3,1,6)
				layer.fill(240-this.crit*200,240,120+this.crit*200,this.fade)
				layer.rect(0,2,1,4)
				layer.fill(200,250,250,this.fade)
				layer.quad(-4,0,0,-1,1,0,0,4)
				layer.fill(200,250,200,this.fade)
				layer.ellipse(0,0,3)
			break
			case 64:
				layer.fill(240-this.crit*200,240,40+this.crit*200,this.fade)
				layer.rect(0,4,1,8)
				layer.fill(240-this.crit*200,160,40+this.crit*200,this.fade)
				layer.rect(0,3,1,6)
				layer.fill(240-this.crit*200,80,40+this.crit*200,this.fade)
				layer.rect(0,2,1,4)
				layer.fill(120,120+this.crit*200,120+this.crit*200,this.fade)
				layer.ellipse(0,0,6,20)
				layer.fill(250,0,250,this.fade)
				layer.rect(0,0,8,8)
				if(!this.active&&this.fade<1){
					layer.fill(240-this.crit*200,240,40+this.crit*200,this.fade)
					layer.ellipse(0,0,240-this.fade*240)
					layer.fill(240-this.crit*200,160,40+this.crit*200,this.fade)
					layer.ellipse(0,0,160-this.fade*160)
					layer.fill(240-this.crit*200,80,40+this.crit*200,this.fade)
					layer.ellipse(0,0,80-this.fade*80)
				}
			break
			case 65:
				layer.rotate(-this.direction)
				layer.fill(240-this.crit*200,240,40+this.crit*200,this.fade)
				layer.ellipse(this.past[0][0]-this.position.x,this.past[0][1]-this.position.y,2)
				layer.fill(240-this.crit*200,160,40+this.crit*200,this.fade)
				layer.ellipse(this.past[4][0]-this.position.x,this.past[4][1]-this.position.y,4)
				layer.fill(240-this.crit*200,80,40+this.crit*200,this.fade)
				layer.ellipse(this.past[8][0]-this.position.x,this.past[8][1]-this.position.y,6)
				layer.fill(250,this.fade)
				layer.ellipse(0,0,8)
				layer.fill(250-this.crit*200,250-this.crit*50,this.crit*200,this.fade)
				layer.rect(0,0,4)
				if(!this.active&&this.fade<1){
					layer.fill(240-this.crit*200,240,40+this.crit*200,this.fade)
					layer.ellipse(0,0,180-this.fade*180)
					layer.fill(240-this.crit*200,160,40+this.crit*200,this.fade)
					layer.ellipse(0,0,120-this.fade*120)
					layer.fill(240-this.crit*200,80,40+this.crit*200,this.fade)
					layer.ellipse(0,0,60-this.fade*60)
				}
			break
			case 66:
				layer.fill(240-this.crit*200,240,40+this.crit*200,this.fade)
				layer.rect(0,4,1,8)
				layer.fill(240-this.crit*200,160,40+this.crit*200,this.fade)
				layer.rect(0,3,1,6)
				layer.fill(240-this.crit*200,80,40+this.crit*200,this.fade)
				layer.rect(0,2,1,4)
				layer.fill(120,120+this.crit*200,120+this.crit*200,this.fade)
				layer.ellipse(0,0,6,20)
				layer.fill(240,this.fade)
				layer.quad(-2.5,0,0,-1,2.5,0,0,1)
				layer.quad(-1,0,0,-2.5,1,0,0,2.5)
				if(!this.active&&this.fade<1){
					layer.fill(240-this.crit*200,240,40+this.crit*200,this.fade)
					layer.ellipse(0,0,240-this.fade*240)
					layer.fill(240-this.crit*200,160,40+this.crit*200,this.fade)
					layer.ellipse(0,0,160-this.fade*160)
					layer.fill(240-this.crit*200,80,40+this.crit*200,this.fade)
					layer.ellipse(0,0,80-this.fade*80)
				}
			break
			case 67:
				layer.fill(240-this.crit*200,240,40+this.crit*200,this.fade)
				layer.rect(0,4,1,8)
				layer.fill(240-this.crit*200,160,40+this.crit*200,this.fade)
				layer.rect(0,3,1,6)
				layer.fill(240-this.crit*200,80,40+this.crit*200,this.fade)
				layer.rect(0,2,1,4)
				layer.fill(250,this.fade)
				layer.ellipse(0,0,3)
				layer.fill(250,0,250,this.fade)
				layer.rect(0,0,2)
			break
			case 69:
				layer.rotate(-this.direction)
				layer.fill(240-this.crit*200,240,40+this.crit*200,this.fade)
				layer.ellipse(this.past[0][0]-this.position.x,this.past[0][1]-this.position.y,2)
				layer.fill(240-this.crit*200,160,40+this.crit*200,this.fade)
				layer.ellipse(this.past[4][0]-this.position.x,this.past[4][1]-this.position.y,4)
				layer.fill(240-this.crit*200,80,40+this.crit*200,this.fade)
				layer.ellipse(this.past[8][0]-this.position.x,this.past[8][1]-this.position.y,6)
				layer.fill(250,this.fade)
				layer.ellipse(0,0,12)
				layer.fill(250-this.crit*200,this.crit*200,this.crit*200,this.fade)
				regStar(layer,0,0,8,1,1,6,6,this.time*2)
			break
			case 70:
				layer.rotate(-this.direction)
				layer.fill(240-this.crit*200,240,40+this.crit*200,this.fade)
				layer.ellipse(this.past[0][0]-this.position.x,this.past[0][1]-this.position.y,2)
				layer.fill(240-this.crit*200,160,40+this.crit*200,this.fade)
				layer.ellipse(this.past[4][0]-this.position.x,this.past[4][1]-this.position.y,4)
				layer.fill(240-this.crit*200,80,40+this.crit*200,this.fade)
				layer.ellipse(this.past[8][0]-this.position.x,this.past[8][1]-this.position.y,6)
				layer.fill(250,this.fade)
				layer.ellipse(0,0,12)
				layer.fill(250-this.crit*200,this.crit*200,this.crit*200,this.fade)
				layer.ellipse(0,0,6)
				layer.rect(0,0,1,10)
			break
			case 71:
				layer.fill(240-this.crit*200,140,20+this.crit*200,this.fade*this.time/this.base.time)
				layer.ellipse(0,0,60*(1-this.time/this.base.time))
				layer.fill(240-this.crit*200,200,20+this.crit*200,this.fade*this.time/this.base.time)
				layer.ellipse(0,0,30*(1-this.time/this.base.time))
			break
			case 72:
				layer.fill(40,240,40+this.crit*200,this.fade)
				layer.rect(0,4,1,8)
				layer.fill(40,160,40+this.crit*200,this.fade)
				layer.rect(0,3,1,6)
				layer.fill(40,80,40+this.crit*200,this.fade)
				layer.rect(0,2,1,4)
				layer.fill(150,250,150,this.fade)
				layer.ellipse(0,0,3)
				layer.fill(250-this.crit*200,250,100+this.crit*150,this.fade)
				layer.ellipse(0,0,2)
			break

        }
        layer.pop()
    }
	explode(){
		this.exploded=true
		switch(this.type){
			case 2: case 26: case 31: case 32: case 41: case 48:
				for(let b=0,lb=entities.players.length;b<lb;b++){
					let c=dist(this.position.x,this.position.y,entities.players[b].position.x,entities.players[b].position.y)
					if(entities.players[b].life>0&&c<120&&((this.id==0?1:0)!=(entities.players[b].id==0?1:0)||this.id==-1||game.pvp&&entities.players[b].id!=this.id)){
						entities.players[b].takeDamage(this.damage*(1-c/120)*0.8)
						entities.players[b].die.killer=this.id
						entities.players[b].collect.time=450
						if(game.invis){
							entities.players[b].visible=15
						}
					}
				}
			break
			case 3:
				for(let b=0,lb=entities.players.length;b<lb;b++){
					let c=dist(this.position.x,this.position.y,entities.players[b].position.x,entities.players[b].position.y)
					if(entities.players[b].life>0&&c<240&&((this.id==0?1:0)!=(entities.players[b].id==0?1:0)||this.id==-1||game.pvp&&entities.players[b].id!=this.id)){
						entities.players[b].takeDamage(this.damage*(1-c/240))
						entities.players[b].die.killer=this.id
						entities.players[b].collect.time=450
						if(game.invis){
							entities.players[b].visible=15
						}
					}
				}
			break
			case 16:
				for(let b=0,lb=entities.players.length;b<lb;b++){
					let c=dist(this.position.x,this.position.y,entities.players[b].position.x,entities.players[b].position.y)
					if(entities.players[b].life>0&&c<120&&((this.id==0?1:0)!=(entities.players[b].id==0?1:0)||this.id==-1||game.pvp&&entities.players[b].id!=this.id)){
						entities.players[b].takeDamage(this.damage*(1-c/120)*0.8)
						entities.players[b].die.killer=this.id
						entities.players[b].collect.time=450
						if(game.invis){
							entities.players[b].visible=15
						}
						entities.players[b].velocity.x+=30*(1.5-c/120)*sin(atan2(entities.players[b].position.x-this.position.x,this.position.y-entities.players[b].position.y))
						entities.players[b].velocity.y-=30*(1.5-c/120)*cos(atan2(entities.players[b].position.x-this.position.x,this.position.y-entities.players[b].position.y))
					}
				}
			break
			case 21: case 53:
				for(let b=0,lb=entities.players.length;b<lb;b++){
					let c=dist(this.position.x,this.position.y,entities.players[b].position.x,entities.players[b].position.y)
					if(entities.players[b].life>0&&c<120&&((this.id==0?1:0)!=(entities.players[b].id==0?1:0)||this.id==-1||game.pvp&&entities.players[b].id!=this.id)){
						entities.players[b].takeDamage(this.damage*(1-c/120)*0.8)
						entities.players[b].die.killer=this.id
						entities.players[b].collect.time=450
						if(game.invis){
							entities.players[b].visible=15
						}
						for(let d=0,ld=entities.players.length;d<ld;d++){
							if(entities.players[d].index==this.index){
								entities.players[d].life=min(entities.players[d].life+this.damage*(1-c/120)*0.8,entities.players[d].base.life)
							}
						}
					}
				}
			break
			case 22: case 58:
				for(let b=0,lb=entities.players.length;b<lb;b++){
					let c=dist(this.position.x,this.position.y,entities.players[b].position.x,entities.players[b].position.y)
					if(entities.players[b].life>0&&c<240&&((this.id==0?1:0)!=(entities.players[b].id==0?1:0)||this.id==-1||game.pvp&&entities.players[b].id!=this.id)){
						entities.players[b].takeDamage(this.damage*(1-c/240)*0.8)
						entities.players[b].die.killer=this.id
						entities.players[b].collect.time=450
						if(game.invis){
							entities.players[b].visible=15
						}
					}
				}
			break
			case 27: case 65:
				for(let b=0,lb=entities.players.length;b<lb;b++){
					let c=dist(this.position.x,this.position.y,entities.players[b].position.x,entities.players[b].position.y)
					if(entities.players[b].life>0&&c<240&&((this.id==0?1:0)!=(entities.players[b].id==0?1:0)||this.id==-1||game.pvp&&entities.players[b].id!=this.id)){
						entities.players[b].takeDamage(this.damage*(1-c/240)*0.8)
						entities.players[b].die.killer=this.id
						entities.players[b].collect.time=450
						if(game.invis){
							entities.players[b].visible=15
						}
						entities.players[b].velocity.x+=20*(1.5-c/240)*sin(atan2(entities.players[b].position.x-this.position.x,this.position.y-entities.players[b].position.y))
						entities.players[b].velocity.y-=20*(1.5-c/240)*cos(atan2(entities.players[b].position.x-this.position.x,this.position.y-entities.players[b].position.y))
					}
				}
			break
			case 30:
				for(let b=0,lb=entities.players.length;b<lb;b++){
					let c=dist(this.position.x,this.position.y,entities.players[b].position.x,entities.players[b].position.y)
					if(entities.players[b].life>0&&c<100&&((this.id==0?1:0)!=(entities.players[b].id==0?1:0)||this.id==-1||game.pvp&&entities.players[b].id!=this.id)){
						entities.players[b].takeDamage(this.damage*(1-c/100)*0.8)
						entities.players[b].die.killer=this.id
						entities.players[b].collect.time=450
						if(game.invis){
							entities.players[b].visible=15
						}
					}
				}
			break
			case 45: case 54:
				for(let b=0,lb=entities.players.length;b<lb;b++){
					let c=dist(this.position.x,this.position.y,entities.players[b].position.x,entities.players[b].position.y)
					if(entities.players[b].life>0&&c<120&&((this.id==0?1:0)!=(entities.players[b].id==0?1:0)||this.id==-1||game.pvp&&entities.players[b].id!=this.id)){
						entities.players[b].takeDamage(this.damage*(1-c/120)*0.8)
						entities.players[b].die.killer=this.id
						entities.players[b].collect.time=450
						if(game.invis){
							entities.players[b].visible=15
						}
					}
				}
				for(let b=0,lb=20;b<lb;b++){
					entities.projectiles.push(new projectile(this.layer,this.position.x,this.position.y,6,random(0,360),this.id,this.damage/6,10,this.crit,this.index))
				}
			break
			case 47:
				for(let b=0,lb=entities.players.length;b<lb;b++){
					let c=dist(this.position.x,this.position.y,entities.players[b].position.x,entities.players[b].position.y)
					if(entities.players[b].life>0&&c<120&&((this.id==0?1:0)!=(entities.players[b].id==0?1:0)||this.id==-1||game.pvp&&entities.players[b].id!=this.id)){
						entities.players[b].takeDamage(this.damage*(1-c/120)*0.8)
						entities.players[b].die.killer=this.id
						entities.players[b].collect.time=450
						entities.players[b].stunTime=max(entities.players[b].stunTime,120)
						if(game.invis){
							entities.players[b].visible=15
						}
					}
				}
			break
			case 55:
				for(let b=0,lb=entities.players.length;b<lb;b++){
					let c=dist(this.position.x,this.position.y,entities.players[b].position.x,entities.players[b].position.y)
					if(entities.players[b].life>0&&c<180&&((this.id==0?1:0)!=(entities.players[b].id==0?1:0)||this.id==-1||game.pvp&&entities.players[b].id!=this.id)){
						entities.players[b].takeDamage(this.damage*(1-c/180)*0.8)
						entities.players[b].die.killer=this.id
						entities.players[b].collect.time=450
						if(game.invis){
							entities.players[b].visible=15
						}
						entities.players[b].velocity.x+=25*(1.5-c/180)*sin(atan2(entities.players[b].position.x-this.position.x,this.position.y-entities.players[b].position.y))
						entities.players[b].velocity.y-=25*(1.5-c/180)*cos(atan2(entities.players[b].position.x-this.position.x,this.position.y-entities.players[b].position.y))
					}
				}
			break
			case 56:
				for(let b=0,lb=entities.players.length;b<lb;b++){
					let c=dist(this.position.x,this.position.y,entities.players[b].position.x,entities.players[b].position.y)
					if(entities.players[b].life>0&&c<120&&((this.id==0?1:0)!=(entities.players[b].id==0?1:0)||this.id==-1||game.pvp&&entities.players[b].id!=this.id)){
						entities.players[b].takeDamage(this.damage*(1-c/120)*0.8)
						entities.players[b].die.killer=this.id
						entities.players[b].collect.time=450
						entities.players[b].velocity.y-=this.speed*abs(sin(this.direction)*3)
						if(game.invis){
							entities.players[b].visible=15
						}
					}
				}
			break
			case 60:
				for(let b=0,lb=entities.players.length;b<lb;b++){
					let c=dist(this.position.x,this.position.y,entities.players[b].position.x,entities.players[b].position.y)
					if(entities.players[b].life>0&&c<100&&((this.id==0?1:0)!=(entities.players[b].id==0?1:0)||this.id==-1||game.pvp&&entities.players[b].id!=this.id)){
						entities.players[b].takeDamage(this.damage*(1-c/100)*0.8)
						entities.players[b].die.killer=this.id
						entities.players[b].collect.time=450
						if(game.invis){
							entities.players[b].visible=15
						}
					}
				}
				for(let b=0,lb=15;b<lb;b++){
					entities.projectiles.push(new projectile(this.layer,this.position.x,this.position.y,6,random(0,360),this.id,this.damage/6,10,this.crit,this.index))
				}
			break
			case 64:
				for(let b=0,lb=entities.players.length;b<lb;b++){
					let c=dist(this.position.x,this.position.y,entities.players[b].position.x,entities.players[b].position.y)
					if(entities.players[b].life>0&&c<120&&((this.id==0?1:0)!=(entities.players[b].id==0?1:0)||this.id==-1||game.pvp&&entities.players[b].id!=this.id)){
						entities.players[b].takeDamage(this.damage*(1-c/120)*0.8)
						entities.players[b].die.killer=this.id
						entities.players[b].collect.time=450
						entities.players[b].confuseTime=max(entities.players[b].confuseTime,360)
						if(game.invis){
							entities.players[b].visible=15
						}
					}
				}
			break
			case 66:
				for(let b=0,lb=entities.players.length;b<lb;b++){
					let c=dist(this.position.x,this.position.y,entities.players[b].position.x,entities.players[b].position.y)
					if(entities.players[b].life>0&&c<120&&((this.id==0?1:0)!=(entities.players[b].id==0?1:0)||this.id==-1||game.pvp&&entities.players[b].id!=this.id)){
						entities.players[b].takeDamage(this.damage*(1-c/120)*0.8)
						entities.players[b].die.killer=this.id
						entities.players[b].collect.time=450
						if(game.invis){
							entities.players[b].visible=15
						}
					}
				}
				let turn=floor(random(0,72))
				for(let b=0,lb=5;b<lb;b++){
					entities.projectiles.push(new projectile(this.layer,this.previous.position.x,this.previous.position.y,5,this.direction+b*72+turn,this.id,this.damage/3,180,this.crit,this.index))
				}
				for(let b=0,lb=5;b<lb;b++){
					entities.projectiles.push(new projectile(this.layer,this.previous.position.x,this.previous.position.y,5,this.direction+b*72+turn+36,this.id,this.damage/3,180,this.crit,this.index))
					entities.projectiles[entities.projectiles.length-1].velocity.x*=1.5
					entities.projectiles[entities.projectiles.length-1].velocity.y*=1.5
				}
			break
		}
	}
    update(){
		this.timer++
		if(
			this.type==1||this.type==4||this.type==5||this.type==6||this.type==7||
			this.type==8||this.type==9||this.type==10||this.type==11||this.type==12||
			this.type==13||this.type==14||this.type==15||this.type==17||this.type==18||
			this.type==19||this.type==20||this.type==23||this.type==24||this.type==25||
			this.type==28||this.type==29||this.type==33||this.type==34||this.type==35||
			this.type==36||this.type==37||this.type==38||this.type==39||this.type==40||
			this.type==42||this.type==43||this.type==44||this.type==46||this.type==49||
			this.type==50||this.type==51||this.type==52||this.type==57||this.type==59||
			this.type==60||this.type==61||this.type==62||this.type==63||this.type==67||
			this.type==68||this.type==69||this.type==70||this.type==71||this.type==72
		){
			this.fade=smoothAnim(this.fade,this.active,0,1,5)
		}else if(
			this.type==2||this.type==3||this.type==16||this.type==21||this.type==22||
			this.type==26||this.type==27||this.type==30||this.type==31||this.type==32||
			this.type==41||this.type==45||this.type==47||this.type==53||this.type==54||
			this.type==55||this.type==56||this.type==58||this.type==64||this.type==65||
			this.type==66
		){
			this.fade=smoothAnim(this.fade,this.active,0,1,10)
		}else if(this.type==48){
			this.fade=smoothAnim(this.fade,this.active,0,1,90)
		}
        if(this.fade<=0){
			this.remove=true
        }
		if((game.level==3||game.level==7)&&this.position.y>this.layer.height+10){
			this.position.y=-10
			this.previous.position.y=-10
		}else if((game.level==3||game.level==7)&&this.position.x>this.layer.width+10){
			this.position.x=-10
			this.previous.position.x=-10
		}else if((game.level==3||game.level==7)&&this.position.y<-10){
			this.position.y=this.layer.height+10
			this.previous.position.y=this.layer.height+10
		}else if((game.level==3||game.level==7)&&this.position.x<-10){
			this.position.x=this.layer.width+10
			this.previous.position.x=this.layer.width+10
		}else if(this.position.x<-50||this.position.x>game.edge.x*3+50||this.position.y>game.edge.y+50){
			this.active=false
		}
		this.previous.position.x=this.position.x
		this.previous.position.y=this.position.y
		switch(this.type){
			case 5: case 8: case 17: case 28: case 29: case 30: case 34: case 35: case 42: case 51:
			case 52: case 60: case 61: case 62: case 65: case 68: case 69: case 70:
				this.past.splice(0,1)
				this.past.push([this.position.x,this.position.y])
				if(this.type!=68){
					this.velocity.y*=0.98
				}
			break
		}
        for(let a=0,la=(this.type==4||this.type==14||this.type==39||this.type==50||this.type==57)?6:4;a<la;a++){
			switch(this.type){
				case 1: case 2: case 4: case 6: case 7: case 9: case 10: case 11: case 12: case 13:
				case 14: case 15: case 16: case 18: case 19: case 20: case 21: case 22: case 23: case 24:
				case 25: case 26: case 27: case 31: case 32: case 33: case 36: case 37: case 38: case 39:
				case 40: case 41: case 43: case 44: case 45: case 46: case 47: case 48: case 49: case 50:
				case 53: case 54: case 55: case 56: case 57: case 58: case 59: case 63: case 64: case 66:
				case 67: case 71: case 72:
				    this.position.x+=this.speed*sin(this.direction)
				    this.position.y-=this.speed*cos(this.direction)
				break
				case 3:
					if(this.active){
						this.active=false
						this.explode()
					}
				break
				case 5: case 17: case 28: case 30: case 34: case 35: case 51: case 52: case 60: case 61: case 62:
				case 65: case 68:
					if(a==2){
						this.midpoint.position.x=this.position.x
						this.midpoint.position.y=this.position.y
					}
					this.position.x+=this.velocity.x/4
					this.position.y+=this.velocity.y/4
					if(this.type!=68){
						this.velocity.y+=0.1
					}
				break
				case 8:
					if(a==2){
						this.midpoint.position.x=this.position.x
						this.midpoint.position.y=this.position.y
					}
					this.position.x+=this.velocity.x/4
					this.position.y+=this.velocity.y/4
					this.velocity.y+=0.1
					if(this.timer%15==0&&this.active&&a==0){
						let minimum=300
						for(let a=0,la=entities.players.length;a<la;a++){
							if(entities.players[a].life>0&&((this.id==0?1:0)!=(entities.players[a].id==0?1:0)||this.id==-1||game.pvp&&this.id!=entities.players[a].id&&game.level!=11)){
								minimum=min(minimum,dist(this.position.x,this.position.y,entities.players[a].position.x,entities.players[a].position.y))
							}
						}
						if(minimum<300){
							for(let a=0,la=entities.players.length;a<la;a++){
								if(entities.players[a].life>0&&((this.id==0?1:0)!=(entities.players[a].id==0?1:0)||this.id==-1||game.pvp&&this.id!=entities.players[a].id)&&minimum==dist(this.position.x,this.position.y,entities.players[a].position.x,entities.players[a].position.y)){
									entities.projectiles.push(new projectile(this.layer,this.position.x,this.position.y,1,atan2(entities.players[a].position.x-this.position.x,this.position.y-entities.players[a].position.y),this.id,this.damage/2,30,this.crit))
									a=la
								}
							}
						}
					}
				break
				case 29:
					if(a==2){
						this.midpoint.position.x=this.position.x
						this.midpoint.position.y=this.position.y
					}
					this.position.x+=this.velocity.x/4
					this.position.y+=this.velocity.y/4
					this.velocity.y+=0.1
					if(this.timer%15==0&&this.active&&a==0){
						let minimum=300
						for(let a=0,la=entities.players.length;a<la;a++){
							if(entities.players[a].life>0&&((this.id==0?1:0)!=(entities.players[a].id==0?1:0)||this.id==-1||game.pvp&&this.id!=entities.players[a].id&&game.level!=11)){
								minimum=min(minimum,dist(this.position.x,this.position.y,entities.players[a].position.x,entities.players[a].position.y))
							}
						}
						if(minimum<300){
							for(let a=0,la=entities.players.length;a<la;a++){
								if(entities.players[a].life>0&&((this.id==0?1:0)!=(entities.players[a].id==0?1:0)||this.id==-1||game.pvp&&this.id!=entities.players[a].id)&&minimum==dist(this.position.x,this.position.y,entities.players[a].position.x,entities.players[a].position.y)){
									entities.projectiles.push(new projectile(this.layer,this.position.x,this.position.y,5,atan2(entities.players[a].position.x-this.position.x,this.position.y-entities.players[a].position.y),this.id,this.damage/2,120,this.crit))
									a=la
								}
							}
						}
					}
				break
				case 42:
					if(a==2){
						this.midpoint.position.x=this.position.x
						this.midpoint.position.y=this.position.y
					}
					this.position.x+=this.velocity.x/4
					this.position.y+=this.velocity.y/4
					this.velocity.y+=0.1
					if(this.timer%6==0&&this.active&&a==0){
						let minimum=300
						for(let a=0,la=entities.players.length;a<la;a++){
							if(entities.players[a].life>0&&((this.id==0?1:0)!=(entities.players[a].id==0?1:0)||this.id==-1||game.pvp&&this.id!=entities.players[a].id&&game.level!=11)){
								minimum=min(minimum,dist(this.position.x,this.position.y,entities.players[a].position.x,entities.players[a].position.y))
							}
						}
						if(minimum<300){
							for(let a=0,la=entities.players.length;a<la;a++){
								if(entities.players[a].life>0&&((this.id==0?1:0)!=(entities.players[a].id==0?1:0)||this.id==-1||game.pvp&&this.id!=entities.players[a].id)&&minimum==dist(this.position.x,this.position.y,entities.players[a].position.x,entities.players[a].position.y)){
									entities.projectiles.push(new projectile(this.layer,this.position.x,this.position.y,1,atan2(entities.players[a].position.x-this.position.x,this.position.y-entities.players[a].position.y),this.id,this.damage/4,30,this.crit))
									a=la
								}
							}
						}
					}
				break
				case 69:
					if(a==2){
						this.midpoint.position.x=this.position.x
						this.midpoint.position.y=this.position.y
					}
					this.position.x+=this.velocity.x/4
					this.position.y+=this.velocity.y/4
					this.velocity.y+=0.1
					if(this.timer%15==0&&this.active&&a==0){
						let minimum=300
						for(let a=0,la=entities.players.length;a<la;a++){
							if(entities.players[a].life>0&&((this.id==0?1:0)!=(entities.players[a].id==0?1:0)||this.id==-1||game.pvp&&this.id!=entities.players[a].id&&game.level!=11)){
								minimum=min(minimum,dist(this.position.x,this.position.y,entities.players[a].position.x,entities.players[a].position.y))
							}
						}
						if(minimum<300){
							for(let a=0,la=entities.players.length;a<la;a++){
								if(entities.players[a].life>0&&((this.id==0?1:0)!=(entities.players[a].id==0?1:0)||this.id==-1||game.pvp&&this.id!=entities.players[a].id)&&minimum==dist(this.position.x,this.position.y,entities.players[a].position.x,entities.players[a].position.y)){
									entities.projectiles.push(new projectile(this.layer,this.position.x,this.position.y,2,atan2(entities.players[a].position.x-this.position.x,this.position.y-entities.players[a].position.y),this.id,this.damage,60,this.crit))
									a=la
								}
							}
						}
					}
				break
				case 70:
					if(a==2){
						this.midpoint.position.x=this.position.x
						this.midpoint.position.y=this.position.y
					}
					this.position.x+=this.velocity.x/4
					this.position.y+=this.velocity.y/4
					this.velocity.y+=0.1
					if(this.timer%30==0&&this.active&&a==0){
						let minimum=300
						for(let a=0,la=entities.players.length;a<la;a++){
							if(entities.players[a].life>0&&((this.id==0?1:0)!=(entities.players[a].id==0?1:0)||this.id==-1||game.pvp&&this.id!=entities.players[a].id&&game.level!=11)){
								minimum=min(minimum,dist(this.position.x,this.position.y,entities.players[a].position.x,entities.players[a].position.y))
							}
						}
						if(minimum<300){
							for(let a=0,la=entities.players.length;a<la;a++){
								if(entities.players[a].life>0&&((this.id==0?1:0)!=(entities.players[a].id==0?1:0)||this.id==-1||game.pvp&&this.id!=entities.players[a].id)&&minimum==dist(this.position.x,this.position.y,entities.players[a].position.x,entities.players[a].position.y)){
									entities.projectiles.push(new projectile(this.layer,this.position.x,this.position.y,8,atan2(entities.players[a].position.x-this.position.x,this.position.y-entities.players[a].position.y),this.id,this.damage,240,this.crit))
									a=la
								}
							}
						}
					}
				break
			}
			if(this.active){
				for(let a=0,la=entities.players.length;a<la;a++){
				    if(inBoxBox(this,entities.players[a])&&(((this.id==0?1:0)!=(entities.players[a].id==0?1:0)||this.id==-1||game.pvp&&this.id!=entities.players[a].id)||this.type==9||this.type==10||this.type==11||this.type==38||this.type==63||this.type==72)&&
						!(this.id==-1&&this.timer<10&&entities.players[a].id>0)&&
						!((this.type==9||this.type==10||this.type==11||this.type==38||this.type==63||this.type==72)&&this.timer<2)&&
						!((this.type==4||this.type==14||this.type==39||this.type==50||this.type==57)&&this.timer<5&&this.id==0)&&
						entities.players[a].life>0&&entities.players[a].invincible<=0&&this.active
					){
				        this.active=false
						if(this.id==-1&&entities.players[a].id>0){
							this.damage*=0.5
						}
						if(this.type==9&&(this.id==0?1:0)==(entities.players[a].id==0?1:0)&&!game.pvp){
							entities.players[a].life=min(entities.players[a].life+this.damage*(entities.players[a].base.life/100),entities.players[a].base.life*2)
						}else if(this.type==10&&(this.id==0?1:0)==(entities.players[a].id==0?1:0)&&!game.pvp){
							entities.players[a].life=min(entities.players[a].life+this.damage*3*(entities.players[a].base.life/100),entities.players[a].base.life*2)
						}else if(this.type==11&&(this.id==0?1:0)==(entities.players[a].id==0?1:0)&&!game.pvp){
							entities.players[a].life=entities.players[a].base.life
						}else if(this.type==38&&(this.id==0?1:0)==(entities.players[a].id==0?1:0)&&!game.pvp){
							entities.players[a].life=min(entities.players[a].life+this.damage*(entities.players[a].base.life/100),entities.players[a].base.life*2)
							entities.players[a].critBuff=max(480,entities.players[a].critBuff)
						}else if(this.type==63&&(this.id==0?1:0)==(entities.players[a].id==0?1:0)&&!game.pvp){
							entities.players[a].life=min(entities.players[a].life+this.damage*(entities.players[a].base.life/100),entities.players[a].base.life*2)
							entities.players[a].defendBuff=max(240,entities.players[a].defendBuff)
						}else if(this.type==6||this.type==15||this.type==33){
							entities.players[a].takeDamage(this.damage*(entities.players[a].life>=1000?3:entities.players[a].life>=500?2:1))
						}else if(this.type==72&&(this.id==0?1:0)==(entities.players[a].id==0?1:0)&&!game.pvp){
							entities.players[a].life=min(entities.players[a].life+this.damage*(entities.players[a].base.life/100),entities.players[a].base.life*2)
							entities.players[a].jump.double=1
						}else if(
							this.type==2||this.type==16||this.type==21||this.type==22||this.type==26||
							this.type==27||this.type==30||this.type==31||this.type==32||this.type==41||
							this.type==45||this.type==47||this.type==48||this.type==53||this.type==54||
							this.type==55||this.type==56||this.type==58||this.type==64||this.type==65||
							this.type==66
						){
							if(this.type==41){
								entities.players[a].takeDamage(this.damage)
							}
							this.explode()
						}else{
				        	entities.players[a].takeDamage(this.damage)
						}
						if(this.type==12){
							entities.players[a].velocity.x+=this.speed*sin(this.direction)*3
							entities.players[a].velocity.y-=this.speed*cos(this.direction)*3
						}else if(this.type==13){
							entities.players[a].weapon.cooldown=min(entities.players[a].weaponData.cooldown+15,entities.players[a].weapon.cooldown+15)
						}else if(this.type==40){
							entities.players[a].weapon.cooldown=min(entities.players[a].weaponData.cooldown+60,entities.players[a].weapon.cooldown+60)
						}else if(this.type==14||this.type==46){
							entities.players[a].weaponType=-1
						}else if(this.type==16){
							entities.players[a].velocity.x+=this.speed*sin(this.direction)*3.6
							entities.players[a].velocity.y-=this.speed*cos(this.direction)*3.6
						}else if(this.type==18){
							entities.players[a].velocity.y-=this.speed*abs(sin(this.direction)*3)
						}else if(this.type==19){
							entities.players[a].velocity.x+=this.speed*sin(this.direction)*-3
							entities.players[a].velocity.y-=this.speed*cos(this.direction)*-3
						}else if(this.type==55){
							entities.players[a].velocity.x+=this.speed*sin(this.direction)*6
							entities.players[a].velocity.y-=this.speed*cos(this.direction)*6
						}else if(this.type==56){
							entities.players[a].velocity.y-=this.speed*abs(sin(this.direction)*2)
						}else if(
							this.type==23||this.type==24||this.type==33||this.type==35||this.type==39||
							this.type==51
						){
							for(let d=0,ld=entities.players.length;d<ld;d++){
								if(entities.players[d].index==this.index){
									entities.players[d].life=min(entities.players[d].life+this.damage,entities.players[d].base.life)
								}
							}
						}else if(this.type==36){
							for(let d=0,ld=entities.players.length;d<ld;d++){
								if(entities.players[d].index==this.index){
									entities.players[d].critBuff=max(300,entities.players[d].critBuff)
								}
							}
						}else if(this.type==43){
							entities.players[a].vulnerableTime=max(entities.players[a].vulnerableTime,300)
						}else if(this.type==44){
							entities.players[a].stunTime=max(entities.players[a].stunTime,60)
						}else if(this.type==49){
							for(let d=0,ld=entities.players.length;d<ld;d++){
								if(entities.players[d].index==this.index){
									entities.players[d].life=entities.players[d].base.life
								}
							}
						}else if(this.type==57){
							entities.players[a].newWeapon()
						}else if(this.type==59){
							entities.players[a].vulnerableTime=max(entities.players[a].vulnerableTime,300)
							entities.players[a].stunTime=max(entities.players[a].stunTime,60)
						}else if(this.type==61){
							for(let d=0,ld=entities.players.length;d<ld;d++){
								if(entities.players[d].index==this.index){
									entities.players[d].life=min(entities.players[d].life+this.damage,entities.players[d].base.life)
								}
							}
							entities.players[a].stunTime=max(entities.players[a].stunTime,90)
						}else if(this.type==67){
							entities.players[a].confuseTime=max(entities.players[a].confuseTime,360)
						}
						if(game.invis){
							entities.players[a].visible=15
						}
						if(this.type==20){
							entities.players[a].DoT.damage+=this.damage/120
							entities.players[a].DoT.active=min(120,entities.players[a].DoT.active+30)
						}else if(this.type==37||this.type==51){
							entities.players[a].DoT.damage+=this.damage/120
							entities.players[a].DoT.active=min(120,entities.players[a].DoT.active+60)
						}else if(this.type==50){
							entities.players[a].DoT.damage+=this.damage/240
							entities.players[a].DoT.active=min(240,entities.players[a].DoT.active+120)
						}
				        entities.players[a].die.killer=this.id
				        entities.players[a].collect.time=450
				    }
				}
			}
        }
		if(this.time>0){
			this.time--
        }else{
			this.active=false
		}
    }
}