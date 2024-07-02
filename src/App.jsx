import { useState } from 'react'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';

function App() {
    const [cartCount, setCartCount] = useState(5);

    return (
        <>
            <NavBar cartCount={cartCount}/>
            <ItemListContainer greetings={"Welcome to our store!"}/>
            <Footer />
        </>
    );
}


export default App;
