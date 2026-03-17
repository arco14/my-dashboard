'use client'
import { useState } from "react"
interface Props {
    value?: number;
}
export const CarCounter = ({ value = 0}: Props) => {
    //? Hooks
    const [count, setCount] = useState(value)
    return (
        <>
            <span className="text-9xl">{count}</span>
            <div className="flex gap-1 justify-center">
                <button
                    onClick={() => setCount(count + 1)}
                    className="flex items-center justify-center p-2 bg-gray-900 text-white hover:bg-gray-500 transition-all w-25 rounded-xl cursor-pointer">+ 1</button>
                <button
                    onClick={() => setCount(count - 1)}
                    className="flex items-center justify-center p-2 bg-gray-900 text-white hover:bg-gray-500 transition-all w-25 rounded-xl cursor-pointer">- 1</button>
            </div>
        </>
    )
}
