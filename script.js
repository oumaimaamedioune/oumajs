function upDate(previewPic) {
    // Log to check function is triggered
    console.log("Mouse is over an image");

    // Log the alt text and source of the image
    console.log("Image alt:", previewPic.alt);
    console.log("Image src:", previewPic.src);

    // Update the text in the image container
    document.getElementById("image").innerText = previewPic.alt;

    // Change the background image to the hovered image
    document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";
}

function undo() {
    // Reset the background image
    document.getElementById("image").style.backgroundImage = "url('')";
    
    // Reset the text
    document.getElementById("image").innerText = "Hover over an image below to display here.";
}