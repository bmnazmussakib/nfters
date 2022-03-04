import './App.css';
import AmazingNFT from './Component/AmazingNFT/AmazingNFT';
import CollectionFeatured from './Component/CollectionFeatured/CollectionFeatured/CollectionFeatured';
import CreateAndSell from './Component/CreateAndSell/CreateAndSell';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header/Header';
import TopCollection from './Component/TopCollection/TopCollection/TopCollection';

function App() {
  return (
    <div>
      <Header />
      <AmazingNFT />
      <TopCollection />
      <CollectionFeatured />
      <CreateAndSell />
      <Footer />
    </div>
  );
}

export default App;
