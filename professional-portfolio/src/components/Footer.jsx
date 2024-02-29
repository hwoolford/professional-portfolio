const styles = {
    footerStyle: {
      background: "#219ebc",
      height: "1.5rem",
    },
    footerTextStyle: {
      fontSize: "1rem",
      color: "black",
    },
  };
  
  export default function Footer() {
    return (
      <footer style={styles.footerStyle} className="footer fixed-bottom">
        <h1 style={styles.footerTextStyle}>©Heather Woolford 2024</h1>
      </footer>
    );
  }