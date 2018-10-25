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
                                <a class="team__content__list__item__link" href="/persona.html?nome='+ name.replace(' ', '-') + '">\
                                    <img class="team__content__list__item__fig" src="http://midwaylabs.vtexcrm.com.br/DynamicForm/GetFile?dataEntityInstanceId=TM-'+ id + '&fileName=' + imag + '" alt="">\
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
            "url": "http://api.vtexcrm.com.br/midwaylabs/dataentities/MT/search?_where=name=" + namePersona + "&_fields=name,biografia,id,img,description,idade,peso,altura,facebook,instagram,subTitle,youtube",
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

            $('.persona__top__info__name').html('<span>' + first_name + '<b>' + last_name + '</b></span>');
            $('.persona__top__info__speccialist').text(subTitle);
            $('.persona__top__info__content').text(description);
            $('h2.ajuda__content__title').text(first_name + ' ' + last_name + ' usa');
            $('.persona__top__fig img').attr('src', 'http://midwaylabs.vtexcrm.com.br/DynamicForm/GetFile?dataEntityInstanceId=TM-' + id + '&fileName=' + image);
            $('.persona__top__fig.column.is-5 img').attr('src', 'http://midwaylabs.vtexcrm.com.br/DynamicForm/GetFile?dataEntityInstanceId=TM-' + id + '&fileName=' + image);
        });
    }

    colection(namePersona) {
        let array = [
            {
                "productId": "419",
                "productName": "Máscara de Tratamento Force Restore - 150ml",
                "metaTagDescription": "A linha force Restore Vizcaya com Água Termal e Proteção UV, foi desenvolvida para tratar cabelos enfraquecidos, danificados e com aspecto envelhecido que necessitam de tratamento intensivo. \r\nCom 14 Benefícios 1. Reconstrução 2. Força 3. Mais brilho 4. Incrível maciez 5. Hidratação 6. Vitalidade 7. Maleabilidade 8. Proteção UV 9. Redução de pontas duplas 10. Alinhamento dos fios 11. Controle do Frizz 12. Reparo e proteção de danos 13. Fios mais jovens 14. Ajuda a selar as cutículas do cabelo e uma fórmula rica em queratina, colágeno, blend de aminoácidos e ceramidas que fortalece os fios, cicatriza a estrutura da fibra capilar e sela as cutículas. Deixando assim os cabelos mais sedosos, macios e com muito mais brilho.",
                "clusterHighlights": {
                    "204": "25hs Promo",
                    "223": "Confira",
                    "233": "Shampoo",
                    "234": "Condicionadores",
                    "235": "Kits",
                    "239": "Cabelo"
                },
                "link": "https://www.vizcaya.vtexcommercestable.com.br/mascara-tratamento-force-restore/p",
                "items": [
                    {
                        "itemId": "582",
                        "name": "150ml",
                        "nameComplete": "Máscara de Tratamento Force Restore 150ml",
                        "complementName": "",
                        "ean": "",
                        "referenceId": [
                            {
                                "Key": "RefId",
                                "Value": "9010425"
                            }
                        ],
                        "measurementUnit": "un",
                        "unitMultiplier": 1,
                        "modalType": null,
                        "isKit": false,
                        "images": [
                            {
                                "imageId": "158068",
                                "imageLabel": "mascaradetratamentoforcerestorevizcaya",
                                "imageTag": "<img src=\"~/arquivos/ids/158068-#width#-#height#/Mascara-de-Tratamento-Ultra-Restore-150ml-ultima.png?v=636724306086800000\" width=\"#width#\" height=\"#height#\" alt=\"Mascara-de-Tratamento-Force-Restore-Vizcaya\" id=\"\" />",
                                "imageUrl": "http://vizcaya.vteximg.com.br/arquivos/ids/158068/Mascara-de-Tratamento-Ultra-Restore-150ml-ultima.png?v=636724306086800000",
                                "imageText": "Mascara-de-Tratamento-Force-Restore-Vizcaya"
                            }
                        ],
                        "sellers": [
                            {
                                "sellerId": "1",
                                "addToCartLink": "https://www.vizcaya.vtexcommercestable.com.br/checkout/cart/add?sku=582&qty=1&seller=1&sc=1&price=3440&cv=99c757fd98d50f872fd0ad838b2c8882_geral:C81664BAA36E4BFF256F50D2247B7673&sc=1",
                                "sellerDefault": true,
                                "commertialOffer": {
                                    "DiscountHighLight": [],
                                    "Teasers": [],
                                    "Price": 34.4,
                                    "ListPrice": 34.4,
                                    "PriceWithoutDiscount": 34.4,
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "productId": "419",
                "productName": "Máscara de Tratamento Force Restore - 150ml",
                "metaTagDescription": "A linha force Restore Vizcaya com Água Termal e Proteção UV, foi desenvolvida para tratar cabelos enfraquecidos, danificados e com aspecto envelhecido que necessitam de tratamento intensivo. \r\nCom 14 Benefícios 1. Reconstrução 2. Força 3. Mais brilho 4. Incrível maciez 5. Hidratação 6. Vitalidade 7. Maleabilidade 8. Proteção UV 9. Redução de pontas duplas 10. Alinhamento dos fios 11. Controle do Frizz 12. Reparo e proteção de danos 13. Fios mais jovens 14. Ajuda a selar as cutículas do cabelo e uma fórmula rica em queratina, colágeno, blend de aminoácidos e ceramidas que fortalece os fios, cicatriza a estrutura da fibra capilar e sela as cutículas. Deixando assim os cabelos mais sedosos, macios e com muito mais brilho.",
                "clusterHighlights": {
                    "204": "25hs Promo",
                    "223": "Confira",
                    "233": "Shampoo",
                    "234": "Condicionadores",
                    "235": "Kits",
                    "239": "Cabelo"
                },
                "link": "https://www.vizcaya.vtexcommercestable.com.br/mascara-tratamento-force-restore/p",
                "items": [
                    {
                        "itemId": "582",
                        "name": "150ml",
                        "nameComplete": "Máscara de Tratamento Force Restore 150ml",
                        "complementName": "",
                        "ean": "",
                        "referenceId": [
                            {
                                "Key": "RefId",
                                "Value": "9010425"
                            }
                        ],
                        "measurementUnit": "un",
                        "unitMultiplier": 1,
                        "modalType": null,
                        "isKit": false,
                        "images": [
                            {
                                "imageId": "158068",
                                "imageLabel": "mascaradetratamentoforcerestorevizcaya",
                                "imageTag": "<img src=\"~/arquivos/ids/158068-#width#-#height#/Mascara-de-Tratamento-Ultra-Restore-150ml-ultima.png?v=636724306086800000\" width=\"#width#\" height=\"#height#\" alt=\"Mascara-de-Tratamento-Force-Restore-Vizcaya\" id=\"\" />",
                                "imageUrl": "http://vizcaya.vteximg.com.br/arquivos/ids/158068/Mascara-de-Tratamento-Ultra-Restore-150ml-ultima.png?v=636724306086800000",
                                "imageText": "Mascara-de-Tratamento-Force-Restore-Vizcaya"
                            }
                        ],
                        "sellers": [
                            {
                                "sellerId": "1",
                                "addToCartLink": "https://www.vizcaya.vtexcommercestable.com.br/checkout/cart/add?sku=582&qty=1&seller=1&sc=1&price=3440&cv=99c757fd98d50f872fd0ad838b2c8882_geral:C81664BAA36E4BFF256F50D2247B7673&sc=1",
                                "sellerDefault": true,
                                "commertialOffer": {
                                    "DiscountHighLight": [],
                                    "Teasers": [],
                                    "Price": 34.4,
                                    "ListPrice": 34.4,
                                    "PriceWithoutDiscount": 34.4,
                                }
                            }
                        ]
                    }
                ]
            }
        ];

        $.each(array, function (index, value) {
            let data = value;
            console.log(data)
            console.log(value.items[0].nameComplete)

            let idProduct = data.productId;
            let name      = data.items[0].nameComplete;
            let image     = data.items[0].images[0].imageUrl;
            let price     = data.items[0].sellers[0].commertialOffer.Price;
            let link      = data.link;

            let htmlShelf = '\
                            <li>\
                                <div class="product all-shelf"><span class="product__id" data-product-id="'+idProduct+'"></span>\
                                    <div class="all-shelf__header">\
                                        <div class="all-shelf__header__media"><a class="all-shelf__header__product" href="'+link+'"><img class="all-shelf__product__pic" "="" src="'+image+'" width="146" height="203" /></a></div>\
                                    </div>\
                                    <div class="all-shelf__product">\
                                        <h3 class="all-shelf__product__name"><a class="all-shelf__product__link" title="'+name+'" href="'+link+'">'+name+'</a></h3>\
                                        <h4 class="all-shelf__product__skuname"></h4>\
                                        <spa class="all-shelf__product__brand"></spa>\
                                        <div class="all-shelf__product__price">\
                                            <div class="price"><span class="all-shelf__product__price__oldprice"></span><span class="all-shelf__product__price__newprice">R$ '+price+'</span><span class="all-shelf__product__price__installment">\
                                        </div>\
                                        <div class="flag destaque">Lançamento</div>\
                                        <div class="all-shelf__product__info__actions"><a class="all-shelf__product__info__actions__btn" title="'+name+'" href="'+link+'">Compre Agora</a></div>\
                                    </div>\
                                </div>\
                            </li>';

            $('.shelf.shelf__carousel--full ul').append(htmlShelf);
        })
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