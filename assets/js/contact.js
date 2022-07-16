

window.onload =function(){
    document.getElementById('contact-form').addEventListener("submit", function (event) {
        event.preventDefault();
        emailjs.init('VdTBCASn-iVtZo3xC');
        emailjs.sendForm('snakegame', 'snakegame-contact-form', this)
            .then (function(){
                console.log('success!');
            }, function(error) {
                console.log('Failed....', error);
            });
    });
}
    
