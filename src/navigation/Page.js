import React from "react";

const Page = ({item , datas ,setAdding, productitem, setproductitem}) => {
    const PageBody = item.component;
    return (
        <>
            <PageBody item={item} datas={datas} setAdding={setAdding} productitem={productitem} setproductitem={setproductitem}/>
        </>
    );
};

export default Page;
