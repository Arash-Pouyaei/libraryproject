import React, {useState} from 'react'
import ProductTable from './ProductTable.js';
import {redirect} from 'react-router-dom'


export const AdminPanel = ({
                               datas,
                               setdata,
                           }) => {
                            const [admin,setadmin] = useState(JSON.parse(localStorage.getItem('admin')))
    return (
        <>
            
            {admin?
                
                <ProductTable setadmin={setadmin} datas={datas} setdata={setdata}/>
                :
                <>
                    {redirect("/admin")}
                </>
            }
        </>
    )

}