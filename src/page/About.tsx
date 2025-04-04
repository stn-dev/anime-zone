import Container from '../components/Container'

function About() {
  return (
    <Container tag='section' className='min-h-screen pt-[80px] xl:pt-[100px] pb-[50px] flex flex-col justify-center items-center gap-10'>
      <div className='flex flex-col items-center justify-center gap-5' >
        <h1 className='text-3xl font-bold text-neutre text-center ' > What is the Purpose of This Website? </h1>
        <p> This website is designed for anime fans who want quick and reliable information about their favorite series, characters, and more. Whether you're looking for details about a specific anime, exploring character backgrounds, or discovering new series, this platform provides a straightforward way to access essential anime-related data.
        </p>
        <p> Unlike streaming services, this site does not offer anime for viewing. Instead, it serves as an informational hub where you can explore character profiles, plot summaries, genres, and other key details—all in one place.
        </p>
        <p> Whether you're a long-time anime enthusiast or just getting started, this site makes it easy to find the information you need without unnecessary clutter. </p>
      </div>

      <div className='flex flex-col items-center justify-center gap-5' >
        <h2 className='text-3xl font-semibold text-center text-neutre ' > Why I Created This App </h2>
        <p> I created this app simply because I love anime. As an anime fan, I often found myself searching for information about different series and characters, but it wasn&apos;t always easy to find everything in one place. That&apos;s why I built this platform—to make it easier for anime enthusiasts like me to quickly access essential details without the hassle of browsing multiple sources. </p>
        <p> This app is my way of sharing my passion for anime with others. Whether you're looking for character backgrounds, anime summaries, or just exploring new series, I hope this platform helps you find what you need effortlessly. </p>
      </div>

      <div className='flex flex-col items-center justify-center gap-5' >
        <h2 className='text-3xl font-semibold text-center'> How it work ? </h2>
        <p> Using this app is simple! Just type a name into the search bar, and it will instantly return matching anime and characters. Whether you're looking for a specific series or character, the search feature helps you find relevant information quickly.
        </p>
        <p> You can also explore freely by browsing the Anime and Character sections, where you'll find a collection of titles and personalities to discover. No need to search—just scroll and explore! </p>
      </div>
      <h3 className=' text-4xl md:text-6xl font-bold text-center text-contrasted' > Enjoy your journey through the world of anime!</h3>
    </Container>
  )
}

export default About