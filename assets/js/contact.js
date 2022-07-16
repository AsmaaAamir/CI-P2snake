let sendButton = document.getElementById('btnSubmit');

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        emailjs.init('user_VdTBCASn-iVtZo3xC');
        emailjs.sendForm('snakegame', 'contact_form', this)
        .then (()=> {
            sendButton.balue ="send";
        }, function(error) {
            console.log('Failed...', error);
        });
    });
    
