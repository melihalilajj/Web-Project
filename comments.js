var comment = document.querySelector('textarea');
var backUp = comment.getAttribute('placeholder');
var button = document.querySelector('.button');
var clear = document.getElementById('clear')
comment.onfocus = function() {
    this.setAttribute('placeholder', '');
    this.style.borderColor = '#333';
    button.style.display = 'block'

}

comment.onblur = function() {
    this.setAttribute('placeholder', backUp);
    this.style.borderColor = '#aaa'
}

clear.onclick = function() {
    button.style.display = 'none';
    comment.value = '';
}