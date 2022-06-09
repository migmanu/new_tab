/* 
Component made to control icons behavior. Searches all elements with "btnForm" class,
adds event listeners for right click and changes the icon edit form display property
 edit menu when event fires.
*/

let iconsData = {
    icon1: {
        website_title: "placeholder",
        website_URL: "",
        website_icon: ""
    }
}

chrome.storage.local.set({iconsData}, function() {
    console.log('value set is artigas')
})

chrome.storage.local.get(['icon1'], function(result) {
    console.log(`value retrieved is ${result}`)
})

let iconToEdit = ''

const iconFormsList = document.getElementsByClassName("btnForm");


Array.from(iconFormsList).forEach(element => {
    const elementID = element.id
    console.log(`element id: ${elementID}`);
})


Array.from(iconFormsList).forEach(element => {
    element.addEventListener("contextmenu", function (event) {
        event.preventDefault();

        displayMenu(this.id);
    })
});


function displayMenu (ID) {
    const formDiv = document.getElementById("edit_form");

    console.log(`displayMenu ID: ${ID}`)

    formDiv.style.display = 'block';
    iconToEdit = ID

    console.log(`form.className set to: ${iconToEdit} type ${typeof(iconToEdit)}`)
}


const iconEditMenu = document.getElementById("icon_edit_form")
console.log(`iconEditMenu: ${iconEditMenu}`)

iconEditMenu.addEventListener("submit", function (event) {
    event.preventDefault();

    console.log(`iconEditMenu event triggered. Icon to edit is: ${iconToEdit}`)

    const newIconURL = document.getElementById("url_input").value;
    console.log(`value is ${newIconURL}`);
    const iconFormToEdit = document.getElementById(iconToEdit);

    iconFormToEdit.action = newIconURL;

    // hide form after submit
    const formDiv = document.getElementById("edit_form");
    formDiv.style.display = 'none';
})

