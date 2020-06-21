function isValidUrl (urlInput) {
    let regex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/
    return regex.test(urlInput)
}

export { isValidUrl }  
