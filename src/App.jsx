import {useFirebase} from "./context/firebase.jsx";

function App() {
  const firebase = useFirebase();
  console.log(firebase);

  return (
    <>
      <h1> Youtube app</h1>
    </>
  );
}

export default App;
