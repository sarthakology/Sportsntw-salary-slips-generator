import { BrowserRouter, Routes, Route } from "react-router-dom";
import SalaryForm from "./SalaryForm";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SalaryForm />} />
      </Routes>
    </BrowserRouter>
  );
}
