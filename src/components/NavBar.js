export default function NavBar() {
  return (
    <div classname="navbar">
      <div classname="container">
        <div classname="logo">
          <ion-icon name="logo-instagram"></ion-icon>
          <div classname="separador"></div>
          <img src="assets/img/logo.png" alt="logo" />
        </div>

        <div classname="pesquisa">
          <input type="text" placeholder="Pesquisar" />
        </div>

        <div classname="icones">
          <ion-icon name="paper-plane-outline"></ion-icon>
          <ion-icon name="compass-outline"></ion-icon>
          <ion-icon name="heart-outline"></ion-icon>
          <ion-icon name="person-outline"></ion-icon>
        </div>

        <div classname="icones-mobile">
          <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
      </div>
    </div>
  );
}