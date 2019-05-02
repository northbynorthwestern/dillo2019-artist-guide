// $(document).ready(function(){
//     console.log("ready!");
// })

var biobox = $("#bio-container");
biobox.hide();
var returnButton = $("#return");
returnButton.hide();
var denzelbio = $("#denzelbio");
denzelbio.hide();
var fergbio = $("#fergbio");;
fergbio.hide();
var mortybio = $("#mortybio");
mortybio.hide();
var williebio = $("#williebio");
williebio.hide();
var davebio = $("#davebio");
davebio.hide();
var rogerbio = $("#rogerbio");
rogerbio.hide();
var spideybio = $("#spideybio");
spideybio.hide();
var biolist = ["blank", denzelbio, fergbio, mortybio, williebio, davebio, rogerbio, spideybio];
var currentArtist = 0;
function artistClick(selectedArtist){
        if(currentArtist === selectedArtist){
            window.scrollTo(0,0);

            setTimeout(function(){
                returnButton.hide();
                var previousArtist = currentArtist;
                currentArtist = 0;
                biobox.slideUp(200);
                biolist[previousArtist].hide();
               
            }, 450)
            }
        else if (currentArtist === 0){
            biolist[selectedArtist].show();
            currentArtist = selectedArtist;
            biobox.slideDown(200);
            setTimeout(function(){
                returnButton.show();
                var newheight = $("#bio-container")[0].scrollHeight;
                window.scrollTo(0, newheight);
                
            }, 400);
            
            
        }
        else{
            biolist[currentArtist].hide();
            biolist[selectedArtist].show();
            currentArtist = selectedArtist;
            biobox.slideDown(250);
            setTimeout(function(){
                window.scrollTo(0,document.body.scrollHeight);
                returnButton.show();
            }, 250);
            returnButton.show();
        }
    }

$("#denzel")[0].addEventListener("click", function(){
    artistClick(1);
})
$("#ferg")[0].addEventListener("click", function(){
    artistClick(2);
    
})
$("#morty")[0].addEventListener("click", function(){
    artistClick(3);
    
})
$("#willie")[0].addEventListener("click", function(){
    artistClick(4);
    
})
$("#dave")[0].addEventListener("click", function(){
    artistClick(5);
    
})
$("#roger")[0].addEventListener("click", function(){
    artistClick(6);
    
})
$("#spidey")[0].addEventListener("click", function(){
    artistClick(7);
    
})
$("#arrow-right")[0].addEventListener("click", function(){
    console.log("click works");

    $("#artist-container").scrollLeft($("#artist-container").scrollLeft() + 2000);
})
$("#arrow-left")[0].addEventListener("click", function(){
    console.log("click works");
    $("#artist-container").scrollLeft($("#artist-container").scrollLeft() - 2000);
})
returnButton[0].addEventListener("click", function(){
    window.scrollTo(0,0);

    setTimeout(function(){
        returnButton.hide();
        var previousArtist = currentArtist;
        currentArtist = 0;
        biobox.slideUp(450);
        biolist[previousArtist].hide();
       
    }, 250)
                
})
