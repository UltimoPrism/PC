      let images = [];
      let currentIndex = 0;
      let car = document.getElementById("car1");
      let debug = document.getElementById("carousel");
      for (let i = 1; i <= 13; i++) {
        let div = document.createElement("div");
        div.classList.add("carousel__cell");
        let pet = document.createElement("p");
        pet.innerHTML = i;
        let img = document.createElement("img");
        img.src = `./images/galery/p (${i}).jpg`;
        img.classList.add("carousel_img");
        div.append(img);
        car.append(div);
        images.push(div);
      }

      function nextImage() {
        selectedIndex++;
        rotateCarousel();
      }
      function prevImage() {
        selectedIndex--;
        rotateCarousel();
      }

      window.addEventListener("wheel", (e) => {
        if (e.deltaY > 0) nextImage();
        else prevImage();
      });
      window.addEventListener("keydown", (e) => {
        if (e.key === "PageDown") nextImage();
        else if (e.key === "PageUp") prevImage();
      });

      var carousel = document.querySelector(".carousel");

      var cells = carousel.querySelectorAll(".carousel__cell");
      var cellCount;
      var selectedIndex = 0;
      var cellWidth = carousel.offsetWidth;
      var cellHeight = carousel.offsetHeight;
      var isHorizontal = true;
      var rotateFn = isHorizontal ? "rotateY" : "rotateX";
      var radius, theta;

      function rotateCarousel() {
        var angle = theta * selectedIndex * -1;
        carousel.style.transform =
          "translateZ(" + -radius + "px) " + rotateFn + "(" + angle + "deg)";
      }
      function changeCarousel() {
        cellCount = images.length;
        theta = 360 / cellCount;
        var cellSize = cellWidth;
        radius = Math.round(cellSize / 2 / Math.tan(Math.PI / cellCount));
        for (var i = 0; i < cells.length; i++) {
          var cell = cells[i];
          if (i < cellCount) {
            cell.style.opacity = 1;
            var cellAngle = theta * i;
            cell.style.transform =
              rotateFn + "(" + cellAngle + "deg) translateZ(" + radius + "px)";
          } else {
            cell.style.opacity = 0;
            cell.style.transform = "none";
          }
        }

        rotateCarousel();
      }
      changeCarousel();