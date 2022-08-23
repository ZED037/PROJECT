const full_name = document.getElementById('fullname')
const address = document.getElementById('address')
const phone_num = document.getElementById('phone_num')
const email = document.getElementById('email')
const mess_age = document.getElementById('message')
const form = document.getElementById('form')

form.addEventListener('submit', (e) =>
{
    let messages = []
    if(full_name.value === ""  || full_name.value == null){
    alert('Name is required')
}

    else if(address.value === ""  || address.value == null){
    alert('Address is required')
}

    else if(phone_num.value === ""  || phone_num.value == null){
    alert('Email is required')
}

    else if(email.value === ""  || email.value == null){
    alert('Email is required')
}

    else if(mess_age.value === ""  || mess_age.value == null){
    alert('Message is required')
}
    if (messages.length > 0){
    e.preventDefault()
}
})
