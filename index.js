const apikey="b75de07be280b1458aafa17574674da1";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";


 const city1 =document.querySelector(".container input");
 const btn =document.querySelector(".container button");

async function checkweather(city){
    const response =await fetch(apiUrl + city+`&appid=${apikey}`);
    var data=await response.json();
   console.log(data);
  let name =data.name;
  if(name=undefined){

      document.querySelector(".city").innerHTML="DON'T MATCH";
  }else{
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".tem").innerHTML=Math.round(data.main.temp)+" C";
    document.querySelector(".humality").innerHTML=data.main.humidity+ "%";
    document.querySelector(".wind").innerHTML=data.wind.speed +"km/h";
   
    let a =Math.round(data.main.temp);
    if(a<16){
        document.getElementById("image1").style.background="url('https://th.bing.com/th/id/OIP.wOKfrMrC0bOtrOb5RrrDtAHaEO?w=287&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7')"
    }else if (a>10 &&a<26){
        document.getElementById("image1").style.background="url('https://th.bing.com/th/id/OIP.806_nt39lV0btovu1BKT6AHaEK?w=275&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7')"
        
    }else{
        document.getElementById("image1").style.background="url('https://th.bing.com/th/id/OIP.mvjUXbudZI_km1Rak2bj-gHaE8?w=225&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7')"

    }

    }

}

btn.addEventListener("click",()=>{
    checkweather(city1.value);
})

