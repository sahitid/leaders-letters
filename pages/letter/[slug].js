import { getLetter } from '../../lib/LettersData';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';

export async function getServerSideProps(ctx) {
  return {
    props: { letter: getLetter(ctx.params.slug) }
  }
}

export default function Letter({ letter }) {
  console.log(letter);

  return (
    <div className="dark:text-white dark:bg-black">
      <div className="p-10 mb-5 border-b-2 border-black py-16" style={{backgroundColor:letter.color}}>
        <div className='flex items-center justify-between'>
          <p className="text-sm font-medium bg-white border-2 text-sm font-medium border-black inline-block px-2 py-1 rounded-md">{letter.date}</p>
          <Link href="/"><img className='w-10' src='https://cloud-gzo47uw7p-hack-club-bot.vercel.app/0mail-icon.svg' alt='Mail Icon' /></Link>
        </div>
        <h1 className="text-3xl font-bold mt-2">{letter.title}</h1>
        <div className="flex items-center mt-1">
          <img src={letter.authorImage} alt="Author Image" className="h-8 w-8 rounded-full inline-block mr-2" />
          <h2 className="text-xl font-semibold">{letter.author}</h2>
        </div>
      </div>

      {letter.image && (
        <img src={letter.image} alt="Letter Image" className="w-full rounded-xl border-2 border-black mb-5" />
      )}

      <ReactMarkdown className="prose prose-lg dark:prose-invert p-10">
        {letter.content}
      </ReactMarkdown>
    </div>
  )
}
