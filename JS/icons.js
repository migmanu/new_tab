// Script meant to build all eight icons in two rows of four

let iconsObject = {}

for (let n = 0; n < 8; n++) {
  const iconName = 'icon' + n;

  let iconTitle = chrome.storage.local.get([iconName], function (result) {
    console.log("icons object API call init")
    
  })
}


for (let n = 0; n < 8; n++) {
  const iconName = 'icon' + n
  let iconRow = document.getElementById("first-icon-row-container")
  
  let iconURL = "test"
  let iconImage
  let iconTitle = chrome.storage.local.get([iconName], (result) => {
    console.log(`icon url: ${iconURL}`)
    iconURL = "second test"
    console.log(`second icon url: ${iconURL}`)
    if (result[`${iconName}`]) {
      console.log(`icon name is ${result[`${iconName}`].website_title}`)
      let iconTitle = result[`${iconName}`].website_title
      console.log(`icon title var is: ${iconTitle}`)
    }
  console.log(`icon title before return: ${iconTitle}`)
  return iconTitle
  })
  console.log(`outside icon title var is: ${iconTitle}`)

  if (n > 3) {
    iconRow = document.getElementById("second-icon-row-container")
  }
  
  let htmlToInsert = `<form class="btnForm" id=${iconName} action="">
                        <button class="btn" id="${iconName}-btn" type="submit">
                            <img class="btn-image" src="./Icons/gmail.ico" alt="gmail icon">
                            <span class="sr-only">Link to favorite site</span>
                        </button>
                        <p id="${iconName}-btn-legend" class="btn-legend">${iconTitle}</p>
                    </form>`


  iconRow.insertAdjacentHTML ("beforeend", htmlToInsert)
}
