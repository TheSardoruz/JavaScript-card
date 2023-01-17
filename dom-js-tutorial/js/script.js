let chooseBtn = document.getElementById('choose'),
 chooseBtn2 = document.getElementById('receive'),
 concactForm = document.getElementsByClassName('contactform_name')[0],
 text = document.getElementsByTagName('h2')[0],
 modal = document.querySelector('.modal'),
 btn = document.querySelectorAll('.main_tel_title')[0],
 closebtn = document.querySelectorAll('.close')[0],
 message = document.getElementsByName('message')[0]


function hover (){
    text.textContent = 'end'
}





//third way
text.addEventListener('mouseenter', hover)
text.addEventListener('mouseleave', function(){
    text.textContent= 'Все включено'
})


chooseBtn2.addEventListener('click', function(){
    modal.style.display = 'block'
})

closebtn.addEventListener('click', function(){
    modal.style.display = 'none'
})
concactForm.addEventListener('input', function(){
    message.value = `меня завут ${concactForm.value}  и я хочу: `
})


