import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
import "../Styles/Card.css";
import "../Styles/HomePage.css";
// import "../Styles/Global.css";

function HomePage() {
  return (
    <div className="HomePage">
      <Header />
      <div className="card-container">
        <Card
          title="SHAHAB NAMA"
          description="“Shahabnama” is an Urdu autobiography by Qudrat Ullah Shahab, offering a detailed account of his life, the independence movement, and the history of Pakistan"
          image="Assets/Shahab nama.jpg"
        />
        <Card
          title="KHUSHBU"
          description="Parveen Shakir's first poetry collection, for which she was awarded the Adamjee Literary Award."
          image="Assets/Khushbu.jpg"
        />
        <Card
          title="ZAVIYA"
          description="'Zaviya' by Ishfaq Ahmed is a collection of insightful essays exploring human nature, spirituality, and life's deeper meanings."
          image="Assets/Zaviya.jpg"
        />
        <Card
          title="INDUS JOURNEY"
          description="'Indus Journey' by Imran Khan is a captivating travelogue that offers a personal and insightful exploration of Pakistan's diverse landscapes and rich cultural heritage"
          image="Assets/Imran.jpg"
        />
      </div>
      <br />
      <br />

      <Footer />
    </div>
  );
}

export default HomePage;
