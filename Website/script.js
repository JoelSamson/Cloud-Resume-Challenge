
const count = document.getElementById("counter-number");
      async function updateCounter() {
          let response = await fetch(
              "https://utasm7eqruqbu6vntlofzxwc4y0swkma.lambda-url.us-east-1.on.aws/"
          );
          let data = await response.json();
          count.innerHTML = `👀 Views: ${data}`;
          console.log(response)
      }
      updateCounter();