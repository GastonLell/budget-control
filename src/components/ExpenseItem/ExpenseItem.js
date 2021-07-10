import { Stack, Text } from "@chakra-ui/react";
import PropTypes from 'prop-types';

const ExpenseItem = ({description, count}) => {
    return(
        <Stack d="flex" direction="row" justifyContent="space-between" p={2} borderBottom="1px" borderColor="gray.300">
            <Text>{description}</Text>
            <Text>{count}</Text>

        </Stack>
    )
}
ExpenseItem.propTypes = {
    description: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
}
export default ExpenseItem;