/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


/*======= pulsar search =======*/
var btn = document.getElementById('icon'),
    caja = document.getElementById('input'),
    contador=0;

    function cambio()
    {
        if(contador==0){
            caja.classList.add('ocultar');
            contador=1;
        }

        else
        {
            caja.classList.remove('ocultar');
        contador=0;}
    }

    btn.addEventListener('click',cambio,true)


    /*========== POPUP ===========*/

    document.getElementById("button-up").addEventListener("click", scrollUp)


function scrollUp(){
    var currentScroll = document.documentElement.scrollTop;
    if (currentScroll > 0){
        window.requestAnimationFrame(scrollUp);
        window.scrollTo (0, currentScroll - (currentScroll / 10));
        buttonUp.style.transform = "scale(0)";
    }

}

    buttonUp = document.getElementById("button-up");

    window.onscroll = function(){

        var scroll = document.documentElement.scrollTop;

        if (scroll > 300){
            buttonUp.style.transform = "scale(1)";
        }else if(scroll < 500){
            buttonUp.style.transform = "scale(0)"
        }

    }

