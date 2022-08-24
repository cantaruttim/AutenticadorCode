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
            <link rel="icon" type="image/ico" href="../public/Logo_drconsulta.ico"/>
            <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css' />
            <title>Validador de Documentos Digitais</title>
        </Head>

        <header>
            <div className='linkLogo'>

                <a className='logo'>dr.consulta</a>
            </div>
        </header>

        <section className='content'>
                <div className='textoLogo'>
                    <div className='Imglogo'>
                            <i class="fas fa-fingerprint fa-4x"></i>
                    </div>
                    Verificação de Documentos com Assinatura Digital
                </div>
            <div className='content-box'>
                <div className='caixaTexto'>
                    <div className='text_1'>
                        Insira a chave de verificação para validar o documento.
                    </div>

                    <div className='caixaDados'>
                        <input className='caixaChave' type="text" placeholder='Chave de Verificação'/> <button type='submit' className='btnVerificar'>Verificar</button>
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
                <div className='textFooter'>
                    &copy; dr.consulta 2019 <br />
                    Todos os direitos reservados.
                </div>
            </div>
        </footer>

        <br />
    </div>
        )
  }
  
  export default Home;