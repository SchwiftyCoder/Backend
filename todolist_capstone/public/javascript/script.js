$(document).ready( () => {

    $("#submitTask").submit( () => {
        // log the form input
        let taskContent = $("#taskContent").val()

        // if task content is empty, do not submit the form
        if(!taskContent){
            // display an error message for 5 seconds and then 
            // alert("task content cannot be empty")
            // set error message just below the input field
            let inputStatus = $("#input-status")
            inputStatus.text("task content cannot be empty")
            // add a class to the text above
            inputStatus.addClass("input-error")
            setTimeout( () => {
                // hide the error message after n seconds (in 1000s)
                inputStatus.text('')
                inputStatus.removeClass("input-error")
            }, 3000)
            return false
        }
        return true // form is submitted to the route handlers in express
    }) 

})