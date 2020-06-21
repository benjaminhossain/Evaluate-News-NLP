function handleSubmit(event) {
    event.preventDefault()
    
    const form = document.getElementsByTagName('form')

    // check what text was put into the form field
    const url = document.getElementById('articleUrl').value
    
    if (Client.isValidUrl(url)){ //if it's a valid URL
        fetch('http://localhost:8080/addData', {
            method: "POST",
            credentials: "same-origin",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({url : url}) 
        })
        .then(res => res.json())
        .then(function(res) {
            console.log(res);
            document.getElementById('polarity').innerHTML = res.polarity
            document.getElementById('subjectivity').innerHTML = res.subjectivity
        })
    } else {
        alert('Please enter a valid URL')
    }

}
export { handleSubmit }
