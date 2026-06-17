const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

// ─── Embed new photo (maikol duran 1.png) as base64 ───────────────────
const imgPath = path.resolve(__dirname, '../public/assets/images/maikol duran 1.png');
const imgB64  = fs.readFileSync(imgPath).toString('base64');
const imgSrc  = 'data:image/png;base64,' + imgB64;

// ─── Complete CV HTML ──────────────────────────────────────────────────
const HTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<title>Armando Maikol Duran Salas – CV</title>
<style>
/* Calibri is a Windows system font – available in Puppeteer on Windows */
@font-face {
  font-family: 'Calibri';
  src: local('Calibri');
}

*, *::before, *::after { box-sizing: border-box; margin:0; padding:0; }

body {
  width: 210mm;
  font-family: 'Calibri', 'Segoe UI', Arial, sans-serif;
  font-size: 10pt;
  color: #222;
  background: #fff;
  -webkit-print-color-adjust: exact;
  print-color-adjust: exact;
}

/* ═══════════════════════ HEADER ═══════════════════════════════════════ */
.cv-header {
  display: flex;
  align-items: flex-end;
  gap: 18px;
  padding: 20px 28px 16px 18px;
  background: #fff;
  border-bottom: 1.5px solid #d9dde5;
}

.cv-photo {
  flex-shrink: 0;
  width: 160px;
  height: 160px;
  overflow: hidden;
  border-radius: 50%;
}
.cv-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
}

.cv-name-wrap { flex: 1; padding-bottom: 4px; }

.cv-name {
  font-family: 'Calibri', 'Segoe UI', Arial, sans-serif;
  font-size: 28pt;
  font-weight: 700;
  color: #1f3864;
  line-height: 1.0;
  letter-spacing: -0.3px;
}

.cv-title {
  font-family: 'Calibri', 'Segoe UI', Arial, sans-serif;
  font-size: 9.5pt;
  font-weight: 700;
  color: #595959;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  margin-top: 6px;
}

/* ═══════════════════════ LAYOUT ════════════════════════════════════════ */
.cv-layout { display: flex; }

/* ═══════════════════════ SIDEBAR ═══════════════════════════════════════ */
.cv-side {
  width: 185px;
  flex-shrink: 0;
  padding: 16px 13px 20px 16px;
  border-right: 1px solid #d9dde5;
}

.s-hd {
  font-family: 'Calibri', 'Segoe UI', Arial, sans-serif;
  font-size: 8pt;
  font-weight: 700;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  color: #111;
  border-bottom: 1.5px solid #111;
  padding-bottom: 2px;
  margin-bottom: 7px;
  margin-top: 16px;
}
.cv-side .s-hd:first-child { margin-top: 0; }

.about-p {
  font-family: 'Calibri', 'Segoe UI', Arial, sans-serif;
  font-size: 8.5pt;
  line-height: 1.45;
  color: #333;
}

/* personal detail rows */
.pd {
  display: flex;
  align-items: flex-start;
  gap: 6px;
  margin-bottom: 7px;
  font-size: 8.5pt;
  color: #222;
  line-height: 1.38;
}
.pd svg { flex-shrink:0; width:12px; height:12px; margin-top:2px; }
.pd span { word-break: break-all; }

/* ═══════════════════════ MAIN ══════════════════════════════════════════ */
.cv-main { flex:1; padding: 16px 20px 20px 20px; }

.m-hd {
  font-family: 'Calibri', 'Segoe UI', Arial, sans-serif;
  font-size: 9pt;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #111;
  border-bottom: 1.5px solid #111;
  padding-bottom: 2px;
  margin-bottom: 10px;
  margin-top: 16px;
}
.cv-main .m-hd:first-child { margin-top: 0; }

