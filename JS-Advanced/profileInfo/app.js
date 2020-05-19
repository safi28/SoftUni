function lockedProfile() {
  [...document.getElementsByTagName("button")].map(el =>
    el.addEventListener("click", function(x) {
      let user = x.target.parentElement;
      if (!user.querySelector("input[type=radio]").checked) {
        user.querySelector("div").style.display = "block";
        x.target.textContent = "Hide it";
        user.querySelector("button").addEventListener("click", function(x) {
          x.target.parentElement.querySelector("div").style.display = "none";
          x.target.textContent = "Show more";
        });
      }
    })
  );
}
