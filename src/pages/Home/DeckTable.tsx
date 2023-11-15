import React from 'react'
import {IDeck} from "../../types/types"
import {Table} from "antd"
import {ColumnsType} from "antd/es/table/interface"

const DeckTable = () => {

    const defaultDecks: IDeck[] = [
        {
            id: 1,
            name: 'Colours',
            description: 'basic colours in Russian'
        },
        {
            id: 2,
            name: 'Locations',
            description: 'basic locations in Russian'
        },
        {
            id: 1,
            name: 'Family members',
            description: 'common family members in Russian'
        }
    ]

    return (
            <div>

            </div>
    )
}

export default DeckTable