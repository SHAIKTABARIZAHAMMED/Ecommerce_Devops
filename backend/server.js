const cors = require("cors");
const express = require("express");
const { Pool } = require("pg");

const app = express();
app.use(cors());
const pool = new Pool({
    user: "ecommerce_user1",
    host: "postgres",
    database: "ecommerce_database",
    password: "ecommerce123",
    port: 5432
});

app.get("/", (req, res) => {
    res.send("Ecommerce DevOps Backend Running");
});

app.get("/api/health", (req, res) => {
    res.json({
        status: "UP"
    });
});

app.get("/api/products", async (req, res) => {

    try {

        const result = await pool.query(
            "SELECT * FROM products"
        );

        res.json(result.rows);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            error: "Database Error"
        });

    }

});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
