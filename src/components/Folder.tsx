import { useState } from "react";

export default function Folder(props:any){
  let {topPosition} = props;
  let [folderOn,setFolderOn] = useState(false);
  const folderOpenFn = ()=>{
    setFolderOn(true)
  }
  const folderCloseFn = ()=>{
    setFolderOn(false)
  }
  return(
    <div 
      className={folderOn?'folder folder-on':'folder'}
      style={{top:(topPosition*8)+'%'}}
      onClick={folderOpenFn}
      onMouseLeave={folderCloseFn}
    >
      <div className="folder-cover"></div>
      <div className="paper"></div>
    </div>
  )
}