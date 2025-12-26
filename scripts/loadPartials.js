function loadPartial(id, url) {
  fetch(url)
    .then((res) => res.text())
    .then((html) => (document.getElementById(id).innerHTML = html))
    .catch((err) => console.error("Error loading partial:", err));
}

loadPartial("infoHeader", "partials/infoHeader.html");
