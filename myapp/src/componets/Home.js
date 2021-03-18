import background from '../pictures/background.png';
import Folder from './Folder.js';
function Home(){
    return (
        <div>
            <img src={background} className='background' alt='background'/>
            <div>
                <Folder/>
            </div>
        </div>

    )
}
export default Home;