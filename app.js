const singUp =e=>{
    const dataForm={
        email : document.getElementById('email').value,
        fullName : document.getElementById('name').value
    }
    localStorage.setItem('formData',JSON.stringify(dataForm));
    console.log(localStorage.getItem('formData'));
    e.preventDefault();
}
