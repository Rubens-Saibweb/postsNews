import SEO from "../components/SEO"

import styles from '../styles/Home.module.scss'



export default function Home() {



  return (
    <>
      <SEO title="Dev News" excludeTiteSiffix />
     <main className={styles.content}>
       <section className={styles.section}>
         <span>Olá Dev!</span>
         <h1>
           Bem vindo(a) ao <br>
           </br>
           <span>Dev News</span>!
         </h1>
         <p>Um Blog com conteudos extremamante <br/>
          <span> relevanter apra o seu aprendizado </span> </p>
       </section>
       <img src="/home.svg" alt="home" ></img>
     </main>

    </>
  )
}

