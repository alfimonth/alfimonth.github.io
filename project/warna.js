// const warna = document.getElementById('warna');
// warna.value = "#ffffff";


// document.querySelector(".tombol").addEventListener("click", function aa() {
//     const warna = document.getElementById('warna');
//     console.log(warna.value)
//     document.body.style.backgroundColor=warna.value
// })



const warnabg = document.getElementById("bg-color");
warnabg.value = "#ffffff";

const setbg = document.getElementById("setbg");
setbg.addEventListener("click",function setbg(){
    document.body.style.backgroundColor = warnabg.value
})
