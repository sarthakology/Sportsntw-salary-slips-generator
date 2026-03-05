import { useState } from "react";
import employees from "./employees.json";
import SalaryPreview from "./SalaryPreview";

export default function SalaryForm() {

  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const [salaryData, setSalaryData] = useState({
    paymentDate: "",
    month: "",
    rrn: "",
    baseSalary: "",
    tds: 0,
    reimbursement: 0
  });

  const months = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];

  const handleEmployeeSelect = (emp) => {
    setSelectedEmployee(emp);
  };

  const handleChange = (key, val) => {
    setSalaryData({ ...salaryData, [key]: val });
  };

  const base = Number(salaryData.baseSalary || 0);
  const tds = Number(salaryData.tds || 0);
  const reimbursement = Number(salaryData.reimbursement || 0);

  const netSalary = base + reimbursement - tds;

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="max-w-6xl mx-auto bg-white p-6 rounded shadow">

        <h1 className="text-2xl font-semibold mb-6">
          Salary Slip Generator
        </h1>

        {/* EMPLOYEE SELECT */}
        <div className="mb-6">

          <h2 className="font-semibold mb-2">Select Employee</h2>

          {employees.map(emp => (
            <label key={emp.id} className="block mb-2">

              <input
                type="radio"
                name="employee"
                onChange={() => handleEmployeeSelect(emp)}
              />

              <span className="ml-2">
                {emp.name} — {emp.designation}
              </span>

            </label>
          ))}

        </div>

        {/* PAYMENT DETAILS */}
        <div className="grid grid-cols-3 gap-4 mb-6">

          {/* Month */}
          <select
            className="border p-2 rounded"
            value={salaryData.month}
            onChange={(e) => handleChange("month", e.target.value)}
          >
            <option value="">Select Month</option>

            {months.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}

          </select>

          {/* Payment Date */}
          <input
            type="date"
            className="border p-2 rounded"
            onChange={(e) => handleChange("paymentDate", e.target.value)}
          />

          {/* Transaction Number */}
          <input
            className="border p-2 rounded"
            placeholder="RRN / Transaction Number"
            onChange={(e) => handleChange("rrn", e.target.value)}
          />

          {/* Base Salary */}
          <input
            className="border p-2 rounded"
            placeholder="Base Salary"
            onChange={(e) => handleChange("baseSalary", e.target.value)}
          />

          {/* TDS */}
          <input
            className="border p-2 rounded"
            placeholder="TDS Deduction"
            onChange={(e) => handleChange("tds", e.target.value)}
          />

          {/* Reimbursement */}
          <input
            className="border p-2 rounded"
            placeholder="Salary Reimbursement"
            onChange={(e) => handleChange("reimbursement", e.target.value)}
          />

        </div>

        {/* PREVIEW */}
        {selectedEmployee && (
          <SalaryPreview
            employee={selectedEmployee}
            salaryData={salaryData}
            netSalary={netSalary}
          />
        )}

      </div>

    </div>
  );
}