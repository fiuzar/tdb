'use server'

import { query } from "@/dbh"
import nodemailer from "nodemailer"

const htmlWelcome = (fullName) => `
  <html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; color:#111; line-height:1.5; margin:0; padding:24px; background:#f7fafc;}
      .card { background:#fff; border-radius:8px; padding:24px; box-shadow:0 4px 20px rgba(17,24,39,0.06); max-width:680px; margin:20px auto;}
      h1 { margin:0 0 8px; font-size:20px; color:#0f172a; }
      p { margin:12px 0; color:#334155; }
      .cta { display:inline-block; padding:10px 16px; background:#0ea5a4; color:#fff; border-radius:6px; text-decoration:none; font-weight:600;}
      .muted { color:#64748b; font-size:13px; }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>Welcome to TDBase, ${escapeHtml(fullName)} 👋</h1>
      <p>Thanks for joining the TDBase waiting list.</p> <p> you’re officially part of the group getting early access before we launch.</p>
      <p><strong>TDBase isn’t another indicator.</strong> It’s an <strong>AI discipline engine</strong> built to track your behavior, flag mistakes, and hold you accountable like a real mentor.</p>
      <p>Over the next few days, I’ll show you how TDBase works, what makes it different, the perks for early users, and when the beta opens.</p>
      <p><a class="cta" href="https://tdbaseapp.com/waitlist">View your place on the waiting list</a></p>
      <p class="muted">You’re early and early is always an advantage. <br/>Jane from TDBase</p>
    </div>
  </body>
  </html>
`;

function escapeHtml(str = "") {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function addToWaitlist(name, email) {

    // return {success: false, message: "Wait-list is currently disabled."}

    if (!name || !email) {
        return { success: false, message: "Name and email are required." }
    }

    try {
        const result = await query(
            "INSERT INTO tdbase_waitlist (name, email) VALUES (?, ?)",
            [name, email]
        )

        const { success } = await sendWelcomeEmail(email, name)
        return { success: true, message: "Thank you for joining the waitlist" }
    } catch (error) {
        console.error("Error adding to waitlist:", error)
        return { success: false, message: "Failed to add to waitlist." }
    }
}

async function sendWelcomeEmail(email, name) {

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD
        }
    })

    const mailOptions = {
        from: `"Jane from TDBase" ${process.env.EMAIL_USER}`,
        to: email,
        subject: "You are on the TDBase Wait-List!",
        html: htmlWelcome(name)
    }

    try {
        await transporter.sendMail(mailOptions)

        return { success: true }
    } catch (error) {
        return { success: false }
    }
}