import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postPizza } from "../services/api.js";

export default function OrderForm() {
  const navigate = useNavigate();
  const [isim, setIsim] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const payload = { isim, boyut: "medium", malzemeler: ["Mantar"], ozel: "" };
    const res = await postPizza(payload);

    console.log("API Response:", res.data);
    navigate("/success");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        İsim:
        <input value={isim} onChange={(e) => setIsim(e.target.value)} />
      </label>

      <button type="submit">Sipariş Ver</button>
    </form>
  );
}
