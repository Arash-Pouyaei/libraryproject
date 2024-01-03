import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add_cart, remove_cart } from '../state-management/action/UsersAction';
import { NavLink } from 'react-router-dom';

export const Book = () => {
  const datas = useSelector((store) => store.ProuductState);
  const users = useSelector((store) => store.userState);
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');
  const [login, setLogin] = useState(JSON.parse(localStorage.getItem('user')));
  const [userId, setUserId] = useState(login === null ? '' : login.userId);
  const [quantities, setQuantities] = useState({});
  const [dateObj,setdateObj] = useState(new Date());
  const [month,setmonth] = useState(dateObj.getUTCMonth() + 1);
  const [day,setday] = useState(dateObj.getUTCDate());
  const [year,setyear] = useState(dateObj.getUTCFullYear());
  const [newDate,setnewDate] = useState(`${year}/${month}/${day}`);
  const [lastdate,setlastdate] = useState(0)
  const filteredProducts = datas.filter((item) =>
    item.productName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddToCart = (item) => {
    dispatch(add_cart(item , userId , quantities[item.productId] , newDate , lastdate ))
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {filteredProducts.map((item) => (
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1" key={item.productId}>
          <div className="card product-item border-0 mb-4">
            <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
              <h6 className="text-truncate mb-3">{item.productName}</h6>
              <div className="d-flex justify-content-center">
                <h6>{item.productPrice}</h6>
              </div>
            </div>
            <div className="card-footer d-flex justify-content-between bg-light border">
              {login ? (
                <button
                  onClick={() =>{
                    setlastdate(`${year}/${month}/${day+quantities[item.productId]}`);
                    setTimeout(() => {
                      handleAddToCart(item);
                    }, 1000);
                      }
                    }
                  className="btn btn-sm text-dark p-0"
                >
                  Add To Cart
                </button>
              ) : (
                <NavLink className="btn btn-sm text-dark p-0" to="/login">
                  Please login
                </NavLink>
              )}

              <div className="align-middle">
                <div className="input-group quantity mx-auto" style={{ width: '100px' }}>
                  <div className="input-group-btn">
                    <button
                      className="btn btn-sm btn-primary btn-minus"
                      onClick={() => {

                        setQuantities((prevQuantities) => ({
                          ...prevQuantities,
                          [item.productId]: Math.max((prevQuantities[item.productId] || 1) - 1, 1),
                        }));
                      }}
                    >
                      <i className="fa fa-minus"></i>
                    </button>
                  </div>
                  <p
                    type="text"
                    className="form-control form-control-sm bg-secondary text-center"
                  >
                    {quantities[item.productId] || 1}
                  </p>
                  <div className="input-group-btn">
                    <button
                      className="btn btn-sm btn-primary btn-plus"
                      onClick={() => {

                        setQuantities((prevQuantities) => ({
                          ...prevQuantities,
                          [item.productId]: (prevQuantities[item.productId] || 1) + 1,
                        }));
                      }}
                    >
                      <i className="fa fa-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <button onClick={a=>console.log(users)}>log</button>
    </>
  );
};
