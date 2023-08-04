javascript: (function () {
  const hColors = ['red', 'white', 'white', 'white'];
  const bgColors = ['#8B0000', '#C4738F', '#E37E01', '#F9D535'];

  function isChildOfHeader(element) {
    let parent = element.parentElement;
    while (parent) {
      if (parent.tagName === 'HEADER' || parent.id === 'wpadminbar') {
        return true;
      }
      parent = parent.parentElement;
    }
    return false;
  }

  for (let i = 1; i <= 6; ++i) {
    let elements = document.getElementsByTagName('h' + i);
    for (let j = 0; j < elements.length; ++j) {
      let elementStyle = elements[j].style;
      if (elementStyle.color) {
        elementStyle.color = '';
        elementStyle.backgroundColor = '';
        elementStyle.boxShadow = '0 0 0 0 rgba(0, 0, 0, 0.5)';
      } else {
        elementStyle.color = hColors[i - 1];
        elementStyle.backgroundColor = bgColors[i - 1];
        elementStyle.boxShadow = '0 8px 18px -8px rgba(0, 0, 0, 0.6)';
      }
    }
  }

  let paragraphElements = document.getElementsByTagName('p');
  for (let i = 0; i < paragraphElements.length; ++i) {
    if (!isChildOfHeader(paragraphElements[i])) {
      let pElementStyle = paragraphElements[i].style;
      if (pElementStyle.color) {
        pElementStyle.outline = '';
      } else {
        pElementStyle.outline = '2px dashed #D7D7D7';
      }
    }
  }

  let spanElements = document.getElementsByTagName('span');
  for (let i = 0; i < spanElements.length; ++i) {
    if (!isChildOfHeader(spanElements[i])) {
      let spanElement = spanElements[i];

      if (
        spanElement.parentElement.tagName !== 'A' &&
        spanElement.parentElement.tagName !== 'P' &&
        spanElement.parentElement.tagName !== 'UL' &&
        spanElement.parentElement.tagName !== 'LI' &&
        spanElement.parentElement.tagName !== 'IMG' &&
        !spanElement.querySelector('a')
      ) {
        let spanElementStyle = spanElement.style;
        if (spanElementStyle.outline) {
          spanElementStyle.outline = '';
        } else {
          spanElementStyle.outline = '2px dashed lime';
        }
      }
    }
  }

  let ulElements = document.getElementsByTagName('ul');
  for (let i = 0; i < ulElements.length; ++i) {
    if (!isChildOfHeader(ulElements[i])) {
      let ulElementStyle = ulElements[i].style;
      if (ulElementStyle.outline) {
        ulElementStyle.outline = '';
      } else {
        ulElementStyle.outline = '6px dotted cyan';
      }
    }
  }

  let liElements = document.getElementsByTagName('li');
  for (let i = 0; i < liElements.length; ++i) {
    if (!isChildOfHeader(liElements[i])) {
      let liElementStyle = liElements[i].style;
      if (liElementStyle.outline) {
        liElementStyle.backgroundColor = '';
      } else {
        liElementStyle.backgroundColor = '#5BC2B7';
      }
    }
  }

  let aElements = document.getElementsByTagName('a');
  for (let i = 0; i < aElements.length; ++i) {
    if (!isChildOfHeader(aElements[i])) {
      let aElementStyle = aElements[i].style;

      if (aElementStyle.border) {
        aElementStyle.border = '';
        aElementStyle.color = '';
        aElementStyle.fontWeight = '';
      } else {
        aElementStyle.border = '3px dotted red';
        aElementStyle.color = 'red';
        aElementStyle.fontWeight = 'bold';
      }
    }
  }


  let formElements = document.getElementsByTagName('form');
  for (let i = 0; i < formElements.length; ++i) {
    if (!isChildOfHeader(formElements[i])) {
      let formElementStyle = formElements[i].style;
      if (formElementStyle.border) {
        formElementStyle.border = '';
        formElementStyle.color = '';
        formElementStyle.backgroundColor = '';
      } else {
        formElementStyle.border = '4px dashed blue';
        formElementStyle.color = 'blue';
        formElementStyle.backgroundColor = '#c9e5ff';
      }
    }
  }

  let labelElements = document.getElementsByTagName('label');
  for (let i = 0; i < labelElements.length; ++i) {
    if (!isChildOfHeader(labelElements[i])) {
      let labelElementStyle = labelElements[i].style;
      if (labelElementStyle.border) {
        labelElementStyle.border = '';
      } else {
        labelElementStyle.border = '3px dotted blue';
      }
    }
  }

  let formElementsOthers = document.querySelectorAll('input, select, textarea');
  for (let i = 0; i < formElementsOthers.length; ++i) {
    if (!isChildOfHeader(formElementsOthers[i])) {
      let formElementStyle = formElementsOthers[i].style;
      if (formElementStyle.border) {
        formElementStyle.backgroundColor = '';
      } else {
        formElementStyle.backgroundColor = '#a6d4ff';
      }
    }
  }

  let formButtons = document.querySelectorAll('form button');
  for (let i = 0; i < formButtons.length; ++i) {
    if (!isChildOfHeader(formButtons[i])) {
      let buttonStyle = formButtons[i].style;
      if (buttonStyle.border) {
        buttonStyle.border = '';
      } else {
        buttonStyle.border = '9px solid blue';
      }
    }
  }
})();
