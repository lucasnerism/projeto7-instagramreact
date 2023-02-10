import Story from "./Story";

const stories = [
  { nome: "9gag", imagem: "./assets/img/9gag.svg" },
  { nome: "meowed", imagem: "./assets/img/meowed.svg" },
  { nome: "barked", imagem: "./assets/img/barked.svg" },
  { nome: "nathanwpylestrangeplanet", imagem: "./assets/img/nathanwpylestrangeplanet.svg" },
  { nome: "wawawicomics", imagem: "./assets/img/wawawicomics.svg" },
  { nome: "respondeai", imagem: "./assets/img/respondeai.svg" },
  { nome: "filomoderna", imagem: "./assets/img/filomoderna.svg" },
  { nome: "memeriagourmet", imagem: "./assets/img/memeriagourmet.svg" }];

export default function Stories() {
  return (
    <div classname="stories">
      {stories.map(item => (<Story nome={item.nome} imagem={item.imagem} />))}

      <div classname="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}

