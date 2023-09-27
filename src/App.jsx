import { useState } from "react";
import { ToastContainer} from 'react-toastify';
import Values from 'values.js';
import ColorList from "./components/ColorList";
import Form from "./components/Form";

const App = () => {
  const [colorList, setColorList] = useState(new Values('#001980').all(10));

  return (
    <main>
      <Form colorList={colorList} setColorList={setColorList} />
      <ColorList colorList={colorList} />
      <ToastContainer position='top-center' />
    </main>
  );
};
export default App;
