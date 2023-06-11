/*Показать или скрыть меню*/
function toggleMenu(){
    //Получить все элементы с классом menu-elements
    var menuElements = document.getElementsByClassName('menu-elements');

    //Перебрать все элементы с классом menu-elements
    for (var i = 0; i < menuElements.length; i++) {
        //Если элемент видимый, сделать его невидимым.
        //Иначе сделать элемент видимым.
        if (menuElements[i].style.display === 'block') 
        {
            menuElements[i].style.display = 'none';
        } 
        else 
        {
            menuElements[i].style.display = 'block';
        }
    }
}