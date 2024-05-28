
import { getLetter } from '../../lib/LettersData';

export async function getServerSideProps(ctx) {
  return {
    props: { letter: getLetter(ctx.params.slug) }
  }
}

export default function Letter({ letter }) {
  console.log(letter);

  return (
    <div className="dark:text-white dark:bg-black">
      <div>
        <h1>insert title</h1>
        <h2>insert author</h2>
      </div>
      
      <p>
        story here.
      </p>


    </div>
  )
}
