import Folder from "./Folder";

export default function Drawer(){
  return(
    <div className="drawer">
      <Folder topPosition={1} />
      <Folder topPosition={2} />
      <Folder topPosition={3} />
      <Folder topPosition={4} />
      <Folder topPosition={5} />
      <Folder topPosition={6} />
    </div>
  )
}