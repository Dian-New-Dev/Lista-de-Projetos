const FemButton = document.getElementById('FEM-title');
const FemContent = document.getElementById('FEM-Projects');

FemButton.addEventListener('mouseover', function () {
    FemButton.style.cursor = 'pointer';
})

FemButton.addEventListener('click', function () {
    showcontent(FemContent);
})

const JS30Button = document.getElementById('JS30-title');
const JS30content = document.getElementById('JS30-Projects')

JS30Button.addEventListener('mouseover', function () {
    JS30Button.style.cursor = 'pointer';
})

JS30Button.addEventListener('click', function () {
    showcontent(JS30content);
})

function showcontent(content) {
    const currentDisplay = window.getComputedStyle(content).display;
    if (currentDisplay === 'none') {
        content.style.display = 'block';
    } else {
        content.style.display = 'none';
    }
    

}

let i = 1;
const panelToMove = document.getElementById('sideButtons');
panelToMove.addEventListener('click', function() {
    i++;
    if (i % 2 === 0) {
        panelToMove.style.transform = 'translateX(75px)';
    } else {
        panelToMove.style.transform = 'translateX(-1px)';

    }
    
  });
  



