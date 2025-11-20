'use server'

import { query } from "@/dbh"
import nodemailer from "nodemailer"

export async function addToWaitlist(name, email) {

    if (!name || !email) {
        return { success: false, message: "Name and email are required." }
    }

    try {
        const result = await query(
            "INSERT INTO tdbase_waitlist (name, email) VALUES (?, ?)",
            [name, email]
        )

        const { success } = await sendWelcomeEmail(email, name)
        return { success: true, message: "Successfully added to waitlist." }
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
        from: '"Jane from TDBase ${process.env.EMAIL_USER}',
        to: email,
        subject: "You are on the TDBase Wait-List!",
        html: `
         <!doctype html>
         <html>
            <body style="margin: 0; padding: 0; font-family:'Times New Roman', Times, serif;">
                <table role="presentation" ></table>
            </body>
         </html>
        `
    }

    try {
        await transporter.sendMail(mailOptions)

        return { success: true }
    } catch (error) {
        return { success: false }
    }
}