import React from 'react';
import { useSelector } from 'react-redux';
import DataGrid, {
  Column,
  Editing,
  Paging,
  Toolbar,
  Item,
} from 'devextreme-react/data-grid';

import ArrayStore from 'devextreme/data/array_store';
import DataSource from 'devextreme/data/data_source';

const UserActivity = () => {
  const userActivity = useSelector((store) => store.userState);

  const dataSource = new DataSource({
    store: new ArrayStore({
      data: userActivity,
      key: 'userId',
    }),
  });

  const renderNestedGrid = (cartData) => {
    const myDataSource = new DataSource({
      store: new ArrayStore({
        data: cartData,
        key: 'productId',
      }),
    });

    return (
      <DataGrid
        dataSource={myDataSource}
        showBorders={true}
        columnAutoWidth={true} // Adjust columns automatically
      >
        <Editing
                mode="cell"
                allowUpdating={true}
                allowAdding={true}
                allowDeleting={true}
              />
        <Column dataField="productType" width={120} />
        <Column dataField="productName" width={120} />
        <Column dataField="productPrice" width={120} />
        <Column dataField="days" width={50} />
        <Column dataField="date" width={90} />
        <Column dataField="lastdate" width={90} />
      </DataGrid>
    );
  };

  return (
    <div className="d-flex justify-content-center container-fluid pt-5">
      <div className="row">
        <div className=" table-responsive mb-5">
          <div id="data-grid-demo">
            <DataGrid
              id="gridContainer"
              dataSource={dataSource}
              showBorders={true}
              columnAutoWidth={true} // Adjust columns automatically
            >
              <Paging enabled={false} />
              <Editing
                mode="cell"
                allowUpdating={true}
                allowAdding={true}
                allowDeleting={true}
              />

              <Column dataField="firstName" width={100} />
              <Column dataField="lastName" width={100} />
              <Column dataField="email" width={200} />
              <Column dataField="mobileNo" width={100} />
              <Column
                caption="Cart"
                cellRender={(rowData) => renderNestedGrid(rowData.data.cart)}
              />

              <Toolbar>
                <Item name="addRowButton" showText="always" />
              </Toolbar>
            </DataGrid>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserActivity;
