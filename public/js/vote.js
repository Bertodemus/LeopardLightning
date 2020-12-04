$(document).ready(() => {

setTimeout(function() {
    let voteOne = parseInt($("#teamOneVote").attr("value")) || 0;
    let voteTwo = parseInt($("#teamTwoVote").attr("value")) || 0;

    if (voteOne > voteTwo) {
        $("#teamOneVote").removeClass("btn-light");
        $("#teamOneVote").addClass("btn-success");

    } else {
            if (voteOne < voteTwo) {
                $("#teamTwoVote").removeClass("btn-light");
                $("#teamTwoVote").addClass("btn-success");
            }
    }
}, 200);

});