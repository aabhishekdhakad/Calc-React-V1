import styles from "./App.module.css";
import ButtonsContainer from "./Component/ButtonsContainer";
import Display from "./Component/Display";




function App() {
  return <div className={styles.calculator}>
    <Display></Display>
     <ButtonsContainer></ButtonsContainer>
  </div>
}

export default App;
