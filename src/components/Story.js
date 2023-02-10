export default function Story(props) {
  return (
    <div className="story" >
      <div className="imagem">
        <img src={props.imagem} alt={props.nome} />
      </div>
      <div className="usuario">
        {props.nome}
      </div>
    </div >

  );
}