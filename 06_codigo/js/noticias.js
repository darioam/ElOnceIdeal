
let botones = document.querySelectorAll(".link-paragraph a");

function crearFigure(srcImg, titular) {
    /*return document.createElement("<figure>" +
        "<img src=\""+ srcImg + "\"/>" +
        "<figcaption>"+ titular + "</figcaption>"+
        "</figure>");*/
    let figura = document.createElement("figure");
    figura.innerHTML=
        "<img src=\""+ srcImg + "\"/>" +
        "<figcaption>"+ titular + "</figcaption>";
    figura.style="";
    return figura;
}

let evento = function(b) {
        let id = this.getAttribute("data-id");
        let seccion = document.getElementById(id);
        
        let div = document.createElement("div");
        div.style.display = "none";

        div.appendChild(crearFigure("./../Imagenes/proxy_image.jpg", "Titulo impresionante"));
        div.appendChild(crearFigure("./../Imagenes/proxy_image.jpg", "Titulo impresionante"));
        div.appendChild(crearFigure("./../Imagenes/proxy_image.jpg", "Titulo impresionante"));
        div.appendChild(crearFigure("./../Imagenes/proxy_image.jpg", "Titulo impresionante"));
        console.log("aa");
        seccion.insertBefore(div, seccion.querySelector("p"));

        $(div).slideDown(500);    

        console.log(div.innerHTML);
}

let addListener = b => b.addEventListener("click", evento);

botones.forEach(addListener);