/* ── experience entry ── */
.xp {
  position: relative;
  padding-left: 17px;
  margin-bottom: 13px;
  page-break-inside: avoid;
  break-inside: avoid;
}
.xp::before {
  content: '';
  position: absolute;
  left: 0; top: 5px;
  width: 8px; height: 8px;
  border-radius: 50%;
  background: #1d6bbf;
}

.xp-co {
  font-size: 9pt;
  font-weight: 700;
  color: #1d6bbf;
  margin-bottom: 1px;
}

.xp-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 4px;
}
.xp-role {
  font-size: 9pt;
  font-weight: 700;
  color: #111;
  text-transform: uppercase;
  letter-spacing: 0.2px;
  flex: 1;
}
.xp-date {
  font-size: 8.5pt;
  color: #595959;
  white-space: nowrap;
  flex-shrink: 0;
}

/* bullet list */
ul.bl { list-style: none; margin-top: 3px; }
ul.bl li {
  font-size: 8.5pt;
  line-height: 1.42;
  color: #333;
  padding-left: 10px;
  position: relative;
  margin-bottom: 2px;
}
ul.bl li::before {
  content: '\u2022';
  position: absolute;
  left: 1px;
  color: #333;
}

/* ── education entry ── */
.edu {
  position: relative;
  padding-left: 17px;
  margin-bottom: 9px;
  page-break-inside: avoid;
  break-inside: avoid;
}
.edu::before {
  content: '';
  position: absolute;
  left: 0; top: 5px;
  width: 8px; height: 8px;
  border-radius: 50%;
  background: #1d6bbf;
}
.edu-inst {
  font-size: 8.5pt;
  font-weight: 700;
  color: #1d6bbf;
}
.edu-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}
.edu-deg {
  font-size: 8.5pt;
  font-weight: 700;
  color: #111;
  text-transform: uppercase;
  letter-spacing: 0.2px;
  flex: 1;
  padding-right: 5px;
}
.edu-dt {
  font-size: 8.5pt;
  color: #595959;
  white-space: nowrap;
}

/* ── skills table ── */
.sk-tbl {
  width: 100%;
  border-collapse: collapse;
  font-size: 8.5pt;
  color: #111;
  font-weight: bold;
}
.sk-tbl td {
  border: 0.75px solid #c5c8d0;
  padding: 5px 8px;
  line-height: 1.3;
  vertical-align: top;
  width: 33.33%;
}

