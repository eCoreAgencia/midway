export default (function() {
if ($('body').hasClass('product')) {
  let thumbs = $('.thumbs')
  let fix_zoom = function () {
    window.LoadZoom = function (pi) {
      let zoomImage = $(".image-zoom")
      // zoomImage.jqzoom()
      $('.zoomPup, .zoomWindow, .zoomPreload').remove()
      if (!zoomImage.length) {
        let img = $('#image-main')
        let imgUrl = img.attr('src')
        img.wrap(`<a href="${imgUrl}" class="image-zoom" />`)
      }
      let zoom = $('#image').addClass('easyzoom easyzoom--overlay').easyZoom()
      window.zoomAPI = zoom.data('easyZoom')
      window.ImageControl = () => null
    }
    LoadZoom(0)
  }
  $(fix_zoom)



  const shelf__prev = `<button type='button' class='slick-prev shelf__button'><svg data-name="Camada 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.96 62.45"><path fill="#9e9e9e" d="M0 32.47l30.24 29.98 2.62-2.49L4.19 31.23 32.95 2.49 30.22 0 0 29.98v2.49z"/></svg></button>`
  const shelf__next = `<button type='button' class='slick-next shelf__button'><svg data-name="Camada 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.96 62.45"><path fill="#9e9e9e" d="M32.95 29.98L2.72 0 .1 2.49l28.66 28.74L0 59.96l2.73 2.49 30.22-29.98v-2.49z"/></svg></button>`

  $('.shelf__carousel--full ul').slick({
    arrows: true,
    slideToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    variableWidth: true,
    prevArrow: shelf__prev,
    nextArrow:shelf__next
  });

  class Product {
    constructor() {
      let self = this
      window.ImageControl = () => null
      this.skuJson = skuJson ? skuJson : skuJson_1
      this.thumbsClickEvent()
      this.simulateShipping()
      this.product = '';

      $('.btn--plus').on('click', () =>{
        self.changeQuantity(1);
      })

      $('.btn--minus').on('click', () =>{
        self.changeQuantity(-1);
      })


      if (!$('.product__why .why__subtitle').is(':empty')){
        $('.product__why').addClass('is-not-empty');
      }

      if (!$('.category-benefits .category-benefits__subtitle').is(':empty')){
        $('.category-benefits').addClass('is-not-empty');
      }

      vtexjs.catalog.getCurrentProductWithVariations().then(product => {
          console.log(product);
          self.product = product;
          if(product.skus.length > 1) {
              self.renderSkuSelect(product.skus);
              self.renderPrice(product.skus[0]);
          }
      })

      $('.buy-button').on('click', function(e){ 
        e.preventDefault();
        let href = $(this).attr('href');
        const text = "javascript:alert('Por favor, selecione o modelo desejado.');";
        let qty = $('.product__qtd-value').val();
        const sku = $('.product__skus-select select').val();

        if(href === text){
          swal({
            text: 'Selecione o sabor',
            icon: 'warning',
          })
          return false;
        }

        var item = {
            id: sku,
            quantity: qty,
            seller: '1'
        };

        vtexjs.checkout.addToCart([item], null)
        .done(function(orderForm) {
            console.log(orderForm);
            window.location.href = '/checkout/#/cart';
        });

       
        
      });

      $('.product__skus-select').on('change', 'select', function(){
          const sku = $(this).val();
          const qty = $('.product__qtd-value').val();
          const endpoint = `/checkout/cart/add?sku=${sku}&amp;qty=${qty}&amp;seller=1&amp;redirect=true&amp;sc=1`;
          console.log(sku);
          $('.buy-button').attr('href', endpoint);
      });

     
    }

    changeQuantity(val) {
      let currentVal = $('.product__qtd-value').val()
      let newVal = +currentVal + +val
      if (newVal) {
        $('.product__qtd-value').val(newVal)
      }
    }

    thumbsClickEvent() {
      thumbs.on('click', 'a', function (e) {
        e.preventDefault()
        let imgUri = $(this).attr('rel')
        zoomAPI._init()
        zoomAPI.swap(imgUri, imgUri)
        if (!imgUri) {
          zoomAPI.teardown()
        }
        thumbs.find('a').removeClass('ON')
        $(this).addClass('ON')
      })
    }

    simulateShipping() {
      //window.OMSimulateShipping = new SimulateShipping()
    }

    renderSkuSelect(skus) {
        const select =  `<div class="select">
            <select>
                ${ skus.map(sku => {
                    return `<option value="${sku.sku}">${sku.skuname}</option>`
                }).join('')}
            </select>
        </div>`
        $('.product__skus-select').append(select);
    }

    renderPrice(sku) {
        let price = '';
        if (sku.listPrice == 0) {
            price = `<div class="productPrice">
                <p class="descricao-preco">
                    <em class="valor-de price-list-price" style="display: block;">
                        De: <strong class="skuListPrice">${sku.listPriceFormated}</strong>
                    </em>
                    <em class="valor-por price-best-price" style="display: block;">
                        Por: <strong class="skuBestPrice">${sku.bestPriceFormated}</strong>
                    </em>
                    <em class="valor-dividido price-installments">
                    <span><span>ou <label class="skuBestInstallmentNumber">${sku.installments }<span class="x">x</span></label> de </span><strong><label class="skuBestInstallmentValue">${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(sku.installmentsValue/100)}</label></strong></span>
                    </em>
                </p>
                
            </div>`;
        }else {
            price = `<div class="productPrice">
            <p class="descricao-preco">
                <em class="valor-de price-list-price" style="display: none;">
                    De: <strong class="skuListPrice">${sku.listPriceFormated}</strong>
                </em>
                <em class="valor-por price-best-price" style="display: block;">
                    Por: <strong class="skuBestPrice">${sku.bestPriceFormated}</strong>
                </em>
                <em class="valor-dividido price-installments">
                <span><span>ou <label class="skuBestInstallmentNumber">${sku.installments }<span class="x">x</span></label> de </span><strong><label class="skuBestInstallmentValue">${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(sku.installmentsValue/100)}</label></strong></span>
                </em>
            </p>
            
        </div>`;
        }
         

        $('.product__price .price').html(price);
    }

    
  }

  $(() => {
    window.OMProduct = new Product()
  })
}
})()
