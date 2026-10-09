let left_btn = document.getElementById("left-btn");
let right_btn = document.getElementById("right_btn");
let animaciones = [];

function incluirAnimacion(element) {
    animaciones.push(
        new Promise(resolve => {
          const onTransitionEnd = () => {
            element.removeEventListener('transitionend', onTransitionEnd);
            resolve();
          };
          element.addEventListener('transitionend', onTransitionEnd);
        })
      );
  }

/* Falta el cambio de fechas */
/* Desactivar botones durante animacion */
let evento = function(direccion) {
    let carrusel = document.getElementById("carrusel_fechas");
    let lista = carrusel.querySelectorAll("li");
    let central = lista.item(lista.length/2);
    

    let oldSpanText = central.getElementsByTagName("span")[0].textContent;
    central.lastElementChild.innerHTML = oldSpanText;

    lista.forEach(element => {
        let w = element.clientWidth;
        
        element.style.transition = "1s";
        element.style.transform = "translateX("+(direccion*w)+"px)";
        
        incluirAnimacion(element);
    });

    Promise.all(animaciones).finally(()=> {
        animaciones = [];
        let proximoCentral
        if(direccion>0){
            proximoCentral = lista.item(lista.length/2 - 1);
            let li = $("#carrusel_fechas li").last().detach();
            $("#carrusel_fechas ol").prepend(li);
        } else {
            proximoCentral = lista.item(lista.length/2 + 1);
            let li = $("#carrusel_fechas li").first().detach();
            $("#carrusel_fechas ol").append(li);
        }
        let text = proximoCentral.lastElementChild.textContent;
        proximoCentral.lastElementChild.innerHTML= "<span class=\"seleccionado\">"+text+"</span>"

        lista.forEach(element => {
            let w = element.clientWidth;
            element.style.transition = "0s";
            element.style.transform = "translateX(0px)";
            
            
        });
        
    });

    
}


left_btn.addEventListener("click", () => evento(-1));
right_btn.addEventListener("click", () => evento(1))