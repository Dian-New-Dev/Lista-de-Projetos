// Database
    // Modalidade (FEM, projeto pessoal, etc)
        // Projeto
            // Nome
            // Link do site
            // Link do repositório
            // Descrição
            // Preview

// 1 - create hardcoded layout (FEM projects)

const platformPanel = document.getElementById('FEM-Projects');
const listInputsDiv = document.createElement('div');
listInputsDiv.setAttribute('class', 'list-inputs')
platformPanel.appendChild(listInputsDiv);

const projectNameInput = document.createElement('div');
projectNameInput.setAttribute('class', 'project-name-input');
projectNameInput.innerHTML = 'prencher';
listInputsDiv.appendChild(projectNameInput);




const liveLinkInput = document.createElement('div');
liveLinkInput.setAttribute('class', 'live-link-input');
const liveLinkA = document.createElement('a');
liveLinkA.setAttribute('href', 'preencher')
liveLinkA.setAttribute('target', '_blank')
liveLinkA.innerHTML = 'Github Pages'
liveLinkInput.appendChild(liveLinkA);
listInputsDiv.appendChild(liveLinkInput);

const githubInput = document.createElement('div');
githubInput.setAttribute('class', 'git-hub-input');
const githubA = document.createElement('a');
githubA.setAttribute('href', 'preencher')
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
descrContent.innerHTML = 'preencher';
descr.appendChild(descrContent);
const techs = document.createElement('section');
const techsNegrito = document.createElement('b');
techsNegrito.innerHTML = 'Tecnologias usadas: ';
techs.appendChild(techsNegrito);
descr.appendChild(techsNegrito);
const techsContent = document.createElement('p');
techsContent.innerHTML = 'preencher';
techs.appendChild(techsContent);
descr.appendChild(techsContent);
descriptionInput.appendChild(descr);


const previewInput = document.createElement('div');
previewInput.setAttribute('class', 'preview-input')
listInputsDiv.appendChild(previewInput)
const imgPreview = document.createElement('img');
imgPreview.setAttribute('class', 'img')
imgPreview.setAttribute('src', 'preencher');
previewInput.appendChild(imgPreview);

// 2 - create object

const projectsData = [
    {
        platform: 'test1',
        projectName: 'test2',
        siteLink: 'test3',
        repoLink: 'test4',
        description: 'test5',
        technologies: 'test6',
        imgSrc: 'images/test.jpg',

    },
        //next project here
]

// 3 - insert object data into layout



// 4 - turn hardcoded layoyt into dinamically filled layout

// 5 - create form that automatically inserts data into layout

