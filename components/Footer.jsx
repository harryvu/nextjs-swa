import React from "react"

const Footer = () => {
  return (
    <footer className="grid grid-cols-1 gap-4 w-full md:grid md:grid-cols-2 bg-orange-50 p-4">
      <div>
        <table className="border-separate border-spacing-1">
            <thead>
                <tr>
                <th>
                    Contact
                </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>Address:</td>
                <td>Unit 2/71A Milperra Road Revesby NSW 2212.</td>
                </tr>
                <tr>
                <td>Hot line (English):</td>
                <td className="font-bold m-2">
                    <em>0499 368 369</em>
                </td>
                </tr>
                <tr>
                <td>Hot line (Chinese):</td>
                <td className="font-bold m-2">
                    <em>0415 838 888</em>
                </td>
                </tr>
                <tr>
                <td>Telephone:</td>
                <td className="font-bold m-2">
                    <em>02 8710 8098</em>
                </td>
                </tr>
                <tr>
                <td>Fax:</td>
                <td className="font-bold m-2">
                    <em>02 8710 4140</em>
                </td>
                </tr>
                <tr>
                <td>Email:</td>
                <td>
                    <em>info@lfsglobal.com.au</em>
                    <br />
                    <em>sales@lfsglobal.com.au</em>
                </td>
                </tr>
            </tbody>
        </table>
      </div>   
      <div>
      <table>
          <thead>
            <tr>
              <th>
                Opening Hours
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Monday - Friday:</td>
              <td>
                <em>8:00am - 5:30pm</em>
              </td>
            </tr>
            <tr>
              <td>Saturday - Sunday:</td>
              <td>Closed</td>
            </tr>
            <tr>
              <td>Public Holidays:</td>
              <td>Closed</td>
            </tr>
          </tbody>
        </table>
      </div>
    </footer>
  )
}

export default Footer