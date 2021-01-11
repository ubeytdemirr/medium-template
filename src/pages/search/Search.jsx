import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ArticleListItem from "../../components/ArticleListItem/ArticleListItem";

import './styles.scss'
import articles from '../home/articles.json'
import TagsList from '../../components/TagsList/TagsList';

export default class Search extends React.Component {
    state = {
        query: "",
        articles
    }

    queryDidChange = ({target}) => {
        let query = target.value.toLocaleLowerCase()
        this.setState({
            query,
            articles: query 
                ? this.state.articles.filter( article => article.headLine.toLocaleLowerCase().includes(query) ) 
                : articles
        })
    }

    render () {
        return <Container id="search-page">
            <Row>
                <Col xs={12} >
                    <input type="search" placeholder="Search..." value={this.state.query} onChange={this.queryDidChange}/>
                </Col>

                <Col xs={12} md={4} className="order-md-2">
                    <TagsList />
                </Col>
                <Col xs={12} md={8}>
                    {
                        this.state.articles.map( article => <ArticleListItem
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