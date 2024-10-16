const circuit = document.querySelector(".circuit");
      const text = document.querySelector("#text");

      const timeTotal = 7000; //bigger number = longer total time (1sec = 1000)
      const breatheTime = (timeTotal / 5) * 2;
      const holdTime = timeTotal / 5;

      breatheAnimation(); // include Breathe In + Hold + Breathe Out

      function breatheAnimation() {
        text.innerHTML = "Breathe In"; 
        circuit.className = "circuit grow"; //4 seconds

        setTimeout(() => {
          text.innerText = "Hold";

          setTimeout(() => {
            text.innerText = "Breathe Out"; //3 seconds
            circuit.className = "circuit shrink";
          }, holdTime);
        }, breatheTime);
      }

      setInterval(breatheAnimation, timeTotal);