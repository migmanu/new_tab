/* listens for secondary click on icons and siplays menu to edit links and images */

let els = document.getElementsByClassName("btnForm")
let el = document.querySelector(".btn");

function modLink() {
    event.preventDefault();
    let inputBox = `
    <div class="edit-form">
        <form>
            <h2>Edit Icon</h2>
            <input type="text" name="Website Title" maxlength="14" required>
            <input type="url" name="Website URL" required>
            <input type="file" name="Icon" accept="image/png, image/jpeg">
            <input type="submit" name="Submit form">
        </form>
    </div>
    `
    this.insertAdjacentHTML("afterbegin", inputBox);
}

Array.from(els).forEach(function(e) {
    e.addEventListener("contextmenu", modLink);
})


