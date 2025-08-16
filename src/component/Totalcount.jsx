import React from "react";
import Contactservice from "../services/HRpanelservice";

export default class Total extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalCount: 0,
    };
  }

  componentDidMount() {
    Contactservice.Totalcountuserapply()
      .then((res) => {
        this.setState({ totalCount: res.data.count });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    return (
      <div
        style={{
          background: "linear-gradient(135deg, #cb1181ff 0%, #2575fc 100%)",
          color: "white",
          padding: "20px",
          borderRadius: "12px",
          textAlign: "center",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          width: "250px",
          margin: "70px auto",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>
          Total Applications
        </h3>
        <p style={{ fontSize: "32px", fontWeight: "bold", margin: "0" }}>
          {this.state.totalCount}
        </p>
      </div>
    );
  }
}
