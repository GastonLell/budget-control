import React, { useState } from "react";
//para obtener id
import shortid from "shortid";
//componentes chakraa
import {
  Text, Stack,
  Input, Button,
  FormControl, FormLabel,
  Alert, AlertIcon 
} from "@chakra-ui/react";
//documentacion componente
import PropTypes from 'prop-types';

const ExpenseForm = ({setSpeading, setCreatespeading}) => {
  const [description, setDescription] = useState("")
  const [count, setCount] = useState("")
  const [error, setError] = useState(false)


  const handleSubmit = (e) => {
    e.preventDefault();
    //valido
    if(count < 1 || isNaN(count) || description.trim() === "") {
        setError(true);
        return;
    }
    //si pasa la validacion
    setError(false);
    const spending = {
        description,
        count,
        id: shortid.generate(),
    }
    //guardar gasatos
    setSpeading(spending);

    setCreatespeading(true)
    //
    //resetear form
    setDescription("");
    setCount(0);

  };

  return (
    <Stack w="100%" borderRadius={6}>
      <Text
        fontSize="4xl"
        color="gray"
        fontWeight="200"
        textAlign="center"
        mb={2}
      >
        Agregar tus gastos
      </Text>

      <form onSubmit={handleSubmit}>
        <Stack spacing={6}>
          <FormControl>
            <FormLabel>Nombre gasto</FormLabel>
            <Input
              type="text"
              placeholder="Ej. Transporte"
                  value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Cantidad gasto</FormLabel>
            <Input
              type="number"
              placeholder="Ej. Transporte"
              value={count}
              onChange={(e) => setCount(parseInt(e.target.value))}
            />
          </FormControl>

          <Button colorScheme="twitter" type="submit">
            Agregar gasto
          </Button>
        </Stack>
      </form>
          {error ? (
            <Alert status="error">
              <AlertIcon />
                por favor, revise sus campos
            </Alert> 
            ) : null
          }

    </Stack>
  );
};

ExpenseForm.propType = {
  setSpeading: PropTypes.func.isRequired,
  setCreatespeading: PropTypes.func.isRequired,
}

export default ExpenseForm;
