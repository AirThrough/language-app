import React, {FC, useState, useEffect, ReactNode} from 'react'
import {
    Table,
    Flex,
    Button,
    Modal,
    notification
} from "antd"
import {ColumnsType} from "antd/es/table/interface"
import {
    PlusOutlined,
    EditOutlined,
    DeleteOutlined,
    BulbOutlined,
} from "@ant-design/icons"
import {req} from "../utils/request"
import {API_ENDPOINTS} from "../config/apiConfig"
import {IDeck} from "../types/types"
import Preloader from "../components/Preloader"
import {useNavigate} from "react-router-dom"
import Title from "antd/es/typography/Title"
import {toast} from "react-toastify"

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
    const [api, contextHolder] = notification.useNotification()

    const openDeleteSuccessNotification = () => {
        api.open({
            message: "The deck has been deleted",
            duration: 2
        })
    }

    const renderActions = (id: string): ReactNode => {
        return (
            <Flex justify={'start'} gap={10}>
                <Button
                    className={'border-attention-hover'}
                    icon={<BulbOutlined/>}
                    type={"dashed"}
                    style={{
                        color: '#d19424'
                    }}
                />
                <Button
                    icon={<EditOutlined/>} type={"dashed"} />
                <Button
                    danger
                    icon={<DeleteOutlined />}
                    type={"dashed"}
                    style={{
                        color: '#860e0e',
                        borderColor: '#860e0e',
                    }}
                    onClick={() => {
                        setDeckToDeleteId(id)
                        setDeleteModal(true)
                    }}
                />
            </Flex>
        )
    }

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
            width: '116px',
            render: (text, record) => renderActions(record.id)
        }
    ]

    const [loading, setLoading] = useState<boolean>(true)
    const [decks, setDecks] = useState<IDecksTableRow[]>([])
    const [deleteModal, setDeleteModal] = useState<boolean | undefined>(false)
    const [deckToDeleteId, setDeckToDeleteId] = useState<string>('')

    const handleDeleteDeck = (): void => {
        req.delete(`${API_ENDPOINTS.decks}/${deckToDeleteId}`).then(() => {
            setDeleteModal(false)
            openDeleteSuccessNotification()
            setDecks(decks.filter(item => item.id !== deckToDeleteId))
            setDeckToDeleteId('')
        })
    }

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
            {contextHolder}
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
                        <Modal
                            open={deleteModal}
                            cancelButtonProps={{
                                size: 'large',
                                style: {
                                    width: "calc(50% - 4px)"
                                }
                            }}
                            cancelText={'Cancel'}
                            okButtonProps={{
                                danger: true,
                                size: 'large',
                                style: {
                                    width: "calc(50% - 4px)"
                                }
                            }}
                            okText={'Delete the deck'}
                            onCancel={() => {
                                setDeleteModal(false)
                            }}
                            onOk={() => {
                                handleDeleteDeck()
                            }}
                        >
                            <Title level={2}>
                                Are you sure you want to delete this deck?
                            </Title>
                        </Modal>
                    </div>
                )
            }
        </div>
    )
}

export default Dashboard