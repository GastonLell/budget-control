import {reviewBudget} from '../../helpers'
import { Stack, Alert, AlertDescription, Button } from "@chakra-ui/react";
import PropTypes from "prop-types";

const BudgetControl = ({remainingBudget, budget, setDetail}) => {
    return(
        <Stack>
            <Button variant="outline" colorScheme="linkedin" onClick={() => setDetail(false)}>Ver detalles</Button>

            <Stack>
                <Alert status="info">
                    <AlertDescription>{budget}</AlertDescription>
                </Alert>
            </Stack>
            <Stack>
                <Alert status={reviewBudget({budget, remainingBudget})}>
                    <AlertDescription>{remainingBudget}</AlertDescription>
                </Alert>
            </Stack>
        </Stack>
    )
}

BudgetControl.propTypes = {
    remainingBudget: PropTypes.number.isRequired,
    budget: PropTypes.number.isRequired,
    setDetail: PropTypes.func.isRequired,
}

export default BudgetControl;