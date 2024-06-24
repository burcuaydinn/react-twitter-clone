import React from "react";
import Container from "../layout/Container";
import Sidebar from "../layout/Sidebar";
import Content from "../layout/Content";
import Rightbar from "../layout/Rightbar";

function Home() {
  return (
    <div className="bg-custom-dark">
      <Container>
        <Sidebar />
        <Content />
        <Rightbar />
      </Container>
    </div>
  );
}

export default Home;
