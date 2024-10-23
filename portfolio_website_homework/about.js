document.addEventListener('DOMContentLoaded', () => {
    const liItems = document.getElementsByTagName('li');

    for (let i = 0; i < liItems.length; i++) {
        const item = liItems[i];
        const hiddenDiv = item.querySelector('.hiddenDiv');

        item.addEventListener('mouseover', () => {
            hiddenDiv.classList.add('visible');
        });

        item.addEventListener('mouseout', () => {
            hiddenDiv.classList.remove('visible');
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const projectsButton = document.getElementById('projects_btn');
    const hamburger = document.getElementById('hamburger');
    const homeHref = document.getElementById('homeHref');
    const aboutHref = document.getElementById('aboutHref');
    const projectsHref = document.getElementById('projectsHref');
    const contactHref = document.getElementById('contactHref');
    const githubHeader = document.getElementById('githubHeader');

    githubHeader.addEventListener('click', () => {
        window.location.href = 'https://github.com/dimalanovenko';
    });

    projectsButton.addEventListener('click', () => {
        window.location.href = 'projects.html';
    });

    hamburger.addEventListener('click', () => {
        window.location.href = 'sidebar.html';
    });

    homeHref.addEventListener('click', () => {
        window.location.href = 'index.html';
    });

    aboutHref.addEventListener('click', () => {
        window.location.href = 'about.html';
    });

    projectsHref.addEventListener('click', () => {
        window.location.href = 'projects.html';
    });

    contactHref.addEventListener('click', () => {
        window.location.href = 'contact.html';
    });
});



