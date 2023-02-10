import React from "react";

export default function Post(props) {
  const [likes, setLikes] = React.useState(Math.floor(Math.random() * 100));
  const [salvo, setSalvo] = React.useState("bookmark-outline");
  const [classe, setClasse] = React.useState("");
  const [coracao, setCoracao] = React.useState("heart-outline");
  const [efeito, setEfeito] = React.useState("escondido");

  if (props.video != undefined) {
    return (
      <div class="post" data-test="post">
        <div class="topo">
          <div class="usuario">
            <img src={props.imagemusuario} alt={props.nomeusuario} />
            {props.nomeusuario}
          </div>
          <div class="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>

        <div class="conteudo">
          <video data-test="post-imageDouble" onDoubleClick={() => {
            if (coracao === "heart-outline") {
              setCoracao("heart");
              setClasse("vermelho");
              setLikes(likes + 1);
              setEfeito("like");
              setTimeout(() => {
                setEfeito("escondido");
              }, 500);
            }
          }} autoPlay muted>
            <source src={props.video} type="video/mp4" />
            <source src={props.videoogv} type="video/ogv" />
            "Seu navegador não suporta vídeos."
          </video>
          <ion-icon name="heart" class={efeito}></ion-icon>
        </div>

        <div class="fundo">
          <div class="acoes">
            <div>
              <ion-icon data-test="like-post" class={classe} name={coracao} onClick={() => {
                if (coracao === "heart-outline") {
                  setCoracao("heart");
                  setClasse("vermelho");
                  setLikes(likes + 1);
                } else {
                  setCoracao("heart-outline");
                  setClasse("");
                  setLikes(likes - 1);
                }
              }}></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
              <ion-icon name={salvo} onClick={() => {
                if (salvo === "bookmark-outline") setSalvo("bookmark");
                else setSalvo("bookmark-outline");
              }}></ion-icon>
            </div>
          </div>

          <div class="curtidas">
            <img src="assets/img/kayds.png" alt="kayds" />
            <div class="texto" >
              Curtido por <strong>kayds</strong> e <strong data-test="likes-number" >outras {likes} pessoas</strong>
            </div>
          </div>
        </div>

      </div>
    );
  } else return (
    <div class="post" data-test="post">
      <div class="topo">
        <div class="usuario">
          <img src={props.imagemusuario} alt={props.nomeusuario} />
          {props.nomeusuario}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img data-test="post-image" onDoubleClick={() => {
          if (coracao === "heart-outline") {
            setCoracao("heart");
            setClasse("vermelho");
            setLikes(likes + 1);
            setEfeito("like");
            setTimeout(() => {
              setEfeito("escondido");
            }, 500);
          }
        }} src={props.imagem} alt={props.altimagem} />
        <ion-icon name="heart" class={efeito}></ion-icon>
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon data-test="like-post" class={classe} name={coracao} onClick={() => {
              if (coracao === "heart-outline") {
                setCoracao("heart");
                setClasse("vermelho");
                setLikes(likes + 1);
              } else {
                setCoracao("heart-outline");
                setClasse("");
                setLikes(likes - 1);
              }
            }}></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon data-test="save-post" name={salvo} onClick={() => {
              if (salvo === "bookmark-outline") setSalvo("bookmark");
              else setSalvo("bookmark-outline");
            }}></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src="assets/img/kayds.png" alt="kayds" />
          <div class="texto">
            Curtido por <strong>kayds</strong> e <strong data-test="likes-number">outras {likes} pessoas</strong>
          </div>
        </div>
      </div>

    </div>
  );
};;