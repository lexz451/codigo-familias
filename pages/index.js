import Head from 'next/head'
import Image from 'next/image';
import Infographics from '../components/Infographics';
import ArticleSlider from '../components/ArticlesSlider';
import Header from '../components/Header';
import RelatedArticles from '../components/RelatedArticles';
import FrequentQuestions from '../components/FrecuentQuestions';
import Media from '../components/Media';
import Footer from '../components/Footer';
import { fetchArticles } from '../data/api';
import mainImage from '../public/images/main.png';


export default function Index({ articles }) {
  return (
    <>
      <Head>
        <title>Código de Familias | elTOQUE</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header articles={articles} />
      <main className='main'>
        <div className='main__image'>
          <Image src={mainImage} alt=""></Image>
        </div>
        <div className='main__content'>
          <ArticleSlider articles={articles}></ArticleSlider>
          <Media></Media>
          <Infographics></Infographics>
          <RelatedArticles></RelatedArticles>
          <FrequentQuestions></FrequentQuestions>
        </div>
      </main>
      <Footer />
    </>
  )
}

export async function getStaticProps(context) {
  const articles = await fetchArticles();
  return {
    props: {
      articles: articles
    }
  }
}