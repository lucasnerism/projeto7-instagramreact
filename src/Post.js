let likes = 10;

export default function Post(props) {
  likes = Math.floor(Math.random() * 100);
  if (props.video != undefined) {
    return (
      <div class="post">
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
          <video autoPlay muted>
            <source src={props.video} type="video/mp4" />
            <source src={props.videoogv} type="video/ogv" />
            "Seu navegador não suporta vídeos."
          </video>
        </div>

        <div class="fundo">
          <div class="acoes">
            <div>
              <ion-icon name="heart-outline"></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
              <ion-icon name="bookmark-outline"></ion-icon>
            </div>
          </div>

          <div class="curtidas">
            <img src="assets/img/kayds.png" alt="kayds" />
            <div class="texto">
              Curtido por <strong>kayds</strong> e <strong>outras {likes} pessoas</strong>
            </div>
          </div>
        </div>
      </div>
    );
  } else return (
    <div class="post">
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
        <img src={props.imagem} alt={props.altimagem} />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name="bookmark-outline"></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src="assets/img/kayds.png" alt="kayds" />
          <div class="texto">
            Curtido por <strong>kayds</strong> e <strong>outras {likes} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
};;