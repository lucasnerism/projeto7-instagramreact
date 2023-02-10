import Post from "./Post";

const postagem = [{ nomeusuario: "lucasnerism", imagemusuario: "./assets/img/kayds.png", imagem: "./assets/img/piratinha.jpeg", altimagem: "tatuagem do x de one piece" }, { nomeusuario: "lucasnerism", imagemusuario: "./assets/img/kayds.png", imagem: "./assets/img/spoon.jpeg", altimagem: "cosplay do Spoon Killer" }, { nomeusuario: "lucasnerism", imagemusuario: "./assets/img/kayds.png", imagem: "./assets/img/pic.jpg", altimagem: "um lindo casal" }, { nomeusuario: "lucasnerism", imagemusuario: "./assets/img/kayds.png", video: "./assets/img/takeonme.mp4", videoogv: "./assets/img/takeonme.ogv" }];

export default function Posts() {
  return (
    <div className="posts">
      {postagem.map((item, index) => (<Post key={index} nomeusuario={item.nomeusuario} imagemusuario={item.imagemusuario} imagem={item.imagem} altimagem={item.altimagem} video={item.video} videoogv={item.videoogv} />))}

    </div>
  );
}