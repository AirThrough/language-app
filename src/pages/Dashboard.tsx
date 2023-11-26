import React, {FC, useState, useEffect} from 'react'
import {
    Table,
    Flex,
    Button
} from "antd"
import {ColumnsType} from "antd/es/table/interface"
import {
    PlusOutlined,
    EditTwoTone
} from "@ant-design/icons"
import {req} from "../utils/request"
import {API_ENDPOINTS} from "../config/apiConfig"
import {IDeck} from "../types/types"
import Preloader from "../components/Preloader"
import {useNavigate} from "react-router-dom"

interface IDecksTableCell {
    type: string,
    value: string
}

interface IDecksTableRow {
    link: string,
    id: string,
    name: string,
    description: string
}

const Dashboard: FC = () => {

    const navigate = useNavigate()

    const columns: ColumnsType<IDecksTableRow> = [
        {
            title: 'Number',
            key: 'number',
            dataIndex: 'id',
            render: (text, record, index) => index + 1
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
        {
            title: 'Action',
            dataIndex: '',
            key: 'x',
            render: () => <Flex justify={'end'}>
                <Button icon={<EditTwoTone/>} type={"dashed"} />
            </Flex>,
        }
    ]

    const [loading, setLoading] = useState<Boolean>(true)
    const [decks, setDecks] = useState<IDecksTableRow[]>([])

    const getDecks = () :void => {
        setLoading(true)
        req.get<IDeck[]>(API_ENDPOINTS.decks).then(response => {
            setDecks(response.data.map(item => {
                return {
                    ...item,
                    link: ''
                }
            }))
        }).finally(() => {
            setLoading(false)
        })
    }

    useEffect(() => {
        getDecks()
    }, [])

    return (
        <div
            style={{
                position: 'relative',
                minHeight: '300px'
            }}
        >
            {
                loading ? (
                    <Preloader text={'Loading decks...'}/>
                ) : (
                    <div>
                        <Flex
                            justify={'flex-end'}
                            style={{
                                marginBottom: '20px'
                            }}
                        >
                            <Button
                                type={'primary'}
                                size={'large'}
                                icon={<PlusOutlined />}
                                onClick={() => {
                                    navigate('/decks/add')
                                }}
                            >
                                Create deck
                            </Button>
                        </Flex>
                        <Table
                            columns={columns}
                            dataSource={decks}
                        />
                    </div>

                )
            }
        </div>
    )
}

export default Dashboard