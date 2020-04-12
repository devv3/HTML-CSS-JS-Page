var lang;
var arrLang = {
    'en' : {
        'home' : 'HOME',
        'products' : "PRODUCTS",
        'about' : 'ABOUT',
        'page' : "PAGE",
        'language' : "Language",
        'h1' : "Gaming Computers",
        'p1' : "High Performance, Killer Looks!",
        'moreinfo' : 'More Information',
        'email' : 'Email',
        'location' : 'Location',
        'university' : "University",
     
    },
    'lt' : {
        'home' : 'NAMAI',
        'products' : "PRODUKTAI",
        'about' : "APIE",
        'page' : "PUSLAPIS",
        'language' : "Kalba",
        'h1' : "Žaidimų kompiuteriai",
        'p1' : "Aukštas našumas, akį rėžianti išvaizda!",
        'moreinfo' : "Daugiau Informacijos",
        'email' : 'El-paštas',
        'location' : 'Vieta',
        'university' : "Universitetas",
    }
};
$(function(){
    $('.dropdown-item').click(function(){
        localStorage.setItem(lang, $(this).attr('id'))
        window.location.reload()
    });
    $('.nav-link').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.logo').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.dropbtn').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.intro-text h1 span').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.intro-text p span').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.li-modal1').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.li-modal2').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.li-modal3').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.li-modal4').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.li-modal5').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.li-modal6').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });

});