/* ── languages / hobbies ── */
.g2 { display: grid; grid-template-columns: 1fr 1fr; border: 0.75px solid #c5c8d0; }
.g3 { display: grid; grid-template-columns: 1fr 1fr 1fr; border: 0.75px solid #c5c8d0; }
.gcell {
  font-size: 8.5pt;
  color: #111;
  font-weight: bold;
  padding: 5px 8px;
  border: 0.75px solid #c5c8d0;
  line-height: 1.35;
}

@page { size: A4; margin: 0; }
</style>
</head>
<body>

<!-- ══ HEADER ══════════════════════════════════════════════════════════ -->
<div class="cv-header">
  <div class="cv-photo">
    <img src="${imgSrc}" alt="Armando Maikol Duran Salas"/>
  </div>
  <div class="cv-name-wrap">
    <div class="cv-name">Armando Maikol Duran Salas</div>
    <div class="cv-title">Backend Developer &nbsp;|&nbsp; Mechatronic Engineer</div>
  </div>
</div>

<!-- ══ BODY ════════════════════════════════════════════════════════════ -->
<div class="cv-layout">

  <!-- ─── SIDEBAR ──────────────────────────────────────────────────── -->
  <div class="cv-side">

    <div class="s-hd">About Me</div>
    <p class="about-p">Dynamic and analytical Junior Backend Developer and Mechatronic Engineer with strong experience in developing projects using Python, JavaScript, React, C#, and Node.js. Skilled in front-end technologies such as HTML/CSS and database management with MySQL and PostgreSQL. Experienced in agile environments (Scrum), familiar with version control using Git/GitHub, and active participant in sprint ceremonies. Known for adaptability, structured thinking, and problem-solving aptitude to deliver efficient software solutions.</p>

    <div class="s-hd">Personal Details</div>

    <div class="pd">
      <svg viewBox="0 0 24 24" fill="none" stroke="#1d6bbf" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
        <circle cx="12" cy="9" r="2.5"/>
      </svg>
      <span>Barranquilla, Colombia</span>
    </div>
    <div class="pd">
      <svg viewBox="0 0 24 24" fill="none" stroke="#1d6bbf" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <polyline points="2,4 12,13 22,4"/>
      </svg>
      <span>maikold774@gmail.com</span>
    </div>
    <div class="pd">
      <svg viewBox="0 0 24 24" fill="none" stroke="#1d6bbf" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.81a19.79 19.79 0 01-3.07-8.66A2 2 0 012.18 0h3a2 2 0 012 1.72 17.8 17.8 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.66-.66a2 2 0 012.11-.45 17.8 17.8 0 002.81.7A2 2 0 0122 14.92z"/>
      </svg>
      <span>+57 3011822597</span>
    </div>
    <div class="pd">
      <svg viewBox="0 0 24 24" fill="none" stroke="#1d6bbf" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
      </svg>
      <span><a href="https://portafolio-armando-duran.vercel.app" style="color: inherit; text-decoration: none;">portafolio-armando-duran.vercel.app</a></span>
    </div>
    <div class="pd">
      <svg viewBox="0 0 24 24" fill="#1d6bbf">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
      <span><a href="https://www.linkedin.com/in/maikol-duran/" style="color: inherit; text-decoration: none;">https://www.linkedin.com/in/maikol-duran/</a></span>
    </div>

  </div>

  <!-- ─── MAIN ──────────────────────────────────────────────────────── -->
  <div class="cv-main">

    <div class="m-hd">Experience</div>

    <!-- Riwi — San Vicente Hospital -->
    <div class="xp">
      <div class="xp-co">Riwi</div>
      <div class="xp-row">
        <div class="xp-role">Academic Project – San Vicente Hospital</div>
        <div class="xp-date">September 2025</div>
      </div>
      <ul class="bl">
        <li>Developed a console application in .NET 8 to optimize medical appointment management, replacing an error-prone manual system.</li>
        <li>Built a complete CRUD system for managing Patients, Doctors, and Appointments entities.</li>
        <li>Implemented a clean architecture separating responsibilities: business logic in a Service Layer and data access through the Repository Pattern.</li>
        <li>Integrated automatic appointment confirmation emails to patients using System.Net.Mail.</li>
        <li>Applied Object-Oriented Programming principles and data validations to maintain system integrity.</li>
        <li>Tech stack: C#, .NET 8, OOP.</li>
        <li>Tools: Git, GitHub, .NET CLI, Visual Studio / VS Code.</li>
        <li>Repository: https://github.com/THEMAIK17/SanVicenteHospital.git</li>
      </ul>
    </div>

    <!-- Riwi — Firmness -->
    <div class="xp">
      <div class="xp-co">Riwi</div>
      <div class="xp-row">
        <div class="xp-role">Firmness – Sales and Rental Management System</div>
        <div class="xp-date">November 2025</div>
      </div>
      <ul class="bl">
        <li>Developed a robust full-stack solution for construction machinery rental, utilizing Clean Architecture and DDD to ensure scalability and maintainability.</li>
        <li>Implemented a secure RESTful API with .NET 8 and JWT authentication, alongside a React 18 frontend and a server-side rendered administrative panel.</li>
        <li>Engineered complex features including automated PDF document generation, SMTP email notifications, and an intelligent Excel-based mass import system with data normalization.</li>
        <li>Orchestrated a microservices-like infrastructure using Docker Compose to manage 4 distinct services, including a &ldquo;Quality Gate&rdquo; pipeline with automated unit testing via xUnit and Moq.</li>
        <li>Integrated and managed MySQL database hosted on Clever Cloud, with npm scripts for seeding, cleaning, and dropping tables.</li>
        <li>Tech stack: NET 8 (C#), React 18 (Vite), Entity Framework Core, PostgreSQL, Bootstrap 5.</li>
        <li>Tools: Git, GitHub, Docker, Docker Compose, Rider.</li>
        <li>Repository: https://github.com/THEMAIK17/Firmness</li>
      </ul>
    </div>

    <!-- Riwi — Management Platform -->
    <div class="xp">
      <div class="xp-co">Riwi</div>
      <div class="xp-row">
        <div class="xp-role">Management Platform – Technical Assessment</div>
        <div class="xp-date">March 2026</div>
      </div>
      <ul class="bl">
        <li>Built a project and task management system following Clean Architecture principles with .NET 8 and PostgreSQL.</li>
        <li>Designed a secure API architecture featuring JWT Bearer token authentication and comprehensive CRUD operations for project and task life-cycle management.</li>
        <li>Improved system reliability by implementing a suite of unit tests with xUnit and Moq, validating critical business logic such as project activation and task reordering.</li>
        <li>Streamlined development and deployment by implementing Docker containerization and automated database migrations on startup.</li>
        <li>Tech stack: .NET 8 (C#), Entity Framework Core, PostgreSQL, ASP.NET Core MVC (Razor Views).</li>
        <li>Tools: Git, GitHub, Docker, xUnit, Moq, Rider.</li>
        <li>Repository: https://github.com/THEMAIK17/management_platform</li>
      </ul>
    </div>

    <!-- Smart Fit -->
    <div class="xp">
      <div class="xp-co">Smart Fit</div>
      <div class="xp-row">
        <div class="xp-role">Maintenance Technician</div>
        <div class="xp-date">August 2024 – March 2025</div>
      </div>
      <ul class="bl">
        <li>Diagnosed, repaired, and performed preventive maintenance on electromechanical equipment.</li>
        <li>Ensured operational continuity by systematically resolving faults and managing technical protocols.</li>
        <li>Developed strong diagnostic and troubleshooting skills analogous to software debugging.</li>
        <li>Learned the value of proactive preventive maintenance comparable to QA testing and clean code practices.</li>
        <li>Tech stack: Electromechanical Systems, Control Circuits, Technical Blueprint Reading.</li>
        <li>Tools: Diagnostic instruments.</li>
      </ul>
    </div>

    <!-- CSP de Colombia Ltda. -->
    <div class="xp">
      <div class="xp-co">CSP de Colombia Ltda.</div>
      <div class="xp-row">
        <div class="xp-role">Hydrotester Operator</div>
        <div class="xp-date">September 2022 – August 2024</div>
      </div>
      <ul class="bl">
        <li>Executed hydrostatic pressure tests to verify pipeline integrity and safety for the oil industry.</li>
        <li>Ensured strict compliance with quality protocols and technical regulations.</li>
        <li>Developed exceptional attention to detail analogous to software testing and quality assurance.</li>
        <li>Gained discipline in documenting rigorous operating procedures, essential for version control and reliable code delivery.</li>
        <li>Tech stack: Hydrostatic Testing Equipment, Data Interpretation.</li>
        <li>Tools: Precision manometers, Control valves, Data recording software.</li>
      </ul>
    </div>

    <!-- EDUCATION -->
    <div class="m-hd">Education</div>

    <div class="edu">
      <div class="edu-inst">Riwi, Barranquilla, Colombia</div>
      <div class="edu-row">
        <div class="edu-deg">Junior Developer</div>
        <div class="edu-dt">March 2025 – June 2026</div>
      </div>
    </div>
    <div class="edu">
      <div class="edu-inst">SENA, Barranquilla, Colombia</div>
      <div class="edu-row">
        <div class="edu-deg">Software Developer (In Progress)</div>
        <div class="edu-dt">November 2025 – Present</div>
      </div>
    </div>
    <div class="edu">
      <div class="edu-inst">Institución Universitaria De Barranquilla, Barranquilla, Colombia</div>
      <div class="edu-row">
        <div class="edu-deg">Mechatronic Engineer</div>
        <div class="edu-dt">March 2023 – March 2025</div>
      </div>
    </div>
    <div class="edu">
      <div class="edu-inst">Institución Universitaria De Barranquilla, Barranquilla, Colombia</div>
      <div class="edu-row">
        <div class="edu-deg">Technology in Electromechanical Systems Management</div>
        <div class="edu-dt">August 2021 – March 2023</div>
      </div>
    </div>
    <div class="edu">
      <div class="edu-inst">Institución Universitaria De Barranquilla, Barranquilla, Colombia</div>
      <div class="edu-row">
        <div class="edu-deg">Professional Technician in Electromechanical Maintenance</div>
        <div class="edu-dt">January 2019 – July 2021</div>
      </div>
    </div>
    <div class="edu">
      <div class="edu-inst">Institución Educativa Distrital Inocencio Chinca</div>
      <div class="edu-row">
        <div class="edu-deg">High School Diploma</div>
        <div class="edu-dt">Completed December 2018</div>
      </div>
    </div>

    <!-- SKILLS -->
    <div class="m-hd">Skills</div>
    <table class="sk-tbl">
      <tr>
        <td>Technical Documentation</td>
        <td>Preventive Maintenance</td>
        <td>Troubleshooting and Debugging</td>
      </tr>
      <tr>
        <td>Session and Authentication Management</td>
        <td>Frontend Routing</td>
        <td>OOP Principles</td>
      </tr>
      <tr>
        <td>RESTful Services</td>
        <td>API Development</td>
        <td>Scrum / Agile Methodologies (Basic)</td>
      </tr>
      <tr>
        <td>Git / GitHub (Basic)</td>
        <td>PostgreSQL (Familiar)</td>
        <td>MySQL (Intermediate)</td>
      </tr>
      <tr>
        <td>CSS (Intermediate)</td>
        <td>HTML (Intermediate)</td>
        <td>React (Intermediate)</td>
      </tr>
      <tr>
        <td>Node.js (Intermediate)</td>
        <td>C# / .NET (Intermediate)</td>
        <td>JavaScript (Intermediate)</td>
      </tr>
      <tr>
        <td>Python (Intermediate)</td>
        <td></td>
        <td></td>
      </tr>
    </table>

    <!-- LANGUAGES -->
    <div class="m-hd">Languages</div>
    <div class="g2">
      <div class="gcell">English (A2/B1 – Actively improving)</div>
      <div class="gcell">Spanish (Native)</div>
    </div>

    <!-- HOBBIES -->
    <div class="m-hd">Hobbies</div>
    <div class="g3">
      <div class="gcell">Continuous learning</div>
      <div class="gcell">Tech exploration</div>
      <div class="gcell">Video game development / enthusiast</div>
    </div>

  </div><!-- /cv-main -->
</div><!-- /cv-layout -->
</body>
</html>`;

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--font-render-hinting=none']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 794, height: 1123 });
  await page.setContent(HTML, { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 2000));

  const outPDF = path.resolve(__dirname, '../public/assets/downloads/CV_Armando_Maikol_Duran.pdf');
  await page.pdf({
    path: outPDF,
    format: 'A4',
    printBackground: true,
    margin: { top: '0mm', right: '0mm', bottom: '0mm', left: '0mm' }
  });

  // Also take a preview screenshot
  const outPNG = path.resolve(__dirname, 'cv_preview.png');
  await page.screenshot({ path: outPNG, fullPage: true });

  await browser.close();
  console.log('PDF saved to:', outPDF);
  console.log('Preview PNG saved to:', outPNG);
})();
