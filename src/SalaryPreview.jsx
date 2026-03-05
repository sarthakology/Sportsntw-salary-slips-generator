import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import SalaryPdf from "./SalaryPdf";

export default function SalaryPreview({
  employee,
  salaryData,
  netSalary,
  salaryWords
}) {

  const fileName = `${employee?.name || "salary-slip"}.pdf`;

  return (
    <div className="mt-10">

      <h2 className="text-lg font-semibold mb-3">
        Salary Slip Preview
      </h2>

      <div className="border h-[650px] mb-4">

        <PDFViewer width="100%" height="100%">
          <SalaryPdf
            employee={employee}
            salaryData={salaryData}
            netSalary={netSalary}
            salaryWords={salaryWords}
          />
        </PDFViewer>

      </div>

      <PDFDownloadLink
        document={
          <SalaryPdf
            employee={employee}
            salaryData={salaryData}
            netSalary={netSalary}
            salaryWords={salaryWords}
          />
        }
        fileName={fileName}
        className="bg-purple-600 text-white px-6 py-2 rounded"
      >
        Download PDF
      </PDFDownloadLink>

    </div>
  );
}