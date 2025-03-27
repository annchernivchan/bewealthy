const Header: React.FC = () => {
  return (
    <div
      style={{
        background: "#347deb",
        fontSize: "27px",
        padding: "1.7%",
        width: "96.6%",
        fontFamily: "arial",
      }}
    >
      <span>Bewealthy</span>
      <button
        style={{
          color: "white",
          border: "1px solid black",
          borderRadius: "5px",
          padding: "0.5%",
          background: "#347deb",
          float: "right",
          fontFamily: "arial",
          fontSize: "18px",
          cursor: "pointer",
          marginRight: "1%",
        }}
      >
        Sign up
      </button>
      <button
        style={{
          color: "white",
          border: "1px solid black",
          borderRadius: "5px",
          padding: "0.5%",
          background: "#347deb",
          float: "right",
          fontFamily: "arial",
          fontSize: "18px",
          cursor: "pointer",
          marginRight: "1%",
        }}
      >
        Sign in
      </button>
    </div>
  );
};

export default Header;
