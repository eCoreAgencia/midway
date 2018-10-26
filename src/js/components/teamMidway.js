class teamMidway {
    constructor() {
        this.list();
    }

    listHtml(name, info) {
        var html = '<li class="team__content__list__item">\
                <a class="team__content__list__item__link" href="/persona.html">\
                    <img class="team__content__list__item__fig" src="/arquivos/team-felipe-franco.png" alt="">\
                    <h3 class="team__content__list__item__tlt">'+ name.replace(/-|_/g, ' ') + '</h3>\
                    <span class="team__content__list__item__speccialist">'+ info + '</span>\
                /</a>\
            /</li>';

        return html;
    }

    list() {
        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": "http://api.vtexcrm.com.br/midwaylabs/dataentities/MT/search?_fields=name,img,id,subTitle,idUser",
            "type": "GET",
            "contentType": "application/json",
        }).done(function (data) {
            let list = data;

            for (var i = 0; i < list.length; i++) {
                console.log(data[i].name)
                var name = list[i].name;
                var imag = list[i].img;
                var id = list[i].id;
                var subTitle = list[i].subTitle;

                if (subTitle == null) {
                    subTitle = '';
                }

                var html = '<li class="team__content__list__item">\
                                <a class="team__content__list__item__link" href="/persona?nome='+ name.replace(' ', '-') + '">\
                                    <img class="team__content__list__item__fig" src="http://midwaylabs.vtexcrm.com.br/DynamicForm/GetFile?dataEntityInstanceId=MT-'+ id + '&fileName=' + imag + '" alt="">\
                                    <h3 class="team__content__list__item__tlt">'+ name.replace('-', ' ') + '</h3>\
                                    <span class="team__content__list__item__speccialist">'+ subTitle + '</span>\
                                </a>\
                            </li>';

                $('.team__content__list').append(html);
            }
        });
    }
}

class persona {
    constructor() {
        let namePersona = window.location.href.split('nome=')[1];
        this.about(namePersona);
        this.colection(namePersona);
    }

    about(namePersona) {
        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": "http://api.vtexcrm.com.br/midwaylabs/dataentities/MT/search?_where=name=" + namePersona + "&_fields=name,biografia,id,img,description,idade,peso,altura,facebook,instagram,subTitle,youtube,idColecao",
            "type": "GET",
            "contentType": "application/json",
        }).done(function (data) {
            let list = data;
            console.log(data)
            let first_name = data[0].name.split('-')[0];
            let last_name = data[0].name.split('-')[1];
            let peso = data[0].peso;
            let idade = data[0].idade;
            let description = data[0].description;
            let image = data[0].img;
            let altura = data[0].altura;
            let facebook = data[0].facebook;
            let instagram = data[0].instagram;
            let youtube = data[0].youtube;
            let subTitle = data[0].subTitle;
            let id = data[0].id;
            let biografia = data[0].biografia;
            let idColecao = data[0].idColecao;

            if (first_name == null) {
                first_name = "";
            }
            if (last_name == null) {
                last_name = "";
            }
            if (biografia == null) {
                $('.persona__top__info__link').remove();
            } else {
                var arrayBio = biografia.split(';');

                $.each(arrayBio, function (index, value) {
                    $('.modal__item__middle__list').append('<li class="modal__item__middle__list__item">' + value + 'dd</li>');
                });
            }
            if (peso == null) {
                $('li.persona__top__persona-info__list__item.peso').remove();
            } else {
                $('li.persona__top__persona-info__list__item.peso .persona__top__persona-info__list__item__value').text(peso + ' KG');
            }
            if (idade == null) {
                $('li.persona__top__persona-info__list__item.idade').remove();
            } else {
                $('li.persona__top__persona-info__list__item.idade .persona__top__persona-info__list__item__value').text(idade + ' ANOS');
            }
            if (description == null) {
                description = "";
            }
            if (altura == null) {
                $('li.persona__top__persona-info__list__item.altura').remove();
            } else {
                $('li.persona__top__persona-info__list__item.altura .persona__top__persona-info__list__item__value').text(altura + ' M');
            }
            if (facebook == null) {
                $('li.footer__main__menu__list--social__list__item.facebook').remove();
            } else {
                $('li.footer__main__menu__list--social__list__item.facebook a span').text(facebook);
            }
            if (instagram == null) {
                $('li.footer__main__menu__list--social__list__item.instagram').remove();
            } else {
                $('li.footer__main__menu__list--social__list__item.instagram a span').text(instagram);
            }
            if (youtube == null) {
                $('li.footer__main__menu__list--social__list__item.youtube').remove();
            } else {
                $('li.footer__main__menu__list--social__list__item.youtube a span').text(youtube);
            }
            if (subTitle == null) {
                subTitle = "";
            }
            
            $('.shelf.shelf__carousel--full').load('/busca?fq=H:'+idColecao+' .prateleira');
            $('.persona__top__info__name').html('<span>' + first_name + '<b>' + last_name + '</b></span>');
            $('.persona__top__info__speccialist').text(subTitle);
            $('.persona__top__info__content').text(description);
            $('h2.ajuda__content__title').text(first_name + ' ' + last_name + ' usa');
            $('.persona__top__fig img').attr('src', 'http://midwaylabs.vtexcrm.com.br/DynamicForm/GetFile?dataEntityInstanceId=MT-' + id + '&fileName=' + image);
            $('.persona__top__fig.column.is-5 img').attr('src', 'http://midwaylabs.vtexcrm.com.br/DynamicForm/GetFile?dataEntityInstanceId=MT-' + id + '&fileName=' + image);
        });
    }

    colection(namePersona) {

    }
}

$(document).ready(function () {
    if ($('body').hasClass('team-midway')) {
        window.menu = new teamMidway();
    }
    if ($('body').hasClass('persona')) {
        window.menu = new persona();
    }
})