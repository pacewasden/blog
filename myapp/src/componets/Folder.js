import folder from '../pictures/folder.png';
import '../style/Folder.css';
function Folder(){
    return (
        <div>
            <img src={folder} className='folder' alt='folder'/>
        </div>

    )
}
export default Folder;