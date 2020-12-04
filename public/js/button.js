$(document).ready(() => {
    $(".create-event").on("click", function(event) {
        event.preventDefault();

        $.getJSON("api/user_data", function(data) {
          // Make sure the data contains the username as expected before using it
            console.log('UserId: ' + data.id);
            let id = data.id;
    
        let newEvent = {
          title: $("#eventTitle").val().trim(),
          category: $("#eventTypeSelect").val(),
          description: $("#eventDescription").val().trim(),
          team_one_name: $("#playerOneName").val().trim(),
          team_one_stat: $("#playerOneStats").val().trim(),
          team_two_name: $("#playerTwoName").val().trim(),
          team_two_stat: $("#playerTwoStats").val().trim(),
          UserId: id
        };
    
        // Send the POST request.
        $.ajax("/event", {
          type: "POST",
          data: newEvent
        }).then(
          function() {
            console.log("created new event");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
    });

    $("#delete-event").on("click", function(event) {
      event.preventDefault();
        let id = $(this).data("id");
    
        // Send the DELETE request.
        $.ajax("/event/" + id, {
          type: "DELETE"
        }).then(
          function() {
            console.log("deleted event ", id);
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });

    $("#vote-one").on("click", function(event) {
        let id = $(this).data("id");

            $.ajax("/event/" + id + "/1", {
                type: "PUT",
            }).then(function() {
                console.log("updated event");
            });
        });

        $("#vote-two").on("click", function(event) {
          let id = $(this).data("id");
  
              $.ajax("/event/" + id + "/2", {
                  type: "PUT",
              }).then(function() {
                  console.log("updated event");
              });
          });
  
  });
  