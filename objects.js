// Object that stores projects data (follow layoyt)
// for platform: FEM-Projects, JS30-Projects,  My-Projects, etc

const projectsData = [
    {
        platform: 'FEM-Projects',
        projectName: 'QR Code',
        siteLink: 'https://dian-new-dev.github.io/FEM-Challenge-1-QR-Code/',
        repoLink: 'https://github.com/Dian-New-Dev/FEM-Challenge-1-QR-Code',
        description: 'Primeiro desafio do Frontend Mentor que realizei: centralização de um QR Code.',
        technologies: 'HTML, CSS, Javascript, Git',
        imgSrc: 'images/screenshot.png',

    },
    {
        platform: 'FEM-Projects',
        projectName: 'Accordeon FAQ',
        siteLink: 'https://dian-new-dev.github.io/FEM-Challenge-2-FAQ-Accordion/',
        repoLink: 'https://github.com/Dian-New-Dev/FEM-Challenge-2-FAQ-Accordion',
        description: 'Estabelecimento de uma página única com um menu FAQ estilo acordeão. Design responsivo, interativo e navegação por teclado.',
        technologies: 'HTML, CSS, Javascript, Git.',
        imgSrc: 'images/screenshot -FAQ.png',
    },

]

// Function that creates the layout and inserts data into the DOM

function insertObjectData (platf, projectN, liveL, repoL, desc, techsUsed, imgSrc ) {
    const platformPanel = document.getElementById(platf);
    const listInputsDiv = document.createElement('div');
    listInputsDiv.setAttribute('class', 'list-inputs')
    platformPanel.appendChild(listInputsDiv);
    const projectNameInput = document.createElement('div');
    projectNameInput.setAttribute('class', 'project-name-input');
    projectNameInput.innerHTML = projectN;
    listInputsDiv.appendChild(projectNameInput);
    const liveLinkInput = document.createElement('div');
    liveLinkInput.setAttribute('class', 'live-link-input');
    const liveLinkA = document.createElement('a');
    liveLinkA.setAttribute('href', liveL)
    liveLinkA.setAttribute('target', '_blank')
    liveLinkA.innerHTML = 'Github Pages'
    liveLinkInput.appendChild(liveLinkA);
    listInputsDiv.appendChild(liveLinkInput);
    const githubInput = document.createElement('div');
    githubInput.setAttribute('class', 'git-hub-input');
    const githubA = document.createElement('a');
    githubA.setAttribute('href', repoL)
    githubA.setAttribute('target', '_blank')
    githubA.innerHTML = 'Link'
    githubInput.appendChild(githubA);
    listInputsDiv.appendChild(githubInput);
    const descriptionInput = document.createElement('div');
    descriptionInput.setAttribute('class', 'description-input');
    listInputsDiv.appendChild(descriptionInput);
    const descr = document.createElement('section');
    descr.setAttribute('class', 'descr');
    listInputsDiv.appendChild(descr);
    const descrNegrito = document.createElement('b');
    descrNegrito.innerHTML = 'Descrição: '
    descr.appendChild(descrNegrito)
    const descrContent = document.createElement('p');
    descrContent.innerHTML = desc;
    descr.appendChild(descrContent);
    const techs = document.createElement('section');
    const techsNegrito = document.createElement('b');
    techsNegrito.innerHTML = 'Tecnologias usadas: ';
    techs.appendChild(techsNegrito);
    descr.appendChild(techsNegrito);
    const techsContent = document.createElement('p');
    techsContent.innerHTML = techsUsed;
    techs.appendChild(techsContent);
    descr.appendChild(techsContent);
    descriptionInput.appendChild(descr);
    const previewInput = document.createElement('div');
    previewInput.setAttribute('class', 'preview-input')
    listInputsDiv.appendChild(previewInput)
    const imgPreview = document.createElement('img');
    imgPreview.setAttribute('class', 'img')
    imgPreview.setAttribute('src', imgSrc);
    previewInput.appendChild(imgPreview);
    
}

// Iterate over object and convert data into arguments, then call function

let array = []
for (const project of projectsData) {
    for (const key in project) {
            array.push(project[key])
            if (array.length === 7) {
                insertObjectData(array[0], array[1], array[2], array[3], array[4], 
                    array[5], array[6]);
                array = [];
                
            } 
        }
        
    }



