import { Button, Stack } from "@chakra-ui/react";
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import PropTypes from 'prop-types';

const ExpenseList = ({expense, setDetail }) => {
    return(
        <Stack w="100%">
            <Button variant="outline" colorScheme="linkedin" onClick={() => setDetail(true)}>Ver presupuesto</Button>
            {
                expense.map(spending => <ExpenseItem key={spending.id} {...spending   }/>)
            }
        </Stack>
    )
}

ExpenseList.propTypes = {
    expense: PropTypes.array.isRequired,
    setDetail: PropTypes.func.isRequired
}

export default ExpenseList;