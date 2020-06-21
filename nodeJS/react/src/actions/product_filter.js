// SET_TEXT_FILTER
export const setTitreFilter = (text = '') => ({
    type: 'SET_NAME_FILTER',
    text
});
//SET_AUTEUR_FILTER
export const setTypeFilter = (auteur='') => ({
    type : 'SET_TYPE_FILTER',
    auteur
})
// SET_NIVEAU_FILTER
export const setPriceFilter = (niveau='') => ({
    type: "SET_PRICE_FILTERS",
    niveau
})
