const express = require("express");

const app = require("./app");

const path = require("path");

const port = process.env.PORT || 5000;

// Serve static files in production
if (process.env.NODE_ENV === "production") {
  const clientBuildPath = path.join(__dirname, "..", "client", "build");
  app.use(express.static(clientBuildPath));

  // Handle React routing - serve index.html for all non-API routes
  app.get("*", (req, res) => {
    res.sendFile(path.join(clientBuildPath, "index.html"));
  });
}

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
