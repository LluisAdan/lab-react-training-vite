import Greeting from "./components/Greetings/Greetings";
import IdCard from "./components/IdCard/IdCard";
import Random from "./components/Random/Random";


function App() {
  return (
    <div className="App">
      
      <h1>Iteration 1</h1>
      <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      <h1>Iteration 2</h1>
      <Greeting lang="de">Ludwig</Greeting>
      <Greeting lang="fr">François</Greeting>

      <h1>Iteration 3</h1>
      <Random min={1} max={6} />
      <Random min={1} max={100} />

    </div>
  );
}

export default App;
