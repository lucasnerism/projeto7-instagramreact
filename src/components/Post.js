import React from "react";

export default function Post(props) {
  const [likes, setLikes] = React.useState(Math.floor(Math.random() * 100));
  const [salvo, setSalvo] = React.useState("bookmark-outline");
  const [classe, setclasse] = React.useState("");
  const [coracao, setCoracao] = React.useState("heart-outline");
  const [efeito, setEfeito] = React.useState("escondido");

  return (
    <div className="post" data-test="post">
      <Topo />
      <Conteudo />
      <div className="fundo">
        <div className="acoes">
          <div>
            <ion-icon data-test="like-post" class={classe} name={coracao} onClick={() => {
              if (coracao === "heart-outline") {
                setCoracao("heart");
                setclasse("vermelho");
                setLikes(likes + 1);
              } else {
                setCoracao("heart-outline");
                setclasse("");
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
        <div div className="curtidas" >
          <img src="assets/img/kayds.png" alt="kayds" />
          <div className="texto" >
            Curtido por <strong>kayds</strong> e <strong data-test="likes-number" >outras {likes.toString()} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );

  function Topo() {
    return (
      <div className="topo">
        <div className="usuario">
          <img src={props.imagemusuario} alt={props.nomeusuario} />
          {props.nomeusuario}
        </div>
        <div className="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>
    );
  }

  function Conteudo() {
    return (
      <div className="conteudo">
        {(props.video !== undefined) ? <Video /> : <Imagem />}
        <ion-icon name="heart" class={efeito}></ion-icon>
      </div>
    );
  }

  function Fundo() {
    return (
      <div className="fundo">
        <div className="acoes">
          <div>
            <ion-icon data-test="like-post" class={classe} name={coracao} onClick={() => {
              if (coracao === "heart-outline") {
                setCoracao("heart");
                setclasse("vermelho");
                setLikes(likes + 1);
              } else {
                setCoracao("heart-outline");
                setclasse("");
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
        <div div className="curtidas" >
          <img src="assets/img/kayds.png" alt="kayds" />
          <div className="texto" >
            Curtido por <strong>kayds</strong> e <strong data-test="likes-number" >outras {likes} pessoas</strong>
          </div>
        </div>
      </div>
    );
  }

  function Video() {
    return (
      <video data-test="post-image" onDoubleClick={() => {
        if (coracao === "heart-outline") {
          handleLike();
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
    );
  }

  function Imagem() {
    return (
      <img data-test="post-image" onDoubleClick={() => {
        if (coracao === "heart-outline") {
          handleLike();
          setEfeito("like");
          setTimeout(() => {
            setEfeito("escondido");
          }, 500);
        }
      }} src={props.imagem} alt={props.altimagem} />
    );
  }

  function Curtidas() {
    return (
      <div div className="curtidas" >
        <img src="assets/img/kayds.png" alt="kayds" />
        <div className="texto" >
          Curtido por <strong>kayds</strong> e <strong data-test="likes-number" >outras {likes} pessoas</strong>
        </div>
      </div>
    );
  }

  function Acoes() {
    return (
      <div className="acoes">
        <div>
          <ion-icon data-test="like-post" className={classe} name={coracao} onClick={() => {
            if (coracao === "heart-outline") {
              setCoracao("heart");
              setclasse("vermelho");
              setLikes(likes + 1);
            } else {
              setCoracao("heart-outline");
              setclasse("");
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
    );
  }

  function handleLike() {
    if (coracao === "heart-outline") {
      setCoracao("heart");
      setclasse("vermelho");
      setLikes(likes + 1);
    } else {
      setCoracao("heart-outline");
      setclasse("");
      setLikes(likes - 1);
    }
  }
}