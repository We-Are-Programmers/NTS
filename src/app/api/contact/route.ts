import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, service, message } = await req.json();

    if (!name || !email || !service) {
      return NextResponse.json(
        { success: false, error: "Missing required fields: name, email, and service are required." },
        { status: 400 }
      );
    }

    // 1. Save to Firebase Firestore
    let dbSuccess = false;
    let docId = "";
    try {
      const docRef = await addDoc(collection(db, "contacts"), {
        name,
        email,
        service,
        message: message || "",
        createdAt: serverTimestamp(),
      });
      docId = docRef.id;
      dbSuccess = true;
      console.log("Form submission saved to Firestore with ID:", docId);
    } catch (dbError: any) {
      console.error("Firebase Firestore save failed:", dbError);
      // We'll log the error but try to proceed with email notification, or fail.
      // Usually, it's safer to fail if database logging is mandatory, but let's throw.
      throw new Error(`Database save failed: ${dbError.message}`);
    }

    // 2. Send Emails using Nodemailer
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const adminEmail = process.env.ADMIN_EMAIL || "hello@nexttechsoul.com";

    // Check if mail server settings are configured.
    // If not configured, we'll log a warning and return success so that the form works in demo mode.
    const isSmtpConfigured = smtpHost && smtpPort && smtpUser && smtpPass && smtpPass !== "kuqlxszqcgwaousl";

    if (!isSmtpConfigured) {
      console.warn("SMTP email credentials are not configured in env variables. Skipping email notifications.");
      return NextResponse.json({
        success: true,
        message: "Data saved to Firestore successfully (Demo Mode: Emails skipped as SMTP credentials are not set).",
        docId,
      });
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: parseInt(smtpPort),
      secure: smtpPort === "465", // Use SSL/TLS for port 465
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // Email 1: Confirmation to Client/User
    const clientMailOptions = {
      from: `"Next Tech Soul" <${smtpUser}>`,
      to: email,
      subject: "We received your project request — Next Tech Soul",
      html: `
        <div style="background-color: #07070a; color: #f5f1e6; font-family: 'Inter', Arial, sans-serif; padding: 40px 20px; border-radius: 20px; max-width: 600px; margin: 0 auto; border: 1px solid rgba(246,185,59,0.16);">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #F6B93B; font-family: 'Georgia', serif; font-style: italic; font-weight: 500; font-size: 28px; margin: 0 0 10px 0;">NEXT TECH <span style="font-family: sans-serif; font-style: normal; font-weight: 700; color: #f5f1e6;">Soul</span></h1>
            <p style="color: #9C978E; font-size: 14px; text-transform: uppercase; letter-spacing: 0.15em; margin: 0;">Karachi Digital Studio</p>
          </div>
          
          <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(246,185,59,0.1); padding: 30px; border-radius: 14px; margin-bottom: 30px;">
            <h2 style="font-size: 20px; color: #f5f1e6; margin-top: 0; margin-bottom: 16px;">Hi ${name},</h2>
            <p style="line-height: 1.6; font-size: 15px; margin-bottom: 20px; color: #d4cfc5;">Thanks for reaching out! We have received your inquiry for <strong>${service}</strong>. Our team is already reviewing the details, and we will get back to you with a clear roadmap and initial quote within one business day.</p>
            
            <hr style="border: 0; border-top: 1px solid rgba(246,185,59,0.1); margin: 20px 0;" />
            
            <h3 style="font-size: 14px; color: #F6B93B; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 10px;">Your Request Summary:</h3>
            <p style="font-size: 14.5px; color: #9C978E; margin: 5px 0;"><strong>Service:</strong> ${service}</p>
            <p style="font-size: 14.5px; color: #9C978E; margin: 5px 0;"><strong>Details:</strong> ${message ? message : "None provided"}</p>
          </div>
          
          <p style="font-size: 14px; line-height: 1.6; color: #9C978E; margin-bottom: 30px; text-align: center;">If you have any urgent attachments or references to share, feel free to reply directly to this email.</p>
          
          <div style="text-align: center; font-size: 12px; color: #6f6b64; border-top: 1px solid rgba(246,185,59,0.1); padding-top: 20px;">
            <p style="margin: 0 0 5px 0;">© 2026 Next Tech Soul. All rights reserved.</p>
            <p style="margin: 0;">Karachi, Pakistan — Remote-First Digital Studio</p>
          </div>
        </div>
      `,
    };

    // Email 2: Notification to Admin/Owner
    const adminMailOptions = {
      from: `"Studio Inquiries" <${smtpUser}>`,
      to: adminEmail,
      subject: `New Project Inquiry from ${name} [${service}]`,
      html: `
        <div style="background-color: #07070a; color: #f5f1e6; font-family: 'Inter', Arial, sans-serif; padding: 40px 20px; border-radius: 20px; max-width: 600px; margin: 0 auto; border: 1px solid rgba(246,185,59,0.16);">
          <h2 style="color: #F6B93B; border-bottom: 1px solid rgba(246,185,59,0.16); padding-bottom: 10px; margin-top: 0;">New Project Inquiry</h2>
          <p style="font-size: 16px;">You have received a new form submission from your website:</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px; margin-bottom: 30px;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); font-weight: bold; width: 30%; color: #9C978E;">Client Name:</td>
              <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); color: #f5f1e6;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); font-weight: bold; color: #9C978E;">Email Address:</td>
              <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); color: #f5f1e6;"><a href="mailto:${email}" style="color: #F6B93B; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); font-weight: bold; color: #9C978E;">Requested Service:</td>
              <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); color: #f5f1e6; font-weight: bold;">${service}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; color: #9C978E; vertical-align: top;">Project Details:</td>
              <td style="padding: 10px; color: #d4cfc5; line-height: 1.5; white-space: pre-wrap;">${message ? message : "No additional details provided."}</td>
            </tr>
          </table>
          
          <div style="background: rgba(246,185,59,0.05); padding: 15px; border-radius: 8px; border: 1px dashed rgba(246,185,59,0.2); text-align: center;">
            <p style="margin: 0; font-size: 13px; color: #9C978E;">Firestore Document ID: <code style="color: #F6B93B;">${docId}</code></p>
          </div>
        </div>
      `,
    };

    // Send emails concurrently
    await Promise.all([
      transporter.sendMail(clientMailOptions),
      transporter.sendMail(adminMailOptions),
    ]);

    console.log("Emails sent successfully to client and admin.");

    return NextResponse.json({
      success: true,
      message: "Data saved to Firestore and emails sent successfully.",
      docId,
    });
  } catch (error: any) {
    console.error("Contact Form API Error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "An unexpected error occurred during form submission." },
      { status: 500 }
    );
  }
}
