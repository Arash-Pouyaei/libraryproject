
import { useSelector , useDispatch } from 'react-redux'
import { addCart, editCart } from '../state-management/action/cartAction'
import { NavLink } from 'react-router-dom'
import React, { useState } from 'react';
import { redirect,useNavigate, Navigate} from 'react-router-dom';

export const Book = () => {
  const datas = useSelector(store => store.ProuductState)
  const dispatch = useDispatch() 

  const [searchQuery, setSearchQuery] = useState('');
  const [login,setlogin] = useState(JSON.parse(localStorage.getItem('user')))
  const navigate=useNavigate()
  const filteredProducts = datas.filter(item =>
    item.productName.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <>
      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
      />
      {filteredProducts.map(item => (
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1" key={item.id}>
          <div className="card product-item border-0 mb-4">
        

            <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
              <h6 className="text-truncate mb-3">{item.productName}</h6>
              <div className="d-flex justify-content-center">
                <h6>{item.productPrice}</h6>
              </div>
            </div>
            <div className="card-footer d-flex justify-content-between bg-light border">
              {
                              
                 login?
                 <a


                onClick={() =>
                  dispatch(
                    addCart(
                      datas.find(
                        i =>
                          i.productName === item.productName &&
                          i.productPrice === item.productPrice &&
                          i.productType === item.productType
                      )
                    )
                  )
                }
                className="btn btn-sm text-dark p-0"
              
              >
                Add To Cart
              </a>
              :
              <NavLink className="btn btn-sm text-dark p-0" to="/login">please login</NavLink>
                                
              }
              
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
