import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {removeCart} from "../state-management/action/cartAction"
export const Cart = () => {
    const cart = useSelector(store=>store.CartState)
    const dispatch = useDispatch()
  return (
    <>
    <div>
   
    <div class="container-fluid pt-5">
        <div class="row px-xl-5">
            <div class="col-lg-8 table-responsive mb-5">
                <table class="table table-bordered text-center mb-0">
                    <thead class="bg-secondary text-dark">
                        <tr>
                            <th>Date</th>
                            <th>Products</th>
                            <th>Price</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody class="align-middle">
                        {
                            cart.length===0?
                                
                                    <tr>
                                        <p>سفارشی اضافه نشده</p>
                                    </tr>
                                
                            :
                                cart.map(item=>(
                                    <tr>
                                    <td className="align-middle">{item.purchaseDate.toLocaleString()}</td>
                                    <td class="align-middle"><img src="img/product-3.jpg" alt="" style={{width: "50px"}}/>{item.productName}</td>
                                    <td class="align-middle">{item.productPrice}</td>
                                    <td class="align-middle"><button class="btn btn-sm btn-primary" onClick={a=>dispatch(removeCart(item.productId))}><i class="fa fa-times"></i></button></td>
                                </tr>
                                ))
                            
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    </div>
    </>
  )
}
