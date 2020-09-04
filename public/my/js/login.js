document.getElementById('first').addEventListener('submit', (event) => {
    
    let password=document.getElementById('password').value.length;
    if (password <8) {
        event.preventDefault();
        console.log('password less than 8');
    } else {
        event.preventDefault();
        console.log('ciao');
    }
});