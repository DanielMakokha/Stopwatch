var class_query=document.querySelector('.class_query');
var button_class=document.querySelector('.button_class');

button_class.addEventListener('click', function () {
    class_query.textContent='works';
})

var id_query1=document.querySelector('#id_query1');

var button_id=document.querySelector('.button_id');
button_id.addEventListener('click',function () {
    id_query1.textContent='works';
})

var id_query2=document.getElementById('id_query2');
var buttton_get_element=document.querySelector('.buttton_get_element');
buttton_get_element.addEventListener('click', function () {
    id_query2.textContent='works'
});