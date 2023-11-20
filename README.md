# My Cloud Resume Challenge

Welcome to my Cloud Resume Challenge showcase! I've successfully completed the challenge, and here's how I went about it.

## Certification

### AWS Cloud Practitioner Certified

I've proudly included the AWS Cloud Practitioner certification on my resume. This certification has given me a solid foundation in the AWS cloud. [You can look at my certification here.](https://www.credly.com/badges/2e4f93ef-b22d-4083-b70b-ef081f17629a/public_url).

![aws-certified-cloud-practitioner (3)](https://github.com/JoelSamson/Cloud-Resume-Challenge/assets/55976489/b4bdfe1e-50d9-4b61-be51-1d872ef39839)



## HTML

I crafted my resume using HTML to provide a clean and structured layout. It is made to give you my information at a quick glance and redirect you to important links to connect with me. This is a simple Portfolio Card website.


## CSS

To enhance the visual appeal of my resume, I applied some styling using CSS. While I'm not a designer, I believe the styling adds a professional touch. 

Heres a view of the website till this point:
<img width="1710" alt="Screenshot 2023-11-17 at 2 47 19 PM" src="https://github.com/JoelSamson/Cloud-Resume-Challenge/assets/55976489/74e94e86-40ba-4614-8cf1-2eec01be339a">

You can use my layout to personalise your website too.


## Static website hosting

# Deploying My Resume on Amazon S3

I've successfully deployed my HTML resume as a static website using Amazon S3. Here's a brief guide on how I accomplished this:

## Step 1: Set Up an Amazon S3 Bucket

1. Go to the [Amazon S3 Console](https://console.aws.amazon.com/s3/).

2. Click on "Create bucket."

3. Provide a unique and meaningful name for your bucket, such as "your-name-resume-bucket."

4. Choose the AWS region that is most suitable for you.

5. Click through the remaining settings, keeping the defaults, and create the bucket.

   <img width="1710" alt="Screenshot 2023-11-17 at 6 23 50 PM" src="https://github.com/JoelSamson/Cloud-Resume-Challenge/assets/55976489/f06eaeea-cb3c-4891-abfc-b4bbeba2e5de">
   <img width="1710" alt="Screenshot 2023-11-17 at 6 24 01 PM" src="https://github.com/JoelSamson/Cloud-Resume-Challenge/assets/55976489/77ca0ead-b25d-4e6e-bcf0-af9f86d262aa">
   <img width="1710" alt="Screenshot 2023-11-17 at 6 24 05 PM" src="https://github.com/JoelSamson/Cloud-Resume-Challenge/assets/55976489/096530f2-f125-4b95-960a-ff5c0b6b97d7">
   <img width="1710" alt="Screenshot 2023-11-17 at 6 24 10 PM" src="https://github.com/JoelSamson/Cloud-Resume-Challenge/assets/55976489/c8ae08bf-7d48-4c8d-a1d6-3cd8d02d7e42">
   <img width="1710" alt="Screenshot 2023-11-17 at 6 24 13 PM" src="https://github.com/JoelSamson/Cloud-Resume-Challenge/assets/55976489/a588378f-9c1f-4fea-baa6-d5e4eb9b55a2">

   After creating we can see that our bucket is present in the list.

   <img width="1710" alt="Screenshot 2023-11-17 at 6 25 09 PM" src="https://github.com/JoelSamson/Cloud-Resume-Challenge/assets/55976489/795253e5-106b-4634-b1ca-f843f7629920">


## Step 2: Upload HTML and CSS Files

1. In your newly created bucket, click on the "Upload" button.
   
   <img width="1710" alt="Screenshot 2023-11-17 at 6 31 28 PM" src="https://github.com/JoelSamson/Cloud-Resume-Challenge/assets/55976489/b8cf1407-0b65-441a-8223-daaebe4e29d3">
   <img width="1710" alt="Screenshot 2023-11-17 at 6 31 36 PM" src="https://github.com/JoelSamson/Cloud-Resume-Challenge/assets/55976489/0daa1f34-47b8-42ed-be99-6ab42f63d428">
  



2. Select and upload your HTML and CSS files. Ensure that your main HTML file is named something like "index.html" to serve as the default entry point.

   <img width="1710" alt="Screenshot 2023-11-17 at 6 31 53 PM" src="https://github.com/JoelSamson/Cloud-Resume-Challenge/assets/55976489/10051560-a71d-48c3-87a6-19c338b7cbff">
   <img width="1710" alt="Screenshot 2023-11-17 at 6 32 08 PM" src="https://github.com/JoelSamson/Cloud-Resume-Challenge/assets/55976489/ffa6fdaa-29c0-4689-97a1-c6e48478646a">



3. Once uploaded, make sure the files are set to public access. Select each file, go to the "Actions" dropdown, and click on "Make public."

   or

   You can go to cloud front


## Step 3: Enable Static Website Hosting (Doesnt need to be done)

1. In your S3 bucket, go to the "Properties" tab.

2. Scroll down to the "Static website hosting" section.

3. Click on "Edit."

4. Choose "Use this bucket to host a website."

5. Specify your main HTML file (e.g., "index.html") as the Index document.

6. Click "Save changes."

   <img width="1710" alt="Screenshot 2023-11-17 at 6 36 43 PM" src="https://github.com/JoelSamson/Cloud-Resume-Challenge/assets/55976489/8f2da306-41f5-4cee-9af9-feaecda348d3">
   <img width="1710" alt="Screenshot 2023-11-17 at 6 36 46 PM" src="https://github.com/JoelSamson/Cloud-Resume-Challenge/assets/55976489/af869361-6697-4eea-85d9-9253d369284a">
   <img width="1710" alt="Screenshot 2023-11-17 at 6 36 52 PM" src="https://github.com/JoelSamson/Cloud-Resume-Challenge/assets/55976489/6612be48-294f-4754-8ab9-d4ddfa71c25c">
   <img width="1710" alt="Screenshot 2023-11-17 at 6 37 17 PM" src="https://github.com/JoelSamson/Cloud-Resume-Challenge/assets/55976489/92fc5b9f-ec96-4ed0-b132-80973bf286a4">

## Step 4: Access Your Website Endpoint

1. In the "Static website hosting" section, note the "Endpoint" URL. This is the URL where your resume will be hosted.

   <img width="1710" alt="Screenshot 2023-11-19 at 2 42 42 PM" src="https://github.com/JoelSamson/Cloud-Resume-Challenge/assets/55976489/2be687e6-ec87-46e4-9ba5-5233b23a180b">


2. It may take a few minutes for the changes to propagate. Once done, you can visit the provided Endpoint URL in a web browser to view your deployed resume.

   <img width="1710" alt="Screenshot 2023-11-19 at 2 42 37 PM" src="https://github.com/JoelSamson/Cloud-Resume-Challenge/assets/55976489/efd5f1f5-2de7-48aa-a2a0-c677493e5fe2">

   Try to access it — you’ll see an error come up. Why are we getting this error? Because public access has been disabled. Don’t worry, we’ll be fixing it soon Using Cloud front.


# HTTPS

Here we want to create an Amazon CloudFront distribution and leverage the settings to enable HTTPS. Additionally, we copy the CloudFront distribution policy and apply it to the S3 bucket hosting the resume. Here's a guide on how to achieve this:

## Step 1: Create Amazon CloudFront Distribution with HTTPS

1. Go to the [Amazon CloudFront Console](https://console.aws.amazon.com/cloudfront/).

2. Click on "Create Distribution."

<img width="1710" alt="Screenshot 2023-11-19 at 2 11 14 PM" src="https://github.com/JoelSamson/Cloud-Resume-Challenge/assets/55976489/80cc6881-701d-41b6-af25-3b8cd05ef9cd">


3. In the "Origin Setting" section, choose your S3 bucket as the "Origin Domain Name. Ours is joel-cloud-resume-challenge.s3.us-east-1.amazonaws.com

4. Select "Origin accessInfo" as Origin access control settings (recommended)
                                 Bucket can restrict access to only CloudFront.
   
<img width="1710" alt="Screenshot 2023-11-19 at 2 26 44 PM" src="https://github.com/JoelSamson/Cloud-Resume-Challenge/assets/55976489/c90a391d-8bdd-48d9-ac86-f2579ae0549f">

5.Origin acesss control should be selected here we create a origin Acess control as follows

<img width="1710" alt="Screenshot 2023-11-19 at 3 02 06 PM" src="https://github.com/JoelSamson/Cloud-Resume-Challenge/assets/55976489/0c528e28-396a-46f7-b7e1-3cb6a1d5eab3">

6. Under default cache Behaviour we select for the setting
                        Viewer protocol policy
                        HTTPS only

<img width="1710" alt="Screenshot 2023-11-19 at 2 26 51 PM" src="https://github.com/JoelSamson/Cloud-Resume-Challenge/assets/55976489/72e36379-b100-4db9-b402-d182ce33b16e">

7. Do not enable WAF

   <img width="1710" alt="Screenshot 2023-11-19 at 2 26 54 PM" src="https://github.com/JoelSamson/Cloud-Resume-Challenge/assets/55976489/c5941995-f461-4f63-88b4-657184f754cd">
   <img width="1710" alt="Screenshot 2023-11-19 at 2 26 57 PM" src="https://github.com/JoelSamson/Cloud-Resume-Challenge/assets/55976489/696851b8-8512-478b-aa92-d3e37f4efb76">

   
8. Leave other settings as normal, and then click on "Create Distribution."

   <img width="1710" alt="Screenshot 2023-11-19 at 2 26 59 PM" src="https://github.com/JoelSamson/Cloud-Resume-Challenge/assets/55976489/283f1d88-d5c3-4342-a1b8-faee962d0af2">

   <img width="1710" alt="Screenshot 2023-11-19 at 2 27 16 PM" src="https://github.com/JoelSamson/Cloud-Resume-Challenge/assets/55976489/bf84e4f8-1ab8-4bb5-8f93-eada65ecf303">

7. Once the distribution is created, note down the CloudFront domain name.

## Step 2: Copy CloudFront Distribution Policy

1. In the CloudFront Console, navigate to the distribution you created.

2. In the distribution settings, find and click on the "Distribution Settings" tab.

3. Scroll down to the "Access Control" section.

4. Click on "Edit" next to "Bucket Policy."

5. Copy the existing bucket policy.

   

## Step 3: Apply CloudFront Policy to S3 Bucket

1. Go to the [Amazon S3 Console](https://console.aws.amazon.com/s3/).

2. Navigate to the bucket hosting your resume.

3. In the bucket settings, go to the "Permissions" tab.

4. Click on "Bucket Policy."

5. Paste the CloudFront distribution policy you copied earlier.

6. Save the changes.

   <img width="1710" alt="Screenshot 2023-11-19 at 2 28 22 PM" src="https://github.com/JoelSamson/Cloud-Resume-Challenge/assets/55976489/b7337687-9408-449f-be16-3263eaa62afe">
   
   <img width="1710" alt="Screenshot 2023-11-19 at 2 28 09 PM" src="https://github.com/JoelSamson/Cloud-Resume-Challenge/assets/55976489/efa2fa8f-8d5e-47ce-9f76-12887c6017c1">

## Step 4: Test the Resume Access with HTTPS

1. After the changes have propagated, access your resume using the CloudFront domain (e.g., `https://drlwn5w8rddjn.cloudfront.net`).

<img width="1710" alt="Screenshot 2023-11-19 at 2 32 56 PM" src="https://github.com/JoelSamson/Cloud-Resume-Challenge/assets/55976489/01c1e99b-8864-4aa3-8012-393a8276091f">


<img width="1710" alt="Screenshot 2023-11-19 at 2 32 49 PM" src="https://github.com/JoelSamson/Cloud-Resume-Challenge/assets/55976489/2c3574a6-0287-4fb1-91dd-e255d004aa7a">

2. Ensure that the connection is secure and that HTTPS is enabled.

By copying the CloudFront distribution policy to your S3 bucket, you ensure that the security settings configured for CloudFront are applied to the S3 bucket as well.

<img width="1710" alt="Screenshot 2023-11-19 at 3 15 36 PM" src="https://github.com/JoelSamson/Cloud-Resume-Challenge/assets/55976489/8384b014-9b3b-4d6e-8eb1-26dba334a7bd">

Certainly! Let's guide you through pointing a custom DNS domain name to your CloudFront distribution using Amazon Route 53:

## DNS

So for this step I have already bought a domain from Route 53 called joelcloud.com

<img width="1710" alt="Screenshot 2023-11-19 at 3 30 21 PM" src="https://github.com/JoelSamson/Cloud-Resume-Challenge/assets/55976489/3ebf9f6c-73c4-40a4-8a9d-6d42911400ca">

<img width="1710" alt="Screenshot 2023-11-19 at 3 30 25 PM" src="https://github.com/JoelSamson/Cloud-Resume-Challenge/assets/55976489/351418fd-116e-4107-97ae-4704b2a9b0ad">


Great! If you already have a domain (e.g., joelcloud.com) registered in Amazon Route 53 and want to route traffic to it using CloudFront, here's how you can do it:

## Step 1: Update CloudFront Distribution

1. Go to the [Amazon CloudFront Console](https://console.aws.amazon.com/cloudfront/).

2. Select the CloudFront distribution that you created for your resume.

3. Click on the "Distribution Settings" tab.

4. Under the "General" tab, Click edit settings

   <img width="1710" alt="Screenshot 2023-11-19 at 3 43 09 PM" src="https://github.com/JoelSamson/Cloud-Resume-Challenge/assets/55976489/e93e95fc-1041-4c0a-8ac9-78c204f43a85">

   <img width="1710" alt="Screenshot 2023-11-19 at 3 38 03 PM" src="https://github.com/JoelSamson/Cloud-Resume-Challenge/assets/55976489/1ba06050-24f6-45aa-86ab-c6a769fd3bec">

5. Choose the option Alternative domain name and provide the domain name for our project it will be resume.joelcloud.com

   <img width="1710" alt="Screenshot 2023-11-19 at 3 45 54 PM" src="https://github.com/JoelSamson/Cloud-Resume-Challenge/assets/55976489/6130f79d-171a-4956-8282-c65a27020f76">
   
6.Under Custom SSL certificate - optional select Request Certificate.

We get redirected to Amazon Certifcate mananger

7. For certificate type select "Request Public Certificate"
   
   <img width="1710" alt="Screenshot 2023-11-19 at 3 49 22 PM" src="https://github.com/JoelSamson/Cloud-Resume-Challenge/assets/55976489/5fdaec1b-5e42-4230-9127-2df7f31b52ad">
   
8. Under Domain name section . List the fully qualified domain name for us it will be "*.joelcloud.com"

   <img width="1710" alt="Screenshot 2023-11-19 at 3 39 15 PM" src="https://github.com/JoelSamson/Cloud-Resume-Challenge/assets/55976489/04920bb3-77a3-4d08-a098-e22f0a01f7dc">
   
9. We add a tag

<img width="1710" alt="Screenshot 2023-11-19 at 3 39 17 PM" src="https://github.com/JoelSamson/Cloud-Resume-Challenge/assets/55976489/265e6151-3abb-47bd-be90-c609e912576c">

10. Now we have to wait till the certificate validates for us to continue further
    
    <img width="1710" alt="Screenshot 2023-11-19 at 3 39 17 PM" src="https://github.com/JoelSamson/Cloud-Resume-Challenge/assets/55976489/bb68549f-6a20-408f-8889-ee9f74abd0ae">

   <img width="1710" alt="Screenshot 2023-11-20 at 12 15 12 PM" src="https://github.com/JoelSamson/Cloud-Resume-Challenge/assets/55976489/dd953994-991e-4dc3-ada3-0e2eaf41c398">

11. Now go back to the editing the cloud front destribution and select the Custom SSL certficate that has just been issued in the previous step

    <img width="1710" alt="Screenshot 2023-11-20 at 12 19 54 PM" src="https://github.com/JoelSamson/Cloud-Resume-Challenge/assets/55976489/5603e6f6-b214-45f9-86e6-55d3df1bcb79">
12. Leave all the other settings to default and save changes
    <img width="1710" alt="Screenshot 2023-11-20 at 12 19 58 PM" src="https://github.com/JoelSamson/Cloud-Resume-Challenge/assets/55976489/0b521533-125f-408e-9fad-1915ce74125f">

13. Wsit till it gets deployed

<img width="1710" alt="Screenshot 2023-11-20 at 12 21 40 PM" src="https://github.com/JoelSamson/Cloud-Resume-Challenge/assets/55976489/4d2a892c-a464-40f4-8232-495126b928a6">

## Step 2: Creating a record for our resume.joelcloud.com
1. Go to Create Record in Your Hosted zone "joelcloud.com" in Route 53 and select create record

2.Now select Record type as A as we are routing to a AWS Service

3. Select The Alias Option

4. Under Choose endpoint select Route traffic to "Alias to Cloud Distribution"

5. Select our cloud distribution

6. Create Record
<img width="1710" alt="Screenshot 2023-11-20 at 12 26 31 PM" src="https://github.com/JoelSamson/Cloud-Resume-Challenge/assets/55976489/41c126e6-b537-4dc0-9b0a-8e1a7d0b2337">

NOW VISIT THE URL resume.joelcloud.com

<img width="1710" alt="Screenshot 2023-11-20 at 12 31 21 PM" src="https://github.com/JoelSamson/Cloud-Resume-Challenge/assets/55976489/c826b3a9-2e86-4555-9d6b-a28c022c13ea">

<img width="1710" alt="Screenshot 2023-11-20 at 12 30 57 PM" src="https://github.com/JoelSamson/Cloud-Resume-Challenge/assets/55976489/9fe083ba-7b48-4e9a-8ca5-7117267caff2">

We have successfully done steps 1 to 6 in the Cloud Resume Challeange



