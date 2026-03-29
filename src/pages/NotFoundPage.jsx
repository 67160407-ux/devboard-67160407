import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "4rem auto",
        padding: "0 1rem",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "4rem", color: "#1e40af", margin: "0" }}>404</h1>
      <p style={{ color: "#718096", fontSize: "1.2rem", marginBottom: "2rem" }}>
        ไม่พบหน้าที่คุณต้องการ
      </p>
      <Link
        to="/"
        style={{
          display: "inline-block",
          background: "#e2e8f0",
          color: "#2d3748",
          textDecoration: "none",
          padding: "0.5rem 1rem",
          borderRadius: "6px",
          fontWeight: "bold",
        }}
      >
        ← กลับหน้าหลัก
      </Link>
    </div>
  );
}

export default NotFoundPage;
