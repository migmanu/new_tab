/* 
Component made to control icons behavior. Searches all elements with "btnForm" class,
adds event listeners for right click and changes the icon edit form display property
 edit menu when event fires.
*/
chrome.storage.local.set({icon1: {website_title: "first icon", website_URL : "", website_Image: ""}})
chrome.storage.local.set({icon2: {website_title: "wonderfull!"}})

                        
let iconToEdit = ''

const iconFormsList = document.getElementsByClassName("btnForm");


Array.from(iconFormsList).forEach(element => {
    element.addEventListener("contextmenu", function (event) {
        event.preventDefault();

        displayMenu(this.id);
    })
});


function displayMenu (ID) {
    const formDiv = document.getElementById("edit_form");

    formDiv.style.display = 'block';
    iconToEdit = ID;

    console.log(`form.className set to: ${iconToEdit} type ${typeof(iconToEdit)}`);
};


const iconEditMenu = document.getElementById("icon_edit_form");

iconEditMenu.addEventListener("submit", function (event) {
    event.preventDefault();


    const newIconURL = document.getElementById("url_input").value;
    const iconFormToEdit = document.getElementById(iconToEdit);

    iconFormToEdit.action = newIconURL;

    // hide form after submit
    const formDiv = document.getElementById("edit_form");
    formDiv.style.display = 'none';
})
