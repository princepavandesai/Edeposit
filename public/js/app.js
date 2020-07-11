const weatherForm=document.querySelector('form')
const search=document.querySelector('input')
const inputs=document.getElementById('input')
// const messageone=document.querySelector('#msg1')
// const messagtwo=document.querySelector('#msg2')


weatherForm.addEventListener('submit', (e) =>{
    e.preventDefault()

    const temp=search[0].value
    const temp1=search['datetxt'].value
    console.log(temp)
    console.log(temp1)
})