import {motion} from 'framer-motion';
import {FaRobot} from 'react-icons/fa';
import {GrUserManager} from 'react-icons/gr';

const MessageItem = ({message,isMan}: {message: string, isMan:boolean})=>{
    const characters: string[] = message.split('');
    console.log("Characters in MessageItem:", characters); // 文字列の確認用ログ

    return isMan ? (
        <div className='flex mb-4 justify-end'>
            <div className='block max-w-sm p-6  bg-white border border-gray-200 rounded-lg shadouw hober:bg-gray-100 font-normal text-gray-700'>
                {
                    characters.map((c,index)=>(
                        <motion.span
                            key={index}
                            initial={{opacity:0}}
                            animate={{opacity: 1}}
                            transition={{duration:1,delay:index*0.03}}
                        >
                            {c}
                        </motion.span>
                    ))   
                }
            </div>
            <div className = 'flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full ml-4'>
                <div className = 'dont-medium text-gray-600'>
                    <GrUserManager/>
                </div>
            </div>
        </div>
    ): (
        <div className='flex mb-4'>
            <div className = 'flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full ml-4'>
                <div className = 'font-medium text-gray-600'>
                    <FaRobot/>
                </div>
            </div>
            <div className='block max-w-sm p-6  bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 font-normal text-gray-700'>
                {
                    characters.map((c,index)=>(
                        <motion.span
                            key={index}
                            initial={{opacity:0}}
                            animate={{opacity: 1}}
                            transition={{duration:1,delay:index*0.03}}
                        >
                            {c}
                        </motion.span>
                    ))   
                }
            </div>
        </div>
    )
}

export default MessageItem;