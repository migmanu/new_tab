// Script meant to build all eight icons in two rows of four

for (let n = 0; n < 8; n++) {
  const iconName = 'icon' + n
  let iconRow = "first-icon-row"
  if (n > 3) {
    console.log("first icon row is full!")
    iconRow = "second-icon-row"
  }
}
