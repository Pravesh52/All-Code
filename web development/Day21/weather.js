let btn = document.querySelector("button");
    let inp = document.querySelector("input");
    let result = document.getElementById("result");
    let key = "9f6290d6cda9a36a63755fadee71f83d";

    btn.addEventListener("click", () => {
      let city = inp.value;

      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`)
        .then((data) => data.json())
        .then((res) => {
          if (res.cod == 200) {
            result.innerHTML = `
              City: ${res.name} <br>
              Temp: ${res.main.temp} °C <br>
              Weather: ${res.weather[0].description}
            `;
          } else {
            result.innerHTML = "City not found!";
          }
        })
        .catch(() => {
          result.innerHTML = "Error fetching data";
        });
    });