


const con = document.querySelector('.con');


    /*
    const awX = ob[i].getBoundingClientRect().left ;
    const awY = ob[i].getBoundingClientRect().top ; 
    ob[i].addEventListener('mousedown',md)
    function md(e){
        ob[i].style.cursor = 'pointer';
        const prevX = e.clientX;
        const prevY = e.clientY;
        const prevleft = ob[i].getBoundingClientRect().left -awX;
        const prevtop = ob[i].getBoundingClientRect().top -awY ;
        console.log(prevtop)
        
        window.addEventListener('mousemove',mm)
        window.addEventListener('mouseup',mu)
        function mm(e){
    
            const newX = e.clientX;
            const newY = e.clientY;
            
            ob[i].style.top = prevtop + (newY - prevY) + 'px';
            ob[i].style.left = prevleft + (newX - prevX) + 'px';
            
            
        }
    
        function mu(){
            window.removeEventListener("mousemove", mm)
            window.removeEventListener("mouseup", mu)
        }
    
    }
} 



*/
/*
con.addEventListener('mousedown',function(e){
    if(e.target.className == 'ob' ){
        const ob = e.target;
        ob.style.backgroundColor = 'red';
        const stl = getComputedStyle(ob);
        const prevleft = stl.left;
        const prevtop = stl.top ; 
        const prevX = e.clientX;
        const prevY = e.clientY;

        window.addEventListener('mousemove',mm)
        function mm(e){
    
            const newX = e.clientX;
            const newY = e.clientY;
            
            ob.style.top = parseInt(prevtop) + (newY - prevY) + 'px';
            ob.style.left = parseInt(prevleft) + (newX - prevX) + 'px';
            
            
        }

        window.addEventListener('mouseup',mu)
        function mu(){
            window.removeEventListener("mousemove", mm)
            window.removeEventListener("mouseup", mu)
        }
    }
});


// on dblclick
con.addEventListener('dblclick',function(e){
    if(e.target.className == 'ob' ){
        const ob = e.target;
        const stl = getComputedStyle(ob);
        const prevleft = stl.left;
        const prevtop = stl.top ; 
        const prevX = e.clientX;
        const prevY = e.clientY;

        window.addEventListener('mousemove',mm)
        function mm(e){
    
            const newX = e.clientX;
            const newY = e.clientY;
            
            ob.style.top = parseInt(prevtop) + (newY - prevY) + 'px';
            ob.style.left = parseInt(prevleft) + (newX - prevX) + 'px';
            
            
        }

        window.addEventListener('click',mu)
        function mu(){
            window.removeEventListener("mousemove", mm)
            window.removeEventListener("click", mu)
        }
    }
});

con.addEventListener('dblclick',function(e){
    if(e.target.className == 'ob' ){
        const ob = e.target;
        const stl = getComputedStyle(ob);
        const prevleft = stl.left;
        const prevtop = stl.top ; 
        const prevX = e.clientX;
        const prevY = e.clientY;

        window.addEventListener('mousemove',mm)
        function mm(e){
    
            const newX = e.clientX;
            const newY = e.clientY;
            
            ob.style.top = parseInt(prevtop) + (newY - prevY) + 'px';
            ob.style.left = parseInt(prevleft) + (newX - prevX) + 'px';
            
            
        }

        window.addEventListener('click',mu)
        function mu(){
            window.removeEventListener("mousemove", mm)
            window.removeEventListener("click", mu)
        }
    }
});
*/


con.addEventListener('dblclick',function(e){
    posisi('mousemove','click',e);
});
con.addEventListener('mousedown',function(e){
    posisi('mousemove','mouseup',e);
});
con.addEventListener('touchstart',function(e){
    posisi('touchmove','touchend',e);
});

function posisi(drag,end,e){
    if(e.target.className == 'ob' ){
        const ob = e.target;
        ob.style.backgroundColor = "red";
        const stl = getComputedStyle(ob);
        const prevleft = stl.left;
        const prevtop = stl.top ; 
        const prevX = e.clientX || e.targetTouches[0].pageX;
        const prevY = e.clientY || e.targetTouches[0].pageY;

        window.addEventListener(drag,mm)
        function mm(e){
    
            const newX = e.clientX;
            const newY = e.clientY;
            
            ob.style.top = parseInt(prevtop) + (newY - prevY) + 'px';
            ob.style.left = parseInt(prevleft) + (newX - prevX) + 'px';
            
            
        }

        window.addEventListener(end,mu)
        function mu(){
            ob.style.backgroundColor = "white";
            window.removeEventListener(drag, mm)
            window.removeEventListener(end, mu)
        }
    }
}



