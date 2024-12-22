import Link from 'next/link'

const NotFound = () => {
    return(
        <div className ='h-screen flex flex-col justify-center items-center bg-slate-50 text-gry-900'>
            <h1 className ='text-8xl fontbold'>404</h1>
            <p className = 'text-4xl font-medium'>page not found</p>
            <Link href="/" className='mt-4 text-xl text-blue-600 hove:underline'>Go Back Page</Link>
        </div>
    )
}

export default NotFound;