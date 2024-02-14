const acceptButton = document.getElementById('acceptButton')
const denieButton = document.getElementById('deniedButton')


acceptButton.addEventListener('click', function() {
    // alert('Heart was Pressed')
    console.log('Trying to direct to /invitation')
    window.location.href = '/accepted'
})

denieButton.addEventListener('click', function() {
    console.log('Trying to direct to /denied')
    window.location.href = '/denied'
})