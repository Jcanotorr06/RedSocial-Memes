const overlay = document.getElementsByClassName('overlay')[0]
const images = document.getElementsByClassName('post-image')
const closeBtn = document.getElementsByClassName('close')[0]
const collapseL = document.getElementsByClassName('collapse')[0]
const collapseR = document.getElementsByClassName('collapse-2')[0]
const main = document.getElementsByTagName('main')[0]
const tabTitle = document.getElementsByClassName('tab-title')

for (let i = 0; i < images.length; i++) {
    images[i].onclick = () =>{
        overlay.classList.toggle('hidden')
        document.getElementsByTagName('body')[0].classList.toggle('lockScroll')
    }
    
}
closeBtn.onclick = () =>{
    overlay.classList.toggle('hidden')
    document.getElementsByTagName('body')[0].classList.toggle('lockScroll')
}

collapseL.onclick = () =>{
    if(main.classList.contains('collapseR')){
        main.classList.toggle('collapseBoth')
        main.classList.toggle('collapseR')
    }else if(main.classList.contains('collapseBoth')){
        main.classList.toggle('collapseBoth')
        main.classList.toggle('collapseR')
    }else{
        main.classList.toggle('collapseL')
    }
    for (let i = 0; i < tabTitle.length; i++) {
        tabTitle[i].classList.toggle('hide')
        
    }
    document.getElementById('user-data').classList.toggle('hide');
    document.getElementById('info').classList.toggle('hidden');
    document.getElementById('user-profile').classList.toggle('collapsePad');
    document.getElementById('tabs').classList.toggle('collapsePad');
    document.getElementById('logout').classList.toggle('collapsePad');
    document.getElementsByClassName('notif-cant')[0].classList.toggle('hide');
    for (let i = 0; i < document.getElementsByClassName('tab-container').length; i++) {
        document.getElementsByClassName('tab-container')[i].classList.toggle('collapsePad');
        
    }
}
collapseR.onclick = () =>{
    if(main.classList.contains('collapseL')){
        main.classList.toggle('collapseBoth')
        main.classList.toggle('collapseL')
    }else if(main.classList.contains('collapseBoth')){
        main.classList.toggle('collapseBoth')
        main.classList.toggle('collapseL')
    }else{
        main.classList.toggle('collapseR')
    }
    for (let i = 0; i < document.getElementsByClassName('sug-user-button').length; i++) {
        document.getElementsByClassName('sug-user-button')[i].classList.toggle('hide')    
    }
    for (let i = 0; i < document.getElementsByClassName('sug-user-data').length; i++) {
        document.getElementsByClassName('sug-user-data')[i].classList.toggle('hide')    
    }
    for (let i = 0; i < document.getElementsByClassName('see-more').length; i++) {
        document.getElementsByClassName('see-more')[i].classList.toggle('hide')    
    }
    for (let i = 0; i < document.getElementsByClassName('sug-topic-button').length; i++) {
        document.getElementsByClassName('sug-topic-button')[i].classList.toggle('hide')    
    }
    for (let i = 0; i < document.getElementsByClassName('sug-topic-data').length; i++) {
        document.getElementsByClassName('sug-topic-data')[i].classList.toggle('hide')    
    }
    for (let i = 0; i < document.getElementsByClassName('sug-user').length; i++) {
        document.getElementsByClassName('sug-user')[i].classList.toggle('collapsePad'); 
    }
    for (let i = 0; i < document.getElementsByClassName('sug-topic').length; i++) {
        document.getElementsByClassName('sug-topic')[i].classList.toggle('collapsePad'); 
    }
    for (let i = 0; i < document.getElementsByClassName('sug-title').length; i++) {
        document.getElementsByClassName('sug-title')[i].classList.toggle('collapseTitle'); 
    }
    
}








