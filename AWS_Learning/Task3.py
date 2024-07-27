# Task - Use Pandas library in Lambda (requires Lambda Layer implementation; validate the transformation results)
# what is lambda layer - A Lambda Layer is a way to include additional libraries (like Pandas) in your Lambda function without including them directly in your function code.
# created pandas layer zip inside my panda layer
# added this layer in layer 
#added layer to my lambda function 

import json
import boto3
import pandas as pd
import os

s3_client = boto3.client('s3')

def lambda_handler(event, context):
    # Get the S3 bucket and object key from the event
    source_bucket = 'td-shaili-task3'
    source_key = 'new.txt'
    
    # Define the destination bucket and object key
    destination_bucket = 'td-shaili-task3'
    destination_key = 'transformed-' + source_key
    
    # Download the file from the source bucket
    download_path = '/tmp/' + source_key
    s3_client.download_file(source_bucket, source_key, download_path)
    
    # Read the file into a pandas DataFrame
    df = pd.read_csv(download_path)
    
    # Perform some transformation (example: convert all column names to uppercase)
    df.columns = [col.upper() for col in df.columns]
    
    # Save the transformed DataFrame to a new CSV file
    transformed_path = '/tmp/transformed-' + source_key
    df.to_csv(transformed_path, index=False)
    
    # Upload the transformed file to the destination bucket
    s3_client.upload_file(transformed_path, destination_bucket, destination_key)
    
    return {
        'statusCode': 200,
        'body': json.dumps('File transformed and uploaded successfully!')
    }
