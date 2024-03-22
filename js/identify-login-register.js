let option = sessionStorage.getItem('registerOrLogin');
fetch("../json/authentication.json")
    .then(response => response.json())
    .then(data => {
        const form = data[option];
        fieldset.innerHTML = "";

        form.fields.forEach(field => {
            const input = document.createElement("input");
            input.setAttribute("type", field.type);
            input.setAttribute("name", field.name);
            input.setAttribute("placeholder", field.placeholder);
            if (field.type === "date") {
                input.setAttribute("id", "birthday");
            }
            input.setAttribute("required", "required");
            input.classList.add(field.class);
            fieldset.appendChild(input);
        });

        const submitBtn = document.createElement("input");
        submitBtn.setAttribute("type", "submit");
        submitBtn.setAttribute("value", form.submitText);
        submitBtn.setAttribute("id", "confirm");
        submitBtn.classList.add(form.class);
        fieldset.appendChild(submitBtn);

        if (option === "registrarse") {
            const script = document.createElement("script");
            script.src = "../js/verification/date-verify.js";
            document.body.appendChild(script);
            const script2 = document.createElement("script");
            script2.src = "../js/verification/username-verify.js";
            document.body.appendChild(script2);
            const script4 = document.createElement("script");
            script4.src = "../js/verification/password-verify.js";
            document.body.appendChild(script4);
        }

        const script3 = document.createElement("script");
        script3.src = "../js/verification/email-verify.js";
        document.body.appendChild(script3);

    })
    .catch(error => {
        console.error('Error fetching JSON:', error);
    });
