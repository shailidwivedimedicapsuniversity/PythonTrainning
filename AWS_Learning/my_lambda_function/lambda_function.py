# Upload code to Lambda using Zip (include necessary dependencies in the zip file)
import json
import boto3

def lambda_handler(event, context):
    # Get the bucket name and file key from the event
    bucket_name = 'td-shaili-task4'
    file_key = 'Task5.py'
    # Retrieve the file from S3
    s3_client = boto3.client('s3')
    response = s3_client.get_object(Bucket=bucket_name, Key=file_key)
    file_content = response['Body'].read().decode('utf-8')
    
    # Process the file content
    print(f"Content of file '{file_key}': {file_content}")
    
    return {
        'statusCode': 200,
        'body': json.dumps('File processed successfully')
    }
