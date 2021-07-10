import { useEffect, useState } from "react";
import { ChakraProvider, Stack, Text } from "@chakra-ui/react";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import InitialBudget from "./components/InitialBudget/InitialBudget";
import ExpenseList from "./components/ExpenseList/ExpenseList";
import BudgetControl from "./components/BudgetControl/BudgetControl";

function App() {
  //presupuesto
  const [budget, setBudget] = useState(0);
  //restante presupuesto
  const [remainingBudget, setRemainingBudget] = useState(0);
  //ver o no pregunta inicial de presupuesto
  const [showQuestion, setShowQuestion] = useState(true);
  //gastos
  const [expense, setExpense] = useState([]);
  //control de usseEffect para crear gastos
  const [createdSpeading, setCreatespeading] = useState(false);
  const [speading, setSpeading] = useState({});
  //ver detalle gastos o numeros
  const [detail, setDetail] = useState(false);

  useEffect(() => {
    if (createdSpeading) {
      //agrega nuevo presupuesto
      setExpense([...expense, speading]);
      //actualiza el presupuesto

      setRemainingBudget(remainingBudget - speading.count);
      //vuelve a false
      setCreatespeading(false);
    }
  }, [speading, createdSpeading, remainingBudget, expense]);

  return (
    <ChakraProvider>
      <Stack bgGradient="linear(to-t, white, blue.900)" h="100vh">
        <Stack>
          <Text
            textAlign="center"
            fontSize={{base: "5xl" ,md: "6xl"}}
            color="white"
            fontWeight="200"
            p={{base: 2, md: 4}}
          >
            Gasto semanal
          </Text>
        </Stack>

        {showQuestion ? (
          <Stack>
            <InitialBudget
              setBudget={setBudget}
              setRemainingBudget={setRemainingBudget}
              setShowQuestion={setShowQuestion}
            />
          </Stack>
        ) : (
          <Stack
            bg="whiteAlpha.900"
            d="flex"
            direction={{base: "column", md: "row"}}
            w={{base: "90%" ,md: "70%"}}
            mx="auto !important"
            p={{base: 4 ,md: 6}}
          >
            <Stack w="100%">
              <ExpenseForm
                setSpeading={setSpeading}
                setCreatespeading={setCreatespeading}
              />
            </Stack>
            <Stack w="100%">
              <Text
                fontSize="4xl"
                color="gray"
                fontWeight="200"
                textAlign="center"
                mb={2}
              >
                Ver detalles
              </Text>
              {detail ? (
                <BudgetControl
                setDetail={setDetail}
                budget={budget}
                remainingBudget={remainingBudget}
              />
              ) : (
                 <ExpenseList setDetail={setDetail} expense={expense} /> 
              )}
            </Stack>
          </Stack>
        )}
      </Stack>
    </ChakraProvider>
  );
}

export default App;
