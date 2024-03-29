fetch('json/reviews.json')
    .then(response => response.json())
    .then(data => {
    
    const ids_rev = ["review0", "review1", "review2", "review3"];
    const ids_pfp = ["image0", "image1", "image2", "image3"];
    const ids_name = ["nombre0", "nombre1", "nombre2", "nombre3"];
    const star_ids = ["star_rate_rev_1", "star_rate_rev_2", "star_rate_rev_3", "star_rate_rev_4"];

    const review_size = 5; 
    const star_num = 5;

    for (i = 0; i<review_size;i++) {
        const name = data.reviews[i].name;
        const pfp = data.reviews[i].pfp;
        const review = data.reviews[i].review;
        let number_of_gstars = data.reviews[i].stars;        
        

        let stars_str =  "";
        for (j = 0; j<star_num; j++) {
                if (number_of_gstars > 0) {
                    stars_str = stars_str + "<i class='bi bi-star-fill star_gold'></i>";
                    number_of_gstars--;
                } else {
                    stars_str = stars_str +  "<i class='bi bi-star-fill star_grey'></i>"
                }
            
        const user_name = document.getElementById(ids_name[i])
        const profile_pict = document.getElementById(ids_pfp[i])
        const reviewElement = document.getElementById(ids_rev[i]);
        const star_rate = document.getElementById(star_ids[i]);

        
        user_name.innerText = name
        profile_pict.src = pfp;
        reviewElement.innerText = review;
        star_rate.innerHTML = stars_str;
        }
    }
        

    })
    .catch(error => console.error('Error al cargar el JSON:', error));