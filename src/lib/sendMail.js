import functions from "firebase-functions";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey("YOUR_SENDGRID_API_KEY");

export const sendContactEmail = functions.https.onCall(async data => {
	const { name, phone, email, message } = data;

	const msg = {
		to: "YOUR_RECEIVING_EMAIL@example.com",
		from: "YOUR_SENDER_EMAIL@example.com",
		subject: `Contact Form Submission from ${name}`,
		text: `Message from: ${name}\nPhone: ${phone}\nEmail: ${email}\n\n${message}`,
	};

	try {
		await sgMail.send(msg);
		return { success: true };
	} catch (error) {
		return { success: false, error: error.message };
	}
});
