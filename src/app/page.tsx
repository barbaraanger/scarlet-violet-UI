import Link from 'next/link';
import { cards } from './themes/defaultTheme';

const Home: React.FC = () => {
  const classes = cards();
  return (
    <div>
      <h1>Bem-vindo ao Meu Site</h1>
      <Link href="/">
    Página Inicial
      </Link>
    </div>
  );
};

export default Home;
