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
    <div className="sugestoes">
      <div className="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>
      {sugest.map((item, index) => (<Sugestao key={index} nome={item.nome} imagem={item.imagem} />))}
    </div>
  );
}