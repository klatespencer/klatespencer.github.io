// Get the current URL and split it by "/"
var url = window.location.href.split("/");

// Remove the protocol and domain from the array
url.splice(0, 3);

// Initialize the breadcrumbs array
var breadcrumbs = [];

// Loop through the URL segments and add them to the breadcrumbs array
for (var i = 0; i < url.length; i++) {
  // Split each segment by "-" and capitalize the first letter of each word
  var segment = url[i].split("-").map(function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(" ");
  
  // Add the segment to the breadcrumbs array
  breadcrumbs.push(segment);
}

// Create the breadcrumb HTML and add it to the #breadcrumbs element
var breadcrumbHTML = "";
for (var i = 0; i < breadcrumbs.length; i++) {
  var breadcrumb = breadcrumbs[i];
  var isActive = (i === breadcrumbs.length - 1);
  
  // Add the active class if this is the last breadcrumb
  var activeClass = isActive ? "class=\"active\"" : "";
  
  // Add the breadcrumb to the HTML string
  breadcrumbHTML += "<a href=\"" + url.slice(0, i+1).join("/") + "\" " + activeClass + ">" + breadcrumb + "</a>";
  
  // Add a separator (except for the last breadcrumb)
  if (!isActive) {
    breadcrumbHTML += "<span> > </span>";
  }
}

document.getElementById("breadcrumbs").innerHTML = breadcrumbHTML;