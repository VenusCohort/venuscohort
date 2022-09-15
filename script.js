  const main = document.getElementById('app');
const input = document.querySelector("#input");
const search = document.querySelector("#search");
input.addEventListener("input", () => console.log(input.value));
search.addEventListener("click", (e) => {
    e.preventDefualt;
    let user = input.value;
    console.log(user);
  });
    const url = `https://api.github.com/orgs/VenusCohort/repos`;
    fetch(url).then(response => response.json()).then(data => {
            for (let i = 0; i <= data.length - 1; i++){
              if (data[i].name === "venuscohort"){
                continue;
              }
              else {
                main.innerHTML += 
                `
                <div class="sites">
                <a href="https://${data[i].name}.venuscohort.com" class="links">${data[i].name}.venuscohort.com</a>
                </div
                `
              }
            }
         });
