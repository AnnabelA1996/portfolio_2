// document.querySelectorAll('.slides img').forEach(function(slide){
//     slide.addEventListener('click', function(image){
//         // console.log(image.target.src)
//         var source = image.target.src
//         document.querySelector('.popup').style.visibility ='visible'
//         document.querySelector('.popup').style.opacity = 1
//         document.querySelector('.popup img').setAttribute('src', source)
//         document.querySelector('.popup img').style.visibility = 'visible'
//         document.querySelector('.popup img').style.display = 'block'
//         document.querySelector('.popup img').style.opacity = 1
//         document.querySelector('.popup img').style.cssText = 'visibility: visible; opacity: 1; height: 480px; width: 640px; transform: rotate(360deg);'
//         document.querySelector('.close').style.display = 'block'
//     })
// })

// document.querySelector('.close').addEventListener('click', function(event){
//     document.querySelector('.popup').style.cssText='visibility:hidden; opacity:0'
//     document.querySelector('.popup img').style.cssText='visibility:hidden; opacity:0; transform: rotate(-360deg);'
//     event.target.style.display = 'none'
// })

// added a comment

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