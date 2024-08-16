function produto_checkout(id, novoHref) {
    var divElementos = document.querySelectorAll(`#${id}`)
    divElementos.forEach(function(elem){
        const link = elem.querySelector('a');
        if(!link) return
        link.href = novoHref;
    });
}

function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
function page_figen_pdv(link_desktop,link_mobile){
    var elementosHref = document.querySelectorAll('a[href="#kitfigenfinal"]')
    elementosHref.forEach(function(elemento) {
        var eventoExistente = elemento.onclick;
        if (isMobileDevice()) {
            elemento.href= link_mobile;
        } else {
            elemento.href = link_desktop;
        }
        elemento.onclick = function(event) {
            if (eventoExistente) {
                eventoExistente(event);
            }
            if (isMobileDevice()) {
                document.location.href = link_mobile;
            } else {
                document.location.href = link_desktop;
            }
            event.preventDefault();
        };
    });
}

