const form = [...document.querySelector('.form').children];


const name = document.querySelector('.name') || null;
const email = document.querySelector('.email');
const password = document.querySelector('password');

if ( name == null){

} else{
    submitBtn.addEventlistener('click', ()=>{
        fetch('/register-user',{
            method:'post',
            headers: new Headers({'Content-Type': 'application/json'}),
            body: JSON.stringify({
                name: name.value,
                email: email.value,
                password: password.value
            })
        })
        .then(res => res.json())
        .then(data => {
            if(data.name){
                alert('register successful');
            } else{
                alert(data);
            }
        })
    })
}