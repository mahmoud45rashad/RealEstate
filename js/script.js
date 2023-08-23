let header = document.querySelector(".header"); 
window.onscroll = function () {
    console.log(this.scrollY);

    if (this.scrollY >= 72){
        header.classList.add("sticky");
    }else if (this.scrollY < 36.3636360168457){
        header.classList.remove("sticky");
    }


};