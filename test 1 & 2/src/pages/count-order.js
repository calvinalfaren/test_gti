// import logo from './logo.svg';
import { useState } from 'react';
import { CiCircleQuestion } from 'react-icons/ci'
import { AiOutlineMail } from 'react-icons/ai'
import { RiLockPasswordLine } from 'react-icons/ri'
import { Link, useNavigate } from 'react-router-dom'
// import './App.css';
// import Navbar from './template/navbar';
// import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

class OrderItem {
  constructor(orderId, productId, quantity, price) {
    this.orderId = orderId;
    this.productId = productId;
    this.quantity = quantity;
    this.price = price;
  }

  get total() {
    return this.quantity * this.price;
  }
}

function CountOrder() {
  
  const [id, setId] = useState(0);
  const [orderId, setOrderId] = useState(0);
  const [productId, setPoductId] = useState(1);
  const [price, setPrice] = useState(0);
  const [qty, setQty] = useState(0);
  const [orderItem, setOrderItem] = useState({});
  // let orderItem = {};

  const [array, setArray] = useState([]);

  const listProduct = 
  [
    {
      id: 1,
      name: 'chiki'
    },
    {
      id: 2,
      name: 'biskuit'
    },
    {
      id: 3,
      name: 'coklat'
    },
    {
      id: 4,
      name: 'permen relaxa'
    },
    {
      id: 5,
      name: 'pocky'
    }
  ]

  const checkNumber = (event) => {
    event.preventDefault();

    // console.log('event', id)
    // console.log('event', orderId)
    // console.log('event', productId)
    // console.log('event', price)
    // console.log('event', qty)

    setOrderItem( new OrderItem(orderId, productId, price, qty))

  }

  const resetNumber = () => {
    // array = [];
    setOrderItem({})

  }
  
  const navigate = useNavigate()
  const handleLogin = () => {
      navigate('/home')
  }

  console.log('orderItem', orderItem)
  return (
    <>
      {/* <div class="flex mx-auto max-w-7xl px-2 py-2 sm:px-6 sm:py-4 lg:px-8 lg:py-6">
        <div class="flex-1 w-64 ...">
          
        </div>
        <div class="flex-1 w-32 ...">
          03
        </div>
      </div> */}
      <form onSubmit={checkNumber}>
        <div className="space-y-12 m-auto w-1/2 my-5">
          
          <div className="col-span-full">
            <label htmlFor="number" className="block text-sm font-medium leading-6 text-gray-900">
              Id
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                <input
                  type="id"
                  name="id"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="input Id"
                />
              </div>
            </div>
          </div>

          
          <div className="col-span-full">
            <label htmlFor="number" className="block text-sm font-medium leading-6 text-gray-900">
              Order Id
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                <input
                  type="orderId"
                  name="orderId"
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="input order Id"
                />
              </div>
            </div>
          </div>
              
          <div className="col-span-full">
            <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
              Product
            </label>
            <div className="mt-2">
              <select
                id="productId"
                name="productId"
                autoComplete="product-name"
                onChange={(e) => setPoductId(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              >
                {
                  listProduct.map((i) => (
                    <option value={i.id}>{i.name}</option>
                    
                  ))
                }
              </select>
            </div>
          </div>


          
          <div className="col-span-full">
            <label htmlFor="number" className="block text-sm font-medium leading-6 text-gray-900">
              Price
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                <input
                  type="price"
                  name="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="input price"
                />
              </div>
            </div>
          </div>


          
          <div className="col-span-full">
            <label htmlFor="number" className="block text-sm font-medium leading-6 text-gray-900">
              Qty
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                <input
                  type="qty"
                  name="qty"
                  value={qty}
                  onChange={(e) => setQty(e.target.value)}
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="input Qty"
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
          <div>Order Item</div>
          <div>Oder Id : { orderItem.orderId }</div>
          <div>Product Id: { orderItem.productId }</div>
          <div>Price : { orderItem.price }</div>
          <div>Qty : { orderItem.quantity }</div>
          <div>Total : { orderItem.total }</div>
        </div>
      </form>
    </>
  );
}

export default CountOrder;
