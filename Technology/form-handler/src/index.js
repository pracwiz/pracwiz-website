import { EmailMessage } from "cloudflare:email";

export default {
  async fetch(request, env, ctx) {
    // 1. Handle CORS Preflight OPTIONS Request
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Max-Age": "86400",
        },
      });
    }

    // 2. Only allow POST requests
    if (request.method !== "POST") {
      return new Response(JSON.stringify({ error: "Method not allowed" }), {
        status: 450,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
    }

    try {
      // 3. Parse and Validate Form Payload
      const { name, email, message } = await request.json();

      if (!name || !email || !message) {
        return new Response(JSON.stringify({ error: "Missing required fields" }), {
          status: 400,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        });
      }

      // 4. Construct the Email MIME Content
      // Outbound emails sent via Cloudflare Email Routing bindings must originate
      // from a domain verified on the zone (e.g., contact@pracwiz.com).
      const sender = "contact@pracwiz.com";
      const recipient = "pracwiz.solutions+cloudflareemailrouting@gmail.com";

      const subject = `PracWiz Inquiry from ${name}`;
      const emailBody = `PracWiz Solutions - New Inquiry Received

Name: ${name}
Email: ${email}
Message:
------------------------------------------
${message}
------------------------------------------
Reply to: ${email}
`;

      const mimeMessage = [
        `From: ${sender}`,
        `To: ${recipient}`,
        `Reply-To: ${email}`,
        `Subject: ${subject}`,
        `MIME-Version: 1.0`,
        `Content-Type: text/plain; charset=utf-8`,
        ``,
        emailBody
      ].join("\n");

      // 5. Send the Email via Cloudflare Email Routing Binding
      const emailMessage = new EmailMessage(sender, recipient, mimeMessage);
      await env.EMAIL_ROUTER.send(emailMessage);

      // 6. Return Success Response
      return new Response(JSON.stringify({ success: true, message: "Inquiry sent successfully" }), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });

    } catch (err) {
      return new Response(JSON.stringify({ error: "Internal Server Error", details: err.message }), {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
    }
  }
};
