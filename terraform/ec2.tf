resource "aws_instance" "ecommerce_server" {
  ami           = "ami-08c46876c64a927b8"
  instance_type = "t3.micro"

  subnet_id = aws_subnet.public_subnet.id

  vpc_security_group_ids = [
    aws_security_group.ecommerce_sg.id
  ]

  associate_public_ip_address = true

  key_name = "Shaik_key_pair"

  tags = {
    Name = "ecommerce-server"
  }
}
