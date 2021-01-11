import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ArticleListItem from "../../components/ArticleListItem/ArticleListItem";

import './styles.scss'
import articles from '../home/articles.json'

export default class Search extends React.Component {
    render () {
        return <Container id="search-page">
            <Row>
                <Col xs={12} md={4} className="order-md-1">
                    Insert tags component here
                </Col>
                <Col xs={12} md={8}>
                    <input type="search" placeholder="Search..." />
                    {
                        articles.map( article => <ArticleListItem
                            article={article}
                            articleImg={"top"}
                            headingFont={"large"}
                            subheading
                            />)
                    }
                </Col>
            </Row>
        </Container>
    }
}