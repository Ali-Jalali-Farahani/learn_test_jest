"use client"
import { useState } from 'react'
import someFunction from "@/app/utility"

export function ShoppingList2(props: {
    groceries: string[]
}) {
    // Check for duplicates in groceries array
    const hasDuplicates = props.groceries.length !== new Set(props.groceries).size;
    if (hasDuplicates) {
        return <p style={{ color: 'red' }}>List has duplicates!</p>
    }
    const [items, setItems] = useState<{
        text: string,
        checked: boolean
    }[]>(props.groceries.map((item) => ({ text: item, checked: false })))

    function handleItemChecked(item: string) {
        setItems((prevItems) => {
            return prevItems.map((prevItem) => {
                if (prevItem.text === item) {
                    return { ...prevItem, checked: !prevItem.checked }
                }
                return prevItem
            })
        })
        someFunction(item)
    }

    return (
        <ul>
            {
                items.map((item) => {
                    return <li
                        style={{
                            textDecoration: item.checked ? 'line-through' : 'none',
                        }}
                        key={item.text}
                        onClick={() => handleItemChecked(item.text)}
                    >{item.text}</li>
                })
            }
        </ul>
    )
}