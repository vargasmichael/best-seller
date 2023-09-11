import React from "react";
import ReactDom from "react-dom/client";

import "./index.css";

const Booklist = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://m.media-amazon.com/images/I/41d4KgoiJhL._SX311_BO1,204,203,200_.jpg"
    alt="Things We Left Behing"
  />
);
const Title = () => <h2>Things We Left Behind</h2>;
const Author = () => <h4>Lucy Score</h4>;

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<Booklist />);
