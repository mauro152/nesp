document.getElementById('first').addEventListener('submit', (event) => {
    
    let password=document.getElementById('password').nodeValue.length;
    if (password <8) {
        console.log('password less than 8');
    } else {
        console.log('ciao');
    }
});