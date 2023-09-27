const registrationButton = document.getElementById('register-button');
const registrationForm = document.getElementById('registration-form');
const registrationName = document.getElementById('name')
const registrationEmail = document.getElementById('mail')
const registrationPhone = document.getElementById('phone')
const registrationMessage = document.getElementById('message')

const nameError = document.getElementById('name-error')
const emailError = document.getElementById('mail-error')
const phoneError = document.getElementById('phone-error')
const messageError = document.getElementById('message-error')

let valid = true

if (registrationName.value === '' || registrationEmail.value === '' || registrationPhone.value === '' || registrationMessage.value === '') {
  valid = false
}

registrationName.addEventListener('input', () =>{
  if ( registrationName.value !== '') {
    valid = true
    nameError.innerHTML = ''
  }
  if (registrationName.value === '') {
    valid = false
    nameError.innerHTML = 'Không được để trống tên'    
  }
})

registrationName.addEventListener('blur', () =>{
  
  if (registrationName.value === '') {
    valid = false
    nameError.innerHTML = 'Không được để trống tên'    
  }
})

registrationEmail.addEventListener('input', () =>{
  if (registrationEmail.value !== '') {
    valid = true
    emailError.innerHTML = ''
  }
  if (registrationEmail.value === '') {
    valid = false
    emailError.innerHTML = 'Không được để trống email'    
  } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(registrationEmail.value)) 
  {
    valid = false
    emailError.innerHTML = 'Email không hợp lệ'
  }
})

registrationEmail.addEventListener('blur', () =>{
  if (registrationEmail.value === '') {
    valid = false
    emailError.innerHTML = 'Không được để trống email'    
  } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(registrationEmail.value)) 
  {
    valid = false
    emailError.innerHTML = 'Email không hợp lệ'
  }
}
)

registrationPhone.addEventListener('input', () =>{
  if (registrationPhone.value !== '') {
    valid = true
    phoneError.innerHTML = ''
  }
  if (registrationPhone.value === '') {
    valid = false
    phoneError.innerHTML = 'Không được để trống số điện thoại'    
  } else if (!/^\d{10}$/.test(registrationPhone.value)) 
  {
    valid = false
    phoneError.innerHTML = 'Số điện thoại không hợp lệ'
  }
}
)

registrationPhone.addEventListener('blur', () =>{
  if (registrationPhone.value === '') {
    valid = false
    phoneError.innerHTML = 'Không được để trống số điện thoại'    
  } else if (!/^\d{10}$/.test(registrationPhone.value)) 
  {
    valid = false
    phoneError.innerHTML = 'Số điện thoại không hợp lệ'
  }
}
)

registrationMessage.addEventListener('input', () =>{
  if (registrationMessage.value !== '') {
    valid = true
    messageError.innerHTML = ''
  }
  if (registrationMessage.value === '') {
    valid = false
    messageError.innerHTML = 'Không được để trống tin nhắn'    
  }
}
)

registrationMessage.addEventListener('blur', () =>{
  if (registrationMessage.value === '') {
    valid = false
    messageError.innerHTML = 'Không được để trống tin nhắn'    
  }
}
)

registrationButton.addEventListener('click', (e) => {
  e.preventDefault()
  if (valid) {
    const modal = document.getElementById('register-modal')
    modal.style.display = 'block'
    modal.style.opacity = '1'
    modal.style.visibility = 'visible'
    document.getElementById('guess-name').innerHTML = registrationName.value
    document.getElementById('guess-email').innerHTML = registrationEmail.value
    document.getElementById('guess-phone').innerHTML = registrationPhone.value
    document.getElementById('guess-message').innerHTML = registrationMessage.value
  } else {
    alert('Đăng ký thất bại, vui lòng kiểm tra lại thông tin')
  }
})

const closeModal = document.getElementById('close-modal')
closeModal.addEventListener('click', () => {
  const modal = document.getElementById('register-modal')
  modal.style.display = 'none'
  modal.style.opacity = '0'
  modal.style.visibility = 'hidden'
}
)
  