import { ShoppingList1 } from "Components/Error/ShoppingList1.tsx";
import { ShoppingList2 } from "Components/Error/ShoppingList2.tsx";

function App() {

    const ingredients = ['Apples', 'Bananas', 'Ham', 'Bread', 'Bread']

    const someFunction = (selectedItem: string) => {
        console.log(`Selected ${selectedItem}`)
    }

    return (
        <>
            <h2>Shopping list 1:</h2>
            {/* <ShoppingList1
        groceries={ingredients}
        selectItem={someFunction}
      /> */}
            <h2>Shopping list 2:</h2>
            <ShoppingList2
                groceries={ingredients}
                selectItem={someFunction}
            />
        </>
    )
}

export default App