 
const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post("http://localhost:5000/api/contacts", {
            name: formData.name,
            email: formData.email,
            message: formData.message,
        });
        alert("menssagem cadastrada com sucesso!!" + `nome: ${formData.name} email: ${formData.email}`)
        window.location.href = "/"
    } catch (error) {
        if (error.response) {
            alert("Erro ao cadastrar usuário")
        } else {
            alert("erro ao conectar ao servidor")
        }
    }
};
