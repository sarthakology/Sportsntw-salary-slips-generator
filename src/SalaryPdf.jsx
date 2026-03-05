import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image
} from "@react-pdf/renderer";
import signature from "./Sapna_mam_Digital_Signature.JPEG";

const PURPLE = "#5B2DAD";
const LIGHT = "#F3EEFB";

const styles = StyleSheet.create({

  page: {
    padding: 36,
    fontSize: 10,
    fontFamily: "Helvetica",
    color: "#111"
  },

  header: {
    fontSize: 20,
    color: PURPLE,
    fontFamily: "Helvetica-Bold",
    marginBottom: 4
  },

  company: {
    fontSize: 10,
    marginBottom: 16
  },

  sectionTitle: {
    fontFamily: "Helvetica-Bold",
    marginBottom: 6,
    color: PURPLE,
    fontSize: 11
  },

  box: {
    backgroundColor: LIGHT,
    padding: 10,
    borderRadius: 6,
    marginBottom: 14
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4
  },

  tableHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: PURPLE,
    color: "#fff",
    padding: 6,
    fontFamily: "Helvetica-Bold",
    marginTop: 6
  },

  tableRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 6,
    borderBottom: "1 solid #eee"
  },

  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 8,
    marginTop: 4,
    fontFamily: "Helvetica-Bold",
    fontSize: 11
  },

  wordsBox: {
    marginTop: 10,
    fontStyle: "italic"
  },

  signatureBox: {
    marginTop: 30
  },

  signatureImg: {
    width: 130,
    marginVertical: 6
  },

  footer: {
    position: "absolute",
    bottom: 25,
    left: 36,
    right: 36,
    borderTop: "1 solid #ddd",
    paddingTop: 6,
    textAlign: "center",
    fontSize: 9,
    color: "#555"
  }

});

export default function SalaryPdf({ employee, salaryData, netSalary }) {

  const base = Number(employee.baseSalary || 0);
  const reimbursement = Number(salaryData.reimbursement || 0);
  const tds = Number(salaryData.tds || 0);

  return (
    <Document>

      <Page size="A4" style={styles.page}>

        {/* HEADER */}

        <Text style={styles.header}>Salary Slip - <Text>{salaryData.month}</Text></Text>

        <Text style={styles.company}>
          SPORTSNTW PRIVATE LIMITED
        </Text>


        {/* EMPLOYEE DETAILS */}

        <View style={styles.box}>

          <Text style={styles.sectionTitle}>Employee Details</Text>

          <View style={styles.row}>
            <Text>Name</Text>
            <Text>{employee.name}</Text>
          </View>

          <View style={styles.row}>
            <Text>Designation</Text>
            <Text>{employee.designation}</Text>
          </View>

          <View style={styles.row}>
            <Text>Email</Text>
            <Text>{employee.email}</Text>
          </View>

          <View style={styles.row}>
            <Text>Phone</Text>
            <Text>{employee.phone}</Text>
          </View>

        </View>


        {/* BANK DETAILS */}

        <View style={styles.box}>

          <Text style={styles.sectionTitle}>Bank Details</Text>

          <View style={styles.row}>
            <Text>Bank Name</Text>
            <Text>{employee.bank.bankName}</Text>
          </View>

          <View style={styles.row}>
            <Text>Account Number</Text>
            <Text>{employee.bank.accountNumber}</Text>
          </View>

          <View style={styles.row}>
            <Text>IFSC Code</Text>
            <Text>{employee.bank.ifsc}</Text>
          </View>

        </View>


        {/* SALARY BREAKDOWN */}

        <Text style={styles.sectionTitle}>Salary Details</Text>

        <View style={styles.tableHeader}>
          <Text>Description</Text>
          <Text>Amount (INR)</Text>
        </View>

        <View style={styles.tableRow}>
          <Text>Base Salary</Text>
          <Text>Rs. {base.toLocaleString("en-IN")}</Text>
        </View>

        {reimbursement > 0 && (
        <View style={styles.tableRow}>
            <Text>Reimbursement</Text>
            <Text>Rs. {reimbursement.toLocaleString("en-IN")}</Text>
        </View>
        )}

        {tds > 0 && (
        <View style={styles.tableRow}>
            <Text>TDS Deduction</Text>
            <Text>Rs. {tds.toLocaleString("en-IN")}</Text>
        </View>
        )}

        <View style={styles.totalRow}>
          <Text>Net Salary Paid</Text>
          <Text>Rs. {netSalary.toLocaleString("en-IN")}</Text>
        </View>

        {/* PAYMENT DETAILS */}

        <View style={{ marginTop: 12 }}>

          <Text style={styles.sectionTitle}>Payment Details</Text>

          <View style={styles.row}>
            <Text>Payment Date</Text>
            <Text>{salaryData.paymentDate}</Text>
          </View>

          <View style={styles.row}>
            <Text>Transaction RRN</Text>
            <Text>{salaryData.rrn}</Text>
          </View>

        </View>


        {/* SIGNATURE */}

        <View style={styles.signatureBox}>

          <Image
            style={styles.signatureImg}
            src={signature}
          />
          <Text style={{ fontFamily: "Helvetica-Bold" }}>
            Sapna Ahluwalia
          </Text>

          <Text>
            Director - Legal & Compliances
          </Text>

          <Text>
            Sports NTW Pvt Ltd.
          </Text>

        </View>


        {/* FOOTER */}

        <View style={styles.footer} fixed>

          <Text>
            Unit No. 001, BPTP Park Centra, Gurugram 122001, INDIA
          </Text>

          <Text>
            www.sportsntw.com
          </Text>

        </View>

      </Page>

    </Document>
  );
}