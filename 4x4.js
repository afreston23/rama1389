
    for(let x = 0; x < 16; x++) {
         $("<div class='squares'></div>").appendTo('#container');
         
        }

    // $("#container").click(function() {
    //   $("#container").toggleClass("darkMode");
      
    //     });
        $('#container').on('click', '.squares', function() {
          let boxthing = $(this);
         
          $(boxthing).toggleClass("grey")
         
         });


