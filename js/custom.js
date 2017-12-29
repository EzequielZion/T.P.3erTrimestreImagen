var pagina = $("html, body");
var Posicion = $(document).scrollTop();

var Altura;
var AlturaViewPort;
var TodoLoDeArriba;
var Resultado;

var seccion = 0;
var inicio = $('#inicio');
var securer = $('#securer');
var securer2 = $('#securer2');
var planes = $('#planes');
var dudas = $('#dudas');


var conocerMas = $('#conocerMas');
var btnHome = $('#btnHome');
var btnSecurer = $('#btnSecurer');
var btnPlanes = $('#btnPlanes');
var btnDudas = $('#btnDudas');
var slides = $('#slides');
var logoSuperior = $('#logoSuperior');

var disponible = true;

$(document).ready(function() {
  pagina.bind('mousewheel', function(e) {
    if (e.originalEvent.wheelDelta / 120 > 0) {
      //Esta subiendo

    } else {
      //Esta bajando
      Altura = $(document).height();
      // alert("La altura es: " + Altura);

      AlturaViewPort = $(window).height();
      TodoLoDeArriba = $(window).scrollTop();
      TodoLoDeArriba = Math.floor(TodoLoDeArriba);

      var Resultado = Altura - AlturaViewPort;

      var LlegoONoBro = LlegoAlFondo(Resultado, TodoLoDeArriba);
      if (LlegoONoBro) {
        // alert("Llegaste al bottom papá")
        $(window).on('scroll', function(e) {
          $('#textos').animate({
            'margin-bottom': '0px'
          }, 2000, function() {});
        });
      }
    }
  });
});

function LlegoAlFondo(Resul, TodoLoDeUp) {
  Resul = Resul - 400;
  if (Resul < TodoLoDeUp) {
    return true;
  } else {
    return false;
  }
}

  $(window).on('scroll', function(e) {

    $('#caracteristicas').animate({
      'margin-left': '0px'
    }, 1800, function() {});
  });
  $(window).on('scroll', function(e) {
    $('#producto').animate({
      'margin-left': '0px'
    }, 1500, function() {});
  });
  $(window).on('scroll', function(e) {
    $('#productos').animate({
      'margin-left': '0px'
    }, 1900, function() {});
  });
  $(window).on('scroll', function(e) {
    $('#contacto').animate({
      'margin-left': '0px'
    }, 3000, function() {});
  });

  $(window).on('scroll', function(e) {
    $('#movimiento').animate({
      'margin-top': '-1px'
    }, 6200, function() {});
  });


conocerMas.click(function() {

  seccion = 1;
  pagina.animate({
    scrollTop: securer.height()
  }, 1000);
  disponible = false;
  securer2.fadeOut("slow", function() {
    planes.fadeOut("slow", function() {
      dudas.fadeOut("slow", function() {
        securer.fadeIn("slow", function() {
          disponible = true;
        });
      });

    });

  });

  setTimeout(function() {
    disponible = true;

  }, 1000);
  navBarNormal();
});

btnHome.click(function() {
  seccion = 0;
  pagina.animate({
    scrollTop: 0
  }, 1000);
  disponible = false;
  setTimeout(function() {
    disponible = true;

  }, 1000);
  navBarInicio();
});

btnSecurer.click(function() {
  seccion = 1;
  disponible = false;
  pagina.animate({
    scrollTop: securer.height()
  }, 1000);

  securer2.fadeOut("slow", function() {
    planes.fadeOut("slow", function() {
      dudas.fadeOut("slow", function() {
        securer.fadeIn("slow", function() {
          disponible = true;
        });
      });

    });

  });


  setTimeout(function() {
    disponible = true;

  }, 1000);
  navBarNormal();
});

btnPlanes.click(function() {
  seccion = 3;
  pagina.animate({
    scrollTop: securer.height()
  }, 1000);
  disponible = false;
  securer.fadeOut("slow", function() {
    securer2.fadeOut("slow", function() {
      dudas.fadeOut("slow", function() {
        planes.fadeIn("slow", function() {});
      });

    });

  });

  setTimeout(function() {
    disponible = true;

  }, 1000);

  navBarNormal();
});

btnDudas.click(function() {
  seccion = 4;
  pagina.animate({
    scrollTop: dudas.height()
  }, 1000);
  disponible = false;
  securer.fadeOut("slow", function() {
    securer2.fadeOut("slow", function() {
      planes.fadeOut("slow", function() {
        dudas.fadeIn("slow", function() {});
      });

    });

  });

  setTimeout(function() {
    disponible = true;

  }, 1000);

  navBarNormal();
});

function navBarInicio() {
  setTimeout(function() {
    btnHome.css('color', '#ffffff');
    btnSecurer.css('color', '#ffffff');
    btnPlanes.css('color', '#ffffff');
    btnDudas.css('color', '#ffffff');
    logoSuperior.css('display', 'none');

  }, 1000);


}

function navBarNormal() {

  setTimeout(function() {
    btnHome.css('color', '#000');
    btnSecurer.css('color', '#000');
    btnPlanes.css('color', '#000');
    btnDudas.css('color', '#000');
    logoSuperior.css('display', 'block');

  }, 1000);


}
