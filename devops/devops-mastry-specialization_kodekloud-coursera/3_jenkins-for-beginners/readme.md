# Jenkins for Beginners

**Instructor:** [Michael Levan](https://www.coursera.org/instructor/~156404805) (via KodeKloud)

This beginner-level [course](https://www.coursera.org/learn/jenkins-for-beginners) focuses on Jenkins, a leading tool for Continuous Integration and Continuous Delivery (CI/CD). Jenkins is an open-source automation server that allows developers to build, test, and deploy applications faster by automating processes. It detects errors early in the development cycle, promotes team collaboration, and enhances productivity.

Throughout this [course](https://www.coursera.org/learn/jenkins-for-beginners), you'll learn key concepts like:
- Understanding CI/CD and its importance
- Jenkins installation and setup
- Creating pipelines and using plugins
- Jenkins security, backups, and administration
- Hands-on practice with Jenkins features to solidify your skills

This [course](https://www.coursera.org/learn/jenkins-for-beginners) includes detailed demos and practical exercises to help you grasp foundational concepts effectively.

### content
- [Jenkins for Beginners](#jenkins-for-beginners)
    - [content](#content)
  - [Module 1: Introduction](#module-1-introduction)
    - [1.1 Introduction to Jenkins](#11-introduction-to-jenkins)
    - [1.2 Application Details](#12-application-details)
    - [1.3 Working with the Application](#13-working-with-the-application)
    - [1.4 Hands-on Lab: Get Familiar with the Application](#14-hands-on-lab-get-familiar-with-the-application)
  - [Module 2: Getting Started with Jenkins](#module-2-getting-started-with-jenkins)
    - [2.1 What is CI/CD](#21-what-is-cicd)
      - [**Continuous Integration (CI):**](#continuous-integration-ci)
      - [**Continuous Delivery (CD):**](#continuous-delivery-cd)
      - [**Continuous Deployment (CD):**](#continuous-deployment-cd)
      - [**Key Differences: Continuous Delivery vs. Continuous Deployment**](#key-differences-continuous-delivery-vs-continuous-deployment)
      - [**CD Process Steps:**](#cd-process-steps)
    - [2.2 Why Jenkins?](#22-why-jenkins)
    - [Jenkins Getting Started](#jenkins-getting-started)
  - [Module 3: Installing Jenkins](#module-3-installing-jenkins)
    - [3.1 Installing Jenkins](#31-installing-jenkins)
    - [3.2 Install Jenkins on a VM](#32-install-jenkins-on-a-vm)
    - [3.3 Hands-on Lab: Install Jenkins on a VM](#33-hands-on-lab-install-jenkins-on-a-vm)
    - [3.4 Jenkins CLI](#34-jenkins-cli)
    - [3.5 Using Jenkins CLI](#35-using-jenkins-cli)
    - [3.6 Hands-on Lab: Jenkins CLI](#36-hands-on-lab-jenkins-cli)
    - [3.7 Graded Assessment: Jenkins prerequisites](#37-graded-assessment-jenkins-prerequisites)
  - [Module 4: System Administration with Jenkins](#module-4-system-administration-with-jenkins)
    - [4.1 Administering Jenkins](#41-administering-jenkins)
    - [4.2 Backup and Restoring Jenkins](#42-backup-and-restoring-jenkins)
    - [4.3 Backup Jenkins Demo](#43-backup-jenkins-demo)
    - [4.4 Restore Jenkins Demo](#44-restore-jenkins-demo)
    - [4.5 Hands-on Lab: Backup and Restore Jenkins](#45-hands-on-lab-backup-and-restore-jenkins)
    - [4.6 Graded Assessment: System Administration with Jenkins](#46-graded-assessment-system-administration-with-jenkins)
  - [Module 5: Jenkins Pipelines](#module-5-jenkins-pipelines)
    - [5.1 What is a Jenkinsfile?](#51-what-is-a-jenkinsfile)
      - [**1. Simple "Hello World" Pipeline**](#1-simple-hello-world-pipeline)
      - [**2. Pipeline with GitHub Integration**](#2-pipeline-with-github-integration)
      - [**3. Multistage Pipeline**](#3-multistage-pipeline)
      - [Key Takeaways](#key-takeaways)
    - [5.2 Run a Sample Pipeline in Jenkins](#52-run-a-sample-pipeline-in-jenkins)
      - [**1. Creating a New Pipeline Job**](#1-creating-a-new-pipeline-job)
      - [**2. Understanding Pipeline Types and Options**](#2-understanding-pipeline-types-and-options)
        - [**Pipeline Types:**](#pipeline-types)
        - [**Pipeline Options and Settings:**](#pipeline-options-and-settings)
      - [**3. Configuring the Pipeline Script**](#3-configuring-the-pipeline-script)
        - [**Basic Pipeline Example (Hello World):**](#basic-pipeline-example-hello-world)
      - [**4. Building the Pipeline**](#4-building-the-pipeline)
    - [5.3 Build a Multistage Pipeline in Jenkins](#53-build-a-multistage-pipeline-in-jenkins)
      - [**1. Start with a Single-Stage Pipeline**](#1-start-with-a-single-stage-pipeline)
      - [**2. Add Another Stage**](#2-add-another-stage)
      - [**3. Observe Multistage Execution**](#3-observe-multistage-execution)
      - [**4. Adding More Stages**](#4-adding-more-stages)
      - [**5. Key Concepts for Multistage Pipelines**](#5-key-concepts-for-multistage-pipelines)
    - [5.4 Build a CI Pipeline in Jenkins](#54-build-a-ci-pipeline-in-jenkins)
      - [**1. Install Necessary Plugins**](#1-install-necessary-plugins)
      - [**2. Create a New Pipeline Job**](#2-create-a-new-pipeline-job)
      - [**3. Define the Pipeline Script**](#3-define-the-pipeline-script)
        - [Basic Go CI Pipeline](#basic-go-ci-pipeline)
      - [**4. Add the Script to the Pipeline Job**](#4-add-the-script-to-the-pipeline-job)
      - [**5. Run the Pipeline**](#5-run-the-pipeline)
      - [**6. Verify Build Logs**](#6-verify-build-logs)
    - [5.5 Building a CD Pipeline in Jenkins](#55-building-a-cd-pipeline-in-jenkins)
      - [**1. Install Necessary Plugins**](#1-install-necessary-plugins-1)
      - [**2. Prepare the Jenkins Build Server**](#2-prepare-the-jenkins-build-server)
      - [**3. Create a New Pipeline Job**](#3-create-a-new-pipeline-job)
      - [**4. Define the Jenkinsfile Script**](#4-define-the-jenkinsfile-script)
        - [**CD Pipeline Script**](#cd-pipeline-script)
      - [**5. Add the Pipeline Script to Jenkins**](#5-add-the-pipeline-script-to-jenkins)
      - [**6. Run the Pipeline**](#6-run-the-pipeline)
      - [**7. Verify the Build Output**](#7-verify-the-build-output)
      - [**8. Notes and Troubleshooting**](#8-notes-and-troubleshooting)
    - [5.6 Full Pipeline Deployment with Jenkins](#56-full-pipeline-deployment-with-jenkins)
      - [**1. Define the Full Pipeline in a Jenkinsfile**](#1-define-the-full-pipeline-in-a-jenkinsfile)
      - [**2. Create the Pipeline Job**](#2-create-the-pipeline-job)
      - [**3. Configure the Pipeline**](#3-configure-the-pipeline)
      - [**4. Run the Pipeline**](#4-run-the-pipeline)
      - [**5. Verify the Deployment**](#5-verify-the-deployment)
      - [**6. Common Issues and Notes**](#6-common-issues-and-notes)
      - [**7. Key Takeaways**](#7-key-takeaways)
    - [5.7 Hands-on Lab: Building a CD pipeline](#57-hands-on-lab-building-a-cd-pipeline)
    - [5.8 Graded Assessment: Jenkins Pipeline](#58-graded-assessment-jenkins-pipeline)
  - [Certificate of Completion](#certificate-of-completion)
  - [Next Step After This Course](#next-step-after-this-course)


## Module 1: Introduction
### 1.1 Introduction to Jenkins
**What you'll learn in this course:**
- Setting up a Jenkins instance from scratch.
- Scaling Jenkins for larger projects.
- Building and deploying CI/CD pipelines.
- Managing Jenkins security and administration.
- Hands-on labs directly in the browser—no extra installations needed.

**Why hands-on labs matter:**
- They help you practice and retain theoretical knowledge.
- Enable you to apply skills to real-world scenarios, including job preparation.

**Challenges in traditional workflows:**
- Slow releases.
- Manual, error-prone builds.
- Lack of automation and repeatable processes.
- Frequent application failures due to human errors.

**Solution: Jenkins**
- Automates builds, tests, and deployments.
- Supports CI/CD workflows efficiently.
- Allows local installation, avoiding dependency on SaaS products.
- A proven and reliable CI/CD tool with a strong reputation in the industry.

This course combines theoretical knowledge, practical labs, and real-world projects to give you comprehensive experience in using Jenkins for modern development workflows.

### 1.2 Application Details

**About the application:**
- The application is a sample Go web app called `go-webapp`.
- Uses **GORM** as the database backend.
- Provides basic functionalities:
  - User login/logout.
  - Access to a **Swagger API** for interacting with API endpoints.

**Features of the application:**
- **Login Example:**
  - Enter credentials (e.g., "test", "test") to log in.
  - Displays login status and account details via API endpoints.
- **Swagger API:**
  - Displays available endpoints for the app.
  - Example endpoints:
    - `API/Auth/login/status` → Displays login status.
    - `API/Auth/account` → Shows logged-in account details.

**Repository Information:**
- The application is hosted on GitHub under the organization [`AdminTurnedDevOps`](https://github.com/AdminTurnedDevOps) in the `go-webapp-sample` [repository](https://github.com/AdminTurnedDevOps/go-webapp-sample).
- You can clone or fork the repo to experiment with it locally.

**Course focus:**
- This application will be used throughout the course to demonstrate the deployment process using Jenkins.
- Hands-on experience with the app ensures understanding of deployment concepts in a real-world scenario.

Feel free to explore the repository and get familiar with the application before diving into deployment with Jenkins!


### 1.3 Working with the Application

**Getting the application running:**
1. Clone the **Go web app sample repo** from GitHub.
2. Run the application:
   ```bash
   go run main.go
   ```
   - The application will start on port **8080**.
3. Open a browser and visit `http://localhost:8080`:
   - Log in using credentials like `test`, `test`.
   - Verify the app is running by accessing:
     - `/api/books` → Displays book-related data.
     - `/api/loginStatus` → Confirms login status.

**Testing the application:**
1. Navigate to the `controller` directory in your project.
2. Run all tests using the following command:
   ```bash
   go test -v .
   ```
   - This runs every test in the directory.
   - Results:
     - Successful tests display "PASS."
     - API calls return a `200` status.

**Manual testing issues:**
- Requires significant effort:
  - Start the application.
  - Open a browser to verify APIs.
  - Run tests in specific directories manually.
- Problematic for frequent changes:
  - Even small code changes (like a variable name) require retesting.
  - Frequent interruptions for manual testing slow down productivity.

**Automating tests with Jenkins:**
- Jenkins can run commands like `go test -v .` automatically in a CI pipeline.
- Benefits:
  - Automates unit, integration, and mock tests.
  - Eliminates manual effort in running and verifying tests.
  - CI pipelines handle frequent code changes efficiently.

**Swagger API:**
- The app provides a Swagger interface for API visualization:
  - Access it via `/swagger/index.html`.
  - Lists all API endpoints for the application.

**Key takeaway:**
Automating tests with Jenkins saves time and reduces errors. By integrating tests into a CI pipeline, you avoid manual processes and can handle frequent changes more efficiently. Now, head over to the labs to practice these concepts!

### 1.4 Hands-on Lab: Get Familiar with the Application
Use the link provided to access the lab and delve into the hands-on practice of the topic you just learned. [Lab 1.4](https://kodekloud.com/pages/free-labs/jenkins/get-familiar-with-the-application)

---

## Module 2: Getting Started with Jenkins
### 2.1 What is CI/CD
- **CI/CD** stands for **Continuous Integration** and **Continuous Deployment/Delivery**.
- It automates the process of packaging and deploying code to various systems (e.g., serverless environments, virtual machines, containers).

#### **Continuous Integration (CI):**
- **Purpose:** Automates code preparation and testing.
- **Analogy:** Think of CI as wrapping a gift. The code (gift pieces) is gathered, assembled, and packaged.

**Key Steps in CI:**
1. **Code Packaging:**
   - Clone the code repository (e.g., from GitHub).
   - Assemble and package the code, ensuring it's ready for deployment.

2. **Code Testing:**
   - Run automated tests (unit, integration, etc.) to ensure the code is functional.
   - Validate dependencies (e.g., required libraries or packages) to prevent runtime issues.

3. **Security Checks:**
   - Use tools like **security linters** or **SonarQube** to scan for vulnerabilities in the code.

#### **Continuous Delivery (CD):**
- **Purpose:** Deploy the packaged code to a target system with **manual intervention**.
- **Process:** After CI wraps the code, the deployment requires a person to click a button (e.g., in Jenkins) to initiate deployment.

#### **Continuous Deployment (CD):**
- **Purpose:** Deploy the packaged code to a target system **automatically**, without human intervention.
- **Process:** The entire process (from CI to deployment) is fully automated.

#### **Key Differences: Continuous Delivery vs. Continuous Deployment**
| **Aspect**              | **Continuous Delivery**                | **Continuous Deployment**               |
|-------------------------|----------------------------------------|-----------------------------------------|
| Deployment Trigger      | Manual (requires a button click).     | Automatic (zero human intervention).    |
| Example Workflow        | Dev pushes code → CI runs → Button click deploys the code. | Dev pushes code → CI/CD pipeline automatically deploys the code. |
| Use Case                | Useful when additional approvals are required. | Useful for fast-paced environments with minimal oversight. |

#### **CD Process Steps:**
1. **Authentication:**
   - Ensure proper credentials for the deployment system (e.g., AWS, Azure).

2. **Post-Deployment Validation:**
   - Run automated tests (e.g., UI or system tests) to confirm the application works as expected.
   - If tests fail, the deployment process stops.

**Why CI/CD Matters:**
- **Efficiency:** Reduces manual tasks and accelerates deployment cycles.
- **Reliability:** Automates testing to catch issues early.
- **Scalability:** Handles frequent code changes without adding operational overhead.

By understanding and implementing CI/CD, teams can streamline software delivery and improve overall productivity.

### 2.2 Why Jenkins?
Jenkins stands out as one of the most widely used CI/CD tools because of its flexibility, features, and cost-effectiveness. Here's why Jenkins is a great choice:

**1. Open-Source and Free**  
- Jenkins is 100% free to use, including all its features and plugins.  
- You can self-host it on various platforms:  
  - Virtual machines (VMs)  
  - Containers (e.g., Docker)  
  - Locally on a development machine (not recommended for production)  

**2. Extensive Plugin Ecosystem**  
- Offers **1,000+ plugins** for almost every major DevOps tool, cloud provider, and programming language.  
- Examples:  
  - Public cloud support: AWS, Azure, GCP  
  - Programming languages: Go, Python, Java, etc.  
  - DevOps tools: Kubernetes, Docker, Terraform  
- Open-source nature allows users to create custom plugins if needed.  

**3. Versatility and Hosting Options**  
- Can be deployed in different environments:  
  - On-premises (bare metal or virtualized environments)  
  - In the cloud  
  - In containers  
- Suitable for various scales, from local development setups to enterprise-level CI/CD workflows  

**4. Enterprise Support Options**  
- Although Jenkins is free, enterprise solutions are available for organizations that need:  
  - Professional support  
  - SaaS-style management  
  - Hosted Jenkins instances  

**Why Choose Jenkins?**  
- **Cost-effective:** Completely free for personal or organizational use  
- **Customizable:** Wide range of plugins and open-source extensibility  
- **Proven track record:** Jenkins has been around for a long time and is trusted by developers worldwide  
- **Scalable:** Works for small projects to large-scale enterprise needs  

Whether you're a beginner or a seasoned DevOps engineer, Jenkins provides the tools and flexibility to meet your CI/CD needs effectively.

### Jenkins Getting Started
Jenkins is like a "butler" that automates your CI/CD workflows. Its mascot reflects its purpose—handling repetitive tasks so you don’t have to.

**Exploring Jenkins.io:**
- The official Jenkins website, [jenkins.io](https://www.jenkins.io), is your starting point for everything Jenkins-related.

**Key Sections on the Website:**

1. **Blog:**
   - Contains updates about Jenkins, including:
     - Security vulnerabilities.
     - Guides like using containers as build agents.
     - New features and best practices.

2. **Documentation:**
   - Comprehensive and well-structured guides for installing and using Jenkins.
   - Example: Installing Jenkins using Docker.
     - Prerequisites for MacOS, Linux, etc.
     - Commands and steps clearly documented.
   - Covers everything from setup to advanced configurations.

3. **Plugins:**
   - Extend Jenkins functionality by integrating with other systems.
   - Examples:
     - Azure plugins: Azure App Services, Key Vault, ACI, etc.
     - Plugins for various cloud providers and DevOps tools.
   - Vast library of plugins supports almost any workflow.

4. **Community:**
   - Connect with Jenkins users and contributors:
     - Join meetups and discussions.
     - Contribute to Jenkins development (code, testing, documentation).
     - Seek help and share knowledge with a global community.

5. **Sub-Projects:**
   - Explore additional Jenkins projects like:
     - Jenkins Configuration as Code.
     - Community-driven initiatives and area meetups.

6. **Roadmap and Updates:**
   - Stay informed about upcoming features, fixes, and project directions.
   - Transparency in development plans.

**Why Start at Jenkins.io?**
- Centralized resource for everything Jenkins-related:
  - Community connections.
  - Plugin discovery.
  - Installation guides and best practices.
  - Up-to-date news and security alerts.

If you’re looking to learn Jenkins or get started independently, Jenkins.io is the best place to begin. It’s a one-stop hub for all your Jenkins needs!

---

## Module 3: Installing Jenkins
### 3.1 Installing Jenkins

Installing Jenkins is straightforward and doesn't require much setup. Here's an overview of the process:

**Environment for Installation:**
- Jenkins will be installed on **Ubuntu 20.04**.
- The virtual machine is hosted on Azure, but you can use any environment:
  - AWS, GCP, or any other cloud platform.
  - A local virtual machine on your desktop or laptop.
  - Bare-metal hardware, if preferred.

**Steps to Install Jenkins:**
1. **Set up the Ubuntu Environment:**
   - Ensure you have a clean Ubuntu 20.04 instance ready for installation.
   - Open the terminal and connect to your VM.

2. **Install Required Dependencies:**
   - Jenkins requires dependencies like Java to run. These will be installed as part of the process.

3. **Install Jenkins:**
   - Download and install Jenkins using the official package manager commands.
   - Open the necessary ports to access Jenkins (e.g., port 8080 by default).

4. **Access the Jenkins Portal:**
   - Once installed, log in to the Jenkins web interface.
   - Begin exploring the UI to configure and manage CI/CD pipelines.

**Why Ubuntu 20.04?**
- It's a widely used Linux distribution with excellent support for Jenkins.

With just a few terminal commands and some basic setup, you'll have Jenkins up and running, ready to start building and automating your CI/CD workflows.

### 3.2 Install Jenkins on a VM

Here’s how to set up Jenkins on a virtual machine step by step:

**1. Setting Up the VM**
- Use any virtualization platform (Azure, AWS, GCP, or local setup).  
- Example:  
  - VM configuration: Ubuntu 20.04, 1 vCPU, 2 GB RAM, premium SSD storage.
  - Open port **22** for SSH access (for demo purposes only; restrict this in production).

**Steps to Create and Access the VM:**
1. Spin up a VM (Azure example: create a virtual machine in the portal, configure resources, and set username/password for SSH).
2. SSH into the VM:
   ```bash
   ssh username@<public_IP_address>
   ```

**2. Update the System and Install Prerequisites**
- Update the package list:
  ```bash
  sudo apt update -y
  ```
- Install Java (required for Jenkins):
  ```bash
  sudo apt install openjdk-11-jdk -y
  ```

**3. Add Jenkins Repository and Install Jenkins**
- Add the Jenkins repository key:
  ```bash
  curl -fsSL https://pkg.jenkins.io/debian/jenkins.io.key | sudo tee /usr/share/keyrings/jenkins-keyring.asc > /dev/null
  ```
- Append the Jenkins repository to the source list:
  ```bash
  echo deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] https://pkg.jenkins.io/debian binary/ | sudo tee /etc/apt/sources.list.d/jenkins.list > /dev/null
  ```
- Update package lists:
  ```bash
  sudo apt update -y
  ```
- Install Jenkins:
  ```bash
  sudo apt install jenkins -y
  ```

**4. Start Jenkins**
- Start the Jenkins service:
  ```bash
  sudo systemctl start jenkins
  ```
- Check Jenkins status:
  ```bash
  sudo systemctl status jenkins
  ```

**5. Configure Firewall**
- Open port **8080** for Jenkins:
  ```bash
  sudo ufw allow 8080
  ```
- Verify firewall rules:
  ```bash
  sudo ufw status
  ```

**6. Access Jenkins in a Browser**
- Use the public IP of your VM and port **8080** in your browser:
  ```
  http://<public_IP>:8080
  ```

**7. Unlock Jenkins**
- Retrieve the initial admin password:
  ```bash
  sudo cat /var/lib/jenkins/secrets/initialAdminPassword
  ```
- Copy the password and paste it into the Jenkins unlock page.

**8. Configure Jenkins**
- Choose "Install Suggested Plugins" during setup.
- Create your first admin user (e.g., username: `mike`, with a custom password).
- Confirm the Jenkins URL (leave it as the public IP or set a custom DNS if available).
- Finish the setup.

**9. Start Using Jenkins**
- Once complete, you'll land on the Jenkins dashboard, ready to start building your CI/CD workflows.  

### 3.3 Hands-on Lab: Install Jenkins on a VM
Use the link provided to access the lab and delve into the hands-on practice of the topic you just learned. [Lab 3.3](https://kodekloud.com/pages/free-labs/jenkins/install-jenkins-on-a-vm)

### 3.4 Jenkins CLI

Jenkins offers a **Command Line Interface (CLI)** for those who prefer working through the terminal instead of the web UI. This can be a powerful way to interact with Jenkins, especially for advanced users or automation.

**Key Features of Jenkins CLI**  
1. Allows terminal-based interaction with Jenkins.  
2. Supports authentication via API tokens or SSH keys.  
3. Offers various commands for managing jobs, configurations, and builds.  

**Setting Up Jenkins CLI**  

**1. Authentication Methods**  
- **API Token**  
  - Go to your Jenkins portal.  
  - Click on your name (e.g., "Mike") and navigate to "Configure."  
  - Scroll down to find the **API Token** section.  
  - Generate a token and use it to authenticate CLI commands.  

- **SSH Key**  
  - Generate an SSH key pair if you don’t already have one:  
    ```bash
    ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
    ```  
  - View your public key:  
    ```bash
    cat ~/.ssh/id_rsa.pub
    ```  
  - Copy the public key and add it to your Jenkins user:  
    - In Jenkins, go to "Configure."  
    - Scroll to **SSH Keys** and paste the public key.  
    - Click "Save."  

**2. Using Jenkins CLI**  
- Download the `jenkins-cli.jar` file from your Jenkins instance:  
  ```
  http://<your-jenkins-url>/jnlpJars/jenkins-cli.jar
  ```  
- Run CLI commands using `java` and the `.jar` file:  
  ```bash
  java -jar jenkins-cli.jar -s http://<your-jenkins-url> -auth <username>:<API-token> <command>
  ```  

**Common Jenkins CLI Commands**  
- **View Jenkins Version:**  
  ```bash
  java -jar jenkins-cli.jar -s http://<your-jenkins-url> version
  ```  
- **List all jobs:**  
  ```bash
  java -jar jenkins-cli.jar -s http://<your-jenkins-url> list-jobs
  ```  
- **Build a specific job:**  
  ```bash
  java -jar jenkins-cli.jar -s http://<your-jenkins-url> build <job-name>
  ```  
- **Get job details:**  
  ```bash
  java -jar jenkins-cli.jar -s http://<your-jenkins-url> get-job <job-name>
  ```  

**Things to Note**  
- While the CLI is powerful, most users and courses focus on using the Jenkins UI.  
- CLI is best suited for tasks like scripting or automation when integrating Jenkins with other tools or workflows.  

If you want to explore Jenkins CLI, set up your authentication (API token or SSH), download the CLI jar file, and start experimenting with commands to see how it complements the Jenkins UI.  

### 3.5 Using Jenkins CLI

Jenkins CLI allows you to perform various tasks directly from the terminal. Here's how to get started with it and perform basic operations.

**1. Install Jenkins CLI**
- Go to your Jenkins portal.
- Navigate to **Manage Jenkins** > **Jenkins CLI**.
- Follow the instructions to download the `jenkins-cli.jar` file:
  ```bash
  wget http://<your-jenkins-url>/jnlpJars/jenkins-cli.jar
  ```
- Confirm the file is downloaded:
  ```bash
  ls
  ```

**2. Authenticate with Jenkins**
- Open your Jenkins portal.
- Click on your username > **Configure**.
- Go to the **API Tokens** section.
- If no tokens exist, click **Add New Token** > **Generate**.
- Copy the generated API token.

**3. Connect to Jenkins via CLI**
- Use the following command to authenticate:
  ```bash
  java -jar jenkins-cli.jar -s http://<your-jenkins-url> -auth <username>:<API-token>
  ```
- If successful, you'll see a list of available CLI commands.

**4. List Jenkins Jobs**
- Run the following command to list all jobs:
  ```bash
  java -jar jenkins-cli.jar -s http://<your-jenkins-url> -auth <username>:<API-token> list-jobs
  ```
- Example output:
  ```
  test1
  ```

**5. Create a New Job**
- In the Jenkins UI:
  1. Click **New Item**.
  2. Enter a name (e.g., `test2`) and select **Pipeline**.
  3. Scroll to **Try Sample Pipeline** and select **Hello World**.
  4. Click **Save**.
- Confirm the new job appears by listing jobs again:
  ```bash
  java -jar jenkins-cli.jar -s http://<your-jenkins-url> -auth <username>:<API-token> list-jobs
  ```
- Example output:
  ```
  test1
  test2
  ```

**6. Build a Job**
- Trigger a build for `test2`:
  ```bash
  java -jar jenkins-cli.jar -s http://<your-jenkins-url> -auth <username>:<API-token> build test2
  ```
- Check the Jenkins portal to see the build status.

**7. Key Takeaways**
- The base CLI command structure is always the same:
  ```bash
  java -jar jenkins-cli.jar -s http://<your-jenkins-url> -auth <username>:<API-token> <command>
  ```
- Only the `<command>` changes based on what you want to do (e.g., `list-jobs`, `build <job-name>`).

### 3.6 Hands-on Lab: Jenkins CLI
Use the link provided to access the lab and delve into the hands-on practice of the topic you just learned. [Lab 3.6](https://kodekloud.com/pages/free-labs/jenkins/jenkins-cli)

### 3.7 Graded Assessment: Jenkins prerequisites
**1. What could be the most probable reason for this failure?**  
**Answer:** The deployment configuration is incorrect  
- Explanation: Deployment failures often result from incorrect configurations, such as incorrect paths, environment variables, or missing dependencies.

**2. What is the primary role of Jenkins in a CI/CD pipeline?**  
**Answer:** To automate manual tasks  
- Explanation: Jenkins automates tasks like building, testing, and deploying code, which streamlines CI/CD pipelines.

**3. Why is Jenkins widely used for CI/CD over other tools?**  
**Answer:** It is open-source and has extensive plugin support  
- Explanation: Jenkins is popular due to its open-source nature and the vast library of plugins that support integration with almost any tool.

**4. What is one advantage of Jenkins' open-source nature in the context of CI/CD?**  
**Answer:** The community can contribute to and improve the software  
- Explanation: Being open-source allows developers worldwide to contribute to Jenkins, adding features, fixing bugs, and improving its functionality.

**5. Which of the following commands can be used with the Jenkins CLI?**  
**Answer:**  
- `java -jar jenkins-cli.jar -s JENKINS_URL list-jobs`  
- `java -jar jenkins-cli.jar -s JENKINS_URL build JOB`  
- `java -jar jenkins-cli.jar -s JENKINS_URL help`  
- `java -jar jenkins-cli.jar -s JENKINS_URL install PLUGIN`  
- Explanation: These commands are valid Jenkins CLI commands, allowing users to list jobs, build jobs, get help, and install plugins directly from the terminal.

---

## Module 4: System Administration with Jenkins
### 4.1 Administering Jenkins

Proper administration of Jenkins is crucial to ensure its stability, performance, and scalability. Here are the key aspects to focus on when managing Jenkins:

**1. Backup and Restore**  
- **Backup Strategy:**  
  - Regularly back up important Jenkins files and folders, such as job configurations, plugins, and user data.  
  - Store backups securely in a location separate from the server.  

- **Restore Strategy:**  
  - Test your restore process periodically to ensure it works correctly.  
  - Without a reliable restore process, backups lose their value.  

**2. Monitoring Jenkins**  
- **Why Monitor:**  
  - Detect and diagnose errors promptly to maintain system health.  
  - Monitor for performance bottlenecks, resource usage, and failed jobs.  

- **How to Monitor:**  
  - Use built-in Jenkins logs and monitoring tools.  
  - Integrate with external monitoring solutions (e.g., Prometheus, Grafana).  

**3. Scaling Jenkins**  
- **Importance of Scaling:**  
  - As workloads increase, scale Jenkins to handle additional CI/CD pipelines and users.  
  - Scaling ensures the system remains responsive under heavy loads.  

- **Scaling Strategies:**  
  - Add additional Jenkins servers or agents to distribute the load.  
  - Use containers (e.g., Kubernetes) for dynamic scaling based on demand.  

**4. System Management**  
- **Ongoing Maintenance:**  
  - Regularly apply updates and patches to Jenkins and its plugins.  
  - Address any vulnerabilities to ensure system security.  

- **Proactive Management:**  
  - Periodically review system configurations and performance metrics.  
  - Clean up unused jobs, plugins, and configurations to optimize performance.  

**5. Understanding and Diagnosing Errors**  
- Use system logs and monitoring data to identify issues.  
- Develop troubleshooting strategies to resolve errors efficiently.  

**Key Takeaway**  
Jenkins is not a "set it and forget it" system. It requires active management, regular updates, and scaling to ensure it meets the demands of a growing organization. With proper administration, Jenkins can be a reliable and efficient CI/CD platform.


### 4.2 Backup and Restoring Jenkins

Backing up and restoring Jenkins is critical for maintaining the integrity of your CI/CD pipelines and configurations. Here's what you need to know:

**1. Types of Backups**  
- **Full Backups:** Copies the entire Jenkins system, including all files and configurations.  
- **Snapshots:** Captures the system state at a specific point in time, useful for quick restores.  
- **Incremental Backups:** Only backs up files that have changed since the last backup, saving space and time.

**2. Key Files and Folders to Back Up**  
- **Jenkins Home Folder (`JENKINS_HOME`):**  
  - This is the most critical directory to back up, as it contains all essential Jenkins data.  
  - Key contents of `JENKINS_HOME`:  
    - **Configuration Files (`config.xml`):** Stores Jenkins' setup and environment configurations.  
    - **Jobs Folder (`jobs/`):** Contains all job definitions, including CI/CD pipelines. Losing this folder would mean losing all deployment configurations.  
    - **User Data and Credentials:** Ensures you retain user accounts, roles, and security settings.  
    - **Plugin Data:** Keeps your plugin configurations intact.

**3. Backup Strategies**  
- Automate backups using scripts or plugins to ensure they are consistent and timely.  
- Store backups in a secure, offsite location to protect against system failures or disasters.  
- Test backups periodically by restoring them in a test environment to verify integrity.

**4. Restore Process**  
- Stop the Jenkins service before restoring to avoid conflicts.  
- Replace the existing `JENKINS_HOME` folder with the backed-up version.  
- Start the Jenkins service and verify the system is functioning as expected.  

**5. Tools and Methods for Backup**  
- **Manual Backups:** Use commands like `tar` or `rsync` to copy the `JENKINS_HOME` directory.  
- **Jenkins Backup Plugins:** Automate the process with plugins like ThinBackup or Periodic Backup.  
- **Snapshots:** Use cloud or virtualization tools to create snapshots of the system.  

**Key Takeaway**  
Ensuring the **JENKINS_HOME** folder is backed up is the most critical step. Without it, you risk losing job definitions, configurations, and the ability to deploy applications. A robust backup and restore strategy guarantees that Jenkins remains resilient against failures or data loss.

### 4.3 Backup Jenkins Demo

There are several ways to back up Jenkins, each offering flexibility based on your requirements and environment. Here's a breakdown of the process:

**1. Backup Methods**

**File System Snapshots**  
- Snapshots capture the current state of your Jenkins system.  
- While useful for daily operations, they are not ideal as a long-term backup solution.  

**Backup Plugins**  
- Plugins provide a managed way to automate backups directly within Jenkins.  
- Example: [**ThinBackup**](https://plugins.jenkins.io/thinBackup/) plugin, widely used for its simplicity and functionality.  

**Custom Shell Scripts**  
- You can write or use existing shell scripts to back up Jenkins.  
- Example: Shell scripts available on [GitHub](https://github.com/sue445/jenkins-backup-script) for automating Jenkins backups.

**2. Using the ThinBackup Plugin**

**Installing the Plugin**
1. Go to the Jenkins portal and click **Manage Jenkins** > **Manage Plugins**.  
2. In the **Available** tab, search for "ThinBackup."  
3. Select the plugin and click **Install without restart**.  
4. Once installed, navigate back to **Manage Jenkins** to access the ThinBackup configuration.

**Configuring ThinBackup**
1. In the ThinBackup section, click **Settings**.  
2. Configure the following:  
   - **Backup Directory:** Specify the directory where backups will be stored (e.g., `/home/jenkins-backup`).  
   - **Backup Schedule:** Set schedules for full and differential backups.  
   - **Files to Include/Exclude:** Customize which files and directories to back up.  
3. Save the settings.

**Running a Backup**
1. Navigate to the ThinBackup section.  
2. Click **Backup Now** to initiate a manual backup.  

**3. Setting Up the Backup Directory**

**Creating a Backup Directory**
1. Access the Jenkins server via SSH:
   ```bash
   ssh username@server-ip
   ```
2. Create a directory for backups:
   ```bash
   mkdir /home/jenkins-backup
   ```
3. Set appropriate permissions:
   ```bash
   chmod 777 /home/jenkins-backup
   ```
   - For production, adjust permissions according to your organization's policies.

**Verifying the Backup**
1. Navigate to the backup directory:
   ```bash
   cd /home/jenkins-backup
   ```
2. List the contents:
   ```bash
   ls
   ```
   - You should see the backup files created by ThinBackup.

**4. Key Takeaways**
- Use plugins like **ThinBackup** for a managed and user-friendly backup process.  
- Ensure the backup directory has the appropriate permissions.  
- Snapshots and scripts can supplement your backup strategy but are not replacements for well-configured tools.  

By automating backups and maintaining a reliable backup strategy, you can ensure the safety of your Jenkins configurations, jobs, and critical data.

### 4.4 Restore Jenkins Demo

Restoring Jenkins from a backup is straightforward when using tools like ThinBackup. Here's how you can restore Jenkins to a previous state.

**Steps to Restore Jenkins**

**1. Ensure You Have a Valid Backup**  
- Before starting the restore process, confirm that you have a recent backup.  
- Check the backup directory specified in the ThinBackup settings to ensure the necessary files are present.

**2. Navigate to ThinBackup Restore**
- Open the Jenkins portal and go to **Manage Jenkins**.  
- Click on **ThinBackup**.  
- Select the **Restore** option.

**3. Select the Desired Backup**  
- In the Restore section, you'll see a list of available backups with their timestamps.  
- Choose the most recent backup or the specific one you want to restore.  

**4. Initiate the Restore Process**
- Click **Restore** for the selected backup.  
- Jenkins will automatically restore the configurations, jobs, and other data from the selected backup.

**5. Verify the Restore**  
- After the restore process is complete, check the Jenkins dashboard to ensure:  
  - All jobs and configurations are present.  
  - Plugins and settings are intact.  
- Run a test build to confirm functionality.

**Key Points to Remember**
- The restore process overwrites the current Jenkins configurations and jobs with those from the backup. Ensure you're restoring from the correct backup file.  
- ThinBackup makes the restore process quick and straightforward, especially for minimal setups.  
- For larger systems with extensive data, the restore process might take longer.

### 4.5 Hands-on Lab: Backup and Restore Jenkins
Use the link provided to access the lab and delve into the hands-on practice of the topic you just learned. [Lab 4.5](https://kodekloud.com/pages/free-labs/jenkins/backup-and-restore-jenkins)

### 4.6 Graded Assessment: System Administration with Jenkins
**1. What type of backup is created when only changes since the last backup are stored?**  
**Answer:** incremental  

**2. What content is stored in the Jenkins home folder that makes it essential for backup?**  
**Answer:** Job definitions and build records  

**3. Which of the following are steps involved in restoring Jenkins from a backup using ThinBackup?**  
**Answer:**  
- Restoring the Jenkins home folder from the backup  
- Restarting the Jenkins server after restoring the backup  

**4. What is the name of the plug-in commonly used for restoring Jenkins from a backup?**  
**Answer:** thinbackup  

**5. When managing Jenkins, which of the following tasks are important to perform?**  
**Answer:**  
- System management  
- Monitoring  
- Scaling  
- Diagnosing errors  

**6. Why is it important to backup the Jenkins home folder?**  
**Answer:** all of these  

**7. Which of the following is NOT a viable backup solution available in Jenkins?**  
**Answer:** database mirroring  

**8. You want to create a new backup for a Jenkins server. What is the first step you should take?**  
**Answer:** identify the data to be backed up  

**9. You've noticed some errors in your Jenkins server. Which of the following should be your first step to diagnose the problem?**  
**Answer:** check the Jenkins system log  

**10. Which of the following is the most reliable backup solution for a Jenkins server?**  
**Answer:** using a plugin to perform regular backups

---


## Module 5: Jenkins Pipelines
### 5.1 What is a Jenkinsfile?

A **Jenkinsfile** is a text file that contains the definition of a Jenkins pipeline. It allows you to define the entire CI/CD process as code, making it easier to version, maintain, and share. The file typically uses [**Groovy**](https://www.tutorialspoint.com/groovy) syntax and is saved in the root of your project's repository.

Below is a generalized Jenkinsfile with examples of a **simple pipeline**, **pipeline with GitHub integration**, and a **multistage pipeline**.

#### **1. Simple "Hello World" Pipeline**
This Jenkinsfile demonstrates a basic pipeline with one stage that echoes a message.

```groovy
pipeline {
    agent any
    stages {
        stage('Hello World') {
            steps {
                echo 'Hello World'
            }
        }
    }
}
```

**Explanation:**
- `pipeline {}`: Defines the overall structure of the Jenkins pipeline.
- `agent any`: Specifies that any available agent (build node) can run this pipeline.
- `stages {}`: Contains the pipeline's stages.
- `stage('Hello World')`: Represents a single stage in the pipeline.
- `steps {}`: Defines the actions to perform in the stage.

#### **2. Pipeline with GitHub Integration**
This example pulls code from a GitHub repository and sets up the pipeline.
```groovy
pipeline {
    agent any
    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/example/repo.git'
            }
        }
        stage('Build') {
            steps {
                echo 'Building the application...'
            }
        }
    }
}
```

**Explanation:**
- `git`: Pulls code from a GitHub repository (replace with your repo URL).
- `stage('Checkout Code')`: Fetches the code from the specified branch.
- `stage('Build')`: Simulates a build process.


#### **3. Multistage Pipeline**
This pipeline includes multiple stages (e.g., Dev and UAT) to demonstrate a more complex workflow.

```groovy
pipeline {
    agent any
    stages {
        stage('Dev') {
            steps {
                echo 'Running in the Dev environment...'
            }
        }
        stage('UAT') {
            steps {
                echo 'Running in the UAT environment...'
            }
        }
    }
}
```

**Explanation:**
- Each stage (`Dev` and `UAT`) represents a phase in the pipeline.
- The same steps (e.g., building and testing code) can be applied across stages.

#### Key Takeaways
- **Single-Stage Pipelines:** Useful for simple processes like running a script or echoing a message.  
- **GitHub Integration:** Automates the process of pulling code for CI/CD workflows.  
- **Multistage Pipelines:** Helps implement workflows across multiple environments (e.g., Dev, UAT, Production).  

This structure provides a foundation for more complex pipelines, such as integrating testing frameworks, deploying to cloud environments, or containerizing applications.

### 5.2 Run a Sample Pipeline in Jenkins

Creating a sample pipeline in Jenkins is an excellent way to understand its options, settings, and workflow before diving into more complex pipelines. Here’s a step-by-step guide with details on pipeline types, options, and their purposes.

#### **1. Creating a New Pipeline Job**

1. Go to the Jenkins **Dashboard**.  
2. Click **New Item**.  
3. Enter a name for your pipeline, e.g., `Test4`.  
4. Select **Pipeline** from the available options and click **OK**.


#### **2. Understanding Pipeline Types and Options**

##### **Pipeline Types:**
- **Freestyle Project:**  
  A flexible option for building and running jobs that combines SCM (source control management), build systems, and other tasks. Useful for general-purpose jobs but less structured compared to pipelines.

- **Pipeline (Scripted or Declarative):**  
  Defines CI/CD workflows as code using Groovy syntax. Recommended for complex workflows requiring stages, steps, and condition-based flows.

- **Multi-Configuration Project:**  
  Suitable for running jobs across multiple environments or configurations (e.g., testing different OS or Java versions).

- **Folder:**  
  Creates a container to organize and group related projects.

- **Multibranch Pipeline:**  
  Automatically sets up pipelines for different branches in a repository. Ideal for projects with active development across multiple branches.

- **Organization Folder:**  
  Similar to multibranch pipelines but designed for large repositories with sub-projects.

##### **Pipeline Options and Settings:**
- **Description:**  
  Add a brief description, e.g., `A sample pipeline to test Jenkins`.

- **Discard Old Builds:**  
  Limits the number of build records stored to reduce storage usage.

- **Do Not Allow Concurrent Builds:**  
  Ensures only one build runs at a time, useful when builds interact with shared resources.

- **Throttle Builds:**  
  Controls the rate of builds to avoid overloading agents or servers.

- **Build Triggers:**
  - **Build Periodically:** Use cron-like expressions to schedule builds (e.g., `H 2 * * *` for daily 2 AM builds).
  - **GitHub Hook Trigger:** Automatically builds when a push event is detected in GitHub.

- **Pipeline Definition:**  
  Write the pipeline script in Jenkins, or pull it from SCM (e.g., GitHub).

#### **3. Configuring the Pipeline Script**
##### **Basic Pipeline Example (Hello World):**
1. In the **Pipeline** section, select **Pipeline script**.  
2. Add the following script:
   ```groovy
   pipeline {
       agent any
       stages {
           stage('Dev') {
               steps {
                   echo 'Hello World'
               }
           }
       }
   }
   ```
3. **Explanation:**
   - `pipeline {}`: Defines the pipeline structure.
   - `agent any`: Specifies that any available Jenkins agent can execute the job.
   - `stages {}`: Contains the steps grouped by stages.
   - `stage('Dev')`: Defines a stage named "Dev."
   - `steps {}`: Lists the actions to perform (e.g., `echo` outputs text to the console).

#### **4. Building the Pipeline**

1. Click **Save**.  
2. On the pipeline page, click **Build Now**.  
3. Check the **Build History** section to confirm that the build ran successfully.

### 5.3 Build a Multistage Pipeline in Jenkins

Building a multistage pipeline in Jenkins allows you to define and execute different phases of your CI/CD process, such as development, testing, and deployment. Here’s how to create and visualize a multistage pipeline.

#### **1. Start with a Single-Stage Pipeline**

Create or open a pipeline job in Jenkins.  
1. Go to the Jenkins **Dashboard** and click on your pipeline job.  
2. Click **Configure** to edit the pipeline.  
3. Add a basic pipeline script with one stage (e.g., "Dev"):

```groovy
pipeline {
    agent any
    stages {
        stage('Dev') {
            steps {
                echo 'Running in the Dev environment...'
            }
        }
    }
}
```

Click **Save** and then **Build Now** to confirm the single-stage pipeline runs successfully.


#### **2. Add Another Stage**

1. Return to **Configure** for the pipeline job.  
2. Scroll down to the **Pipeline** section and modify the script to add a new stage (e.g., "UAT"):

```groovy
pipeline {
    agent any
    stages {
        stage('Dev') {
            steps {
                echo 'Running in the Dev environment...'
            }
        }
        stage('UAT') {
            steps {
                echo 'Running in the UAT environment...'
            }
        }
    }
}
```

3. Click **Save** and then **Build Now** to execute the updated pipeline.

#### **3. Observe Multistage Execution**

- After the build, go to the **Pipeline View** or **Build History**.  
- You'll now see two stages: `Dev` and `UAT`.  
- If you check the build history:
  - Previous builds will show only the `Dev` stage (before adding `UAT`).
  - Current builds will show both stages, reflecting the transition from single to multistage.

#### **4. Adding More Stages**

To extend the pipeline with additional stages, repeat the process by defining new stages. For example, add a "Prod" stage:

```groovy
pipeline {
    agent any
    stages {
        stage('Dev') {
            steps {
                echo 'Running in the Dev environment...'
            }
        }
        stage('UAT') {
            steps {
                echo 'Running in the UAT environment...'
            }
        }
        stage('Prod') {
            steps {
                echo 'Deploying to Production...'
            }
        }
    }
}
```

#### **5. Key Concepts for Multistage Pipelines**

- **Stages**: Each stage represents a phase of the pipeline (e.g., Dev, UAT, Prod).  
- **Steps**: Actions performed within a stage, such as running tests, building code, or deploying.  
- **History Tracking**: Jenkins retains build history, allowing you to track changes as stages are added or modified.  

### 5.4 Build a CI Pipeline in Jenkins

Here’s how to create a Continuous Integration (CI) pipeline in Jenkins to build and test a Go application.

#### **1. Install Necessary Plugins**

1. Go to **Manage Jenkins** > **Manage Plugins**.  
2. In the **Available** tab, search for the **Go** plugin.  
3. Install the plugin. If it’s already installed, skip this step.  
4. Restart Jenkins after installation to ensure the plugin is active.


#### **2. Create a New Pipeline Job**

1. Navigate to the Jenkins **Dashboard**.  
2. Click **New Item**.  
3. Enter a name for your pipeline, e.g., `go3`.  
4. Select **Pipeline** and click **OK**.  


#### **3. Define the Pipeline Script**

##### Basic Go CI Pipeline

```groovy
pipeline {
    agent any
    tools {
        go 'go-1.17' // Use the appropriate Go version installed on Jenkins
    }
    environment {
        GO111MODULE = 'on' // Ensures Go modules are enabled for dependency management
    }
    stages {
        stage('Test') {
            steps {
                // Clone the repository
                git branch: 'main', url: 'https://github.com/example/repo.git'
                
                // Run unit tests
                sh 'go test ./...'
            }
        }
    }
}
```

**Explanation:**  
- `agent any`: Runs the pipeline on any available agent.  
- `tools { go 'go-1.17' }`: Specifies the Go version to use. Update this to match your environment.  
- `environment {}`: Sets the Go module flag to `on`, allowing the use of Go modules.  
- `stage('Test')`: Defines a testing stage.  
- `sh 'go test ./...'`: Runs tests for all Go packages in the repository.  

#### **4. Add the Script to the Pipeline Job**

1. Scroll down to the **Pipeline** section in the job configuration.  
2. Choose **Pipeline Script**.  
3. Paste the pipeline script into the editor.  
4. Click **Save**.

#### **5. Run the Pipeline**

1. Go back to the **Dashboard** and select your job.  
2. Click **Build Now**.  
3. Monitor the build logs to confirm that:  
   - The repository was cloned successfully.  
   - The Go tests ran without errors.  

#### **6. Verify Build Logs**

1. Open the **Build History** and select the latest build.  
2. Review the logs to ensure:  
   - Tests were detected and executed.  
   - All tests passed successfully.  

### 5.5 Building a CD Pipeline in Jenkins

In this tutorial, we’ll extend the CI pipeline to include **Continuous Deployment (CD)** by building a Docker image of our application. This pipeline automates the process of pulling code from GitHub, testing it, and creating a deployable Docker image.

#### **1. Install Necessary Plugins**

1. Go to **Manage Jenkins** > **Manage Plugins**.  
2. Search for and install the following Docker-related plugins:  
   - **Docker API Plugin**  
   - **Docker Commons Plugin**  
   - **Docker Pipeline Plugin**  
   - **Docker Plugin**  
3. Restart Jenkins after installing the plugins to ensure they are active.

#### **2. Prepare the Jenkins Build Server**

1. Ensure Docker is installed and running on the Jenkins build server:
   ```bash
   docker --version
   ```
2. Verify Jenkins has permission to run Docker commands. You may need to add the Jenkins user to the Docker group:
   ```bash
   sudo usermod -aG docker jenkins
   ```

#### **3. Create a New Pipeline Job**

1. Go to the Jenkins **Dashboard** and click **New Item**.  
2. Enter a name for the pipeline, e.g., `cicd_pipeline`.  
3. Select **Pipeline** and click **OK**.  

#### **4. Define the Jenkinsfile Script**

##### **CD Pipeline Script**

```groovy
pipeline {
    agent any
    tools {
        go 'go-1.17' // Adjust the Go version as needed
    }
    environment {
        GO111MODULE = 'on' // Enable Go modules
    }
    stages {
        stage('Development') {
            steps {
                echo 'Pulling code from GitHub...'
                git branch: 'main', url: 'https://github.com/example/repo.git'
            }
        }
        stage('Build Image') {
            steps {
                echo 'Building Docker image...'
                script {
                    docker.build('my-go-app:latest')
                }
            }
        }
    }
}
```

**Explanation:**

- **Development Stage**:  
  - Pulls the latest code from the specified GitHub repository.  

- **Build Image Stage**:  
  - Uses the `docker.build` command (from the Docker Pipeline Plugin) to create a Docker image.  
  - The image is tagged as `my-go-app:latest`.  

#### **5. Add the Pipeline Script to Jenkins**

1. Scroll down to the **Pipeline** section in the job configuration.  
2. Select **Pipeline Script** and paste the Jenkinsfile script above.  
3. Click **Save**.

#### **6. Run the Pipeline**

1. Click **Build Now** to trigger the pipeline.  
2. Monitor the pipeline stages:
   - **Development**: Confirms code is pulled from GitHub.  
   - **Build Image**: Builds the Docker image using the application code.  

#### **7. Verify the Build Output**

1. Click on the build number in the **Build History**.  
2. Open **Console Output** to review the build logs:
   - Verify the code was fetched successfully.
   - Confirm the Docker image was built without errors.  

#### **8. Notes and Troubleshooting**

- If the build takes longer during the **Build Image** stage, it is likely downloading the base Go Docker image. This is normal and happens only the first time.  
- Ensure your Jenkins server has Docker properly configured and sufficient permissions to run Docker commands.  


### 5.6 Full Pipeline Deployment with Jenkins

This tutorial walks you through creating a complete CI/CD pipeline to test, build, and deploy a Go web application using Jenkins. The pipeline consists of three stages: **Test**, **Build**, and **Run**, culminating in running the application.

#### **1. Define the Full Pipeline in a Jenkinsfile**

Below is the Jenkinsfile for the full pipeline:

```groovy
pipeline {
    agent any
    tools {
        go 'go-1.17' // Specify the Go version
    }
    environment {
        GO111MODULE = 'on' // Enable Go modules
    }
    stages {
        stage('Test') {
            steps {
                echo 'Running unit tests...'
                git branch: 'main', url: 'https://github.com/example/repo.git' // Replace with your repository
                sh 'go test ./...' // Run tests in all directories
            }
        }
        stage('Build') {
            steps {
                echo 'Building the application...'
                sh 'go build -o go-webapp-sample'
            }
        }
        stage('Run') {
            steps {
                echo 'Running the application...'
                sh './go-webapp-sample'
            }
        }
    }
}
```

**Explanation:**
- **Test Stage:** Pulls the code from GitHub and runs unit tests in all directories.
- **Build Stage:** Compiles the application and outputs a binary named `go-webapp-sample`.
- **Run Stage:** Executes the compiled binary, starting the application.

#### **2. Create the Pipeline Job**

1. Go to the Jenkins **Dashboard** and click **New Item**.  
2. Name the pipeline (e.g., `go_full_pipeline`) and select **Pipeline**.  
3. Click **OK**.  

#### **3. Configure the Pipeline**

1. Scroll down to the **Pipeline** section.  
2. Select **Pipeline Script** and paste the Jenkinsfile above.  
3. Click **Save**.  

#### **4. Run the Pipeline**

1. Click **Build Now** to trigger the pipeline.  
2. Monitor the progress:
   - **Test Stage:** Ensures all tests pass successfully.  
   - **Build Stage:** Compiles the code and generates the binary in the workspace directory.  
   - **Run Stage:** Starts the application and confirms it’s running.  

#### **5. Verify the Deployment**

1. Once the pipeline completes, retrieve the IP address of the Jenkins host.  
2. Open a browser and navigate to `http://<jenkins-host-ip>:8000`.  
3. Confirm the application is running and accessible.

#### **6. Common Issues and Notes**

- **Application Running but Error Displayed:**  
  The error message `Go WebApp sample not found` in the console output does not prevent the application from running. Verify the app is functional by accessing it in a browser.

- **Port Configuration:**  
  Ensure the application runs on the correct port (e.g., `8000`) and that the port is open on the Jenkins host.

- **Adjustments for Custom Pipelines:**  
  If you rename the pipeline, update any references in the `Run` stage or configuration.

#### **7. Key Takeaways**

- **Three Stages:** A full deployment pipeline includes testing, building, and running the application.  
- **Dynamic Workspace:** The application binary is built and executed within the Jenkins workspace directory.  
- **Verification:** Access the application through the Jenkins host's IP to ensure deployment success.  

By completing this pipeline, you now have a fully automated process for building, testing, and deploying your application using Jenkins.

### 5.7 Hands-on Lab: Building a CD pipeline
Use the link provided to access the lab and delve into the hands-on practice of the topic you just learned. [Lab 5.7](https://kodekloud.com/pages/free-labs/jenkins/building-a-cd-pipeline)


### 5.8 Graded Assessment: Jenkins Pipeline
**1. Which of the following are stages in a multi-stage pipeline?**  
**Answer:**  
- Compile  
- Deploy  
- Test  
- Cleanup  

**2. In a Jenkins pipeline, what does a stage represent?**  
**Answer:** A distinct subset of tasks performed through the entire process  

**3. You come across an error while running a Jenkins pipeline. What could be a possible reason for this error?**  
**Answer:** All of the above  
- The necessary plugins are not installed  
- The Jenkins server is down  
- The Jenkinsfile has a syntax error  

**4. What is the term for the process of continuous integration and continuous delivery in Jenkins?**  
**Answer:** cicd  

**5. Which of the following are necessary components when setting up stages in a Jenkinsfile?**  
**Answer:**  
- Agents  
- Environment Variables  
- Steps  

**6. Which of the following are necessary steps when creating a Docker image in a Jenkins pipeline?**  
**Answer:**  
- Install Docker on the Jenkins server  
- Create a Dockerfile  
- Run `docker build` command  

**7. You are setting up a Jenkinsfile in VS Code. Which of the following is the correct extension for a Jenkinsfile?**  
**Answer:** Jenkinsfile  

**8. Which of the following are common issues that can be encountered when managing a pipeline in Jenkins?**  
**Answer:**    
- Plugin installation issues  
- Build failure  
- Running out of disk space  
- Pipeline configuration errors  

**9. You are creating a new pipeline in Jenkins. Which of the following is a mandatory step during this process?**  
**Answer:** Configuring the pipeline options  

**10. When viewing the history of a multi-stage pipeline in Jenkins, where can the chronological list of built revisions be found?**  
**Answer:** build history  


---

## Certificate of Completion
To access my certificate, follow this link to my Coursera account:
[My Certificate on Coursera](https://coursera.org/share/4c564bd418e0eae6d4815b831c9d5a13)

## Next Step After This Course
To deepen your understanding of Jenkins and CI/CD concepts, consider exploring the following advanced topics:

1. **Advanced Jenkins Pipelines**: Learn to create complex, multi-branch pipelines, utilize shared libraries, and implement best practices for pipeline development.

   - **Resource**: [Jenkins Tutorials Overview](https://www.jenkins.io/doc/tutorials/)

2. **Jenkins Integration with Docker and Kubernetes**: Understand how to deploy applications using Jenkins in containerized environments, enhancing scalability and deployment efficiency.

   - **Resource**: [DevOps Using Jenkins, Docker, and Kubernetes](https://www.betsol.com/blog/devops-using-jenkins-docker-and-kubernetes/)

3. **Monitoring and Scaling Jenkins**: Learn strategies for scaling Jenkins in large environments and monitoring its performance to ensure optimal operation.

   - **Resource**: [Advanced Jenkins Course](https://www.pluralsight.com/professional-services/it-ops/advanced-jenkins)