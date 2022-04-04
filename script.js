//Create a function that will fire when the submit <button> is clicked
//Make sure the function loaded after the DOM

$(function() {
    $("#submit").on('click', function(event){
        this.innerHTML = "button clicked";
    //create variables for each of the form inputs
    const name = $("#name");
    const email = $("#email");
    const phone = $("#phone");
    
    //create an array named required and store the variables you've name, email, and phone number
    const required = [name, email, phone];

    //Utilize a for loop to iterate of the entire required array
    for (let i=0; i < required.length; i++){
        //use an if statement to check the value of each array item
        if (required[i].val() == ""){
            //add the warning class to this message
            $("#message").text("Please Fill Out Required Fields");
            $("#message").addClass("warning");
            //Attach the warning class to the array item's <label>
            required[i].prev().addClass("warning");
            //once the field has something other than a blank string make sure the warning class is removed
        } else {
            required[i].prev().removeClass();
        }
    }
    //utilize another if statement
    //verify that no <label>'s have the warning class
    if ($("label").hasClass("warning")) {
    } else {
        //if true
        //remove the form from the DOM
        $("#form").remove();
        //manipulate the <h2> to say: "Thanks for your feedback!"
        $("h2").text("Thanks for your feedback!")
    }});
});

