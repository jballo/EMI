const goBackButton = document.getElementById('goBackButton');

goBackButton.addEventListener('click', function() {
    console.log('Trying to direct to /invitation');
    window.location.href = '/invitation';
});
