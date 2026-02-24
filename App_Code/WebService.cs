using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Mail;
using System.Web;
using System.Web.Services;

/// <summary>
/// Summary description for WebService
/// </summary>
[WebService(Namespace = "http://tempuri.org/")]
[WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
// To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
// [System.Web.Script.Services.ScriptService]
[System.ComponentModel.ToolboxItem(false)]
// To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
[System.Web.Script.Services.ScriptService]
public class WebService : System.Web.Services.WebService
{
    [WebMethod]
    public bool SentMailfromContactPage(User user)
    {
        ServicePointManager.SecurityProtocol = (SecurityProtocolType)768 | (SecurityProtocolType)3072;
        try
        {
            SmtpClient smtp = new SmtpClient();
            MailMessage msg = new MailMessage();

            string mess = "<html xmlns='https://www.w3.org/1999/xhtml'><body><table style='color: Gray; border: 5px solid #c8e5f6; width: 630px' cellpadding='4' cellspacing='1'><tr> <td style='padding-left: 15px' colspan='2'><h3> Contact Information " +
        "</h3> </td><td></td></tr><tr></tr><tr> <td></td> <td style='padding-left: 15px'></td></tr><tr><td style='width:80px'>Full Name</td><td style='padding-left: 15px'>" + user.Name + "</td> </tr><tr><td style='width:80px'>Email Id</td><td style='padding-left: 15px'>" + user.EmailID + @"
            </td>
        </tr>
          <tr><td style='width:80px'>Phone No</td><td style='padding-left: 15px'>" + user.Phone + @"
            </td>
        </tr>
            <tr><td style='width:80px'>Course</td><td style='padding-left: 15px'>" + user.Course + @"
            </td>
        </tr>
          <tr><td style='width:80px'>Country</td><td style='padding-left: 15px'>" + user.Country + @"
            </td>
        </tr>
        <tr><td style='width:80px'>Message</td><td style='padding-left: 15px'>" + user.Comment + "</td> </tr></table></body></html>";

            System.Net.Mail.AlternateView plainview = System.Net.Mail.AlternateView.CreateAlternateViewFromString(System.Text.RegularExpressions.Regex.Replace(mess, @"<(.|\n) *?>", string.Empty), null, "text/plain");
            System.Net.Mail.AlternateView htmlview = System.Net.Mail.AlternateView.CreateAlternateViewFromString(mess, null, "text/html");
            msg.AlternateViews.Add(plainview);
            msg.AlternateViews.Add(htmlview);
            msg.IsBodyHtml = true;
            msg.From = new MailAddress("no-reply@trainotracksolutions.com");
            if (user.Course == "TOEFL Exam Voucher" || user.Course == "PTE Exam Voucher" || user.Course == "Gre Exam Voucher" || user.Course == "Duolingo Exam Voucher" || user.Course == "PSI Exam Voucher"  || user.Course == "PTE" || user.Course == "GRE" || user.Course == "TOEFL" || user.Course == "Duolingo" || user.Course == "PSI SELT UKVI")
            {
                msg.To.Add("info@trainotracksolutions.com");
                msg.Bcc.Add("navita@trainotracksolutions.com");
				msg.Bcc.Add("arun@trainotracksolutions.com");
                msg.Bcc.Add("sonal.trainotrack@gmail.com");
            }
            else
            {
                msg.To.Add("info@trainotracksolutions.com");
                msg.Bcc.Add("narinder@trainotracksolutions.com");
                msg.Bcc.Add("arun@trainotracksolutions.com");
                msg.Bcc.Add("sonal.trainotrack@gmail.com");
            }
            msg.Subject = "Contact Information";
            msg.Body = mess;
            smtp.Host = "smtp.office365.com";
            smtp.Credentials = new System.Net.NetworkCredential("no-reply@trainotracksolutions.com", "Arun@123");
            smtp.EnableSsl = true;
            smtp.Port = 587;
            smtp.Send(msg);
            //smtp.Host = "smtp.office365.com";
            //smtp.UseDefaultCredentials = false;
            //smtp.Credentials = new System.Net.NetworkCredential("no-reply@trainotracksolutions.com", "Arun@123");
            //smtp.EnableSsl = true;
            //smtp.Port = 587;
            //smtp.Send(msg);
            return true;
        }
        catch (Exception ex)
        {
            return false;
        }
    }

    [WebMethod]
    public bool SentMailfromContactPage1(User user)
    {
        ServicePointManager.SecurityProtocol = (SecurityProtocolType)768 | (SecurityProtocolType)3072;
        try
        {
            SmtpClient smtp = new SmtpClient();
            MailMessage msg = new MailMessage();

            string mess = "<html xmlns='https://www.w3.org/1999/xhtml'><body><table style='color: Gray; border: 5px solid #c8e5f6; width: 630px' cellpadding='4' cellspacing='1'><tr> <td style='padding-left: 15px' colspan='2'><h3> Contact Information " +
        "</h3> </td><td></td></tr><tr></tr><tr> <td></td> <td style='padding-left: 15px'></td></tr><tr><td style='width:80px'>Full Name</td><td style='padding-left: 15px'>" + user.Name + "</td> </tr><tr><td style='width:80px'>Email Id</td><td style='padding-left: 15px'>" + user.EmailID + @"
            </td>
        </tr>
            <tr><td style='width:80px'>Phone No</td><td style='padding-left: 15px'>" + user.Phone + @"
            </td>
        </tr>
         <tr><td style='width:80px'>Course</td><td style='padding-left: 15px'>" + user.Course + @"
            </td>
        </tr>
             <tr><td style='width:80px'>Country</td><td style='padding-left: 15px'>" + user.Country + @"
            </td>
        </tr>
            <tr><td style='width:80px'>Subject</td><td style='padding-left: 15px'>" + user.Subject + @"
            </td>
        </tr>
        <tr><td style='width:80px'>Message</td><td style='padding-left: 15px'>" + user.Comment + "</td> </tr></table></body></html>";

            System.Net.Mail.AlternateView plainview = System.Net.Mail.AlternateView.CreateAlternateViewFromString(System.Text.RegularExpressions.Regex.Replace(mess, @"<(.|\n) *?>", string.Empty), null, "text/plain");
            System.Net.Mail.AlternateView htmlview = System.Net.Mail.AlternateView.CreateAlternateViewFromString(mess, null, "text/html");
            msg.AlternateViews.Add(plainview);
            msg.AlternateViews.Add(htmlview);
            msg.IsBodyHtml = true;
            msg.From = new MailAddress("no-reply@trainotracksolutions.com");
            if (user.Course == "TOEFL Exam Voucher" || user.Course == "PTE Exam Voucher" || user.Course == "Gre Exam Voucher" || user.Course == "Duolingo Exam Voucher" || user.Course == "PSI Exam Voucher")
            {
                msg.To.Add("info@trainotracksolutions.com");
                msg.Bcc.Add("navita@trainotracksolutions.com");
				msg.Bcc.Add("arun@trainotracksolutions.com");
                msg.Bcc.Add("sonal.trainotrack@gmail.com");
            }
            else
            {
                msg.To.Add("info@trainotracksolutions.com");
                msg.Bcc.Add("narinder@trainotracksolutions.com");
                msg.Bcc.Add("arun@trainotracksolutions.com");
                msg.Bcc.Add("sonal.trainotrack@gmail.com");
            }
            msg.Subject = "Contact Information";
            msg.Body = mess;
            smtp.Host = "smtp.office365.com";
            smtp.Credentials = new System.Net.NetworkCredential("no-reply@trainotracksolutions.com", "Arun@123");
            smtp.EnableSsl = true;
            smtp.Port = 587;
            smtp.Send(msg);
            return true;
        }
        catch (Exception ex)
        {
            return false;
        }
    }
    public class User
    {
        public string Name { get; set; }
        public string Course { get; set; }
        public string EmailID { get; set; }
        public string Phone { get; set; }
        public string Subject { get; set; }
        public string Comment { get; set; }
        public string Title { get; set; }
        public string Country { get; set; }
    }

}
