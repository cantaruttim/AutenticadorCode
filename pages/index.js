import Head from 'next/head';

function Home() {
    return (
    <div>

        <Head>
            <meta charSet='utf-8' />
            <meta name='robots' content='index, follow' />
            <meta name='description' content="Site sobre ... " />
            <meta name='author' content=' Matheus Authenticator clone' />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css' />
            <title>Home</title>
        </Head>
        Welcome to Authenticator Page!
    </div>
        )
  }
  
  export default Home;