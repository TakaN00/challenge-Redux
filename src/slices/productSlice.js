import {createSlice} from '@reduxjs/toolkit'

const productSlice = createSlice ({
    name: 'product',
    initialState : {
        productList : [
            {id : "DQ1049-548",
            fam : "Nike Sportswear",
            subfam : "Men's T-Shirt",
            price : "30",
            description : "Not unlike freshly picked produce, fresh sneakers tend to disappear when left unattended. The Nike Sportswear T-Shirt is made with lightweight cotton and a classic fit so you can protect your favorite sneakers in the comfort.",
            color :"Light Marine",
            poster : [
            "images/test.png",
            "images/test 01.png",
            "images/test 02.png",
            "images/test 03.png"]},
            {id : "DQ1021-100",
            fam : "Nike Sportswear DNA",
            subfam : "Men's T-Shirt",
            price : "30",
            description : "Loosen up in the Nike Sportswear DNA T-Shirt. Its roomy fit and mid-weight organic cotton jersey fabric are a powerfully comfortable combo you can enjoy through the seasons. This product is made with at least 75% organic cotton fibers.",
            color :"White",
            poster : [
            "images/DQ1021-100.png",
            "images/DQ1021-100 01.png",
            "images/DQ1021-100 02.png",
            "images/DQ1021-100 03.png"]},
          ]
    },
    reducers : {
        addProduct :(state,action)=>{
            state.productList.push(action.payload)
        },
        editProduct :(state,action)=>{
            const index = state.productList.findIndex(
                (el)=>el.id === action.payload.id
            );
            state.productList[index] = action.payload.edited
        },
        removeProduct :(state,action)=>{
            const index = state.productList.findIndex(
                (el)=>el.id === action.payload
            )
            state.productList.splice(index,1)
        }
    }
})

export default productSlice.reducer
export const {addProduct, editProduct, removeProduct} = productSlice.actions