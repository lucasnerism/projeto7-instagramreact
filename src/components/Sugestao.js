export default function Sugestao(props) {
  return (
    <div classname="sugestao">
      <div classname="usuario">
        <img
          src={props.imagem}
          alt={props.nome}
        />
        <div classname="texto">
          <div classname="nome">{props.nome}</div>
          <div classname="razao">Segue você</div>
        </div>
      </div>

      <div classname="seguir">Seguir</div>
    </div>
  );
}