import react from "react";
import React from "react";

export default function Post(props) {
  const vazio = "heart-outline";
  const [likes, setLikes] = React.useState(Math.floor(Math.random() * 100));
  const [salvo, setSalvo] = React.useState("bookmark-outline");
  const [classe, setClasse] = React.useState("");
  const [coracao, setCoracao] = React.useState(vazio);
  const [efeito, setEfeito] = React.useState("escondido");


  return (
    <div className="post" data-test="post">
      <div className="topo">
        <div className="usuario">
          <img src={props.imagemusuario} alt={props.nomeusuario} />
          {props.nomeusuario}
        </div>
        <div className="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div className="conteudo">
        {(props.video !== undefined) ? <video data-test="post-image" onDoubleClick={() => {
          if (coracao === vazio) {
            handleLike();
            setEfeito("like");
            setTimeout(() => {
              setEfeito("escondido");
            }, 500);
          }
        }} autoPlay muted >
          <source src={props.video} type="video/mp4" />
          <source src={props.videoogv} type="video/ogv" />
          "Seu navegador não suporta vídeos."
        </video> :
          <img data-test="post-image" onDoubleClick={() => {
            if (coracao === vazio) {
              handleLike();
              setEfeito("like");
              setTimeout(() => {
                setEfeito("escondido");
              }, 500);
            }
          }} src={props.imagem} alt={props.altimagem} />}
        <ion-icon name="heart" class={efeito}></ion-icon>
      </div>

      <div className="fundo">
        <div className="acoes">
          <div>
            <ion-icon data-test="like-post" class={classe} name={coracao} onClick={handleLike}></ion-icon>
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

        <div className="curtidas">
          <img src="assets/img/kayds.png" alt="kayds" />
          <div className="texto" >
            Curtido por <strong>kayds</strong> e <strong data-test="likes-number" >outras {likes} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );


  function handleLike() {
    if (coracao === vazio) {
      setCoracao("heart");
      setClasse("vermelho");
      setLikes(likes + 1);
    } else {
      setCoracao(vazio);
      setClasse("");
      setLikes(likes - 1);
    }
  }
}