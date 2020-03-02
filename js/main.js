$(document).ready(function () {

    // funzione per selezionare immagini e pallini in avanti cliccando sulla freccetta destra
    $(".next").click(nextImage);


    function nextImage() {
        if ($(".images img.active").hasClass("last")) {
            $(".images img.active").removeClass("active");
            $(".images img.first").addClass("active");

            // questi sono i pallini
            $(".slider-nav i.active").removeClass("active");
            $(".slider-nav i.first").addClass("active");

        } else {
            var imgAttiva = $(".images img.active");
            var prossimaImg = $(".images img.active").next();

            //questi sono i pallini
            var pallinoAttivo = $(".slider-nav i.active");
            var prossimoPallino = $(".slider-nav i.active").next();

            imgAttiva.removeClass("active");
            prossimaImg.addClass("active");


            pallinoAttivo.removeClass("active");
            prossimoPallino.addClass("active");
        }


    }


    // funzione per selezionare immagini e pallini precedenti (all'indietro) cliccando sulla freccetta sinistra;

    $(".prev").click(previousImage);

    function previousImage() {
        if ($(".images img.active").hasClass("first")) {
            $(".images img.active").removeClass("active");
            $(".images img.last").addClass("active");

            //questi sono i pallini
            $(".slider-nav i.active").removeClass("active");
            $(".slider-nav i.last").addClass("active");

        } else {
            var imgAttiva = $(".images img.active");
            var precedenteImg = $(".images img.active").prev();
            //questi sono i pallini 
            var pallinoAttivo = $(".slider-nav i.active");
            var precedentePallino = $(".slider-nav i.active").prev();

            imgAttiva.removeClass("active");
            precedenteImg.addClass("active");

            pallinoAttivo.removeClass("active");
            precedentePallino.addClass("active");
        }



    }



    // Slider automatico che cambia ogni 3 secondi. Devo assegnare una variabile ("loop") a "setInterval(nextImage, 3000)" così da poterla richiamare come parametro quando faccio clearInterval:

    // var loop;

    // $(".play-button").click(function () {
    //     loop = setInterval(nextImage, 3000);
    // });


    // $(".pause-button").click(function () {
    //     clearInterval(loop);
    // });

    // in questo modo però se clicco più volte su play si sovrascrive il loop, va tutto accelerato perché si creano più timer e il tasto pausa cancella solo l'ultimo timer creato. 
    // Correzione a questo problema:   


    var idTimer = null; //inizializzo la variabile idTimer con null;
    $(".play-button").click(function () {

        if (idTimer === null) { //si controlla che non ci siano altri timer in esecuzione; 
            idTimer = setInterval(nextImage, 3000); //se non ci sono, crea un timer e assegna il suo ID a idTimer
        }

    });



    $(".pause-button").click(function () {
        clearInterval(idTimer);
        idTimer = null; //rimetto idTimer a null così posso rifare play dopo che è stato premuto pausa perché è stato eliminato il timer in esecuzione.  
    });





});


