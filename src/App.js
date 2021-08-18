import './App.css';

import Footer from "./components/pages/homepage/Footer/Footer";
import Profile from "./components/pages/homepage/Profile/Profile";
import Component from "./components/pages/homepage/PerContinent/PerContinent";
import Search from "./components/pages/homepage/Search/Search";

function App() {
    return (
        <>
            <Search />
            <Component />
            <Profile />
            <Footer />
        </>
    );
}

export default App;
