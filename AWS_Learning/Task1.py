# Amazon s3 
# Lambda, Execution role : dev s3 lambda
# AWS Region - US East (N. Virginia) us-east-1
# in s3 bucket and lambda name start with  td
# versioning in s3 – if we want to upload same object with some updation then we can upload same obj with different versions
# how to see content of s3 object - query with s3

import json

def lambda_handler(event, context):
    # TODO implement
    print("Hello World")
    return "hello world"