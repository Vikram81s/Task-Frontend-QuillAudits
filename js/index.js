var heroAnimation = bodymovin.loadAnimation({
    container: document.getElementById("hero-animation"),
    path: "/assets/animations/81943.json",
    render: "svg",
    loop: true,
    autoplay: true,
    name: "hero animation",
  });
  
  var smartAnimation = bodymovin.loadAnimation({
    container: document.getElementById("smart-animation"),
    path: "/assets/animations/21811.json",
    render: "svg",
    loop: true,
    autoplay: true,
    name: "smart animation",
  });
  
  var blockchainAnimation = bodymovin.loadAnimation({
    container: document.getElementById("blockchain-animation"),
    path: "/assets/animations/19172.json",
    render: "svg",
    loop: true,
    autoplay: true,
    name: "blockchain animation",
  });
  
  var dueAnimation = bodymovin.loadAnimation({
    container: document.getElementById("due-animation"),
    path: "/assets/animations/92805.json",
    render: "svg",
    loop: true,
    autoplay: true,
    name: "due animation",
  });
  
  var acc = document.getElementsByClassName("accordion");
  var up = document.getElementsByClassName("up");
  var down = document.getElementsByClassName("down");
  var i;
  
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }
  