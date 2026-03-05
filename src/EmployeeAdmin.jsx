import { useState } from "react";

export default function EmployeeRegister() {

  const [form, setForm] = useState({
    name: "",
    designation: "",
    phone: "",
    email: "",
    bankName: "",
    accountNumber: "",
    ifsc: ""
  });

  const handleChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const handleSubmit = () => {
    console.log("Employee Data:", form);

    alert("Details submitted successfully");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">

        <h1 className="text-xl font-semibold mb-6">
          Employee Bank Details
        </h1>

        <div className="grid gap-4">

          <input
            className="border p-2 rounded"
            placeholder="Full Name"
            onChange={(e)=>handleChange("name",e.target.value)}
          />

          <input
            className="border p-2 rounded"
            placeholder="Designation"
            onChange={(e)=>handleChange("designation",e.target.value)}
          />

          <input
            className="border p-2 rounded"
            placeholder="Phone Number"
            onChange={(e)=>handleChange("phone",e.target.value)}
          />

          <input
            className="border p-2 rounded"
            placeholder="Email"
            onChange={(e)=>handleChange("email",e.target.value)}
          />

          <input
            className="border p-2 rounded"
            placeholder="Bank Name"
            onChange={(e)=>handleChange("bankName",e.target.value)}
          />

          <input
            className="border p-2 rounded"
            placeholder="Account Number"
            onChange={(e)=>handleChange("accountNumber",e.target.value)}
          />

          <input
            className="border p-2 rounded"
            placeholder="IFSC Code"
            onChange={(e)=>handleChange("ifsc",e.target.value)}
          />

          <button
            onClick={handleSubmit}
            className="bg-purple-600 text-white py-2 rounded"
          >
            Submit Details
          </button>

        </div>

      </div>

    </div>
  );
}