import TaskForm from "./component/task-form/task-form.component";
import { Container, OutsideDiv } from "./App.styles";
import TaskList from "./component/task-list/task-list.component";
import Footer from "./component/footer-component/footer.component";

function App() {
  return (
    <Container>
      <OutsideDiv>
        <TaskForm />
        <TaskList />
        <Footer />
      </OutsideDiv>
    </Container>
  );
}

export default App;
