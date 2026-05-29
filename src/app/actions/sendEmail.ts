"use server";

export async function sendEmailAction(formData: { name: string; email: string; message: string }) {
  try {
    const serviceId = process.env.EMAILJS_SERVICE_ID;
    const templateId = process.env.EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("Missing EmailJS environment variables on the server.");
      return { success: false, error: "Server configuration error. Please contact support." };
    }

    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: "Ali Ahmed",
      },
    };

    const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("EmailJS Error response:", errorText);
      return { success: false, error: "Failed to send message via email provider." };
    }

    return { success: true };
  } catch (error) {
    console.error("Unexpected error sending email:", error);
    return { success: false, error: "An unexpected error occurred while sending." };
  }
}
