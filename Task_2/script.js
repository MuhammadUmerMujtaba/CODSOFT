
const URL = "https://api.unsplash.com/search/collections?page=3&query=office&client_id=1fVM1pJfMSmywB0wnhVPHwU87cMl4ZTKLPCJ3MGuIMk";

fetch(URL)
.then(response =>{
    return response.json();
})
.then(function(jsonData)
{
    console.log(jsonData)
})



