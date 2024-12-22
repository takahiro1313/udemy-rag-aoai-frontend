import {IoEarth} from 'react-icons/io5';
import NavList from '../NavList/NavList';

const SideMenu = () => {
    return(
        <div className='w-56 pt-8 bg-gray-900 text-white'>
            <h1 className='flex justify-center px-4 text-2xl font-bold'>
                <IoEarth className='size-10' />
            </h1>
            <NavList />
        </div>
    )
}

export default SideMenu;