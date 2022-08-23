function newPostAlert() {
    alert("You must be signed in to create a new post!")
}

function handleSubscription() {
    var targetButton = document.getElementById("subscribe-button");
    targetButton.style.display = "none";
}

function likeButton(likeID) {
    var targetLikeP = document.getElementById(`likeCount${likeID}`);
    targetLikeP.innerHTML = parseInt(targetLikeP.innerHTML) + 1;
}