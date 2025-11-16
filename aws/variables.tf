variable "name"   { type = string  default = "portfolio" }
variable "region" { type = string  default = "us-east-1" }

variable "domain" { type = string  description = "Hosted zone name, e.g., kylehancock.com" }
variable "fqdn"   { type = string  description = "FQDN for the site, e.g., www.kylehancock.com" }

variable "image"  { type = string  description = "Image URI, e.g., x.dkr.ecr.us-east-1.amazonaws.com/portfolio:latest" }
