import Contact from './Components/Contact/Contact';
import Cursor from './Components/Cursor/Cursor';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Parallex from './Components/Parallex/Parallex';
import Portfoilio from './Components/Portfolio/portfolio';
import Services from './Components/Services/Services';
import Sidebar from './Components/Sidebar/Sidebar';
import './app.scss';
import Test from './test';



const App = () => {
  return <div>
<Cursor/>
    <section id='Homepage'>
      <Sidebar/>
    <Navbar/>
    <Hero/>
    </section>
   
    <section id='Services'><Parallex type = "services"/></section>
    <section><Services/></section>
    <section id='Portfolio'><Parallex type = "portfolio"/></section>
    <Portfoilio/>

    <section id='Contact'><Contact/>
    </section>

{/* <Test/> */}
    </div>;
};

export default App;
