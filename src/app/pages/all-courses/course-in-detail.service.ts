import { Injectable } from '@angular/core';
import { CourseInDetail } from './course-in-detail';

@Injectable({
  providedIn: 'root'
})
export class CourseInDetailService {

  constructor() { }
  public getCourses() {

    let courses: CourseInDetail[];

    courses = [
      new CourseInDetail(1, 'Java Fullstack', 'Java Script, Spring, Spring boot, Hibernate, MySql, Html, CSS, Bootstrap', 'assets/images/courses/jf.png',
        'If you are a learning enthusiast and want to create a quick and efficient web application, and you have some Java knowledge and a little or no knowledge about Java networking programming, then this course is for you. “Full Stack Java developer Practical Guide" introduces you to Java, JSP, Restful WS, and spring. In this course, you will be able to combine all the ways to connect to the database and learn how to make it in an informative and attractive way. Here, you will learn all the basic concepts, tools, functions, and required topics which usually a Java Developer requires during the web application development process. The course starts with Java, including multi-threading, Lambdas, Collections debugging, and introduction to GIT. Then we will move towards JSP and Servlets. Once we are done with JSP and Servlets, we will start exploring Hibernate. An application will be built using JSP and Hibernate as well.',
        'Java, JSP, and Servlets are core technologies, now once we have completed the core technologies, we will move towards the spring framework. Spring framework is among the most popular Java framework, we will cover the spring framework, and then we will start with the very important "Restful web services". Finally, after completion of web-services, we will start with spring boot.',
        'Full Stack',

        'assets/images/course-indetail/angular.png',
        'assets/images/course-indetail/bootstrap.png',
        'assets/images/course-indetail/core-java-8.png',
        'assets/images/course-indetail/css.png',
        'assets/images/course-indetail/es6.png',
        'assets/images/course-indetail/hibernate.png',
        'assets/images/course-indetail/html.png',
        'assets/images/course-indetail/javascript.png',
        'assets/images/course-indetail/spring.png',
        'assets/images/course-indetail/typescript.png'),
      new CourseInDetail(2, 'Python Fullstack',
        'Python, Django, Flask, Html, CSS, Java Script, Bootstrap', 'assets/images/courses/pf.jpg',
        'Welcome to the Python and Django Full Stack Web Developer Bootcamp! In this course we cover everything you need to know to build a website using Python, Django, and many more web technologies! Whether you want to change career paths, expand your current skill set, start your own entrepreneurial business, become a consultant, or just want to learn, this is the course for you!',
        'We will teach you the latest technologies for building great web applications with Python 3 and Django! But we dont just teach that, we also teach the Front End technologies you need to know, including HTML, CSS, and Javascript. This course can be your one stop shop for everything you need! It will serve as a useful reference for many of your questions as you begin your journey in becoming a web developer!',
        'Full Stack',

        'assets/images/course-indetail/pythonFullstack/python.png',
        'assets/images/course-indetail/pythonFullstack/django.png',
        'assets/images/course-indetail/pythonFullstack/flask.png',
        'assets/images/course-indetail/pythonFullstack/mysql.png',
        '',
        'assets/images/course-indetail/css.png',
        'assets/images/course-indetail/html.png',
        'assets/images/course-indetail/javascript.png',
        'assets/images/course-indetail/bootstrap.png',
        ''),
      new CourseInDetail(3, '.Net Fullstack',
        'ASP.Net, C#, SQL Server, Html, CSS, Java Script, Bootstrap', 'assets/images/courses/df.jpg',
        'Welcome to Full Stack Web Development with C# OOP, MS SQL & ASP.NET MVC course. Web development with C#, ASP.NET MVC, MS SQL, C# OOP. All gathered for full stack web development in one course! Whether you’re using C# in conjunction with Xamarin Forms to build cross-platform apps, or designing a new video game in Unity with C#. We hosts top-rated courses on everything from the fundamentals of C# programming to more advanced topics like databases and asynchronous programming.',
        'Even though C# is a language that’s relatively easy to learn and maintain, it isn’t just for beginners. Its scalability and large support community make C# the language of choice for Microsoft app developers and video game developers working with the Unity Engine. Like C++ and Java, C# is a high-level object-oriented programming language. It is generally more efficient than Java and has useful features such as operator overloading. C# is based on C++ but has several advantages over this older language: it is type-safe, more comprehensively object-oriented, and the syntax has been simplified in several important ways. Most importantly, C# interoperates exceptionally well with other languages on the .NET platform. For this reason, C# is a better choice for building applications for .NET.',

        'Full Stack',

        'assets/images/course-indetail/net/.net.png',
        'assets/images/course-indetail/net/C.png',
        'assets/images/course-indetail/html.png',
        'assets/images/course-indetail/css.png',
        'assets/images/course-indetail/pythonFullstack/mysql.png',
        '',
        '',
        '',
        '',
        ''),
      new CourseInDetail(4, 'Devops',
        'CI, CD, Jenkins, Gradle, Maven, Artifactory, Sqitch, Test-Driven Development',
        'assets/images/courses/devops.png',
        'DevOps is all about People, Process, and Tools. In this course, you will understand the basics of DevOps and learn to do DevOps with Docker, Kubernetes, Ansible, Terraform, Azure DevOps, and Jenkins. You will learn to implement DevOps with Continuous Integration, Continuous Delivery, and Infrastructure as Code. You will play with 3 different clouds - AWS, Azure and Google Cloud.You will learn the basics of Kubernetes on the Google Kubernetes Engine implementing Service Discovery, Centralized Configuration, and Load Balancing for Microservices. You will do DevOps with Kubernetes using Terraform (Infrastructure as Code) and Azure DevOps (Continuous Delivery) on multiple cloud platforms (AWS and Azure)',
        'You will learn the basics of Continuous Integration and Continuous Delivery and implement them using Jenkins and Azure DevOps. You will learn to Create Kubernetes Clusters and Deploy Docker Containers of Microservices to Kubernetes using Azure DevOps Pipelines on the Cloud with AWS EKS and Azure AKS. You will learn the basics of Terraform and Ansible and implement Infrastructure as Code. You will provision a number of AWS Resources - EC2 Instances and Load Balancers - using Terraform and configure them with Ansible. You will learn to provision Kubernetes Clusters in AWS and Azure using Terraform. You would learn to run Terraform Configuration in Azure DevOps Pipelines. This course would be a perfect first step as an introduction to DevOps with Docker and Kubernetes.',

        'Devops',

        'assets/images/courses/devops.png',
        'assets/images/course-indetail/AWSDevops/ansible.png',
        'assets/images/course-indetail/AWSDevops/docker.png',
        'assets/images/course-indetail/AWSDevops/jenkins.png',
        'assets/images/course-indetail/AWSDevops/kubernets.png',
        'assets/images/course-indetail/AWSDevops/terraform.png',
        '',
        '',
        '',
        ''),
      new CourseInDetail(5, 'AWS Devops',
        'CI, CD, Micro Services, AWS Cloud, Monitoring and Logging, Test Automation, Storage',
        'assets/images/courses/aws-devops.png',

        'DevOps is all about People, Process, and Tools. In this course, you will understand the basics of DevOps and learn to do DevOps with Docker, Kubernetes, Ansible, Terraform, Azure DevOps, and Jenkins. You will learn to implement DevOps with Continuous Integration, Continuous Delivery, and Infrastructure as Code. You will play with 3 different clouds - AWS, Azure and Google Cloud.You will learn the basics of Kubernetes on the Google Kubernetes Engine implementing Service Discovery, Centralized Configuration, and Load Balancing for Microservices. You will do DevOps with Kubernetes using Terraform (Infrastructure as Code) and Azure DevOps (Continuous Delivery) on multiple cloud platforms (AWS and Azure)',
        'You will learn the basics of Continuous Integration and Continuous Delivery and implement them using Jenkins and Azure DevOps. You will learn to Create Kubernetes Clusters and Deploy Docker Containers of Microservices to Kubernetes using Azure DevOps Pipelines on the Cloud with AWS EKS and Azure AKS. You will learn the basics of Terraform and Ansible and implement Infrastructure as Code. You will provision a number of AWS Resources - EC2 Instances and Load Balancers - using Terraform and configure them with Ansible. You will learn to provision Kubernetes Clusters in AWS and Azure using Terraform. You would learn to run Terraform Configuration in Azure DevOps Pipelines. This course would be a perfect first step as an introduction to DevOps with Docker and Kubernetes.',

        'AWS Devops',

        'assets/images/course-indetail/AWSDevops/aws.png',
        'assets/images/courses/devops.png',
        'assets/images/course-indetail/AWSDevops/ansible.png',
        'assets/images/course-indetail/AWSDevops/docker.png',
        'assets/images/course-indetail/AWSDevops/jenkins.png',
        'assets/images/course-indetail/AWSDevops/kubernets.png',
        'assets/images/course-indetail/AWSDevops/terraform.png',
        '',
        '',
        ''),
      new CourseInDetail(6, 'Data Science',
        'Machine Learning, Python Programming, Jupyter notebooks, Rstudio, Data Analysis, Pandas, Numpy, Ipython, Probability And Statistics, Regression Analysis, Data Visualization (DataViz)',
        'assets/images/courses/ds.jpg',
        'Data science Training by Expert. Data science it is a software here distributing and processing the large set of data into the cluster of computers. This Course is designed to Master yourself in the Data Science Techniques and Upgrade your skill set to the next level to sustain your career in ever changing the software Industry.This Course covers from the basics of Data Science to Big Data Hadoop, Python, Apache Spark etc',
        ' Data Science is simply defined as an interdisciplinary field of study which uses scientific processes, approaches, methods, systems and algorithms to extract requisite insights and information from structured and unstructured data. The syllabus of Data Science is constituted of three main components: Big Data, Machine Learning and Modelling in Data Science. The major topics in the Data Science syllabus are Statistics, Coding, Business Intelligence, Data Structures, Mathematics, Machine Learning, and Algorithms, amongst others.',

        'Data Science',

        'assets/images/course-indetail/DS/pyspark.png',
        'assets/images/course-indetail/DS/python.png',
        'assets/images/course-indetail/DS/jupyter.png',
        'assets/images/course-indetail/DS/scipy.png',
        'assets/images/course-indetail/DS/numpy.svg',
        'assets/images/course-indetail/DS/pandas.svg',

        'assets/images/course-indetail/DS/tensorflow.png',
        '',
        '',
        ''),
      new CourseInDetail(7, 'Machine Learning',
        'Decision Tree, Artificial Neural Network, Logistic regression, Linear Regression, Gradient Descent, Supervised Learning',
        'assets/images/courses/ml.png',
        'The course will nurture and transform you into a highly-skilled professional with an in-depth knowledge of various algorithms and techniques, such as regression, classification, supervised and unsupervised learning, Natural Language Processing, etc. Intellipaat’s best ML training also equips you to use Python programming language, a core to draw predictions from data.',
        'ML is one of the most sought-after courses by data companies globally, owing to the immense pace at which the world is shifting towards AI and automation. Hence, by leveraging Intellipaat’s ML training, you will be exposed to numerous high-paying job opportunities and that too, at the starting few phases of your career.',

        'Machine Learning',

        'assets/images/course-indetail/DS/pyspark.png',
        'assets/images/course-indetail/DS/python.png',
        'assets/images/course-indetail/DS/jupyter.png',
        'assets/images/course-indetail/DS/scipy.png',
        'assets/images/course-indetail/DS/numpy.svg',
        'assets/images/course-indetail/DS/pandas.svg',

        'assets/images/course-indetail/DS/tensorflow.png',
        '',
        '',
        ''),
      new CourseInDetail(8, 'Salesforce',
        'Apex, Visual Force, SOQL, SOSL, Governer Limits, APIs and Integrations, Deployment Process',
        'assets/images/courses/salesforce.png',
        'This Salesforce training course will equip you with all necessary skills to pursue a successful career with Salesforce CRM domain. You will be trained for the App Builder and Developer certifications. This course is meant for Salesforce Administration, App Builder and Platform Developer I, and it also includes advanced components of Salesforce. Some of the topics you will learn are CRM overview, data management, Salesforce automation, security, application design, working with dashboard and report creation.',
        'Salesforce is the world’s favorite Customer Relationship Management tool and is being deployed by some of the world’s biggest companies. This training can help you get jobs in administration and security departments in major companies for very high pay scale.',

        'Salesforce',

        'assets/images/course-indetail/salesforce/salesforce.png',
        'assets/images/course-indetail/salesforce/workbench.png',
        'assets/images/course-indetail/salesforce/flowbuilder.png',
        '',
        '',
        '',
        '',
        '',
        '',
        ''),
    ]
    return courses;
  }


  public getProduct(id: number) {
    let courses: CourseInDetail[] = this.getCourses();
    return courses.find(c => c.courseID == id);
  }
}
