import database from '../firebase/firebase';

const addProduct = ({
    id='',
    name = '',
    type = '',
    price = 0,
    rating = '',
    warranty_years = '',
    available = 0,  
} = {}) =>
    ({
        type: 'ADD_PRODUCT',
        payload:
        {
            id,
            name,
            type,
            price,
            rating,
            warranty_years,
            available
        }
    });

export const startAddProduct = (productData = {}) => {
    return (dispatch) => {
        const {
            name = '',
            type = '',
            price='',
            rating = '',
            warranty_years = '',
            available = 0,  
        } = productData;

        const product = { name, type, price, rating, warranty_years, available };

        return database.ref('product').push(product).then((ref) => {
            dispatch(addProduct({
                id: ref.key,
                ...product
            }));
            console.log('product added');
        });


    };
};



// REMOVE_EXPENSE
const removeProduct = (id) => ({
    type: "REMOVE_PRODUCT",
    id
});

export const startRemoveProduct = (id) => {
    return (dispatch) => {
        return database.ref(`product/${id}`).remove().then(() => {
            dispatch(removeProduct(id));
        });
    };
};


// EDIT_EXPENSE
const editProduct = (id, updates) =>
    ({
        type: "EDIT_PRODUCT",
        id,
        updates
    });

export const startEditProduct = (id, updates) => {
    return (dispatch) => {
        return database.ref(`product/${id}`).update(updates).then(() => {
            dispatch(editProduct(id, updates));
        });
    };
};

export const setProduct = (expenses) => ({
    type: 'SET_PRODUCT',
    expenses
});


export const startSetProduct = () => {
    return (dispatch) => {
        return database.ref('product').once('value').then((snapshot) => {
            const expenses = [];

            snapshot.forEach((childSnapshot) => {
                expenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });

            dispatch(setProduct(expenses));
        });
    };
}