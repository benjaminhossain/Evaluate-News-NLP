function handleSubmit(event) {
    event.preventDefault()
    
    const form = document.getElementsByTagName('form')

    // check what text was put into the form field
    let formText = document.getElementById('articleUrl').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8080/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })
}

export { handleSubmit }
