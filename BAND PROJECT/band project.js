function showModal(){
    var modal = document.getElementById('myModal');
    

    modal.style.display='block';
    modal.style.transform= 'translateY(7.4%)';
    

    var closeButton = document.getElementById('closeButton');
    closeButton.addEventListener('click', function(){
modal.style.display ='none'
    });
    var closeButton = document.getElementById('secondclsbutton');
    closeButton.addEventListener('click', function(){
modal.style.display ='none'
    });

    window.addEventListener('click',function(event){
        if(event.target === modal){
            modal.style.display = 'none';
        }
    });
}
var thisButton = document.getElementById('buytic');
var thatbtn = document.getElementById('buytics');
var thabtn = document.getElementById('buytica');
thabtn.addEventListener('click',showModal);
thatbtn.addEventListener('click',showModal);
thisButton.addEventListener('click',showModal);