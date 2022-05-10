import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Alexis Zuck</title>
        <meta name="description" content="my landing page" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Sacramento&display=swap" rel="stylesheet" />
      </Head>

      <header className="container mx-auto pt-4">
        <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-16">
          <img className="rounded-full" src="profile.jpg" alt="profile" width="200" height="200" />
          <div className="flex flex-col gap-4 items-center">
            <h1 className="font-sacramento text-5xl font-normal">Alexis Zuck 🍭</h1>
            <div className="font-sacramento text-3xl font-normal"><span className="text-xl">{10}</span> posts<span className="text-xl ml-10">{20}</span> visits</div>
            <div className="font-sacramento text-4xl font-normal">Full Stack Developer️</div>
          </div>
        </div>
      </header>

      <main className="container mx-auto mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6" >
          <img src="/randy-assell-412158-unsplash-cropped.jpg" alt="randy-assell-412158" />
          <img src="/2.jpg" alt="me" />
          <img src="/4.jpg" alt="4" />
          <img src="/lined_gif.gif" alt="parrot" />
          <img src="/milad-fakurian-nY14Fs8pxT8-unsplash-cropped.jpg" alt="milad-fakurian-nY14Fs8pxT8-unsplash" />
          <img src="/rodion-kutsaev-TMa_5BLvDqQ-unsplash.jpg" alt="rodion-kutsaev-TMa_5BLvDqQ-unsplash" />
          <img src="/jason-leung-wHddViTmSvA-unsplash-cropped.jpg" alt="jason-leung-wHddViTmSvA-unsplash-cropped" />
          <img src="/andre-robida-JCPzAn5uD9Q-unsplash-cropped.jpg" alt="andre-robida-JCPzAn5uD9Q-unsplash-cropped" />

          <div className="relative pb-[56.25%] h-0">
            <iframe className="absolute t-0 l-0 w-[100%] h-[100%]" src="https://www.youtube.com/embed/wqJsZYibWcI" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          </div>

          {/* <div class="gallery-item">
            <img src="2.jpg" class="gallery-image" alt="" />
            <div class="gallery-item-type">
              <span class="visually-hidden">Gallery</span><i class="fas fa-clone" aria-hidden="true"></i>
            </div>
            <div class="gallery-item-info">
              <ul>
                <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 42</li>
                <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 1</li>
              </ul>
            </div>
          </div> */}

          <div className="relative pb-[56.25%] h-0">
            <iframe className="absolute t-0 l-0 w-[100%] h-[100%]" src="https://www.youtube.com/embed/cBVGlBWQzuc" frameBorder="0" allow="encrypted-media" allowFullScreen />
          </div>

          <div className="flex items-center justify-center bg-indigo-500">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            {/* <button type="button" class="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-indigo-500 hover:bg-indigo-400 transition ease-in-out duration-150 cursor-not-allowed" disabled="">
              <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </button> */}
          </div>



        </div>
      </main>

      <footer className='container mx-auto my-8 py-4 border-t border-solid border-gray-200'>
        <a className='flex justify-center items-center'
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className='h-4 pl-1'>
            <img src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
