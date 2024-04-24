export const useTotalPrices = () => {
    const subTotalCalc = (quantity, price) => {
        return Math.floor(quantity * price);
    };

    const totalCalc = array => {
        const subTotales = array.map(item => {
            return subTotalCalc(item.quantity, item.price);
        });
        const total = subTotales.reduce(
            (restoFinal, subTotales) => restoFinal + subTotales,
            0
        );
        return total;
    };

    return { subTotalCalc, totalCalc }
}