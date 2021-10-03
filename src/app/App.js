import { GlobalStyle, Container, LeftPannel, RightPannel, Header } from './app.styled';
import Btn from '../components/button/button.component';
import AllPopups from '../components/popups/all-popups.component';
import FolderStructure from './folder-structure.component';
import Breadcrumb from './bread-crumbs.component';
import Search from './search.component';
import CreateBtn from './create-btn.component';
import logo from '../assets/logo.png';
import Storage from '../context/index.contex';
function App() {
  return (
    <Storage>
      <Container >
        <GlobalStyle />
        <AllPopups/>
        <LeftPannel>
          <Header>
                  <div className="logo">
                      <img src={logo} alt="logo" />
                  </div>
                  <p>ExploreXT</p>
            </Header> 
          <FolderStructure className="folder-structure" />
          <Btn>Lock</Btn>
        </LeftPannel>
        <RightPannel>
          <header className="header">
            <Breadcrumb />
            <Search />
            <CreateBtn/>
          </header>
          <hr/>
        </RightPannel>
      </Container>
    </Storage>
  );
}

export default App;
