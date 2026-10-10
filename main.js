let result = document.getElementById("result")
let eventKey = document.getElementById("event-key")
let eventLocation = document.getElementById("event-location")
let eventWhich = document.getElementById("event-which")
let eventCode = document.getElementById("event-code")
let starter = document.getElementById('starter')
let allBoxes = document.getElementById('boxes')

document.body.addEventListener('keydown', function(event){
    event.preventDefault()
    starter.style.display = 'none'
    allBoxes.style.display= 'flex'
    result.style.display = 'flex'

    let showResult = event.which
    let keyEvent = event.key
    let locationEvent = event.location
    let whichEvent = event.which
    let codeEvent = event.code

    result.innerHTML = showResult
    eventKey.innerHTML = keyEvent
    eventLocation.innerHTML = locationEvent
    eventWhich.innerHTML = whichEvent
    eventCode.innerHTML = codeEvent
    console.log(event)
})