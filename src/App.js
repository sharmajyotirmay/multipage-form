
import { useState } from 'react';
import './App.css';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';

function App() {

  const [countFormPage, setCountFormPage] = useState(1);
  const [formFinish, setFormFinish] = useState(false);

  const setPageValue = () => {
    setCountFormPage(countFormPage + 1);
    if (countFormPage >= 3)
      setCountFormPage(1)
  }

  const setPrevPageValue = () => {
    if(countFormPage > 1)setCountFormPage(countFormPage - 1)
  }

  return (
    <div className="app">
      <center>
        <h2>this is multistage form</h2>
      </center>
      <div className='form-container mt-20 mb-100'>
  {/* this is form on page 1 */}
      {(countFormPage === 1) && <Page1/>}
{/* this is from on page 2 */}
{(countFormPage === 2) && <Page2/>}
{/* this is form on page 3 */}
{(countFormPage === 3) && <Page3/>}
<center>
      <button onClick={setPrevPageValue} type="button" class="btn btn-success ml-10">Prev</button>
      <button onClick={setPageValue} type="button" class="btn btn-success ml-10">Next</button>
</center>
      </div>
      <p>{countFormPage}</p>
    </div>
  );
}

export default App;
