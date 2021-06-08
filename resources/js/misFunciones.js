$(document).ready(function () {

    //Arreglo para la lista de tarjetas
    let listadoTarjetas = [{'tit': 'Café Molido',
                            'srcIni' : 'resources/images/cafe_molido.png',
                           'srcFin': 'resources/images/molido_mini.png' }, 
                           {'tit':'Cappuccino',
                           'srcIni' : 'resources/images/capuccino.png' ,
                           'srcFin': 'resources/images/capuchino_mini.png'}, 
                           {'tit': 'Café expreso',
                           'srcIni' : 'resources/images/cafe_expreso.png',
                           'srcFin': 'resources/images/expreso_mini.png' }, 
                           {'tit': 'Mocha',
                           'srcIni' : 'resources/images/mocha.png',
                           'srcFin': 'resources/images/mocha_mini.png'}, 
                           {'tit': 'Café Negro',
                           'srcIni' : 'resources/images/latte.png',
                           'srcFin': 'resources/images/latte_mini.png'}];

    for (let i=0; i < listadoTarjetas.length; i++){

        let imagenIni = listadoTarjetas[i].srcIni;
        let titArticle = listadoTarjetas[i].tit;
        let smallImage = listadoTarjetas[i].srcFin;

        let textoHtml = `
            <article class="Tarjetas">
            <figure>
            <img src=${imagenIni} alt="" class="bigImage">
            <img src=${smallImage} alt="" class="smallImage">
            </figure>
           <div class="containerText">
           <h3>${titArticle}</h3>
           <p>Lorem ipsum dolor sit, <br> amet consectetur adipisicing elit. <br>Consequatur, id earum neque<br> labore quo alias voluptatum <br>voluptatem delectus animi ipsum.</p>
           </div>
            </article>
        `;
        
        $('#TarjetasList').append(textoHtml);
    }

    // Funcionalida de cuando la pantalla cambia de tamaño - Ancho
    $(window).resize(function (){
        let anchoPantalla = window.innerWidth;
        if (anchoPantalla < 920) {
            $('#menu').show();
            $('#Horizontal').hide();
            $('body').addClass("changeBackgroundColor");
            $('#TarjetasList article p').hide();
            $('.bigImage').hide();
            $('.smallImage').show();
        } else{
            $('#menu').hide();
            $('#Vertical').hide();
            $('body').removeClass("changeBackgroundColor");
            $('#TarjetasList article p').show();
            $('.smallImage').hide();
            $('.bigImage').show();
        }
        
            
    });

    $('#menu').click(function (){
        //alert("esta funcionando");
        let Vertical = document.getElementById('Vertical');
        //alert(Vertical);
        if (window.getComputedStyle(Vertical).display === 'none'){
            $('#Vertical').show();
        } else{
            $('#Vertical').hide();
        }
    });
});

