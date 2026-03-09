import Swal from 'sweetalert2'
// Importa a biblioteca SweetAlert2 para exibir alertas bonitos e customizáveis.

export const success = () => {
    
    Swal.fire({
      title: "React Alert",
      text: "O React é uma biblioteca JavaScript para construir interfaces de usuário.",
      icon: "success"
    });
  };