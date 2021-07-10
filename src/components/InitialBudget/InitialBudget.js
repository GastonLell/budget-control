import { useState } from "react";
import { Stack, Text, Input, Button, Alert, AlertIcon } from "@chakra-ui/react";
import PropTypes from 'prop-types';

const InitialBudget = ({setBudget, setRemainingBudget, setShowQuestion}) =>{

    const [amount, setAmount] = useState(0);
    const [error, setError] = useState(false)
    const handleChangeAmount = (e) => {
        setAmount(parseInt(e.target.value))
    }

    const handleSubmitAmount = (e) => {
        e.preventDefault();

        //validacion
        if(amount < 1 || isNaN( amount )){
            setError(true)
            return;
        }

        //si pasa validacion
        setError(false)
        setBudget(amount);
        setRemainingBudget(amount)
        setShowQuestion(false)
    }

    return(
        <Stack w={{base: "90%",md: "50%"}} m="auto" bg="#fff" borderRadius={6} px={4} py={6}>

            <Text fontSize="4xl" mb={4} color="gray.500" fontWeight="100" textAlign="center">Coloca tu presupuesto</Text>
            {error ? (
                  <Alert status="error">
                    <AlertIcon />
                        El presupuesto no es valido
                    </Alert> 
                ) : null
            }
            <form onSubmit={handleSubmitAmount}>

                <Input mb={4} type="text" placeholder="Coloca tu presupuesto..." onChange={handleChangeAmount}/>

                <Button  mb={2} colorScheme="twitter" w="100%" >Definir presupuesto</Button>

            </form>

        </Stack>
    )
}
InitialBudget.propTypes = {
    setBudget: PropTypes.func.isRequired,
    setRemainingBudget: PropTypes.func.isRequired,
    setShowQuestion: PropTypes.func.isRequired,
}

export default InitialBudget;