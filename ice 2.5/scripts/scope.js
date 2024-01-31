
//scope demo
function outsideFunction(){
    console.log('im outside');

    function insideFunction(){
        console.log('im inside');
        let privateMember=1234;
    }
    // insideFunction();

    return 
}