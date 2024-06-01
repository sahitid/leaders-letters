import HeadObject from '../components/head';
import Nav from '../components/nav';
import { getLetters } from '../lib/LettersData';

export async function getStaticProps() {
  return {
    props: { letters: getLetters() }
  }
}

export default function Home({ letters }) {
  console.log(letters);
  const [firstLetter, ...otherLetters] = letters; // Destructure the first letter separately

  return (
    <div className="dark:text-white dark:bg-black">
      <HeadObject>
        {/* You can put extra tags in here, or leave it blank */}
      </HeadObject>
      <Nav />
      <div className='flex items-center justify-center gap-5 px-20 py-10 border-b-2 border-black mb-20'>
        <img className='w-10' src='https://cloud-gzo47uw7p-hack-club-bot.vercel.app/0mail-icon.svg' alt='Mail Icon'></img>
        <div>
          <h1 className='text-5xl font-bold'>Letters From Leaders</h1>
          <h2 className='text-xl font-semibold'>... to Leaders</h2>
        </div>
        <a href='https://hackclub.slack.com/team/U03RU99SGKA' target='_blank'>
          <button className='bg-blue-500 border-2 border-black font-semibold text-white w-32 rounded-lg px-2 py-1 text-sm'>Message @sahiti on Slack to Submit Your Own!</button>
        </a>
      </div>

      {firstLetter && (
        <a href={`/letter/${firstLetter.slug}`}>
          <div className='flex flex-row items-center justify-center gap-4 mb-10'>
            <div className='relative w-96 h-64'>
              <img className='rounded-xl border-2 border-black' src='https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg' alt='Letter Thumbnail' />
              <p className='px-2 py-1 bg-white border-2 border-black text-sm font-medium absolute top-2 left-2 rounded-md'>{firstLetter.date}</p>
            </div>
            <div className='flex flex-col max-w-md'>
              <h3 className='font-semibold text-lg'>{firstLetter.title}</h3>
              <p className='text-gray-500'>{firstLetter.description.substring(0, 100)}... <span className="font-bold underline">read more</span></p>
            </div>
          </div>
        </a>
      )}

      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mx-10'>
        {otherLetters.reverse().map((l, i) => (
          <a key={i} href={`/letter/${l.slug}`}>
            <div className='flex flex-col p-5 rounded-lg border-2 border-black items-center justify-center gap-5 h-48' style={{backgroundColor:l.color}}>
              <p className='px-2 py-1 bg-white border-2 border-black text-sm font-medium rounded-md'>{l.date}</p>
              <h3 className='font-semibold text-center'>{l.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
