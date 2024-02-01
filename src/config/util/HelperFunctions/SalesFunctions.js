 const LoadPetrol = (amount,openQuantity,tankSize) => {
    //Converting the added amount to % of total tank size
    const amountInPercent = (amount / tankSize ) * 100
    const updatedOpenQuantity = openQuantity + amountInPercent
    return updatedOpenQuantity
};  

export default {
    LoadPetrol
};