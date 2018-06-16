// Initialize app
var myApp = new Framework7({
    modalTitle: "Пицца лисицца",
    precompileTemplates: true,
});


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

var data = {
    'item': [
        {
        "id": '1',
        "name": 'Мексиканская',
        "img": '38TshmyBfN.jpg',
        "price_b": "17,90",
        "size_b": "0,8 - 0,9 кг",
        "price_m": "13,50",
        "size_m": "0,6 - 0,7 кг",
        "description": "пицца-соус,  филе цыпленка, свежие томаты, свежие шампиньоны, свежий болгарский перец, свежий лук, перец халапеньо, сыр моцарелла, базилик"
        },
        {
        "id": '2',
        "name": 'Ранч пицца',
        "img": '7uPzZEyOvx.jpg',
        "price_b": "17,90",
        "size_b": "0,8 - 0,9 кг",
        "price_m": "13,50",
        "size_m": "0,6 - 0,7 кг",
        "description": "американский соус ранч, филе цыпленка, ветчина, свежие томаты, сыр моцарелла, базилик"
        },
        {
            "id": '3',
            "name": 'Баварская',
            "img": 'IdU2r6gLbo.jpg',
            "price_b": "17,90",
            "size_b": "0,8 - 0,9 кг",
            "price_m": "13,50",
            "size_m": "0,6 - 0,7 кг",
            "description": "пицца-соус,  филе цыпленка, свежие томаты, свежие шампиньоны, свежий болгарский перец, свежий лук, перец халапеньо, сыр моцарелла, базилик"
        },
        {
            "id": '4',
            "name": 'Чесночный цыпленок',
            "img": 'PDJuNhmrno.jpg',
            "price_b": "17,90",
            "size_b": "0,8 - 0,9 кг",
            "price_m": "13,50",
            "size_m": "0,6 - 0,7 кг",
            "description": "американский соус ранч, филе цыпленка, ветчина, свежие томаты, сыр моцарелла, базилик"
        }
    ]
};

// Add view
var mainView = myApp.addView('.view-main', {
    dynamicNavbar: true
});


$$(document).on('DOMContentLoaded', function(){
    var couponsContainer = $$('#pzz-container');
    var template = $$('#pzzItemTemplate').html();
    var compiledTemplate = Template7.compile(template);
    var html = compiledTemplate(data);
    couponsContainer.html(html);
});


myApp.onPageInit('item', function (page) {

    data.item.forEach(function(element) {
            if(element.id == page.query.id){
                itemData = element;
            }
    });

    var itemContainer = $$('#item-container');
    var template = $$('#ItemTemplate').html();
    var compiledTemplate = Template7.compile(template);
    var html = compiledTemplate(itemData);
    itemContainer.html(html);

    $$('.in-basket').on('click', function(){
        myApp.alert('Товар добавлен в корзину');
    })

});










