// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import Navbar from './template/navbar';
// import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

function App() {
  const [number, setNumber] = useState("");
  const [array, setArray] = useState([]);


  const checkNumber = (event) => {
    event.preventDefault();
    
    // array = [];
    setArray([])
    let numberArray = number.split('')
    // console.log('numberArray', numberArray)
    let a = [];
    for (let i = 0; i < 10; i++) {
      let y = numberArray.filter(number => number == i)
      
      a.push({index: i, value: y})
      setArray(a)
      // else 
      // console.log('array', array)
    }
  }

  const resetNumber = () => {
    // array = [];
    setArray([])
    setNumber("")

  }

  return (
    <>
      <form onSubmit={checkNumber}>
        <div className="space-y-12 m-auto w-1/2 my-5">
          
          <div className="col-span-full">
            <label htmlFor="number" className="block text-sm font-medium leading-6 text-gray-900">
              Number
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                <input
                  type="number"
                  name="number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="input number"
                />
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button type="button" className="text-sm font-semibold leading-6 text-gray-900"
              onClick={resetNumber}>
              Reset
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Check
            </button>
          </div>

          {
            array.map((i) => (
              <div>The number {i.index} appears {i.value.length} {i.value.length > 1 ? 'times' : 'time'}</div>
              
            ))
          }
        </div>
      </form>
    </>
  );
}

export default App;
