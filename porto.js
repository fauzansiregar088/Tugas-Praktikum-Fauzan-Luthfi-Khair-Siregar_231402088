function lightmode() {
    let body = document.getElementById('body');
    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode')
    } else {
        body.classList.add('light-mode')
    }
    }