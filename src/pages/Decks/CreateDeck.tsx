import React from 'react'
import {
    Form,
    Input,
    Typography,
    Button,
    Flex,
    Space,
    Breadcrumb
} from "antd"
import {
    HomeOutlined
} from "@ant-design/icons"
import {useNavigate} from "react-router-dom"
import {req} from "../../utils/request"
import {API_ENDPOINTS} from "../../config/apiConfig"
import {toast} from "react-toastify"

const {
    Title,
    Text
} = Typography

const CreateDeck = () => {

    const navigate = useNavigate()
    const [form] = Form.useForm()

    const handleSubmit = (values: any) => {
        req.post(API_ENDPOINTS.decks, values).then(() => {
            toast.success("Deck has been created!")
            navigate('/dashboard')
        })
    }

    return (
        <div>
            <Breadcrumb
                separator={<Text style={{fontSize: '18px'}}>/</Text>}
                style={{
                    background: 'white',
                    borderRadius: '6px',
                    display: 'inline-block'
                }}
            >
                <Breadcrumb.Item>
                    <Button
                        type={"text"}
                        onClick={() => navigate('/home')}
                    >
                        <HomeOutlined/>
                    </Button>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <Button
                        type={"text"}
                        disabled
                        style={{
                            cursor: 'auto',
                            position: 'relative',
                            marginTop: '-1px'
                        }}
                    >
                        Create a new deck
                    </Button>
                </Breadcrumb.Item>
            </Breadcrumb>
            <Form
                form={form}
                onFinish={handleSubmit}
                layout={"vertical"}
                style={{
                    maxWidth: '600px',
                    marginTop: '30px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    gap: '20px'
                }}
            >
                <Space
                    size={10}
                    direction={"vertical"}
                    style={{width: '100%'}}
                >
                    <Title level={4}>Create a new deck</Title>
                    <Form.Item
                        label={"Deck name"}
                        name={"name"}
                        rules={[{ required: true }]}
                    >
                        <Input
                            size={'large'}
                        />
                    </Form.Item>
                    <Form.Item
                        label={"Deck description"}
                        name={'description'}
                        rules={[{ required: true }]}
                    >
                        <Input
                            size={'large'}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Flex justify={'end'}>
                            <Button
                                type={'primary'}
                                block
                                size={'large'}
                                htmlType="submit"
                            >
                                Create
                            </Button>
                        </Flex>
                    </Form.Item>
                </Space>
            </Form>
        </div>

    )
}

export default CreateDeck