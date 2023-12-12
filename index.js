const FemButton = document.getElementById('FEM-title');
const FemContent = document.getElementById('FEM-Projects');

FemButton.addEventListener('mouseover', function () {
    FemButton.style.cursor = 'pointer';
})

FemButton.addEventListener('click', function () {
    showcontent(FemContent);
})

//

const JS30Button = document.getElementById('JS30-title');
const JS30content = document.getElementById('JS30-Projects')

JS30Button.addEventListener('mouseover', function () {
    JS30Button.style.cursor = 'pointer';
})

JS30Button.addEventListener('click', function () {
    showcontent(JS30content);
})

//

const MEButton = document.getElementById('ME-title');
const MEcontent = document.getElementById('ME-Projects')

MEButton.addEventListener('mouseover', function () {
    MEButton.style.cursor = 'pointer';
})

MEButton.addEventListener('click', function () {
    showcontent(MEcontent);
})

//

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


//modal \/ \/ \/

const designButton = document.querySelector('.wrapper2');
designButton.addEventListener('click', function () {
    openDesignModal();
})

const modal = document.getElementById('designModal');
const modalOverlay = document.getElementById('modalOverlay');
function openDesignModal() {
    modal.style.display ='block';
    modalOverlay.style.display ='block';
}

function closeDesignModal() {
    modal.style.display ='none';
    modalOverlay.style.display ='none';
    
}
  



