import Swal from 'sweetalert2'
// Importa a biblioteca SweetAlert2 para exibir alertas bonitos e customizáveis.

export const carregar = async () => {
  // Função assíncrona responsável por abrir o seletor de arquivos
  // e exibir a imagem carregada pelo usuário.

  const { value: file } = await Swal.fire({
    title: "Select image",
    input: "file",
    inputAttributes: {
      accept: "image/*",
      "aria-label": "Upload your profile picture"
    }
  });

  // Se o usuário selecionou um arquivo
  if (file) {
    const reader = new FileReader();
    // FileReader permite ler arquivos do computador do usuário.

    reader.onload = (e) => {
      // Executa quando a leitura do arquivo termina.

      Swal.fire({
        title: "Your uploaded picture",
        imageUrl: e.target?.result as string,
        imageAlt: "The uploaded picture"
      });
    };

    reader.readAsDataURL(file);
    // Converte o arquivo em Base64 para poder exibir a imagem.
  }
};
