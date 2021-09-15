import { Component } from "react";
import "./Article.css";

class Article extends Component {
  render() {
    return (
      <article className="article">
        <p className="article__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          enim lorem, faucibus vitae magna sed, euismod imperdiet elit. Donec
          consequat neque id pretium tempus. Aenean et odio maximus, efficitur
          ipsum ut, commodo massa. Ut massa diam, tincidunt facilisis lectus sit
          amet, pharetra blandit est. Nulla quis lacus eget nisl feugiat
          scelerisque nec at elit. Vestibulum consequat mi et interdum bibendum.
          Aliquam imperdiet ac turpis quis bibendum. Integer purus elit, cursus
          a luctus ornare, cursus ut purus. Vestibulum justo odio, sagittis vel
          enim at, hendrerit eleifend metus.{" "}
        </p>
      </article>
    );
  }
}

export default Article;
