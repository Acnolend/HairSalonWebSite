fetch('json/date_management_userinf.json')
    .then(response => response.json())
    .then(data => {
    
    const name = data.user_inf.name; 
    const pfp = data.user_inf.pfp;

    const nombre = document.getElementById("username");
    const profile_pict = document.getElementById("solid_user")

    nombre.innerText = name;
    profile_pict.src = pfp;
   

})
.catch(error => console.error('Error al cargar el JSON:', error));