class Minicart {
     constructor() {
       $(window).on('orderFormUpdated.vtex', (evt, orderForm) => {
         this.update(orderForm)
       })
       vtexjs.checkout.getOrderForm()
     }
     renderItem(item, i) {
       let { quantity } = item
       return `
         <li class="minicart-product" data-item-id="${item.id}">
           <div class="minicart-product__image"><img src="${item.imageUrl}"></div>
           <div class="minicart-product__info">
             <h4 class="minicart-product__name">${item.name}</h4>
             <strong class="minicart-product__price">R$ ${(item.price / 100).formatMoney()}</strong>
           </div>

             <button class="minicart-product__remove" type="button" onclick="Minicart.removeItem.apply(null, [${i}])" title="Remover ${item.name} do carrinho">X</button>
         </li>
       `
     }

     renderItems() {
       return this.orderForm.items.map(this.renderItem, this).join('')
     }

     render() {
       let qty = this.getQuantity()
       return `
         <div class="minicart ${qty > 0 ? 'is-not-empty' : ''}">
            <button class="minicart__handle minicart__handle--diff" title="sacola">
                <span class="minicart__count">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="23" height="22" viewBox="0 0 23 22"><defs><path id="4roca" d="M1501.93 34.67l-1.92 7.88a2.15 2.15 0 0 1-2.07 1.66h-11.53a.87.87 0 0 0-.86.91.9.9 0 0 0 .89.85h9.66a2.52 2.52 0 1 1-.14 5.03 2.5 2.5 0 0 1-2.15-3.34h-2.9a2.53 2.53 0 0 1-2.5 3.34 2.5 2.5 0 0 1-2.16-3.34 2.56 2.56 0 0 1-2.36-2.57c0-1.2.82-2.22 1.92-2.5l-1.94-6.97-1.4-5.06h-2.75a.73.73 0 0 1-.73-.74v-.08c0-.4.33-.74.73-.74h3.2c.43 0 .8.3.92.72l.72 2.57c.34-.2.72-.33 1.13-.33h14.14a2.17 2.17 0 0 1 2.1 2.71zm-6.6 13.82c0 .45.36.83.81.83.45 0 .81-.38.81-.83a.82.82 0 0 0-.8-.83.82.82 0 0 0-.82.83zm-7.56 0c0 .45.37.83.81.83.45 0 .82-.38.82-.83a.82.82 0 0 0-.82-.83.82.82 0 0 0-.81.83zm-2.17-12.88h2.06l-.42-1.95h-1.55c-.2 0-.33.12-.38.19a.47.47 0 0 0-.08.43zm.96 3.5h1.85l-.39-1.81h-1.96zm1.3 3.4h1.28l-.37-1.71h-1.74l.37 1.35c.06.22.25.36.47.36zm4.14 0V40.8h-1.53l.37 1.71zm0-5.21h-2.28l.39 1.8h1.9zm0-3.65h-3.07l.42 1.96h2.66zm3.33 7.15h-1.66v1.71h1.3zm.73-3.5h-2.4v1.8h2.02zm.34-1.7l.4-1.95h-3.13v1.96zm2.34 5.2h-1.71l-.36 1.72h1.27c.23 0 .42-.16.47-.38zm.85-3.5h-1.84l-.38 1.8h1.78zm.65-3.46a.45.45 0 0 0-.38-.2h-1.36l-.4 1.96h1.9l.33-1.34a.48.48 0 0 0-.1-.42z"/></defs><g><g transform="translate(-1479 -29)"><use fill="#fff" xlink:href="#4roca"/></g></g></svg>
                </span>
            </button>
            <div class="minicart__overlay"></div>
            <div class="minicart__container">
                <div class="minicart__header">
                    <button class="minicart__handle" title="sacola">
                        <i class="minicart__icon"><svg data-name="Camada 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.96 62.45"><path fill="#9e9e9e" d="M0 32.47l30.24 29.98 2.62-2.49L4.19 31.23 32.95 2.49 30.22 0 0 29.98v2.49z"/></svg></i>
                        <span class="minicart__title">Minha Compra</span>
                    </button>
                </div>
                <div class="minicart__content">
                    <ul class="minicart__products">
                        ${this.renderItems()}
                    </ul>
                </div>
                <div class="minicart__footer">


                    <div class="minicart__totals">
                        <span class="minicart__totals-text">Total</span>
                        <strong class="minicart__totals-value">${this.getTotal()}</strong>
                    </div>
                    <a class="minicart__checkout" href="/Site/Carrinho.aspx">
                    Finalizar Pedido</a>
                </div>
            </div>

         </div>
       `
     }

     removeItem(index) {
       vtexjs.checkout.removeItems([{index}])
     }

     updateItem(obj) {
       let { index, qty, calc } = obj
       let quantity = qty + +calc
       if (quantity) {
         vtexjs.checkout.updateItems([{index, quantity}], null, false)
       }
     }

     getTotal() {
       const itemsTotal = this.orderForm.totalizers.find(item => item.id === 'Items')
       const total = itemsTotal ? itemsTotal.value / 100 : 0
       return `R$ ${total.formatMoney()}`
     }

     getQuantity() {
       const qty = this.orderForm.items.reduce((prev, next) => prev + next.quantity, 0)
       return qty
     }

     printQuantity(qty) {
       return `${qty}`
     }

     update(orderForm) {
       this.orderForm = orderForm
       this.mount()
     }

     mount() {
       $('.js-minicart').html(this.render())
     }
}

$(document).ready(function(){
    window.Minicart = new Minicart();

    $('body').on('click', '.minicart__handle', function(){
        $('.minicart').toggleClass('active');
    })
})