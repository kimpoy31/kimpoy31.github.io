function loadPartial(id, url) {
  fetch(url)
    .then((res) => res.text())
    .then((html) => (document.getElementById(id).innerHTML = html))
    .catch((err) => console.error("Error loading partial:", err));
}

loadPartial("infoHeader", "partials/infoHeader.html");
loadPartial("about", "partials/about.html");
loadPartial("techStack", "partials/techStack.html");
loadPartial("experience", "partials/experienceTimeline.html");
loadPartial("socials", "partials/socials.html");
loadPartial("projects", "partials/projects.html");
loadPartial("beyondCoding", "partials/beyondCoding.html");
loadPartial("gallery", "partials/gallery.html");
