const styles = {
  headerStyle: {
    background: "#212529",
    height: "5rem",
  },
  headingStyle: {
    fontSize: "3rem",
    color: "white",
    // textAlign: "center",
  },
};

export default function Header() {
  return (
    <header style={styles.headerStyle} className="header">
      <h1 style={styles.headingStyle}>Heather Woolford</h1>
    </header>
  );
}
