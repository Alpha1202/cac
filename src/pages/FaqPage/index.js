import React, { Component } from "react";
import "./style/style.css";
import "./style/responsive.css";
import Question from "./QuestionComponent";
import Header from "../../components/Header";
import Tag from "./TagComponent";
import SearchBar from "./SearchBarComponent";
import Footer from "../../components/Footer";
export default class FaqPage extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="search-container">
          <SearchBar />
        </div>
        <div className="row buttom mt-5">
          <div className="col-md-2 faq-left">
            <div className="button-wapper">
              <Tag text="hello" />
              <Tag text="hello" />
              <Tag text="hello" />
              <Tag text="hello" />
              <Tag text="hello" />
            </div>
          </div>

          <div className="col-md-10 faq-right">
            <Question />
            <Question />
            <Question />
            <Question />
            <Question />
            <Question />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
