const loadCountry = ()=>{
    const url = 'https://restcountries.com/v2/all'
    fetch(url)
    .then(res => res.json())
    .then (data => displayCountry(data))
}

const displayCountry = (countrys) =>{
    console.log(countrys);

const allCountry = countrys.map(country => getCOunty(country))
console.log(allCountry[0]);
const div = document.getElementById('container');
div.innerHTML = allCountry.join('')

}

const getCOunty =(country)=>{
 return`
 
 <div class ="name">

<h2> ${country.name} </h2>
 

 <img src="${country.flag}">
 </div>
 
 
 `
}

loadCountry()