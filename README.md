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

2. Select and upload your HTML and CSS files. Ensure that your main HTML file is named something like "index.html" to serve as the default entry point.

3. Once uploaded, make sure the files are set to public access. Select each file, go to the "Actions" dropdown, and click on "Make public."

## Step 3: Enable Static Website Hosting

1. In your S3 bucket, go to the "Properties" tab.

2. Scroll down to the "Static website hosting" section.

3. Click on "Edit."

4. Choose "Use this bucket to host a website."

5. Specify your main HTML file (e.g., "index.html") as the Index document.

6. Click "Save changes."

## Step 4: Access Your Website Endpoint

1. In the "Static website hosting" section, note the "Endpoint" URL. This is the URL where your resume will be hosted.

2. It may take a few minutes for the changes to propagate. Once done, you can visit the provided Endpoint URL in a web browser to view your deployed resume.

## Showcase Repository

For a detailed look at my deployment setup and to explore the deployed resume, check out my [GitHub repository](https://github.com/your-username/cloud-resume-challenge).

Feel free to reach out if you have any questions or need assistance. Happy showcasing! 🌐✨
