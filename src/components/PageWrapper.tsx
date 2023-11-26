import React, {FC} from 'react'
import {
    Layout,
    theme,
    Flex
} from "antd"

const {
    Header,
    Content,
    Footer
} = Layout

const {
    useToken
} = theme

interface IPageWrapperProps {
    children: React.ReactNode
}

const PageWrapper: FC<IPageWrapperProps> = (props) => {

    const {
        children
    } = props

    const {token} = useToken()

    return (
        <Layout>
            <Header
                style={{
                    color: 'white',
                    fontWeight: 300,
                    fontSize: '24px',
                    fontStyle: 'italic'
                }}
            >
                Polyglot
            </Header>
            <Content
                style={{
                    height: 'calc(100vh - 112px)',
                    paddingLeft: '50px',
                    paddingRight: '50px',
                    overflowY: 'auto',
                    paddingTop: '50px',
                    paddingBottom: '30px'
                }}
            >
                {children}
            </Content>
            <Footer
                style={{
                    textAlign: 'right',
                    height: '48px',
                    paddingTop: '10px',
                    paddingBottom: '10px',
                    background: '#eeeeee'
                }}
            >
                <Flex
                    justify={'flex-end'}
                    align={'center'}
                    style={{
                        height: '100%'
                    }}
                >
                    by Andrey Skorodumov
                </Flex>
            </Footer>
        </Layout>
    )
}

export default PageWrapper