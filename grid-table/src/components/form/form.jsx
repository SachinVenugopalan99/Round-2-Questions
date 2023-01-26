import React from 'react';
import './.styles.scss'
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const navigate = useNavigate ();
  return (
    <div className='containerBox'>
        <form onSubmit={() => navigate('/grid')}>
            <div>
                Select Dataset
            </div>
            <div className='selectBox'>
            <select name="cars" id="cars" className='select'>
            <option value="Toyota">Volvo</option>
            <option value="Ford">Saab</option>
            <option value="Mercedes">Mercedes</option>
            <option value="Porsche">Audi</option>
            </select>
            </div>
            <div>
            <button className='buttonBox'>
                Submit Form
            </button>
            </div>
        </form>
    </div>
  )
}

export default Form;
