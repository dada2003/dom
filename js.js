;
(function () {
    'use strict';

    let appElement = document.getElementById('app');

    var link = document.createElement('a');
    var pic = document.createElement('img');
    var parag = document.createElement('p');
    var linkDocs = document.createElement('a');
    var mainPic = document.createElement('img');
    var Mtitle = document.createElement('h2');
    var secondP = document.createElement('p');





    var title = document.createTextNode('Beetroot Academy - Odessa');
    link.appendChild(title);
    link.href="https://beetroot.se/";
    pic.setAttribute('src', 'https://scontent.fiev4-1.fna.fbcdn.net/v/t1.0-1/p50x50/18881915_294785030967317_8120908652541194416_n.png?oh=af0d38c95ecc25c7eaa11cdea1b7563d&oe=5A512F9A');
    parag.innerHTML = "Выиграй стипендию на бесплатное обучение от Beetroot Academy! Ответь на наш короткий опросник, чтобы принять участие в розыгрыше приза ";
    linkDocs.innerHTML = "https://docs.google.com/…/1FAIpQLSe6ntpTYt3C2ERH6z…/viewform";
    linkDocs.href="#";
    mainPic.setAttribute('src', 'https://external.fiev4-1.fna.fbcdn.net/safe_image.php?d=AQB5FMD_SBdCKrKx&w=476&h=249&url=https%3A%2F%2Flh6.googleusercontent.com%2Fq-TOaf-GMDX5J7cm1NnZ3SVcn3uUm_rgGLWJvnMeYS52a8DQ3VtfbQXLTvekgtnw1UU%3Dw1200-h630-p&cfs=1&upscale=1&_nc_hash=AQC-6yEaB1hN5yRr');
    secondP.innerHTML = "Хочешь выиграть стипендию, которая полностью покроет стоимость обучения на одном из наших четырех курсов? В любом из городов, где мы присутствуем? Разыгрываем магический билет в твое новое будущее! Согласись, звучит заманчиво! Все, что от тебя требуется, - это быть заинтересованным в ИТ-образовании и заполнить этот короткий опросник. Результаты будут транслироваться онлайн 20-го октября. Удачи!Твои ответы никак не повлияют на шанс выиграть! Просто отвечай честно, а победителя мы выберем на www.random.org.C условиями конкурса можно ознакомиться по ссылке:https://goo.gl/7iNWnxhttps://academy.beetroot.se";
    Mtitle.innerHTML="Опрос от Beetroot Academy";
    




    appElement.prepend(pic);
    appElement.append(link, parag, linkDocs,mainPic,Mtitle,secondP);

})();
