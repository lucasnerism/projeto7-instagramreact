import Sugestao from "./Sugestao";

const sugest = [
  { nome: "bad.vibes.memes", imagem: "./assets/img/bad.vibes.memes.svg" },
  { nome: "chibidart", imagem: "./assets/img/chibirdart.svg" },
  { nome: "razoesparaacreditar", imagem: "./assets/img/razoesparaacreditar.svg" },
  { nome: "adorable_animals", imagem: "./assets/img/adorable_animals.svg" },
  { nome: "smallcutecats", imagem: "./assets/img/smallcutecats.svg" }
];

export default function Sugestoes() {
  return (
    <div class="sugestoes">
      <div class="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>
      {sugest.map(item => (<Sugestao nome={item.nome} imagem={item.imagem} />))}
    </div>
  );
}