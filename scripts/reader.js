console.log("Accessibility Rocks!");


$(document).ready(function () { 
    $("*:not(body)").hover(
        function (ev) { 
            //WHEN MOUSE HOVERS OVER
            $(this).addClass("highlight")
            ev.stopPropagation()
            document.addEventListener('keydown', e => {
                let code;  
                if (e.keyCode) {
                    code = e.keyCode;
                }
                else if (e.which) {
                    code = e.which;
                } 
                //WHEN SPACE IS PRESSED
                if (e.code === '' || e.code === 'Unidentified' || e.code === 'Space') { 
                    //PREVENTS SCROLLING ON SPACE
                    if (e.stopPropagation) {
                        e.stopPropagation();
                        e.preventDefault();
                    
                        //READS ALL ELEMENTS THAT HAVE BEEN HOVERED OVER NOT JUST CURRENT ONE
                        speechSynthesis.speak(new SpeechSynthesisUtterance($(this).text() ))
                        let alttext = $(this).attr("alt") 
                        let srcofimg = $(this).attr("src") 
                        //READS ALT TEXT OR SRC URL
                        if ($(this).attr('alt')) {
                            speechSynthesis.speak(new SpeechSynthesisUtterance(alttext))} 
                        else {
                            speechSynthesis.speak(new SpeechSynthesisUtterance(srcofimg)) 
                        }
                    }
                } 
                else { 
                    //IF YOU PRESS ANY OTHER KEY IT STOPS READING
                    speechSynthesis.cancel()
   
                } 
            }) 
        }, 
        function(){
            //WHEN MOUSE STOPS HOVERING
            $(".highlight").removeClass('highlight')
        },
          
    )
    //WORKS WITHOUT SPACEBAR, READING STOPS WHEN MOUSE STOPS HOVERING
    // $("*:not(body)").hover(
    //     function (ev) { 
    //         //when mouse hovers over
    //         $(this).addClass("highlight")         
    //         //reads all elements that have been hovered over instead of just the one that is currently being hovered over
    //         speechSynthesis.speak(new SpeechSynthesisUtterance($(this).text() ))
    //         let alttext = $(this).attr("alt") 
    //         let srcofimg = $(this).attr("src") 
    //         //reads alt text or src url
    //         if ($(this).attr('alt')) {
    //             speechSynthesis.speak(new SpeechSynthesisUtterance(alttext))} 
    //         else {
    //             speechSynthesis.speak(new SpeechSynthesisUtterance(srcofimg)) 
    //         }
    //     }, 
    //     function(){
    //         //when mouse stops hovering
    //         $(".highlight").removeClass('highlight')
    //     },
          
    // )  
})

