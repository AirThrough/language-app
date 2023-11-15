import React, {FC} from 'react'
import {IDeck} from "../types/types"
import DeckItem from "./Home/DeckItem";
import {
    Table
} from "antd"
import {ColumnsType} from "antd/es/table/interface"

interface IDecksTableCell {
    type: string,
    value: string
}

interface IDecksTableRow {
    link: string,
    number: number,
    name: string,
    description: string
}

const Dashboard: FC = () => {

    const columns: ColumnsType<IDecksTableRow> = [
        {
            title: 'Number',
            key: 'number',
            dataIndex: 'number'
        },
        {
            title: 'Name',
            key: 'name',
            dataIndex: 'name'
        },
        {
            title: 'Description',
            key: 'desc',
            dataIndex: 'description'
        },
    ]

    const content: IDecksTableRow[] = [
        {
            link: '',
            number: 1,
            name: 'Colours',
            description: 'Basic colours in Russian'
        },
        {
            link: '',
            number: 2,
            name: 'Locations',
            description: 'Basic locations in Russian'
        },
        {
            link: '',
            number: 3,
            name: 'Family members',
            description: 'Common family members in Russian'
        }
    ]

    return (
        <div style={{marginTop: '50px'}}>
            <Table
                columns={columns}
                dataSource={content}
            />
        </div>
    )
}

export default Dashboard