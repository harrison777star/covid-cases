const btn = document.querySelector("button").addEventListener("click", () =>{
 
 fetch("https://corona.lmao.ninja/v2/countries/Nigeria")
 .then(response => {
   return response.json();
 })
 .then(data => {
   
   const results = document.querySelector("#results");
   
   const topic = 
   `<h4 class="title">Covid Cases</h4>
   <h5>Country : ${data.country}</h5>
   <h5>Cases : ${data.cases}</h5>
   <h5>Deaths : ${data.deaths}</h5>`;
   
   
   results.innerHTML = topic;
 })
 
})