var lang;
var arrLang = {
    'en' : {
        'home' : 'HOME',
        'products' : "PRODUCTS",
        'about' : 'ABOUT',
        'page' : "COMPUTER STORE",
        'quality' : "QUALITY",
        'language' : "Language",
        'h1' : "Gaming Computers",
        'p1' : "High Performance, Killer Looks!",
        'moreinfo' : 'More Information',
        'email' : 'Email',
        'location' : 'Location',
        'university' : "University",
        'copyright' : "Copyright © 2020 Computer Store - Terms of Service - Return Policy . ",
        'addtocart' : "Add to Cart",
        'h3' : "Maximized Performance",
        'h4' : "Built Tough",
        'p3' : "Every Computer is expertly crafted to maximize every bit of power in your system. Rigorously tested for up to 72 hours, we ensure that your PC is functioning at its absolute maximum for years of hard core usage.",
        'p4' : "We stand behind our gaming computers with an unrivaled, 5-year labor 3-year parts Warranty at no additional charge, on desktops only. We firmly believe in the quality and longevity of our PCs. With our 5-year warranty, you will too."
    },
    'lt' : {
        'home' : 'NAMAI',
        'products' : "PRODUKTAI",
        'about' : "APIE",
        'page' : "COMPUTER STORE",
        'quality' : "KOKYBĖ",
        'language' : "Kalba",
        'h1' : "Žaidimų kompiuteriai",
        'p1' : "Aukštas našumas, akį rėžianti išvaizda!",
        'moreinfo' : "Daugiau Informacijos",
        'email' : 'El-paštas',
        'location' : 'Vieta',
        'university' : "Universitetas",
        'copyright' : "Autorinės teisės © 2020 Computer Store - Paslaugų teikimo sąlygos - Grąžinimo politika.",
        'addtocart' : "Pridėti į Krepšelį",
        'h3' : "Maksimalus našumas",
        'h4' : "Tvirta konstrukcija",
        'p3' : "Kiekvienas kompiuteris yra meistriškai pagamintas taip, kad padidintų jūsų sistemos galią. Griežtai išbandę iki 72 valandų, mes garantuojame, kad jūsų kompiuteris maksimaliai funkcionuoja maksimaliai per daug metų.        ",
        'p4' : "Mes stovime už savo žaidimų kompiuterių, turinčių neprilygstamą 5 metų darbo 3 metų dalių garantiją be jokio papildomo mokesčio, tik staliniuose kompiuteriuose. Mes tvirtai tikime savo kompiuterių kokybe ir ilgaamžiškumu. Turėdami 5 metų garantiją, jūs taip pat tai padarysite."
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
    $('.copyright-text').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.btn-success.add-to-cart-button').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.post-title h3 span').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.post-content p3 span').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.post-title h4 span').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.post-content p4 span').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
});

