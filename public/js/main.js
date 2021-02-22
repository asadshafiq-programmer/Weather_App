const cityName= document.getElementById('cityName');
const submitbtn = document.getElementById('submitbtn');
const city_name = document.getElementById('city_name');
const temp_real = document.getElementById('temp_real');
const temp_status = document.getElementById('temp_status');
const data_hide= document.querySelector('.middle_layer');

const getinfo= async(event)=>{
    event.preventDefault();
 
   //let url = `http://api.openweathermap.org/data/2.5/weather?q=Karachi&appid=bc79f4c4a3af2e98d6b0dac1dc6e751c`;
   let cityval = cityName.value; 
   if(cityval ===""){
    city_name.innerText="Please Enter the city name first..";
   // data_hide.classList.add('data_hide');
    }
    else{
        try{
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=b14425a6554d189a2d7dc18a8e7d7263`;
        
        const response = await fetch(url);
       // console.log(response);
       const data = await response.json();
       console.log(data);
       const arrdata = [data];
       city_name.innerText= `${arrdata[0].name} , ${arrdata[0].sys.country}`;
       temp_real.innerText = arrdata[0].main.temp;
       //temp_status.innerText = arrdata[0].weather[0].main;
       const tempmood = arrdata[0].weather[0].main;
       if(tempmood == "Clear"){
           temp_status.innerHTML = 
           "<i class='fas fa-sun' style='color: #eccc68;'></i>";
       }
      else if(tempmood == "Clouds"){
        temp_status.innerHTML = 
        "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
    }
    else if(tempmood == "Rain"){
        temp_status.innerHTML = 
        "<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>";
    }
    else{
        temp_status.innerHTML = 
        "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
    }
    data_hide.classList.add('data_hide');
        }
        catch{
            city_name.innerText=`name invalid`;
           // data_hide.classList.r('data_hide');
        }
    }

}
submitbtn.addEventListener('click',getinfo);