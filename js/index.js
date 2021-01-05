// Carousel - Empresas

(function($) {
  $(function() {
    // Carousel initialization
    $('.jcarousel-empresas')
      .jcarousel({
        wrap: null
      });

    // Prev control initialization
    $('.jcarousel-empresas-control-prev')
      .on('jcarouselcontrol:active', function() {
        $(this).removeClass('inactive');
      })
      .on('jcarouselcontrol:inactive', function() {
        $(this).addClass('inactive');
      })
      .jcarouselControl({
        // Options go here
        target: '-=1'
      });

    // Next control initialization
    $('.jcarousel-empresas-control-next')
      .on('jcarouselcontrol:active', function() {
        $(this).removeClass('inactive');
      })
      .on('jcarouselcontrol:inactive', function() {
        $(this).addClass('inactive');
      })
      .jcarouselControl({
        // Options go here
        target: '+=1'
      });

    // Pagination initialization
    $('.jcarousel-empresas-pagination')
      .on('jcarouselpagination:active', 'a', function() {
        $(this).addClass('active');
      })
      .on('jcarouselpagination:inactive', 'a', function() {
        $(this).removeClass('active');
      })
      .jcarouselPagination({
        // Options go here
      });
  });
})(jQuery);



// Carousel - Banners

(function($) {
  $(function() {
    //Carousel initialization
    $('.jcarousel-inicio')
      .jcarousel({
        wrap: null
      });

    //Prev control initialization
    $('.jcarousel-inicio-control-prev')
      .on('jcarouselcontrol:active', function() {
        $(this).removeClass('inactive');
      })
      .on('jcarouselcontrol:inactive', function() {
        $(this).addClass('inactive');
      })
      .jcarouselControl({
        //Options go here
        target: '-=1'
      });

    //Next control initialization
    $('.jcarousel-inicio-control-next')
      .on('jcarouselcontrol:active', function() {
        $(this).removeClass('inactive');
      })
      .on('jcarouselcontrol:inactive', function() {
        $(this).addClass('inactive');
      })
      .jcarouselControl({
        //Options go here
        target: '+=1'
      });

    //Pagination initialization
    $('.jcarousel-inicio-pagination')
      .on('jcarouselpagination:active', 'a', function() {
        $(this).addClass('active');
      })
      .on('jcarouselpagination:inactive', 'a', function() {
        $(this).removeClass('active');
      })
      .jcarouselPagination({
        //Options go here
      });
  });
})(jQuery);



// Main

$(document).ready(function() {
  var pagina = "";
  

  // Menu ativo
  switch (pagina) {
    case "programa": $("#menu-sobre").css({ "color": "#ff8f00" }); break;
    
    case "candidatos": $("#menu-candidatos").css({ "color": "#ff8f00" }); break;
    case "rec-senha": $("#menu-candidatos").css({ "color": "#ff8f00" }); break;
    
    case "vagas": $("#menu-vagas").css({ "color": "#ff8f00" }); break;
    
    case "empresas": $("#menu-empresas").css({ "color": "#ff8f00" }); break;
    case "parceria": $("#menu-empresas").css({ "color": "#ff8f00" }); break;
    case "parcerias": $("#menu-empresas").css({ "color": "#ff8f00" }); break;
    
    case "fale-conosco": $("#menu-contato").css({ "color": "#ff8f00" }); break;
  }


  // Newsletter
  $("#btn-newsletter").on("click", function() {
    var nome	= $.trim( $("#nome-newsletter"	).val() );
    var email	= $.trim( $("#email-newsletter"	).val() );
    
    if (nome == "" || email == "") {
      alert("Preencha os campos.");
    } else if (email.indexOf(" ") != -1) {
      alert("O e-mail não deve possuir espaço(s).");
    } else {
      // ...
    }
  });
});
