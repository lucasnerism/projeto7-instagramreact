import React from "react";

export default function Usuario() {
  const [user, setUser] = React.useState("lucasnerism");
  const [img, setImg] = React.useState("./assets/img/kayds.png");


  return (
    <div class="usuario">
      <img data-test="profile-image" src={img} alt="imagem de perfil" onClick={() => {
        const novaimagem = prompt("Qual a nova imagem que você deseja utilizar?"); if (novaimagem != "" && novaimagem != undefined && novaimagem != null) setImg(novaimagem);
      }} />
      <div class="texto">
        <span>
          <strong data-test="name">{user}</strong>
          <ion-icon data-test="edit-name" onClick={() => {
            const novoNome = prompt("Qual nome você deseja utilizar?"); if (novoNome != "" && novoNome != undefined && novoNome != null) setUser(novoNome);
          }} name="pencil"></ion-icon>
        </span>
      </div>
    </div>
  );
}
