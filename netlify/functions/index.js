exports.handler = async function(event, context) {
  const params = new URLSearchParams(event.queryStringParameters);
  const username = params.get("username") || "Guest";

  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <title>Welcome L_${username}</title>
    </head>
    <body>
      <h1>Hello, ${username}!</h1>
      <p>This page was dynamically rendered on the backend.</p>
    </body>
    </html>
  `;

  return {
    statusCode: 200,
    headers: { "Content-Type": "text/html"},
    body: html
};
};
