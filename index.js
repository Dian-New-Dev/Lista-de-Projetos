const FemButton = document.getElementById('FEM-title');
const FemContent = document.getElementById('FEM-Projects');
FemButton.addEventListener('click', function () {
    showcontent(FemContent);
})

const JS30Button = document.getElementById('JS30-title');
const JS30content = document.getElementById('JS30-Projects')
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



