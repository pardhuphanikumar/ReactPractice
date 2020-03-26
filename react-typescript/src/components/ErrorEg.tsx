import React from 'react'
interface Props {
    name: string
}
export const ErrorEG: React.FC<Props> = ({ name }) => {
    if (name === "pardhu") {
        throw new Error("Error occured")
    }
    return (
        <div>
            {name}
        </div>
    )
}
