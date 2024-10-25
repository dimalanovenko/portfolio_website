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
    // const aboutButton = document.getElementById('about_btn');
    const hamburger = document.getElementById('hamburger');
    const homeHref = document.getElementById('homeHref');
    const aboutHref = document.getElementById('aboutHref');
    const projectsHref = document.getElementById('projectsHref');
    const contactHref = document.getElementById('contactHref');
    const githubHeader = document.getElementById('githubHeader');

    githubHeader.addEventListener('click', () => {
        window.location.href = 'https://github.com/dimalanovenko';
    });

    // aboutButton.addEventListener('click', () => {
    //     window.location.href = 'about.html';
    // });

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