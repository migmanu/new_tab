
const formList = document.getElementsByClassName("btnForm");

formList[0].addEventListener("contextmenu", function (event) {
    event.preventDefault();

    displayMenu(this.id);
});


function displayMenu (ID) {

    // create unique ID to link form to specific icon
    const formID = "icon" + ID

    let inputBox = `
    <div class="edit_form" id=${ID}>
        <form onSubmit="editIcon()">
            <h2>Edit Icon</h2>
            <input type="text" name="Website Title" maxlength="14" placeholder="Website Title" required>
            <input type="url" name="Website URL" placeholder="URL" required>
            <input type="file" id="image_upload" name="Icon" accept="image/png, image/jpeg">
            <label for="image_upload">Upload icon image (PNG, JPG)</label>
            <input type="submit" name="Submit form">
        </form>
    </div>
   ` 
   // insert icon editing menu as first child of icons container 
   document.getElementById("container").insertAdjacentHTML("afterbegin", inputBox)

}