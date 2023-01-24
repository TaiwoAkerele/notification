var count = document.querySelector('.note').innerText
document.querySelector('.webber').addEventListener('click', function() {
    document.querySelector('.webber').style.backgroundColor = 'white';
    document.querySelector('.red').style.visibility = 'hidden';
    count = count -1;
    document.querySelector('.note').innerText = count
});

document.querySelector('.angela').addEventListener('click', function() {
    document.querySelector('.angela').style.backgroundColor = 'white';
    document.querySelector('.closer').style.visibility = 'hidden';    
    count = count -1;
    document.querySelector('.note').innerText = count
});

document.querySelector('.jacob').addEventListener('click', function() {
    document.querySelector('.jacob').style.backgroundColor = 'white';
    document.querySelector('.rew').style.visibility = 'hidden';
    count = count - 1;
    document.querySelector('.note').innerText = count
   
});


var unread = document.querySelector('p');
unread.addEventListener('click', function() {
    document.getElementsByClassName('notes');
    document.querySelector('.note').innerText = 0;
    document.querySelector('.webber').style.backgroundColor = 'white';
    document.querySelector('.angela').style.backgroundColor = 'white';
    document.querySelector('.jacob').style.backgroundColor = 'white';
    document.querySelector('.rizzy').style.backgroundColor = 'white';
    document.querySelector('.rew').style.visibility = 'hidden';
    document.querySelector('.red').style.visibility = 'hidden';
    document.querySelector('.closer').style.visibility = 'hidden';
});
if (count === 0) {
    document.querySelector('.note').classList.add('yes')
};