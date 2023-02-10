export default function Story(props) {
  return (
    <div classname="story" >
      <div classname="imagem">
        <img src={props.imagem} alt={props.nome} />
      </div>
      <div classname="usuario">
        {props.nome}
      </div>
    </div >

  );
}