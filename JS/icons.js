// Script meant to build all eight icons in two rows of four




for (let n = 0; n < 8; n++) {
  const iconName = 'icon' + n
  let iconRow = document.getElementById("first-icon-row-container")
  
  if (n > 3) {
    console.log("first icon row is full!")
    iconRow = "second-icon-row"
  }
  
  let htmlToInsert = `<form class="btnForm" id=${iconName}>
                        <button class="btn" id="${iconName}-btn" type="submit">
                            <img class="btn-image" src="./Icons/gmail.ico" alt="gmail icon">
                            <span class="sr-only">Link to favorite site</span>
                        </button>
                        <p id="${iconName}-btn-legend" class="btn-legend"></p>
                    </form>`


  iconRow.insertAdjacentHTML ("beforeend", htmlToInsert)
}
