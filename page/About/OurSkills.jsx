import React from 'react';
const OurSkills = () => {
  return (
    <div className="main">
      <section className="feature-tab-section ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-9 col-lg-8">
              <div className="section-heading-color text-center mb-5 mb-sm-5 mb-md-3 mb-lg-3">
                <h3>Our Skills</h3>
                <p>
                  We use our expertise to serve our clients at IT SHEBA. To use our
                  expertise to your advantage and help you succeed, feel free to
                  hire us.
                </p>
              </div>
            </div>
          </div>
          <table className="table-striped pt-50" width="100%" >
            <tbody>
              <tr>
                <th>
                  <strong>Platform</strong>
                </th>
                <th>
                  <strong>Environment</strong>
                </th>
              </tr>
              <tr>
                <td>Development Languages/ Tools</td>
                <td>
                  C#.Net, VB.Net, Visual Basic, Developer 2000, Java, J2EE, Crystal
                  Report
                </td>
              </tr>
              <tr>
                <td>Web Development Script/Tools</td>
                <td>ASP. Net, ASP, PHP, JSP, JavaScript, Dream Weaver</td>
              </tr>
              <tr>
                <td>CMS</td>
                <td>Joomla, WordPress, osCommerce, Drupal, Zencart, Magento</td>
              </tr>
              <tr>
                <td>RDBMS</td>
                <td>Oracle, MS SQL Server, MySql</td>
              </tr>
              <tr>
                <td>Web Servers</td>
                <td>Microsoft IIS, Lotus Domino Server, Apache</td>
              </tr>
              <tr>
                <td>Groupware  Document Management</td>
                <td>Microsoft SharePoint Services, Lotus Notes  Domino</td>
              </tr>
              <tr>
                <td>Operating System</td>
                <td>Windows, Linux, Unix</td>
              </tr>
              <tr>
                <td>Multimedia/Graphics</td>
                <td>
                  Macromedia- Director, Flash, AuthorWare, Adobe- Photoshop,
                  Illustrator, CorelDRAW
                </td>
              </tr>
              <tr>
                <td>Design Methodologies</td>
                <td>UML, RUP</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>

  );
}

export default OurSkills;
