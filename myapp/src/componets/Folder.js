import '../style/Folder.css';
import folder from '../pictures/folder.png';
function Folder(){
    return (
        <div className='folderDiv'>
            <img src={folder} className='folder' alt='folder'/>
            <p>Linux</p>
        </div>

    )
}
export default Folder;