// import {getDatabase, ref, set} from "firebase/database";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {app} from "./firebase.js";

// const db = getDatabase(app);

const auth = getAuth(app);
function App() {
  // const putData = () => {
  //   set(ref(db, "users/radhka"), {
  //     id: 1,
  //     name: "Radhika",
  //     age: 22,
  //   });
  // };

  const createData = () => {
    createUserWithEmailAndPassword(auth, "radhikab694@gmail.com", "Admitcard@1234").then((userCredential) => {
      // Signed in
      // const user = userCredential.user;
      console.log(userCredential);
    });
  };
  return (
    <>
      <h1> Youtube app</h1>
      {/* <button onClick={putData}> Put Data </button> */}
      <button onClick={createData}> Create Data </button>
    </>
  );
}

export default App;
