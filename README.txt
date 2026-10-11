MASHHOOD PORTFOLIO WEBSITE - QUICK GUIDE

ADMIN LOGIN (for testing)
  Address:  yourwebsite.com/admin/
  Username: admin
  Password: Admin@123
  CHANGE THIS BEFORE THE WEBSITE GOES LIVE (Admin > Security).

HOW TO UPLOAD TO YOUR HOSTING (cPanel, the most common type)
1. Log in to your hosting account and open "File Manager".
2. Open the folder called public_html (this is your website's main folder).
3. Click Upload and choose mashhood-portfolio.zip.
4. When it finishes, right-click the zip in File Manager and choose Extract.
5. Open the extracted "portfolio" folder, select everything inside it
   (index.html, admin, css, js, data, uploads ...), and Move it up into public_html.
   Make sure index.html sits directly inside public_html. Tick "show hidden files" first
   so the .htaccess files move too.
6. Right-click the folders "data", "uploads" and "admin" > Change Permissions > set 755.
   If saving or uploading fails later, set them to 775.
7. Visit yourwebsite.com to see the site and yourwebsite.com/admin/ to log in.

Your hosting must support PHP (nearly all shared hosting does). Use HTTPS (free SSL in cPanel).

FIRST LOGIN
1. Log in with admin / Admin@123.
2. Click "Security" in the left menu.
3. Type the current password (Admin@123), choose a new username (optional) and a new
   password of at least 8 characters, repeat it, then press "Change password".
