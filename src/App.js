// import Header from "./components/Header";
//import Footer from "./components/Footer";

import ContactForm from "./components/ContactForm";
//import TestComponent from "../testing/TestComponent";

function App() {
  return <ContactForm />
}



















  // const [name, setName] = useState("Nandu");
  // const [loading, setLoading] = useState(false);
  // const handleClick = () => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setName("Nandini Mudhireddy");
  //     setLoading(false);
  //   }, 3000);
  // };
  // return (
  //   // <form>
  //   //   <label>Name</label>
  //   //   <input type="text" ></input>
  //   //   <label>email</label>
  //   //   <input type="email" ></input>
  //   //   <label>Message</label>
  //   //   <input type="textarea" ></input>
  //   // </form>
  //   <div>
  //     <p>Name using useState</p>
  //     {loading ? <h1>Loading...</h1> : <h2>{name}</h2>}
  //     <button onClick={handleClick}>Click</button>
  //   </div>
  // );


// function App() {
//   const [name, setName] = useState("Ganesh");
//   const [isLoading, setIsLoading] = useState(false);

//   const handleClick = () => {
//     setIsLoading(true);
//     setTimeout(() => {
//       setName("Ganesh Munisifreddy");
//       setIsLoading(false);
//     }, 3000);
//   };

// return (
//   <div className="App">
//     <Header heading="Stuff9" description="A tech blog" author={name} />
//     {isLoading ? <h2>Loading...</h2> : <h2>{name}</h2>}
//     <button onClick={handleClick}>Reveal My Fullname</button>
//     <ContactForm />
//   </div>
//   );
// }

export default App;
