terraform {
  backend "s3" {
    bucket       = "shaik-terraform-state"
    key          = "ecommerce/terraform.tfstate"
    region       = "us-east-1"
    use_lockfile = true
  }
}
