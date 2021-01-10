import React from "react";
import ArticleItemDetails from "../ArticleItemDetails/ArticleItemDetails";
import "./styles.scss";
class ArticleListItem extends React.Component {
  render() {
    return (
      <div
        className={`w-100 d-flex  justify-content-between align-start  pb-4 ${
          this.props.articleImg === "top" && "flex-column-reverse"
        }`}
      >
        <ArticleItemDetails {...this.props} />
        {this.props.articleImg && (
          <a>
            <img
              className={
                this.props.articleImg === "top" ? "img-large" : "img-small"
              }
              src={this.props.article.cover}
            />
          </a>
        )}
      </div>
    );
  }
}

export default ArticleListItem;
