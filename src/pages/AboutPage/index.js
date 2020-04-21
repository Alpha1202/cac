import React from "react";
import "./style/style.css";
import "./style/responsive.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
function About() {
  return (
    <div className="wrapper">
      <Header />
      <div className="about-container mt-5">
        <div className="about-left">
          <h1 className="mission">Our Mission:</h1>
          <h1>
            To empower more property owners to reach their full wealth
            potential.
          </h1>
        </div>
        <div className="about-right">
          <p>
            Buying property can be one of the most rewarding and lucrative
            investments you ever make. Real estate is a risky game even for the
            most seasoned investors, but when you're just starting out, the
            stakes are even higher. Regardless of your experience in realestate
            investment, however, it pays to have tools that help reduce your
            risk and optimize your return, Cacheisonesuchtool
          </p>

          <p>
            Itis believed that investing in property is for the rich, older,
            more financially free people, butitisn't. The starting point for
            anyone who wants to investin realestate is considering it, andif you
            want to finance your frst investment, youhavetostartsaving
            foritrightaway!
          </p>

          <p>
            Cache is an innovative digital platform that enables youte develop a
            saving culture and earn impressive interest..all towards investing
            in long term wealth - property.
          </p>

          <p>
            What's even better is we offer our users the opportunity to not only
            think of affordability, but to also think of collaboration. Users
            can come together to ‘save and co-own property and acquire an equal
            share in the investment. The only thing better than building long
            term wealth, is building a wealth circle,
          </p>

          <p>
            You save, You invest. You Profit and We deploy the best real estate
            tema to perfect yourtitle and doall theheavylifting or you.
          </p>

          <p>WelcometoCache!</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
