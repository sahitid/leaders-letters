import { getLetter } from '../../lib/LettersData';

export async function getServerSideProps(ctx) {
  return {
    props: { letter: getLetter(ctx.params.slug) }
  }
}

export default function Letter({ letter }) {
  console.log(letter);

  return (
    <div className="dark:text-white dark:bg-black p-5">
      <div className="bg-blue-100 p-5 rounded-lg mb-5">
        <p className="text-sm font-medium bg-white border-2 text-sm font-medium border-black inline-block px-2 py-1 rounded-md">{letter.date}</p>
        <h1 className="text-3xl font-bold mt-2">{letter.title}</h1>
        <div className="flex items-center mt-1">
        <img src={letter.authorImage} alt="Author Image" className="h-8 w-8 rounded-full inline-block mr-2" />
          <h2 className="text-xl font-semibold">{letter.author}</h2>
        </div>
      </div>
      
      {letter.image && (
        <img src={letter.image} alt="Letter Image" className="w-full rounded-xl border-2 border-black mb-5" />
      )}

      <div className="prose prose-lg dark:prose-invert">
        <p>{letter.content}</p>
      </div>
    </div>
  )
}
