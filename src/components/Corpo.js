import Stories from "./Stories";
import Posts from "./Posts";
import SideBar from "./SideBar";

export default function Corpo() {
  return (
    <div classname="corpo">
      <div classname="esquerda">
        <Stories />
        <Posts />
      </div>
      <SideBar />
    </div>
  );
}