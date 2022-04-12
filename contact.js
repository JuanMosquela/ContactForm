

    const expresiones = {
        usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        password: /^.{4,16}$/, // 4 a 12 digitos.

        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{7,14}$/ // 7 a 14 numeros.
    }
    
    const campos = {
        usuario: false,
        nombre: false,
        password: false,
        correo: false,
        telefono: false
    }

    const form = document.querySelector('.formulario');
    const inputs = document.querySelectorAll('.formulario input');
    
    inputs.forEach(el => {
        el.addEventListener('keyup', (e)=>{
            

            if(e.target.name === 'nombre'){
                validarFomulario(expresiones.nombre, e.target, 'nombre')                
            }

            if(e.target.name === 'password'){
                validarFomulario(expresiones.password, e.target, 'password');
                validarPassword2()                
            }

            if(e.target.name === 'password2'){
                validarPassword2()
            }

               
            if(e.target.name === 'email'){
                validarFomulario(expresiones.correo, e.target, 'email')                
            }

            if(e.target.name === 'telefono'){
                validarFomulario(expresiones.telefono, e.target, 'telefono')               
            }


            function validarFomulario(expresion, input, campo){
                if(expresion.test(input.value)){
                    document.getElementById(`grupo-${campo}`).classList.remove('error');
                    document.getElementById(`error-message-${campo}`).classList.remove('active');
                    document.getElementById(`grupo-${campo}`).classList.add('correcto');
                    campos[campo] = true
                    
                }else{
                    document.getElementById(`grupo-${campo}`).classList.remove('correcto');
                    document.getElementById(`error-message-${campo}`).classList.add('active'); 
                    document.getElementById(`grupo-${campo}`).classList.add('error');
                    campos[campo] = false
                }
            }

            function validarPassword2(){
                const password = document.getElementById('password');
                const password2 = document.getElementById('password2');

                if(password.value !== password2.value){
                    document.getElementById(`grupo-password2`).classList.remove('correcto');
                    document.getElementById(`error-message-password2`).classList.add('active'); 
                    document.getElementById(`grupo-password2`).classList.add('error');
                    campos['password'] = false                
                }

                else{
                    document.getElementById(`grupo-password2`).classList.remove('error');
                    document.getElementById(`error-message-password2`).classList.remove('active');
                    document.getElementById(`grupo-password2`).classList.add('correcto');
                    campos['password'] = true
                }
            }
        })
    })




    form.addEventListener('submit', (e) => {
        // e.preventDefault();

        if(campos.nombre && campos.password && campos.email && campos.telefono){
            document.querySelector('.formulario-success').classList.add('active');
            document.getElementById('formulario-mensaje').classList.remove('active');
            form.reset();
            
            setTimeout(()=>{
                document.querySelector('.formulario-success').classList.remove('active');
                


            }, 3000)

            document.querySelectorAll('.formulario-grupo').forEach(group => {
               group.classList.remove('correcto')
            })


        } else{
            document.getElementById('formulario-mensaje').classList.add('active')

        }

        
        
    })


   

    




   


















