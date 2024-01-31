(function() {
        // test1();
        // test2();
        // test3();
        // test4();
        test5();
    $('.blue-box').on('click',event=>{
        const lb=$('.lightbox');
        if(lb.is(':visible')){
            lb.hide();
        }
        else{
            lb.show();
        }
    })


    $( "#clickme" ).on( "click", function() {
        $( "#book" ).animate({
          opacity: 0.25,
          left: "+=50",
          height: "toggle"
        }, 5000, function() {
          // Animation complete.
        });
      });








    function test1() {
        const jqele = $('.red-box');
        console.log(jqele);

        jqele
            .removeClass('red-box')
            .addClass('blue-box');
    }

    function test2() {
        const jq = $('#content > p');
        console.log(jq[1]);
        console.log($(jq[1]).text());
        // $(jq[1]).text("yoooo yogurt is good for you!!");
    }

    function test3() {
        $('.red-box').on("click", function(event) {
            alert('this is a red box');
        })
    }

    function test4() {
        const newele = $('<p></p>')
            .text('this was created with jq also')
            .addClass('emphasize');

        $('#test-box')
            .append('<p>I added this with jq</p>')
            .append(newele);
    }

    function test5() {
        $("form#test-form input[name=submit]").on('click', e => {
            e.preventDefault();
            e.stopPropagation();
            const email = $('form#test-form input[type=email]').val();
            alert(email);
            $('.lightbox').hide();
        })

        $("input[name=email]").on('blur', e => {
                
        })
    }
})();