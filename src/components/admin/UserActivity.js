import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import DataGrid, {
    Column,
    Editing,
    Paging,
    Selection,
    Lookup,
    Toolbar,
    Item,
  } from 'devextreme-react/data-grid';
   
  import ArrayStore from 'devextreme/data/array_store';
  import DataSource from 'devextreme/data/data_source';
  
const UserActivity = () => {

    const userActivity = useSelector(store => store.userState);
    const dataSource = new DataSource({
        store: new ArrayStore({
          data: userActivity,
          key: 'userId',
        }),
      });

    return (

        <>

    <div class="d-flex justify-content-center container-fluid pt-5">
        <div class="row">

            <div class=" table-responsive mb-5">

                <div id="data-grid-demo">
                    <DataGrid id="gridContainer"
                        dataSource={dataSource}
                        showBorders={true}
                    >
                        <Paging enabled={false} />
                        <Editing
                        mode="cell"
                        allowUpdating={true}
                        allowAdding={true}
                        allowDeleting={true} />

                        <Column dataField="firstName"  />
                        <Column dataField="lastName" />
                        <Column dataField="email" />
                        <Column dataField="mobileNo" />
                        <Toolbar>
                        <Item name="addRowButton" showText="always" />
 
                        </Toolbar>
                    </DataGrid>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}


export default UserActivity
