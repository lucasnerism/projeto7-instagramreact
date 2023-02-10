import Sugestoes from "./Sugestoes";
import Usuario from "./Usuario";

export default function SideBar() {
  return (
    <div classname="sidebar">
      <Usuario nome="lucasnerism" imagem="./assets/img/kayds.png" />
      <Sugestoes />
      <div classname="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
        Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>

      <div classname="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
    </div>
  );
}