import MyButton from './elements/MyButton';
import MySection from './elements/MySection';
import MyHeader from './elements/MyHeader';
import MaterialButton from './elements/MaterialButton';
import { GreenTheme, BlueTheme } from './theme/theme';
import { ThemeProvider } from 'styled-components';
function App() {
  return (
    <ThemeProvider theme={BlueTheme}>
      <div>
        <MySection>
          <MyHeader>My Header</MyHeader>
          <MyButton primary>My Button</MyButton>
          <MyButton >My Button</MyButton>
          <MaterialButton >Material Button</MaterialButton>
        </MySection>
      </div>
    </ThemeProvider>
  );
}

export default App;