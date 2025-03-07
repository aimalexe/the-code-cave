# [DevOps for Absolute Beginners: Azure DevOps, Docker, Kubernetes, Jenkins, Terraform, Ansible - AWS, Azure & Google Cloud](https://www.udemy.com/course/devops-with-docker-kubernetes-and-azure-devops/)

## Contents
- [DevOps for Absolute Beginners: Azure DevOps, Docker, Kubernetes, Jenkins, Terraform, Ansible - AWS, Azure \& Google Cloud](#devops-for-absolute-beginners-azure-devops-docker-kubernetes-jenkins-terraform-ansible---aws-azure--google-cloud)
  - [Contents](#contents)
  - [Section 1: Devops Introduction](#section-1-devops-introduction)
    - [1. Getting Started - Master DevOps - Docker, Kubernetes, Terraform \& Azure DevOps](#1-getting-started---master-devops---docker-kubernetes-terraform--azure-devops)
    - [2. Resources and Multi-Cloud Learning](#2-resources-and-multi-cloud-learning)
    - [3. DevOps and Evolution of Software Development](#3-devops-and-evolution-of-software-development)
      - [Evolution of Software Development](#evolution-of-software-development)
      - [Key Learnings from Waterfall Model](#key-learnings-from-waterfall-model)
    - [4. Before DevOps - Evolution to Agile](#4-before-devops---evolution-to-agile)
      - [Automation Focus in Agile](#automation-focus-in-agile)
      - [Continuous Integration (CI)](#continuous-integration-ci)
      - [Feedback and Iteration](#feedback-and-iteration)
      - [The Success and Limitations of Agile](#the-success-and-limitations-of-agile)
      - [Transition to DevOps](#transition-to-devops)
    - [5. DevOps - An Overview](#5-devops---an-overview)
      - [Communication in DevOps](#communication-in-devops)
      - [Automation in DevOps](#automation-in-devops)
      - [Feedback in DevOps](#feedback-in-devops)
      - [Summary](#summary)
  - [Section 2: Start DevOps with Docker](#section-2-start-devops-with-docker)
    - [6. DevOps, Docker and Containerization](#6-devops-docker-and-containerization)
      - [How Docker Simplifies DevOps](#how-docker-simplifies-devops)
      - [Benefits of Containerization in DevOps](#benefits-of-containerization-in-devops)
    - [7. Step 01 - Docker and DevOps - Installation and Introduction](#7-step-01---docker-and-devops---installation-and-introduction)
      - [Why Docker is Important for DevOps](#why-docker-is-important-for-devops)
      - [Installing Docker](#installing-docker)
      - [Verifying Docker Installation](#verifying-docker-installation)
    - [8. Step 02 - Your First DevOps Use case with Docker](#8-step-02---your-first-devops-use-case-with-docker)
      - [Running Applications with Docker](#running-applications-with-docker)
      - [Eliminating Manual Setup](#eliminating-manual-setup)
      - [Switching Between Applications](#switching-between-applications)
      - [Conclusion](#conclusion)
    - [9. Quick Tip for Windows 10: Use 192.168.99.100 in URL instead of localhost](#9-quick-tip-for-windows-10-use-19216899100-in-url-instead-of-localhost)
      - [Docker Toolbox on Windows 10](#docker-toolbox-on-windows-10)
      - [Alternative IP Command](#alternative-ip-command)
      - [Reason](#reason)
    - [10. Step 03 - Important Docker Concepts - Registry, Repository, Tag, Image and Containers](#10-step-03---important-docker-concepts---registry-repository-tag-image-and-containers)
      - [Docker Image Path](#docker-image-path)
      - [Docker Hub and Registry](#docker-hub-and-registry)
      - [Repository and Tag](#repository-and-tag)
      - [Docker Image Components](#docker-image-components)
      - [How Docker Works Behind the Scenes](#how-docker-works-behind-the-scenes)
        - [Command Execution Process](#command-execution-process)
        - [Running Docker Image as a Container](#running-docker-image-as-a-container)
      - [Port Mapping in Docker](#port-mapping-in-docker)
      - [Recap of Key Docker Concepts](#recap-of-key-docker-concepts)
    - [11. Step 04 - Playing with Docker Images - Java, JavaScript and Python exploring Docker Repositories](#11-step-04---playing-with-docker-images---java-javascript-and-python-exploring-docker-repositories)
      - [Accessing Different Application Repositories](#accessing-different-application-repositories)
      - [Repository Exploration](#repository-exploration)
      - [Running Multiple Containers Simultaneously](#running-multiple-containers-simultaneously)
        - [Running Multiple Applications](#running-multiple-applications)
        - [Port Conflict Resolution](#port-conflict-resolution)
        - [Running Java Application Simultaneously](#running-java-application-simultaneously)
      - [Running Multiple Instances of the Same Application](#running-multiple-instances-of-the-same-application)
      - [Simplifying Container Management](#simplifying-container-management)
    - [13. Step 05 - Playing with Docker - Detached Mode and Logs](#13-step-05---playing-with-docker---detached-mode-and-logs)
      - [Stopping Running Containers](#stopping-running-containers)
      - [Launching Docker Containers in Detached Mode](#launching-docker-containers-in-detached-mode)
        - [Running Containers in Detached Mode](#running-containers-in-detached-mode)
        - [Accessing Applications](#accessing-applications)
      - [Viewing Docker Logs](#viewing-docker-logs)
        - [Checking Container Logs](#checking-container-logs)
        - [Following Logs in Real-Time](#following-logs-in-real-time)
        - [Disconnecting from Logs](#disconnecting-from-logs)
      - [Summary](#summary-1)
    - [14. Step 06 - Playing with Docker Images and Containers](#14-step-06---playing-with-docker-images-and-containers)
      - [Viewing Docker Images](#viewing-docker-images)
      - [Viewing Running Containers](#viewing-running-containers)
      - [Viewing All Containers (Including Stopped Containers)](#viewing-all-containers-including-stopped-containers)
      - [Stopping Docker Containers](#stopping-docker-containers)
        - [Stop a Running Container](#stop-a-running-container)
        - [Verifying Container Stop](#verifying-container-stop)
      - [Summary of Docker Container Management](#summary-of-docker-container-management)
    - [15.  Step 07 - Understanding Docker Architecture - Docker Client, Docker Engine](#15--step-07---understanding-docker-architecture---docker-client-docker-engine)
      - [Components of Docker Architecture](#components-of-docker-architecture)
      - [Example Workflow for Docker Commands](#example-workflow-for-docker-commands)
      - [Running Containers with Docker](#running-containers-with-docker)
        - [Running a Container with a Local Image](#running-a-container-with-a-local-image)
        - [Running a Container with an Image Not Available Locally](#running-a-container-with-an-image-not-available-locally)
        - [Viewing Logs of a Running Container](#viewing-logs-of-a-running-container)
      - [Container Port Mapping](#container-port-mapping)
        - [Understanding Container Ports](#understanding-container-ports)
        - [Verifying Container Status and Logs](#verifying-container-status-and-logs)
      - [Summary of Docker Workflow](#summary-of-docker-workflow)
    - [16. Step 08 - Understanding Docker Popularity - My 3 Top Reasons](#16-step-08---understanding-docker-popularity---my-3-top-reasons)
      - [1. Standardized Application Packaging](#1-standardized-application-packaging)
      - [2. Multi-Platform Support](#2-multi-platform-support)
      - [3. Lightweight and Isolated Containers](#3-lightweight-and-isolated-containers)
      - [Virtual Machines vs Docker Containers](#virtual-machines-vs-docker-containers)
        - [Virtual Machine Architecture:](#virtual-machine-architecture)
        - [Docker Container Architecture:](#docker-container-architecture)
      - [Docker Container Isolation and Resource Management](#docker-container-isolation-and-resource-management)
      - [Summary of Docker Advantages](#summary-of-docker-advantages)
    - [17. Step 09 - Learning Docker Images - Commands](#17-step-09---learning-docker-images---commands)
      - [Listing Docker Images](#listing-docker-images)
      - [Pulling Docker Images](#pulling-docker-images)
      - [Searching for Docker Images](#searching-for-docker-images)
      - [Exploring Docker Image Layers](#exploring-docker-image-layers)
        - [Viewing Docker Image Layers](#viewing-docker-image-layers)
        - [Inspecting Docker Image Details](#inspecting-docker-image-details)
      - [Removing Docker Images](#removing-docker-images)
        - [Removing an Image](#removing-an-image)
      - [Managing Docker Containers](#managing-docker-containers)
        - [Listing Running Containers](#listing-running-containers)
        - [Listing All Containers (Running and Stopped)](#listing-all-containers-running-and-stopped)
        - [Stopping and Removing Containers](#stopping-and-removing-containers)
      - [Summary of Key Docker Commands](#summary-of-key-docker-commands)
    - [18. Step 10 - Learning Docker Containers - Commands](#18-step-10---learning-docker-containers---commands)
      - [Running a Container](#running-a-container)
      - [Listing Containers](#listing-containers)
      - [Pausing and Unpausing Containers](#pausing-and-unpausing-containers)
        - [Pausing a Container](#pausing-a-container)
        - [Unpausing a Container](#unpausing-a-container)
      - [Stopping and Killing Containers](#stopping-and-killing-containers)
        - [Stopping a Container Gracefully](#stopping-a-container-gracefully)
        - [Killing a Container Immediately](#killing-a-container-immediately)
      - [Inspecting Containers](#inspecting-containers)
        - [Inspecting Container Details](#inspecting-container-details)
      - [Pruning Stopped Containers](#pruning-stopped-containers)
        - [Removing All Stopped Containers](#removing-all-stopped-containers)
      - [Summary of Key Docker Container Commands](#summary-of-key-docker-container-commands)
    - [20. Step 11 - Learning Docker Commands - system and stats](#20-step-11---learning-docker-commands---system-and-stats)
        - [Viewing Disk Usage](#viewing-disk-usage)
      - [Viewing Docker Events](#viewing-docker-events)
      - [Removing Unused Resources](#removing-unused-resources)
      - [Monitoring Container Stats](#monitoring-container-stats)
        - [Viewing Container Stats](#viewing-container-stats)
      - [Controlling Resource Limits for Containers](#controlling-resource-limits-for-containers)
        - [Limiting Memory Usage](#limiting-memory-usage)
        - [Limiting CPU Usage](#limiting-cpu-usage)
      - [Summary of Key Docker System and Stats Commands](#summary-of-key-docker-system-and-stats-commands)
    - [23. Step 12 - 02 - Building Docker Images for Python Application](#23-step-12---02---building-docker-images-for-python-application)
      - [Step 1: Understanding the Project Structure](#step-1-understanding-the-project-structure)
      - [Step 2: Dockerfile Overview](#step-2-dockerfile-overview)
      - [Step 3: Building the Docker Image](#step-3-building-the-docker-image)
      - [Step 4: Running the Docker Image](#step-4-running-the-docker-image)
    - [24. Step 13 - Understanding creation of Docker Images in Depth](#24-step-13---understanding-creation-of-docker-images-in-depth)
      - [Step-by-Step Breakdown of Docker Build](#step-by-step-breakdown-of-docker-build)
      - [Understanding Docker Layers](#understanding-docker-layers)
      - [Viewing Docker Image History](#viewing-docker-image-history)
      - [Summary of Docker Build Process](#summary-of-docker-build-process)
    - [25. Step 14 - Pushing Python App Docker Image to Docker Hub](#25-step-14---pushing-python-app-docker-image-to-docker-hub)
      - [Step 1: Sign Up for Docker Hub](#step-1-sign-up-for-docker-hub)
      - [Step 2: Log In to Docker Hub](#step-2-log-in-to-docker-hub)
      - [Step 3: Build Docker Image with Your Docker ID](#step-3-build-docker-image-with-your-docker-id)
      - [Step 4: Push Docker Image to Docker Hub](#step-4-push-docker-image-to-docker-hub)
      - [Step 5: Verify the Image on Docker Hub](#step-5-verify-the-image-on-docker-hub)
      - [Exercise](#exercise)
    - [26. Step 15 - Building and Pushing Docker Image for Node JavaScript App](#26-step-15---building-and-pushing-docker-image-for-node-javascript-app)
    - [27. Step 16 - Building and Pushing Docker Image for Java Application](#27-step-16---building-and-pushing-docker-image-for-java-application)
    - [28. Step 17 - Building Efficient Docker Images - Improving Layer Caching](#28-step-17---building-efficient-docker-images---improving-layer-caching)
    - [29. Step 18 - Understanding ENTRYPOINT vs CMD](#29-step-18---understanding-entrypoint-vs-cmd)
      - [Key Differences](#key-differences)
    - [218. Step 01 - Introduction to Microservices](#218-step-01---introduction-to-microservices)
      - [Summary](#summary-2)
    - [219. Step 02 - Advantages of Microservices](#219-step-02---advantages-of-microservices)
      - [Summary:](#summary-3)
    - [30. Step 19 - Docker and Microservices - Quick Start](#30-step-19---docker-and-microservices---quick-start)
      - [Conclusion:](#conclusion-1)
    - [31. Step 20 - Introduction to Microservices - CE and CC](#31-step-20---introduction-to-microservices---ce-and-cc)
      - [How These Microservices Communicate:](#how-these-microservices-communicate)
      - [Configuration of Microservices:](#configuration-of-microservices)
    - [33. Step 21 - Running Microservices as Docker Containers](#33-step-21---running-microservices-as-docker-containers)
      - [Step 1: Running the **Currency Exchange Service**](#step-1-running-the-currency-exchange-service)
      - [Step 2: Running the **Currency Conversion Service**](#step-2-running-the-currency-conversion-service)
      - [Step 3: Handling Communication Between Microservices](#step-3-handling-communication-between-microservices)
    - [34. Step 22 - Using Docker Link to Connect Microservices](#34-step-22---using-docker-link-to-connect-microservices)
      - [Problem Recap:](#problem-recap)
      - [Cause:](#cause)
      - [Solution: Using Docker Link to Enable Communication Between Containers](#solution-using-docker-link-to-enable-communication-between-containers)
        - [Step 1: Stop Existing Containers](#step-1-stop-existing-containers)
        - [Step 2: Establish a Link Between Containers](#step-2-establish-a-link-between-containers)
        - [Step 3: Modify and Run the Currency Conversion Container](#step-3-modify-and-run-the-currency-conversion-container)
        - [Step 4: Test the Setup](#step-4-test-the-setup)
      - [Why Link is a Shortcut (Not Recommended for Production):](#why-link-is-a-shortcut-not-recommended-for-production)
    - [35. Step 23 - Using Custom Networking to Connect Microservices](#35-step-23---using-custom-networking-to-connect-microservices)
      - [Default Networking Options in Docker:](#default-networking-options-in-docker)
      - [Creating a Custom Docker Network:](#creating-a-custom-docker-network)
      - [Step 1: Creating a Custom Network](#step-1-creating-a-custom-network)
      - [Step 2: Launch the Currency Exchange Service in the Custom Network](#step-2-launch-the-currency-exchange-service-in-the-custom-network)
      - [Step 3: Launch the Currency Conversion Service in the Custom Network](#step-3-launch-the-currency-conversion-service-in-the-custom-network)
      - [Step 4: Verify the Services](#step-4-verify-the-services)
    - [36. Step 24 - Using Docker Compose to Simplify Microservices Launch](#36-step-24---using-docker-compose-to-simplify-microservices-launch)
      - [Problem Recap:](#problem-recap-1)
      - [Introduction to Docker Compose:](#introduction-to-docker-compose)
      - [Key Features of Docker Compose:](#key-features-of-docker-compose)
      - [Docker Compose File Structure:](#docker-compose-file-structure)
      - [Key Components of the `docker-compose.yml`:](#key-components-of-the-docker-composeyml)
      - [Running the Services with Docker Compose:](#running-the-services-with-docker-compose)
      - [Benefits of Using Docker Compose:](#benefits-of-using-docker-compose)
    - [37. Step 25 - Understanding Docker Compose further](#37-step-25---understanding-docker-compose-further)
      - [1. **Starting Containers in Detached Mode**](#1-starting-containers-in-detached-mode)
      - [2. **Listing Running Containers**](#2-listing-running-containers)
      - [3. **Viewing Networks Created by Docker Compose**](#3-viewing-networks-created-by-docker-compose)
      - [4. **Inspecting Networks**](#4-inspecting-networks)
      - [5. **Stopping and Removing Containers**](#5-stopping-and-removing-containers)
      - [6. **Cleaning Up Unused Resources**](#6-cleaning-up-unused-resources)
      - [7. **Docker Compose Events**](#7-docker-compose-events)
      - [8. **Validating Docker Compose Config**](#8-validating-docker-compose-config)
      - [9. **Listing Docker Compose Images**](#9-listing-docker-compose-images)
      - [10. **Viewing Running Containers (Docker Compose)**](#10-viewing-running-containers-docker-compose)
      - [11. **Viewing Top Processes**](#11-viewing-top-processes)
      - [12. **Pausing and Unpausing Containers**](#12-pausing-and-unpausing-containers)
      - [13. **Stopping and Killing Containers**](#13-stopping-and-killing-containers)
      - [Summary:](#summary-4)
  - [Section 3: DevOps with Docker and Kubernetes on Google Kubernetes Engine](#section-3-devops-with-docker-and-kubernetes-on-google-kubernetes-engine)
    - [38. Step 01 - Getting Started with Docker, Kubernetes and Google Kubernetes Engine](#38-step-01---getting-started-with-docker-kubernetes-and-google-kubernetes-engine)
    - [39. Step 02 - Creating Google Cloud Account V2](#39-step-02---creating-google-cloud-account-v2)
    - [40. Step 03 - Creating Kubernetes Cluster with Google Kubernete Engine (GKE)](#40-step-03---creating-kubernetes-cluster-with-google-kubernete-engine-gke)
    - [41. Step 04 - Review Kubernetes Cluster and Learn Few Fun Facts about Kubernetes](#41-step-04---review-kubernetes-cluster-and-learn-few-fun-facts-about-kubernetes)
    - [42. Step 05 - Deploy Your First Docker Container to Kubernetes Cluster](#42-step-05---deploy-your-first-docker-container-to-kubernetes-cluster)
    - [44. Step 06 - Quick Look at Kubernetes Concepts - Pods, Replica Sets and Deployment](#44-step-06---quick-look-at-kubernetes-concepts---pods-replica-sets-and-deployment)
    - [45. Step 07 - Understanding Pods in Kubernetes](#45-step-07---understanding-pods-in-kubernetes)
    - [47. Step 08 - Understanding ReplicaSets in Kubernetes](#47-step-08---understanding-replicasets-in-kubernetes)
    - [48. Step 09 - Understanding Deployment in Kubernetes](#48-step-09---understanding-deployment-in-kubernetes)
    - [49. Step 10 - Quick Review of Kubernetes Concepts - Pods, Replica Sets \& Deployment](#49-step-10---quick-review-of-kubernetes-concepts---pods-replica-sets--deployment)
    - [50. Step 11 - Understanding Services in Kubernetes](#50-step-11---understanding-services-in-kubernetes)
    - [51. Step 12 - Quick Review of GKE on Google Cloud Console](#51-step-12---quick-review-of-gke-on-google-cloud-console)
    - [52. Step 13 - Understanding Kubernetes Architecture - Master Node and Nodes](#52-step-13---understanding-kubernetes-architecture---master-node-and-nodes)
    - [53. Step 14 - Understand Google Cloud Regions and Zones](#53-step-14---understand-google-cloud-regions-and-zones)
    - [54. Step 15 - Installing GCloud](#54-step-15---installing-gcloud)
    - [55. Step 16 - Installing Kubectl:](#55-step-16---installing-kubectl)
      - [**Method 1: Install `kubectl` via Google Cloud SDK (`gcloud`)**](#method-1-install-kubectl-via-google-cloud-sdk-gcloud)
      - [**Method 2: Install `kubectl` Using Chocolatey**](#method-2-install-kubectl-using-chocolatey)
      - [**Method 3: Install `kubectl` Using Scoop**](#method-3-install-kubectl-using-scoop)
      - [**Method 4: Manually Download kubectl Binary**](#method-4-manually-download-kubectl-binary)
      - [Optional Step for All Methods:](#optional-step-for-all-methods)
    - [56. Step 17 - Understand Kubernetes Rollouts](#56-step-17---understand-kubernetes-rollouts)
    - [57. Step 18 - Generate Kubernetes YAML Configuration for Deployment and Service](#57-step-18---generate-kubernetes-yaml-configuration-for-deployment-and-service)
    - [58. Step 19 - Understand and Improve Kubernetes YAML Configuration](#58-step-19---understand-and-improve-kubernetes-yaml-configuration)
    - [59. Step 20 - Using Kubernetes YAML Configuration to Create Resources](#59-step-20---using-kubernetes-yaml-configuration-to-create-resources)
    - [60. Step 21 - Understanding Kubernetes YAML Configuration - Labels and Selectors](#60-step-21---understanding-kubernetes-yaml-configuration---labels-and-selectors)
      - [Key Takeaways:](#key-takeaways)
    - [61. Step 22 - Quick Fix to reduce release downtime with minReadySeconds](#61-step-22---quick-fix-to-reduce-release-downtime-with-minreadyseconds)
    - [62. Step 23 - Understanding Replica Sets in Depth - Using Kubernetes YAML Config](#62-step-23---understanding-replica-sets-in-depth---using-kubernetes-yaml-config)
    - [63. Step 24 - Configure Multiple Kubernetes Deployments with One Service](#63-step-24---configure-multiple-kubernetes-deployments-with-one-service)
    - [64. Step 25 - Playing with Kubernetes Commands - Top Node and Pod](#64-step-25---playing-with-kubernetes-commands---top-node-and-pod)
    - [66. Step 27 - Quick Introduction to Microservices - CE and CC](#66-step-27---quick-introduction-to-microservices---ce-and-cc)
      - [Overview of the Microservices](#overview-of-the-microservices)
      - [Deployment Configuration for the Microservices](#deployment-configuration-for-the-microservices)
        - [Currency Exchange Microservice Deployment (`deployment.yaml`):](#currency-exchange-microservice-deployment-deploymentyaml)
        - [Currency Conversion Microservice Deployment (`deployment.yaml`):](#currency-conversion-microservice-deployment-deploymentyaml)
      - [Liveness and Readiness Probes](#liveness-and-readiness-probes)
    - [68. Step 29 - Understand Environment Variables created by Kubernetes for Services](#68-step-29---understand-environment-variables-created-by-kubernetes-for-services)
      - [How Kubernetes Passes Environment Variables to Pods](#how-kubernetes-passes-environment-variables-to-pods)
      - [Key Observations](#key-observations)
      - [The Potential Problem](#the-potential-problem)
    - [69. Step 30 - Microservices and Kubernetes Service Discovery - Part 1](#69-step-30---microservices-and-kubernetes-service-discovery---part-1)
      - [Problem Recap:](#problem-recap-2)
      - [Solution: Dynamic Service URL via DNS](#solution-dynamic-service-url-via-dns)
      - [Configuring a Static URL for Service Communication](#configuring-a-static-url-for-service-communication)
      - [Why is This Better Than Environment Variables?](#why-is-this-better-than-environment-variables)
    - [70. Step 31 - Microservices and Kubernetes Service Discovery - Part 2 DNS](#70-step-31---microservices-and-kubernetes-service-discovery---part-2-dns)
      - [Key Concepts](#key-concepts)
      - [Experiment: Adjusting Replicas](#experiment-adjusting-replicas)
        - [Steps:](#steps)
      - [Load Balancing in Action](#load-balancing-in-action)
      - [Benefits of Kubernetes Service Discovery and Load Balancing](#benefits-of-kubernetes-service-discovery-and-load-balancing)
    - [71. Step 32 - Microservices Centralized Configuration with Kubernetes ConfigMaps](#71-step-32---microservices-centralized-configuration-with-kubernetes-configmaps)
      - [Problem with Hardcoding Configuration:](#problem-with-hardcoding-configuration)
      - [Kubernetes ConfigMap for Currency Conversion Service](#kubernetes-configmap-for-currency-conversion-service)
      - [Injecting ConfigMap Values into the Deployment](#injecting-configmap-values-into-the-deployment)
      - [Testing with Incorrect ConfigMap Values](#testing-with-incorrect-configmap-values)
      - [Key Benefits of Using ConfigMaps](#key-benefits-of-using-configmaps)
    - [72. Step 33 - Simplify Microservices with Kubernetes Ingress - Part 1](#72-step-33---simplify-microservices-with-kubernetes-ingress---part-1)
      - [The Problem with Multiple Load Balancers](#the-problem-with-multiple-load-balancers)
      - [Solution: Centralized Routing with Kubernetes Ingress](#solution-centralized-routing-with-kubernetes-ingress)
      - [Configuring Ingress](#configuring-ingress)
      - [Benefits of Using Ingress](#benefits-of-using-ingress)
    - [73. Step 34 - Simplify Microservices with Kubernetes Ingress - Part 2](#73-step-34---simplify-microservices-with-kubernetes-ingress---part-2)
      - [Key Points](#key-points)
      - [How to Add More Microservices](#how-to-add-more-microservices)
      - [Summary](#summary-5)
  - [Section 4: Getting started with Infrastructure as Code](#section-4-getting-started-with-infrastructure-as-code)
    - [75. Getting Started with Infrastructure as Code](#75-getting-started-with-infrastructure-as-code)
  - [Section 5: Devops Infrastructure Provisioning with Terraform on AWS](#section-5-devops-infrastructure-provisioning-with-terraform-on-aws)
    - [76. Getting Started with Terraform](#76-getting-started-with-terraform)
      - [General commands and code snippets:](#general-commands-and-code-snippets)
      


## Section 1: Devops Introduction
### 1. Getting Started - Master DevOps - Docker, Kubernetes, Terraform & Azure DevOps
- **DevOps Fundamentals**: 
  - Areas: People, process, tools.
  - Key concepts: Continuous integration, continuous delivery, and infrastructure as code.
  
- **Docker**:
  - Learn how to containerize applications using Java, JavaScript, and Python.
  - Understand Docker commands and concepts like registry, repository, image, and container.
  - Introduction to Docker networking and container orchestration with Docker Compose.

- **Kubernetes**: 
  - Learn Kubernetes concepts like pods, deployments, replicas, and services using Google Kubernetes Engine.
  - Understand service discovery, centralized configuration, and load balancing for microservices.

- **Infrastructure as Code**:
  - **Terraform**:
    - Introduction to creating cloud resources (e.g., IAM users, S3 buckets, EC2 instances) on AWS.
    - Learn how to manage multiple environments with modules and workspaces.
  - **Ansible**:
    - Learn to use Ansible for configuration management, executing shell commands, and managing EC2 instances with playbooks.

- **CI/CD**:
  - **Azure DevOps**:
    - Create pipelines to deploy microservices to Kubernetes clusters on AWS and Azure.
  - **Jenkins**:
    - Learn Jenkins pipelines and how to integrate repositories and automate Docker image creation.

### 2. Resources and Multi-Cloud Learning

- **GitHub Repository**: The primary resource is the course’s GitHub repository ([https://github.com/in28minutes/devops-master-class)](https://github.com/in28minutes/devops-master-class)).
- **Multi-Cloud**: The course covers AWS, Azure, and Google Cloud, giving exposure to all three cloud platforms.

### 3. DevOps and Evolution of Software Development

- **No Accepted Definition**:
  - DevOps, like many software development buzzwords, does not have a single agreed-upon definition.
  - **AWS Definition**: DevOps is "a combination of philosophies, practices, and tools that help an organization deliver applications at high velocity." Focuses on continuous delivery, correctness, and reliability.
  - **The DevOps Handbook Definition**: DevOps is applying learnings from areas like manufacturing (lean, Toyota production system) to build reliable, stable, and secure software with less effort and cost.

#### Evolution of Software Development

- **Waterfall Model**:
  - Early software development followed the waterfall model, similar to how large construction projects are managed (e.g., building a bridge).
  - **Phases**: Requirements → Design → Implementation → Testing → Production.
  - Business would see the software after months of development.
  
#### Key Learnings from Waterfall Model

1. **Communication**:
   - Software development is multidisciplinary and requires effective communication between team members.
   - In the waterfall model, communication was often attempted through extensive documentation (e.g., 1000-page requirement documents).
   - The best communication happens when teams are cross-functional, with diverse skills in the same group.

2. **Automation**:
   - Manual processes are slow and prone to errors.
   - Automation is essential to speed up software development and reduce mistakes.

3. **Quick Feedback**:
   - It’s important to get feedback quickly to know if you're building the right application.
   - Early identification of problems is crucial as they are easier to fix.
   - Waiting for months to detect issues (as in the waterfall model) is inefficient.

### 4. Before DevOps - Evolution to Agile

- **Business & Development Collaboration**:
  - Agile brought the business and development teams together into a single team.
  - The development process became iterative, with **sprints** (small, time-boxed iterations).
  - Agile uses **user stories** (small requirements) that go through all phases of development during each sprint.

- **Role of the Product Owner**:
  - In Agile, a **Product Owner** (business representative) ensures that the development team understands the business objectives and priorities.
  - This enhances communication, ensuring that the final product aligns with business needs.

#### Automation Focus in Agile

- **Defect Detection**:
  - Agile teams aimed to find defects early through automation.
  - Focus on identifying:
    - **Functional defects**: Product not meeting requirements.
    - **Technical defects**: Issues like code quality errors, affecting maintainability.
  
- **Testing**:
  - Emphasis on writing **unit tests** for methods and classes.
  - Use of **integration tests** to verify how modules and applications work together.
  - Tools like **Sonar** for static code analysis and checking code quality.

#### Continuous Integration (CI)

- **Automated Testing & Quality Checks**:
  - As soon as code is committed to a repository, unit tests, code quality checks, and integration tests are run automatically.
  - This ensures continuous feedback on defects or code quality issues.
  
- **Immediate Feedback**:
  - Immediate detection of issues (failing unit tests, failing builds due to code quality, etc.).
  - Helps developers fix problems quickly.

#### Feedback and Iteration

- **Sprint Reviews**:
  - At the end of each sprint, the product is demoed to stakeholders, including the business and architecture teams.
  - Feedback is collected and used to prioritize the next set of user stories for the following sprint.
  
- **Continuous Feedback Loop**:
  - Frequent demos and integration tests ensure that the team is always aligned with business objectives and can adapt based on feedback.

#### The Success and Limitations of Agile

- **Agile’s Success**:
  - Improved communication between development and business teams.
  - Early defect detection through automation.
  - Immediate feedback from business stakeholders.

- **New Challenges**:
  - As development moved toward **microservices architectures** (small APIs instead of large monoliths), the need for better **operations** management became evident.
  - Frequent, small releases (hundreds of microservice releases per week) introduced complexity in debugging and monitoring.
  
#### Transition to DevOps

- The new focus on managing operations alongside development paved the way for the emergence of **DevOps**, which will be explored next.

### 5. DevOps - An Overview

- **Focus of DevOps**:
  - Enhancing communication between development and operations teams.
  - Making deployments easier and making the operations team's work visible to the development team.

#### Communication in DevOps

- **Bringing Teams Together**:
  - In mature enterprises, development and operations teams are combined into one team.
  - Shared goals help both teams understand each other's challenges.
  - In less mature organizations, representatives from the operations team join development teams for sprint activities (e.g., stand-ups and retrospectives).

#### Automation in DevOps

- **Focus Areas**:
  - **Continuous Deployment**: Automating the process of deploying new software versions into test environments.
  - **Continuous Delivery**: Automating deployments to production with approvals from QA and UAT teams.
  - **Infrastructure as Code (IaC)**: Treating infrastructure (servers, load balancers, databases) like application code, automating its creation and configuration.

#### Feedback in DevOps

- **Faster Issue Resolution**:
  - Operations and development teams collaborate closely, allowing quick attention to operational issues and challenges in deploying software.
  - Continuous delivery ensures that any problematic code or configuration changes can be identified in test or staging environments within hours.

- **Self-Provisioning**:
  - Infrastructure as code allows developers to self-provision environments and deploy code without relying on operations, accelerating feedback loops.

#### Summary

- **DevOps and Agile**:
  - DevOps is about improving communication, getting immediate feedback, and automating processes in software development.
  - Agile and DevOps are complementary, working together to enhance how we build great software products.

---

## Section 2: Start DevOps with Docker
### 6. DevOps, Docker and Containerization

- **Why Containerization?**:
  - Microservices are built using different programming languages (Java, Python, JavaScript), each requiring its own deployment environment.
  - The complexity of maintaining different configurations and scripts for each language can make automation and environment management difficult.

#### How Docker Simplifies DevOps

- **Uniform Deployment Environment**:
  - **Docker** allows you to build images for any microservice, regardless of the programming language.
  - The deployment environment and procedure remain the same whether you're running a Python, Java, or JavaScript application.
  
- **Infrastructure as Code with Docker**:
  - Docker simplifies infrastructure management. You only need to provision servers with a container runtime.
  - Once containers are set up, you can deploy any application without worrying about specific configurations for different languages.
  
#### Benefits of Containerization in DevOps

- **Simplified Automation**:
  - Docker helps automate deployments by ensuring a uniform process across different microservices.
  - This removes the complexity of managing different environments for each service.
  
- **Ease of Scaling**:
  - Containers make it easy to scale microservices as they offer a consistent environment for all types of applications.

### 7. Step 01 - Docker and DevOps - Installation and Introduction

- **Docker & DevOps**: 
  - Docker and DevOps are highly complementary, often growing together as shown by their exponential growth on Google Trends.
  - Both originated around the same time and are essential tools in modern software development.

#### Why Docker is Important for DevOps

- **Simplifying DevOps**:
  - Docker makes deployments easier by standardizing the environment for microservices, regardless of the language (Java, Python, JavaScript).
  - It offers a consistent method to deploy applications, reducing complexity in DevOps workflows.

#### Installing Docker

- **Docker Installation Overview**:
  - Docker installation has become simpler over the past few years. It is now easily accessible for **Linux**, **Mac**, and **Windows** through **Docker Desktop**.

- **Steps for Different Operating Systems**:
  - **Windows**: 
    - Download the installer for Windows 10 (for older versions, Docker Toolbox is required).
    - Use an admin account for installation, restart the machine, and launch Docker Desktop from the start menu.
    - Troubleshooting guides are available in case of installation issues.
  
  - **Mac**: 
    - Choose the appropriate installer based on the chip (Intel or Apple).
    - Double-click the `.dmg` file, drag Docker to Applications, and run the Docker app.
    - Accept the Docker subscription service agreement.
  
  - **Linux**: 
    - Docker provides `.deb` and `.rpm` packages for various Linux distributions like Ubuntu, Debian, and Fedora.
    - Follow detailed installation instructions specific to your Linux OS.

#### Verifying Docker Installation

- **Post Installation**:
  - After installation, run the command `docker --version` in the command prompt, terminal, or PowerShell to check the Docker version.
  - Ensure you are using the latest version to get the best support and features.#

### 8. Step 02 - Your First DevOps Use case with Docker

- **Scenario**:
  - You are part of a DevOps team working on APIs built in **Java**, **Python**, and **JavaScript**.
  - The goal is to quickly deploy these applications to a QA environment using Docker.

#### Running Applications with Docker

- **Step 1: Verifying Docker Installation**:
  - Check if Docker is installed by running `docker --version`. Ensure it's version 19 or higher.

- **Step 2: Deploying a Python Application**:
  - Run the command:  
    ```bash
    docker run -p 5000:5000 in28min/hello-world-python:0.0.1
    ```
  - Docker will pull the necessary image from the registry and start the application.
  - Access the application in the browser at `localhost:5000`.

- **Key Takeaway**: Docker enables you to deploy an application in seconds without worrying about specific environment configurations.

#### Eliminating Manual Setup

- **Traditional Process**:
  - In manual deployment, operations teams must follow detailed instructions: set up servers, install the operating system, install the correct software (e.g., Java, Python), and configure the environment.
  - This manual process is prone to errors and time-consuming.

- **With Docker**:
  - Docker removes the need for manual setup. The **Docker image** contains everything needed to run the application.
  - Whether the application is in Python, Java, or JavaScript, it runs the same way using Docker.

#### Switching Between Applications

- **Step 3: Switching to the Java Application**:
  - Stop the Python container by pressing `Ctrl + C`.
  - Run the Java application with the same command but replace the image name:
    ```bash
    docker run -p 5000:5000 in28min/hello-world-java:0.0.1
    ```
  - No need to install Java separately—Docker takes care of everything.

- **Step 4: Switching to the JavaScript Application (NodeJS)**:
  - Stop the Java container by pressing `Ctrl + C`.
  - Run the NodeJS application:
    ```bash
    docker run -p 5000:5000 in28min/hello-world-nodejs:0.0.1
    ```
  - Again, no need for specific setup; Docker handles it all.

#### Conclusion

- **The Power of Docker**:
  - Once a Docker image is built, it doesn't matter what language or framework the application is using (Python, Java, or NodeJS).
  - You can run the application with the same command structure across environments, significantly simplifying the deployment process.
  - Docker eliminates the need for manual instructions—just a single command brings your application online.

### 9. Quick Tip for Windows 10: Use 192.168.99.100 in URL instead of localhost

#### Docker Toolbox on Windows 10
- **Tip:** Use `192.168.99.100` instead of `localhost` when working with Docker Toolbox on Windows 10.
  
#### Alternative IP Command
- **Command:** If `192.168.99.100` doesn't work, find the correct IP using the following command:
  ```bash
  docker-machine ip
  ```

#### Reason
- **Explanation:** Docker Toolbox on Windows 10 is configured to use the default machine with the IP address `192.168.99.100`.


Here are the extracted notes with command snippets and organized headings:

### 10. Step 03 - Important Docker Concepts - Registry, Repository, Tag, Image and Containers

#### Docker Image Path
- The path to the Docker image in the example:  
  `in28min/hello-world-nodejs:0.0.1-release`
- This image is stored on Docker Hub, which is a public Docker registry:  
  `https://hub.docker.com/r/in28min/hello-world-nodejs`

#### Docker Hub and Registry
- **Docker Hub:** A public registry containing repositories with different application versions.
- **Private Repositories:** Used in enterprises to restrict access to application images.

#### Repository and Tag
- **Repository:**  
  Example repository: `in28min/hello-world-nodejs`
- **Tag:** Identifies the version of the application.  
  Example tag: `0.0.1-release`

#### Docker Image Components
- A Docker image contains:
  - Right software versions (e.g., Node.js)
  - Libraries and dependencies needed to run the application

#### How Docker Works Behind the Scenes

##### Command Execution Process
- Docker checks if the image exists locally:
  ```bash
  docker pull in28min/hello-world-nodejs:0.0.1-release
  ```
  If not found, it connects to Docker Hub and pulls the image to your local machine.
  
##### Running Docker Image as a Container
- After downloading, Docker runs the image as a container:
  ```bash
  docker run in28min/hello-world-nodejs:0.0.1-release
  ```
  - **Image:** Static set of bytes stored locally or on Docker Hub.
  - **Container:** The running version of the image.

#### Port Mapping in Docker
- Containers run inside an internal Docker network (bridge network) by default.
- Use `-p` (publish) option to map container ports to host ports.
  ```bash
  docker run -p 5000:5000 in28min/helloworld-nodejs:0.0.1-release
  ```
  - **Example:** Container port 5000 is mapped to host port 5000 using `-p 5000:5000`.

#### Recap of Key Docker Concepts
- **Image:** A static snapshot of an application, stored on a Docker registry.
- **Container:** A running instance of an image.
- **Repository:** Stores different versions (tags) of the application image.
- **Port Mapping:** Use `-p` to expose container ports to the host machine.


### 11. Step 04 - Playing with Docker Images - Java, JavaScript and Python exploring Docker Repositories

#### Accessing Different Application Repositories
- **NodeJS Repository:**  
  `https://hub.docker.com/r/in28min/hello-world-nodejs`
- **Java Repository:**  
  `https://hub.docker.com/r/in28min/hello-world-java`
- **Python Repository:**  
  `https://hub.docker.com/r/in28min/hello-world-python`

#### Repository Exploration
- Each repository has multiple versions (tags), e.g., `0.0.1-release`, `0.0.2-release`.
- Explore repositories further to understand registry, repository, and tag concepts.

#### Running Multiple Containers Simultaneously

##### Running Multiple Applications
- To run multiple applications at the same time, open different terminal windows or tabs.
- Example of running NodeJS and Python together:
  ```bash
  docker run -p 5000:5000 in28min/hello-world-nodejs:0.0.1-release
  docker run -p 5001:5000 in28min/hello-world-python:0.0.1-release
  ```
  - **NodeJS** runs on port 5000.
  - **Python** runs on port 5001 (host).

##### Port Conflict Resolution
- If a port is already in use (e.g., 5000), map the container port to a different host port (e.g., 5001):
  ```bash
  docker run -p 5001:5000 in28min/hello-world-python:0.0.1-release
  ```
  
##### Running Java Application Simultaneously
- Example for Java running on a different port (5002):
  ```bash
  docker run -p 5002:5000 in28min/hello-world-java:0.0.1-release
  ```
  - **Java** runs on port 5002.

#### Running Multiple Instances of the Same Application
- You can launch multiple instances of the same application by mapping to different ports:
  ```bash
  docker run -p 5003:5000 in28min/hello-world-python:0.0.1-release
  ```
  - Python instance 1 on port 5001, instance 2 on port 5003.

#### Simplifying Container Management
- Launching containers in separate terminal tabs becomes difficult to manage.
- In the next step, you'll explore how to launch all containers from the same terminal for easier management.


### 13. Step 05 - Playing with Docker - Detached Mode and Logs
#### Stopping Running Containers
- **Command to stop a running container:**  
  Use `Ctrl + C` to stop containers running in the current terminal.
  
- **Example:** To stop Python running on port 5001:
  ```bash
  Ctrl + C
  exit
  ```

#### Launching Docker Containers in Detached Mode

##### Running Containers in Detached Mode
- **Command:** Use `-d` (detached) to run containers in the background, without tying them to the terminal:
  ```bash
  docker run -d -p 5000:5000 in28min/hello-world-nodejs:0.0.1-release
  docker run -d -p 5001:5000 in28min/hello-world-python:0.0.1-release
  docker run -d -p 5002:5000 in28min/hello-world-java:0.0.1-release
  ```
  - **`-d` option:** Runs the container in detached mode.
  - Each container runs on different host ports (5000, 5001, 5002).

##### Accessing Applications
- **Example URLs for accessing apps:**
  - NodeJS: `localhost:5000`
  - Python: `localhost:5001`
  - Java: `localhost:5002`

#### Viewing Docker Logs

##### Checking Container Logs
- **Command:** To view logs of a running container, use the container ID:
  ```bash
  docker logs <container-id>
  ```
  - You can use a partial container ID as long as it's unique (e.g., first 4 characters).

- **Example:**  
  For container `C2BA` (partial ID):
  ```bash
  docker logs C2BA
  ```

##### Following Logs in Real-Time
- **Command:** Use `-f` to follow logs continuously:
  ```bash
  docker logs -f <container-id>
  ```
  - **Example:**
  ```bash
  docker logs -f C2BA
  ```

##### Disconnecting from Logs
- **Command:** Press `Ctrl + C` to stop following the logs without stopping the container.

#### Summary
- Launch containers in detached mode using `-d`.
- View and follow container logs using `docker logs` and `docker logs -f`.
- Use partial container IDs to interact with containers easily.


### 14. Step 06 - Playing with Docker Images and Containers

#### Viewing Docker Images
- **Command:** To list all images available on the local machine:
  ```bash
  docker images
  ```
  - Displays image name, tag, ID, creation time, and size.

#### Viewing Running Containers
- **Command:** To list only running containers:
  ```bash
  docker container ls
  ```
  - Displays container ID, image used, command, creation time, status, port mapping, and container name.

#### Viewing All Containers (Including Stopped Containers)
- **Command:** To list all containers (running and stopped):
  ```bash
  docker container ls -a
  ```
  - Displays containers in both "running" and "exited" states.

#### Stopping Docker Containers

##### Stop a Running Container
- **Command:** To stop a running container by its ID (or a partial ID):
  ```bash
  docker container stop <container-id>
  ```
  - Example to stop a container with the partial ID `c2ba`:
    ```bash
    docker container stop c2ba
    ```

##### Verifying Container Stop
- **Command:** To verify that a container has stopped, use:
  ```bash
  docker container ls
  ```
  - This will show only active containers. If no containers are listed, all are stopped.

#### Summary of Docker Container Management

- **`docker images`:** Lists all local Docker images.
- **`docker container ls`:** Lists running containers.
- **`docker container ls -a`:** Lists all containers, including stopped ones.
- **`docker container stop <container-id>`:** Stops a running container using its container ID or a unique substring of the ID.


Here are the extracted notes with command snippets, organized by heading:

### 15.  Step 07 - Understanding Docker Architecture - Docker Client, Docker Engine

#### Components of Docker Architecture
- **Docker Client:**  
  The interface where commands are executed (e.g., `docker run`). Sends commands to the Docker daemon.
  
- **Docker Daemon:**  
  The server component responsible for:
  - Managing containers and local images
  - Pulling images from the Docker registry
  - Pushing images to the registry
  - Running containers based on available images
  
#### Example Workflow for Docker Commands
- **Command Execution:**  
  When a command like `docker run` is executed, Docker client sends the command to Docker daemon for execution.

#### Running Containers with Docker

##### Running a Container with a Local Image
- **Command:** Running a container from an image available locally:
  ```bash
  docker run -d -p 5000:5000 in28min/hello-world-nodejs:0.0.1-release
  ```
  - Docker daemon checks if the image exists locally. If it does, the container is launched without downloading the image.

##### Running a Container with an Image Not Available Locally
- **Command:** Running a container with an image not found locally:
  ```bash
  docker run -d -p 5001:8080 in28min/hello-world-rest-api:0.0.1.RELEASE
  ```
  - Docker daemon downloads the image from the Docker registry and then runs the container.

##### Viewing Logs of a Running Container
- **Command:** Use `docker logs` to see logs:
  ```bash
  docker logs -f <container-id>
  ```
  - Example:
    ```bash
    docker logs -f 41e
    ```

#### Container Port Mapping

##### Understanding Container Ports
- **Command:** Exposing a container's port (e.g., 8080) to a host port (e.g., 5001):
  ```bash
  docker run -d -p 5001:8080 in28min/hello-world-rest-api:0.0.1-release
  ```
  - Always check the container's internal port and map it correctly to the host.

##### Verifying Container Status and Logs
- **Command to check running containers:**
  ```bash
  docker container ls
  ```

- **Stopping a container:**
  ```bash
  docker container stop <container-id>
  ```

#### Summary of Docker Workflow

- **Docker Client:** Sends commands like `docker run` to the Docker daemon.
- **Docker Daemon:** Executes commands, pulls images from Docker registry, and manages containers.
- **Image Handling:** If the image isn't available locally, Docker daemon pulls it from the registry.
- **Port Mapping:** Correctly map the internal container port to a host port when running a container.


### 16. Step 08 - Understanding Docker Popularity - My 3 Top Reasons
#### 1. Standardized Application Packaging
- Docker allows standardized packaging for applications.
- A **Docker image** includes everything needed to run the application, regardless of its type (Java, Python, JavaScript, etc.).
- The same Docker image can run on any platform without modification, ensuring portability.

#### 2. Multi-Platform Support
- Docker images can run on various platforms:
  - Local machine
  - Data centers
  - Cloud platforms (AWS, Azure, Google Cloud)
- Cloud providers support Docker and offer **Kubernetes** for container orchestration.

#### 3. Lightweight and Isolated Containers
- **Docker containers** are lightweight compared to **virtual machines** (VMs).
  - **Virtual machines** have both a guest OS and a host OS, making them heavy.
  - **Docker containers** only require the **Docker engine** and share the host OS, reducing overhead.
- Docker allows efficient use of hardware resources.

#### Virtual Machines vs Docker Containers

##### Virtual Machine Architecture:
- Components:
  - Hardware
  - Host OS
  - Hypervisor
  - Virtual machines with guest OS
- **Heavyweight**: Due to the presence of two operating systems (guest and host).

##### Docker Container Architecture:
- Components:
  - Hardware
  - Host OS
  - Docker engine
  - Containers with applications and dependencies
- **Lightweight**: Only the Docker engine is needed, and containers share the host OS, making Docker efficient.

#### Docker Container Isolation and Resource Management

- Docker containers are **isolated** from each other.
  - You can limit **CPU and memory** allocation for each container (e.g., container 1 gets 20% of CPU).
- Failure of one container does not impact other containers, maintaining the stability of the environment.

#### Summary of Docker Advantages
- **Standardized packaging**: One image runs anywhere.
- **Multi-platform support**: Local, data center, or cloud platforms.
- **Lightweight**: Docker containers are more efficient than VMs.
- **Isolation**: Limits can be placed on resource usage, and container failures are isolated.



### 17. Step 09 - Learning Docker Images - Commands
#### Listing Docker Images
- **Command:** To list all images on the local machine:
  ```bash
  docker images
  ```
  - Shows image name, tag, ID, creation date, and size.

#### Pulling Docker Images
- **Command:** To pull an image from Docker Hub without running it:
  ```bash
  docker pull <image-name>
  ```
  - Example:
    ```bash
    docker pull mysql
    ```
  - If no tag is provided, the `latest` tag is pulled by default.

#### Searching for Docker Images
- **Command:** To search for available images in Docker Hub:
  ```bash
  docker search <image-name>
  ```
  - Example:
    ```bash
    docker search mysql
    ```
  - Look for **official** images (marked with "OFFICIAL").

#### Exploring Docker Image Layers

##### Viewing Docker Image Layers
- **Command:** To view the history (layers) of an image:
  ```bash
  docker image history <image-name>:<tag>
  ```
  - Example:
    ```bash
    docker image history in28min/helloworld-java:0.0.1-release
    ```

##### Inspecting Docker Image Details
- **Command:** To inspect detailed information about an image:
  ```bash
  docker image inspect <image-id>
  ```
  - Example:
    ```bash
    docker image inspect 67a
    ```
  - Provides information like tags, creation time, entry point, exposed ports, environment variables, and Docker version used to build the image.

#### Removing Docker Images

##### Removing an Image
- **Command:** To remove a local Docker image:
  ```bash
  docker image remove <image-name>:<tag>
  ```
  - Example:
    ```bash
    docker image remove mysql
    ```
  - **Note:** If a container is using the image, you must remove the container first.

#### Managing Docker Containers

##### Listing Running Containers
- **Command:** To list all running containers:
  ```bash
  docker container ls
  ```

##### Listing All Containers (Running and Stopped)
- **Command:** To list all containers, including stopped ones:
  ```bash
  docker container ls -a
  ```

##### Stopping and Removing Containers
- **Command:** To stop a running container:
  ```bash
  docker container stop <container-id>
  ```
  - Example:
    ```bash
    docker container stop 41bc
    ```

- **Command:** To remove a container:
  ```bash
  docker container rm <container-id>
  ```
  - Example:
    ```bash
    docker container rm 41bc
    ```

- **Important:** You cannot remove an image if any containers are still using it. First stop and remove the associated containers.

#### Summary of Key Docker Commands
- **Search for images:** `docker search <image-name>`
- **Pull images:** `docker pull <image-name>`
- **List images:** `docker images`
- **View image layers:** `docker image history <image-name>`
- **Inspect image details:** `docker image inspect <image-id>`
- **Remove images:** `docker image remove <image-name>`
- **List running containers:** `docker container ls`
- **Stop and remove containers:** `docker container stop <container-id>`, `docker container rm <container-id>`




### 18. Step 10 - Learning Docker Containers - Commands
#### Running a Container
- **Command:** To run a container (shortcut):
  ```bash
  docker run -p 5000:5000 <image-name>
  ```
  - **Full command:**  
    ```bash
    docker container run -p 5000:5000 <image-name>
    ```

#### Listing Containers
- **Command:** To list only running containers:
  ```bash
  docker container ls
  ```
  
- **Command:** To list all containers (including stopped ones):
  ```bash
  docker container ls -a
  ```

#### Pausing and Unpausing Containers

##### Pausing a Container
- **Command:** To pause a running container:
  ```bash
  docker container pause <container-id>
  ```
  - Example:
    ```bash
    docker container pause 832
    ```

##### Unpausing a Container
- **Command:** To unpause a paused container:
  ```bash
  docker container unpause <container-id>
  ```
  - Example:
    ```bash
    docker container unpause 832
    ```

#### Stopping and Killing Containers

##### Stopping a Container Gracefully
- **Command:** To stop a container (gives time for cleanup):
  ```bash
  docker container stop <container-id>
  ```
  - Example:
    ```bash
    docker container stop 832
    ```
  - **Signal:** Sends `SIGTERM`, allowing graceful shutdown.

##### Killing a Container Immediately
- **Command:** To kill a container (immediate termination):
  ```bash
  docker container kill <container-id>
  ```
  - Example:
    ```bash
    docker container kill 832
    ```
  - **Signal:** Sends `SIGKILL`, stopping the container immediately without cleanup.

#### Inspecting Containers

##### Inspecting Container Details
- **Command:** To view detailed information about a container:
  ```bash
  docker container inspect <container-id>
  ```
  - Example:
    ```bash
    docker container inspect 832
    ```

- **Details shown:** Includes container ID, status, image, port bindings, network, and platform.

#### Pruning Stopped Containers

##### Removing All Stopped Containers
- **Command:** To remove all stopped containers:
  ```bash
  docker container prune
  ```
  - Confirm with `y` to delete all stopped containers.

#### Summary of Key Docker Container Commands
- **Run a container:** `docker run -p 5000:5000 <image-name>` (or `docker container run`)
- **List running containers:** `docker container ls`
- **List all containers:** `docker container ls -a`
- **Pause/Unpause a container:** `docker container pause <container-id>`, `docker container unpause <container-id>`
- **Stop/Kill a container:** `docker container stop <container-id>`, `docker container kill <container-id>`
- **Inspect a container:** `docker container inspect <container-id>`
- **Prune stopped containers:** `docker container prune`



### 20. Step 11 - Learning Docker Commands - system and stats
##### Viewing Disk Usage
- **Command:** To see the disk usage of Docker (images, containers, volumes, build cache):
  ```bash
  docker system df
  ```

#### Viewing Docker Events
- **Command:** To view real-time events happening in Docker (e.g., container start, stop):
  ```bash
  docker system events
  ```

#### Removing Unused Resources
- **Command:** To remove all stopped containers, unused images, and networks:
  ```bash
  docker system prune
  ```
  - **With `-a`:** Removes **all** unused resources, including images without containers:
    ```bash
    docker system prune -a
    ```

#### Monitoring Container Stats
##### Viewing Container Stats
- **Command:** To monitor CPU, memory, and network usage of containers:
  ```bash
  docker stats
  ```
  - Optionally, you can pass a container ID to monitor a specific container:
    ```bash
    docker stats <container-id>
    ```

#### Controlling Resource Limits for Containers
##### Limiting Memory Usage
- **Command:** To run a container with limited memory:
  ```bash
  docker container run -d -p 5000:5000 -m 512m <image-name>
  ```
  - Example: Limiting the container to use 512 MB of memory.

##### Limiting CPU Usage
- **Command:** To run a container with limited CPU:
  ```bash
  docker container run -d -p 5000:5000 --cpu-quota=50000 <image-name>
  ```
  - Example: Assigning 50% of the available CPU (`--cpu-quota=50000` out of a total 100,000).

#### Summary of Key Docker System and Stats Commands
- **Disk usage:** `docker system df`
- **View Docker events:** `docker system events`
- **Remove unused resources:** `docker system prune -a`
- **Monitor container stats:** `docker stats`
- **Limit memory:** `docker container run -m 512m <image-name>`
- **Limit CPU:** `docker container run --cpu-quota=50000 <image-name>`




### 23. Step 12 - 02 - Building Docker Images for Python Application

#### Step 1: Understanding the Project Structure
- The **Hello World** project folder contains:
  - **Hello World Java**
  - **Hello World Node.js**
  - **Hello World Python**
- The Python project (`launch.py`) defines a simple REST API running on port `5000`.
- **Key Files in Python Project:**
  - `launch.py`: Python script defining the API route.
  - `requirements.txt`: Specifies dependencies (e.g., Flask).
  - `Dockerfile`: Contains instructions to build the Docker image.

#### Step 2: Dockerfile Overview
- **Base Image:**  
  Starts with a lightweight Python 3 base image:
  ```Dockerfile
  FROM python:3-alpine
  ```
- **Set Working Directory:**  
  Sets the working directory inside the container:
  ```Dockerfile
  WORKDIR /app
  ```
- **Copy Files:**  
  Copies the current directory’s files into the container’s `/app` directory:
  ```Dockerfile
  COPY . /app
  ```
- **Install Dependencies:**  
  Installs the Flask framework:
  ```Dockerfile
  RUN pip install -r requirements.txt
  ```
- **Expose Port:**  
  Exposes port `5000` for the container:
  ```Dockerfile
  EXPOSE 5000
  ```
- **Run Python Application:**  
  Runs the Python app (`launch.py`):
  ```Dockerfile
  CMD ["python", "./launch.py"]
  ```

#### Step 3: Building the Docker Image

- **Command to Build the Docker Image:**
  ```bash
  docker build -t in28min/hello-world-python:0.0.2-release .
  ```
  - **`-t` flag:** Specifies a tag for the image (`in28min/hello-world-python:0.0.2-release`).
  - **`.` (dot):** Refers to the build context (current directory).

#### Step 4: Running the Docker Image
- **Command to Run the Container:**
  ```bash
  docker run -d -p 5000:5000 in28min/hello-world-python:0.0.2-release
  ```
  - **`-d` flag:** Runs the container in detached mode.
  - **`-p 5000:5000`**: Maps container’s port `5000` to host’s port `5000`.




### 24. Step 13 - Understanding creation of Docker Images in Depth

#### Step-by-Step Breakdown of Docker Build
- When you run a Docker build command, each **instruction** in the `Dockerfile` is executed in **steps**. For example:
  - **Step 1/6:**  
    ```Dockerfile
    FROM python:3-alpine
    ```
    - Downloads the base image (Python 3 on Alpine Linux).
  - **Step 2/6:**  
    ```Dockerfile
    WORKDIR /app
    ```
    - Sets the working directory to `/app` in the container.
  - **Step 3/6:**  
    ```Dockerfile
    COPY . /app
    ```
    - Copies all files from the current directory (where the Dockerfile is located) into the `/app` folder in the container.
  - **Step 4/6:**  
    ```Dockerfile
    RUN pip install -r requirements.txt
    ```
    - Installs dependencies (Flask and other Python packages) using `pip`.
  - **Step 5/6:**  
    ```Dockerfile
    EXPOSE 5000
    ```
    - Exposes port `5000` for external access.
  - **Step 6/6:**  
    ```Dockerfile
    CMD ["python", "./launch.py"]
    ```
    - Runs the Python script `launch.py` to start the application.

#### Understanding Docker Layers
- **Base Image:**  
  The `FROM python:3-alpine` command pulls a base image, which is used as the foundation for the custom Docker image.

#### Viewing Docker Image History
- **Command:** To view the history of an image (shows all layers):
  ```bash
  docker history <image-id>
  ```
  - Example output displays all the layers of the image, including the base image and custom instructions (e.g., copying files, installing dependencies, exposing ports).

#### Summary of Docker Build Process
- Each instruction in the `Dockerfile` creates a new **layer**.
- The Docker build process runs step-by-step based on the Dockerfile’s instructions.
- **Base images** are pulled from Docker Hub (e.g., `python:3-alpine`) and used to build custom images.
- You can inspect the **history** of an image to view the layers created during the build process.




### 25. Step 14 - Pushing Python App Docker Image to Docker Hub
#### Step 1: Sign Up for Docker Hub
- **Create an account** on [Docker Hub](https://hub.docker.com/).
  - **Important:** Note down your **Docker ID** (not the email).
- Verify your email and complete the signup process.

#### Step 2: Log In to Docker Hub
- **Command to log in to Docker Hub:**
  ```bash
  docker login
  ```
  - Enter your **Docker ID** and **password** to authenticate.

#### Step 3: Build Docker Image with Your Docker ID
- Modify the **repository name** in the build command to include your **Docker ID**.
  - Example:
    ```bash
    docker build -t <your-docker-id>/hello-world-python:0.0.2-release .
    ```
  - **Replace** `<your-docker-id>` with your actual Docker ID.
  - This ensures the image is associated with your Docker Hub account.

#### Step 4: Push Docker Image to Docker Hub
- **Command to push the image:**
  ```bash
  docker push <your-docker-id>/hello-world-python:0.0.2-release
  ```
  - This pushes the image to the Docker Hub repository under your account.

#### Step 5: Verify the Image on Docker Hub
- **URL to check your Docker Hub repository:**
  ```url
  https://hub.docker.com/repository/docker/<your-docker-id>/hello-world-python
  ```
  - Replace `<your-docker-id>` with your actual Docker ID.
  - You should see your image and any tags associated with it (e.g., `0.0.2-release`).

#### Exercise
- **Optional:** Run the pushed image from Docker Hub on another machine:
  ```bash
  docker run -d -p 5000:5000 <your-docker-id>/hello-world-python:0.0.2-release
  ```
  - This allows others to use your image directly from Docker Hub.



### 26. Step 15 - Building and Pushing Docker Image for Node JavaScript App
- **Application Overview**: The Node.js application contains three key files: `package.json`, `index.js`, and the Dockerfile. 
  - `index.js`: Defines a simple REST API that runs on port 5000 and returns a response when the root endpoint is accessed.
  - `package.json`: Lists dependencies for the application, such as Express.js.
  - `Dockerfile`: Contains instructions for building the Docker image.

- **Dockerfile Breakdown**:
  ```dockerfile
  FROM node:8.16.1-alpine
  WORKDIR /app
  COPY . /app
  RUN npm install
  EXPOSE 5000
  CMD ["node", "index.js"]
  ```
  - The base image is Node.js (version 8.16.1) on Alpine Linux.
  - Sets a working directory `/app`.
  - Copies the current directory into `/app` inside the container.
  - Runs `npm install` to install dependencies.
  - Exposes port 5000.
  - Starts the app with `node index.js`.

- **Steps to Build and Run the Docker Image**:

  1. **Build the Docker Image**:
     ```bash
     docker build -t <your_docker_id>/hello-world-nodejs:v1 .
     ```
     Replace `<your_docker_id>` with your Docker Hub username. This command will:
     - Download the base Node.js image.
     - Install dependencies using `npm install`.
     - Build the image with the specified tag.

  2. **Run the Docker Container**:
     ```bash
     docker run -d -p 5000:5000 <your_docker_id>/hello-world-nodejs:v1
     ```
     - `-d` runs the container in detached mode.
     - `-p 5000:5000` maps port 5000 on your host to port 5000 in the container.

  3. **Verify the Container**:
     To check if the container is running:
     ```bash
     docker ps
     ```
     You should see the container listed along with its details.

  4. **Stop any Running Containers** (if needed):
     ```bash
     docker stop <container_id>
     ```
     Replace `<container_id>` with the container ID from the `docker ps` output.

- **Pushing the Image to Docker Hub**:

  1. **Log in to Docker Hub**:
     ```bash
     docker login
     ```
     This prompts for your Docker Hub credentials.

  2. **Push the Image**:
     ```bash
     docker push <your_docker_id>/hello-world-nodejs:v1
     ```
     This uploads the image to your Docker Hub repository.

- **General DevOps Takeaways**:
  - The process of building, running, and pushing Docker images is consistent across different languages (Node.js, Python, Java, etc.).
  - Regardless of the application language, DevOps workflows with Docker follow a similar pattern. This makes the skills transferable across different environments.
  - Commands like `docker build`, `docker run`, and `docker push` remain the same regardless of the language used in the application.



### 27. Step 16 - Building and Pushing Docker Image for Java Application

- **Application Overview**: The HelloWorld Java application is a Spring Boot-based REST API that returns "Hello World." It includes:
  - `pom.xml`: Contains dependencies for building the Java application (Spring Boot).
  - `HelloWorld.java`: The controller that returns the response for the REST API.
  - `Dockerfile`: The file that contains the instructions for building a Docker image, featuring a multi-stage build.

- **Multi-stage Dockerfile Breakdown**:
  ```dockerfile
  # Stage 1: Build the JAR
  FROM maven:3.6.3-jdk-8 AS build
  WORKDIR /app
  COPY . /app
  RUN mvn clean package

  # Stage 2: Run the application
  FROM openjdk:8-jdk-alpine
  WORKDIR /app
  COPY --from=build /app/target/HelloWorld-0.0.1-SNAPSHOT.jar /app/HelloWorld.jar
  EXPOSE 5000
  ENTRYPOINT ["java", "-jar", "/app/HelloWorld.jar"]
  ```
  - **Stage 1**: Uses Maven to build the JAR file from the source code.
  - **Stage 2**: Copies the JAR file from the first stage, adds it to the final image, and exposes port 5000 to run the application using `java -jar`.

- **Steps to Build and Run the Docker Image**:

  1. **Navigate to the Java Project**:
     ```bash
     cd HelloWorldJava
     ```

  2. **Build the Docker Image**:
     ```bash
     docker build -t <your_docker_id>/helloworld-java:v2 .
     ```
     This command uses the Dockerfile to:
     - Run Maven to create the JAR file.
     - Copy the JAR file to the second stage.
     - Build the final image, which is tagged as version `v2`.

  3. **Run the Docker Container**:
     ```bash
     docker run -d -p 5000:5000 <your_docker_id>/helloworld-java:v2
     ```
     - `-d` runs the container in detached mode.
     - `-p 5000:5000` maps port 5000 of the host to port 5000 inside the container.

  4. **Check the Logs**:
     ```bash
     docker logs -f <container_id>
     ```
     This will display the output of the running container to verify that the application has started correctly.

  5. **Stop the Container** (if necessary):
     ```bash
     docker stop <container_id>
     ```

- **Pushing the Image to Docker Hub**:

  1. **Log in to Docker Hub**:
     ```bash
     docker login
     ```

  2. **Push the Image**:
     ```bash
     docker push <your_docker_id>/helloworld-java:v2
     ```

     Docker automatically creates the repository in Docker Hub if it doesn’t exist yet.

- **Multi-Stage Build Explained**:
  - **Stage 1**: Uses a Maven image to build the project and produce a JAR file. This stage is purely for compiling and building the code.
  - **Stage 2**: Uses the lightweight Alpine version of OpenJDK to run the application. The JAR file from Stage 1 is copied into this stage.

  Multi-stage builds reduce the size of the final Docker image by only including what is necessary to run the application (the JAR file), while excluding build tools like Maven.

- **General DevOps Takeaways**:
  - Multi-stage builds in Docker are ideal for separating build and runtime environments, particularly in languages like Java where build artifacts (JAR files) are created.
  - Docker enables uniformity across different languages (Java, Node.js, Python), ensuring that the process to build, run, and push images is similar across all types of applications.



### 28. Step 17 - Building Efficient Docker Images - Improving Layer Caching
- **Background on Layer Caching**:
  - Docker images are built in layers. Each instruction in the Dockerfile creates a new layer.
  - Docker caches layers that have not changed. If nothing in the layer changes, Docker will reuse the cached layer, making builds faster.
  - This process applies when you rebuild images without making code changes.

- **Initial Build Example**:
  ```bash
  docker build -t <your_docker_id>/helloworld-nodejs:0.0.2 .
  ```
  - Docker reuses cached layers when building an image with no code changes.
  - Commands like `COPY . /app` are frequently invalidated if any part of the source code changes, causing the entire build to rerun from that step onward.

- **Modifying the Dockerfile for Efficiency**:
  - By structuring the Dockerfile to separate frequently changing code from rarely changing dependencies, we can maximize the benefit of layer caching.
  
  **Inefficient Dockerfile**:
  ```dockerfile
  FROM node:8.16.1-alpine
  WORKDIR /app
  COPY . /app
  RUN npm install
  EXPOSE 5000
  CMD ["node", "index.js"]
  ```

  **Optimized Dockerfile**:
  ```dockerfile
  FROM node:8.16.1-alpine
  WORKDIR /app
  
  # Copy package.json and install dependencies
  COPY package.json /app
  RUN npm install
  
  EXPOSE 5000
  
  # Copy the rest of the application files
  COPY . /app
  
  CMD ["node", "index.js"]
  ```

  - **Explanation**:
    - The `package.json` file, which contains dependencies, rarely changes. By copying it first and running `npm install` immediately, Docker can cache the dependency installation step.
    - When source code changes (e.g., in `index.js`), only the later layers are rebuilt. Dependencies are not reinstalled unless `package.json` changes.

- **Rebuilding the Image**:
  ```bash
  docker build -t <your_docker_id>/helloworld-nodejs:0.0.3 .
  ```
  - Docker will only rebuild layers after the point where changes were detected.
  - Since `package.json` was unchanged, the `npm install` step is reused from the cache, significantly speeding up the build.

- **Testing Code Changes**:
  1. Modify `index.js` to reflect version `V3.1` or other changes.
     ```javascript
     res.send("Hello World JavaScript V3.1");
     ```
  2. Rebuild the image.
     ```bash
     docker build -t <your_docker_id>/helloworld-nodejs:0.0.3 .
     ```
  3. Run the container and map a different port to avoid conflicts:
     ```bash
     docker run -d -p 5001:5000 <your_docker_id>/helloworld-nodejs:0.0.3
     ```
  4. Check the logs to ensure the app is running correctly:
     ```bash
     docker logs -f <container_id>
     ```

- **Optimizing Python Docker Images**:
  Similar optimizations can be applied to other language environments, like Python.

  **Inefficient Python Dockerfile**:
  ```dockerfile
  FROM python:3.8-alpine
  WORKDIR /app
  COPY . /app
  RUN pip install -r requirements.txt
  EXPOSE 5000
  CMD ["python", "app.py"]
  ```

  **Optimized Python Dockerfile**:
  ```dockerfile
  FROM python:3.8-alpine
  WORKDIR /app

  # Copy and install dependencies first
  COPY requirements.txt /app
  RUN pip install -r requirements.txt

  EXPOSE 5000
  
  # Copy the rest of the application files
  COPY . /app

  CMD ["python", "app.py"]
  ```

  - By copying `requirements.txt` first, the dependencies layer is cached unless `requirements.txt` changes.
  - Rebuilding the image will only update the source code layers, making the process faster.

- **Rebuilding the Python Image**:
  ```bash
  docker build -t <your_docker_id>/helloworld-python:0.0.3 .
  ```

- **Key Takeaways on Layer Caching**:
  - **Caching Benefits**: Utilizing layer caching improves both the build time and the push/pull times when interacting with Docker registries.
  - **Layer Efficiency**: Structuring Dockerfiles to separate dependencies from application code reduces the likelihood of rebuilding unnecessary layers.
  - **Faster Deployments**: By reducing build times, this approach leads to faster deployment cycles and more efficient use of resources.



### 29. Step 18 - Understanding ENTRYPOINT vs CMD

- **CMD vs ENTRYPOINT**:
  - **CMD**: This sets the default command that runs when a container starts. However, this can easily be overridden by passing a different command when running the container.
  - **ENTRYPOINT**: This specifies a fixed command that is always executed, regardless of what is passed during the container run. It is more rigid compared to CMD but can be overridden in more complex scenarios.

- **Example Dockerfile with CMD** (Node.js):
  ```dockerfile
  FROM node:8.16.1-alpine
  WORKDIR /app
  COPY . /app
  RUN npm install
  EXPOSE 5000
  CMD ["node", "index.js"]
  ```
  - If a command like `ping google.com` is added when running the container, it will override the CMD. 
  - **Run Command**:
    ```bash
    docker run -d -p 5001:5000 <your_docker_id>/helloworld-nodejs:0.0.3 ping google.com
    ```
    In this case, the Node.js application will not run, and instead, the container will continuously ping Google.

- **Example Dockerfile with ENTRYPOINT** (Java):
  ```dockerfile
  FROM openjdk:8-jdk-alpine
  WORKDIR /app
  COPY target/HelloWorld.jar /app/HelloWorld.jar
  EXPOSE 5000
  ENTRYPOINT ["java", "-jar", "/app/HelloWorld.jar"]
  ```
  - Even if you pass `ping google.com` during the container run, the Java application will still run as expected because ENTRYPOINT is not overridden by simple command-line arguments.
  - **Run Command**:
    ```bash
    docker run -d -p 5001:5000 <your_docker_id>/helloworld-java:0.0.2 ping google.com
    ```
    The container will run the Java application regardless of the command-line argument.

- **When to Use CMD**:
  - Use CMD when you want flexibility to override the command. For example, in scenarios where the application file (e.g., `index.js`) may vary, CMD allows passing different file names.
  - Example:
    ```bash
    docker run -d -p 5000:5000 <your_docker_id>/helloworld-nodejs:0.0.3 index2.js
    ```
    This command overrides the default `index.js` and runs `index2.js` instead.

- **When to Use ENTRYPOINT**:
  - Use ENTRYPOINT when you want the same command to run every time the container starts, regardless of command-line input. This is useful for applications where the command is static, such as a compiled JAR file in Java.
  - ENTRYPOINT ensures that the main application always launches consistently.

- **Overriding ENTRYPOINT**:
  - Although ENTRYPOINT is more rigid, it can still be overridden using the `--entrypoint` flag.
  - **Overriding Example**:
    ```bash
    docker run -d -p 5000:5000 --entrypoint ping <your_docker_id>/helloworld-java:0.0.2 google.com
    ```
    This command will override the ENTRYPOINT and ping Google, despite the Dockerfile specifying that `java -jar HelloWorld.jar` should be run.

#### Key Differences
- **CMD**:
  - Can be easily overridden by passing a different command when running the container.
  - Use CMD if the command or file to run might change based on circumstances.
  
- **ENTRYPOINT**:
  - Ensures that a specific command runs every time, regardless of command-line arguments.
  - More suitable for fixed, predictable applications.


### 218. Step 01 - Introduction to Microservices
- **What is a Microservice?**:
  - There is no universally accepted definition of a microservice, but in simple terms, microservices are small, autonomous services that work together.
  - A more detailed definition (e.g., by Martin Fowler and James Lewis) describes microservices as a style of software development where an application is developed as a suite of small services, each running in its own process, communicating via lightweight mechanisms (e.g., HTTP), and built around business capabilities. These services can be independently deployed and managed and may use different programming languages and data storage technologies.

- **Core Characteristics of Microservices**:
  - **Exposed via REST**: Microservices typically communicate over HTTP/REST APIs, making them easy to integrate and interact with.
  - **Small Deployable Units**: Each microservice is a small, self-contained unit that can be deployed independently. This modular approach ensures flexibility and scalability.
  - **Cloud Enabled**: Microservices are designed to run in cloud environments, meaning they can be easily scaled up or down based on demand.

- **Microservices vs. Monoliths**:
  - In contrast to a monolithic architecture, where all functionality is bundled into a single large application, microservices break the application into smaller, independently deployable units.
  - Each microservice has a well-defined boundary and is responsible for a specific business capability.
  
- **Cloud-Enabled Scalability**:
  - Microservices can scale independently based on the workload. For example, if microservice three experiences more load, an additional instance can be spun up easily, without affecting other services.
  - This dynamic scalability allows microservices to handle fluctuating demands efficiently.
  - In cloud environments, adding or removing instances of microservices should be straightforward and require minimal configuration.

- **Example Scenario**:
  - Consider a set of five microservices deployed in production:
    - Microservice 1 might have two instances running.
    - Microservice 2 might have four instances to handle more load.
    - Microservice 3 might currently have only one instance but can easily scale to more if needed.
  
  This setup illustrates how each microservice can scale independently, making it more adaptable to varying demands compared to monolithic architectures.

#### Summary
- Microservices represent a modern approach to building software systems by breaking down large monolithic applications into small, independent, and easily deployable services.
- Key features include REST-based communication, modular deployment, and cloud-enabled scaling.
- The flexibility provided by microservices architecture allows organizations to adopt new technologies, scale applications easily, and streamline development and deployment processes.



### 219. Step 02 - Advantages of Microservices
1. **Adapting New Technologies and Processes**:
   - **Flexibility in Technology Choices**: Microservices architecture allows each service to be built using different technologies, enabling developers to select the best tool for each task.
     - For example, one microservice could be written in Java, another in Node.js, and a third in Kotlin. This flexibility allows teams to adopt new and emerging technologies quickly without needing to refactor the entire application.
   - **Easier Integration of New Languages**: As new languages or frameworks emerge, such as XYZ in the future, you can easily create new microservices in those languages while maintaining communication with existing services.
   - **Independent Processes**: Each microservice can follow its own development and deployment processes, improving overall flexibility and efficiency.

2. **Dynamic Scaling**:
   - **Adaptable to Fluctuating Demand**: Microservices can dynamically scale based on the load. For instance, during high-demand periods like Black Friday, certain microservices (e.g., those handling payment or product inventory) can scale up to handle the increased traffic.
   - **Cost Efficiency**: In periods of lower demand, microservices can scale down, reducing hardware and operational costs. This dynamic provisioning of resources makes the architecture more cost-effective and resource-efficient.
   - **Cloud-Native Support**: Most microservices are cloud-enabled, which means scaling and deploying additional instances is straightforward, whether it’s adding more servers during peak times or releasing resources when demand drops.

3. **Faster Release Cycles**:
   - **Simplified Deployment**: Since microservices are smaller, independent units, they are easier to develop, test, and deploy compared to monolithic applications. You can release updates to individual services without affecting the entire system.
   - **Faster Time to Market**: With the ability to develop and release individual services independently, teams can bring new features or updates to market faster, improving business agility and responsiveness to customer needs.
   - **Continuous Deployment**: Microservices make it easier to adopt continuous integration and continuous deployment (CI/CD) practices, resulting in more frequent and reliable releases.

#### Summary:
In this video, we explored three key advantages of microservices:
1. **Adopting new technologies and processes**: Flexibility to use different languages and frameworks for different services.
2. **Dynamic scaling**: The ability to scale services up or down based on demand, optimizing costs and performance.
3. **Faster release cycles**: Independent microservice deployment allows quicker delivery of new features and updates to the market.


### 30. Step 19 - Docker and Microservices - Quick Start
- **Introduction to Microservices**:
  - Microservices architecture involves breaking down a monolithic application into smaller, independent services.
  - These microservices can be built using different technologies (e.g., Java, Python, Node.js), and they communicate with each other through well-defined APIs.
  - Microservices offer flexibility, scalability, and faster development cycles but come with challenges such as managing multiple deployments and ensuring consistency across different environments.

- **Challenges in Microservices**:
  - **Deployment Complexity**: In a microservices architecture, the number of deployments increases significantly. Instead of deploying a single monolith, you might deploy hundreds or even thousands of microservices per day.
  - **Technology Diversity**: Microservices can be built using different programming languages and frameworks, which can lead to diverse and complex deployment pipelines.
  - **Environment Inconsistency**: Deploying the same application in different environments (local, test, production) often leads to issues such as "it works on my machine" because environments may not be identical.

- **How Docker Helps Solve These Challenges**:
  - **Unified Deployment**: Docker allows you to package any application (Java, Python, Node.js, etc.) into a standardized container image. This image can be deployed consistently across various environments, regardless of the underlying technology.
  - **Simplified Operations**: Operations teams do not need to worry about what technology is inside a container. As long as the container image works and meets requirements, it can be deployed anywhere.
  - **Fewer Environment Issues**: Since Docker ensures that the same container runs across all environments, local development and production environments are more consistent, reducing bugs and deployment issues.
  - **Technology Adoption**: Docker abstracts the complexity of different programming languages and frameworks, making it easier to adopt new technologies without needing to overhaul deployment pipelines.

- **Key Benefits of Docker in Microservices**:
  - **Portability**: A Docker image encapsulates everything needed to run an application, making it portable across different systems (local, cloud, on-prem).
  - **Consistency**: Docker ensures that the same application behaves consistently across different environments (development, test, production).
  - **Automation**: Docker enables automation for deployment, scaling, and monitoring across microservices, thanks to container orchestration tools (e.g., Kubernetes).
  - **Simplified Scaling**: Microservices can be scaled independently, and Docker makes it easier to deploy additional instances of a microservice by simply running more containers.

- **Container Orchestration**:
  - In microservices, Docker containers can be managed and scaled automatically using container orchestration tools like Kubernetes, Docker Swarm, or AWS ECS.
  - These tools help in automating tasks such as scaling, monitoring, and updating services.

#### Conclusion:
Docker plays a critical role in microservices architecture by simplifying deployment, ensuring consistency, and reducing operational complexity. It allows developers to focus on building microservices without worrying about the intricacies of deployment, while enabling operations teams to deploy, scale, and manage services efficiently across multiple environments. Docker's flexibility and standardization make it a key enabler of both microservices and modern DevOps practices.


### 31. Step 20 - Introduction to Microservices - CE and CC
- **Currency Exchange Service**:
  - **Purpose**: Provides the exchange rate between two currencies.
  - **Example**: If you ask for the value of 1 USD in INR, it might return 60. Similarly, for 1 EUR in INR, it might return 70.
  - **Example API Call**:
    - **URL**: `http://localhost:8000/currency-exchange/from/USD/to/INR`
    - **Response**:
      ```json
      {
        "id": 10002,
        "from": "EUR",
        "to": "INR",
        "conversionMultiple": 75.00,
        "exchangeEnvironmentInfo": "37f1ad927c6e v1 27c6e"
      }
      ```

- **Currency Conversion Service**:
  - **Purpose**: Converts a quantity of one currency to another currency, using the exchange rate from the currency exchange service.
  - **Example**: If you ask for the value of 10 USD in INR, it calls the currency exchange service to get the conversion rate and returns 600 (10 x 60).
  - **Example API Call**:
    - **URL**: `http://localhost:8100/currency-conversion/from/USD/to/INR/quantity/10`
    - **Response**:
      ```json
      {
        "id": 10002,
        "from": "EUR",
        "to": "INR",
        "conversionMultiple": 75.00,
        "quantity": 10,
        "totalCalculatedAmount": 750.00,
        "exchangeEnvironmentInfo": "37f1ad927c6e v1 27c6e",
        "conversionEnvironmentInfo": "fb6316b5713d v1 5713d"
      }
      ```

#### How These Microservices Communicate:
- **Currency Conversion Service Interaction**: 
  - When the currency conversion service needs to calculate the conversion of a bucket of currencies (e.g., 10 USD to INR), it:
    1. Calls the currency exchange service to get the exchange rate (e.g., 1 USD to INR = 60).
    2. Multiplies the exchange rate by the quantity to get the total value (e.g., 10 USD to INR = 600).
  
#### Configuration of Microservices:
- **Environment Variable Setup**: 
  - The currency conversion service needs to know where the currency exchange service is located. This is configured via an environment variable:
    - **Environment Variable**: `CURRENCY_EXCHANGE_SERVICE_HOST`
    - The currency conversion service uses this variable to identify the host of the currency exchange service and communicate with it.


### 33. Step 21 - Running Microservices as Docker Containers
#### Step 1: Running the **Currency Exchange Service**

1. **Pull the Docker Image**:
   - Navigate to the Docker Hub repository (`hub.docker.com/u/in28min`), and locate the **currency exchange** image (version `0.0.1-release`).
   - Pull the image using the following command:
     ```bash
     docker run -p 8000:8000 --name Currency-Exchange in28min/currency-exchange:0.0.1-release
     ```

2. **Run the Service**:
   - This command will:
     - Expose port **8000** on both the host and the container.
     - Assign the name `Currency-Exchange` to the container.
   - Since the image is not available locally, Docker will pull it from Docker Hub.
   - Once the image is pulled, the Java Spring Boot application will start on port 8000.

3. **Verify the Service**:
   - Check if the service is running correctly by accessing the following URL:
     ```bash
     http://localhost:8000/currency-exchange/from/EUR/to/INR
     ```
   - Expected Response:
     ```json
     {
        "id": 10002,
        "from": "EUR",
        "to": "INR",
        "conversionMultiple": 75.00,
        "exchangeEnvironmentInfo": "6a4a18065de0 v1 65de0"
     }
     ```

4. **Run in Detached Mode**:
   - To run the container in the background, you need to stop the previous instance and relaunch it using the `-d` flag:
     ```bash
     docker container rm Currency-Exchange
     docker run -d -p 8000:8000 --name Currency-Exchange in28min/currency-exchange:0.0.1-release
     ```

#### Step 2: Running the **Currency Conversion Service**

1. **Pull the Docker Image**:
   - Similar to the currency exchange service, locate the **currency conversion** image (`0.0.1-release`) on Docker Hub.
   - Pull and run the container:
     ```bash
     docker run -p 8100:8100 --name Currency-Conversion in28min/currency-conversion:0.0.1-release
     ```

2. **Verify the Service**:
   - Once the image is pulled and the container is running, check if the service is working by accessing the following URL:
     ```bash
     http://localhost:8100/currency-conversion/from/USD/to/INR/quantity/10
     ```
   - Expected Response:
     ```json
     {
       "from": "USD",
       "to": "INR",
       "quantity": 10,
       "conversionMultiple": 60,
       "totalCalculatedAmount": 600
     }
     ```

#### Step 3: Handling Communication Between Microservices

- **Problem**:
  - When the currency conversion service tries to call the currency exchange service, it fails to connect because the two services are running in separate containers, and the conversion service cannot resolve `localhost` to the exchange service.

- **Solution**:
  - Use Docker's networking to allow the containers to communicate with each other by container name.

1. **Create a Custom Docker Network**:
   - Create a bridge network that both services can use:
     ```bash
     docker network create currency-network
     ```

2. **Run the Containers on the Network**:
   - Run the **currency exchange** service on the network:
     ```bash
     docker run -d --network currency-network -p 8000:8000 --name Currency-Exchange in28min/currency-exchange:0.0.1-release
     ```

   - Run the **currency conversion** service on the same network:
     ```bash
     docker run -d --network currency-network -p 8100:8100 --name Currency-Conversion -e CURRENCY_EXCHANGE_SERVICE_HOST=Currency-Exchange in28min/currency-conversion:0.0.1-release
     ```

3. **Configure Environment Variable**:
   - The `-e` flag in the currency conversion service command sets the `CURRENCY_EXCHANGE_SERVICE_HOST` environment variable to the name of the exchange service container (`Currency-Exchange`).
   - This allows the conversion service to call the exchange service using its container name, instead of `localhost`.

4. **Verify Communication**:
   - Test the currency conversion service again:
     ```bash
     http://localhost:8100/currency-conversion/from/USD/to/INR/quantity/10
     ```
   - Now, the currency conversion service should successfully communicate with the exchange service and return the correct conversion.



### 34. Step 22 - Using Docker Link to Connect Microservices
#### Problem Recap:
- The **currency conversion service** was unable to communicate with the **currency exchange service** when running inside separate containers.
- The direct call to the **currency exchange service** from a browser (localhost) worked fine, but the call from the **currency conversion service** failed.

#### Cause:
- The default Docker networking mode, **Bridge Network**, isolates containers such that they cannot communicate using `localhost`. Containers in the bridge network cannot reference each other using `localhost` and must use other methods like container names or custom networks.

#### Solution: Using Docker Link to Enable Communication Between Containers

##### Step 1: Stop Existing Containers
- First, stop the currently running **currency conversion service** but leave the **currency exchange service** running:
  ```bash
  docker stop Currency-Conversion
  ```

##### Step 2: Establish a Link Between Containers
- Use Docker's `--link` option to establish a communication link between the **currency conversion service** and the **currency exchange service**. This will allow the **currency conversion** container to reference the **currency exchange** container by name.

##### Step 3: Modify and Run the Currency Conversion Container

- Update the command to link the two containers and set the required environment variable to point to the **currency exchange service**:
  ```bash
  docker run -d --link Currency-Exchange \
  -p 8100:8100 \
  --name Currency-Conversion \
  --env CURRENCY_EXCHANGE_SERVICE_HOST=http://Currency-Exchange \
  in28min/currency-conversion:0.0.1-release
  ```

  - **`--link Currency-Exchange`**: This links the **currency conversion** container to the **currency exchange** container.
  - **`--env CURRENCY_EXCHANGE_SERVICE_HOST=http://Currency-Exchange`**: This sets the environment variable `CURRENCY_EXCHANGE_SERVICE_HOST` with the value `http://Currency-Exchange`, allowing the **currency conversion** service to find and communicate with the **currency exchange** service.

##### Step 4: Test the Setup

- Check the logs of the **currency conversion** container to ensure it is up and running:
  ```bash
  docker logs -f Currency-Conversion
  ```

- Now, test the communication between the two services by accessing the currency conversion URL:
  ```bash
  http://localhost:8100/currency-conversion/from/USD/to/INR/quantity/10
  ```
  You should now get the expected response where the **currency conversion service** is able to communicate with the **currency exchange service**.


#### Why Link is a Shortcut (Not Recommended for Production):
- The **`--link`** option is an older method to connect Docker containers. While it works for simple setups, it is no longer the recommended approach for managing container communication in modern microservices.
- **Better Approach**: Use **Docker networks**, which provide more flexibility and allow containers to communicate using their service names without explicitly linking them.


### 35. Step 23 - Using Custom Networking to Connect Microservices
#### Default Networking Options in Docker:
1. **Bridge Network** (Default):
   - When you create a container, Docker assigns it to the default **bridge** network.
   - Containers in the **bridge** network cannot communicate with each other using `localhost`. They require additional configuration to establish communication.
   
2. **Host Network**:
   - In **host** networking, the container shares the host’s network stack. This means it doesn’t have its own network namespace, and services running in the container are exposed directly on the host’s network.
   - **Limitations**: **Host networking** only works on Linux and is **not** supported on Docker Desktop for Windows or Mac.

3. **None**:
   - The **none** network mode completely disables networking for the container. This is not useful when containers need to communicate, as in our case with microservices.

#### Creating a Custom Docker Network:
Since **host** networking is not available on Docker Desktop, and the **bridge** network is not suitable without extra configuration, the best option is to create a **custom network** for the microservices.

- **Custom Docker Network**: This allows containers to communicate with each other using their service names (container names), which makes it easier to manage microservice-to-microservice communication.

#### Step 1: Creating a Custom Network

1. Create a custom network called `currency-network`:
   ```bash
   docker network create currency-network
   ```

#### Step 2: Launch the Currency Exchange Service in the Custom Network

1. Stop and remove the existing containers if needed:
   ```bash
   docker stop Currency-Exchange Currency-Conversion
   docker rm Currency-Exchange Currency-Conversion
   ```

2. Run the **currency exchange** service within the `currency-network`:
   ```bash
   docker run -d --network currency-network -p 8000:8000 --name Currency-Exchange in28min/currency-exchange:0.0.1-release
   ```

#### Step 3: Launch the Currency Conversion Service in the Custom Network

1. Now, launch the **currency conversion** service in the same custom network:
   ```bash
   docker run -d --network currency-network -p 8100:8100 --name Currency-Conversion --env CURRENCY_EXCHANGE_SERVICE_HOST=http://Currency-Exchange in28min/currency-conversion:0.0.1-release
   ```

2. In this command:
   - **`--network currency-network`** ensures that the conversion service is part of the same network as the exchange service.
   - **`--env CURRENCY_EXCHANGE_SERVICE_HOST=http://Currency-Exchange`** configures the conversion service to use the **currency exchange service** by referencing its container name (`Currency-Exchange`).

#### Step 4: Verify the Services

1. Check if both services are running:
   ```bash
   docker container ls
   ```

2. View the logs of both services to confirm they are up:
   ```bash
   docker logs -f Currency-Exchange
   docker logs -f Currency-Conversion
   ```

3. Test the currency conversion service by accessing the following URL:
   ```bash
   http://localhost:8100/currency-conversion/from/USD/to/INR/quantity/10
   ```
   - This request should now work correctly, as the **currency conversion** service can communicate with the **currency exchange** service using the custom network.



### 36. Step 24 - Using Docker Compose to Simplify Microservices Launch
#### Problem Recap:
As the number of microservices increases, managing them with long Docker commands becomes cumbersome. We need a simpler way to manage multiple services, their networking, and dependencies. This is where **Docker Compose** comes in.

#### Introduction to Docker Compose:
- **Docker Compose** is a tool that allows you to define and run multi-container Docker applications using a simple YAML configuration file. This is especially useful for managing microservices, as it simplifies the commands needed to run and manage them.

#### Key Features of Docker Compose:
- **Define Services**: You can define multiple services (containers) in a single YAML file.
- **Networking**: Automatically sets up networking between services so they can communicate with each other.
- **Environment Variables**: Supports defining environment variables for services.
- **Dependency Management**: Specifies which services depend on others and ensures they start in the correct order.
- **Easy Scaling**: Makes it easier to scale services by defining everything in one place.

#### Docker Compose File Structure:
The **`docker-compose.yml`** file allows you to define the services, their configurations, and how they should interact. Here's an overview of the file structure:

```yaml
version: '3.7'

services:
  currency-exchange:
    image: in28min/currency-exchange:0.0.1-release
    ports:
      - "8000:8000"
    restart: always
    networks:
      - currency-compose-network

  currency-conversion:
    image: in28min/currency-conversion:0.0.1-release
    ports:
      - "8100:8100"
    environment:
      - CURRENCY_EXCHANGE_SERVICE_HOST=http://currency-exchange
    depends_on:
      - currency-exchange
    networks:
      - currency-compose-network

networks:
  currency-compose-network:
    driver: bridge
```

#### Key Components of the `docker-compose.yml`:
1. **Version**: Specifies the version of Docker Compose, in this case, `3.7`.
   
2. **Services**:
   - **currency-exchange**:
     - **Image**: Specifies the Docker image for the service (`in28min/currency-exchange:0.0.1-release`).
     - **Ports**: Maps container port 8000 to host port 8000 (`"8000:8000"`).
     - **Restart**: Ensures the service restarts automatically if it crashes (`restart: always`).
     - **Networks**: Specifies the custom network for the service (`currency-compose-network`).

   - **currency-conversion**:
     - **Image**: Specifies the Docker image for the currency conversion service.
     - **Ports**: Maps port 8100.
     - **Environment**: Sets the environment variable for the currency exchange service host (`CURRENCY_EXCHANGE_SERVICE_HOST`).
     - **depends_on**: Ensures the **currency-conversion** service starts only after the **currency-exchange** service is up.
     - **Networks**: Also connects this service to the custom network (`currency-compose-network`).

3. **Networks**:
   - **currency-compose-network**: Creates a custom network for both services to communicate.

#### Running the Services with Docker Compose:
Now that the **`docker-compose.yml`** file is set up, we can easily run both services with a single command.

1. **Stop Existing Containers**:
   - Ensure any previously running containers are stopped:
     ```bash
     docker stop Currency-Exchange Currency-Conversion
     docker rm Currency-Exchange Currency-Conversion
     ```

2. **Navigate to the Microservices Directory**:
   - Ensure you're in the directory containing the **`docker-compose.yml`** file:
     ```bash
     cd path/to/microservices
     ```

3. **Run Docker Compose**:
   - To start all services defined in the `docker-compose.yml` file:
     ```bash
     docker-compose up
     ```
   - Docker Compose will automatically create the custom network, start the **currency-exchange** and **currency-conversion** services, and link them using the environment variable.

4. **Check the Services**:
   - Verify that the services are running:
     ```bash
     docker ps
     ```

5. **Test the Services**:
   - **Currency Exchange**:
     ```bash
     http://localhost:8000/currency-exchange/from/USD/to/INR
     ```
   - **Currency Conversion**:
     ```bash
     http://localhost:8100/currency-conversion/from/USD/to/INR/quantity/10
     ```

#### Benefits of Using Docker Compose:
1. **Simplified Management**: Instead of manually running long Docker commands for each service, you can manage everything from one YAML file.
2. **Automatic Networking**: Docker Compose automatically handles the networking between services, eliminating the need to manually set up links or custom networks.
3. **Service Dependencies**: By using `depends_on`, Docker Compose ensures that services start in the correct order.
4. **Easy Scaling**: If you want to scale a particular service, you can easily do so with Docker Compose.


### 37. Step 25 - Understanding Docker Compose further
In this step, we delved deeper into Docker Compose and explored various useful commands that simplify managing microservices. Let’s recap the important commands and their usage.

#### 1. **Starting Containers in Detached Mode**
   - To launch containers in detached mode, use the `-d` flag:
     ```bash
     docker-compose up -d
     ```
   - This runs the services defined in the **`docker-compose.yml`** file in the background, allowing you to continue using the terminal.

#### 2. **Listing Running Containers**
   - You can check the running containers with:
     ```bash
     docker container ls
     ```
   - This will display all running containers, including the ones started by Docker Compose. The container names follow the format **`<folder-name>_<service-name>_1`** (e.g., `microservices_currency-conversion_1`).

#### 3. **Viewing Networks Created by Docker Compose**
   - Docker Compose creates a custom network automatically. To see the networks:
     ```bash
     docker network ls
     ```
   - You will notice a network with the name derived from the folder name (e.g., `microservices_currency-compose-network`).

#### 4. **Inspecting Networks**
   - To see the details of the network and the containers within it:
     ```bash
     docker network inspect <network-name>
     ```

#### 5. **Stopping and Removing Containers**
   - To stop the running containers managed by Docker Compose:
     ```bash
     docker-compose down
     ```
   - This command stops and removes the containers, networks, and other resources created by Docker Compose.

#### 6. **Cleaning Up Unused Resources**
   - To clean up old containers, networks, and images:
     ```bash
     docker system prune -a
     ```
   - This command frees up disk space by removing resources that are not being used, such as stopped containers, dangling images, and unused networks.

#### 7. **Docker Compose Events**
   - You can monitor real-time events related to Docker Compose services using:
     ```bash
     docker-compose events
     ```
   - This is useful for tracking when containers are created, started, or stopped.

#### 8. **Validating Docker Compose Config**
   - To validate the syntax of your **`docker-compose.yml`** file, use:
     ```bash
     docker-compose config
     ```
   - This command helps catch errors in your Compose file by checking if the file is valid.

#### 9. **Listing Docker Compose Images**
   - To list the images being used by Docker Compose services:
     ```bash
     docker-compose images
     ```

#### 10. **Viewing Running Containers (Docker Compose)**
   - To view the list of containers launched by Docker Compose:
     ```bash
     docker-compose ps
     ```

#### 11. **Viewing Top Processes**
   - You can see the top processes running in each container:
     ```bash
     docker-compose top
     ```

#### 12. **Pausing and Unpausing Containers**
   - You can pause all running containers managed by Docker Compose:
     ```bash
     docker-compose pause
     ```
   - To unpause them:
     ```bash
     docker-compose unpause
     ```

#### 13. **Stopping and Killing Containers**
   - You can stop the containers with:
     ```bash
     docker-compose stop
     ```
   - To forcefully kill the containers:
     ```bash
     docker-compose kill
     ```

#### Summary:
In this step, we explored various Docker Compose commands, including starting containers in detached mode, monitoring events, validating configurations, and managing containers. Docker Compose simplifies working with multi-container applications by reducing the complexity of managing multiple services and their networking, making it a powerful tool for microservices architecture.

In the next section, we’ll dive into new tools and concepts to further enhance your DevOps journey. 


## Section 3: DevOps with Docker and Kubernetes on Google Kubernetes Engine
### 38. Step 01 - Getting Started with Docker, Kubernetes and Google Kubernetes Engine

**Why Docker is Needed:**
- Docker enables standardization of packaging and deploying applications across different environments (local machine, enterprise data center, cloud).
- With Docker, deployment is simplified—just providing a Docker image and running a command can start the application.
- Docker abstracts complexities related to language, framework, operating system, and configuration.

**Docker Benefits:**
- Simplifies deployment: No need to worry about underlying infrastructure specifics.
- Portability: Docker images can run anywhere there’s a container runtime.

**Limitations of Docker:**
- While Docker simplifies deploying single instances, it does not handle scaling, load management, or automatic failover.

**Introduction to Kubernetes:**
- Kubernetes is a tool designed to manage a group of servers (cluster) and deploy applications at scale.
- It provides features beyond Docker, including scaling, load balancing, and self-healing.

**Deploying Applications in Kubernetes:**
- Requires multiple commands (compared to Docker’s single command) but offers much more functionality.
- Kubernetes provides more control and automation in managing the deployed applications.

**Key Features of Kubernetes:**
- **Scaling:** Ability to increase instances based on load with a simple command.
- **Load Balancing:** Kubernetes automatically distributes traffic among instances.
- **Self-healing:** If an instance fails, Kubernetes will automatically bring a new one up to ensure the desired number of instances is running.
- **Auto-scaling:** Can be set up to automatically scale the number of instances based on real-time traffic.
  
**Version Control and Zero Downtime Deployment:**
- Kubernetes allows smooth application updates (e.g., from v1 to v2) without any downtime.
- Rolling updates feature: Old version is gradually replaced with a new version, ensuring uninterrupted service.

**Kubernetes Architecture:**
- Kubernetes clusters consist of a group of servers working together.
- Managing and maintaining a Kubernetes cluster can be complex, but there are managed services like Google Kubernetes Engine (GKE) that simplify cluster setup and management.

**Managed Kubernetes (GKE):**
- GKE (Google Kubernetes Engine) is a managed service from Google Cloud Platform (GCP).
- GKE automates cluster management and uses the same infrastructure that powers Google services like Gmail and YouTube.


### 39. Step 02 - Creating Google Cloud Account V2
**Google Cloud Free Trial:**
- Google Cloud offers a free trial account with $300 in credits, which can be used to explore the platform.
- Even though most of the activities will be within the free tier, Google requires valid credit or debit card details to set up the account.

**Steps to Create a Google Cloud Account:**
1. **Log into Google Account:**
   - Visit [cloud.google.com](https://cloud.google.com).
   - Click on "Get Started for Free."

2. **Choose Country and Organization Type:**
   - Select your country from the dropdown menu.
   - Choose the option that best describes your organization or personal needs (e.g., career aspirations, getting certified).

3. **Agree to Terms:**
   - Review and agree to the Google Cloud free trial terms of service.
   - Click "Continue."

4. **Verify Contact Information:**
   - Enter your contact details, including a valid mobile number for verification.
   - Google will verify the mobile number before proceeding.

5. **Account Type and Payment Information:**
   - Choose your account type (most users will select "Individual").
   - Enter your credit or debit card details for payment verification (Google may perform a small transaction in some countries).

6. **Tax Information:**
   - Select the appropriate tax status based on your location.

7. **Complete Setup:**
   - After entering all the required details, click "Start my free trial."

**Card Verification:**
- Google may use different methods depending on your country to verify your card, including performing a small transaction.

**Final Step:**
- Once verified, you'll see a confirmation screen saying you're ready to start using Google Cloud.

**Tips:**
- Make the most of the free trial by exploring various services and learning during this period.


### 40. Step 03 - Creating Kubernetes Cluster with Google Kubernete Engine (GKE)
**What is a Kubernetes Cluster?**
- Kubernetes is a resource manager that primarily manages **virtual servers** (nodes).
- Virtual servers have different names depending on the cloud provider:
  - **Amazon**: EC2 (Elastic Compute Cloud)
  - **Azure**: Virtual Machines
  - **Google Cloud**: Compute Engines
  - **Kubernetes**: Nodes
- **Master nodes** are responsible for managing the worker nodes. Worker nodes do the actual work, while master nodes ensure proper resource management and availability.

**Cluster Definition:**
- A Kubernetes **cluster** consists of master nodes (management) and worker nodes (application hosting).

**Steps to Create a Kubernetes Cluster in Google Cloud (GKE):**

1. **Log into Google Cloud Console:**
   - Go to [cloud.google.com](https://cloud.google.com).
   - Click **Console**.
   - Make sure you are in your project (e.g., "My First Project").

2. **Enable Kubernetes Engine:**
   - Search for "Kubernetes" in the search bar and select **Kubernetes Engine**.
   - Click to enable **Kubernetes Engine API**.

3. **Understanding Kubernetes Clusters:**
   - Applications (workloads) are run inside Kubernetes clusters.
   - You might run applications like **REST APIs** or **web applications** in Kubernetes.
   - Additional Kubernetes features:
     - **Services** and **Ingress**: Used to expose applications to the outside world.
     - **Secrets** and **Config Maps**: Manage sensitive data like passwords and configurations.
     - **Persistent Storage**: Used when applications require shared or long-term storage.

4. **Creating a Cluster:**
   - Go to the **Clusters** section and click **Create Cluster**.
   - There are two modes:
     - **Standard Mode**: You manage all configurations.
     - **Autopilot Mode**: Google manages most configurations.
   - For the initial setup, select **GKE Standard Mode** and click **Configure**.

5. **Cluster Configuration:**
   - **Name the Cluster**: Example name could be `in28minutes-cluster`.
   - **Choose Zone**: Select a default zone like **us-central1-a** (any recommended zone works).
   - Leave the rest of the settings as default.

6. **Create the Cluster:**
   - Click **Create** to start the cluster creation process.
   - It typically takes about 5 to 10 minutes for the cluster to be created.

**Summary:**
- A Kubernetes cluster consists of nodes (worker nodes) managed by master nodes.
- Google Kubernetes Engine (GKE) simplifies cluster creation with managed services.
- You can create a Kubernetes cluster using either **Standard Mode** (manual configuration) or **Autopilot Mode** (automated by Google).


### 41. Step 04 - Review Kubernetes Cluster and Learn Few Fun Facts about Kubernetes
**Kubernetes Abbreviation (K8s):**
- Kubernetes is abbreviated as **K8s**: "K" followed by 8 letters and ending with "S."

**Kubernetes Pronunciation:**
- Correct pronunciation is **"coo-ber-nate-ees"**. Avoid pronouncing it as "cube-er-nate-ees."

**Kubernetes Logo (Helmsman):**
- The Kubernetes logo represents a **helmsman**, a person who steers a ship, symbolizing how Kubernetes directs and manages resources in cloud environments.

**Kubernetes in Different Clouds:**
- Different cloud providers have their own Kubernetes services:
  - **Azure**: AKS (Azure Kubernetes Service)
  - **Amazon**: EKS (Elastic Kubernetes Service)
  - **Google**: GKE (Google Kubernetes Engine)

**Cluster Details:**
- Upon cluster creation, you can view general information like:
  - **Number of nodes**: Example, 3 nodes in this case.
  - **Virtual CPUs**: Each node has 1 vCPU, totaling 3 vCPUs.
  - **Memory**: Total memory is **11.25 GB** (each node has 3.75 GB).

**Master and Worker Nodes:**
- The cluster consists of master and worker nodes, and you can view:
  - **Kubernetes version**: The version used in the cluster.
  - **Node Details**: CPU and memory utilization, available resources, and node locations.

**Resource Usage:**
- Each node appears to have less available memory than its total capacity. For example:
  - Out of 3.75 GB, only **2.75 GB** is available.
  - This is because **Kubernetes** reserves resources (CPU and memory) for its own processes to manage the nodes.


### 42. Step 05 - Deploy Your First Docker Container to Kubernetes Cluster

**Connecting to the Kubernetes Cluster:**
- **Cloud Shell**: Google Cloud Shell allows you to use the command line without installing additional software. It is pre-configured with tools like `kubectl`.
  - **Activate Cloud Shell**: In Google Cloud Console, click the Cloud Shell icon to launch it.
  - **Open Cloud Shell in New Window**: For convenience, open Cloud Shell in a new window by clicking the relevant icon.

- **Connect to the Cluster**: 
  - In the cluster details, click **Connect**, copy the command, and run it in Cloud Shell.
  - The command will look like:
    ```bash
    gcloud container clusters get-credentials <cluster-name> --zone <zone> --project <project-id>
    ```
  - This command connects to the cluster you created.

**`kubectl` Command-Line Tool:**
- **`kubectl`**: A command-line tool used to interact with Kubernetes clusters.
  - Common uses of `kubectl`:
    - Deploy applications
    - Scale instances
    - Update applications
    - Monitor cluster status
- Check `kubectl` version:
  ```bash
  kubectl version
  ```

**Deploying an Application:**
- **Create Deployment**: Use `kubectl` to create a deployment for a Docker image.
  - Example command to deploy a Hello World REST API:
    ```bash
    kubectl create deployment hello-world-rest-api --image=in28min/hello-world-rest-api:0.0.1-release
    ```
  - The image (`in28min/hello-world-rest-api:0.0.1-release`) is pre-built and hosted on Docker Hub.

- **Expose the Deployment**: Expose the deployment to the outside world via a load balancer.
  - Command to expose the service:
    ```bash
    kubectl expose deployment hello-world-rest-api --type=LoadBalancer --port=8080
    ```
  - This creates a service and exposes the application on port **8080** using a load balancer.

**Verify Deployment:**
- You can verify the status of your deployment using the Google Cloud Console:
  - Navigate to **Services and Ingress** to see the status.
  - Once the service is up, you’ll get an endpoint (URL) for the service.
  
- Test the application by visiting the endpoint and appending `/hello-world`:
  - Example URL: `http://<endpoint>/hello-world`
  - You should see the message **"Hello World V1"**.

### 44. Step 06 - Quick Look at Kubernetes Concepts - Pods, Replica Sets and Deployment

**Understanding What Happens When You Deploy an Application:**
- Deploying an application in Kubernetes involves several components working together. These components are responsible for managing workloads, ensuring scaling, and maintaining the desired state of your application.

**Key Concepts:**
1. **Pods:**
   - A **pod** is the smallest, most basic deployable unit in Kubernetes.
   - It represents a single instance of a running application, typically encapsulating one or more containers.

2. **Replica Set:**
   - A **replica set** ensures that the specified number of pod instances are running at all times.
   - If a pod fails, the replica set will automatically create a new one to maintain the desired state.

3. **Deployment:**
   - A **deployment** manages the lifecycle of pods and replica sets.
   - It ensures the correct number of replicas are running and handles rolling updates to ensure zero downtime when new versions of the application are deployed.

4. **Service:**
   - A **service** exposes the application to the outside world or to other services within the cluster.
   - It provides load balancing and ensures that the pods are reachable even if their underlying IP addresses change.

**Key Kubernetes Commands:**
1. **Get Events:**
   - View all events that have occurred in the cluster, including cluster creation, pod creation, and deployment status:
     ```bash
     kubectl get events
     ```

2. **Get Pods:**
   - List all pods in the cluster, showing their current status (e.g., running):
     ```bash
     kubectl get pods
     ```

3. **Get Replica Set:**
   - View details of the replica sets managing the pods:
     ```bash
     kubectl get replicaset
     ```

4. **Get Deployment:**
   - Retrieve information about the deployment managing the pods and replica sets:
     ```bash
     kubectl get deployment
     ```

5. **Get Service:**
   - View details of services, which expose applications and handle load balancing:
     ```bash
     kubectl get service
     ```

**Single Responsibility Principle in Kubernetes:**
- Each Kubernetes component has a specific responsibility:
  - **Pods**: Run the actual application.
  - **Replica Sets**: Ensure the correct number of pod replicas are running.
  - **Deployments**: Manage the lifecycle of pods and handle updates.
  - **Services**: Provide external access to the application and load balancing.

**How the Components Work Together:**
- When you run the command `kubectl create deployment`, Kubernetes:
  - Creates a **deployment**, which in turn creates a **replica set** to maintain the desired number of pods.
  - The **replica set** creates and monitors **pods**.
- When you run the command `kubectl expose deployment`, Kubernetes:
  - Creates a **service** to expose the application to the outside world (via a load balancer, for example).



### 45. Step 07 - Understanding Pods in Kubernetes
**What is a Pod?**
- A **pod** is the smallest deployable unit in Kubernetes, not the container.
- Containers always run **inside a pod**. You cannot have a standalone container in Kubernetes.

**Key Features of a Pod:**
1. **Pod as a Wrapper for Containers:**
   - A pod can contain one or more containers that share the same network and storage resources.
   - Containers in a pod communicate with each other via **localhost**.

2. **Unique IP Address:**
   - Each pod is assigned a **unique IP address**, allowing it to communicate with other pods or external services.
   
3. **Shared Resources:**
   - Containers inside a pod share the same storage volumes and network namespace.

**Important Kubernetes Commands for Pods:**
1. **Get Pod Details:**
   - To view basic details (including IP address) of all running pods:
     ```bash
     kubectl get pods -o wide
     ```

2. **Explain Pods:**
   - Get a detailed explanation of what a pod is and how it functions:
     ```bash
     kubectl explain pods
     ```

3. **Describe Pod:**
   - To get in-depth information about a specific pod, including status, labels, and node details:
     ```bash
     kubectl describe pod <pod-id>
     ```

**Pod Structure and Components:**
1. **Multiple Containers:**
   - A pod can contain multiple containers, which run on the same Kubernetes node and communicate via localhost.

2. **Labels and Selectors:**
   - **Labels** are key-value pairs attached to pods to help categorize and identify them.
   - **Selectors** are used to link pods with other Kubernetes components like **ReplicaSets** and **Services**.

3. **Annotations:**
   - **Annotations** are used to attach metadata to pods, such as build IDs, release IDs, or author information. Unlike labels, annotations are not used for selecting or organizing pods.

4. **Namespace:**
   - **Namespaces** provide a way to logically separate resources within a Kubernetes cluster.
   - For example, different environments like **Development** and **QA** can run on the same cluster, but in separate namespaces, isolating resources.
   - Pods by default are created in the **default** namespace unless otherwise specified.

5. **Pod Status:**
   - Pods can be in various states, such as **Running**, **Pending**, or **Failed**. You can check the status using the `kubectl describe pod` command.


### 47. Step 08 - Understanding ReplicaSets in Kubernetes
**What is a Replica Set?**
- A **replica set** in Kubernetes ensures a specified number of pod replicas are running at all times.
- If a pod is deleted or crashes, the replica set automatically creates a new one to maintain the desired state.

**Key Commands for Working with Replica Sets:**
1. **View Replica Sets:**
   - Check the current replica sets in the cluster:
     ```bash
     kubectl get replicaset
     ```
   - Shortcut:
     ```bash
     kubectl get rs
     ```

2. **Scale Deployment:**
   - Adjust the number of replicas for a deployment, which updates the replica set accordingly:
     ```bash
     kubectl scale deployment <deployment-name> --replicas=<desired-count>
     ```
   - Example:
     ```bash
     kubectl scale deployment hello-world-rest-api --replicas=3
     ```

3. **Delete a Pod:**
   - Delete a pod to observe how the replica set maintains the desired state by creating a new pod:
     ```bash
     kubectl delete pod <pod-id>
     ```

4. **View Events in Sorted Order:**
   - Display Kubernetes events to track changes, like pod creation, in sorted order:
     ```bash
     kubectl get events --sort-by=.metadata.creationTimestamp
     ```

**Replica Set in Action:**
- **Maintaining Desired Pod Count**:
  - For example, if a replica set is configured to have one pod and the pod is deleted, the replica set will automatically create a new pod to replace it.
  - This ensures high availability and resilience in applications.

- **Scaling Pods with a Replica Set**:
  - When scaling up, such as increasing from 1 to 3 replicas, Kubernetes will update the replica set to create additional pods to meet the new desired count.
  - This results in multiple pods running concurrently, which can be accessed for load distribution.

**Exploring Events for Replica Sets:**
- The events log shows actions taken by the replica set, such as:
  - Pod creation after deletion.
  - Scaling actions when the desired replica count changes.
  - The **kubectl get events** command provides insight into the timing and order of these events.



### 48. Step 09 - Understanding Deployment in Kubernetes

**What is a Deployment?**
- A **deployment** in Kubernetes manages updates to applications, ensuring **zero downtime** by maintaining a controlled update process.
- It allows for **rolling updates** that sequentially replace instances of the old version with the new version, preventing service interruptions.

**Updating an Application with a Deployment:**
1. **View Replica Set Details:**
   - Check the current replica sets and the image used:
     ```bash
     kubectl get rs -o wide
     ```
   
2. **Update Deployment with a New Image:**
   - Update the deployment to use a new version of the application image:
     ```bash
     kubectl set image deployment <deployment-name> <container-name>=<new-image>
     ```
   - Example:
     ```bash
     kubectl set image deployment hello-world-rest-api hello-world-rest-api=in28min/hello-world-rest-api:0.0.2.RELEASE
     ```

3. **Handling Errors During Update:**
   - If an incorrect image is specified, Kubernetes will detect the error and continue running the old version without downtime.
   - Kubernetes creates a new replica set for the failed version but keeps the previous pods active.

**Rolling Update Process:**
- **Rolling Update Strategy** (default in Kubernetes):
  - The deployment begins by creating a new replica set (e.g., V2).
  - It incrementally shifts traffic to the new version by:
    - Scaling up the new version’s replica set (V2) by adding pods.
    - Scaling down the old version’s replica set (V1) by removing pods.
  - This process continues until all pods from the old version are replaced with the new version.
  
**Example Scenario of Rolling Update:**
- Starting with 3 pods of V1:
  - **Step 1:** A new V2 replica set is created, and one V2 pod starts.
  - **Step 2:** Deployment scales V1 down to 2 pods and V2 up to 2 pods.
  - **Step 3:** Deployment repeats until V1 has zero pods, and V2 takes over fully.
- This approach ensures zero downtime during updates, as Kubernetes does not delete all V1 pods at once.

**Summary of Deployment Benefits:**
- Deployments allow for controlled and seamless updates, using **rolling updates** to minimize downtime.
- They work by managing **replica sets**, scaling them up or down as needed to maintain service availability.
- With deployments, you can update applications efficiently, test new releases, and roll back if any issues arise.



### 49. Step 10 - Quick Review of Kubernetes Concepts - Pods, Replica Sets & Deployment
**1. Pods:**
   - A **pod** is a wrapper for one or more containers, representing the smallest deployable unit in Kubernetes.
   - Each pod has its own **IP address** and contains metadata like **labels** and **annotations** to organize and identify it within the cluster.
   - Containers within a pod share resources, enabling them to communicate via `localhost`.

**2. Replica Sets:**
   - A **replica set** ensures that a specific number of pod replicas are always running.
   - If the desired count is three, the replica set will automatically recreate any deleted or crashed pod to maintain three running instances.
   - **Versioned Replica Sets**: Replica sets are usually tied to specific application versions, such as `v1` or `v2`, ensuring that the correct version is maintained across all pods.

**3. Deployments:**
   - A **deployment** manages updates and upgrades to applications without downtime.
   - It controls rolling updates and other release strategies to replace an old version (e.g., `v1`) with a new one (e.g., `v2`) seamlessly.
   - **Rolling Update** (default strategy): Incrementally replaces old instances with new ones:
      - Adds a `v2` instance, checks if it’s stable, then scales down a `v1` instance.
      - Repeats until all `v1` instances are replaced by `v2`.
   - Other strategies, like **traffic splitting** (e.g., 50% to `v1` and 50% to `v2`), allow more control during updates.

**Kubernetes Adoption and Benefits:**
- Kubernetes is highly popular and widely supported across all major cloud platforms.
- Mastering Kubernetes concepts can simplify container management and make it a powerful tool for application scaling, resilience, and seamless updates.


### 50. Step 11 - Understanding Services in Kubernetes

**What is a Service?**
- In Kubernetes, a **service** provides a stable, permanent IP address for accessing pods, enabling a consistent endpoint regardless of changes in pod instances.
- Pods are dynamic; they may restart, change IPs, or be replaced. A service ensures that these backend changes are invisible to the user.

**Why Use a Service?**
- Each pod has a unique, ephemeral IP address. As pods are created or deleted, their IPs change.
- A **service** allows users to access the application with a single, stable IP address, automatically routing traffic to the correct pods, even as they change.

**Types of Services:**
1. **Load Balancer Service:**
   - Exposes the application to the internet, providing a public IP address.
   - Automatically distributes traffic across available pods.
   - Created with:
     ```bash
     kubectl expose deployment <deployment-name> --type=LoadBalancer --port=<port-number>
     ```
   - Example:
     ```bash
     kubectl expose deployment hello-world-rest-api --type=LoadBalancer --port=8080
     ```
   - In Google Cloud, this creates a **Google Cloud Load Balancer**.

2. **ClusterIP Service:**
   - Accessible only within the Kubernetes cluster (internal use).
   - Used for internal communication between services within the cluster.
   - Does not have an external IP.

**Viewing and Managing Services:**
1. **List Services:**
   - View all services in the cluster, showing types and IPs:
     ```bash
     kubectl get services
     ```
   
2. **Google Cloud Load Balancer:**
   - For services exposed as `LoadBalancer`, Kubernetes creates a cloud provider-specific load balancer.
   - In Google Cloud, you can check the Load Balancer settings in **Network Services > Load Balancing**.

**How a Service Works:**
- When a service is created, it monitors and routes requests to all matching pods (based on labels).
- Services provide load balancing across pods and manage dynamic backend pod updates.
- **Load Balancer Services** are particularly useful for internet-facing applications, while **ClusterIP Services** are suited for internal service communication.


**Summary of Service Benefits:**
- **Stability**: Services provide a consistent access point, unaffected by backend pod changes.
- **Integration with Cloud Providers**: Kubernetes services can create cloud-specific load balancers, such as in AWS, GCP, or Azure.
- **Types**: Load Balancer (external access) and ClusterIP (internal access) are the primary types for different use cases.



### 51. Step 12 - Quick Review of GKE on Google Cloud Console
**Accessing Workloads in Kubernetes Engine:**
- In **Google Cloud Console**, go to **Kubernetes Engine > Workloads** to view all deployments.
- Select a workload (e.g., `hello-world-rest-api`) to manage it through the UI.

**Actions Available for Workloads:**
1. **Edit Deployment:**
   - Allows editing of the deployment's configuration directly in the `.yaml` file.
   - You can adjust various settings, but in-depth YAML editing will be covered later.

2. **Scale Deployment:**
   - Click **Scale** to manually adjust the number of pod instances for the deployment.

3. **Rolling Update:**
   - Update to a new release version by specifying the image (e.g., `0.0.3-release`).
   - This process is similar to the `kubectl set image` command, updating pods without downtime.

4. **Auto Scaling:**
   - Set up **auto scaling** to automatically adjust the number of instances based on load.

5. **Expose Service:**
   - Use this option to create or modify services to expose the deployment externally or within the cluster.

6. **View Deployment History:**
   - Review the **revision history** to track all updates made to the deployment, including image changes and scaling actions.

7. **Event Logs:**
   - View event logs related to the deployment, such as pod creation, scaling events, or update actions.

**Using Cloud Console vs. Command Line:**
- The **Google Cloud Console UI** provides a visual and interactive way to manage deployments.
- However, **command-line tools** like `kubectl` are cloud-neutral and offer greater flexibility for developers working across different cloud environments.



### 52. Step 13 - Understanding Kubernetes Architecture - Master Node and Nodes

**1. Master Node Components:**
1. **etcd:**
   - A **distributed database** that stores all Kubernetes cluster data.
   - Contains the **desired state** of the cluster (e.g., number of pods, deployments, services).
   - Typically, multiple replicas (3-5) of etcd are used to prevent data loss.

2. **API Server (kube-apiserver):**
   - Acts as the **interface** for all Kubernetes commands (`kubectl` and cloud console actions).
   - Processes changes to the cluster, such as creating deployments, scaling, etc.

3. **Scheduler:**
   - Responsible for **scheduling pods** on nodes based on resource availability, memory, CPU, and other criteria.
   - Decides which node a pod should be assigned to when it’s created.

4. **Controller Manager:**
   - Ensures the **desired state** of the cluster matches the actual state.
   - Manages tasks like scaling, maintaining replicas, and re-creating pods if they fail.

**2. Worker Node Components:**
1. **Kubelet (Node Agent):**
   - Monitors the node's state, manages pods, and **reports node health** to the master.
   - Ensures that the desired number of pod replicas are running on the node.

2. **Kube-proxy:**
   - Manages **networking** within the cluster, facilitating communication between pods and services.
   - Enables the connection to services across the nodes.

3. **Container Runtime:**
   - Runs the containers within pods. The most common runtime is **Docker**.
   - Kubernetes supports any **OCI (Open Container Initiative)**-compliant runtime.

**Key Questions and Answers:**
1. **Does the Master Node Run Application Containers?**
   - No, application containers (e.g., `hello-world-rest-api`) run only on worker nodes.

2. **Can Only Docker Containers Run in Kubernetes?**
   - No, Kubernetes supports any **OCI-compliant** container runtime, not just Docker.

3. **What Happens if the Master Node Fails?**
   - Applications on worker nodes continue to run without interruption.
   - Changes to applications or cluster state cannot be made until the master node is restored.

**Checking Component Health:**
- **Command to Check Master Node Component Status:**
  ```bash
  kubectl get componentstatuses
  ```
- Shows the health of core components like `etcd`, `controller-manager`, and `scheduler`.


### 53. Step 14 - Understand Google Cloud Regions and Zones

**1. Google Cloud Regions and Zones:**
   - **Regions**: Geographic locations where Google Cloud data centers are clustered. Each region is an independent location (e.g., `us-central1`, `europe-west1`).
   - **Zones**: Subdivisions within regions that provide localized fault tolerance. Each region typically has 3+ zones (e.g., `us-central1-a`, `us-central1-b`).
   - **Purpose**: Regions and zones help distribute workloads, improve reliability, and reduce failure impact by offering redundancy within and across regions.

**2. Latency Considerations:**
   - **Latency** refers to the time taken for data to travel from one point to another.
   - **Choosing Regions**: To minimize latency, it's recommended to select regions closer to end-users or clients.
   - **Cross-Zone Latency**: Within a region, latency between zones is low due to high-speed connections between Google Cloud data centers.
   - **Cross-Region Latency**: Communication between regions involves higher latency due to greater distances, so regions for interdependent services should be chosen with proximity in mind.

**3. Legal and Compliance Requirements:**
   - **Data Residency**: Certain industries or countries have regulations requiring that data remains within specific geographic locations.
   - **Choosing Regions for Compliance**: Google Cloud offers regions in various locations to help organizations comply with regional data storage laws (e.g., GDPR in the EU).
   - **Sensitive Data Handling**: Google Cloud complies with several industry standards (e.g., HIPAA, GDPR, PCI DSS) but choosing the appropriate region is crucial for legal compliance.

**4. Availability and Fault Tolerance:**
   - **High Availability**: Deploying resources across multiple zones within a region improves fault tolerance and availability.
   - **Multi-Region Deployment**: To enhance resilience against regional failures, applications can be deployed across multiple regions, providing geo-redundancy.
   - **Service-Level Agreements (SLAs)**: Google Cloud provides SLAs with uptime guarantees, which vary based on whether resources are deployed within a single zone or across multiple zones/regions.
   - **Redundancy**: Using managed services with multi-zone or multi-region configurations can offer automated failover and reduce the risk of downtime.

**Best Practices:**
   - **Select Closest Regions for Performance**: Reduce latency by placing resources in regions close to users.
   - **Consider Compliance Needs**: Ensure data residency and compliance requirements are met by choosing appropriate regions.
   - **Implement Redundancy**: Use multi-zone or multi-region setups to ensure high availability and meet SLA requirements.



### 54. Step 15 - Installing GCloud
1. **Download the Google Cloud SDK Installer:**
   - Visit the [Google Cloud SDK downloads page](https://cloud.google.com/sdk/docs/install#windows).
   - Click **Download** under the **Windows** section to download the installer.

2. **Run the Installer:**
   - Locate the downloaded file (`GoogleCloudSDKInstaller.exe`) and double-click to run it.
   - Follow the prompts in the installation wizard.

3. **Choose Installation Options:**
   - **Install Path**: Choose the directory where you want to install the Google Cloud SDK.
   - **Bundled Python**: Choose to install the bundled Python if you don’t have Python installed on your machine. Google Cloud SDK requires Python for some components.
   - **Additional Components**: Optionally, you can check the boxes to install **Google Cloud CLI**, **gcloud components**, and **kubectl** (if you want to manage Kubernetes clusters).

4. **Complete the Installation:**
   - After choosing your options, click **Install** to start the installation process.

5. **Initialize gcloud:**
   - Once installation is complete, the installer will prompt you to launch a command window to run the `gcloud init` command.
   - Alternatively, you can open a **Command Prompt** or **PowerShell** window manually and run:
     ```bash
     gcloud init
     ```

6. **Authenticate and Set Up gcloud:**
   - During the initialization process, the SDK will ask you to log in with your Google Cloud account.
   - A browser window will open. Sign in to your Google account, and grant the necessary permissions.
   - After login, you will be prompted to select a **default project**. If you already have a project, select it; otherwise, you can create a new one.

7. **Verify Installation:**
   - To confirm that `gcloud` is installed successfully, run:
     ```bash
     gcloud --version
     ```

This command will display the installed version of Google Cloud SDK and any associated components (like Python).

**Optional:**
- **Update SDK**: You can periodically update the SDK with:
  ```bash
  gcloud components update
  ```

- **Install Additional Components**: If you need extra tools (e.g., kubectl), you can install them using:
  ```bash
  gcloud components install kubectl
  ```


  ### 55. Step 16 - Installing Kubectl:
`kubectl` is the command-line tool used to interact with Kubernetes clusters. Here are several ways to install it on Windows:

#### **Method 1: Install `kubectl` via Google Cloud SDK (`gcloud`)**

If you have Google Cloud SDK (`gcloud`) installed, you can use it to install `kubectl`:

1. **Open Command Prompt or PowerShell**:
   - Launch **Command Prompt** or **PowerShell** as an administrator.

2. **Install kubectl using gcloud**:
   - Run the following command to install `kubectl`:
     ```bash
     gcloud components install kubectl
     ```

3. **Verify Installation**:
   - After the installation completes, verify the version:
     ```bash
     kubectl version --client
     ```

#### **Method 2: Install `kubectl` Using Chocolatey**

[Chocolatey](https://chocolatey.org/) is a package manager for Windows. If you have Chocolatey installed, you can easily install `kubectl`:

1. **Open Command Prompt or PowerShell**:
   - Open **Command Prompt** or **PowerShell** as an administrator.

2. **Install kubectl via Chocolatey**:
   - Run the following command:
     ```bash
     choco install kubernetes-cli
     ```

3. **Verify Installation**:
   - Check the installed version:
     ```bash
     kubectl version --client
     ```

#### **Method 3: Install `kubectl` Using Scoop**

[Scoop](https://scoop.sh/) is another package manager for Windows. You can use it to install `kubectl`:

1. **Install Scoop** (if not already installed):
   - Open **PowerShell** as administrator and run:
     ```bash
     iwr -useb get.scoop.sh | iex
     ```

2. **Install kubectl via Scoop**:
   - Run the following command:
     ```bash
     scoop install kubectl
     ```

3. **Verify Installation**:
   - Check the installed version:
     ```bash
     kubectl version --client
     ```

#### **Method 4: Manually Download kubectl Binary**

If you prefer to download the binary directly:

1. **Download kubectl Binary**:
   - Visit the official [Kubernetes release page](https://kubernetes.io/docs/tasks/tools/install-kubectl-windows/#install-kubectl-binary-with-curl-on-windows) and download the latest Windows binary (`kubectl.exe`).

2. **Move the Binary to a PATH Location**:
   - Move the downloaded `kubectl.exe` to a folder included in your system's `PATH` (e.g., `C:\Windows\System32`).

3. **Verify Installation**:
   - Open **Command Prompt** or **PowerShell** and run:
     ```bash
     kubectl version --client
     ```

#### Optional Step for All Methods:

- **Configure Autocompletion**:
   - To enable kubectl autocompletion in **PowerShell**, run the following command:
     ```bash
     kubectl completion powershell | Out-String | Invoke-Expression
     ```

- **Update kubectl**:
   - If you need to update `kubectl`, re-run the installation command based on your installation method (e.g., via `gcloud`, Chocolatey, or manually download the latest binary).


### 56. Step 17 - Understand Kubernetes Rollouts
`kubectl` rollouts are used to manage the deployment lifecycle of applications in Kubernetes, specifically to **monitor**, **manage**, **undo**, and **restart** updates to your deployments.

**Key Concepts in `kubectl` Rollouts:**

1. **Deployment Rollouts**:
   - Rollouts refer to the process of **updating a deployment** to a new version of an application.
   - Kubernetes uses **rolling updates** as the default strategy, gradually replacing old pods with new ones to ensure **zero downtime**.

2. **Managing Rollouts**:
   - You can monitor the progress of a deployment update, check the status, pause/resume updates, or rollback to a previous version if needed.

**Common `kubectl rollout` Commands:**

1. **View Rollout Status**:
   - Check the status of an ongoing deployment update. Useful to monitor the progress of a rolling update:
     ```bash
     kubectl rollout status deployment <deployment-name>
     ```
   - Example:
     ```bash
     kubectl rollout status deployment hello-world
     ```
   - This will display information on how many pods have been updated successfully.

2. **Pause a Rollout**:
   - Temporarily pause a rollout to stop further changes. This can be useful if you want to inspect the deployment before proceeding:
     ```bash
     kubectl rollout pause deployment <deployment-name>
     ```
   - Example:
     ```bash
     kubectl rollout pause deployment hello-world
     ```

3. **Resume a Paused Rollout**:
   - Resume a paused rollout to continue the deployment process:
     ```bash
     kubectl rollout resume deployment <deployment-name>
     ```
   - Example:
     ```bash
     kubectl rollout resume deployment hello-world
     ```

4. **Undo a Rollout (Rollback)**:
   - If an update causes issues, you can rollback the deployment to a previous version:
     ```bash
     kubectl rollout undo deployment <deployment-name>
     ```
   - Example:
     ```bash
     kubectl rollout undo deployment hello-world
     ```
   - **Optional**: Roll back to a specific revision:
     ```bash
     kubectl rollout undo deployment <deployment-name> --to-revision=<revision-number>
     ```

5. **View Rollout History**:
   - See the history of rollouts for a specific deployment, including revisions and change causes:
     ```bash
     kubectl rollout history deployment <deployment-name>
     ```
   - Example:
     ```bash
     kubectl rollout history deployment hello-world
     ```

6. **Restart a Deployment**:
   - Force a restart of the pods within a deployment, triggering a fresh rollout:
     ```bash
     kubectl rollout restart deployment <deployment-name>
     ```
   - Example:
     ```bash
     kubectl rollout restart deployment hello-world
     ```

**Common Use Cases:**
1. **Monitor Progress**: Ensure the rollout of a new version is proceeding as expected with `kubectl rollout status`.
2. **Pause and Inspect**: Use `kubectl rollout pause` to inspect a deployment before completing the rollout.
3. **Rollback**: If a new version has issues, you can quickly revert to a stable version with `kubectl rollout undo`.
4. **Restart Pods**: If you need to restart all pods in a deployment without changing the deployment configuration, `kubectl rollout restart` is helpful.


### 57. Step 18 - Generate Kubernetes YAML Configuration for Deployment and Service
- **Declarative Nature of Kubernetes**:  
  Kubernetes is popular for being declarative, allowing you to define the desired state in a YAML file, and Kubernetes ensures that this state is achieved and maintained.

- **Navigating to Project Directory**:  
  To begin working with the configuration, navigate to the project folder:
  ```bash
  cd <path_to_project>/Hello_World_REST_API
  ```
  Store all your configuration files in this folder.

- **Viewing Deployment Status**:  
  You can check the status of a deployment using:
  ```bash
  kubectl get deployment <deployment_name>
  ```
  Example for the "Hello World REST API" deployment:
  ```bash
  kubectl get deployment Hello_World_REST_API
  ```
  Output will include information about the number of pods that are ready, up to date, and available.

- **Viewing Deployment Configuration in YAML Format**:  
  To view the configuration in YAML format, use the `-o yaml` flag:
  ```bash
  kubectl get deployment Hello_World_REST_API -o yaml
  ```
  This will display the entire configuration, including fields like `apiVersion`, `kind`, `metadata`, and more.

- **Saving Deployment Configuration to a YAML File**:  
  To save the deployment configuration to a file:
  ```bash
  kubectl get deployment Hello_World_REST_API -o yaml > deployment.yaml
  ```

- **Saving Service Configuration to a YAML File**:  
  Similarly, to save the service configuration to a file:
  ```bash
  kubectl get svc Hello_World_REST_API -o yaml > service.yaml
  ```

- **Editing YAML Files**:  
  Use Visual Studio Code (or another editor) to open and edit these files. For example, change the number of replicas in `deployment.yaml`:
  ```yaml
  replicas: 3
  ```
  Update this value to:
  ```yaml
  replicas: 2
  ```

- **Applying Changes with YAML Files**:  
  After modifying the YAML file, apply the changes using:
  ```bash
  kubectl apply -f deployment.yaml
  ```
  This command updates the Kubernetes deployment configuration. Check the result by listing the running pods:
  ```bash
  kubectl get pods
  ```

- **Key Concepts Introduced**:
  - Kubernetes allows managing configurations declaratively using YAML files.
  - You can fetch, modify, and reapply configurations using `kubectl`.
  - YAML files for deployments and services store critical configuration data like replicas and container details.

In upcoming steps, further exploration of the elements within these YAML files will help you better understand how to manage Kubernetes resources effectively.


### 58. Step 19 - Understand and Improve Kubernetes YAML Configuration

- **Combining Service and Deployment YAML**:  
  You can simplify your configuration by merging both the deployment and service YAMLs into one file. To do this, move the service configuration into the deployment file. Use three hyphens (`---`) to separate the two configurations.
  
  Example:
  ```yaml
  ---
  apiVersion: v1
  kind: Service
  metadata:
    name: hello-world-service
    labels:
      app: Hello_World_REST_API
  spec:
    ports:
      - port: 80
        targetPort: 8080
    selector:
      app: Hello_World_REST_API
  ```

- **Cleaning Up YAML Files**:  
  Remove unnecessary elements from the YAML file for simplicity. Elements like `creationTimestamp`, `resourceVersion`, `status`, `selfLink`, `UID`, `progressDeadlineSeconds`, and `schedulerName` can be removed to focus on key configuration aspects.

  Example of a clean deployment YAML:
  ```yaml
  apiVersion: apps/v1
  kind: Deployment
  metadata:
    name: hello-world-rest-api
    labels:
      app: Hello_World_REST_API
  spec:
    replicas: 2
    selector:
      matchLabels:
        app: Hello_World_REST_API
    strategy:
      type: RollingUpdate
    template:
      metadata:
        labels:
          app: Hello_World_REST_API
      spec:
        containers:
          - name: hello-world-container
            image: hello-world-rest-api:0.0.1
            ports:
              - containerPort: 8080
  ```

- **Deleting Existing Kubernetes Resources**:  
  Before redeploying the new configuration, you should delete the existing services, deployments, and replica sets. This can be done by specifying the resource name or using labels.

  To delete the service and deployment individually:
  ```bash
  kubectl delete service hello-world-service
  kubectl delete deployment hello-world-rest-api
  ```

  Alternatively, use labels to delete all related resources:
  ```bash
  kubectl delete all -l app=Hello_World_REST_API
  ```
  This command deletes all resources (pods, services, deployments, etc.) associated with the label `app=Hello_World_REST_API`.

- **Verifying Deletion**:  
  After deleting resources, use:
  ```bash
  kubectl get all
  ```
  This ensures all relevant resources are deleted. For more details, add the `-o wide` flag to get additional information:
  ```bash
  kubectl get all -o wide
  ```


### 59. Step 20 - Using Kubernetes YAML Configuration to Create Resources
- **Verifying Resource Deletion**:  
  After deleting previous deployments, services, and pods, verify that nothing is left from the old configuration by running:
  ```bash
  kubectl get all
  ```
  This should show only system resources like the default `Kubernetes` service.

- **Applying the YAML Configuration**:  
  To recreate the deployment and services using the `deployment.yaml` file:
  ```bash
  kubectl apply -f deployment.yaml
  ```
  This will create both the `Hello World REST API` deployment and its associated service.

- **Checking Created Resources**:  
  Once the configuration is applied, check the newly created resources:
  ```bash
  kubectl get all
  ```
  You will see:
  - Pods in the `Running` status
  - The `Hello World REST API` service (without an external IP initially)
  - A deployment and a replica set

- **Monitoring Service for External IP**:  
  To monitor the assignment of an external IP for the service, use:
  ```bash
  kubectl get svc --watch
  ```
  This will show when the load balancer is up and assigns an external IP.

- **Using the `watch` Command**:  
  You can also use the `watch` command in Cloud Shell to periodically hit the service URL and check its response:
  ```bash
  watch curl <external_ip>:<port>
  ```
  This will execute the `curl` command every 2 seconds and display the response.

- **Updating the Number of Replicas**:  
  If you want to modify the configuration, such as increasing the number of replicas:
  1. Edit the `deployment.yaml` file and change the number of replicas:
     ```yaml
     replicas: 3
     ```

  2. Use the `kubectl diff` command to compare the current state in Kubernetes with the changes made in the YAML:
     ```bash
     kubectl diff -f deployment.yaml
     ```
     This will show the difference between the running configuration and the YAML file, highlighting changes like the replica count.

- **Applying the Changes**:  
  Once the differences are reviewed, apply the changes:
  ```bash
  kubectl apply -f deployment.yaml
  ```
  This will update the deployment to the new replica count. You can verify the new pods are created by running:
  ```bash
  kubectl get pods
  ```


### 60. Step 21 - Understanding Kubernetes YAML Configuration - Labels and Selectors
- **General Structure of Kubernetes Resources**:
  Both the **deployment** and **service** in a Kubernetes YAML file share a similar structure:
  - `apiVersion`: Specifies the version of the API.
  - `kind`: Defines the type of resource (e.g., Deployment, Service).
  - `metadata`: Contains metadata like the resource's name, namespace, and labels.
  - `spec`: Defines the specification of the resource, detailing its behavior and properties.

- **API Version and Kind**:
  - **Deployment** uses `extensions/v1beta1` or `apps/v1` depending on the Kubernetes version.
  - **Service** typically uses `v1`.
  - The **kind** field differentiates the resource type: `Deployment` for deploying pods and `Service` for exposing the application.

- **Metadata**:
  Metadata contains key details like:
  - `name`: The name of the deployment or service.
  - `namespace`: The Kubernetes namespace in which the resource is deployed.
  - `labels`: Labels are used to categorize and identify the resource. For example, `app: HelloWorld_REST_API`.

- **Spec (Deployment)**:
  The `spec` of a deployment defines how the pods are created and managed:
  - **Replicas**: Specifies the number of pod replicas that should be running. For example:
    ```yaml
    replicas: 3
    ```
  - **Selector**: A selector is used to match pods to the deployment using labels. Example:
    ```yaml
    selector:
      matchLabels:
        app: HelloWorld_REST_API
    ```
    This ensures that the deployment manages pods with the label `app: HelloWorld_REST_API`.
  
  - **Template**: Defines the pod's configuration, including containers, image, and policies:
    ```yaml
    template:
      metadata:
        labels:
          app: HelloWorld_REST_API
      spec:
        containers:
          - name: hello-world-container
            image: hello-world-rest-api:0.0.1
            imagePullPolicy: IfNotPresent
    ```
    - **Containers**: Defines the container(s) inside the pod. You can have multiple containers in a pod.
    - **ImagePullPolicy**: Specifies when the image should be pulled. Common options include `Always` and `IfNotPresent`.
    - **Restart Policy**: Ensures the pod restarts if it fails. By default, this is set to `Always`.

  - **Strategy**: Specifies the strategy used for updating pods during a deployment.
    - **RollingUpdate**: Updates a few instances at a time (rather than all at once) to avoid downtime.
    - **MaxSurge**: The maximum number of additional pods that can be created during an update.
    - **MaxUnavailable**: The maximum number of pods that can be unavailable during an update.

  - **Termination Grace Period**: Ensures a pod gets a graceful shutdown, giving it a chance to terminate properly:
    ```yaml
    terminationGracePeriodSeconds: 30
    ```

- **Spec (Service)**:
  The `spec` of a service defines how it exposes the deployment:
  - **Selector**: Similar to deployments, services also use a label selector to map to pods:
    ```yaml
    selector:
      app: HelloWorld_REST_API
    ```
    This means the service connects directly to any pod with this label.
  
  - **Type**: Specifies the type of service. For example:
    ```yaml
    type: LoadBalancer
    ```
    - `LoadBalancer`: Exposes the service externally using a cloud provider’s load balancer.
    - Other types include `ClusterIP`, `NodePort`, and `ExternalName`.

  - **Ports**: Defines the ports on which the service listens and the target port on the pod:
    ```yaml
    ports:
      - port: 8080
        targetPort: 8080
        prot+ocol: TCP
    ```

  - **Session Affinity**: Determines whether requests from the same client should be directed to the same pod. Useful for stateful applications but typically not needed for REST APIs:
    ```yaml
    sessionAffinity: None
    ```

#### Key Takeaways:
- **Deployment**: Manages pods and specifies the number of replicas, update strategies, and pod details like containers and restart policies.
- **Service**: Exposes pods to external traffic or other internal services and uses a selector to map to the appropriate pods.
- **Rolling Updates**: Ensure smooth updates by replacing a few pods at a time, preventing downtime.
- **Labels and Selectors**: Play a crucial role in mapping deployments and services to the correct pods.



### 61. Step 22 - Quick Fix to reduce release downtime with minReadySeconds
- **Objective**: 
  The goal is to update the deployed application from version `0.0.1` to `0.0.2` (and later `0.0.3`) while minimizing downtime during the deployment process.

- **Checking Differences in Configuration**:  
  Before applying the changes, use the `kubectl diff` command to see what will be updated:
  ```bash
  kubectl diff -f deployment.yaml
  ```
  This will show the differences, such as changing the image version from `0.0.1` to `0.0.2`.

- **Applying the Updated Deployment**:  
  To apply the new deployment configuration:
  ```bash
  kubectl apply -f deployment.yaml
  ```
  This updates the deployment to the new version, which in this case updates the container image.

- **Observing Downtime During Update**:
  When you monitor the service using `curl`, some downtime may occur due to the following reasons:
  - Old pods are terminated too quickly before new pods are ready to handle traffic.
  - As the new pods start, it takes time for them to be fully ready (e.g., connection refused).

  Command to watch the service response:
  ```bash
  watch curl <service_url>
  ```

- **Verifying Pods Status**:  
  To see the status of the pods during the deployment:
  ```bash
  kubectl get pods
  ```
  You may notice that the new pods are still starting, and some have only been running for a few seconds. This delay causes a temporary disruption in service availability.

- **Introducing `minReadySeconds` to Prevent Downtime**:
  To reduce downtime during updates, you can specify a `minReadySeconds` value in the deployment configuration:
  ```yaml
  minReadySeconds: 45
  ```
  This instructs Kubernetes to wait for 45 seconds after a pod is marked as ready before considering it available to handle traffic. This ensures that new pods have enough time to initialize before the old pods are terminated.

- **Applying the Updated Deployment with `minReadySeconds`**:  
  After adding `minReadySeconds`, apply the configuration again:
  ```bash
  kubectl apply -f deployment.yaml
  ```

- **Testing with a New Release Version**:  
  Change the image version to `0.0.3` and apply the update again:
  ```yaml
  image: hello-world-rest-api:0.0.3
  ```
  Then, apply the changes:
  ```bash
  kubectl apply -f deployment.yaml
  ```

- **Monitoring the Rollout**:
  Watch how the new pods gradually become ready without causing downtime:
  - **Old pods**: Continue serving traffic until the new pods are fully ready.
  - **New pods**: Start with a delay due to the `minReadySeconds` configuration, ensuring that they are ready before the old pods are terminated.

- **Verifying the New Pods**:  
  Check the status of the pods again:
  ```bash
  kubectl get pods
  ```
  You'll see that old pods are gradually terminated and replaced by the new version (V3), but the application remains available throughout the process with minimal downtime.


### 62. Step 23 - Understanding Replica Sets in Depth - Using Kubernetes YAML Config
- **Deleting Previous Resources**:
  Before creating a replica set, delete the previous deployment, service, and associated resources:
  ```bash
  kubectl delete all -l app=HelloWorld_REST_API
  ```
  This command removes all resources (pods, services, deployments) with the label `app=HelloWorld_REST_API`.

- **Creating a Replica Set**:
  Modify the existing deployment YAML to create a **ReplicaSet** by changing the kind from `Deployment` to `ReplicaSet`. Note that the **strategy** section is not supported in a replica set, so it should be commented out or removed:
  ```yaml
  kind: ReplicaSet
  # Remove the strategy section
  # strategy:
  #   type: RollingUpdate
  #   ...
  ```

  Apply the replica set configuration:
  ```bash
  kubectl apply -f deployment.yaml
  ```

- **Monitoring the Service**:
  Once the replica set and service are created, monitor the service using:
  ```bash
  kubectl get svc --watch
  ```
  The service may take some time to assign an external IP, depending on the cloud provider's load balancer. Once the external IP is ready, you can test the service by accessing the URL:
  ```bash
  curl http://<external_ip>:8080/HelloWorld
  ```

- **Key Features of Replica Sets**:
  A **ReplicaSet** ensures that a specified number of pods are running at any given time. However, **ReplicaSets do not handle releases or version upgrades** like deployments do. Replica sets focus solely on maintaining the desired number of pods, irrespective of their version.

- **Limitations of Replica Sets**:
  Replica sets do not handle version upgrades automatically. For example, when you update the image version in a replica set from `0.0.3` to `0.0.2`, the replica set will not create new pods for the new version automatically.

  - Changing the image version:
    ```yaml
    image: hello-world-rest-api:0.0.2
    ```
    Apply the changes:
    ```bash
    kubectl apply -f deployment.yaml
    ```
    Even after applying, you will notice that no new pods are created, and the old version (`0.0.3`) is still running:
    ```bash
    kubectl get pods
    ```

- **Forcing the Update in Replica Sets**:
  The only way to update pods in a replica set is to manually delete the old pods, forcing the replica set to create new ones:
  ```bash
  kubectl delete pod <pod_name>
  ```
  After deleting a pod, the replica set will detect the missing pod and create a new one based on the latest configuration.

- **How Deployments Handle Releases**:
  In contrast to replica sets, **deployments** manage different releases by creating a new replica set for each version. When you update the image, a deployment will:
  - Create a new replica set for the new version.
  - Roll out the new pods using a specified **release strategy** (e.g., rolling updates).
  - Ensure that the old replica set is gradually replaced by the new one.

- **Manually Managing Releases with Replica Sets**:
  If using a replica set, you must manually delete old pods to update them to the new release:
  ```bash
  kubectl delete pod <old_pod_name>
  ```
  Repeat for all old pods to update them to the new version.

- **Replica Set vs. Deployment**:
  - **ReplicaSet**: Ensures the desired number of pods are running but does not handle versioning or releases.
  - **Deployment**: Manages multiple releases and handles version upgrades by creating new replica sets with the desired release strategy.



### 63. Step 24 - Configure Multiple Kubernetes Deployments with One Service
- **Switching Back to a Deployment**:
  Before creating multiple deployments, we first revert from a ReplicaSet back to a **Deployment**:
  ```yaml
  kind: Deployment
  ```
  Apply the updated deployment configuration:
  ```bash
  kubectl apply -f deployment.yaml
  ```

- **Creating Multiple Deployments**:
  We create two separate deployments, **V1** and **V2**, each with its own version of the application:
  - **V1 Deployment** uses version `0.0.1` of the image:
    ```yaml
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: hello-world-v1
      labels:
        app: HelloWorld_REST_API
        version: V1
    spec:
      replicas: 2
      selector:
        matchLabels:
          app: HelloWorld_REST_API
          version: V1
      template:
        metadata:
          labels:
            app: HelloWorld_REST_API
            version: V1
        spec:
          containers:
            - name: hello-world-container
              image: hello-world-rest-api:0.0.1
    ```

  - **V2 Deployment** uses version `0.0.2` of the image:
    ```yaml
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: hello-world-v2
      labels:
        app: HelloWorld_REST_API
        version: V2
    spec:
      replicas: 2
      selector:
        matchLabels:
          app: HelloWorld_REST_API
          version: V2
      template:
        metadata:
          labels:
            app: HelloWorld_REST_API
            version: V2
        spec:
          containers:
            - name: hello-world-container
              image: hello-world-rest-api:0.0.2
    ```

- **Managing the Service**:
  The service remains unchanged and is used to load balance traffic between the two versions (V1 and V2) of the application:
  ```yaml
  apiVersion: v1
  kind: Service
  metadata:
    name: hello-world-rest-api
  spec:
    selector:
      app: HelloWorld_REST_API
    ports:
      - protocol: TCP
        port: 8080
        targetPort: 8080
    type: LoadBalancer
  ```

- **Deleting Existing Deployment**:
  Before applying the new deployments, delete the old deployment:
  ```bash
  kubectl delete deployment hello-world-rest-api
  ```

- **Applying the Multiple Deployments**:
  Once the configurations are set, apply the updated YAML file to create both deployments:
  ```bash
  kubectl apply -f deployment.yaml
  ```

- **Verifying the Deployments and Pods**:
  After applying the changes, verify that there are now two deployments, each with two pods, by running:
  ```bash
  kubectl get all
  ```
  You should see two deployments, two replica sets, and four pods.

- **Traffic Distribution Between V1 and V2**:
  The load balancer will distribute traffic between all the pods (V1 and V2) created by the two deployments. You can monitor this by testing the service’s external IP with `curl`:
  ```bash
  curl http://<external_ip>:8080/HelloWorld
  ```
  The responses will alternate between V1 and V2 instances.

- **Controlling Traffic Using Labels**:
  To send traffic to only **V1** or **V2**, modify the service's selector to point to the specific version:
  - To send traffic only to V1:
    ```yaml
    spec:
      selector:
        app: HelloWorld_REST_API
        version: V1
    ```
    Apply the changes:
    ```bash
    kubectl apply -f deployment.yaml
    ```
    Now, only V1 pods will handle the traffic.

  - To send traffic only to V2:
    ```yaml
    spec:
      selector:
        app: HelloWorld_REST_API
        version: V2
    ```
    Apply the changes:
    ```bash
    kubectl apply -f deployment.yaml
    ```

- **Key Takeaways**:
  - **Multiple Deployments**: You can create multiple deployments with different versions of your application and manage them simultaneously.
  - **Single Service for Multiple Deployments**: One service can be used to load balance traffic across all the pods created by multiple deployments.
  - **Label-based Traffic Management**: Labels are a powerful tool in Kubernetes, allowing you to control traffic routing, deployment strategies, and release processes by modifying selectors in the service configuration.
  - **Traffic Switching**: By simply modifying the service’s label selector, you can dynamically control which version of your application receives traffic.


### 64. Step 25 - Playing with Kubernetes Commands - Top Node and Pod
- **Retrieving Pods Across All Namespaces**:  
  You can get a list of all pods running across all namespaces using:
  ```bash
  kubectl get pods --all-namespaces
  ```
  This command will show pods from all namespaces, including the default and system namespaces like `kube-system`. For example, `kube-dns`, `kube-proxy`, and other control plane components will be listed.

- **Filtering by Labels**:  
  You can filter pods or other resources using labels. For example, to filter pods with the label `app=HelloWorld_REST_API`:
  ```bash
  kubectl get pods -l app=HelloWorld_REST_API
  ```

- **Retrieving Services Across All Namespaces**:  
  To view all services across all namespaces:
  ```bash
  kubectl get services --all-namespaces
  ```

- **Sorting Kubernetes Resources**:  
  Kubernetes allows sorting resources based on various fields. For example, to sort services by their `type`, use:
  ```bash
  kubectl get services --all-namespaces --sort-by=.spec.type
  ```
  To sort by the service's name:
  ```bash
  kubectl get services --all-namespaces --sort-by=.metadata.name
  ```
  The sorting can be applied to any field by referencing its path in the YAML structure.

- **Cluster Information**:  
  To get basic information about your cluster:
  ```bash
  kubectl cluster-info
  ```
  This provides the Kubernetes master URL, services running on the cluster, and other key information.

  For detailed diagnostic information:
  ```bash
  kubectl cluster-info dump
  ```
  This command outputs a detailed dump of all information in the cluster, useful for debugging and troubleshooting.

- **Monitoring Resource Usage**:  
  Kubernetes offers the `top` command to monitor resource usage at the node or pod level:
  - **Node resource usage**:
    ```bash
    kubectl top node
    ```
    This will show CPU and memory usage across nodes in the cluster.

  - **Pod resource usage**:
    ```bash
    kubectl top pod
    ```
    This displays CPU and memory usage for each pod in the cluster.

- **Using Shortcuts for Common Commands**:  
  Kubernetes provides shortcuts for many commands:
  - **Services**: `kubectl get svc` instead of `kubectl get services`.
  - **Events**: `kubectl get ev` for events.
  - **ReplicaSets**: `kubectl get rs` for replica sets.
  - **Namespaces**: `kubectl get ns` for namespaces.
  - **Nodes**: `kubectl get no` for nodes.
  - **Pods**: `kubectl get po` for pods.

- **Recommendation**:  
  It is suggested to avoid using shortcuts early on, as descriptive commands (like `kubectl get pods`) help solidify your understanding of Kubernetes concepts. Once you're more experienced, shortcuts can save time.


### 66. Step 27 - Quick Introduction to Microservices - CE and CC

In this step, we introduced two microservices that will be deployed to Kubernetes:

1. **Currency Exchange Microservice**: 
   - Provides the exchange rate between two currencies (e.g., 1 USD to INR).
   
2. **Currency Conversion Microservice**:
   - Uses the exchange rate from the Currency Exchange Microservice to convert a given quantity of one currency into another (e.g., converts 10 USD to INR).

#### Overview of the Microservices

- **Currency Exchange Service**:
  - Returns the value of one currency in another currency (e.g., 1 USD to INR = 60).
  - Runs on **port 8000**.
  
- **Currency Conversion Service**:
  - Calls the Currency Exchange service to retrieve the exchange rate and performs the conversion.
  - Runs on **port 8100**.
  - Uses an environment variable to locate the Currency Exchange service (`CURRENCY_EXCHANGE_SERVICE_HOST`).

#### Deployment Configuration for the Microservices

##### Currency Exchange Microservice Deployment (`deployment.yaml`):

- **Deployment and Service**:
  - The deployment is similar to what was created for the Hello World REST API.
  - Defined to run one replica (`replicas: 1`).
  
- **Container Image**:
  - The image used is `in28min/currency-exchange:0.0.1`.
  
- **Ports**:
  - Runs on **port 8000**.

- **Liveness and Readiness Probes**:
  - **Readiness Probe**: Ensures the container is ready to accept requests by checking the `/` endpoint on port 8000.
  - **Liveness Probe**: Ensures the container is running properly and restarts it if it fails multiple times.

- **Resource Requests and Limits**:
  - **Requests**: 100m of CPU and 512MB of memory allocated at startup.
  - **Limits**: Maximum CPU of 500m and 1024MB of memory allowed.

##### Currency Conversion Microservice Deployment (`deployment.yaml`):

- **Deployment and Service**:
  - The deployment has **two replicas** to handle traffic efficiently.
  
- **Container Image**:
  - The image used is `in28min/currency-conversion:0.0.1`.

- **Ports**:
  - Runs on **port 8100**.

- **Environment Variable**:
  - Configured with an environment variable to point to the Currency Exchange service’s host (`CURRENCY_EXCHANGE_SERVICE_HOST`).

- **Resource Requests and Limits**:
  - Similar to the Currency Exchange service, resource limits and requests are configured.

#### Liveness and Readiness Probes

- **Readiness Probe**:
  - Checks if the container is ready to accept traffic by sending a GET request to the root (`/`) of the service.
  - Initial delay of 60 seconds, checks every 10 seconds after that.

- **Liveness Probe**:
  - Ensures the container remains healthy and is restarted if it becomes unresponsive or deadlocked.
  - A maximum of 5 failures before restarting the container.


### 68. Step 29 - Understand Environment Variables created by Kubernetes for Services

In this step, we explored how the two microservices — **Currency Exchange** and **Currency Conversion** — communicate with each other in Kubernetes without the need for manual environment variable configuration.

#### How Kubernetes Passes Environment Variables to Pods

- **Service Environment Variables**:  
  When a service is created in Kubernetes, the system automatically provides information about the service to the pods in the form of **environment variables**. This allows pods to discover and communicate with other services running in the cluster.

- **Inspecting Environment Variables**:  
  By inspecting the logs of one of the running pods (in this case, from the **Currency Conversion** microservice), we can see that Kubernetes injects several environment variables related to service discovery:
  ```bash
  kubectl logs <pod-name>
  ```
  This command shows environment variables such as:
  - `KUBERNETES_SERVICE_HOST`: Information about the Kubernetes service.
  - `CURRENCY_EXCHANGE_SERVICE_HOST`: Automatically created by Kubernetes based on the name of the **Currency Exchange** service.
  - `CURRENCY_EXCHANGE_SERVICE_PORT`: The port associated with the **Currency Exchange** service.

- **How Service Environment Variables Are Named**:  
  The naming convention for these environment variables follows a pattern:
  - Service name in uppercase, with hyphens replaced by underscores.
  - Suffixes `_SERVICE_HOST` for the service's IP address and `_SERVICE_PORT` for the port.

  Example for the **Currency Exchange** service:
  - Service name: `currency-exchange`
  - Environment variable: `CURRENCY_EXCHANGE_SERVICE_HOST`
  - Port variable: `CURRENCY_EXCHANGE_SERVICE_PORT`

- **Automatic Service Discovery**:
  - In Kubernetes, when a service (such as **Currency Exchange**) is created, the environment variables are automatically injected into the pods of other services (such as **Currency Conversion**).
  - As a result, the **Currency Conversion** microservice can communicate with the **Currency Exchange** microservice using these variables without any manual configuration.

#### Key Observations

1. **Environment Variable Injection**:
   - Kubernetes automatically injects service information as environment variables.
   - This allows services to discover each other seamlessly in the cluster.

2. **Service Naming Conventions**:
   - Environment variables follow a specific naming convention, replacing hyphens with underscores and capitalizing the service name.
   - These variables are suffixed with `_SERVICE_HOST` for the host and `_SERVICE_PORT` for the port.

#### The Potential Problem

While this system of service discovery looks efficient and seamless, there is a potential issue:

- **Hardcoded Service Names**:  
  The environment variables rely on the **exact service name** being known ahead of time. If the service name changes, or if we want to use dynamic scaling mechanisms like service discovery outside of Kubernetes (or across multiple clusters), this hardcoded approach might create challenges.


### 69. Step 30 - Microservices and Kubernetes Service Discovery - Part 1

In the previous step, we discussed how **Currency Exchange** and **Currency Conversion** microservices communicated using environment variables injected by Kubernetes at the time of pod startup. However, this approach has a limitation: if the **Currency Exchange** service starts **after** the **Currency Conversion** service, the environment variable is not updated, causing potential communication failures.

#### Problem Recap:
- If the **Currency Exchange** service is not available when **Currency Conversion** starts, Kubernetes will not inject the correct environment variables, leading to communication failure.
  
#### Solution: Dynamic Service URL via DNS
Instead of relying on environment variables injected at startup, we can use Kubernetes' **internal DNS** to dynamically resolve service names, ensuring that even if services start later, they can still communicate.

#### Configuring a Static URL for Service Communication

1. **Open the Deployment YAML for the Currency Conversion Service**:
   The solution is to configure a static URL for the **Currency Exchange** service inside the **Currency Conversion** service.

   Example: Open the `deployment.yaml` file of the **Currency Conversion** service.

2. **Uncomment the Environment Variable Configuration**:
   The `CURRENCY_EXCHANGE_SERVICE_HOST` environment variable, which was previously commented out, needs to be uncommented. This variable will hold the service name as a URL.

   ```yaml
   env:
     - name: CURRENCY_EXCHANGE_SERVICE_HOST
       value: "http://currencyexchange"
   ```

   - The `currencyexchange` part of the URL is the **name of the service** defined in Kubernetes for the **Currency Exchange** microservice.
   - The URL uses the HTTP protocol and points to the internal service name (`currencyexchange`) within the cluster.

3. **Apply the Changes**:
   Now, apply the updated deployment file for the **Currency Conversion** service:
   ```bash
   kubectl apply -f ../02-currency-conversion-service-basic/deployment.yaml
   ```

   This will redeploy the **Currency Conversion** service with the updated configuration.

4. **Check the Logs**:
   After the new pod is launched, verify that the environment variable has been correctly updated by inspecting the logs:
   ```bash
   kubectl logs <currency-conversion-pod>
   ```
   Search for `CURRENCY_EXCHANGE_SERVICE_HOST` in the logs to verify that it now points to the correct URL (`http://currencyexchange`).

5. **Testing the Communication**:
   You can test the communication between the services by sending a request to the **Currency Conversion** service:
   ```bash
   curl http://<currency-conversion-service-external-ip>:8100/currency-conversion/from/EUR/to/INR/quantity/10
   ```

   If everything is set up correctly, the request should succeed, showing that the **Currency Conversion** service can communicate with the **Currency Exchange** service using the internal DNS URL (`currencyexchange`).

#### Why is This Better Than Environment Variables?
Using a static URL like `http://currencyexchange` within the Kubernetes cluster provides several benefits:
- **Dynamic Discovery**: The service name (`currencyexchange`) is resolved by Kubernetes' internal DNS. Even if the **Currency Exchange** service starts later or restarts, the DNS resolution will always point to the correct service.
- **Resilience**: This approach does not rely on environment variables injected at startup, which may become outdated if the services are restarted or scaled up later.
- **Load Balancing**: Kubernetes automatically load balances requests across all instances of the service. So, if you have multiple replicas of the **Currency Exchange** service, the traffic will be evenly distributed.


### 70. Step 31 - Microservices and Kubernetes Service Discovery - Part 2 DNS

In the previous step, we successfully set up communication between the **Currency Conversion** and **Currency Exchange** microservices using a static URL (`http://currencyexchange`). This URL dynamically resolves through Kubernetes' internal DNS and provides automatic service discovery and load balancing.

#### Key Concepts

1. **Service Discovery**:
   - Kubernetes automatically registers services with its internal DNS when they are started.
   - Each service can be accessed using a DNS name (in this case, `currencyexchange`), which resolves to the appropriate service's IP address.
   - This eliminates the need for hardcoded IP addresses or environment variables at application startup.

2. **Load Balancing**:
   - Kubernetes also provides built-in load balancing for services.
   - When multiple instances (pods) of a service are running, Kubernetes distributes incoming requests across all available instances.

#### Experiment: Adjusting Replicas

To demonstrate how Kubernetes handles service discovery and load balancing, we changed the number of replicas for each service:

- **Currency Conversion Service**: Reduced to 1 replica.
- **Currency Exchange Service**: Increased to 2 replicas.

##### Steps:

1. **Update the Replicas in Deployment YAMLs**:
   - **Currency Conversion**:
     ```yaml
     replicas: 1
     ```
   - **Currency Exchange**:
     ```yaml
     replicas: 2
     ```

2. **Apply the Changes**:
   - Apply the changes for the **Currency Conversion** service:
     ```bash
     kubectl apply -f ../02-currency-conversion-service-basic/deployment.yaml
     ```
   - Apply the changes for the **Currency Exchange** service:
     ```bash
     kubectl apply -f deployment.yaml
     ```

3. **Verify the Changes**:
   - Run the following command to check the status of the pods:
     ```bash
     kubectl get pods
     ```
   - You should see one pod for **Currency Conversion** and two pods for **Currency Exchange**.

#### Load Balancing in Action

Once the **Currency Exchange** service had two replicas running, we tested if the requests were being distributed between the two instances:

- **Browser Test**:  
  By refreshing the browser multiple times, the responses from the **Currency Conversion** service showed that the requests were being load-balanced between the two **Currency Exchange** pods. Initially, responses came from only one instance, but after the second pod became ready, responses alternated between both instances.

#### Benefits of Kubernetes Service Discovery and Load Balancing

1. **Dynamic Service Discovery**:  
   Kubernetes' internal DNS ensures that as soon as a service starts, other services can resolve its address. This eliminates the need for hardcoded configurations and ensures that the microservices can find each other regardless of their startup sequence.

2. **Automatic Load Balancing**:  
   Kubernetes automatically balances traffic across multiple instances of a service, distributing requests evenly among available pods. This improves scalability and resilience, as the system can handle traffic more efficiently.


### 71. Step 32 - Microservices Centralized Configuration with Kubernetes ConfigMaps

In this step, we explored how **Kubernetes ConfigMaps** provide centralized configuration management for microservices. ConfigMaps allow you to store configuration settings in a centralized and environment-specific manner, which can then be injected into your microservices without hardcoding values directly in your application.

#### Problem with Hardcoding Configuration:
Each microservice (e.g., **Currency Conversion** and **Currency Exchange**) may run in multiple environments and instances, and maintaining configuration separately for each environment can become complex and error-prone. Centralized configuration management solves this issue by storing configuration in **ConfigMaps**.

#### Kubernetes ConfigMap for Currency Conversion Service

1. **Creating a ConfigMap**:
   - A **ConfigMap** was already created to store the `CURRENCY_EXCHANGE_SERVICE_HOST` value.
   - You can define a ConfigMap using a YAML file. Here's an example from `00-configmap-currency-conversion.yaml`:
     ```yaml
     apiVersion: v1
     kind: ConfigMap
     metadata:
       name: currency-conversion-configmap
     data:
       CURRENCY_EXCHANGE_SERVICE_HOST: "http://currencyexchange"
     ```
   - This ConfigMap stores the URL of the **Currency Exchange** service.

2. **Applying the ConfigMap**:
   - To apply the ConfigMap, run the following command:
     ```bash
     kubectl apply -f 00-configmap-currency-conversion.yaml
     ```

3. **Verifying the ConfigMap**:
   - After applying the ConfigMap, verify that it has been created using:
     ```bash
     kubectl get configmaps
     ```
   - To view the details of the ConfigMap:
     ```bash
     kubectl describe configmap currency-conversion-configmap
     ```

#### Injecting ConfigMap Values into the Deployment

1. **Modifying the Deployment**:
   - Instead of hardcoding the `CURRENCY_EXCHANGE_SERVICE_HOST` value in the **Currency Conversion** service, we can inject the value from the ConfigMap.
   - Modify the `deployment.yaml` to reference the ConfigMap:
     ```yaml
     env:
       - name: CURRENCY_EXCHANGE_SERVICE_HOST
         valueFrom:
           configMapKeyRef:
             name: currency-conversion-configmap
             key: CURRENCY_EXCHANGE_SERVICE_HOST
     ```
   - This configuration tells Kubernetes to fetch the value for `CURRENCY_EXCHANGE_SERVICE_HOST` from the ConfigMap.

2. **Applying the Deployment**:
   - Apply the updated deployment:
     ```bash
     kubectl apply -f deployment.yaml
     ```

3. **Verifying the Logs**:
   - Once the new pod starts, you can check the logs to verify that the correct value from the ConfigMap is being used:
     ```bash
     kubectl logs <currency-conversion-pod>
     ```
   - Look for the `CURRENCY_EXCHANGE_SERVICE_HOST` value in the logs to confirm it is correctly pointing to `http://currencyexchange`.

#### Testing with Incorrect ConfigMap Values

1. **Simulating an Error**:
   - To test the behavior when an incorrect value is configured, update the ConfigMap with an invalid host (`currencyexchange1`):
     ```yaml
     CURRENCY_EXCHANGE_SERVICE_HOST: "http://currencyexchange1"
     ```
   - Apply the updated ConfigMap:
     ```bash
     kubectl apply -f 00-configmap-currency-conversion.yaml
     ```

2. **Re-deploying the Service**:
   - Delete the current pod of the **Currency Conversion** service to force a new pod to start with the updated configuration:
     ```bash
     kubectl delete pod <currency-conversion-pod>
     ```

3. **Verifying the Error**:
   - Check the logs of the new pod and confirm that it picks up the incorrect value (`currencyexchange1`) from the ConfigMap, leading to a failure when attempting to connect to the **Currency Exchange** service.

4. **Fixing the ConfigMap**:
   - Correct the value in the ConfigMap and apply it again:
     ```bash
     CURRENCY_EXCHANGE_SERVICE_HOST: "http://currencyexchange"
     kubectl apply -f 00-configmap-currency-conversion.yaml
     ```
   - After the ConfigMap is updated, delete the pod again to restart it with the correct value. The service should start working correctly.

#### Key Benefits of Using ConfigMaps

1. **Centralized Configuration**:  
   ConfigMaps allow you to store application configuration centrally, making it easier to manage configurations for multiple environments without hardcoding values.

2. **Separation of Configuration and Code**:  
   By using ConfigMaps, you keep your application configuration separate from your code, allowing more flexibility when deploying across different environments.

3. **Dynamic Updates**:  
   ConfigMaps can be updated dynamically, and the new values can be applied without redeploying the entire application, improving deployment efficiency.

4. **Built-in Kubernetes Support**:  
   Kubernetes provides built-in support for ConfigMaps, making it easy to integrate configuration management into your microservices architecture without external tools.


### 72. Step 33 - Simplify Microservices with Kubernetes Ingress - Part 1
In this step, we addressed the challenge of managing load balancers for multiple microservices and introduced **Ingress** as a solution for centralized routing and load balancing in Kubernetes.

#### The Problem with Multiple Load Balancers

- When deploying microservices, each service can be assigned a **load balancer** to handle traffic. However, load balancers are expensive, especially in cloud environments, because they are highly available and resilient.
- In our example, we had two microservices (**Currency Exchange** and **Currency Conversion**), each with its own load balancer.
- For larger systems with many microservices, maintaining a separate load balancer for each service is not practical due to cost and complexity.

#### Solution: Centralized Routing with Kubernetes Ingress

**Ingress** in Kubernetes allows you to centralize and manage routing for multiple microservices through a single point of entry, reducing the need for multiple load balancers.

1. **Switching to NodePort Services**:
   - To avoid the expense of multiple load balancers, we switch the services to **NodePort**. This exposes a port on each node where the service runs, making the service accessible via the node's IP and the assigned port.

   - In the `deployment.yaml` for each microservice, we update the service type to `NodePort`:
     ```yaml
     spec:
       type: NodePort
     ```
   - Apply the changes to both services:
     ```bash
     kubectl apply -f ../02-currency-conversion-service-basic/deployment.yaml
     kubectl apply -f ../01-currency-exchange-service-basic/deployment.yaml
     ```

2. **Verifying NodePort Configuration**:
   - After applying the changes, verify that the services are now using `NodePort`:
     ```bash
     kubectl get services
     ```
   - You should see that both **Currency Exchange** and **Currency Conversion** services are now using the `NodePort` type, and there will be no external IPs assigned (as with load balancers).

#### Configuring Ingress

The **Ingress** resource in Kubernetes allows us to route traffic to different services based on the URL path. This way, we can have a single entry point (load balancer) that directs traffic to the appropriate service.

1. **Ingress YAML Configuration**:
   The `ingress.yaml` file defines routing rules for the services. For example:
   ```yaml
   apiVersion: networking.k8s.io/v1
   kind: Ingress
   metadata:
     name: gateway-ingress
   spec:
     rules:
     - http:
         paths:
         - path: /currency-exchange/*
           pathType: Prefix
           backend:
             service:
               name: currency-exchange
               port:
                 number: 8000
         - path: /currency-conversion/*
           pathType: Prefix
           backend:
             service:
               name: currency-conversion
               port:
                 number: 8100
   ```
   - Requests with paths starting with `/currency-exchange/` are routed to the **Currency Exchange** service.
   - Requests with paths starting with `/currency-conversion/` are routed to the **Currency Conversion** service.

2. **Applying the Ingress**:
   - Apply the `ingress.yaml` file to create the Ingress resource:
     ```bash
     kubectl apply -f ingress.yaml
     ```

3. **Ingress Creation Time**:
   - The creation of the Ingress can take time (typically 12-15 minutes) because it involves provisioning a single load balancer and configuring routing rules for the services.
   - During this time, the Ingress controller sets up the load balancer and ensures that all routing configurations are applied correctly.

#### Benefits of Using Ingress

1. **Centralized Routing**:
   - Instead of creating a load balancer for each microservice, Ingress allows you to manage routing for multiple services through a single load balancer.
   - This significantly reduces costs and simplifies management.

2. **Dynamic Routing**:
   - Ingress can route traffic based on the URL path, meaning you can send requests to different services using a single domain or IP address.
   - For example, `/currency-exchange/` routes to the **Currency Exchange** service, and `/currency-conversion/` routes to the **Currency Conversion** service.

3. **Cost Efficiency**:
   - By reducing the number of load balancers, Ingress helps lower cloud costs, especially when managing a large number of microservices.

4. **Load Balancing**:
   - Ingress not only routes traffic but also provides load balancing across multiple instances of the same service, ensuring high availability and scalability.

### 73. Step 34 - Simplify Microservices with Kubernetes Ingress - Part 2

In this step, we confirmed the successful creation of the **Ingress** and tested its functionality. The **Ingress** resource now acts as a centralized load balancer, efficiently routing traffic to different microservices based on URL paths.

#### Key Points

1. **Ingress Creation and Load Balancer**:
   - After waiting for about 15 minutes, the **Ingress** was successfully created.
   - The **Ingress** created a **single load balancer**, which can handle traffic for multiple microservices, solving the issue of needing a separate load balancer for each microservice.
   - The **load balancer** is shown with a public IP, which acts as the frontend for all incoming requests.

2. **Ingress Rules**:
   - The **Ingress** is configured with specific routing rules. For example:
     - URLs starting with `/currency-exchange/` are routed to the **Currency Exchange** service.
     - URLs starting with `/currency-conversion/` are routed to the **Currency Conversion** service.
   - These routing rules allow multiple microservices to be managed under a single load balancer.

3. **Accessing the Microservices via Ingress**:
   - By using the IP of the load balancer, we tested both services:
     - **Currency Exchange Service**:
       ```bash
       http://34.102.149.151/currency-exchange/from/USD/to/INR
       ```
     - **Currency Conversion Service**:
       ```bash
       http://34.102.149.151/currency-conversion/from/USD/to/INR/quantity/10
       ```
   - Both URLs returned the correct responses, demonstrating that the traffic is correctly routed to the respective services via the **Ingress**.

4. **Ingress as a Centralized Entry Point**:
   - The **Ingress** acts as a **gateway** for all incoming traffic. Instead of each microservice having its own load balancer, the **Ingress** uses a single load balancer that can route traffic based on URL paths to different backend services.
   - This significantly reduces costs and improves manageability for systems with multiple microservices.

5. **Ingress Backend Configuration**:
   - In the cloud load balancer settings, the **frontend** is the public IP (e.g., `34.102.149.151`), and the **backends** are the individual microservices (**Currency Exchange** and **Currency Conversion**), each with its own port.
   - If you provide an invalid path (e.g., `/invalid-path`), the request is routed to a default backend that returns a `404` error, indicating that the requested resource is not found.

#### How to Add More Microservices

One of the key advantages of using **Ingress** is that it simplifies adding new microservices. To add a new microservice:
1. Create the **Deployment** and **Service** for the new microservice.
2. Update the **Ingress** configuration by adding a new path rule for the new microservice.
3. Apply the changes. The new microservice will immediately be available via the same ingress load balancer without needing additional infrastructure.

#### Summary

With **Ingress**:
- We have a **single load balancer** managing multiple microservices.
- Traffic is efficiently routed based on URL paths.
- You can easily scale this setup by adding new microservices and routing rules without creating new load balancers.
- This centralized routing solution reduces complexity and costs, especially for systems with numerous microservices.

## Section 4: Getting started with Infrastructure as Code
### 75. Getting Started with Infrastructure as Code

- **Problem with manual provisioning:**
  - Manually provisioning servers and installing software is error-prone and time-consuming.
  - In microservices architecture, different microservices can be built using various technologies (e.g., Java, Python, JavaScript).
  - Managing numerous services and environments manually is complex and slows down development.

- **Solution: Infrastructure as Code (IaC):**
  - Treats infrastructure the same way as application code.
  - Infrastructure is created from code and configuration.
  - Reduces errors and improves recovery time.
  - Ensures consistency across multiple environments.

- **Key components of IaC:**
  - **Server provisioning:** Tools like Terraform and AWS CloudFormation provision servers based on templates.
  - **Configuration management:** Tools like Ansible, Chef, and Puppet manage software installation and configuration on servers.

- **Popular Tools:**
  - **Provisioning tools:** Terraform, AWS CloudFormation, Packer (for creating templates), and AWS AMI.
  - **Configuration management tools:** Ansible, Chef, Puppet.

- **Automation benefits:**
  - Automating infrastructure reduces routine tasks, allowing teams to focus on more valuable work.
  - IaC helps ensure that environments remain consistent across multiple microservices and instances.

- **Application deployment:**
  - Tools like Jenkins and Azure DevOps are used to deploy applications onto provisioned servers as part of continuous deployment pipelines.

- **Course tools:**
  - The course will use Terraform for server provisioning and Ansible for configuration management.



## Section 5: Devops Infrastructure Provisioning with Terraform on AWS

### 76. Getting Started with Terraform

- **Terraform as an IaC tool:**
  - Terraform is used for **Infrastructure as Code (IaC)**, automating the provisioning of cloud infrastructure.
  - Common uses include provisioning virtual servers, load balancers, storage, and databases.
  - While Terraform can handle basic server configuration, it’s best practice to leave detailed configuration to tools like Ansible, Chef, or Puppet.

- **Requirements for using Terraform:**
  1. **AWS Account:**
     - Necessary for creating cloud resources like EC2 instances, S3 buckets, IAM users, etc.
  2. **IDE (Integrated Development Environment):**
     - **Visual Studio Code** is recommended for writing and managing Terraform configurations.
  3. **Terraform installation:**
     - Terraform can be installed on various operating systems like macOS, Windows, and Linux.
     - Methods of installation include:
       - **macOS:** Use Homebrew or manual installation by downloading a zip file and setting the system path.
       - **Windows:** Use Chocolatey Package Manager or manually download and configure Terraform.

- **Steps to install Terraform:**
  - Search for the official installation guide for Terraform.
  - Follow the instructions to install based on your operating system.
  - After installation, verify by running the following command to check the version:
    ```bash
    terraform --version
    ```

- **Version recommendation:**
  - It is recommended to use the latest version of Terraform for compatibility and course relevance.

#### General commands and code snippets:
- **Check Terraform version:**
  ```bash
  terraform --version
  ```

