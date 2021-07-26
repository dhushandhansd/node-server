let loginButton = document.querySelector('#loginButton')
let forgotPass = document.querySelector('#forgotPassword')

let adminEmail = 'ceonoteup@noteup.com'
let adminPass = 'noteupceo21'

loginButton.addEventListener('click', (e) => {
    e.preventDefault()


    console.log(document.querySelector('#emailInput').value)
    console.log(document.querySelector('#passwordInput').value)
    
    if(document.querySelector('#emailInput').value == "ceonoteup@noteup.com") {
        if(document.querySelector('#passwordInput').value == "noteupceo21") {
            document.location.replace('http://localhost:8000/dashboard.html')
        } else {
            alert('Password Wrong, Try Again')
        }
    } else {
        alert('Access Denied')
    }
    

})
