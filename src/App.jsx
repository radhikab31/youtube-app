import {getDatabase, ref, set} from "firebase/database";
import {app} from "./firebase.js";

const db = getDatabase(app);
function App() {
  const putData = () => {
    set(ref(db, "users/radhka"), {
      id: 1,
      name: "Radhika",
      age: 22,
    });
  };
  return (
    <>
      <h1> Youtube app</h1>
      <button onClick={putData}> Put Data </button>
    </>
  );
}

export default App;
