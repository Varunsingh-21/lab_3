(function() {
    
    // Question 0
    // Use npm to install jquery and holder.js
    // Add a reference to jquery and holder.js in your index.html in the appropriate spot
    
    // Complete all steps using jquery.
    // Changes to index.html should not be necessary unless specifically mentioned

    // Question 1
    // Update the page title to say "YOUR NAME - Test 2"
    // Update the navbar title to say "YOUR NAME"
    // Replace the footer text with a copyright symbol and the year, using the Date object.
    $('title').text('VARUN DEEP SINGH - Test 2');
    $('.navbar-brand').text('VARUN DEEP SINGH');
    const CopyrightSymbolYear = new Date().getFullYear();
    $('footer .container').html(`&copy; ${CopyrightSymbolYear}`);
    
    // Question 2
    // get a reference to the test table
    // get a reference to the second row in the table
    // update the student number to be 100100100
    $('#test-table tbody tr:eq(1) td:last').text('100100100');
    
     // Question 3
    // create a table row with your own information
    // create a table delimeter and set your first name
    // add it to your table row
    // create a table delimeter and set your last name
    // add it to your table row
    // create a table delimeter and set your banner id
    // add it to your table row
    // add your row to the test table body  
    const $MyOwnRow = $('<tr>');
    const MyFirstName=$('<td>').text('VARUN');
    $MyOwnRow.append(MyFirstName);
    const MyLastName=$('<td>').text('SINGH');
    $MyOwnRow.append(MyLastName);
    const MyStudentId=$('<td>').text('100865156');
    $MyOwnRow.append(MyStudentId);
    $('#test-table tbody').append($MyOwnRow);
    
    // Question 4: remove Alice Bobberts from the table
    $('#test-table tbody tr:eq(2)').remove();    
        
    // Question 5: Add .table-info class to your personal row
    // Assuming the last row is yours
        $('#test-table tbody tr:last').addClass('table-info');
    
    // Question 6: Remove .table-warning class from Adam Kunz's row
    $('#test-table tbody tr:eq(0)').removeClass('table-warning');  
     
    
    // Question 7: Change .table-dark to .table-success for John Doe's row
    $('#test-table tbody tr:eq(1)').removeClass('table-dark'); 
    $('#test-table tbody tr:eq(1)').addClass('table-success'); 

    
    // Question 8
    // Go to https://getbootstrap.com/docs/5.3/components/card/
    // Using jquery, add a new container div to the <main> section
    // In that container, add a new bootstrap card. This should take several steps.
    // // make a card, make an image, append the image to the card
    // // make a card body, append it to the card
    // // make a heading, a paragraph, a link, append them to the card-body
    // // append the card to the new container
    // use holder.js to render the image in the card
    // add a heading with your name in the card body, and a sentence or two about yourself.    
        const $newDivContainer = $('<div>').addClass('container');
        const $card = $('<div>').addClass('card');
        const $imageToDisplay = $('<img>').attr('src', 'holder.js/100px180').addClass('displayImage');
        const $cBody = $('<div>').addClass('card-body');
        const $Cardhead = $('<h5>').addClass('card-title').text('VARUN');
        const $description = $('<p>').addClass('card-text').text('My Name is Varun Deep Singh. I hope I Score 100 in this test');
        const $hyperlink = $('<a>').addClass('btn btn-primary').attr('href', 'https://www.google.com/search?client=firefox-b-d&q=elon+musk').text('Learn More About Me');
    
        $newDivContainer.append($Cardhead, $description, $hyperlink);
        $card.append($imageToDisplay, $cBody);
        $newDivContainer.append($card);
        $('main').append($newDivContainer);

})();

