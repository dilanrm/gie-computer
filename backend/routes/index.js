const router = require("express").Router();

const userRouter = require("./user");
router.use("/users", userRouter);

router.get("*", (req, res) => {
  res.status(404);

  // respond with html page
  if (req.accepts("html")) {
    res.send("404", { url: req.url });
    return;
  }

  // respond with json
  if (req.accepts("json")) {
    res.json({ error: "Not found" });
    return;
  }

  // default to plain-text. send()
  res.type("txt").send("Not found");
});

module.exports = router;
