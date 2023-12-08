$(document).ready(function () {
    if (window.location.href.indexOf("dentologa") > -1) {
		newsLetter = function() {
			if ("undefined" != typeof newsletter) {
				$('#rodape').prepend(`<section class="section-newsletter-home">
										<div class="conteiner">
										    <div class="row-fluid ">
									            <div class="span12 text-center">
									                <div class="newsletter">
									                    <div class="mb-4">Newsletter</div>
				                                            <h3 class="h1 mb-4">Receba todas as promoÃ§Ãµes</h3>
				                                            <span>`+ newsletter.texto +`</span>
															<div class="newsletter-cadastro input-conteiner">
																<input type="text" placeholder="Digite seu e-mail" name="email">
																<button data-action="/newsletter/assinar/" class="botao botao-input fundo-principal newsletter-assinar">
																<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><g><path d="M506.134,241.843c-0.006-0.006-0.011-0.013-0.018-0.019l-104.504-104c-7.829-7.791-20.492-7.762-28.285,0.068c-7.792,7.829-7.762,20.492,0.067,28.284L443.558,236H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h423.557l-70.162,69.824c-7.829,7.792-7.859,20.455-0.067,28.284c7.793,7.831,20.457,7.858,28.285,0.068l104.504-104c0.006-0.006,0.011-0.013,0.018-0.019C513.968,262.339,513.943,249.635,506.134,241.843z"/></g></g></svg>
																</button>
															</div>
						                                    <div class="newsletter-confirmacao hide">
												                <i class="icon-ok icon-3x"></i>
												                <span>Seu cadastro foi realizado com sucesso em nossa newsletter.</span><br>
												                <span class="cupom-code">Cupom de desconto: <strong>`+ newsletter.cupom +`</strong></span>
										                	</div>
									                </div>
									            </div>
										    </div>        
									    </div>
									</section>`);
			}								
		}
		
    	topBar = function() {
			if ("undefined" != typeof barraTopo) {
				$("body").prepend('<div class="top-header"><a href="' + barraTopo.link + '">' + barraTopo.texto + '</a></div>')
			}
    	}
    	
    	instaFeed = function() {
			$('#corpo').append('<div id="instagram-feed-foxtech"></div>');
			$('body').append('<script src="https://foxtech.io/javascripts/ins11.js"></script>');
		}

        brandSlick = function() {
            $(".marcas").each(function() {
                if ($(this).find("flexslider")) {
                    var b = $(this).find("ul").html();
                    console.log(b);
                    $(this).find(".flex-viewport").remove(), $(this).find(".flexslider").remove(), $(this).find(".flex-direction-nav").remove(), $(this).append("<ul class='slick-brand'>" + b + "</ul>")
                }
            });
            $('<h4>Escolha por<strong> Marca</strong></h4>').prependTo('.marcas');
            $(".slick-brand").slick({
                infinite: !0,
                lazyLoad: "ondemand",
                slidesToShow: 4,
                slidesToScroll: 1,
                arrows: !0,
                autoplay: !0,
                responsive: [{
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 3,
                        infinite: !0
                    }
                }, {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: !0
                    }
                }, {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: !0
                    }
                }]
            });
            $('.marcas').appendTo($('.secao-secundaria'));
        }
        
		dropDownAtendimento = function() {
		    let pageCart = document.querySelector('.pagina-carrinho')
		    if (pageCart === null) {
		        let infoContato = $("#rodape .contato ul").html()
		        $('.dropHelp').append(`
		            <div class="container-drop-help">
		            <div class="container-conteudo-drop-help">
		            <ul>${infoContato}</ul>
		            <div class="container-button-fale-conosco-drop-help">
		            <div data-toggle="modal"  data-target="#modalContato" class="container-conteudo-button-fale-conosco-drop-help">
		            <span>Fale conosco</span>
		            </div>
		            </div>
		            </div>
		            </div>
		            `)
		            
		            let $tel = $('.container-conteudo-drop-help li .icon-phone').parents('a');
		            let $mail = $('.container-conteudo-drop-help li .fa-envelope').parents('a');
		            let $skype = $('.container-conteudo-drop-help li .fa-skype').parents('a');
		            let $whats = $('.container-conteudo-drop-help li .fa-whatsapp').parents('a');
		            
		            if ($tel.length) {
		                $tel.prepend('<p>Telefone:</p>');
		            }
		            if ($mail.length) {
		                $mail.prepend('<p>E-mail:</p>');
		            }
		            if ($skype.length) {
		                $skype.prepend('<p>Skype:</p>');
		            }
		            if ($whats.length) {
		                $whats.prepend('<p>WhatsApp:</p>');
		            }
		
		        return
		    
		        let btnAtendimento = document.querySelector('.dropHelp')
		        btnAtendimento.addEventListener('click', e => {
		            btnAtendimento.setAttribute('data-toggle', 'modal')
		            btnAtendimento.setAttribute('data-target', '#modalContato')
		        })
		    }
		
		}

        videoBanners = function() {
            if (typeof bannerVitrine !== 'undefined' && $('.pagina-inicial').length) {
            	$('body').append(`<div class="span12" id="box-banners">
					                	<ul class="slides-items"></ul>
					                </div>`)
               var slide = $('#box-banners ul.slides-items');
                $.each(bannerVitrine, function(i, item) {
                    var content = bannerVitrine[i];
                    var li = $('<li/>').addClass('item').appendTo(slide);
                    var a = $('<a/>').attr('href', content.link).appendTo(li);
                    var img = $('<img/>').addClass('bn').attr('src', content.imagem).appendTo(a);
                });
                
            	$('#box-banners').insertAfter('#listagemProdutos ul:nth-child(2)');

                
            }
            
            if (typeof videoBanner !== 'undefined' && $('.pagina-inicial').length) {
            	$('body').append(`<div id="box-video">
					                    <div class="row-fluid">
						                    <div class="span12">
						                    	<div class="span12 box-video">
						                		</div>
						                    </div>
					                    </div>
				                    </div>`);
				                    
				$('#box-video').appendTo('#corpo .secao-secundaria');

                let i = videoBanner.imagem,
                    b = videoBanner.link,
                    t = '<a href="' + b + '" data-youtube-id="' + b.split("v=")[1].toString() + '" class="video-banner js-trigger-video-modal"><img class="video-banner-img lazyload" src="' + i + '" alt="video"/><svg class="video-banner-icon-play" height="80px" viewBox="0 -77 512.00213 512" width="80px" xmlns="http://www.w3.org/2000/svg"><path d="m501.453125 56.09375c-5.902344-21.933594-23.195313-39.222656-45.125-45.128906-40.066406-10.964844-200.332031-10.964844-200.332031-10.964844s-160.261719 0-200.328125 10.546875c-21.507813 5.902344-39.222657 23.617187-45.125 45.546875-10.542969 40.0625-10.542969 123.148438-10.542969 123.148438s0 83.503906 10.542969 123.148437c5.90625 21.929687 23.195312 39.222656 45.128906 45.128906 40.484375 10.964844 200.328125 10.964844 200.328125 10.964844s160.261719 0 200.328125-10.546875c21.933594-5.902344 39.222656-23.195312 45.128906-45.125 10.542969-40.066406 10.542969-123.148438 10.542969-123.148438s.421875-83.507812-10.546875-123.570312zm0 0" fill="#f00"/><path d="m204.96875 256 133.269531-76.757812-133.269531-76.757813zm0 0" fill="#fff"/></svg><span><b>Clique para</b> assistir o vÃ­deo</span></a>'

                $('.box-video').append(t)
            }

            $('body').append(`
                <section class="video-modal">
                <div id="video-modal-content" class="video-modal-content">
                <iframe id="youtube" width="100%" height="100%" frameborder="0" allow="autoplay" allowfullscreen src=></iframe>
                <a href="#" class="close-video-modal">
                <svg id="Capa_1" enable-background="new 0 0 413.348 413.348" height="512" viewBox="0 0 413.348 413.348" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m413.348 24.354-24.354-24.354-182.32 182.32-182.32-182.32-24.354 24.354 182.32 182.32-182.32 182.32 24.354 24.354 182.32-182.32 182.32 182.32 24.354-24.354-182.32-182.32z"/></svg>
                </a>
                </div>
                <div class="overlay"></div>
                </section>`);
            $(document).ready(function() {
                function toggle_video_modal() {
                    $(".js-trigger-video-modal").on("click", function(e) {
                        e.preventDefault();
                        var id = $(this).attr('data-youtube-id');
                        var autoplay = '?autoplay=1';
                        var related_no = '&rel=0';
                        var src = '//www.youtube.com/embed/' + id + autoplay + related_no;
                        $("#youtube").attr('src', src);
                        $("body").addClass("show-video-modal noscroll");

                    });

                    function close_video_modal() {
                        event.preventDefault();
                        $("body").removeClass("show-video-modal noscroll");
                        $("#youtube").attr('src', '');

                    }

                    $('body').on('click', '.close-video-modal, .video-modal .overlay', function(event) {
                        close_video_modal();
                    });
                    $('body').keyup(function(e) {
                        if (e.keyCode == 27) {
                            close_video_modal();

                        }
                    });
                }
                toggle_video_modal();
            });

            var n = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 511.991 511.991" style="enable-background:new 0 0 511.991 511.991;" xml:space="preserve"><g><g><path d="M153.433,255.991L381.037,18.033c4.063-4.26,3.917-11.01-0.333-15.083c-4.229-4.073-10.979-3.896-15.083,0.333L130.954,248.616c-3.937,4.125-3.937,10.625,0,14.75L365.621,508.7c2.104,2.188,4.896,3.292,7.708,3.292c2.646,0,5.313-0.979,7.375-2.958c4.25-4.073,4.396-10.823,0.333-15.083L153.433,255.991z"/></g></g></svg>',
                p = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 511.995 511.995" style="enable-background:new 0 0 511.995 511.995;" xml:space="preserve"><g><g><path d="M381.039,248.62L146.373,3.287c-4.083-4.229-10.833-4.417-15.083-0.333c-4.25,4.073-4.396,10.823-0.333,15.083L358.56,255.995L130.956,493.954c-4.063,4.26-3.917,11.01,0.333,15.083c2.063,1.979,4.729,2.958,7.375,2.958c2.813,0,5.604-1.104,7.708-3.292L381.039,263.37C384.977,259.245,384.977,252.745,381.039,248.62z"/></g></g></svg>'

        }

        menuOptions = function() {
            $(".menu.superior li:not(.outras-categorias) .nivel-dois").wrapInner('<div class="menu-categorias"></div>');
            // Adiciona o titulo da categoria ao submenu
            $('.menu.superior .nivel-um>li').each(function(index) {
                var $this = $(this);
                var $texto = $($this).find('a strong.titulo').clone();
                $this.find('.nivel-dois .menu-categorias').prepend($('<span class="categoria-titulo"></span>'));
                $this.find('.nivel-dois .menu-categorias .categoria-titulo').prepend($texto);
            });
        
            if ("undefined" != typeof menuPrincipal) {
                // var categoriasMenu = 7; // Limitador de categorias no menu superior
                var categoriasoma = menuPrincipal.categoriasMenu + 1;
                $('.menu.superior .nivel-um>li:nth-of-type(1n+' + categoriasoma + ')').css("display", "none");


                $('.menu.superior .nivel-um').prepend('<li class="all-menu com-filho"><a href="#" title="' + menuPrincipal.tituloMenu + '"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><g><path d="M492,236H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h472c11.046,0,20-8.954,20-20S503.046,236,492,236z"/></g></g><g><g><path d="M492,76H20C8.954,76,0,84.954,0,96s8.954,20,20,20h472c11.046,0,20-8.954,20-20S503.046,76,492,76z"/></g></g><g><g><path d="M492,396H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h472c11.046,0,20-8.954,20-20C512,404.954,503.046,396,492,396z"/></g></g></svg><strong class="titulo">' + menuPrincipal.tituloMenu + '</strong></a><ul class="nivel-dois"></ul>');
                $('.menu.superior .nivel-um>li').clone().appendTo('.all-menu>ul');
                // $('.menu.superior>ul .all-menu>ul>li>a span').remove();
                $('.menu.superior>ul .all-menu > ul .all-menu').remove();
                $('.menu.superior>ul .all-menu .nivel-dois .menu-oferta').remove();
                $('.menu.superior>ul .all-menu .nivel-dois .menu-categorias .titulo-categoria').remove();
                $('.menu.superior>ul .all-menu .categoria-titulo').remove();

                // Remove nivel quatro em diante do submenu
                $('.menu.superior .nivel-um>li .nivel-dois li>.nivel-tres li.com-filho .nivel-tres').remove();
            }
        }


        highBanners = function() {
            $(document).ready(function() {
                var miniBanners = $('.mini-banner .modulo');
                if (miniBanners.length) {
                    $.each(miniBanners, function() {
                        $(this).find('li').html($(this).find('li').html().replace('/400x400', ''));
                    });
                }
            });
        }

        whatsHelp = function() {
            var number = $('.tel-whatsapp a').attr('href');
            var wts = $('<div class="whats-button"><a class="pulse-button" href="' + number + '" target="_blank" data-tool="Fale no WhatsApp!"><i class="fab fa-whatsapp"></i></a></div>');
            $('body').append(wts)
        }

        quantyOption = function() {

            // Carrinho
            // Remove icone do carrinho
            $('#cabecalho .carrinho').addClass('carrinho-manipula');
            // Remove icone do carrinho
            $('.carrinho-interno.borda-principal').removeClass('borda-principal');
            // Remove icone do carrinho
            $('.novo-carrinho .carrinho>a i').remove();
            // Adiciona icone ao carrinho
            $('.novo-carrinho .carrinho>a').prepend('<svg class="icone-carrinho-topo"><use xlink:href="#icone-carrinho"></use></svg>');

            // Modifica textos do carrinho vazio
            $('.titulo.vazio-text').html('<span class="carrinho-vazio-titulo">Meu Carrinho</span><span class="carrinho-vazio-preco">R$ 0,00</span>');
            // Adiciona classe ao carrinho cheio
            $('.carrinho-manipula>a b').parent().addClass('carrinho-cheio');
            // Modifica texto carrinho cheio
            $('.carrinho-manipula .carrinho-cheio .titulo span').text('Meu Carrinho');
            // Limpa o preÃƒÂ§o antigo
            $('.carrinho-manipula .carrinho-cheio>span').html('');
            // Clona o total
            $(".carrinho-manipula .carrinho-rodape .carrinho-info .carrino-total strong").clone().appendTo(".carrinho-manipula .carrinho-cheio>span");
            // Remove o strong clonado
            $strong = $('.carrinho-manipula .carrinho-cheio>span strong');
            $strong.replaceWith($strong.html());
            // Atualiza preÃƒÂ§o carrinho
            $(document).click(function() {
                setTimeout(function() {
                    // Limpa o preco antigo
                    $('.carrinho-manipula .carrinho-cheio>span').html('');
                    // clona o total
                    $(".carrinho-manipula .carrinho-rodape .carrinho-info .carrino-total strong").clone().appendTo(".carrinho-manipula .carrinho-cheio>span");
                    // remove o strong clonado
                    $strong = $('.carrinho-manipula .carrinho-cheio>span strong');
                    $strong.replaceWith($strong.html());
                    // adiciona cor do botao ao ir para o carrinho
                }, 2250);
            });



            $(document).on('change keyup focusout', '.qtde-adicionar-carrinho .qtde-carrinho', function() {
                var inputValue = $(this).val();
                var e = $(this).parent().siblings('.botao-comprar');
                e.attr('href', e.attr('href').replace(/adicionar.*/g, 'adicionar/' + inputValue))
            });
            $('.listagem-item').find('.botao-comprar-ajax').closest('.acoes-produto').prepend('<div class="qtde-adicionar-carrinho"><input type="number" min="1" value="1" class="qtde-carrinho" name="qtde-carrinho"></div>');
            $('.botao-comprar-ajax').html('<i class="fas fa-shopping-cart"></i>Adicionar');
            $('.botao-comprar-ajax').attr('data-loading-text', '<i class="icon-refresh icon-animate"></i>');
            $('<div class="quantity-nav"><div class="quantity-button quantity-up"><i class="fas fa-caret-up"></i></div><div class="quantity-button quantity-down"><i class="fas fa-caret-down"></i></div></div>')['insertAfter']('.qtde-carrinho');
            $('.qtde-adicionar-carrinho').each(function() {
                var i = $(this),
                    a = i.find('input[type="number"]'),
                    quantyUp = i.find('.quantity-up'),
                    quantyDown = i.find('.quantity-down'),
                    qtnMin = a.attr('min'),
                    qtnMax = a.attr('max');
                quantyUp['click'](function() {
                    var valt = parseFloat(a.val());
                    if (valt >= qtnMax) {
                        var valtB = valt
                    } else {
                        var valtB = valt + 1
                    };
                    i.find('input').val(valtB);
                    i.find('input').trigger('change')
                });
                quantyDown.click(function() {
                    var valt = parseFloat(a.val());
                    if (valt <= qtnMin) {
                        var valtB = valt
                    } else {
                        var valtB = valt - 1
                    };
                    i.find('input').val(valtB);
                    i.find('input').trigger('change')
                })
            });
        }

        fixedHeader = function() {
            $(window).scrollTop() > 0 ? $("body").addClass("fixed") : $("body").removeClass("fixed");

            if ($(window).width() < 767) {
                $(window).scrollTop() > 2 ? $("#cabecalho").addClass("fixed") : $("#cabecalho").removeClass("fixed");
            }

            var prev = 0;
            var $window = $(window);
            var nav = $('.menu');

            $window.on('scroll', function() {
                var scrollTop = $window.scrollTop();
                nav.toggleClass('scrollDown', scrollTop > prev);
                prev = scrollTop;
            });
        }

        openMenu = function() {
            $(".js-hamburguer").on("click", function() {
                $("body").toggleClass("open-menu")
            })
        }

        allFunctions = function() {
            $(".busca-mobile").after(
                '<div class="menu-wrapper span6 hidden-phone">' +
                '<div class="dropHelp">'+
                '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><g><g><path d="M248.158,343.22c-14.639,0-26.491,12.2-26.491,26.84c0,14.291,11.503,26.84,26.491,26.84c14.988,0,26.84-12.548,26.84-26.84C274.998,355.42,262.799,343.22,248.158,343.22z"/><path d="M252.69,140.002c-47.057,0-68.668,27.885-68.668,46.708c0,13.595,11.502,19.869,20.914,19.869c18.822,0,11.154-26.84,46.708-26.84c17.429,0,31.372,7.669,31.372,23.703c0,18.824-19.52,29.629-31.023,39.389c-10.108,8.714-23.354,23.006-23.354,52.983c0,18.125,4.879,23.354,19.171,23.354c17.08,0,20.565-7.668,20.565-14.291c0-18.126,0.35-28.583,19.521-43.571c9.411-7.32,39.04-31.023,39.04-63.789S297.307,140.002,252.69,140.002z"/><path d="M256,0C114.516,0,0,114.497,0,256v236c0,11.046,8.954,20,20,20h236c141.483,0,256-114.497,256-256C512,114.516,397.503,0,256,0z M256,472H40V256c0-119.377,96.607-216,216-216c119.377,0,216,96.607,216,216C472,375.377,375.393,472,256,472z"/></g></g></g></svg>'+
			    	'<p>Atendimento</p>'+
			    '</div>'+
			    '<div class="wishList">' +
                '<a href="/conta/favorito/listar">' +
                '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><g><path d="M374,39.221c-42.59,0-79.926,18.991-107.971,54.921c-3.74,4.792-7.074,9.586-10.029,14.229c-2.955-4.644-6.289-9.437-10.029-14.229C217.926,58.212,180.59,39.221,138,39.221c-80.456,0-138,67.367-138,148.204c0,92.433,75.757,179.547,245.637,282.46c3.185,1.929,6.774,2.894,10.363,2.894s7.178-0.964,10.363-2.893C436.243,366.973,512,279.859,512,187.426C512,106.631,454.503,39.221,374,39.221z M419.157,302.52C383.79,341.982,330.345,383.534,256,429.343c-74.345-45.809-127.79-87.361-163.157-126.822C57.285,262.845,40,225.197,40,187.426c0-58.204,39.334-108.205,98-108.205c29.876,0,55.35,12.99,75.715,38.61c16.284,20.489,23.145,41.646,23.193,41.797c2.605,8.355,10.341,14.046,19.093,14.046c8.752,0,16.488-5.69,19.093-14.046c0.063-0.202,6.718-20.699,22.467-40.875C318.036,92.521,343.754,79.22,374,79.22c58.728,0,98,50.049,98,108.205C472,225.196,454.715,262.844,419.157,302.52z"/></g></g></svg>'+
                	'<span>Favoritos</span>'+
                '</a>' +
                '</div>' +
                '<div class="my_account">' +
                '<svg class="user-icon" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><path d="M418.651,431.634c-8.576-56.229-45.769-103.945-98.194-125.989c42.679-35.547,48.457-98.962,12.91-141.641s-98.962-48.457-141.641-12.91s-48.457,98.962-12.91,141.641c3.904,4.69,8.229,9.006,12.91,12.91c-49.783,21.12-86.007,65.344-96.914,118.309c-2.021,9.893,4.37,19.557,14.263,21.577c9.893,2.021,19.557-4.37,21.577-14.263c14.153-69.257,81.774-113.938,151.04-99.785c52.407,10.706,92.626,52.873,100.846,105.728c1.408,8.978,9.198,15.561,18.286,15.451h2.834C413.595,450.981,420.306,441.582,418.651,431.634z M192,228.571c0-35.346,28.654-64,64-64s64,28.654,64,64s-28.654,64-64,64S192,263.918,192,228.571z"/><path d="M256,512C114.615,512,0,397.385,0,256S114.615,0,256,0s256,114.615,256,256S397.385,512,256,512z M256,36.571c-121.189,0-219.429,98.24-219.429,219.429S134.811,475.429,256,475.429S475.429,377.189,475.429,256S377.189,36.571,256,36.571z"/><g></g></svg>' +
                '<a href="/conta/login" class="my_account-title">Minha conta</a>' +
                '<svg class="icon-down" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="26px" height="26px" viewBox="0 0 292.362 292.362" style="enable-background:new 0 0 292.362 292.362;" xml:space="preserve"><g><path d="M286.935,69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952,0-9.233,1.807-12.85,5.424C1.807,72.998,0,77.279,0,82.228c0,4.948,1.807,9.229,5.424,12.847l127.907,127.907c3.621,3.617,7.902,5.428,12.85,5.428s9.233-1.811,12.847-5.428L286.935,95.074c3.613-3.617,5.427-7.898,5.427-12.847C292.362,77.279,290.548,72.998,286.935,69.377z"/></g></svg>' +
                '<ul>' +
                '<li class="listAccount"><a href="/conta/pedido/listar">Meus pedidos</a></li>' +
                '<li class="shipping"><a href="/#modalRastreio" data-toggle="modal" data-target="#modalRastreio">Acompanhar pedido</a></li>' +
                '<li class="login"><a href="/conta/login">Entrar</a></li>' +
                '<li class="registerAccount"><a href="/conta/login">Cliente novo? Cadastre-se</a></li>' +
                '</ul>' +
                '</div>' +
                '</div>');
            $('.secao-banners').prependTo($('#corpo'));
            $('.conteiner-principal .secao-banners').find('.conteiner').removeClass('conteiner').addClass('banner-limit'), $('.secao-banners .banner-limit').find('.span12').removeClass('span12');
            $('.menu-wrapper').append($('#cabecalho .span4.hidden-phone'));
            $('#cabecalho .span4.hidden-phone').addClass('cart').removeClass('span4');
            $('.carrinho').prepend('<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 511.999 511.999" style="enable-background:new 0 0 511.999 511.999;" xml:space="preserve"><g><g><g><path d="M180.213,395.039c-32.248,0-58.48,26.232-58.48,58.48s26.233,58.48,58.48,58.48c32.248,0,58.48-26.239,58.48-58.48C238.693,421.278,212.461,395.039,180.213,395.039z M180.213,476.201c-12.502,0-22.676-10.168-22.676-22.676s10.174-22.676,22.676-22.676c12.508,0,22.676,10.168,22.676,22.676S192.721,476.201,180.213,476.201z"></path><path d="M392.657,395.039c-32.254,0-58.486,26.233-58.486,58.48c0,32.248,26.233,58.48,58.486,58.48c32.242,0,58.48-26.233,58.48-58.48S424.899,395.039,392.657,395.039z M392.657,476.195c-12.508,0-22.682-10.174-22.682-22.676s10.174-22.67,22.682-22.67c12.502,0,22.676,10.162,22.676,22.67C415.333,466.027,405.165,476.195,392.657,476.195z"></path><path d="M154.553,377.143h278.676c9.894,0,17.902-8.014,17.902-17.902c0-9.888-8.014-17.902-17.902-17.902H169.776L118.522,26.96c-1.229-7.531-7.089-13.45-14.602-14.757L35.295,0.268c-9.769-1.695-19.012,4.828-20.707,14.566c-1.701,9.745,4.828,19.012,14.566,20.707l56.075,9.751l51.653,316.825C138.298,370.788,145.775,377.143,154.553,377.143z"></path></g></g></g><g><g><path d="M494.24,115.969c-3.372-4.625-8.742-7.358-14.465-7.358H115.765v35.804h339.454l-36.825,114.573H141.425v35.804h290.02c7.769,0,14.662-5.025,17.043-12.424l48.336-150.378C498.572,126.543,497.611,120.588,494.24,115.969z"></path></g></g></svg>')
            $('.busca-mobile').addClass('span6').removeClass('span8');
            $('.busca-mobile .botao-busca').append('<svg width="20" height="20" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><g fill="#3F3E3E" fill-rule="evenodd"><path d="M22 37c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15zm0 3c-9.941 0-18-8.059-18-18S12.059 4 22 4s18 8.059 18 18-8.059 18-18 18z" fill-rule="nonzero"></path><rect transform="rotate(-45 37.793 38.293)" x="36.293" y="32.293" width="3" height="12" rx="1.5"></rect></g></svg>');

            $('#corpo .conteiner .banner.hidden-phone').removeClass('hidden-phone'), $('.pagina-produto #formCalcularCep input').attr('placeholder', 'DIGITE SEU CEP'), $('#modalNewsletter .input-conteiner input').attr('placeholder', 'Ã© sÃ³ colocar o seu e-mail aqui'), $('.pagina-produto #formCalcularCep button').html('calcular'), $('.produto .principal .cep label').html('Calcular frete e prazo:'), $('#descricao').before('<div class="description-title"><i class="far fa-file-alt"></i><span>DescriÃ§Ã£o do produto</span></div>'), $('.marcas.hidden-phone').appendTo('.pagina-inicial #corpo .conteiner'), $(".aproveite-tambem h4.titulo").text("Aproveite e compre junto"), $(".aproveite-tambem h4").prepend('<i class="far fa-plus-square"></i>'), $('.bandeiras-produto .bandeira-promocao').each(function() {
                var txt;
                txt = $(this).text().replace('Desconto', '');
                $(this).text(txt);
            }), $(".busca input").attr("placeholder", "Olá, o que está procurando hoje?"), $(".carrinho").removeClass('vazio'), $('#delimitadorBarra').after($('.menu.superior')), $('.botao-comprar-ajax').data('loading-text', 'Aguarde...');

            // produto flutuante insistente
            $('.pagina-produto #corpo').append('<div id="flutuante-produto" class="hidden-phone hidden-tablet"><div class="conteiner"></div></div>');
            $('.acoes-flutuante').wrapInner('<div class="produto-flutuante"></div>');
            $('#flutuante-produto .conteiner').append($('.produto-flutuante'));
            $('.acoes-flutuante').remove();
            $('.produto-flutuante .close_float').remove();
            $('#flutuante-produto .produto-flutuante .acoes-produto .preco-produto').parent().addClass('abriga-precos');
            $(window).scroll(function() {
                if ($(this).scrollTop() > 500) {
                    $('#flutuante-produto').css('bottom', '0px');
                } else {
                    $('#flutuante-produto').css('bottom', '-100px');
                }
            });
        }

        FreeShipping = function() {
            if ("undefined" != typeof ativaFreeShipping) {
                $('.caixa-sombreada').each(function() {
                    if ($(this).find('.total').length) {
                        strToMoney = function(string, result) {
                            regex = /([+-]?[0-9|^.|^,-]+)[\.|,]([0-9]+)$/igm
                            result = regex.exec(string)
                            result = result ? result[1].replace(/[.,-]/g, "") + "." + result[2] : string;
                            return parseInt(result)
                        }

                        var BestPrice = $("[data-subtotal-valor]").attr("data-subtotal-valor"),
                            priceMin = ativaFreeShipping.priceMin

                        BestPrice = strToMoney(BestPrice)
                        priceMin = strToMoney(priceMin)
                        economia = (BestPrice - priceMin)

                        money = new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                            minimumFractionDigits: 2
                        });

                        if (BestPrice > priceMin) {
                            $("#corpo .conteiner .finalizar-compra").prepend('<div class="alert alert-success alert-geral freteBox span12" data-type="success"><button type="button" class="close" data-dismiss="alert">Ã—</button><i class="fas fa-truck"></i><span>ParabÃ©ns! VocÃª ganhou <b>FRETE GRÃTIS</b>.</span><a href="' + ativaFreeShipping.link + '" style="text-decoration:underline; margin-left: 6px;" target="_blank"><span>veja regras</span></a></div>');
                        } else {
                            $("#corpo .conteiner .finalizar-compra").prepend('<div id="faltaFrete" class="alert alert-success alert-geral freteBox span12" data-type="success"><button type="button" class="close" data-dismiss="alert">Ã—</button><i class="fas fa-truck"></i><span>Faltam apenas <strong>' + money.format(economia).replace('-R$', 'R$') + '</strong> para vocÃª ganhar <b>FRETE GRÃTIS</b>!<span><a href="' + ativaFreeShipping.link + '" style="text-decoration:underline; margin-left: 6px;" target="_blank"><span>veja regras</span></a></div>');
                        }
                    };
                });
            }
        }

        scrollTopo = function() {
            $(window).scroll(function() {
                if ($(this).scrollTop() >= 50) {
                    $('#return-to-top').fadeIn(400);
                } else {
                    $('#return-to-top').fadeOut(400);
                }
            });
            window.onload = function() {
                $('#return-to-top').click(function() {
                    $('body,html').animate({
                        scrollTop: 0
                    }, 500);
                });
            }
            $('body').append($('<a href="javascript:" id="return-to-top"><i class="icon-chevron-up"></i></a>'));

        }

        copyright = function() {
            $('#rodape > div:last-child .row-fluid div:last-child a').addClass('loja-integrada-copyright'), $('#rodape > div:last-child .row-fluid > div:nth-child(2)').before('<div class="design-fox"><a target="_blank" href="https://foxtech.io/"><img src="//help.foxtech.io/files/logo.png"></a></div>'), $('#rodape > div:last-child .row-fluid > div:nth-child(2)').before($('.loja-integrada-copyright')), $('a.loja-integrada-copyright').html('<img src="https://cdn.awsli.com.br/995/995528/arquivos/logo-lojaintegrada.png">'), $('#rodape .institucional .conteiner .row-fluid').find('.span9').addClass('span12').removeClass('span9'), $('#rodape .links-rodape.links-rodape-categorias').addClass('span3').removeClass('span4'), $('.span4.links-rodape.links-rodape-paginas').addClass('span2').removeClass('span4'), $('#rodape .pagamento').addClass('span8').removeClass('span4'), $('#rodape .selos').addClass('span4').removeClass('span4'), $("#rodape .span2:nth-child(2) .titulo").html("Institucional"), $("#rodape .span4.pagamento .titulo").html("Pague com"), $("#rodape .span4.selos .titulo").html("Segurança"), $("#rodape .contato .titulo").html("Central de ajuda"), $('#rodape .span4:nth-child(2)').addClass('span3').removeClass('span4'), $("#rodape > div:last-child").addClass("assinatura-rodape");
        }

        newRodape = function() {
            $('#rodape .institucional .conteiner .row-fluid').find('.span9').addClass('span12').removeClass('span9')
            $('#rodape .links-rodape.links-rodape-categorias').addClass('span3').removeClass('span4')
            $('.span4.links-rodape.links-rodape-paginas').addClass('span3').removeClass('span4')
            $('#rodape .pagamento').addClass('span8').removeClass('span4')
            $('#rodape .selos').addClass('span4').removeClass('span4')
            $('#rodape  .span4:nth-child(3)').remove()
            $("#rodape .span4.contato").addClass('span3').removeClass('span4')
            $("#rodape .span4.contato .titulo").html("Central de ajuda")
            $('#rodape .institucional .row-fluid .row-fluid div:last-child').removeClass('span12').addClass('span4 contato').removeClass('visible-phone');
            var $elementoTelefone = $('#rodape .institucional li .icon-phone').parents('a');
            var $elementoWhatsapp = $('#rodape .institucional li .fa-whatsapp').parents('a');
            var $elementoSkype = $('#rodape .institucional li .fa-skype').parents('a');
            var $elementoEmail = $('#rodape .institucional li .fa-envelope').parents('a');
            if ($elementoTelefone.length) {
                $elementoTelefone.html($elementoTelefone.html().replace('Telefone:', ''));
            }
            if ($elementoWhatsapp.length) {
                $elementoWhatsapp.html($elementoWhatsapp.html().replace('Whatsapp:', ''));
            }
            if ($elementoSkype.length) {
                $elementoSkype.html($elementoSkype.html().replace('Skype:', ''));
            }
            if ($elementoSkype.length) {
                $elementoEmail.html($elementoEmail.html().replace('E-mail:', ''));
            }
            
            $('.sobre-loja-rodape').after($('.span4.links-rodape.links-rodape-paginas'));
			$('#rodape .contato').after('<div class="r-sociais span3"><span class="titulo">Acompanhe nas redes</span></div>')


			$('#rodape .redes-sociais').remove();
			$(".r-sociais").append($(".barra-inicial .lista-redes ul").clone(''));
	
			
            $(".news-rodape").append($('.redes-sociais'));
            $('#rodape .contato').append(
                '<li class="complement">' +
                '<li class="operation" id="operation""><strong>Horário de Atendimento:</strong><p>Seg a Sex de 08h às 18h<br>Sábado de 08h às 14h</p></li>' +
                '<a class="atd-rodape" id="atd-rodape" href="#modalContato" data-toggle="modal" data-target="#modalContato">Fale conosco</a>' +
                '</li>'
            );
        }

        renameTitles = function() {
            $('.listagem .vitrine-lancamento').each(function() {
                    var txt;
                    txt = $(this).html().replace('LanÃ§amentos', `
                            <span class="title-categorias"><strong class="primary-title">Confira</strong> <p class="second-title">nossos lanÃ§amentos</p></span>`);
                    $(this).html(txt);
                }),
                $('.listagem .vitrine-mas-vendido strong').each(function() {
                    var txt;
                    let s;
                    s = $(this).html().replace('<strong>', '').replace('</strong>', '');
                    txt = $(this).html().replace('Mais Vendidos',
                        `<span class="title-categorias"><strong class="primary-title">Selecionamos</strong> <p class="second-title">os mais vendidos</p></span>`);
                    $(this).html(txt);
                }),
                $('.listagem .vitrine-destaque strong').each(function() {
                    var txt;
                    txt = $(this).html().replace('Destaques',
                        `<span class="title-categorias"><strong class="primary-title">Destaques</strong> <p class="second-title">da semana</p></span>`);
                    $(this).html(txt);
                });

            $('.selos .titulo').each(function() {
                var txt;
                txt = $(this).text().replace('Selos', 'Qualidade e SeguranÃ§a');
                $(this).text(txt);
            })
        }

        vitrineTime = function() {
            $(document).ready(function() {
                if ("undefined" != typeof counterTime) {
                    $('div#listagemProdutos ul').addClass('produtos-carrosel');

                    var produtosEmDestaque = '';
                    // $('.vitrine-destaque + .produtos-carrosel .listagem-item').each(function() {
                    //     produtosEmDestaque += '<li class="' + $(this).attr('class').replace('listagem-item', 'new-product-box') + '">' + $(this).html() + '</li>';
                    // });
                    $('#listagemProdutos .produtos-carrosel:last-child .listagem-linha .imagem-produto ').after('<div class="featuredProducts">\
                            <div class="featuredProducts-timer"></div>\
                            </div>');

                    createTimer('.featuredProducts-timer', counterTime.createTimerValue, 2, function() {
                        $('.featuredProducts-timer').prepend('<div class="featuredProducts-timer-label">\
                                <div class="featuredProducts-timer-title"><div class="featuredProducts-timer-description">OFERTA ACABA EM</div></div>\
                                </div>');
                    });

                    function createTimer(location, date, days, callback) {
                        var $Days = days;
                        var $DateStr = date;
                        var $Parent = $(location);
                        var $StyleName = 'style-ms-timer';
                        var $Styles = '';
                        if (!$('#' + $StyleName).length) {
                            $('head').append($Styles);
                        }
                        var $Layout = '<div class="ms-timer">' +
                            '<span ms-timer-hours></span>' +
                            '<span class="dois-pontos-contador">:</span>' +
                            '<span ms-timer-minutes > : </span>' +
                            '<span class="dois-pontos-contador">:</span>' +
                            '<span ms-timer-seconds > : </span>' +
                            '</div>'

                        $Parent.append($Layout);

                        var timer;
                        var compareDate = new Date($DateStr);
                        compareDate.setDate(compareDate.getDate($DateStr) + $Days);
                        var timer = setInterval(function() {
                            timeBetweenDates(compareDate);
                        }, 1000);
                        var timeBetweenDates = function(toDate) {
                            var dateEntered = toDate;
                            var now = new Date();
                            var difference = dateEntered.getTime() - now.getTime();
                            if (difference <= 0) {
                                clearInterval(timer);
                                $('#listagemProdutos .produtos-carrosel:last-child .listagem-linha .imagem-produto ').addClass("timer-stopped");
                            } else {
                                var seconds = Math.floor(difference / 1000);
                                var minutes = Math.floor(seconds / 60);
                                var hours = Math.floor(minutes / 60);
                                var days = Math.floor(hours / 24);
                                hours %= 24;
                                minutes %= 60;
                                seconds %= 60;
                                $Parent.find("[ms-timer-days]").text(days);

                                $Parent.find("[ms-timer-hours]").html() < 10 ?
                                    $Parent.find("[ms-timer-hours]").text('0' + hours) :
                                    $Parent.find("[ms-timer-hours]").text(hours)
                                $Parent.find("[ms-timer-minutes]").html() < 10 ?
                                    $Parent.find("[ms-timer-minutes]").text('0' + minutes) :
                                    $Parent.find("[ms-timer-minutes]").text(minutes)
                                $Parent.find("[ms-timer-seconds]").html() < 10 ?
                                    $Parent.find("[ms-timer-seconds]").text('0' + seconds) :
                                    $Parent.find("[ms-timer-seconds]").text(seconds)

                            }
                        }
                        callback()
                    }
                }

                let listTitle = $('#listagemProdutos .vitrine-destaque')
                let listProd = $('#listagemProdutos .vitrine-destaque').next()

                $('.vitrine-lancamento').before(listTitle)
                $('.vitrine-lancamento').before(listProd)
            });
        }

        responsiveNew = function() {
            var lrMenu = {
                wrap: function(each) {
                    wrap = [];
                    each.forEach(function(item) {
                        wrap.push('<div class="lrMenuBox">' + $(item)[0].innerHTML + '</div>')
                    });
                    return wrap;
                },
                start: function(item) {
                    if (item.length) {
                        itMenu = $('<nav class="lrMenu visible-phone"></nav>');
                        itShadow = '<span class="lrShadow"></div>';
                        itClose = '<button class="menu-close"></button>';
                        if ($(item[0]).length) {
                            this.wrap(item).forEach(function(item) {
                                itMenu.append(item);
                            });
                        }
                        $('body').append(itMenu);
                        $('body').append(itShadow);
                        $('body').append(itClose);
                        $('.lrShadow').on('click', function() {
                            $('body').removeClass('lrMenuOpen');
                        });
                        $('.menu-close').on('click', function() {
                            $('body').removeClass('lrMenuOpen');
                        });
                    }
                },
                toggle: function() {
                    target = $('body');
                    if (!target.hasClass('lrMenuOpen')) {
                        setTimeout(function() {
                            target.addClass('lrMenuOpen');
                        }, 400);
                    } else {
                        setTimeout(function() {
                            target.removeClass('lrMenuOpen');
                        }, 200);
                    }
                }
            };
            $("#rodape .titulo")
                .click(function() {
                    $(this)
                        .next()
                        .toggleClass("active");
                });

            lrMenu.start(['.nivel-um']);
            $('#cabecalho').prepend('<div class="head-mobile visible-phone"><div class="js-menu-mobile menu-mobile visible-phone"><span></span><span></span><span></span></div><div class="logo-mob"></div><div class="right-options"><div class="cart-mobile"><a href="/carrinho/index"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 23"><style>.st0{fill-rule:evenodd;clip-rule:evenodd}</style><path class="st0" d="M8.7.2c-1.1 0-2 .3-2.6.9-.6.6-1 1.4-1.2 2.2-.2.6-.3 1.1-.3 1.7H2C.9 5 0 5.9 0 7l.1 13c0 1.7 1.3 3 3 3H15c1.7 0 3-1.3 3-3V7c0-1.1-.9-2-2-2h-3.2c-.1-.6-.1-1.1-.3-1.6-.2-.8-.6-1.7-1.2-2.2-.7-.6-1.5-1-2.6-1zm2.7 6.3v2.6c0 .4.3.7.8.7.4 0 .7-.3.7-.8v-.8-1.8H16c.3 0 .5.2.5.5l-.1 13c0 .8-.7 1.5-1.5 1.5H3.1c-.8 0-1.5-.7-1.5-1.5L1.5 7c0-.3.2-.5.5-.5h2.5v2.6c0 .4.3.8.7.8.4 0 .8-.4.8-.8v-.8-1.8h5.4zM11.3 5c0-.4-.1-.8-.2-1.2-.2-.7-.4-1.2-.8-1.5-.4-.3-.8-.5-1.6-.5s-1.3.2-1.6.5c-.4.3-.6.8-.8 1.5-.1.4-.2.8-.2 1.2h5.2z"></path></svg></a></div><div class="search-mobile"><svg class="icon-head" width="20" height="20" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><g fill="#3F3E3E" fill-rule="evenodd"><path d="M22 37c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15zm0 3c-9.941 0-18-8.059-18-18S12.059 4 22 4s18 8.059 18 18-8.059 18-18 18z" fill-rule="nonzero"></path><rect transform="rotate(-45 37.793 38.293)" x="36.293" y="32.293" width="3" height="12" rx="1.5"></rect></g></svg></div><div class="user-mobile"><a href="/conta/login"><svg class="icon-head" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path class="st0" d="M12 12.5C9 12.5 6.5 10 6.5 7S9 1.5 12 1.5 17.5 4 17.5 7 15 12.5 12 12.5zM12 3C9.8 3 8 4.8 8 7s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zM17 15.5c1.4 0 2.5 1.1 2.5 2.5v2.5h-15V18c0-1.4 1.1-2.5 2.5-2.5h10m0-1.5H7c-2.2 0-4 1.8-4 4v4h18v-4c0-2.2-1.8-4-4-4z"></path></svg></a></div></div></div>');
            $(".logo-mob").append($(".logo").clone(''));
            $('#rodape .selos').addClass('span4').removeClass('span3');
            $('.lrMenu').prepend('<form id="formRastrearObj"><span>Rastrear pedido</span><div class="rastMobile"><input id="rastrearObjMobile" placeholder="Digite seu cÃ³digo de rastreio."><div class="objSearch" onclick="$(this).parent().submit()"><a>Buscar</a></div></div></form>');
            $('.rastMobile').on('submit', function(e) {
                setTimeout(function() {
                    e.preventDefault();
                    var code = $('#rastrearObjMobile').val();
                    console.log(code);
                    window.open('https://melhorrastreio.com.br/rastreio/'+ code)
                }, 500);
            });
            $('.lrMenu').prepend('<li class="meuspedidos"><a href="/conta/pedido/listar"><i class="icon-list fundo-principal"></i>Meus Pedidos</a></li>');
            $('.lrMenu').prepend('<li class="minhaconta"><a href="/conta/index"><i class="icon-user fundo-principal"></i>Minha conta</a></li>');
            $('.lrMenuBox').prepend('<li class="title-menu"><a>Navegue pela loja</a></li>');
            $('.menu-mobile').on('click', function(e) {
                lrMenu.toggle();
            });
            $(".search-mobile").on("click", function() {
                $(".busca-mobile, .search-mobile").toggleClass("active")
            });
            $(document).on('click', '.search-mobile', function() {
                var classe = '.busca-mobile'
                if (!$(classe).is(':visible')) {
                    $(classe).fadeIn(100).animate({
                        top: '0'
                    }, 400);
                } else {
                    $(classe).stop(true, true).fadeOut('fast').animate({}, 400).hide();
                }
            });
        }

        head = function() {
            $(document).ready(function() {
                if ($(window).width() > 768) {
                    var s = $("#cabecalho").height();
                    $("#cabecalho").next().css("padding-top", s - 2)
                }
                $(".barra-inicial .canais-contato ul").append('<li class="productTracking"><span class="titulo"><i class="fa fa-truck"></i>Rastreio RÃ¡pido</span></li>' +
                    '<ul>' +
                    '<p>Digite o cÃ³digo de rastreamento do pedido.</p>' +
                    '</ul>');

                $(window).scroll(function() {
                        fixedHeader()
                    }), $('.pagina-inicial .brand').addClass('animated tada'),
                    $(".conteudo-topo .superior .span8 > div").hasClass("btn-group") && $(".my_account .login").replaceWith('<li class="login"><a href="/conta/logout">Sair' + "</a></li>"), $(".conteudo-topo .superior .span8 > div").hasClass("btn-group") && $(".my_account .registerAccount").remove()
            });
        }

        addFavorito = function() {
            $("head").append($('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.3.0/jquery-confirm.min.css">'));
            $("head").append($('<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.3.0/jquery-confirm.min.js"></script>')),
                $('<a class="btn-favorite" href="#"></a>').prependTo(".pagina-inicial .listagem-item"), $(".pagina-inicial .listagem-item").each(function() {
                    var a = $(this).find(".info-produto .hide.trustvox-stars").attr("data-trustvox-product-code");
                    $(this).find(".btn-favorite").attr("href", "/conta/favorito/" + a + "/adicionar")
                }), $(document).on("click", ".btn-favorite", function(a) {
                    a.preventDefault();
                    var e = $(this),
                        t = e.attr("href");
                    $.post(t).done(function(a) {
                        var t = JSON.parse(a);
                        "erro" === t.status ? $.alert({
                            theme: 'modern',
                            icon: 'fa fa-warning',
                            title: 'Produto nÃ£o adicionado!',
                            type: 'red',
                            typeAnimated: true,
                            boxWidth: '50%',
                            columnClass: 'span-6 col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1',
                            content: 'VocÃª precisa estar logado em nossa loja, para adicionar produtos a lista de desejos.',
                        }) : ($.alert({
                            theme: 'modern',
                            icon: 'fa fa-check',
                            title: 'Produto adicionado!',
                            type: 'green',
                            typeAnimated: true,
                            boxWidth: '50%',
                            columnClass: 'span-6 col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1',
                            content: 'ParabÃ©ns! VocÃª adicionou o produto a sua lista de desejos.',
                        }));
                    })
                })
        }

        slickTheme = function() {
            function toReal(e, i) {
                return i + " " + e.formatMoney(2, ",", ".")
            }
            var _extends = Object.assign || function(e) {
                    for (var i = 1; i < arguments.length; i++) {
                        var t = arguments[i];
                        for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s])
                    }
                    return e
                },
                _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                };
            ! function(e, i) {
                "object" === ("undefined" == typeof exports ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = i() : "function" == typeof define && define.amd ? define(i) : e.LazyLoad2 = i()
            }(this, function() {
                "use strict";
                var e = {
                        elements_selector: "img",
                        container: document,
                        threshold: 30,
                        data_src: "src",
                        data_srcset: "srcset",
                        class_loading: "loading",
                        class_loaded: "loaded",
                        class_error: "error",
                        callback_load: null,
                        callback_error: null,
                        callback_set: null,
                        callback_enter: null
                    },
                    i = function(e, i) {
                        return e.getAttribute("data-" + i)
                    },
                    t = function(e) {
                        return e.filter(function(e) {
                            return !i(e, "was-processed")
                        })
                    },
                    s = function(e, i) {
                        var t, s = new e(i);
                        try {
                            t = new CustomEvent("LazyLoad::Initialized", {
                                detail: {
                                    instance: s
                                }
                            })
                        } catch (e) {
                            (t = document.createEvent("CustomEvent")).initCustomEvent("LazyLoad::Initialized", !1, !1, {
                                instance: s
                            })
                        }
                        window.dispatchEvent(t)
                    },
                    o = function(e, t) {
                        var s = t.data_src,
                            o = t.data_srcset,
                            a = e.tagName,
                            n = i(e, s);
                        if ("IMG" === a) {
                            ! function(e, t) {
                                var s = t.data_srcset,
                                    o = e.parentNode;
                                if ("PICTURE" === o.tagName)
                                    for (var a, n = 0; a = o.children[n]; n += 1)
                                        if ("SOURCE" === a.tagName) {
                                            var r = i(a, s);
                                            r && a.setAttribute("srcset", r)
                                        }
                            }(e, t);
                            var r = i(e, o);
                            return r && e.setAttribute("srcset", r), void(n && e.setAttribute("src", n))
                        }
                        "IFRAME" !== a ? n && (e.style.backgroundImage = 'url("' + n + '")') : n && e.setAttribute("src", n)
                    },
                    a = "classList" in document.createElement("p"),
                    n = function(e, i) {
                        a ? e.classList.add(i) : e.className += (e.className ? " " : "") + i
                    },
                    r = function(e, i) {
                        e && e(i)
                    },
                    l = function(e, i, t) {
                        e.removeEventListener("load", i), e.removeEventListener("error", t)
                    },
                    d = function(e, i, t) {
                        var s = e.target;
                        (function(e, i) {
                            a ? e.classList.remove(i) : e.className = e.className.replace(new RegExp("(^|\\s+)" + i + "(\\s+|jQuery)"), " ").replace(/^\s+/, "").replace(/\s+jQuery/, "")
                        })(s, t.class_loading), n(s, i ? t.class_loaded : t.class_error), r(i ? t.callback_load : t.callback_error, s)
                    },
                    c = function(e, i) {
                        r(i.callback_enter, e), ["IMG", "IFRAME"].indexOf(e.tagName) > -1 && (function(e, i) {
                                var t = function t(o) {
                                        d(o, !0, i), l(e, t, s)
                                    },
                                    s = function s(o) {
                                        d(o, !1, i), l(e, t, s)
                                    };
                                e.addEventListener("load", t), e.addEventListener("error", s)
                            }(e, i), n(e, i.class_loading)), o(e, i),
                            function(e, i, t) {
                                e.setAttribute("data-" + i, t)
                            }(e, "was-processed", !0), r(i.callback_set, e)
                    },
                    p = function(i, t) {
                        this._settings = _extends({}, e, i), this._setObserver(), this.update(t)
                    };
                p.prototype = {
                    _setObserver: function() {
                        var e = this;
                        if ("IntersectionObserver" in window) {
                            var i = this._settings;
                            this._observer = new IntersectionObserver(function(s) {
                                s.forEach(function(t) {
                                    if (t.isIntersecting || t.intersectionRatio > 0) {
                                        var s = t.target;
                                        c(s, i), e._observer.unobserve(s)
                                    }
                                }), e._elements = t(e._elements)
                            }, {
                                root: i.container === document ? null : i.container,
                                rootMargin: i.threshold + "px"
                            })
                        }
                    },
                    update: function(e) {
                        var i = this,
                            s = this._settings,
                            o = e || s.container.querySelectorAll(s.elements_selector);
                        this._elements = t(Array.prototype.slice.call(o)), this._observer ? this._elements.forEach(function(e) {
                            i._observer.observe(e)
                        }) : (this._elements.forEach(function(e) {
                            c(e, s)
                        }), this._elements = t(this._elements))
                    },
                    destroy: function() {
                        var e = this;
                        this._observer && (t(this._elements).forEach(function(i) {
                            e._observer.unobserve(i)
                        }), this._observer = null), this._elements = null, this._settings = null
                    }
                };
                var h = window.lazyLoadOptions;
                return h && function(e, i) {
                    if (i.length)
                        for (var t, o = 0; t = i[o]; o += 1) s(e, t);
                    else s(e, i)
                }(p, h), p
            }),
            function(e) {
                "use strict";
                "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
            }(function(e) {
                "use strict";
                var i = window.Slick || {};
                i = function() {
                    function i(i, s) {
                        var o, a = this;
                        a.defaults = {
                            accessibility: !0,
                            adaptiveHeight: !1,
                            appendArrows: e(i),
                            appendDots: e(i),
                            arrows: !0,
                            asNavFor: null,
                            prevArrow: '<div class="slick-prev"><svg style="transform: rotate(180deg)" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512.002 512.002" style="enable-background:new 0 0 512.002 512.002;" xml:space="preserve"><g><g><path d="M388.425,241.951L151.609,5.79c-7.759-7.733-20.321-7.72-28.067,0.04c-7.74,7.759-7.72,20.328,0.04,28.067l222.72,222.105L123.574,478.106c-7.759,7.74-7.779,20.301-0.04,28.061c3.883,3.89,8.97,5.835,14.057,5.835c5.074,0,10.141-1.932,14.017-5.795l236.817-236.155c3.737-3.718,5.834-8.778,5.834-14.05S392.156,245.676,388.425,241.951z"/></g></g></svg></div>',
                            nextArrow: '<div class="slick-next"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512.002 512.002" style="enable-background:new 0 0 512.002 512.002;" xml:space="preserve"><g><g><path d="M388.425,241.951L151.609,5.79c-7.759-7.733-20.321-7.72-28.067,0.04c-7.74,7.759-7.72,20.328,0.04,28.067l222.72,222.105L123.574,478.106c-7.759,7.74-7.779,20.301-0.04,28.061c3.883,3.89,8.97,5.835,14.057,5.835c5.074,0,10.141-1.932,14.017-5.795l236.817-236.155c3.737-3.718,5.834-8.778,5.834-14.05S392.156,245.676,388.425,241.951z"/></g></g></svg></div>',
                            autoplay: !1,
                            autoplaySpeed: 3e3,
                            centerMode: !1,
                            centerPadding: "50px",
                            cssEase: "ease",
                            customPaging: function(e, i) {
                                return ""
                            },
                            dots: !1,
                            dotsClass: "slick-dots",
                            draggable: !0,
                            easing: "linear",
                            edgeFriction: .35,
                            fade: !1,
                            focusOnSelect: !1,
                            infinite: !0,
                            initialSlide: 0,
                            lazyLoad: "ondemand",
                            mobileFirst: !1,
                            pauseOnHover: !0,
                            pauseOnDotsHover: !1,
                            respondTo: "window",
                            responsive: null,
                            rows: 1,
                            rtl: !1,
                            slide: "",
                            slidesPerRow: 1,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            speed: 300,
                            swipe: !0,
                            swipeToSlide: !1,
                            touchMove: !0,
                            touchThreshold: 5,
                            useCSS: !0,
                            useTransform: 1,
                            variableWidth: !1,
                            vertical: !1,
                            verticalSwiping: !1,
                            waitForAnimate: !0,
                            zIndex: 1e3
                        }, a.initials = {
                            animating: !1,
                            dragging: !1,
                            autoPlayTimer: null,
                            currentDirection: 0,
                            currentLeft: null,
                            currentSlide: 0,
                            direction: 1,
                            $dots: null,
                            listWidth: null,
                            listHeight: null,
                            loadIndex: 0,
                            $nextArrow: null,
                            $prevArrow: null,
                            slideCount: null,
                            slideWidth: null,
                            $slideTrack: null,
                            $slides: null,
                            sliding: !1,
                            slideOffset: 0,
                            swipeLeft: null,
                            $list: null,
                            touchObject: {},
                            transformsEnabled: !1,
                            unslicked: !1
                        }, e.extend(a, a.initials), a.activeBreakpoint = null, a.animType = null, a.animProp = null, a.breakpoints = [], a.breakpointSettings = [], a.cssTransitions = !1, a.hidden = "hidden", a.paused = !1, a.positionProp = null, a.respondTo = null, a.rowCount = 1, a.shouldClick = !0, a.$slider = e(i), a.$slidesCache = null, a.transformType = null, a.transitionType = null, a.visibilityChange = "visibilitychange", a.windowWidth = 0, a.windowTimer = null, o = e(i).data("slick") || {}, a.options = e.extend({}, a.defaults, o, s), a.currentSlide = a.options.initialSlide, a.originalSettings = a.options, void 0 !== document.mozHidden ? (a.hidden = "mozHidden", a.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (a.hidden = "webkitHidden", a.visibilityChange = "webkitvisibilitychange"), a.autoPlay = e.proxy(a.autoPlay, a), a.autoPlayClear = e.proxy(a.autoPlayClear, a), a.changeSlide = e.proxy(a.changeSlide, a), a.clickHandler = e.proxy(a.clickHandler, a), a.selectHandler = e.proxy(a.selectHandler, a), a.setPosition = e.proxy(a.setPosition, a), a.swipeHandler = e.proxy(a.swipeHandler, a), a.dragHandler = e.proxy(a.dragHandler, a), a.keyHandler = e.proxy(a.keyHandler, a), a.autoPlayIterator = e.proxy(a.autoPlayIterator, a), a.instanceUid = t++, a.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, a.registerBreakpoints(), a.init(!0), a.checkResponsive(!0)
                    }
                    var t = 0;
                    return i
                }(), i.prototype.addSlide = i.prototype.slickAdd = function(i, t, s) {
                    var o = this;
                    if ("boolean" == typeof t) s = t, t = null;
                    else if (0 > t || t >= o.slideCount) return !1;
                    o.unload(), "number" == typeof t ? 0 === t && 0 === o.$slides.length ? e(i).appendTo(o.$slideTrack) : s ? e(i).insertBefore(o.$slides.eq(t)) : e(i).insertAfter(o.$slides.eq(t)) : !0 === s ? e(i).prependTo(o.$slideTrack) : e(i).appendTo(o.$slideTrack), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slides.each(function(i, t) {
                        e(t).attr("data-slick-index", i)
                    }), o.$slidesCache = o.$slides, o.reinit()
                }, i.prototype.animateHeight = function() {
                    var e = this;
                    if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
                        var i = e.$slides.eq(e.currentSlide).outerHeight(!0);
                        e.$list.animate({
                            height: i
                        }, e.options.speed)
                    }
                }, i.prototype.animateSlide = function(i, t) {
                    var s = {},
                        o = this;
                    o.animateHeight(), !0 === o.options.rtl && !1 === o.options.vertical && (i = -i), !1 === o.transformsEnabled ? !1 === o.options.vertical ? o.$slideTrack.animate({
                        left: i
                    }, o.options.speed, o.options.easing, t) : o.$slideTrack.animate({
                        top: i
                    }, o.options.speed, o.options.easing, t) : !1 === o.cssTransitions ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft), e({
                        animStart: o.currentLeft
                    }).animate({
                        animStart: i
                    }, {
                        duration: o.options.speed,
                        easing: o.options.easing,
                        step: function(e) {
                            e = Math.ceil(e), !1 === o.options.vertical ? (s[o.animType] = "translate(" + e + "px, 0px)", o.$slideTrack.css(s)) : (s[o.animType] = "translate(0px," + e + "px)", o.$slideTrack.css(s))
                        },
                        complete: function() {
                            t && t.call()
                        }
                    })) : (o.applyTransition(), i = Math.ceil(i), !1 === o.options.vertical ? s[o.animType] = "translate3d(" + i + "px, 0px, 0px)" : s[o.animType] = "translate3d(0px," + i + "px, 0px)", o.$slideTrack.css(s), t && setTimeout(function() {
                        o.disableTransition(), t.call()
                    }, o.options.speed))
                }, i.prototype.asNavFor = function(i) {
                    var t = this,
                        s = t.options.asNavFor;
                    s && null !== s && (s = e(s).not(t.$slider)), null !== s && "object" == typeof s && s.each(function() {
                        var t = e(this).slick("getSlick");
                        t.unslicked || t.slideHandler(i, !0)
                    })
                }, i.prototype.applyTransition = function(e) {
                    var i = this,
                        t = {};
                    !1 === i.options.fade ? t[i.transitionType] = i.transformType + " " + i.options.speed + "ms " + i.options.cssEase : t[i.transitionType] = "opacity " + i.options.speed + "ms " + i.options.cssEase, !1 === i.options.fade ? i.$slideTrack.css(t) : i.$slides.eq(e).css(t)
                }, i.prototype.autoPlay = function() {
                    var e = this;
                    e.autoPlayTimer && clearInterval(e.autoPlayTimer), e.slideCount > e.options.slidesToShow && !0 !== e.paused && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
                }, i.prototype.autoPlayClear = function() {
                    var e = this;
                    e.autoPlayTimer && clearInterval(e.autoPlayTimer)
                }, i.prototype.autoPlayIterator = function() {
                    var e = this;
                    !1 === e.options.infinite ? 1 === e.direction ? (e.currentSlide + 1 === e.slideCount - 1 && (e.direction = 0), e.slideHandler(e.currentSlide + e.options.slidesToScroll)) : (e.currentSlide - 1 == 0 && (e.direction = 1), e.slideHandler(e.currentSlide - e.options.slidesToScroll)) : e.slideHandler(e.currentSlide + e.options.slidesToScroll)
                }, i.prototype.buildArrows = function() {
                    var i = this;
                    !0 === i.options.arrows && (i.$prevArrow = e(i.options.prevArrow).addClass("slick-arrow"), i.$nextArrow = e(i.options.nextArrow).addClass("slick-arrow"), i.slideCount > i.options.slidesToShow ? (i.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), i.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.prependTo(i.options.appendArrows), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.appendTo(i.options.appendArrows), !0 !== i.options.infinite && i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : i.$prevArrow.add(i.$nextArrow).addClass("slick-hidden").attr({
                        "aria-disabled": "true",
                        tabindex: "-1"
                    }))
                }, i.prototype.buildDots = function() {
                    var i, t, s = this;
                    if (!0 === s.options.dots && s.slideCount > s.options.slidesToShow) {
                        for (t = '<ul class="' + s.options.dotsClass + '">', i = 0; i <= s.getDotCount(); i += 1) t += "<li>" + s.options.customPaging.call(this, s, i) + "</li>";
                        t += "</ul>", s.$dots = e(t).appendTo(s.options.appendDots), s.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
                    }
                }, i.prototype.buildOut = function() {
                    var i = this;
                    i.$slides = i.$slider.children(i.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), i.slideCount = i.$slides.length, i.$slides.each(function(i, t) {
                        e(t).attr("data-slick-index", i).data("originalStyling", e(t).attr("style") || "")
                    }), i.$slider.addClass("slick-slider"), i.$slideTrack = 0 === i.slideCount ? e('<div class="slick-track"/>').appendTo(i.$slider) : i.$slides.wrapAll('<div class="slick-track"/>').parent(), i.$list = i.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), i.$slideTrack.css("opacity", 0), (!0 === i.options.centerMode || !0 === i.options.swipeToSlide) && (i.options.slidesToScroll = 1), e("img[data-lazy]", i.$slider).not("[src]").addClass("slick-loading"), i.setupInfinite(), i.buildArrows(), i.buildDots(), i.updateDots(), i.setSlideClasses("number" == typeof i.currentSlide ? i.currentSlide : 0), !0 === i.options.draggable && i.$list.addClass("draggable")
                }, i.prototype.buildRows = function() {
                    var e, i, t, s, o, a, n, r = this;
                    if (s = document.createDocumentFragment(), a = r.$slider.children(), r.options.rows > 1) {
                        for (n = r.options.slidesPerRow * r.options.rows, o = Math.ceil(a.length / n), e = 0; o > e; e++) {
                            var l = document.createElement("div");
                            for (i = 0; i < r.options.rows; i++) {
                                var d = document.createElement("div");
                                for (t = 0; t < r.options.slidesPerRow; t++) {
                                    var c = e * n + (i * r.options.slidesPerRow + t);
                                    a.get(c) && d.appendChild(a.get(c))
                                }
                                l.appendChild(d)
                            }
                            s.appendChild(l)
                        }
                        r.$slider.html(s), r.$slider.children().children().children().css({
                            width: 100 / r.options.slidesPerRow + "%",
                            display: "inline-block"
                        })
                    }
                }, i.prototype.checkResponsive = function(i, t) {
                    var s, o, a, n = this,
                        r = !1,
                        l = n.$slider.width(),
                        d = window.innerWidth || e(window).width();
                    if ("window" === n.respondTo ? a = d : "slider" === n.respondTo ? a = l : "min" === n.respondTo && (a = Math.min(d, l)), n.options.responsive && n.options.responsive.length && null !== n.options.responsive) {
                        for (s in o = null, n.breakpoints) n.breakpoints.hasOwnProperty(s) && (!1 === n.originalSettings.mobileFirst ? a < n.breakpoints[s] && (o = n.breakpoints[s]) : a > n.breakpoints[s] && (o = n.breakpoints[s]));
                        null !== o ? null !== n.activeBreakpoint ? (o !== n.activeBreakpoint || t) && (n.activeBreakpoint = o, "unslick" === n.breakpointSettings[o] ? n.unslick(o) : (n.options = e.extend({}, n.originalSettings, n.breakpointSettings[o]), !0 === i && (n.currentSlide = n.options.initialSlide), n.refresh(i)), r = o) : (n.activeBreakpoint = o, "unslick" === n.breakpointSettings[o] ? n.unslick(o) : (n.options = e.extend({}, n.originalSettings, n.breakpointSettings[o]), !0 === i && (n.currentSlide = n.options.initialSlide), n.refresh(i)), r = o) : null !== n.activeBreakpoint && (n.activeBreakpoint = null, n.options = n.originalSettings, !0 === i && (n.currentSlide = n.options.initialSlide), n.refresh(i), r = o), i || !1 === r || n.$slider.trigger("breakpoint", [n, r])
                    }
                }, i.prototype.changeSlide = function(i, t) {
                    var s, o, a, n = this,
                        r = e(i.target);
                    switch (r.is("a") && i.preventDefault(), r.is("li") || (r = r.closest("li")), a = n.slideCount % n.options.slidesToScroll != 0, s = a ? 0 : (n.slideCount - n.currentSlide) % n.options.slidesToScroll, i.data.message) {
                        case "previous":
                            o = 0 === s ? n.options.slidesToScroll : n.options.slidesToShow - s, n.slideCount > n.options.slidesToShow && n.slideHandler(n.currentSlide - o, !1, t);
                            break;
                        case "next":
                            o = 0 === s ? n.options.slidesToScroll : s, n.slideCount > n.options.slidesToShow && n.slideHandler(n.currentSlide + o, !1, t);
                            break;
                        case "index":
                            var l = 0 === i.data.index ? 0 : i.data.index || r.index() * n.options.slidesToScroll;
                            n.slideHandler(n.checkNavigable(l), !1, t), r.children().trigger("focus");
                            break;
                        default:
                            return
                    }
                }, i.prototype.checkNavigable = function(e) {
                    var i, t, s = this;
                    if (i = s.getNavigableIndexes(), t = 0, e > i[i.length - 1]) e = i[i.length - 1];
                    else
                        for (var o in i) {
                            if (e < i[o]) {
                                e = t;
                                break
                            }
                            t = i[o]
                        }
                    return e
                }, i.prototype.cleanUpEvents = function() {
                    var i = this;
                    i.options.dots && null !== i.$dots && (e("li", i.$dots).off("click.slick", i.changeSlide), !0 === i.options.pauseOnDotsHover && !0 === i.options.autoplay && e("li", i.$dots).off("mouseenter.slick", e.proxy(i.setPaused, i, !0)).off("mouseleave.slick", e.proxy(i.setPaused, i, !1))), !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow && i.$prevArrow.off("click.slick", i.changeSlide), i.$nextArrow && i.$nextArrow.off("click.slick", i.changeSlide)), i.$list.off("touchstart.slick mousedown.slick", i.swipeHandler), i.$list.off("touchmove.slick mousemove.slick", i.swipeHandler), i.$list.off("touchend.slick mouseup.slick", i.swipeHandler), i.$list.off("touchcancel.slick mouseleave.slick", i.swipeHandler), i.$list.off("click.slick", i.clickHandler), e(document).off(i.visibilityChange, i.visibility), i.$list.off("mouseenter.slick", e.proxy(i.setPaused, i, !0)), i.$list.off("mouseleave.slick", e.proxy(i.setPaused, i, !1)), !0 === i.options.accessibility && i.$list.off("keydown.slick", i.keyHandler), !0 === i.options.focusOnSelect && e(i.$slideTrack).children().off("click.slick", i.selectHandler), e(window).off("orientationchange.slick.slick-" + i.instanceUid, i.orientationChange), e(window).off("resize.slick.slick-" + i.instanceUid, i.resize), e("[draggable!=true]", i.$slideTrack).off("dragstart", i.preventDefault), e(window).off("load.slick.slick-" + i.instanceUid, i.setPosition), e(document).off("ready.slick.slick-" + i.instanceUid, i.setPosition)
                }, i.prototype.cleanUpRows = function() {
                    var e, i = this;
                    i.options.rows > 1 && (e = i.$slides.children().children(), e.removeAttr("style"), i.$slider.html(e))
                }, i.prototype.clickHandler = function(e) {
                    var i = this;
                    !1 === i.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
                }, i.prototype.destroy = function(i) {
                    var t = this;
                    t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), e(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
                        e(this).attr("style", e(this).data("originalStyling"))
                    }), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.unslicked = !0, i || t.$slider.trigger("destroy", [t])
                }, i.prototype.disableTransition = function(e) {
                    var i = this,
                        t = {};
                    t[i.transitionType] = "", !1 === i.options.fade ? i.$slideTrack.css(t) : i.$slides.eq(e).css(t)
                }, i.prototype.fadeSlide = function(e, i) {
                    var t = this;
                    !1 === t.cssTransitions ? (t.$slides.eq(e).css({
                        zIndex: t.options.zIndex
                    }), t.$slides.eq(e).animate({
                        opacity: 1
                    }, t.options.speed, t.options.easing, i)) : (t.applyTransition(e), t.$slides.eq(e).css({
                        opacity: 1,
                        zIndex: t.options.zIndex
                    }), i && setTimeout(function() {
                        t.disableTransition(e), i.call()
                    }, t.options.speed))
                }, i.prototype.fadeSlideOut = function(e) {
                    var i = this;
                    !1 === i.cssTransitions ? i.$slides.eq(e).animate({
                        opacity: 0,
                        zIndex: i.options.zIndex - 2
                    }, i.options.speed, i.options.easing) : (i.applyTransition(e), i.$slides.eq(e).css({
                        opacity: 0,
                        zIndex: i.options.zIndex - 2
                    }))
                }, i.prototype.filterSlides = i.prototype.slickFilter = function(e) {
                    var i = this;
                    null !== e && (i.$slidesCache = i.$slides, i.unload(), i.$slideTrack.children(this.options.slide).detach(), i.$slidesCache.filter(e).appendTo(i.$slideTrack), i.reinit())
                }, i.prototype.getCurrent = i.prototype.slickCurrentSlide = function() {
                    var e = this;
                    return e.currentSlide
                }, i.prototype.getDotCount = function() {
                    var e = this,
                        i = 0,
                        t = 0,
                        s = 0;
                    if (!0 === e.options.infinite)
                        for (; i < e.slideCount;) ++s, i = t + e.options.slidesToScroll, t += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
                    else if (!0 === e.options.centerMode) s = e.slideCount;
                    else
                        for (; i < e.slideCount;) ++s, i = t + e.options.slidesToScroll, t += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
                    return s - 1
                }, i.prototype.getLeft = function(e) {
                    var i, t, s, o = this,
                        a = 0;
                    return o.slideOffset = 0, t = o.$slides.first().outerHeight(!0), !0 === o.options.infinite ? (o.slideCount > o.options.slidesToShow && (o.slideOffset = o.slideWidth * o.options.slidesToShow * -1, a = t * o.options.slidesToShow * -1), o.slideCount % o.options.slidesToScroll != 0 && e + o.options.slidesToScroll > o.slideCount && o.slideCount > o.options.slidesToShow && (e > o.slideCount ? (o.slideOffset = (o.options.slidesToShow - (e - o.slideCount)) * o.slideWidth * -1, a = (o.options.slidesToShow - (e - o.slideCount)) * t * -1) : (o.slideOffset = o.slideCount % o.options.slidesToScroll * o.slideWidth * -1, a = o.slideCount % o.options.slidesToScroll * t * -1))) : e + o.options.slidesToShow > o.slideCount && (o.slideOffset = (e + o.options.slidesToShow - o.slideCount) * o.slideWidth, a = (e + o.options.slidesToShow - o.slideCount) * t), o.slideCount <= o.options.slidesToShow && (o.slideOffset = 0, a = 0), !0 === o.options.centerMode && !0 === o.options.infinite ? o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth : !0 === o.options.centerMode && (o.slideOffset = 0, o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2)), i = !1 === o.options.vertical ? e * o.slideWidth * -1 + o.slideOffset : e * t * -1 + a, !0 === o.options.variableWidth && (s = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(e) : o.$slideTrack.children(".slick-slide").eq(e + o.options.slidesToShow), i = !0 === o.options.rtl ? s[0] ? -1 * (o.$slideTrack.width() - s[0].offsetLeft - s.width()) : 0 : s[0] ? -1 * s[0].offsetLeft : 0, !0 === o.options.centerMode && (s = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(e) : o.$slideTrack.children(".slick-slide").eq(e + o.options.slidesToShow + 1), i = !0 === o.options.rtl ? s[0] ? -1 * (o.$slideTrack.width() - s[0].offsetLeft - s.width()) : 0 : s[0] ? -1 * s[0].offsetLeft : 0, i += (o.$list.width() - s.outerWidth()) / 2)), i
                }, i.prototype.getOption = i.prototype.slickGetOption = function(e) {
                    var i = this;
                    return i.options[e]
                }, i.prototype.getNavigableIndexes = function() {
                    var e, i = this,
                        t = 0,
                        s = 0,
                        o = [];
                    for (!1 === i.options.infinite ? e = i.slideCount : (t = -1 * i.options.slidesToScroll, s = -1 * i.options.slidesToScroll, e = 2 * i.slideCount); e > t;) o.push(t), t = s + i.options.slidesToScroll, s += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
                    return o
                }, i.prototype.getSlick = function() {
                    return this
                }, i.prototype.getSlideCount = function() {
                    var i, t, s = this;
                    return t = !0 === s.options.centerMode ? s.slideWidth * Math.floor(s.options.slidesToShow / 2) : 0, !0 === s.options.swipeToSlide ? (s.$slideTrack.find(".slick-slide").each(function(o, a) {
                        return a.offsetLeft - t + e(a).outerWidth() / 2 > -1 * s.swipeLeft ? (i = a, !1) : void 0
                    }), Math.abs(e(i).attr("data-slick-index") - s.currentSlide) || 1) : s.options.slidesToScroll
                }, i.prototype.goTo = i.prototype.slickGoTo = function(e, i) {
                    var t = this;
                    t.changeSlide({
                        data: {
                            message: "index",
                            index: parseInt(e)
                        }
                    }, i)
                }, i.prototype.init = function(i) {
                    var t = this;
                    e(t.$slider).hasClass("slick-initialized") || (e(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots()), i && t.$slider.trigger("init", [t]), !0 === t.options.accessibility && t.initADA()
                }, i.prototype.initArrowEvents = function() {
                    var e = this;
                    !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.on("click.slick", {
                        message: "previous"
                    }, e.changeSlide), e.$nextArrow.on("click.slick", {
                        message: "next"
                    }, e.changeSlide))
                }, i.prototype.initDotEvents = function() {
                    var i = this;
                    !0 === i.options.dots && i.slideCount > i.options.slidesToShow && e("li", i.$dots).on("click.slick", {
                        message: "index"
                    }, i.changeSlide), !0 === i.options.dots && !0 === i.options.pauseOnDotsHover && !0 === i.options.autoplay && e("li", i.$dots).on("mouseenter.slick", e.proxy(i.setPaused, i, !0)).on("mouseleave.slick", e.proxy(i.setPaused, i, !1))
                }, i.prototype.initializeEvents = function() {
                    var i = this;
                    i.initArrowEvents(), i.initDotEvents(), i.$list.on("touchstart.slick mousedown.slick", {
                        action: "start"
                    }, i.swipeHandler), i.$list.on("touchmove.slick mousemove.slick", {
                        action: "move"
                    }, i.swipeHandler), i.$list.on("touchend.slick mouseup.slick", {
                        action: "end"
                    }, i.swipeHandler), i.$list.on("touchcancel.slick mouseleave.slick", {
                        action: "end"
                    }, i.swipeHandler), i.$list.on("click.slick", i.clickHandler), e(document).on(i.visibilityChange, e.proxy(i.visibility, i)), i.$list.on("mouseenter.slick", e.proxy(i.setPaused, i, !0)), i.$list.on("mouseleave.slick", e.proxy(i.setPaused, i, !1)), !0 === i.options.accessibility && i.$list.on("keydown.slick", i.keyHandler), !0 === i.options.focusOnSelect && e(i.$slideTrack).children().on("click.slick", i.selectHandler), e(window).on("orientationchange.slick.slick-" + i.instanceUid, e.proxy(i.orientationChange, i)), e(window).on("resize.slick.slick-" + i.instanceUid, e.proxy(i.resize, i)), e("[draggable!=true]", i.$slideTrack).on("dragstart", i.preventDefault), e(window).on("load.slick.slick-" + i.instanceUid, i.setPosition), e(document).on("ready.slick.slick-" + i.instanceUid, i.setPosition)
                }, i.prototype.initUI = function() {
                    var e = this;
                    !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show(), !0 === e.options.autoplay && e.autoPlay()
                }, i.prototype.keyHandler = function(e) {
                    var i = this;
                    e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === i.options.accessibility ? i.changeSlide({
                        data: {
                            message: "previous"
                        }
                    }) : 39 === e.keyCode && !0 === i.options.accessibility && i.changeSlide({
                        data: {
                            message: "next"
                        }
                    }))
                }, i.prototype.lazyLoad = function() {
                    function i(i) {
                        e("img[data-lazy]", i).each(function() {
                            var i = e(this),
                                t = e(this).attr("data-lazy"),
                                s = document.createElement("img");
                            s.onload = function() {
                                i.animate({
                                    opacity: 0
                                }, 100, function() {
                                    i.attr("src", t).animate({
                                        opacity: 1
                                    }, 200, function() {
                                        i.removeAttr("data-lazy").removeClass("slick-loading")
                                    })
                                })
                            }, s.src = t
                        })
                    }
                    var t, s, o, a, n = this;
                    !0 === n.options.centerMode ? !0 === n.options.infinite ? (o = n.currentSlide + (n.options.slidesToShow / 2 + 1), a = o + n.options.slidesToShow + 2) : (o = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)), a = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (o = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide, a = o + n.options.slidesToShow, !0 === n.options.fade && (o > 0 && o--, a <= n.slideCount && a++)), t = n.$slider.find(".slick-slide").slice(o, a), i(t), n.slideCount <= n.options.slidesToShow ? (s = n.$slider.find(".slick-slide"), i(s)) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? (s = n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow), i(s)) : 0 === n.currentSlide && (s = n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow), i(s))
                }, i.prototype.loadSlider = function() {
                    var e = this;
                    e.setPosition(), e.$slideTrack.css({
                        opacity: 1
                    }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
                }, i.prototype.next = i.prototype.slickNext = function() {
                    var e = this;
                    e.changeSlide({
                        data: {
                            message: "next"
                        }
                    })
                }, i.prototype.orientationChange = function() {
                    var e = this;
                    e.checkResponsive(), e.setPosition()
                }, i.prototype.pause = i.prototype.slickPause = function() {
                    var e = this;
                    e.autoPlayClear(), e.paused = !0
                }, i.prototype.play = i.prototype.slickPlay = function() {
                    var e = this;
                    e.paused = !1, e.autoPlay()
                }, i.prototype.postSlide = function(e) {
                    var i = this;
                    i.$slider.trigger("afterChange", [i, e]), i.animating = !1, i.setPosition(), i.swipeLeft = null, !0 === i.options.autoplay && !1 === i.paused && i.autoPlay(), !0 === i.options.accessibility && i.initADA()
                }, i.prototype.prev = i.prototype.slickPrev = function() {
                    var e = this;
                    e.changeSlide({
                        data: {
                            message: "previous"
                        }
                    })
                }, i.prototype.preventDefault = function(e) {
                    e.preventDefault()
                }, i.prototype.progressiveLazyLoad = function() {
                    var i, t, s = this;
                    i = e("img[data-lazy]", s.$slider).length, i > 0 && (t = e("img[data-lazy]", s.$slider).first(), t.attr("src", null), t.attr("src", t.attr("data-lazy")).removeClass("slick-loading").load(function() {
                        t.removeAttr("data-lazy"), s.progressiveLazyLoad(), !0 === s.options.adaptiveHeight && s.setPosition()
                    }).error(function() {
                        t.removeAttr("data-lazy"), s.progressiveLazyLoad()
                    }))
                }, i.prototype.refresh = function(i) {
                    var t, s, o = this;
                    s = o.slideCount - o.options.slidesToShow, o.options.infinite || (o.slideCount <= o.options.slidesToShow ? o.currentSlide = 0 : o.currentSlide > s && (o.currentSlide = s)), t = o.currentSlide, o.destroy(!0), e.extend(o, o.initials, {
                        currentSlide: t
                    }), o.init(), i || o.changeSlide({
                        data: {
                            message: "index",
                            index: t
                        }
                    }, !1)
                }, i.prototype.registerBreakpoints = function() {
                    var i, t, s, o = this,
                        a = o.options.responsive || null;
                    if ("array" === e.type(a) && a.length) {
                        for (i in o.respondTo = o.options.respondTo || "window", a)
                            if (s = o.breakpoints.length - 1, t = a[i].breakpoint, a.hasOwnProperty(i)) {
                                for (; s >= 0;) o.breakpoints[s] && o.breakpoints[s] === t && o.breakpoints.splice(s, 1), s--;
                                o.breakpoints.push(t), o.breakpointSettings[t] = a[i].settings
                            }
                        o.breakpoints.sort(function(e, i) {
                            return o.options.mobileFirst ? e - i : i - e
                        })
                    }
                }, i.prototype.reinit = function() {
                    var i = this;
                    i.$slides = i.$slideTrack.children(i.options.slide).addClass("slick-slide"), i.slideCount = i.$slides.length, i.currentSlide >= i.slideCount && 0 !== i.currentSlide && (i.currentSlide = i.currentSlide - i.options.slidesToScroll), i.slideCount <= i.options.slidesToShow && (i.currentSlide = 0), i.registerBreakpoints(), i.setProps(), i.setupInfinite(), i.buildArrows(), i.updateArrows(), i.initArrowEvents(), i.buildDots(), i.updateDots(), i.initDotEvents(), i.checkResponsive(!1, !0), !0 === i.options.focusOnSelect && e(i.$slideTrack).children().on("click.slick", i.selectHandler), i.setSlideClasses(0), i.setPosition(), i.$slider.trigger("reInit", [i]), !0 === i.options.autoplay && i.focusHandler()
                }, i.prototype.resize = function() {
                    var i = this;
                    e(window).width() !== i.windowWidth && (clearTimeout(i.windowDelay), i.windowDelay = window.setTimeout(function() {
                        i.windowWidth = e(window).width(), i.checkResponsive(), i.unslicked || i.setPosition()
                    }, 50))
                }, i.prototype.removeSlide = i.prototype.slickRemove = function(e, i, t) {
                    var s = this;
                    return "boolean" == typeof e ? (i = e, e = !0 === i ? 0 : s.slideCount - 1) : e = !0 === i ? --e : e, !(s.slideCount < 1 || 0 > e || e > s.slideCount - 1) && (s.unload(), !0 === t ? s.$slideTrack.children().remove() : s.$slideTrack.children(this.options.slide).eq(e).remove(), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slidesCache = s.$slides, void s.reinit())
                }, i.prototype.setCSS = function(e) {
                    var i, t, s = this,
                        o = {};
                    !0 === s.options.rtl && (e = -e), i = "left" == s.positionProp ? Math.ceil(e) + "px" : "0px", t = "top" == s.positionProp ? Math.ceil(e) + "px" : "0px", o[s.positionProp] = e, !1 === s.transformsEnabled ? s.$slideTrack.css(o) : (o = {}, !1 === s.cssTransitions ? (o[s.animType] = "translate(" + i + ", " + t + ")", s.$slideTrack.css(o)) : (o[s.animType] = "translate3d(" + i + ", " + t + ", 0px)", s.$slideTrack.css(o)))
                }, i.prototype.setDimensions = function() {
                    var e = this;
                    !1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({
                        padding: "0px " + e.options.centerPadding
                    }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({
                        padding: e.options.centerPadding + " 0px"
                    })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
                    var i = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
                    !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - i)
                }, i.prototype.setFade = function() {
                    var i, t = this;
                    t.$slides.each(function(s, o) {
                        i = t.slideWidth * s * -1, !0 === t.options.rtl ? e(o).css({
                            position: "relative",
                            right: i,
                            top: 0,
                            zIndex: t.options.zIndex - 2,
                            opacity: 0
                        }) : e(o).css({
                            position: "relative",
                            left: i,
                            top: 0,
                            zIndex: t.options.zIndex - 2,
                            opacity: 0
                        })
                    }), t.$slides.eq(t.currentSlide).css({
                        zIndex: t.options.zIndex - 1,
                        opacity: 1
                    })
                }, i.prototype.setHeight = function() {
                    var e = this;
                    if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
                        var i = e.$slides.eq(e.currentSlide).outerHeight(!0);
                        e.$list.css("height", i)
                    }
                }, i.prototype.setOption = i.prototype.slickSetOption = function(i, t, s) {
                    var o, a, n = this;
                    if ("responsive" === i && "array" === e.type(t))
                        for (a in t)
                            if ("array" !== e.type(n.options.responsive)) n.options.responsive = [t[a]];
                            else {
                                for (o = n.options.responsive.length - 1; o >= 0;) n.options.responsive[o].breakpoint === t[a].breakpoint && n.options.responsive.splice(o, 1), o--;
                                n.options.responsive.push(t[a])
                            }
                    else n.options[i] = t;
                    !0 === s && (n.unload(), n.reinit())
                }, i.prototype.setPosition = function() {
                    var e = this;
                    e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
                }, i.prototype.setProps = function() {
                    var e = this,
                        i = document.body.style;
                    e.positionProp = !0 === e.options.vertical ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), (void 0 !== i.WebkitTransition || void 0 !== i.MozTransition || void 0 !== i.msTransition) && !0 === e.options.useCSS && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== i.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === i.perspectiveProperty && void 0 === i.webkitPerspective && (e.animType = !1)), void 0 !== i.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === i.perspectiveProperty && void 0 === i.MozPerspective && (e.animType = !1)), void 0 !== i.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === i.perspectiveProperty && void 0 === i.webkitPerspective && (e.animType = !1)), void 0 !== i.msTransform && (e.animType = "msTransform",
                        e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === i.msTransform && (e.animType = !1)), void 0 !== i.transform && !1 !== e.animType && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType
                }, i.prototype.setSlideClasses = function(e) {
                    var i, t, s, o, a = this;
                    t = a.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), a.$slides.eq(e).addClass("slick-current"), !0 === a.options.centerMode ? (i = Math.floor(a.options.slidesToShow / 2), !0 === a.options.infinite && (e >= i && e <= a.slideCount - 1 - i ? a.$slides.slice(e - i, e + i + 1).addClass("slick-active").attr("aria-hidden", "false") : (s = a.options.slidesToShow + e, t.slice(s - i + 1, s + i + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? t.eq(t.length - 1 - a.options.slidesToShow).addClass("slick-center") : e === a.slideCount - 1 && t.eq(a.options.slidesToShow).addClass("slick-center")), a.$slides.eq(e).addClass("slick-center")) : e >= 0 && e <= a.slideCount - a.options.slidesToShow ? a.$slides.slice(e, e + a.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : t.length <= a.options.slidesToShow ? t.addClass("slick-active").attr("aria-hidden", "false") : (o = a.slideCount % a.options.slidesToShow, s = !0 === a.options.infinite ? a.options.slidesToShow + e : e, a.options.slidesToShow == a.options.slidesToScroll && a.slideCount - e < a.options.slidesToShow ? t.slice(s - (a.options.slidesToShow - o), s + o).addClass("slick-active").attr("aria-hidden", "false") : t.slice(s, s + a.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === a.options.lazyLoad && a.lazyLoad()
                }, i.prototype.setupInfinite = function() {
                    var i, t, s, o = this;
                    if (!0 === o.options.fade && (o.options.centerMode = !1), !0 === o.options.infinite && !1 === o.options.fade && (t = null, o.slideCount > o.options.slidesToShow)) {
                        for (s = !0 === o.options.centerMode ? o.options.slidesToShow + 1 : o.options.slidesToShow, i = o.slideCount; i > o.slideCount - s; i -= 1) t = i - 1, e(o.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
                        for (i = 0; s > i; i += 1) t = i, e(o.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
                        o.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                            e(this).attr("id", "")
                        })
                    }
                }, i.prototype.setPaused = function(e) {
                    var i = this;
                    !0 === i.options.autoplay && !0 === i.options.pauseOnHover && (i.paused = e, e ? i.autoPlayClear() : i.autoPlay())
                }, i.prototype.selectHandler = function(i) {
                    var t = this,
                        s = e(i.target).is(".slick-slide") ? e(i.target) : e(i.target).parents(".slick-slide"),
                        o = parseInt(s.attr("data-slick-index"));
                    return o || (o = 0), t.slideCount <= t.options.slidesToShow ? (t.setSlideClasses(o), void t.asNavFor(o)) : void t.slideHandler(o)
                }, i.prototype.slideHandler = function(e, i, t) {
                    var s, o, a, n, r = null,
                        l = this;
                    return i = i || !1, !0 === l.animating && !0 === l.options.waitForAnimate || !0 === l.options.fade && l.currentSlide === e || l.slideCount <= l.options.slidesToShow ? void 0 : (!1 === i && l.asNavFor(e), s = e, r = l.getLeft(s), n = l.getLeft(l.currentSlide), l.currentLeft = null === l.swipeLeft ? n : l.swipeLeft, !1 === l.options.infinite && !1 === l.options.centerMode && (0 > e || e > l.getDotCount() * l.options.slidesToScroll) ? void(!1 === l.options.fade && (s = l.currentSlide, !0 !== t ? l.animateSlide(n, function() {
                        l.postSlide(s)
                    }) : l.postSlide(s))) : !1 === l.options.infinite && !0 === l.options.centerMode && (0 > e || e > l.slideCount - l.options.slidesToScroll) ? void(!1 === l.options.fade && (s = l.currentSlide, !0 !== t ? l.animateSlide(n, function() {
                        l.postSlide(s)
                    }) : l.postSlide(s))) : (!0 === l.options.autoplay && clearInterval(l.autoPlayTimer), o = 0 > s ? l.slideCount % l.options.slidesToScroll != 0 ? l.slideCount - l.slideCount % l.options.slidesToScroll : l.slideCount + s : s >= l.slideCount ? l.slideCount % l.options.slidesToScroll != 0 ? 0 : s - l.slideCount : s, l.animating = !0, l.$slider.trigger("beforeChange", [l, l.currentSlide, o]), a = l.currentSlide, l.currentSlide = o, l.setSlideClasses(l.currentSlide), l.updateDots(), l.updateArrows(), !0 === l.options.fade ? (!0 !== t ? (l.fadeSlideOut(a), l.fadeSlide(o, function() {
                        l.postSlide(o)
                    })) : l.postSlide(o), void l.animateHeight()) : void(!0 !== t ? l.animateSlide(r, function() {
                        l.postSlide(o)
                    }) : l.postSlide(o))))
                }, i.prototype.startLoad = function() {
                    var e = this;
                    !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
                }, i.prototype.swipeDirection = function() {
                    var e, i, t, s, o = this;
                    return e = o.touchObject.startX - o.touchObject.curX, i = o.touchObject.startY - o.touchObject.curY, t = Math.atan2(i, e), s = Math.round(180 * t / Math.PI), 0 > s && (s = 360 - Math.abs(s)), 45 >= s && s >= 0 ? !1 === o.options.rtl ? "left" : "right" : 360 >= s && s >= 315 ? !1 === o.options.rtl ? "left" : "right" : s >= 135 && 225 >= s ? !1 === o.options.rtl ? "right" : "left" : !0 === o.options.verticalSwiping ? s >= 35 && 135 >= s ? "left" : "right" : "vertical"
                }, i.prototype.swipeEnd = function(e) {
                    var i, t = this;
                    if (t.dragging = !1, t.shouldClick = !(t.touchObject.swipeLength > 10), void 0 === t.touchObject.curX) return !1;
                    if (!0 === t.touchObject.edgeHit && t.$slider.trigger("edge", [t, t.swipeDirection()]), t.touchObject.swipeLength >= t.touchObject.minSwipe) switch (t.swipeDirection()) {
                        case "left":
                            i = t.options.swipeToSlide ? t.checkNavigable(t.currentSlide + t.getSlideCount()) : t.currentSlide + t.getSlideCount(), t.slideHandler(i), t.currentDirection = 0, t.touchObject = {}, t.$slider.trigger("swipe", [t, "left"]);
                            break;
                        case "right":
                            i = t.options.swipeToSlide ? t.checkNavigable(t.currentSlide - t.getSlideCount()) : t.currentSlide - t.getSlideCount(), t.slideHandler(i), t.currentDirection = 1, t.touchObject = {}, t.$slider.trigger("swipe", [t, "right"])
                    } else t.touchObject.startX !== t.touchObject.curX && (t.slideHandler(t.currentSlide), t.touchObject = {})
                }, i.prototype.swipeHandler = function(e) {
                    var i = this;
                    if (!(!1 === i.options.swipe || "ontouchend" in document && !1 === i.options.swipe || !1 === i.options.draggable && -1 !== e.type.indexOf("mouse"))) switch (i.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, i.touchObject.minSwipe = i.listWidth / i.options.touchThreshold, !0 === i.options.verticalSwiping && (i.touchObject.minSwipe = i.listHeight / i.options.touchThreshold), e.data.action) {
                        case "start":
                            i.swipeStart(e);
                            break;
                        case "move":
                            i.swipeMove(e);
                            break;
                        case "end":
                            i.swipeEnd(e)
                    }
                }, i.prototype.swipeMove = function(e) {
                    var i, t, s, o, a, n = this;
                    return a = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!n.dragging || a && 1 !== a.length) && (i = n.getLeft(n.currentSlide), n.touchObject.curX = void 0 !== a ? a[0].pageX : e.clientX, n.touchObject.curY = void 0 !== a ? a[0].pageY : e.clientY, n.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(n.touchObject.curX - n.touchObject.startX, 2))), !0 === n.options.verticalSwiping && (n.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(n.touchObject.curY - n.touchObject.startY, 2)))), t = n.swipeDirection(), "vertical" !== t ? (void 0 !== e.originalEvent && n.touchObject.swipeLength > 4 && e.preventDefault(), o = (!1 === n.options.rtl ? 1 : -1) * (n.touchObject.curX > n.touchObject.startX ? 1 : -1), !0 === n.options.verticalSwiping && (o = n.touchObject.curY > n.touchObject.startY ? 1 : -1), s = n.touchObject.swipeLength, n.touchObject.edgeHit = !1, !1 === n.options.infinite && (0 === n.currentSlide && "right" === t || n.currentSlide >= n.getDotCount() && "left" === t) && (s = n.touchObject.swipeLength * n.options.edgeFriction, n.touchObject.edgeHit = !0), !1 === n.options.vertical ? n.swipeLeft = i + s * o : n.swipeLeft = i + s * (n.$list.height() / n.listWidth) * o, !0 === n.options.verticalSwiping && (n.swipeLeft = i + s * o), !0 !== n.options.fade && !1 !== n.options.touchMove && (!0 === n.animating ? (n.swipeLeft = null, !1) : void n.setCSS(n.swipeLeft))) : void 0)
                }, i.prototype.swipeStart = function(e) {
                    var i, t = this;
                    return 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow ? (t.touchObject = {}, !1) : (void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (i = e.originalEvent.touches[0]), t.touchObject.startX = t.touchObject.curX = void 0 !== i ? i.pageX : e.clientX, t.touchObject.startY = t.touchObject.curY = void 0 !== i ? i.pageY : e.clientY, void(t.dragging = !0))
                }, i.prototype.unfilterSlides = i.prototype.slickUnfilter = function() {
                    var e = this;
                    null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
                }, i.prototype.unload = function() {
                    var i = this;
                    e(".slick-cloned", i.$slider).remove(), i.$dots && i.$dots.remove(), i.$prevArrow && i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove(), i.$nextArrow && i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove(), i.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
                }, i.prototype.unslick = function(e) {
                    var i = this;
                    i.$slider.trigger("unslick", [i, e]), i.destroy()
                }, i.prototype.updateArrows = function() {
                    var e = this;
                    Math.floor(e.options.slidesToShow / 2), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
                }, i.prototype.updateDots = function() {
                    var e = this;
                    null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
                }, i.prototype.visibility = function() {
                    var e = this;
                    document[e.hidden] ? (e.paused = !0, e.autoPlayClear()) : !0 === e.options.autoplay && (e.paused = !1, e.autoPlay())
                }, i.prototype.initADA = function() {
                    var i = this;
                    i.$slides.add(i.$slideTrack.find(".slick-cloned")).attr({
                        "aria-hidden": "true",
                        tabindex: "-1"
                    }).find("a, input, button, select").attr({
                        tabindex: "-1"
                    }), i.$slideTrack.attr("role", "listbox"), i.$slides.not(i.$slideTrack.find(".slick-cloned")).each(function(t) {
                        e(this).attr({
                            role: "option",
                            "aria-describedby": "slick-slide" + i.instanceUid + t
                        })
                    }), null !== i.$dots && i.$dots.attr("role", "tablist").find("li").each(function(t) {
                        e(this).attr({
                            role: "presentation",
                            "aria-selected": "false",
                            "aria-controls": "navigation" + i.instanceUid + t,
                            id: "slick-slide" + i.instanceUid + t
                        })
                    }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), i.activateADA()
                }, i.prototype.activateADA = function() {
                    var e = this;
                    e.$slideTrack.find(".slick-active").attr({
                        "aria-hidden": "false"
                    }).find("a, input, button, select").attr({
                        tabindex: "0"
                    })
                }, i.prototype.focusHandler = function() {
                    var i = this;
                    i.$slider.on("focus.slick blur.slick", "*", function(t) {
                        t.stopImmediatePropagation();
                        var s = e(this);
                        setTimeout(function() {
                            i.isPlay && (s.is(":focus") ? (i.autoPlayClear(), i.paused = !0) : (i.paused = !1, i.autoPlay()))
                        }, 0)
                    })
                }, e.fn.slick = function() {
                    var e, t, s = this,
                        o = arguments[0],
                        a = Array.prototype.slice.call(arguments, 1),
                        n = s.length;
                    for (e = 0; n > e; e++)
                        if ("object" == typeof o || void 0 === o ? s[e].slick = new i(s[e], o) : t = s[e].slick[o].apply(s[e].slick, a), void 0 !== t) return t;
                    return s
                }
            }), Number.prototype.formatMoney = function(b, i, t) {
                var s = this,
                    o = (e = isNaN(e = Math.abs(e)) ? 2 : e, i = null == i ? "." : i, t = null == t ? "," : t, s < 0 ? "-" : ""),
                    a = parseInt(s = Math.abs(+s || 0).toFixed(e)) + "",
                    n = (n = a.length) > 3 ? n % 3 : 0;
                return o + (n ? a.substr(0, n) + t : "") + a.substr(n).replace(/(d{3})(?=d)/g, "$1" + t) + (e ? i + Math.abs(s - a).toFixed(e).slice(2) : "")
            };
        }

        imgShift = function() {
            var storeList = !!$(".listagem-linha.flexslider").length;
            $(".listagem-item .imagem-produto img").each(function() {
                var i = $(this);
                i.attr(storeList ? "data-lazy" : "data-src", i.attr("src").replace("300x300", "310x374")), i.attr("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAAB2AQMAAAAJLNTAAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAABRJREFUOMtjGAWjYBSMglEwCugEAAZ0AAEZEizLAAAAAElFTkSuQmCC").addClass(storeList ? "" : "lazyload"), i.data("imagem-caminho") && i.attr("data-imagem-caminho", i.data("imagem-caminho").replace("300x300", "310x374"))
            }), $("#rodape img").each(function() {
                $(this).attr("data-src", $(this).attr("src")).addClass("lazyload").removeAttr("src")
            })
        }

        storeShift = function() {
            imgShift();
            var b = $(".banner.tarja img");

            b.length && b.attr("src", b.attr("src").replace("1140x1448/", "2696x1000/")), setTimeout(function() {
                    var b = $(".banner-full");
                    !b.length || $(window).width() < 768 ? (b.addClass("mobile"), $(".banner.cheio").append('<div class="full-banners"></div>'), $(".banner.cheio img").each(function(b) {
                        b > 1 ? $(this).attr(b > 1 ? "data-lazy" : "src", $(this).attr("src")).removeAttr("src").parent().wrap('<div class="banner"></div>').parent().appendTo(".full-banners") : $(this).parent().wrap('<div class="banner"></div>').parent().appendTo(".full-banners")
                    }), $(".banner.cheio p, .banner.cheio .flexslider").remove(), $(".secao-banners .full-banners").prependTo(".secao-banners"), $(".full-banners .banner").length > 1 && $(".full-banners").slick({
                        infinite: !0,
                        arrows: !0,
                        lazyLoad: "ondemand",
                        speed: 600,
                        fade: true,
                        slidesToShow: 1,
                        dots: !0,
                        autoplay: !0,
                        autoplaySpeed: 5e3
                    })) : $(".banner.cheio .flexslider").remove()
                }, 2), $(".banner.mini-banner .modulo img").each(function() {
                    $(this).attr("data-src", $(this).attr("src").replace("400x400/", "")).addClass("lazyload"), "A" == this.parentNode.nodeName ? $(this).parent().unwrap().unwrap().unwrap() : $(this).unwrap().unwrap().unwrap()
                }), $(".banner.mini-banner .sem-banner").remove(),

                $(".listagem-linha").each(function() {
                    if ($(this).hasClass("flexslider")) {
                        var b = $(this).find("ul").html();
                        $(this).find(".flex-viewport").remove(), $(this).find(".flex-direction-nav").remove(), $(this).append("<ul class='slick-product'>" + b + "</ul>")
                    } else $(this).find("li").removeAttr("class").unwrap().unwrap()
                });

            var i = Number($("[data-produtos-linha]").attr("data-produtos-linha"));
            if ($("img[data-imagem-caminho]").length && $("body").on("mouseover", ".listagem-item", function() {
                    var b = $(this).find("img[data-imagem-caminho]");
                    b.hasClass("hover") || (b.addClass("hover"), b.after('<img src="' + b.data("imagem-caminho") + '" class="imagem-zoom">'))
                }), i) new LazyLoad2({
                threshold: 120,
                elements_selector: ".slick-product",
                callback_enter: function(b) {
                    $(b).slick({
                        infinite: !0,
                        lazyLoad: "ondemand",
                        speed: 300,
                        slidesToShow: i,
                        slidesToScroll: 1,
                        responsive: [{
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: i - 1,
                                slidesToScroll: i - 1,
                                infinite: !0
                            }
                        }, {
                            breakpoint: 480,
                            settings: {
                                arrows: !1,
                                slidesToShow: 2,
                                slidesToScroll: 2,
                                infinite: !0
                            }
                        }]
                    })
                }
            })
        }

        testimonial = function() {
            if (typeof avaliacoes !== 'undefined' && $('.pagina-inicial').length) {
                $('body').append(`<div id="avaliacoes">
                    <div class="conteiner">
                    <div class="row-fluid">
                    <h4>Depoimentos <strong>dos nossos Clientes</strong></h4>
                    <div class="span8 offset2">
                    <div class="rating-content">
                    <ul class="slides"></ul>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>`);

                var slides = $('#avaliacoes ul.slides');
                $.each(avaliacoes, function(i, item) {
                    var content = avaliacoes[i];
                    var li = $('<li/>').addClass('box-rating-item').appendTo(slides);
                    // var img = $('<img/>').addClass('avatar').attr('src', content.avatar).appendTo(li);
                    var blockquote = $('<blockquote/>').addClass('text-left').appendTo(li);
                    var client = $('<div/>').text(content.nome + ", ").addClass('name').appendTo(blockquote);
                    var cite = $('<p/>').addClass('customerCity').text(content.cidade).appendTo(client);
                    var p = $('<p/>').text(content.comentario).appendTo(blockquote);
                    var b = $('<div/>').addClass('box-footer').appendTo(blockquote);
                    var e = $('<div class="starRating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>').appendTo(b);
                    var a = $('<a/>').text('ver produto').addClass('linkProduto').attr('href', content.url).appendTo(b);


                });

                $('#avaliacoes').appendTo('#corpo .secao-secundaria');


                // $(window).load(function() {
                $('#avaliacoes .slides').slick({
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    dots: false,
                    responsive: [{
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 3,
                                infinite: true,
                                dots: true
                            }
                        },
                        {
                            breakpoint: 600,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 2
                            }
                        },
                        {
                            breakpoint: 480,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                autoplaySpeed: 3000

                            }
                        }
                    ]
                });



            }
        }

        updateTheme = function() {
            $("head").append($('<link rel="stylesheet" href="https://foxtech.io/stylesheets/vendamais-update.css">'));
            $("head").append($('<script async src="https://foxtech.io/javascripts/vendamais-update.js"></script>'));


            // REMOVER ERRO SLICK NA LISTAGEM
            $('#listagemProdutos .slick-dots').remove();

            // RENOMEAR CONTATO FOOTER 
            $("#rodape .span4.contato .titulo").html("Atendimento");

            // AJUSTA SUBMENU
            var menuSuperiorWidth = $('.menu.superior').outerWidth();
            var $nivelUmli = $('.menu.superior .nivel-um > li');

            if ($nivelUmli.length) {
                $.each($nivelUmli, function() {
                    var $this = $(this);
                    var $nivelDois = $this.find('.nivel-dois');
                    var nivelDoisWidth, nivelUmLeft, total, diferencaTelaConteiner;
                    if ($nivelDois.length) {
                        nivelDoisWidth = $nivelDois.outerWidth();
                        diferencaTelaConteiner = ($(window).width() - menuSuperiorWidth) / 2;
                        nivelUmLeft = $this.offset().left - diferencaTelaConteiner;

                        if ((nivelUmLeft + nivelDoisWidth) >= menuSuperiorWidth) {
                            $nivelDois.css('left', '-' + ((nivelUmLeft + nivelDoisWidth) - menuSuperiorWidth) + 'px');
                        } else {
                            $nivelDois.css('left', '0');
                        }
                    }
                });
            }
        }

        rastreio = function() {
            $('body').append('<div class="modal fade hide" id="modalRastreio"> <div class="modal-header"><h3 class="modal-title">Rastreamento de pedidos</h3><button type="button" class="close" data-dismiss="modal" aria-label="Close"><i class="fa fa-times"></i></button></div><div class="modal-body"></div></div>');
            $('#modalRastreio .modal-body').append('<form id="formRastrearObj"><input id="rastrearObj" placeholder="Digite seu cÃ³digo de rastreio"><div class="objSearch" onclick="$(this).parent().submit()"><a>Buscar</a></div></form>');


            $('#formRastrearObj').on('submit', function(e) {
                e.preventDefault();
                var code = $('#rastrearObj').val();
                $('#formRastrearObj').addClass('loading');
                window.open('https://melhorrastreio.com.br/rastreio/' + code)
            });
        }

        $(function() {
            head(), slickTheme(), storeShift(), highBanners(), rastreio(), quantyOption(), addFavorito(), copyright(), allFunctions(), renameTitles(), newRodape(), responsiveNew(), openMenu(), scrollTopo(), FreeShipping(), whatsHelp(), updateTheme(), vitrineTime(), menuOptions(), brandSlick(), videoBanners(), testimonial(), newsLetter(), topBar(), instaFeed(), dropDownAtendimento()

        });

        $(document).ready(function() {
            // window.stop();
            $("img[src], iframe[src]").each(function() {
                $(this).attr("src", $(this).attr("src"))
            });
            setTimeout(function() {
                new LazyLoad2({
                    elements_selector: ".lazyload",
                    threshold: 100
                })
            })
        });
    }
});