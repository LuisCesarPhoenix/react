import Swal from 'sweetalert2'
// Importa a biblioteca SweetAlert2 para exibir alertas bonitos e customizáveis.

export const warning = () => {

    Swal.fire({
      title: "React Alert",
      text: "Os componentes em React podem ser funcionais ou baseados em classes.",
      icon: "warning"
    });
  };