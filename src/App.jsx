import { useState } from "react";
import { ToastContainer} from 'react-toastify';
import ColorList from "./components/ColorList";
import Form from "./components/Form";

const App = () => {
  const [colorList, setColorList] = useState([]);

  return (
    <main>
      <Form colorList={colorList} setColorList={setColorList} />
      <ColorList colorList={colorList} />
      <ToastContainer position='top-center' />
    </main>
  );
};
export default App;
