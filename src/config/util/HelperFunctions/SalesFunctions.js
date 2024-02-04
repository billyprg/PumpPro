 const LoadPetrol = (amount,openQuantity,tankSize) => {
    //Converting the added amount to % of total tank size
    const amountInPercent = (amount / tankSize ) * 100
    const updatedOpenQuantity = openQuantity + amountInPercent
    return updatedOpenQuantity
};  

const LitreSold = (finalSale,tankSize) => {
    //Getting final sale in point value of percent e.g : 30% => 0.3
    const litres = finalSale * tankSize
    return litres
};  


export default {
    LoadPetrol,
    LitreSold
};