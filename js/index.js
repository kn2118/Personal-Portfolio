var hitext = document.querySelector(".hi");
hitext.innerHTML = hitext.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

var nameText = document.querySelector(".name");
nameText.innerHTML = nameText.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);


anime.timeline({ loop: false }).add({
  targets: ".name .letter",
  opacity: [0, 1],
  easing: "easeInOutQuad",
  duration: 2250,
  delay: (el, i) => 150 * (i + 1),
});

anime.timeline({ loop: false }).add({
  targets: ".hi .letter",
  opacity: [0, 1],
  easing: "easeInOutQuad",
  duration: 2250,
  delay: (el, i) => 150 * (i + 1),
});
