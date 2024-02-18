 const LoadPetrol = (openQuantity,petrolLoaded) => {
    //Converting the added amount to % of total tank size
    // const amountInPercent = (amount / tankSize ) * 100
    const updatedOpenQuantity = openQuantity + petrolLoaded
    return updatedOpenQuantity
};  

const LitreSold = (finalSale,oneLitreInCm) => {
    //Getting final sale in point value of percent e.g : 30% => 0.3
    const litres = finalSale * oneLitreInCm
    return litres
};  


export default {
    LoadPetrol,
    LitreSold
};