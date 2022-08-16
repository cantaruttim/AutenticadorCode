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
            <title>Validador de Documentos Digitais</title>
        </Head>

        <header>
            <div>
                <a>dr.consulta</a>
            </div>
        </header>

        <section className='content'>
        <div className='textoLogo'>
                    <div className='Imglogo'>
                        <i class="fa-solid fa-fingerprint"></i>
                    </div>
                    Verificação de Documentos com Assinatura Digital
                </div>
            <div className='content-box'>
                <div className='caixaTexto'>
                    <div className='text_1'>
                        Insira a chave de verificação para validar o documento.
                    </div>

                    <div className='caixaDados'>
                        <input className='caixaChave' type="text" /> <button className='btnVerificar'>Verificar</button>
                    </div>
                    <div className='CampoObrigatorio'>
                        *Campo Obrigatório
                    </div>

                </div>
            </div>
        </section>

        <footer>
            <div>
                <a>dr.c</a>
            </div>
        </footer>

        <br />
    </div>
        )
  }
  
  export default Home;