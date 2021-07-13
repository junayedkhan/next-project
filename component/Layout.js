import Nav from "./Nav";
import Hero from "./Hero"

const Layout = ({children}) => {
    return (
        <>
        <Nav />
        <Hero />
        {children}
        </>
    );
}

export default Layout;