'use client'

import {selectMessage} from '@/features/messageSlice';
import {useAppSelector} from '@/hooks/useRTK';
import {usePathname} from 'next/navigation';
import {useEffect,useRef} from 'react';
import MessageItem from '../MessageItem/MessageItem';

const MessageArea = () => {
    const pathname = usePathname();
    const messages = useAppSelector(selectMessage);
    const data = messages.onyourdata;
    const scrollBottomRef = useRef<HTMLDivElement>(null);

    console.log("Data before rendering:", data);

    useEffect(() => {
        console.log("Data in useEffect:", data); // データ確認用ログ
        scrollBottomRef?.current?.scrollIntoView({behavior:'smooth'})
    },[data])

    console.log("Data before rendering:", data); // 描画直前のデータ確認用ログ

    return (
        <div className="w-full overflow-auto pt-10">
            {
                data.length !== 0 && data.map((d, index) => {
                    // console.logはここに移動
                    console.log(`Rendering MessageItem at index ${index}:`, d);
                    
                    return (
                        <MessageItem
                            isMan={d.isMan}
                            message={d.message}
                            key={index}
                        />
                    );
                })
            }
            <div ref={scrollBottomRef} />
        </div>
    );
    // return(
    //     <div className = 'w-full overflow-auto pt-10'>
    //         {
    //             data.length !==0 && data.map((d, index) => (
    //                 console.log(`Rendering MessageItem at index ${index}:`, d);
    //                 return (
    //                     <MessageItem
    //                         isMan={d.isMan}
    //                         message={d.message}
    //                         key={index}
    //                     />
    //                 );
    //             ))
    //         }
    //         <div ref={scrollBottomRef}/>
    //     </div>
    // )
}

export default MessageArea;