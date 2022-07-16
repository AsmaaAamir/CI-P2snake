(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init('VdTBCASn-iVtZo3xC');
})();

window.onload = function () {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        emailjs.sendForm('contact_service', 'contact_form', this)
        .then (function(){
            console.log('Succss!!');
        }, function(error) {
            console.log('Failed...', error);
        });
        });
    }
