
export default function Folder(props:any){
  let {topPosition} = props;
  return(
    <div 
      className={'folder'}
      style={{top:(topPosition*8)+'%'}}
    >
      <div className="folder-cover"></div>
      <div className="paper"></div>
    </div>
  )
}