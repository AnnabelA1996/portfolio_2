document.querySelectorAll('.slides img').forEach(function(slide){
    slide.addEventListener('click',function(img){
        console.log('it worked');
        var popup = document.querySelector('.popup');
        var source = img.target.src
        var popup_img=document.querySelector('.popup img');
        popup_img.setAttribute ('src', source)
        popup.style.opacity=1;
        popup.style.display='flex'
    })
})

document.querySelector('.close').addEventListener('click', function(event){
    var popup = document.querySelector('.popup');
    popup.style.opacity=0;
    popup.style.display='none'
})