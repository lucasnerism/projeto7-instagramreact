import React from "react";

export default function Usuario(props) {
  const [user, setUser] = React.useState(props.nome);
  const [img, setImg] = React.useState(props.imagem);

  return (
    <div classname="usuario">
      <img data-test="profile-image" src={img} alt="imagem de perfil" onClick={() => { alterarDadosUsuario("imagem"); }} />
      <div classname="texto">
        <span>
          <strong data-test="name">{user}</strong>
          <ion-icon data-test="edit-name" onClick={() => { alterarDadosUsuario("nome"); }} name="pencil"></ion-icon>
        </span>
      </div>
    </div>
  );

  function alterarDadosUsuario(tipo) {
    const novo = prompt(`Qual ${tipo} você deseja utilizar`).trim();
    if (novo.length !== 0) {
      if (tipo === "nome") setUser(novo);
      else setImg(novo);
    }
  }
}
