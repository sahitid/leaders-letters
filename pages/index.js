import HeadObject from '../components/head'
import Nav from '../components/nav';

export default function Home() {
  return (
    <div className="dark:text-white dark:bg-black">
      <HeadObject>
        {/* You can put extra tags in here, or leave it blank */}
      </HeadObject>
      <Nav />
      <div className='flex items-center justify-center gap-5 px-20 py-10 border-b-2 border-black mb-20'>
        <div>
          <h1 className='text-5xl font-bold'>Letters From Leaders</h1>
          <h2 className='text-xl font-semibold'>... to Leaders</h2>
        </div>
        <button className='bg-blue-500 border-2 border-black font-semibold text-white w-32 rounded-lg px-2 py-1 text-sm'>Message @sahiti on Slack to Submit Your Own!</button>
      </div>

      <div className='flex flex-row items-center justify-center gap-4'>
        <div className='relative w-96 h-64'>
          <img className='rounded-xl border-2 border-black' src='https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg' />
          <p className='px-2 py-1 bg-white border-2 border-black text-sm font-medium absolute top-2 left-2 rounded-md'>date</p>

        </div>

        <div className='flex flex-col'>
          <h3 className='font-semibold text-lg'>title</h3>
          <p>first 100 chars</p>
        </div>


      </div>

      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mx-10'>
        <div className='flex flex-col bg-purple-300 p-5 rounded-lg border-2 border-black items-center justify-center gap-2 h-48'>
          <p className='px-2 py-1 bg-white border-2 border-black text-sm font-medium rounded-md'>date</p>
          <h3 className='font-semibold'>title of blog</h3>

        </div>

        <div className='flex flex-col bg-pink-300 p-5 rounded-lg border-2 border-black items-center justify-center gap-2 h-48'>
          <p className='px-2 py-1 bg-white border-2 border-black text-sm font-medium rounded-md'>date</p>
          <h3 className='font-semibold'>title of blog</h3>

        </div>

        <div className='flex flex-col bg-green-300 p-5 rounded-lg border-2 border-black items-center justify-center gap-2 h-48'>
          <p className='px-2 py-1 bg-white border-2 border-black text-sm font-medium rounded-md'>date</p>
          <h3 className='font-semibold'>title of blog</h3>

        </div>
  

      </div>


    </div>
  )
}
