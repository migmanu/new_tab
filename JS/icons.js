console.log("icons.js init")

chrome.storage.local.set({icon1: {website_title: "third example"}})
chrome.storage.local.set({icon2: {website_title: "wonderfull!"}})

                        
let iconToEdit = ''

const iconFormsList = document.getElementsByClassName("btnForm");


// construct each icon retrieving its data from Chrome local storage
Array.from(iconFormsList).forEach(element => {
    const elementID = element.id
    const iconToBuild = document.getElementById(elementID)
    console.log(`element id: ${elementID}`);

    let elementTitle
    chrome.storage.local.get([`${elementID}`], function (result) {
        console.log("chrome API init")
        elementTitle = result[`${elementID}`].website_title
        console.log(`element title is: ${elementTitle} type: ${typeof(elementTitle)}`)
        document.getElementById(`${elementID}-btn-legend`).innerText = elementTitle
    })
})


// Script meant to build all eight icons in two rows of four

for (let n = 0; n < 8; n++) {
  const iconName = 'icon' + n
  let iconRow = "first-icon-row"
  if (n > 3) {
    console.log("first icon row is full!")
    iconRow = "second-icon-row"
  }
}
