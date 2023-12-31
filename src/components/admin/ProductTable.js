import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2'
import { removeProducts } from '../../state-management/action/productsAction';
import {useNavigate} from 'react-router-dom';
import ProgressBar from 'devextreme-react/progress-bar';
import FileUploader from 'devextreme-react/file-uploader';
import DataGrid, {
    Column,
    Editing,
    Paging,
    Selection,
    Lookup,
    Toolbar,
    Item,
  } from 'devextreme-react/data-grid';
  
  import { Button } from 'devextreme-react/button';
  
  import ArrayStore from 'devextreme/data/array_store';
  import DataSource from 'devextreme/data/data_source';
  
const ProductTable = () => {

    const Prouducts = useSelector(store => store.ProuductState);
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const dataSource = new DataSource({
        store: new ArrayStore({
          data: Prouducts,
          key: 'productId',
        }),
      });

    return (

        <>

    <div class="d-flex justify-content-center container-fluid pt-5">
        <div class="row">
            <div class="input-group-append" style={{float: "right"}}>
                <button class="btn btn-primary" onClick={t =>{localStorage.clear();navigate('/admin')}}>
                    log out
                </button>
            </div>
            <div class=" table-responsive mb-5">

                <div id="data-grid-demo">
                    <DataGrid id="gridContainer"
                        dataSource={dataSource}
                        showBorders={true}
                        // selectedRowKeys={this.state.selectedItemKeys}
                        // onSelectionChanged={this.selectionChanged}
                    >
                        <Selection mode="multiple" />
                        <Paging enabled={false} />
                        <Editing
                        mode="cell"
                        allowUpdating={true}
                        allowAdding={true}
                        allowDeleting={true} />

                             <Column dataField="file"  >
                             <input type="file"/>
                             </Column>

                        <Column dataField="productType"  />
                        <Column dataField="productName" />
                        <Column dataField="productPrice" />
                        <Column dataField="quantity" />
                        <Toolbar>
                        <Item name="addRowButton" showText="always" />
                        <Item location="after">
                            <Button
                            //   onClick={this.deleteRecords}
                            icon='trash'
                            //   disabled={!this.state.selectedItemKeys.length}
                            text="Delete Selected Records" />
                        </Item>
                        </Toolbar>
                    </DataGrid>
                    <button onClick={a=>console.log(Prouducts)}>log</button>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}


export default ProductTable
