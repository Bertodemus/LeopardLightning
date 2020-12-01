$(document).ready(() => {
    $(".create-event").on("submit", function(event) {
        event.preventDefault();
    
        let newEvent = {
          title: $("#eventTitle").val().trim(),
          category: $("#eventTypeSelect").val(),
          team_one_name: $("#playerOneName").val().trim(),
          team_one_stat: $("#playerOneStats").val().trim(),
          team_two_name: $("#playerTwoName").val().trim(),
          team_two_stat: $("playerTwoStats").val().trim()
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

    $("#delete-event").on("click", function(event) {
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

        $.ajax("/event/" + id, {
            type: "GET"
        }).then(( function() {
            team_votes = event.team_one_votes;
            team_votes++;
            
            $.ajax("/event/" + id, {
                type: "PUT",
                team_one_votes = team_votes
            }).then(function() {
                console.log("updated event");
            })
        })).then(function() {
            let comment = {
                text: $(".create-comment").val().trim()
            };
            $.ajax("/comment", {
                type: "POST",
                data: comment
            }).then(
                function() {
                  console.log("created new event");
                  // Reload the page to get the updated list
                  location.reload();
                }
              );
        });
    });

    $("#vote-two").on("click", function(event) {
        let id = $(this).data("id");

        $.ajax("/event/" + id, {
            type: "GET"
        }).then(( function() {
            team_votes = event.team_two_votes;
            team_votes++;
            
            $.ajax("/event/" + id, {
                type: "PUT",
                team_two_votes = team_votes
            }).then(function() {
                console.log("updated event");
            })
        })).then(function() {
            let comment = {
                text: $(".create-comment").val().trim()
            };
            $.ajax("/comment", {
                type: "POST",
                data: comment
            }).then(
                function() {
                  console.log("created new event");
                  // Reload the page to get the updated list
                  location.reload();
                }
              );
        });
    });
  });
  