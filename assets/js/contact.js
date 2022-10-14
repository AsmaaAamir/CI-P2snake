// contact us EmailJS from -https://www.emailjs.com/docs/tutorial/creating-contact-form/ 
window.onload =function(){
    document.getElementById('contact-form').addEventListener("submit", function (event) {
        event.preventDefault();
        emailjs.init('VdTBCASn-iVtZo3xC');
        emailjs.sendForm('snakegame', 'snakegame-contact-form', this)
            .then (function(){
                alert('Thank you for your feedback..Your feedback has been fowarded to the Snake Game staff.")  ');
            }, function(error) {
                console.log('Failed....', error);
            });
    });
}
    
