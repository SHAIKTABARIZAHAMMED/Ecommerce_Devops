CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    price NUMERIC(10,2)
);

INSERT INTO products(name, price)
VALUES
('Laptop',50000),
('Mobile',25000),
('Headphones',2000);
