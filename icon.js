/* 
Component made to control icons behavior. Searches all elements with "btnForm" class,
adds event listeners for right click and changes the icon edit form display property
 edit menu when event fires.
*/

const formList = document.getElementsByClassName("btnForm");

Array.from(formList).forEach(element => {
    element.addEventListener("contextmenu", function (event) {
        event.preventDefault();

        displayMenu(this.id);
    })
});


function displayMenu (ID) {
    const formDiv = document.getElementById("edit_form");
    const form = document.getElementById("icon_edit_form");

    formDiv.style.display = 'block';
    form.id = ID;
}