'use strict'

const newArray = [];

$(document).ready(function(event) {
    event.preventDefault()
});
//prevents form submission

$('input').on('click', 'keydown', function(event) {
    const newItem = $(shopping-list-entry).val()
    newArray.push(newItem);
    return `<li>
    <span class="shopping-item">${newItem}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`;
}
//this is supposed to add a new li for the value typed in the input??


$('.shopping-item-delete').on('click', function(event) {
    $(event.currentTarget).closest(li).remove()
}));
//this is supposed to remove a shopping item that is clicked. 
//The parents identifier is supposed to move up the dom tree until it 
//reaches the li element. removing the entire li of any delete button clicked

$('.shopping-item-toggle').on('click', function(event) {
    $('.shopping-item-toggle').closest(span).css(text-decoration, line-through)
});
//this is supposed to create the strikethrough behavior. I know ".closest"
//travels up the DOM so I thought it would go to the top of the span items 
//in the li they are in. 