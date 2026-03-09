import Swal from 'sweetalert2'
// Importa a biblioteca SweetAlert2 para exibir alertas bonitos e customizáveis.

export const error = () => {
    
    Swal.fire({
      title: "React Alert",
      text: "O React utiliza um DOM virtual para melhorar o desempenho das atualizações na interface.",
      icon: "error"
    });
  };