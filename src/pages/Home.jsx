import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ padding: 24 }}>
      <h1>Teknolojik Yemekler</h1>
      <p>Kod acıktırır, pizza doyurur.</p>

      <Link to="/order">
        <button>ACIKTIM</button>
      </Link>
    </div>
  );
}
