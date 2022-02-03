

const ob = document.querySelectorAll('.ob');
console.log(ob)


for(let i = 0; i < ob.length; i++){
    const awX = ob[i].getBoundingClientRect().left ;
    const awY = ob[i].getBoundingClientRect().top ;
    ob[i].addEventListener('touchstart',md)
    function md(e){
        ob[i].style.cursor = 'pointer';
        const prevX = e.clientX;
        const prevY = e.clientY;
        const prevleft = ob[i].getBoundingClientRect().left -awX;
        const prevtop = ob[i].getBoundingClientRect().top -awY ;
        console.log(prevtop)
        
        window.addEventListener('touchmove',mm)
        window.addEventListener('touchend',mu)
        function mm(e){
    
            const newX = e.clientX;
            const newY = e.clientY;
            
            ob[i].style.top = prevtop + (newY - prevY) + 'px';
            ob[i].style.left = prevleft + (newX - prevX) + 'px';
            
            
        }
    
        function mu(){
            window.removeEventListener("touchmove", mm)
            window.removeEventListener("touchend", mu)
        }
    
    }
}
