import { ShoppingList1 } from "@/Components/Error/ShoppingList1";
import { ShoppingList2 } from "@/Components/Error/ShoppingList2";


async function Home() {

    const ingredients = ['Apples', 'Bananas', 'Ham', 'Bread', 'Bread']

    return (
        <>
            <h2>Shopping list 1:</h2>
            {/*<ShoppingList1 groceries={ingredients}/>*/}
            <h2>Shopping list 2:</h2>
            <ShoppingList2
                groceries={ingredients}
            />
        </>
    )
}

export default Home