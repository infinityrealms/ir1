function copyIP(buttonElement) {
        const ipText = buttonElement.textContent || buttonElement.innerText;
        navigator.clipboard.writeText(ipText).then(function() {
            Swal.fire({
                title: 'Copied!',
                text: 'The IP ' + ipText + ' is on your clipboard.',
                icon: 'success',
                timer: 2000,
                showConfirmButton: false,
                background: '#212121',
                color: '#f4f3ee'
            });
        }, function(err) {
            console.error('Could not copy text: ', err);
            Swal.fire({
                title: 'Error!',
                text: 'Failed to copy the IP.',
                icon: 'error',
                background: '#212121',
                color: '#f4f3ee'
            });
        });
    }

document.addEventListener('DOMContentLoaded', () => {
    const scrollDownButton = document.querySelector('.scrolldown');
    if (scrollDownButton) {
        scrollDownButton.addEventListener('click', () => {
            window.scrollBy({
                top: window.innerHeight,
                left: 0,
                behavior: 'smooth'
            });
        });
    }
});