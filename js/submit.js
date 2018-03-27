//Reference message collection
var messageRef = firebase.database().ref('message');

// listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    // get values of form
    var name = getInputValue('name');
    var subject = getInputValue('subject');
    var email = getInputValue('email');
    var phone = getInputValue('phone');
    var message = getInputValue('message');

    //push to firebase database
    saveMessage(name, company, email, phone, message);

    //alert the user
    document.querySelector('#sendmessage').style.display = 'block';

    // Hide alert after 5 seconds
    setTimeout(function () {
        document.querySelector('#sendmessage').style.display = 'none';
    }, 5000);

    // clear form
    document.getElementById('contactForm').reset();

}

// function to grab form values
function getInputValue(id) {
    return document.getElementById(id).value;
}

// save message to firebase
function saveMessage(name,email, phone,subject, message) {
    var newmessageRef = messageRef.push();
    newmessageRef.set({
        name: name,
        email: email,
        phone: phone,
        subject: subject,
        message: message
    });
}