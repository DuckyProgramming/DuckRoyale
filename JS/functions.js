//basic
function stanh(value){
    return (2**value-1)/(2**value+1)*0.5+0.5
}
function vectorAdd(v1,v2){
    v1.x+=v2.x
    v1.y+=v2.y
}
function vectorSet(v1,v2){
    v1.x=v2.x
    v1.y=v2.y
}
function vectorDot(v1,v2){
    v1.x=v1.x*v2.x
    v1.y=v1.y*v2.y
}
function vectorMultScalar(v,s){
    v.x=v.x*s
    v.y=v.y*s
}
function randSign(){
    return floor(random(0,2))*2-1
}
function sign(value){
    return value>=0?1:-1
}
//calculatory
function inPointBox(point,box){
    return point.position.x>box.position.x-box.width/2&&point.position.x<box.position.x+box.width/2&&point.position.y>box.position.y-box.height/2&&point.position.y<box.position.y+box.height/2
}
function inBoxBox(box1,box2){
    return box1.position.x>box2.position.x-box1.width/2-box2.width/2&&box1.position.x<box2.position.x+box1.width/2+box2.width/2&&box1.position.y>box2.position.y-box1.height/2-box2.height/2&&box1.position.y<box2.position.y+box1.height/2+box2.height/2
}
function triangleArea(triangle){
    return abs(triangle[0].x*(triangle[1].y-triangle[2].y)+triangle[1].x*(triangle[2].y-triangle[0].y)+triangle[2].x*(triangle[0].y-triangle[1].y))
}
function inPointTriangle(point,triangle){
    return abs(triangleArea(triangle)-(triangleArea([point,triangle[0],triangle[1]])+triangleArea([point,triangle[0],triangle[2]])+triangleArea([point,triangle[1],triangle[2]])))<1
}
function onSegment(p,q,r){ 
    return q.x<=max(p.x,r.x)&&q.x>=min(p.x, r.x)&&q.y<=max(p.y,r.y)&&q.y>=min(p.y, r.y)
}
function orientPoint(p,q,r){ 
    s=(q.y-p.y)*(r.x-q.x)-(q.x-p.x)*(r.y-q.y) 
    return s==0?0:s>0?1:2
}
function intersect(p1,q1,p2,q2){
    o1=orientPoint(p1,q1,p2)
    o2=orientPoint(p1,q1,q2)
    o3=orientPoint(p2,q2,p1)
    o4=orientPoint(p2,q2,q1)
    return o1!=o2&&o3!=o4||
    o1==0&&onSegment(p1,p2,q1)||
    o2==0&&onSegment(p1,q2,q1)||
    o3==0&&onSegment(p2,p1,q2)||
    o4==0&&onSegment(p2,q1,q2)
} 
function collideBoxBox(static,mobile){
    /*if(inBoxBox(static,{position:mobile.previous.position,width:mobile.width-1,height:mobile.height-1})){
        return basicCollideBoxBox(static,mobile)
    }*/
    for(let a=0,la=static.boundary.length;a<la;a++){
        for(let b=0,lb=static.boundary[a].length;b<lb;b++){
            if(a<=3){
                if(intersect(mobile.position,{x:mobile.previous.position.x-static.velocity.x,y:mobile.previous.position.y-static.velocity.y},
                    {x:static.boundary[a][b][0].x+mobile.width/2*(a==2?1:-1),y:static.boundary[a][b][0].y+mobile.height/2*(a==0?1:-1)},
                    {x:static.boundary[a][b][1].x+mobile.width/2*(a!=3?1:-1),y:static.boundary[a][b][1].y+mobile.height/2*(a!=1?1:-1)})
                ){
                    return a
                }
            }else if(a==4){
                if(
                    intersect(mobile.position,{x:mobile.previous.position.x-static.velocity.x,y:mobile.previous.position.y-static.velocity.y},
                    {x:static.boundary[a][b][0].x+mobile.width/2,y:static.boundary[a][b][0].y-mobile.height/2},
                    {x:static.boundary[a][b][1].x+mobile.width/2,y:static.boundary[a][b][1].y-mobile.height/2})||
                    intersect(mobile.position,{x:mobile.previous.position.x-static.velocity.x,y:mobile.previous.position.y-static.velocity.y},
                    {x:static.boundary[a][b][0].x-mobile.width/2,y:static.boundary[a][b][0].y-mobile.height/2},
                    {x:static.boundary[a][b][0].x+mobile.width/2,y:static.boundary[a][b][0].y-mobile.height/2})||
                    intersect(mobile.position,{x:mobile.previous.position.x-static.velocity.x,y:mobile.previous.position.y-static.velocity.y},
                    {x:static.boundary[a][b][1].x+mobile.width/2,y:static.boundary[a][b][1].y-mobile.height/2},
                    {x:static.boundary[a][b][1].x+mobile.width/2,y:static.boundary[a][b][1].y})
                ){
                    return a
                }else if(
                    intersect(mobile.position,{x:mobile.previous.position.x-static.velocity.x,y:mobile.previous.position.y-static.velocity.y},
                    {x:static.boundary[a][b][1].x+mobile.width/2,y:static.boundary[a][b][1].y},
                    {x:static.boundary[a][b][1].x+mobile.width/2,y:static.boundary[a][b][1].y+mobile.height/2})
                ){
                    return 8
                }
            }else if(a==5){
                if(
                    intersect(mobile.position,{x:mobile.previous.position.x-static.velocity.x,y:mobile.previous.position.y-static.velocity.y},
                    {x:static.boundary[a][b][0].x-mobile.width/2,y:static.boundary[a][b][0].y-mobile.height/2},
                    {x:static.boundary[a][b][1].x-mobile.width/2,y:static.boundary[a][b][1].y-mobile.height/2})||
                    intersect(mobile.position,{x:mobile.previous.position.x-static.velocity.x,y:mobile.previous.position.y-static.velocity.y},
                    {x:static.boundary[a][b][0].x-mobile.width/2,y:static.boundary[a][b][0].y-mobile.height/2},
                    {x:static.boundary[a][b][0].x+mobile.width/2,y:static.boundary[a][b][0].y-mobile.height/2})||
                    intersect(mobile.position,{x:mobile.previous.position.x-static.velocity.x,y:mobile.previous.position.y-static.velocity.y},
                    {x:static.boundary[a][b][1].x-mobile.width/2,y:static.boundary[a][b][1].y-mobile.height/2},
                    {x:static.boundary[a][b][1].x-mobile.width/2,y:static.boundary[a][b][1].y})
                ){
                    return a
                }else if(
                    intersect(mobile.position,{x:mobile.previous.position.x-static.velocity.x,y:mobile.previous.position.y-static.velocity.y},
                    {x:static.boundary[a][b][1].x-mobile.width/2,y:static.boundary[a][b][1].y},
                    {x:static.boundary[a][b][1].x-mobile.width/2,y:static.boundary[a][b][1].y+mobile.height/2})
                ){
                    return 9
                }
            }else if(a==6){
                if(
                    intersect(mobile.position,{x:mobile.previous.position.x-static.velocity.x,y:mobile.previous.position.y-static.velocity.y},
                    {x:static.boundary[a][b][0].x-mobile.width/2,y:static.boundary[a][b][0].y+mobile.height/2},
                    {x:static.boundary[a][b][1].x-mobile.width/2,y:static.boundary[a][b][1].y+mobile.height/2})||
                    intersect(mobile.position,{x:mobile.previous.position.x-static.velocity.x,y:mobile.previous.position.y-static.velocity.y},
                    {x:static.boundary[a][b][0].x+mobile.width/2,y:static.boundary[a][b][0].y+mobile.height/2},
                    {x:static.boundary[a][b][0].x-mobile.width/2,y:static.boundary[a][b][0].y+mobile.height/2})||
                    intersect(mobile.position,{x:mobile.previous.position.x-static.velocity.x,y:mobile.previous.position.y-static.velocity.y},
                    {x:static.boundary[a][b][1].x-mobile.width/2,y:static.boundary[a][b][1].y+mobile.height/2},
                    {x:static.boundary[a][b][1].x-mobile.width/2,y:static.boundary[a][b][1].y})
                ){
                    return a
                }else if(
                    intersect(mobile.position,{x:mobile.previous.position.x-static.velocity.x,y:mobile.previous.position.y-static.velocity.y},
                    {x:static.boundary[a][b][1].x-mobile.width/2,y:static.boundary[a][b][1].y},
                    {x:static.boundary[a][b][1].x-mobile.width/2,y:static.boundary[a][b][1].y-mobile.height/2})
                ){
                    return 8
                }
            }else if(a==7){
                if(
                    intersect(mobile.position,{x:mobile.previous.position.x-static.velocity.x,y:mobile.previous.position.y-static.velocity.y},
                    {x:static.boundary[a][b][0].x+mobile.width/2,y:static.boundary[a][b][0].y+mobile.height/2},
                    {x:static.boundary[a][b][1].x+mobile.width/2,y:static.boundary[a][b][1].y+mobile.height/2})||
                    intersect(mobile.position,{x:mobile.previous.position.x-static.velocity.x,y:mobile.previous.position.y-static.velocity.y},
                    {x:static.boundary[a][b][0].x+mobile.width/2,y:static.boundary[a][b][0].y+mobile.height/2},
                    {x:static.boundary[a][b][0].x-mobile.width/2,y:static.boundary[a][b][0].y+mobile.height/2})||
                    intersect(mobile.position,{x:mobile.previous.position.x-static.velocity.x,y:mobile.previous.position.y-static.velocity.y},
                    {x:static.boundary[a][b][1].x+mobile.width/2,y:static.boundary[a][b][1].y+mobile.height/2},
                    {x:static.boundary[a][b][1].x+mobile.width/2,y:static.boundary[a][b][1].y})
                ){
                    return a
                }else if(
                    intersect(mobile.position,{x:mobile.previous.position.x-static.velocity.x,y:mobile.previous.position.y-static.velocity.y},
                    {x:static.boundary[a][b][1].x+mobile.width/2,y:static.boundary[a][b][1].y},
                    {x:static.boundary[a][b][1].x+mobile.width/2,y:static.boundary[a][b][1].y-mobile.height/2})
                ){
                    return 9
                }
            }
        }
    }
    return -1
    //return basicCollideBoxBox(static,mobile)
}
function collideBoxBoxIndex1(static,mobile){
    for(let a=0,la=static.boundary.length;a<la;a++){
        for(let b=0,lb=static.boundary[a].length;b<lb;b++){
            if(a<=3){
                if(intersect(mobile.position,{x:mobile.midpoint.position.x-static.velocity.x,y:mobile.midpoint.position.y-static.velocity.y},
                    {x:static.boundary[a][b][0].x+mobile.width/2*(a==2?1:-1),y:static.boundary[a][b][0].y+mobile.height/2*(a==0?1:-1)},
                    {x:static.boundary[a][b][1].x+mobile.width/2*(a!=3?1:-1),y:static.boundary[a][b][1].y+mobile.height/2*(a!=1?1:-1)})
                ){
                    return a
                }
            }else if(a==4){
                if(
                    intersect(mobile.position,{x:mobile.midpoint.position.x-static.velocity.x,y:mobile.midpoint.position.y-static.velocity.y},
                    {x:static.boundary[a][b][0].x+mobile.width/2,y:static.boundary[a][b][0].y-mobile.height/2},
                    {x:static.boundary[a][b][1].x+mobile.width/2,y:static.boundary[a][b][1].y-mobile.height/2})||
                    intersect(mobile.position,{x:mobile.midpoint.position.x-static.velocity.x,y:mobile.midpoint.position.y-static.velocity.y},
                    {x:static.boundary[a][b][0].x-mobile.width/2,y:static.boundary[a][b][0].y-mobile.height/2},
                    {x:static.boundary[a][b][0].x+mobile.width/2,y:static.boundary[a][b][0].y-mobile.height/2})||
                    intersect(mobile.position,{x:mobile.midpoint.position.x-static.velocity.x,y:mobile.midpoint.position.y-static.velocity.y},
                    {x:static.boundary[a][b][1].x+mobile.width/2,y:static.boundary[a][b][1].y-mobile.height/2},
                    {x:static.boundary[a][b][1].x+mobile.width/2,y:static.boundary[a][b][1].y})
                ){
                    return a
                }else if(
                    intersect(mobile.position,{x:mobile.midpoint.position.x-static.velocity.x,y:mobile.midpoint.position.y-static.velocity.y},
                    {x:static.boundary[a][b][1].x+mobile.width/2,y:static.boundary[a][b][1].y},
                    {x:static.boundary[a][b][1].x+mobile.width/2,y:static.boundary[a][b][1].y+mobile.height/2})
                ){
                    return 8
                }
            }else if(a==5){
                if(
                    intersect(mobile.position,{x:mobile.midpoint.position.x-static.velocity.x,y:mobile.midpoint.position.y-static.velocity.y},
                    {x:static.boundary[a][b][0].x-mobile.width/2,y:static.boundary[a][b][0].y-mobile.height/2},
                    {x:static.boundary[a][b][1].x-mobile.width/2,y:static.boundary[a][b][1].y-mobile.height/2})||
                    intersect(mobile.position,{x:mobile.midpoint.position.x-static.velocity.x,y:mobile.midpoint.position.y-static.velocity.y},
                    {x:static.boundary[a][b][0].x-mobile.width/2,y:static.boundary[a][b][0].y-mobile.height/2},
                    {x:static.boundary[a][b][0].x+mobile.width/2,y:static.boundary[a][b][0].y-mobile.height/2})||
                    intersect(mobile.position,{x:mobile.midpoint.position.x-static.velocity.x,y:mobile.midpoint.position.y-static.velocity.y},
                    {x:static.boundary[a][b][1].x-mobile.width/2,y:static.boundary[a][b][1].y-mobile.height/2},
                    {x:static.boundary[a][b][1].x-mobile.width/2,y:static.boundary[a][b][1].y})
                ){
                    return a
                }else if(
                    intersect(mobile.position,{x:mobile.midpoint.position.x-static.velocity.x,y:mobile.midpoint.position.y-static.velocity.y},
                    {x:static.boundary[a][b][1].x-mobile.width/2,y:static.boundary[a][b][1].y},
                    {x:static.boundary[a][b][1].x-mobile.width/2,y:static.boundary[a][b][1].y+mobile.height/2})
                ){
                    return 9
                }
            }else if(a==6){
                if(
                    intersect(mobile.position,{x:mobile.midpoint.position.x-static.velocity.x,y:mobile.midpoint.position.y-static.velocity.y},
                    {x:static.boundary[a][b][0].x+mobile.width/2,y:static.boundary[a][b][0].y-mobile.height/2},
                    {x:static.boundary[a][b][1].x+mobile.width/2,y:static.boundary[a][b][1].y-mobile.height/2})||
                    intersect(mobile.position,{x:mobile.midpoint.position.x-static.velocity.x,y:mobile.midpoint.position.y-static.velocity.y},
                    {x:static.boundary[a][b][0].x-mobile.width/2,y:static.boundary[a][b][0].y-mobile.height/2},
                    {x:static.boundary[a][b][0].x+mobile.width/2,y:static.boundary[a][b][0].y-mobile.height/2})||
                    intersect(mobile.position,{x:mobile.midpoint.position.x-static.velocity.x,y:mobile.midpoint.position.y-static.velocity.y},
                    {x:static.boundary[a][b][1].x+mobile.width/2,y:static.boundary[a][b][1].y-mobile.height/2},
                    {x:static.boundary[a][b][1].x+mobile.width/2,y:static.boundary[a][b][1].y})
                ){
                    return a
                }else if(
                    intersect(mobile.position,{x:mobile.midpoint.position.x-static.velocity.x,y:mobile.midpoint.position.y-static.velocity.y},
                    {x:static.boundary[a][b][1].x+mobile.width/2,y:static.boundary[a][b][1].y},
                    {x:static.boundary[a][b][1].x+mobile.width/2,y:static.boundary[a][b][1].y+mobile.height/2})
                ){
                    return 8
                }
            }else if(a==7){
                if(
                    intersect(mobile.position,{x:mobile.midpoint.position.x-static.velocity.x,y:mobile.midpoint.position.y-static.velocity.y},
                    {x:static.boundary[a][b][0].x-mobile.width/2,y:static.boundary[a][b][0].y-mobile.height/2},
                    {x:static.boundary[a][b][1].x-mobile.width/2,y:static.boundary[a][b][1].y-mobile.height/2})||
                    intersect(mobile.position,{x:mobile.midpoint.position.x-static.velocity.x,y:mobile.midpoint.position.y-static.velocity.y},
                    {x:static.boundary[a][b][0].x-mobile.width/2,y:static.boundary[a][b][0].y-mobile.height/2},
                    {x:static.boundary[a][b][0].x+mobile.width/2,y:static.boundary[a][b][0].y-mobile.height/2})||
                    intersect(mobile.position,{x:mobile.midpoint.position.x-static.velocity.x,y:mobile.midpoint.position.y-static.velocity.y},
                    {x:static.boundary[a][b][1].x-mobile.width/2,y:static.boundary[a][b][1].y-mobile.height/2},
                    {x:static.boundary[a][b][1].x-mobile.width/2,y:static.boundary[a][b][1].y})
                ){
                    return a
                }else if(
                    intersect(mobile.position,{x:mobile.midpoint.position.x-static.velocity.x,y:mobile.midpoint.position.y-static.velocity.y},
                    {x:static.boundary[a][b][1].x-mobile.width/2,y:static.boundary[a][b][1].y},
                    {x:static.boundary[a][b][1].x-mobile.width/2,y:static.boundary[a][b][1].y+mobile.height/2})
                ){
                    return 9
                }
            }
        }
    }
    return -1
    //return basicCollideBoxBox(static,mobile)
}
function collideBoxBoxIndex2(static,mobile){
    for(let a=0,la=static.boundary.length;a<la;a++){
        for(let b=0,lb=static.boundary[a].length;b<lb;b++){
            if(a<=3){
                if(intersect(mobile.midpoint.position,{x:mobile.previous.position.x-static.velocity.x,y:mobile.previous.position.y-static.velocity.y},
                    {x:static.boundary[a][b][0].x+mobile.width/2*(a==2?1:-1),y:static.boundary[a][b][0].y+mobile.height/2*(a==0?1:-1)},
                    {x:static.boundary[a][b][1].x+mobile.width/2*(a!=3?1:-1),y:static.boundary[a][b][1].y+mobile.height/2*(a!=1?1:-1)})
                ){
                    return a
                }
            }else if(a==4){
                if(
                    intersect(mobile.midpoint.position,{x:mobile.previous.position.x-static.velocity.x,y:mobile.previous.position.y-static.velocity.y},
                    {x:static.boundary[a][b][0].x+mobile.width/2,y:static.boundary[a][b][0].y-mobile.height/2},
                    {x:static.boundary[a][b][1].x+mobile.width/2,y:static.boundary[a][b][1].y-mobile.height/2})||
                    intersect(mobile.midpoint.position,{x:mobile.previous.position.x-static.velocity.x,y:mobile.previous.position.y-static.velocity.y},
                    {x:static.boundary[a][b][0].x-mobile.width/2,y:static.boundary[a][b][0].y-mobile.height/2},
                    {x:static.boundary[a][b][0].x+mobile.width/2,y:static.boundary[a][b][0].y-mobile.height/2})||
                    intersect(mobile.midpoint.position,{x:mobile.previous.position.x-static.velocity.x,y:mobile.previous.position.y-static.velocity.y},
                    {x:static.boundary[a][b][1].x+mobile.width/2,y:static.boundary[a][b][1].y-mobile.height/2},
                    {x:static.boundary[a][b][1].x+mobile.width/2,y:static.boundary[a][b][1].y})
                ){
                    return a
                }else if(
                    intersect(mobile.midpoint.position,{x:mobile.previous.position.x-static.velocity.x,y:mobile.previous.position.y-static.velocity.y},
                    {x:static.boundary[a][b][1].x+mobile.width/2,y:static.boundary[a][b][1].y},
                    {x:static.boundary[a][b][1].x+mobile.width/2,y:static.boundary[a][b][1].y+mobile.height/2})
                ){
                    return 8
                }
            }else if(a==5){
                if(
                    intersect(mobile.midpoint.position,{x:mobile.previous.position.x-static.velocity.x,y:mobile.previous.position.y-static.velocity.y},
                    {x:static.boundary[a][b][0].x-mobile.width/2,y:static.boundary[a][b][0].y-mobile.height/2},
                    {x:static.boundary[a][b][1].x-mobile.width/2,y:static.boundary[a][b][1].y-mobile.height/2})||
                    intersect(mobile.midpoint.position,{x:mobile.previous.position.x-static.velocity.x,y:mobile.previous.position.y-static.velocity.y},
                    {x:static.boundary[a][b][0].x-mobile.width/2,y:static.boundary[a][b][0].y-mobile.height/2},
                    {x:static.boundary[a][b][0].x+mobile.width/2,y:static.boundary[a][b][0].y-mobile.height/2})||
                    intersect(mobile.midpoint.position,{x:mobile.previous.position.x-static.velocity.x,y:mobile.previous.position.y-static.velocity.y},
                    {x:static.boundary[a][b][1].x-mobile.width/2,y:static.boundary[a][b][1].y-mobile.height/2},
                    {x:static.boundary[a][b][1].x-mobile.width/2,y:static.boundary[a][b][1].y})
                ){
                    return a
                }else if(
                    intersect(mobile.midpoint.position,{x:mobile.previous.position.x-static.velocity.x,y:mobile.previous.position.y-static.velocity.y},
                    {x:static.boundary[a][b][1].x-mobile.width/2,y:static.boundary[a][b][1].y},
                    {x:static.boundary[a][b][1].x-mobile.width/2,y:static.boundary[a][b][1].y+mobile.height/2})
                ){
                    return 9
                }
            }else if(a==6){
                if(
                    intersect(mobile.midpoint.position,{x:mobile.previous.position.x-static.velocity.x,y:mobile.previous.position.y-static.velocity.y},
                    {x:static.boundary[a][b][0].x-mobile.width/2,y:static.boundary[a][b][0].y+mobile.height/2},
                    {x:static.boundary[a][b][1].x-mobile.width/2,y:static.boundary[a][b][1].y+mobile.height/2})||
                    intersect(mobile.midpoint.position,{x:mobile.previous.position.x-static.velocity.x,y:mobile.previous.position.y-static.velocity.y},
                    {x:static.boundary[a][b][0].x+mobile.width/2,y:static.boundary[a][b][0].y+mobile.height/2},
                    {x:static.boundary[a][b][0].x-mobile.width/2,y:static.boundary[a][b][0].y+mobile.height/2})||
                    intersect(mobile.midpoint.position,{x:mobile.previous.position.x-static.velocity.x,y:mobile.previous.position.y-static.velocity.y},
                    {x:static.boundary[a][b][1].x-mobile.width/2,y:static.boundary[a][b][1].y-mobile.height/2},
                    {x:static.boundary[a][b][1].x-mobile.width/2,y:static.boundary[a][b][1].y})
                ){
                    return a
                }else if(
                    intersect(mobile.midpoint.position,{x:mobile.previous.position.x-static.velocity.x,y:mobile.previous.position.y-static.velocity.y},
                    {x:static.boundary[a][b][1].x-mobile.width/2,y:static.boundary[a][b][1].y},
                    {x:static.boundary[a][b][1].x-mobile.width/2,y:static.boundary[a][b][1].y+mobile.height/2})
                ){
                    return 8
                }
            }else if(a==7){
                if(
                    intersect(mobile.midpoint.position,{x:mobile.previous.position.x-static.velocity.x,y:mobile.previous.position.y-static.velocity.y},
                    {x:static.boundary[a][b][0].x+mobile.width/2,y:static.boundary[a][b][0].y+mobile.height/2},
                    {x:static.boundary[a][b][1].x+mobile.width/2,y:static.boundary[a][b][1].y+mobile.height/2})||
                    intersect(mobile.midpoint.position,{x:mobile.previous.position.x-static.velocity.x,y:mobile.previous.position.y-static.velocity.y},
                    {x:static.boundary[a][b][0].x+mobile.width/2,y:static.boundary[a][b][0].y+mobile.height/2},
                    {x:static.boundary[a][b][0].x-mobile.width/2,y:static.boundary[a][b][0].y+mobile.height/2})||
                    intersect(mobile.midpoint.position,{x:mobile.previous.position.x-static.velocity.x,y:mobile.previous.position.y-static.velocity.y},
                        {x:static.boundary[a][b][1].x+mobile.width/2,y:static.boundary[a][b][1].y-mobile.height/2},
                        {x:static.boundary[a][b][1].x+mobile.width/2,y:static.boundary[a][b][1].y})
                ){
                    return a
                }else if(
                    intersect(mobile.midpoint.position,{x:mobile.previous.position.x-static.velocity.x,y:mobile.previous.position.y-static.velocity.y},
                        {x:static.boundary[a][b][1].x+mobile.width/2,y:static.boundary[a][b][1].y},
                        {x:static.boundary[a][b][1].x+mobile.width/2,y:static.boundary[a][b][1].y+mobile.height/2})
                ){
                    return 9
                }
            }
        }
    }
    return -1
    //return basicCollideBoxBox(static,mobile)
}
function basicCollideBoxBox(static,mobile){
    let u=atan2(mobile.position.x-static.position.x,mobile.position.y-static.position.y)
    if(u>180){
        u-=360
    }else if(u<-180){
        u+=360
    }
    return u>atan2(-static.width/2-mobile.width/2,static.height/2+mobile.height/2)&&u<atan2(static.width/2+mobile.width/2,static.height/2+mobile.height/2)?
    0:u<atan2(-static.width/2-mobile.width/2,-static.height/2-mobile.height/2)||u>atan2(static.width/2+mobile.width/2,-static.height/2-mobile.height/2)?
    1:u<atan2(static.width/2+mobile.width/2,-static.height/2-mobile.height/2)&&u>atan2(static.width/2+mobile.width/2,static.height/2+mobile.height/2)?
    2:u<atan2(-static.width/2-mobile.width/2,static.height/2+mobile.height/2)&&u>atan2(-static.width/2-mobile.width/2,-static.height/2-mobile.height/2)?
    3:-1
}
function smoothAnim(anim,trigger,minPoint,maxPoint,speed){
	if(trigger&&anim<maxPoint){
		return min(round(anim*speed+1)/speed,maxPoint)
	}
	if(!trigger&&anim>minPoint){
		return max(round(anim*speed-1)/speed,minPoint)
	}
	return anim
}
function formatTime(frames){
    return `${floor(frames/216000)}:${floor(frames/3600)%60<10?`0`:``}${floor(frames/3600)%60}:${floor(frames/60)%60<10?`0`:``}${floor(frames/60)%60}.${floor(frames%60/6*100)<10?`0`:``}${floor(frames%60/6*100)<100?`0`:``}${floor(frames%60/6*100)}`
}
function updateMouse(layer){
	inputs.mouse.x=mouseX
	inputs.mouse.y=mouseY
    if(layer!=undefined){
        inputs.rel.x=(inputs.mouse.x-width/2)/stage.scale+layer.width/2
        inputs.rel.y=(inputs.mouse.y-height/2)/stage.scale+layer.height/2
    }
}
//graphical
function setupBase(){
    colorMode(RGB,255,255,255,1)
    angleMode(DEGREES)
    rectMode(CENTER)
    imageMode(CENTER)
    textAlign(CENTER,CENTER)
    noStroke()
}
function setupLayer(layer){
    layer.colorMode(RGB,255,255,255,1)
    layer.angleMode(DEGREES)
    layer.rectMode(CENTER)
    layer.imageMode(CENTER)
    layer.textAlign(CENTER,CENTER)
    layer.noStroke()
}
function regTriangle(layer,x,y,radiusX,radiusY,direction){
    layer.triangle(x+sin(direction)*radiusX,y+cos(direction)*radiusY,x+sin(direction+120)*radiusX,y+cos(direction+120)*radiusY,x+sin(direction-120)*radiusX,y+cos(direction-120)*radiusY)
}
function regPoly(layer,x,y,sides,radiusX,radiusY,direction){
    layer.beginShape()
    for(let a=0,la=sides;a<la;a++){
        layer.vertex(x+sin(a/la*360+direction)*radiusX,y+cos(a/la*360+direction)*radiusY)
    }
    layer.endShape(CLOSE)
}
function regStar(layer,x,y,points,radiusX,radiusY,innerRadiusX,innerRadiusY,direction){
    layer.beginShape()
    for(let a=0,la=points;a<la;a++){
        layer.vertex(x+sin(a/la*360+direction)*radiusX,y+cos(a/la*360+direction)*radiusY)
        layer.vertex(x+sin((a+0.5)/la*360+direction)*innerRadiusX,y+cos((a+0.5)/la*360+direction)*innerRadiusY)
    }
    layer.endShape(CLOSE)
}
function diamond(layer,x,y,width,height){
    layer.quad(x-width/2,y,x,y-height/2,x+width/2,y,x,y+height/2)
}
function mergeColor(color1,color2,key){
    return [color1[0]*(1-key)+color2[0]*key,color1[1]*(1-key)+color2[1]*key,color1[2]*(1-key)+color2[2]*key]
}
function tripletColor(color1,color2,color3,key){
    return key>=1?[color2[0]*(2-key)+color3[0]*(key-1),color2[1]*(2-key)+color3[1]*(key-1),color2[2]*(2-key)+color3[2]*(key-1)]:[color1[0]*(1-key)+color2[0]*key,color1[1]*(1-key)+color2[1]*key,color1[2]*(1-key)+color2[2]*key]
}
//key
function displayMain(layer,layer2,effective,keyStore){
    if(game.level==11){
        if(dev.flash||game.hunt==-1){
            for(let a=0,la=layer2.length;a<la;a++){
                layer2[a].clear()
            }
        }else{
            for(let a=0,la=layer2.length;a<la;a++){
                if(game.hunt>0&&a!=game.hunt-1&&game.limit>27000){
                    layer2[a].clear()
                }else{
                    layer2[a].background(0)
                    layer2[a].erase()
                    layer2[a].beginShape()
                    layer2[a].vertex(
                        (entities.players[a].position.x-effective[a][0])/keyStore[a]+layer2[a].width*0.5-65*sin(entities.players[a].direction.main*5/3),
                        (entities.players[a].position.y-effective[a][1])/keyStore[a]+layer2[a].height/2-160
                    )
                    layer2[a].vertex(
                        (entities.players[a].position.x-effective[a][0])/keyStore[a]+map(0.5+0.5*sin(entities.players[a].direction.main*5/3),0,1,layer2[a].width*0.5+130,layer2[a].width),
                        (entities.players[a].position.y-effective[a][1])/keyStore[a]+layer2[a].height/2-160-100*sin(entities.players[a].direction.main*5/3)
                    )
                    layer2[a].vertex(
                        (entities.players[a].position.x-effective[a][0])/keyStore[a]+map(0.5+0.5*sin(entities.players[a].direction.main*5/3),0,1,layer2[a].width*0.5+130,layer2[a].width),
                        (entities.players[a].position.y-effective[a][1])/keyStore[a]+layer2[a].height/2+160+100*sin(entities.players[a].direction.main*5/3)
                    )
                    layer2[a].vertex(
                        (entities.players[a].position.x-effective[a][0])/keyStore[a]+layer2[a].width*0.5-65*sin(entities.players[a].direction.main*5/3),
                        (entities.players[a].position.y-effective[a][1])/keyStore[a]+layer2[a].height/2+160
                    )
                    layer2[a].vertex(
                        (entities.players[a].position.x-effective[a][0])/keyStore[a]+map(0.5+0.5*sin(entities.players[a].direction.main*5/3),0,1,0,layer2[a].width*0.5-130),
                        (entities.players[a].position.y-effective[a][1])/keyStore[a]+layer2[a].height/2+160-100*sin(entities.players[a].direction.main*5/3)
                    )
                    layer2[a].vertex(
                        (entities.players[a].position.x-effective[a][0])/keyStore[a]+map(0.5+0.5*sin(entities.players[a].direction.main*5/3),0,1,0,layer2[a].width*0.5-130),
                        (entities.players[a].position.y-effective[a][1])/keyStore[a]+layer2[a].height/2-160+100*sin(entities.players[a].direction.main*5/3)
                    )
                    layer2[a].endShape()
                }
            }
            if(game.limit>0){
                game.limit--
            }
            layer2[[0,0,1,1,1][game.gaming]].noErase()
            layer2[[0,0,1,1,1][game.gaming]].fill(255)
            layer2[[0,0,1,1,1][game.gaming]].textSize(20)
            layer2[[0,0,1,1,1][game.gaming]].text(`Money: ${game.money}/${(game.hunt>0?1:game.gaming)*[5,5,7,8][game.diff]}`,100,25)
            let sec=floor((game.limit%3600)/60)
            layer2[[0,0,1,1,1][game.gaming]].text(`Time: ${floor(game.limit/3600)}:${sec<10?'0'+sec:sec}`,100,55)
            if(game.hunt>0&&game.limit>27000){
                let secB=floor(((game.limit-27000)%3600)/60)
                layer2[[0,0,1,1,1][game.gaming]].text(`Headstart: ${floor((game.limit-27000)/3600)}:${secB<10?'0'+secB:secB}`,250,55)
            }
            layer2[[0,0,1,1,1][game.gaming]].text(`Lives: ${game.lives}/${ceil((game.hunt>0?4:game.gaming)/2)}`,100,85)
        }
    }
    let key=[]
    for(let a=0,la=game.gaming;a<la;a++){
        key.push(entities.players[a].parachute?4:entities.players[a].weaponType==6||entities.players[a].weaponType==12?2:1)
    }
    let marker=[-1,-1,-1,-1]
    for(let a=entities.players.length-1,la=0;a>=la;a--){
        if(entities.players[a].id>0&&entities.players[a].id<=4&&marker[entities.players[a].id-1]==-1&&entities.players[a].control==0&&entities.players[a].life>0){
            marker[entities.players[a].id-1]=a
        }
    }
    for(let a=entities.players.length-1,la=0;a>=la;a--){
        if(entities.players[a].id>0&&entities.players[a].id<=4&&marker[entities.players[a].id-1]==-1&&entities.players[a].control==1&&entities.players[a].life>0){
            marker[entities.players[a].id-1]=a
        }
    }
    for(let a=entities.players.length-1,la=0;a>=la;a--){
        if(entities.players[a].id>0&&entities.players[a].id<=4&&marker[entities.players[a].id-1]==-1&&entities.players[a].control==0){
            marker[entities.players[a].id-1]=a
        }
    }
    for(let a=0,la=marker.length;a<la;a++){
        if(marker[a]==-1){
            marker[a]=0
        }
    }
    for(let a=0,la=layer.length;a<la;a++){
        stage.scale=min(width/layer[a].width,height/layer[a].height)
    }
    if(game.gaming==1){
        image(
            layer[0],
            width/2,height/2,width,height
        )
        if(game.level==11){
            image(
                layer2[0],
                width/2,height/2,width,height
            )
        }
    }else if(game.gaming==2){
        image(
            layer[0],
            width*3/4,height/2,width/2,height
        )
        image(
            layer[1],
            width/4,height/2,width/2,height
        )
        if(game.level==11){
            image(
                layer2[0],
                width*3/4,height/2,width/2,height
            )
            image(
                layer2[1],
                width/4,height/2,width/2,height
            )
        }
    }else{
        image(
            layer[0],
            width*3/4,height/4,width/2,height/2
        )
        if(game.level==11){
            image(
                layer2[0],
                width*3/4,height/4,width/2,height/2
            )
        }
        if(game.gaming>=2){
            image(
                layer[1],
                width/4,height/4,width/2,height/2
            )
            if(game.level==11){
                image(
                    layer2[1],
                    width/4,height/4,width/2,height/2
                )
            }
        }
        if(game.gaming>=3){
            image(
                layer[2],
                width/4,height*3/4,width/2,height/2
            )
            if(game.level==11){
                image(
                    layer2[2],
                    width/4,height*3/4,width/2,height/2
                )
            }
        }
        if(game.gaming>=4){
            image(
                layer[3],
                width*3/4,height*3/4,width/2,height/2
            )
            if(game.level==11){
                image(
                    layer2[3],
                    width*3/4,height*3/4,width/2,height/2
                )
            }
        }
    }
}
function generateLevel(level,layer){
    entities.projectiles=[]
    entities.walls=[[],[]]
    game.tileset=[36,36]
    let mapDimensions=[25,6]
    if(game.level==11){
        let offset=15
        game.edge=[30*(16*mapDimensions[0]+1),30*(16*mapDimensions[1]+1+offset)]
        let mapD=[]
        let active=[]
        for(let a=0,la=mapDimensions[1];a<la;a++){
            mapD.push([])
            for(let b=0,lb=mapDimensions[0];b<lb;b++){
                mapD[a].push([])
            }
        }
        //down,up1,up2,right,left
        let bar=floor(random(0,2))
        mapD[1][11]=[false,false,false,false,true]
        mapD[1][13]=[false,false,false,true,false]
        mapD[2][12]=[false,bar==0,bar==1,false,false]
        mapD[1][12]=[true,bar==0,bar==1,true,true]
        active.push([1,11],[1,13],[1,12])
        let total=0
        while(active.length>0){
            let index=floor(random(0,active.length))
            let selector=[active[index][0],active[index][1]]
            active.splice(index,1)
            if(selector[0]>0&&mapD[selector[0]-1][selector[1]].length==0){
                mapD[selector[0]-1][selector[1]]=[true,false,false,false,false]
                active.push([selector[0]-1,selector[1]])
                mapD[selector[0]][selector[1]][1+floor(random(0,2))]=true
                total++
            }else if(selector[0]>0&&mapD[selector[0]-1][selector[1]].length==5&&floor(random(0,6))==0){
                mapD[selector[0]-1][selector[1]][0]=true
                mapD[selector[0]][selector[1]][1+floor(random(0,2))]=true
                total++
            }
            if(selector[0]<mapD.length-1&&mapD[selector[0]+1][selector[1]].length==0){
                let bar=floor(random(0,2))
                mapD[selector[0]+1][selector[1]]=[false,bar==0,bar==1,false,false]
                active.push([selector[0]+1,selector[1]])
                mapD[selector[0]][selector[1]][0]=true
                total++
            }else if(selector[0]<mapD.length-1&&mapD[selector[0]+1][selector[1]].length==5&&floor(random(0,6))==0){
                let bar=floor(random(0,2))
                mapD[selector[0]+1][selector[1]][bar+1]=true
                mapD[selector[0]][selector[1]][0]=true
                total++
            }
            if(selector[1]>0&&mapD[selector[0]][selector[1]-1].length==0){
                mapD[selector[0]][selector[1]-1]=[false,false,false,false,true]
                active.push([selector[0],selector[1]-1])
                mapD[selector[0]][selector[1]][3]=true
                total++
            }else if(selector[1]>0&&mapD[selector[0]][selector[1]-1].length==5&&floor(random(0,2))==0){
                mapD[selector[0]][selector[1]-1][4]=true
                mapD[selector[0]][selector[1]][3]=true
                total++
            }
            if(selector[1]<mapD[selector[0]].length-1&&mapD[selector[0]][selector[1]+1].length==0){
                mapD[selector[0]][selector[1]+1]=[false,false,false,true,false]
                active.push([selector[0],selector[1]+1])
                mapD[selector[0]][selector[1]][4]=true
                total++
            }else if(selector[1]<mapD[selector[0]].length-1&&mapD[selector[0]][selector[1]+1].length==5&&floor(random(0,2))==0){
                mapD[selector[0]][selector[1]+1][3]=true
                mapD[selector[0]][selector[1]][4]=true
                total++
            }
        }
        let drops=[]
        let spawns=[]
        for(let a=0,la=mapDimensions[0];a<la;a++){
            for(let b=0,lb=2;b<lb;b++){
                let bar=floor(random(0,8))
                if(bar>=1&&bar<=2){
                    mapD[0][a][bar]=true
                }
            }
        }
        for(let a=0,la=mapDimensions[1];a<la;a++){
            for(let b=0,lb=mapDimensions[0];b<lb;b++){
                if(mapD[a][b].length==0){
                    mapD[a][b]=[false,false,false,false,false]
                }
            }
        }
        for(let c=0,lc=game.players;c<lc;c++){
            if(game.hunt==-1){
                entities.players.push(new player(layer,c%2==0?255:game.edge[0]-255,c%2<=1?705:game.edge[1]-255,c+1,0,[],true,0,game.index))
            }else{
                entities.players.push(new player(layer,game.edge[0]/2-200+c*20,900,c+1,0,[],true,0,game.index))
            }
            game.index++
            entities.players[entities.players.length-1].weaponType=-1
        }
        for(let c=0,lc=mapDimensions[1];c<lc;c++){
            for(let d=0,ld=mapDimensions[0];d<ld;d++){
                let level=rooms[floor(random(1,rooms.length))]
                while(
                    ((level[0][0]=='3'||level[0][0]=='4'||level[0][0]=='5')&&c<lc-1&&(mapD[c+1][d][1]||mapD[c+1][d][2]))||
                    ((level[0][0]=='4')&&(d>0&&mapD[c][d-1][3]||d<ld-1&&mapD[c][d+1][4]))||
                    ((level[0][0]=='5')&&c>0&&mapD[c-1][d][0])
                ){
                    level=rooms[floor(random(1,rooms.length))]
                }
                if((c==0||c==lc-1)&&(d==0||d==ld-1)&&game.hunt==-1){
                    level=rooms[0]
                }
                let reject=[]
                let flip=floor(random(0,2))
                if(!(c==0&&d>=(mapDimensions[0]-3)/2&&d<=(mapDimensions[0]+1)/2)){
                    if(floor(random(0,3))==0){
                        entities.walls[1].push(new wall(graphics.main,game.tileset[0]/2+(1.5+d*16)*game.tileset[0],game.tileset[1]/2+(1.5+c*16+offset)*game.tileset[1],game.tileset[0],game.tileset[1],22))
                    }
                    for(let a=0,la=level.length-(c==lc-1?0:1);a<la;a++){
                        for(let b=0,lb=level[a].length-(d==ld-1||d==(mapDimensions[0]-5)/2&&c==0?0:1);b<lb;b++){
                            let effectiveB=flip==0?b:b==0||b==16?b:16-b
                            switch(level[a][b]){
                                case '#': case '3': case '4': case '5':
                                    if(!reject.includes(a*lb+b)&&!(b==0&&a>=13&&a<=15&&mapD[c][d][3])&&!(a==0&&b>=4&&b<=6&&mapD[c][d][1])&&!(a==0&&b>=10&&b<=12&&mapD[c][d][2])){
                                        let extent=0
                                        for(let e=1,le=level[b].length-a-(c==lc-1?0:1);e<le;e++){
                                            if(level[a][b_e]=='#'&&!(b==0&&a+e>=13&&a+e<=15&&mapD[c][d][3])){
                                                reject.push((a+e)*lb+b)
                                                extent++
                                            }else{
                                                e=le
                                            }
                                        }
                                        entities.walls[1].push(new wall(graphics.main,game.tileset[0]/2+(effectiveB+d*16)*game.tileset[0],game.tileset[1]/2+(a+c*16+offset+extent/2)*game.tileset[1],game.tileset[0],game.tileset[1]*(1+extent),1))
                                    }
                                break
                                case '@':
                                    entities.walls[1].push(new wall(graphics.main,game.tileset[0]/2+(effectiveB+d*16)*game.tileset[0],game.tileset[1]/2+(a+c*16+offset)*game.tileset[1],game.tileset[0],game.tileset[1],2))
                                break
                                case '!':
                                    entities.walls[1].push(new wall(graphics.main,game.tileset[0]/2+(effectiveB+d*16)*game.tileset[0],game.tileset[1]/2+(a+c*16+offset+0.2)*game.tileset[1],game.tileset[0],game.tileset[1],3))
                                break
                                case '$':
                                    entities.walls[1].push(new wall(graphics.main,game.tileset[0]/2+(effectiveB+d*16)*game.tileset[0],game.tileset[1]/2+(a+c*16+offset+0.4)*game.tileset[1],game.tileset[0]*0.5,game.tileset[1]*0.2,5))
                                break
                                case '>':
                                    entities.walls[1].push(new wall(graphics.main,game.tileset[0]/2+(effectiveB+d*16)*game.tileset[0],game.tileset[1]/2+(a+c*16+offset)*game.tileset[1],game.tileset[0],game.tileset[1],17+flip))
                                break
                                case '<':
                                    entities.walls[1].push(new wall(graphics.main,game.tileset[0]/2+(effectiveB+d*16)*game.tileset[0],game.tileset[1]/2+(a+c*16+offset)*game.tileset[1],game.tileset[0],game.tileset[1],18-flip))
                                break
                                case '[':
                                    entities.walls[1].push(new wall(graphics.pane[1],game.tileset[0]/2+(effectiveB+d*16)*game.tileset[0],game.tileset[1]/2+(a+c*16+offset)*game.tileset[1],game.tileset[0],game.tileset[1],20+flip))
                                break
                                case ']':
                                    entities.walls[1].push(new wall(graphics.pane[1],game.tileset[0]/2+(effectiveB+d*16)*game.tileset[0],game.tileset[1]/2+(a+c*16+offset)*game.tileset[1],game.tileset[0],game.tileset[1],21-flip))
                                break
                                case '/':
                                    entities.walls[1].push(new wall(graphics.pane[1],game.tileset[0]/2+(effectiveB+d*16)*game.tileset[0],game.tileset[1]/2+(a+c*16+offset-0.5)*game.tileset[1],game.tileset[0],game.tileset[1]*2,18))
                                break
                                case ':':
                                    drops.push([game.tileset[0]/2+(effectiveB+d*16)*game.tileset[0],game.tileset[1]/2+(a+c*16+offset)*game.tileset[1]])
                                break
                                case ';':
                                    spawns.push([game.tileset[0]/2+(effectiveB+d*16)*game.tileset[0],game.tileset[1]/2+(a+c*16+offset)*game.tileset[1]])
                                break
                                case ')':
                                    entities.walls[1].push(new wall(graphics.main,game.tileset[0]/2+(effectiveB+d*16)*game.tileset[0],game.tileset[1]/2+(a+c*16+offset)*game.tileset[1],game.tileset[0]*0.6,game.tileset[1]*0.6,16))
                                break
                            }
                        }
                    }
                }
            }
        }
        extra=drops.length-(game.hunt>0?1:game.gaming)*(game.diff==0?10:7)
        if(extra>0){
            for(let a=0,la=extra*(1-(0.225+0.15*(game.hunt>0?1:game.gaming))*(game.diff==0?1.3:1));a<la;a++){
                drops.splice(floor(random(0,drops.length)),1)
            }
        }
        for(let a=0,la=(1+(game.hunt>0?1:game.gaming))*(game.diff==0?10:7);a<la;a++){
            if(drops.length>0){
                let index=floor(random(0,drops.length))
                for(let b=0,lb=[1,1,1,2,2,3,4,1,2,3][a%(game.diff==0?10:7)];b<lb;b++){
                    entities.walls[1].push(new wall(graphics.main,drops[index][0]+10-lb*10+b*20,drops[index][1],game.tileset[1]*0.4,game.tileset[1]*0.4,19))
                }
                drops.splice(index,1)
            }
        }
        while(drops.length>0){
            let index=0
            entities.walls[1].push(new wall(graphics.main,drops[index][0],drops[index][1],game.tileset[1]*0.6,game.tileset[1]*0.6,[8,9,16,16][floor(random(0,4))]))
            drops.splice(index,1)
        }
        for(let a=0,la=min(spawns.length,game.diff==3?30:20);a<la;a++){
            if(spawns.length>0){
                let index=floor(random(0,spawns.length))
                let waves=types.mission[floor(random(0,types.mission.length))].wave
                let wave=waves[floor(random(0,waves.length))]
                let named=wave[floor(random(0,wave.length))][0]
                while(named.includes('Boss')){
                    index=floor(random(0,spawns.length))
                    waves=types.mission[floor(random(0,types.mission.length))].wave
                    wave=waves[floor(random(0,waves.length))]
                    named=wave[floor(random(0,wave.length))][0]
                }
                entities.players.push(new player(layer,spawns[index][0],spawns[index][1],0,0,[],true,findName(named,types.player),game.index))
                game.index++
                spawns.splice(index,1)
            }
        }
    }else{
        game.edge=[game.tileset[0]*level[level.length-1].length,game.tileset[1]*level.length]
        game.storm=game.edge[0]
        game.center=random(0,game.edge[0])
        let index=0
        let extent=0
        for(let a=0,la=level.length;a<la;a++){
            for(let b=0,lb=level[a].length;b<lb;b++){
                switch(level[a][b]){
                    case '#':
                        extent=0
                        while(level[a][b+1]=='#'){
                            extent++
                            b++
                        }
                        entities.walls[1].push(new wall(graphics.main,game.tileset[0]/2+(b-extent/2)*game.tileset[0],game.tileset[1]/2+a*game.tileset[1],game.tileset[0]*(1+extent),game.tileset[1],1))
                    break
                    case 'm':
                        extent=0
                        while(level[a][b+1]=='m'){
                            extent++
                            b++
                        }
                        entities.walls[1].push(new wall(graphics.main,game.tileset[0]/2+(b-extent/2)*game.tileset[0],game.tileset[1]/2+a*game.tileset[1],game.tileset[0]*(1+extent),game.tileset[1],23))
                    break
                    case 'n':
                        extent=0
                        while(level[a][b+1]=='n'){
                            extent++
                            b++
                        }
                        entities.walls[1].push(new wall(graphics.main,game.tileset[0]/2+(b-extent/2)*game.tileset[0],game.tileset[1]/2+a*game.tileset[1],game.tileset[0]*(1+extent),game.tileset[1],24))
                    break
                    case '@':
                        entities.walls[1].push(new wall(graphics.main,game.tileset[0]/2+b*game.tileset[0],game.tileset[1]/2+a*game.tileset[1],game.tileset[0],game.tileset[1],2))
                    break
                    case '!':
                        if(level[a-1][b]=='!'||level[a-1][b]=='#'||level[a-1][b]=='p'){
                            entities.walls[0].push(new wall(graphics.main,game.tileset[0]/2+b*game.tileset[0],game.tileset[1]/2+a*game.tileset[1],game.tileset[0],game.tileset[1],3))
                        }else{
                            entities.walls[0].push(new wall(graphics.main,game.tileset[0]/2+b*game.tileset[0],game.tileset[1]/2+(a+0.1)*game.tileset[1],game.tileset[0],game.tileset[1]*0.8,3))
                        }
                    break
                    case '%':
                        entities.walls[1].push(new wall(graphics.main,game.tileset[0]/2+b*game.tileset[0],game.tileset[1]/2+a*game.tileset[1],game.tileset[0],game.tileset[1],4))
                    break
                    case '$':
                        entities.walls[1].push(new wall(graphics.main,game.tileset[0]/2+b*game.tileset[0],game.tileset[1]/2+(a+0.4)*game.tileset[1],game.tileset[0]*0.5,game.tileset[1]*0.2,5))
                    break
                    case '|':
                        entities.walls[1].push(new wall(graphics.main,game.tileset[0]/2+b*game.tileset[0],game.tileset[1]/2+a*game.tileset[1],game.tileset[0]*0.15,game.tileset[1],7))
                    break
                    case '^':
                        entities.walls[1].push(new wall(graphics.main,game.tileset[0]/2+b*game.tileset[0],game.tileset[1]/2+a*game.tileset[1],game.tileset[1]*0.6,game.tileset[1]*0.6,8))
                    break
                    case '*':
                        entities.walls[1].push(new wall(graphics.main,game.tileset[0]/2+b*game.tileset[0],game.tileset[1]/2+a*game.tileset[1],game.tileset[1]*0.6,game.tileset[1]*0.6,9))
                    break
                    case '_':
                        entities.walls[1].push(new wall(graphics.main,game.tileset[0]/2+b*game.tileset[0],game.tileset[1]/2+(a+0.7)*game.tileset[1],game.tileset[1],game.tileset[1]*0.4,1))
                    break
                    case '-':
                        entities.walls[1].push(new wall(graphics.main,game.tileset[0]/2+b*game.tileset[0],game.tileset[1]/2+(a+0.25)*game.tileset[1],game.tileset[0],game.tileset[1]*0.5,11))
                    break
                    case '&':
                        entities.walls[1].push(new wall(graphics.main,game.tileset[0]/2+b*game.tileset[0],game.tileset[1]/2+a*game.tileset[1],game.tileset[1]*0.6,game.tileset[1]*0.6,12))
                    break
                    case '+':
                        entities.walls[1].push(new wall(graphics.main,game.tileset[0]/2+b*game.tileset[0],game.tileset[1]/2+a*game.tileset[1],game.tileset[0]*0.15,game.tileset[1],7))
                        entities.walls[1].push(new wall(graphics.main,game.tileset[0]/2+b*game.tileset[0],game.tileset[1]/2+(a+0.25)*game.tileset[1],game.tileset[0],game.tileset[1]*0.5,11))
                    break
                    case '`':
                        entities.walls[1].push(new wall(graphics.main,game.tileset[0]/2+b*game.tileset[0],game.tileset[1]/2+a*game.tileset[1],game.tileset[0],game.tileset[1],13))
                    break
                    case '=':
                        entities.walls[1].push(new wall(graphics.main,game.tileset[0]/2+b*game.tileset[0],game.tileset[1]/2+(a+0.5)*game.tileset[1],game.tileset[1]*1.2,game.tileset[1]*2,14))
                    break
                    case '~':
                        entities.walls[1].push(new wall(graphics.main,game.tileset[0]/2+b*game.tileset[0],game.tileset[1]/2+a*game.tileset[1],game.tileset[0],game.tileset[1],15))
                    break
                    case '?':
                        entities.walls[1].push(new wall(graphics.main,game.tileset[0]/2+b*game.tileset[0],game.tileset[1]/2+a*game.tileset[1],game.tileset[1]*0.6,game.tileset[1]*0.6,[8,9,12,16,16][floor(random(0,5))]))
                    break
                    case '>':
                        entities.walls[1].push(new wall(graphics.main,game.tileset[0]/2+b*game.tileset[0],game.tileset[1]/2+a*game.tileset[1],game.tileset[0],game.tileset[1],17))
                    break
                    case '<':
                        entities.walls[1].push(new wall(graphics.main,game.tileset[0]/2+b*game.tileset[0],game.tileset[1]/2+a*game.tileset[1],game.tileset[0],game.tileset[1],18))
                    break
                    case '[':
                        entities.walls[1].push(new wall(graphics.pane[1],game.tileset[0]/2+b*game.tileset[0],game.tileset[1]/2+a*game.tileset[1],game.tileset[0],game.tileset[1],20))
                    break
                    case ']':
                        entities.walls[1].push(new wall(graphics.pane[1],game.tileset[0]/2+b*game.tileset[0],game.tileset[1]/2+a*game.tileset[1],game.tileset[0],game.tileset[1],21))
                    break
                    case '/':
                        entities.walls[1].push(new wall(graphics.pane[1],game.tileset[0]/2+b*game.tileset[0],game.tileset[1]/2+(a-0.5)*game.tileset[1],game.tileset[0],game.tileset[1]*2,17))
                    break
                    case '(':
                        entities.walls[1].push(new wall(graphics.pane[1],game.tileset[0]/2+b*game.tileset[0],game.tileset[1]/2+(a-0.5)*game.tileset[1],game.tileset[0],game.tileset[1]*2,18))
                    break
                }
            }
        }
        let weapon=game.randomizer?floor(random(18,types.player.length)):floor(random(0,9))+floor(random(0,1.2))*9
        for(let c=0,lc=game.players;c<lc;c++){
            index--
            entities.players.push(new player(layer,game.edge[0]*random(0,1),50,c+1,0,[],true,0,index))
            entities.players[entities.players.length-1].parachute=true
            entities.players[entities.players.length-1].weaponType=-1
        }
    }
    //entities.walls[0].forEach(wall=>wall.display())
    entities.walls.forEach(set=>set.forEach(item=>item.checkHorizontal()))
    entities.walls[0]=entities.walls[0].filter(item=>!item.remove)
    entities.walls[1]=entities.walls[1].filter(item=>!item.remove)
    entities.walls.forEach(set=>set.forEach(item=>item.checkVertical()))
    entities.walls[0]=entities.walls[0].filter(item=>!item.remove)
    entities.walls[1]=entities.walls[1].filter(item=>!item.remove)
    entities.walls.forEach(set=>set.forEach(item=>item.formBoundary()))
    entities.walls.forEach(set=>set.forEach(item=>item.checkRedundancy()))
    entities.walls.forEach(set=>set.forEach(item=>item.checkOverlay()))
    entities.walls.forEach(set=>set.forEach(item=>item.checkGap()))
    entities.walls.forEach(set=>set.forEach(item=>item.set()))
    entities.walls.forEach(set=>set.forEach(item=>item.checkBar()))
    entities.walls.forEach(set=>set.forEach(item=>item.formBounder()))
    run.back=[entities.players]
    run.fore=[entities.walls[0],entities.projectiles,entities.players,entities.walls[1]]
    run.update=[entities.players,entities.walls[0],entities.walls[1],entities.projectiles]
    run.info=[entities.players]
    if(game.level==6){
        for(let a=0,la=graphics.pane[0].width/25;a<la;a++){
            for(let b=0,lb=graphics.pane[0].height/25-20;b<lb;b++){
                effectiveA=(a*7+b*3)%la
                let pos=[effectiveA*25+random(0,25),b*25+500+sin(effectiveA*30+random(-15,15))*100+sin(effectiveA*8.5+random(-10,10))*50]
                let size=random(45,60)
                let bounce=random(0,1)
                graphics.pane[0].fill(
                    10+pos[1]/graphics.pane[0].height*10+bounce*20,
                    20-pos[1]/graphics.pane[0].height*5+bounce*20,
                    10+bounce*20
                )
                regPoly(graphics.pane[0],pos[0],pos[1],floor(random(4,9)),size/2,size/2,random(0,360))
            }
        }
    }
}
function kill(){
    for(let a=0,la=entities.players.length;a<la;a++){
        if(entities.players[a].id==0){
            entities.players[a].life=0
        }
    }
}
function newLoop(){
    for(let a=0,la=entities.players.length;a<la;a++){
        entities.players[a].selector=0
        entities.players[a].control=1
        entities.players[a].respawn()
    }
    generateLevel(levels[game.level],graphics.main[0])
}
function newWave(level,layer){
    if(display.cycle>=types.mission[game.mission].wave.length){
        display.win=1
        display.wait=999999999999999999999
        game.classicRespawn=true
        game.pvp=true
    }else{
        if(game.level==8){
            entities.walls[1].forEach(wall=>wall.exploded=false)
        }
        display.anim=1
        game.sendTime=0
        game.index=0
        for(let a=0,la=types.mission[game.mission].wave[display.cycle].length;a<la;a++){
            if(types.mission[game.mission].wave[display.cycle][a][1]==1){
                game.stack.push([floor(random(0,6))+((types.mission[game.mission].wave[display.cycle][a][0]=='Spy'||types.mission[game.mission].wave[display.cycle][a][0]=='SpyHealSelf'||types.mission[game.mission].wave[display.cycle][a][0]=='RapidSpy')?0:6),types.mission[game.mission].wave[display.cycle][a][0]])
            }else{
                for(let b=0,lb=ceil(types.mission[game.mission].wave[display.cycle][a][1]*constrain(game.players/2,0,1)*(game.classicRespawn?0.5:1)*(game.level==8?1.5:1))*game.diff;b<lb;b++){
                    game.stack.push([floor(random(0,6))+((types.mission[game.mission].wave[display.cycle][a][0]=='Spy'||types.mission[game.mission].wave[display.cycle][a][0]=='SpyHealSelf'||types.mission[game.mission].wave[display.cycle][a][0]=='RapidSpy')?0:6),types.mission[game.mission].wave[display.cycle][a][0]])
                }
            }
        }
        display.cycle++
    }
}
function findName(name,list){
	for(let a=0,la=list.length;a<la;a++){
		if(list[a].name==name){
			return a
		}
	}
	return -1
}
function runTransition(layer){
    if(transition.trigger){
        transition.anim+=0.05
        if(transition.anim>=1){
            transition.trigger=false
            stage.scene=transition.scene
            newLoop()
        }
    }else if(transition.anim>0){
        transition.anim-=0.05
    }
    if(transition.anim>0){
        layer.fill(0)
        layer.rect(layer.width/2,layer.height/4*transition.anim,layer.width,layer.height*transition.anim/2)
        layer.rect(layer.width/2,layer.height*(1-1/4*transition.anim),layer.width,layer.height*transition.anim/2)
        layer.rect(layer.width/4*transition.anim,layer.height/2,layer.width/2*transition.anim,layer.height*(1-transition.anim))
        layer.rect(layer.width*(1-1/4*transition.anim),layer.height/2,layer.width/2*transition.anim,layer.height*(1-transition.anim))
    }
}
function checkEnd(level,layer){
    if(game.past){
        if(!transition.trigger){
            let ids=[]
            for(let a=0,la=entities.players.length;a<la;a++){
                if(!ids.includes(entities.players[a].id)&&entities.players[a].life>0){
                    ids.push(entities.players[a].id)
                }
            }
            if(ids.length<=1){
                if(ids.length==1){
                    game.wins[ids[0]-1]++
                }
                transition.scene='main'
                transition.trigger=true
            }
        }
    }else{
        if(game.level==8){
            if(deployer.spawn.length>=5&&deployer.timer<=0){
                for(let a=0,la=level.length;a<la;a++){
                    for(let b=0,lb=level[a].length;b<lb;b++){
                        if(level[a][b]=='A'){
                            entities.walls[1].push(new wall(graphics.main[0],game.tileset[0]/2+(b-7)*game.tileset[0],game.tileset[1]/2+(a+1.7)*game.tileset[1],game.tileset[0],game.tileset[1]*0.4,6))
                            entities.walls[1].push(new wall(graphics.main[0],game.tileset[0]/2+(b-3)*game.tileset[0],game.tileset[1]/2+(a+1.7)*game.tileset[1],game.tileset[0],game.tileset[1]*0.4,6))
                            entities.walls[1].push(new wall(graphics.main[0],game.tileset[0]/2+(b-5)*game.tileset[0],game.tileset[1]/2+(a+2.4)*game.tileset[1],game.tileset[0]*5,game.tileset[1],6))
                            entities.walls[1][entities.walls[1].length-1].checkGap()
                            entities.walls[1][entities.walls[1].length-2].checkGap()
                            entities.walls[1][entities.walls[1].length-3].checkGap()
                            entities.walls[1][entities.walls[1].length-1].checkBar()
                            entities.walls[1][entities.walls[1].length-2].checkBar()
                            entities.walls[1][entities.walls[1].length-3].checkBar()
                            let tick=0
                            for(let c=0,lc=5;c<lc;c++){
                                entities.players.push(deployer.spawn[c])
                                entities.players[entities.players.length-1].position.x=game.tileset[0]/2+(b-5)*game.tileset[0]-50+tick*25
                                entities.players[entities.players.length-1].position.y=game.tileset[1]/2+(a+1.8)*game.tileset[1]-50
                                entities.players[entities.players.length-1].disable=true
                                entities.walls[1][entities.walls[1].length-3].carry.push(entities.players[entities.players.length-1])
                                tick++
                                deployer.spawn.splice(c,1)
                                c--
                                lc--
                            }
                            deployer.timer=300
                        }
                    }
                }
            }
            if(deployer.timer>0){
                deployer.timer--
            }
        }
        if(game.level==9){
        }else if(game.stack.length>0){
            if(game.sendTime>0){
                game.sendTime--
            }else{
                for(let a=0,la=level.length;a<la;a++){
                    for(let b=0,lb=level[a].length;b<lb;b++){
                        if(level[a][b]=='123456ABCDEF'[game.stack[0][0]]){
                            if(a>5&&game.stack[0][0]>=6&&game.level==8){
                                deployer.spawn.push(new player(layer,game.tileset[0]/2+b*game.tileset[0]+random(-20,20),game.tileset[1]/2+a*game.tileset[1]+random(-20,20),0,0,[],true,findName(game.stack[0][1],types.player),game.index))
                            }else{
                                entities.players.push(new player(layer,game.tileset[0]/2+b*game.tileset[0]+random(-20,20),game.tileset[1]/2+a*game.tileset[1]+random(-20,20),0,0,[],true,findName(game.stack[0][1],types.player),game.index))
                                if(game.level==8){
                                    entities.players[entities.players.length-1].position.x=[entities.players[floor(random(0,game.players))].position.x+random(-30,30),layer.width*0.6][floor(random(0,2))]
                                    entities.players[entities.players.length-1].position.y=1000
                                    entities.players[entities.players.length-1].parachute=true
                                }
                                game.index++
                            }
                        }
                    }
                }
                game.sendTime=types.mission[game.mission].sendTime*4/max(1,game.gaming)*(game.pvp?10:1)/game.diff
                game.stack.splice(0,1)
            }
        }else{
            let total=0
            let subTotal=0
            for(let a=0,la=entities.players.length;a<la;a++){
                if(entities.players[a].id==0&&entities.players[a].life>0){
                    total++
                }
                if(entities.players[a].id==0&&entities.players[a].base.life>2000){
                    subTotal++
                }
            }
            if(total<4&&subTotal==0&&!(display.cycle==types.mission[game.mission].wave.length&&total>0)){
                display.wait--
                if(display.wait<=0){
                    display.wait=240
                    newWave(level,layer)
                }
            }
        }
    }
}
function setupGraphics(){
    setupBase()
}
function initialGraphics(){
    switch(game.level){
        case 1:
            graphics.main.push(createGraphics(1700,750))
        break
        case 5:
            graphics.main.push(createGraphics(3000,1300))
        break
        case 6: case 7: case 8:
            if(game.gaming==1){
                graphics.main.push(createGraphics(width,height))
            }else if(game.gaming==2){
                graphics.main.push(createGraphics(width/2,height))
                graphics.main.push(createGraphics(width/2,height))
            }else{
                graphics.main.push(createGraphics(width/2,height/2))
                graphics.main.push(createGraphics(width/2,height/2))
                graphics.main.push(createGraphics(width/2,height/2))
                if(game.gaming==4){
                    graphics.main.push(createGraphics(width/2,height/2))
                }
            }
        break
        case 9:
            if(game.gaming==1){
                graphics.main.push(createGraphics(width,height))
            }else if(game.gaming==2){
                graphics.main.push(createGraphics(width/2,height))
                graphics.main.push(createGraphics(width/2,height))
            }else{
                graphics.main.push(createGraphics(width/2,height/2))
                graphics.main.push(createGraphics(width/2,height/2))
                graphics.main.push(createGraphics(width/2,height/2))
                if(game.gaming==4){
                    graphics.main.push(createGraphics(width/2,height/2))
                }
            }
        break
        case 11:
            if(game.gaming==1){
                graphics.main.push(createGraphics(width,height))
                graphics.over.push(createGraphics(width,height))
            }else if(game.gaming==2){
                graphics.main.push(createGraphics(width/2,height))
                graphics.main.push(createGraphics(width/2,height))
                graphics.over.push(createGraphics(width/2,height))
                graphics.over.push(createGraphics(width/2,height))
            }else{
                graphics.main.push(createGraphics(width/2,height/2))
                graphics.main.push(createGraphics(width/2,height/2))
                graphics.main.push(createGraphics(width/2,height/2))
                if(game.gaming==4){
                    graphics.main.push(createGraphics(width/2,height/2))
                }
                graphics.over.push(createGraphics(width/2,height/2))
                graphics.over.push(createGraphics(width/2,height/2))
                graphics.over.push(createGraphics(width/2,height/2))
                if(game.gaming==4){
                    graphics.over.push(createGraphics(width/2,height/2))
                }
            }
        break
        default:
            graphics.main.push(createGraphics(2500,1600))
        break
    }
    //graphics.main.push(createGraphics(1200,800))

    //graphics.main.push(createGraphics(2000,800))
    //
    //graphics.main.push(createGraphics(4500,1800))
    for(let a=0,la=graphics.main.length;a<la;a++){
        setupLayer(graphics.main[a])
        graphics.main[a].index=a
    }
} 