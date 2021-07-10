export const reviewBudget = ({budget, remainingBudget}) => {
    let status;
    if((budget / 4) > remainingBudget ) {
        status = 'error'
    } else if ((budget / 2) > remainingBudget){
        status = 'warning'
    } else {
        status = 'info'
    }

    return status;
}