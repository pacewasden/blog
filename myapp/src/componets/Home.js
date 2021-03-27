import background from '../pictures/background.png';
import folder from '../pictures/folder.png';
import '../style/Folder.css';
function Home(){
    return (
        <div>
            <img src={background} className='background' alt='background'/>
            <img src={folder} className='folder' alt='folder'/>
        </div>

    )
}
export default Home;