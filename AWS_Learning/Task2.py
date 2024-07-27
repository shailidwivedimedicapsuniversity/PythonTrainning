# Read file from S3 using Lambda and upload over S3 with some transformation. 
# Lambda/Functions/td-shaili-task2

from datetime import datetime
import os
import json
import boto3

s3 = boto3.client('s3')
print("hello world")
def lambda_handler(event, context):
    source_bucket = 'td-shaili-task2' #bucket 
    source_key = 'new.txt' #object

    destination_bucket = 'td-shaili-task2' 
    destination_key = f"{datetime.now()}-{source_key}"

    #file has read from S3 using Lambda 
    response = s3.get_object(Bucket=source_bucket, Key=source_key)
    file_content = response['Body'].read().decode('utf-8')  

    # doing transformation in existing file in s3
    new_content = file_content + '\n' + str(datetime.now()) + " read file from s3 and upload over S3 with some transformation."

    # Upload the updated file over s3 with some transformation
    s3.put_object(Bucket=destination_bucket, Key=destination_key, Body=new_content)

    return {
        'statusCode': 200,
        'body': json.dumps('8 updated with new content and uploaded successfully!')
    }
