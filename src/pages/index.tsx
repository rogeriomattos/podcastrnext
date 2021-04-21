import { useEffect } from 'react';
import { Header } from '../components/Header';

export default function Home(props) {
  console.log(props.episodes);
  useEffect(() => {
    
  }, []);

  return (
   <h1>Home</h1>
  )
}

export async function getStaticProps() {
  const response = await fetch('http://localhost:3333/episodes');
  const data = await response.json();

  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8,
  };
};
