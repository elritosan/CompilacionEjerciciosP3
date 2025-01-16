function formatText(command) {
  document.execCommand(command, false, null);
}

function alignText(align) {
  document.execCommand('justify' + align, false, null);
}

function changeFontSize() {
  const size = document.getElementById('fontSizeTxt').value;
  document.getElementById('textEditor').style.fontSize = size + "pt";
}

function changeFontType() {
    const font = document.getElementById('fontFamilyTxt').value;
    document.execCommand('fontName', false, font);
}

function changeTextColor() {
    const color = document.getElementById('colorPicker').value;
    document.execCommand('foreColor', false, color);
}


/* 

*/