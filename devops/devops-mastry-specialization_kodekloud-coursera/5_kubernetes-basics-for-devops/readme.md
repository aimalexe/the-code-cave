# Kubernetes Basics for DevOps  

**Instructor:** [Mumshad Mannambeth](https://www.coursera.org/instructor/~93669146) (via KodeKloud)  

This beginner-level [course](https://www.coursera.org/learn/kubernetes-basics-for-devops) introduces [Kubernetes](https://kubernetes.io/), a powerful tool for managing containerized applications. Kubernetes helps automate deployment, scaling, and management, making it essential for DevOps professionals.  

Throughout this [course](https://www.coursera.org/learn/kubernetes-basics-for-devops), you'll learn key concepts like:  
- Understanding Kubernetes and its role in DevOps  
- Deploying applications using Kubernetes  
- Managing scaling, networking, and storage  
- Writing Kubernetes configuration files  
- Hands-on exercises to build real-world skills  

This [course](https://www.coursera.org/learn/kubernetes-basics-for-devops) includes step-by-step lessons, demos, and hands-on coding exercises to ensure you gain practical experience with Kubernetes.

### Contents
- [Kubernetes Basics for DevOps](#kubernetes-basics-for-devops)
    - [Contents](#contents)
  - [Module 1. Kubernetes Overview](#module-1-kubernetes-overview)
    - [1.1 Introduction](#11-introduction)
    - [1.2 About This Course](#12-about-this-course)
      - [**What is this course about?**](#what-is-this-course-about)
      - [**Who is this course for?**](#who-is-this-course-for)
      - [**What will you learn?**](#what-will-you-learn)
      - [**What makes this course unique?**](#what-makes-this-course-unique)
      - [**Course Outline**](#course-outline)
        - [**1. Introduction**](#1-introduction)
        - [**2. Kubernetes Overview**](#2-kubernetes-overview)
        - [**3. Kubernetes Concepts**](#3-kubernetes-concepts)
        - [**4. YAML Basics**](#4-yaml-basics)
        - [**5. Kubernetes Concepts – PODs, ReplicaSets, Deployments**](#5-kubernetes-concepts--pods-replicasets-deployments)
        - [**6. Networking in Kubernetes**](#6-networking-in-kubernetes)
        - [**7. Kubernetes Services**](#7-kubernetes-services)
        - [**8. Microservices Architecture**](#8-microservices-architecture)
        - [**9. Conclusion**](#9-conclusion)
    - [1.3 Containers Overview](#13-containers-overview)
      - [What is Docker and Why Do We Need It?](#what-is-docker-and-why-do-we-need-it)
      - [What Are Containers?](#what-are-containers)
      - [How Docker Works?](#how-docker-works)
      - [Virtual Machines vs Containers](#virtual-machines-vs-containers)
      - [How to Use Docker?](#how-to-use-docker)
      - [Images vs Containers](#images-vs-containers)
      - [How Docker Helps DevOps](#how-docker-helps-devops)
    - [1.4 Container Orchestration](#14-container-orchestration)
      - [What is Kubernetes?](#what-is-kubernetes)
      - [Other Container Orchestration Tools](#other-container-orchestration-tools)
      - [Benefits of Container Orchestration with Kubernetes](#benefits-of-container-orchestration-with-kubernetes)
    - [1.5 Kubernetes Architecture](#15-kubernetes-architecture)
      - [What is a Node?](#what-is-a-node)
      - [What is a Kubernetes Cluster?](#what-is-a-kubernetes-cluster)
      - [What is a Master Node?](#what-is-a-master-node)
        - [1. **API Server**](#1-api-server)
        - [2. **etcd (Key-Value Store)**](#2-etcd-key-value-store)
        - [3. **Scheduler**](#3-scheduler)
        - [4. **Controllers**](#4-controllers)
        - [5. **Container Runtime**](#5-container-runtime)
        - [6. **Kubelet**](#6-kubelet)
      - [How Components Are Distributed Across Nodes](#how-components-are-distributed-across-nodes)
      - [Introduction to kubectl (Kubernetes Command-Line Tool)](#introduction-to-kubectl-kubernetes-command-line-tool)
    - [1.6 Hands-on Labs: Familiarize with the Lab Environment](#16-hands-on-labs-familiarize-with-the-lab-environment)
    - [1.7 Graded Assignment](#17-graded-assignment)
  - [Module 2. Kubernetes Concepts](#module-2-kubernetes-concepts)
    - [2.1 PODs](#21-pods)
      - [What is a Pod?](#what-is-a-pod)
      - [How Pods Work in Kubernetes](#how-pods-work-in-kubernetes)
      - [Multi-Container Pods](#multi-container-pods)
      - [How Pods Simplify Deployment](#how-pods-simplify-deployment)
      - [Creating a Pod with kubectl](#creating-a-pod-with-kubectl)
      - [Viewing Pods](#viewing-pods)
      - [Accessing a Pod](#accessing-a-pod)
    - [2.2 Demo - Minikube Setup](#22-demo---minikube-setup)
      - [Installing kubectl](#installing-kubectl)
      - [Installing Minikube](#installing-minikube)
      - [Starting Minikube](#starting-minikube)
      - [Deploying an Application](#deploying-an-application)
      - [Cleaning Up](#cleaning-up)
    - [2.3 Demo - PODs](#23-demo---pods)
      - [Deploying a Pod in Minikube](#deploying-a-pod-in-minikube)
      - [Checking Pod Status](#checking-pod-status)
      - [Getting Detailed Pod Information](#getting-detailed-pod-information)
      - [Checking Pod with Node Information](#checking-pod-with-node-information)
    - [2.4 A Note About Creating Pods](#24-a-note-about-creating-pods)
      - [Creating a Pod Using `kubectl run`](#creating-a-pod-using-kubectl-run)
      - [Creating a Deployment Instead](#creating-a-deployment-instead)
      - [Useful Resources](#useful-resources)
    - [2.5 Graded Assignment](#25-graded-assignment)
      - [**Question 1**](#question-1)
      - [**Question 2**](#question-2)
      - [**Question 3**](#question-3)
  - [Module 3. Kubernetes Concepts - PODs, ReplicaSets, Deployments](#module-3-kubernetes-concepts---pods-replicasets-deployments)
    - [3.1 PODs with YAML](#31-pods-with-yaml)
      - [Creating a Pod Using YAML](#creating-a-pod-using-yaml)
      - [Explanation of the YAML Structure](#explanation-of-the-yaml-structure)
      - [Creating a Pod from YAML](#creating-a-pod-from-yaml)
    - [3.2 Demo - YAML - Tips](#32-demo---yaml---tips)
      - [Installing VS Code](#installing-vs-code)
      - [Installing YAML Extension for Kubernetes](#installing-yaml-extension-for-kubernetes)
      - [Configuring VS Code for Kubernetes YAML](#configuring-vs-code-for-kubernetes-yaml)
      - [Creating a Kubernetes YAML File in VS Code](#creating-a-kubernetes-yaml-file-in-vs-code)
      - [Using the Outline Feature](#using-the-outline-feature)
    - [3.3 Hands-on Labs: PODs with YAML](#33-hands-on-labs-pods-with-yaml)
    - [3.4 Replication Controllers and ReplicaSets](#34-replication-controllers-and-replicasets)
      - [What is a Replication Controller?](#what-is-a-replication-controller)
      - [Replication Controller vs ReplicaSet](#replication-controller-vs-replicaset)
      - [Creating a Replication Controller](#creating-a-replication-controller)
      - [Creating a ReplicaSet](#creating-a-replicaset)
      - [Scaling ReplicaSets](#scaling-replicasets)
      - [Managing ReplicaSets](#managing-replicasets)
    - [3.5 Hands-on Labs: Replica Sets](#35-hands-on-labs-replica-sets)
    - [3.6 Deployments](#36-deployments)
      - [Why Use Deployments?](#why-use-deployments)
      - [Relationship Between Deployments, ReplicaSets, and Pods](#relationship-between-deployments-replicasets-and-pods)
      - [Creating a Deployment](#creating-a-deployment)
      - [Key Components](#key-components)
      - [Creating and Viewing a Deployment](#creating-and-viewing-a-deployment)
    - [3.7 Hands-on Labs: Deployments](#37-hands-on-labs-deployments)
    - [3.8 Deployments - Update and Rollback](#38-deployments---update-and-rollback)
      - [Viewing Deployment Rollouts](#viewing-deployment-rollouts)
      - [Deployment Strategies](#deployment-strategies)
      - [Updating a Deployment](#updating-a-deployment)
      - [Viewing Deployment Details](#viewing-deployment-details)
      - [Rolling Back a Deployment](#rolling-back-a-deployment)
      - [Checking ReplicaSets](#checking-replicasets)
      - [Summary of Commands](#summary-of-commands)
    - [3.9 Lab: Update and Rollback](#39-lab-update-and-rollback)
    - [3.10 Graded Assignment](#310-graded-assignment)
  - [Module 4. Networking in Kubernetes](#module-4-networking-in-kubernetes)
    - [4.1 Basics of Networking in Kubernetes](#41-basics-of-networking-in-kubernetes)
      - [**Networking in a Single-Node Cluster**](#networking-in-a-single-node-cluster)
      - [**Networking in a Multi-Node Cluster**](#networking-in-a-multi-node-cluster)
      - [**Kubernetes Networking Requirements**](#kubernetes-networking-requirements)
      - [**Kubernetes Networking Solutions**](#kubernetes-networking-solutions)
      - [**How Kubernetes Networking Works with CNI Plugins**](#how-kubernetes-networking-works-with-cni-plugins)
    - [4.2 Graded Assignment](#42-graded-assignment)
  - [Module 5. Services](#module-5-services)
    - [5.1 Services - NodePort](#51-services---nodeport)
      - [Why Do We Need Services?](#why-do-we-need-services)
      - [Types of Services in Kubernetes](#types-of-services-in-kubernetes)
      - [Understanding NodePort Services](#understanding-nodeport-services)
      - [Creating a NodePort Service](#creating-a-nodeport-service)
      - [Deploying and Accessing the Service](#deploying-and-accessing-the-service)
      - [NodePort with Multiple Pods (Load Balancing)](#nodeport-with-multiple-pods-load-balancing)
      - [NodePort Across Multiple Nodes](#nodeport-across-multiple-nodes)
    - [5.2 Services - ClusterIP](#52-services---clusterip)
      - [Why Do We Need ClusterIP?](#why-do-we-need-clusterip)
      - [How ClusterIP Works](#how-clusterip-works)
      - [Creating a ClusterIP Service](#creating-a-clusterip-service)
      - [Deploying and Accessing the ClusterIP Service](#deploying-and-accessing-the-clusterip-service)
      - [ClusterIP with Multiple Pods](#clusterip-with-multiple-pods)
    - [5.3 Services - Load Balancer](#53-services---load-balancer)
      - [Why Use a Load Balancer?](#why-use-a-load-balancer)
      - [How Load Balancer Works](#how-load-balancer-works)
      - [Creating a LoadBalancer Service](#creating-a-loadbalancer-service)
      - [Deploying and Accessing the LoadBalancer Service](#deploying-and-accessing-the-loadbalancer-service)
      - [What Happens in Unsupported Environments?](#what-happens-in-unsupported-environments)
    - [5.4 Hands-on Labs: Services](#54-hands-on-labs-services)
    - [5.5 Graded Assignment](#55-graded-assignment)
    - [Kubernetes Quiz](#kubernetes-quiz)
  - [Module 6. Microservices Architecture](#module-6-microservices-architecture)
    - [6.1 Microservices Architecture](#61-microservices-architecture)
      - [Application Components](#application-components)
      - [Running the Application Using Docker](#running-the-application-using-docker)
        - [Running Individual Containers](#running-individual-containers)
      - [Establishing Communication Between Services](#establishing-communication-between-services)
        - [Linking Containers (Deprecated)](#linking-containers-deprecated)
      - [Modern Approach: Using Docker Networks](#modern-approach-using-docker-networks)
    - [6.2 Demo - Deploying Voting App on Kubernetes](#62-demo---deploying-voting-app-on-kubernetes)
      - [**Step 1: Set Up the Project Structure**](#step-1-set-up-the-project-structure)
      - [**Step 2: Create Pod Definitions**](#step-2-create-pod-definitions)
      - [**Step 3: Create Services to Expose Pods**](#step-3-create-services-to-expose-pods)
      - [**Step 4: Deploy Pods and Services on Kubernetes**](#step-4-deploy-pods-and-services-on-kubernetes)
        - [**Check Existing Resources**](#check-existing-resources)
        - [**Deploy Components One by One**](#deploy-components-one-by-one)
        - [**Verify Deployment**](#verify-deployment)
      - [**Step 5: Access the Application**](#step-5-access-the-application)
        - [**Find Minikube’s IP Address**](#find-minikubes-ip-address)
        - [**Test in Web Browser**](#test-in-web-browser)
        - [**Cast a Vote**](#cast-a-vote)
      - [**Step 6: Cleanup**](#step-6-cleanup)
    - [6.3 Demo - Deploying Voting App on Kubernetes with Deployments](#63-demo---deploying-voting-app-on-kubernetes-with-deployments)
      - [**Step 1: Replace Pods with Deployments**](#step-1-replace-pods-with-deployments)
      - [**Step 2: Create Services for Communication**](#step-2-create-services-for-communication)
      - [**Step 3: Deploy Deployments and Services**](#step-3-deploy-deployments-and-services)
        - [**Verify Existing Resources**](#verify-existing-resources)
        - [**Deploy Components One by One**](#deploy-components-one-by-one-1)
        - [**Verify Deployment Status**](#verify-deployment-status)
      - [**Step 4: Access the Application**](#step-4-access-the-application)
        - [**Find Minikube’s IP Address**](#find-minikubes-ip-address-1)
        - [**Test in Web Browser**](#test-in-web-browser-1)
        - [**Cast a Vote**](#cast-a-vote-1)
      - [**Step 5: Scale the Application**](#step-5-scale-the-application)
        - [**Scale Voting App to 3 Replicas**](#scale-voting-app-to-3-replicas)
        - [**Verify Scaling**](#verify-scaling)
        - [**Test Load Balancing**](#test-load-balancing)
      - [**Step 6: Cleanup**](#step-6-cleanup-1)
    - [6.4 A Note on Previous Demo](#64-a-note-on-previous-demo)
  - [Module 7. Conclusion](#module-7-conclusion)
    - [7.1 Conclusion](#71-conclusion)
    - [**What We Covered**](#what-we-covered)
    - [7.2 **Next Steps**](#72-next-steps)
    - [7.3 **References**](#73-references)
      - [**Installation Guides**](#installation-guides)
      - [**Tutorials \& Guides**](#tutorials--guides)
    - [7.4  **Course Resource**](#74--course-resource)
  - [Certificate of Completion](#certificate-of-completion)

---

## Module 1. Kubernetes Overview
### 1.1 Introduction
- **Kubernetes is the standard for hosting production-grade applications.**  
  - Demand for Kubernetes engineers is growing, making it a great time to learn.  
  - Many beginners struggle due to a lack of foundational knowledge and access to proper infrastructure.  

- **This course focuses on making Kubernetes easy to understand.**  
  - Starts with container basics before diving into Kubernetes.  
  - Uses illustrations and fun analogies to simplify complex concepts.  
  - Includes demos that show step-by-step implementations.  

- **Hands-on labs for real practice.**  
  - No need for a powerful system or cloud access—practice is provided in a live Kubernetes environment.  
  - Labs are interactive, requiring you to figure out tasks instead of just copying and pasting commands.  
  - Instant feedback, hints, and solutions are available if you get stuck.  
  - Exclusive Slack community for discussions and support.  

- **CNCF-certified Kubernetes training partner.**  
  - Recognized by the [Cloud Native Computing Foundation (CNCF)](https://www.cncf.io/).  
  - 30-day money-back guarantee if you're not satisfied.  

This course is designed to make learning Kubernetes easy and practical! 🚀

### 1.2 About This Course
#### **What is this course about?**  
- This is a **beginner-friendly** course that introduces Kubernetes, an open-source system for managing containerized applications.  
- It covers essential questions like:  
  - What is Kubernetes, and how does it work?  
  - How does Kubernetes help with application management and deployment?  
  - Why is Kubernetes a key tool in DevOps and cloud-native technologies?  
- Kubernetes is widely used in modern IT and software development, making this course valuable for career growth.  

#### **Who is this course for?**  
- **Beginners** in cloud computing and container management.  
- **Developers & System Administrators** looking to deploy applications efficiently.  
- **IT Professionals** interested in DevOps and automation.  
- No prior Kubernetes experience is needed, but basic **Linux and Docker knowledge** is helpful.  

#### **What will you learn?**  
By the end of the course, you will:  
✅ Understand **Kubernetes architecture** and core principles.  
✅ Deploy, manage, and scale applications using Kubernetes.  
✅ Perform **basic troubleshooting** of Kubernetes issues.  
✅ Use the **Kubernetes dashboard** for application management.  

#### **What makes this course unique?**  
- **Hands-on labs** with real-world scenarios.  
- Practical exercises to **apply what you learn** instead of just watching videos.  
- No need for a high-end system or cloud subscription.  

#### **Course Outline**  
##### **1. Introduction**  
- Overview of Kubernetes  
- The Kubernetes Trilogy  
- Course resources & community support  

##### **2. Kubernetes Overview**  
- Basics of containers  
- What is container orchestration?  
- Kubernetes architecture  
- Hands-on lab environment setup  

##### **3. Kubernetes Concepts**  
- Understanding **Pods**  
- Demo: Creating and managing Pods  

##### **4. YAML Basics**  
- Introduction to YAML  
- Hands-on labs for YAML configurations  

##### **5. Kubernetes Concepts – PODs, ReplicaSets, Deployments**  
- Creating **Pods using YAML**  
- Replication Controllers & ReplicaSets  
- Deployments: Updates and Rollbacks  
- Hands-on labs  

##### **6. Networking in Kubernetes**  
- Basics of **Kubernetes networking**  

##### **7. Kubernetes Services**  
- NodePort, ClusterIP, and Load Balancer Services  
- Hands-on demo  

##### **8. Microservices Architecture**  
- Deploying a **microservices-based voting app**  
- Hands-on demo  

##### **9. Conclusion**  
- Recap and course feedback  

This course ensures a **step-by-step** learning approach, making Kubernetes concepts easy to understand with practical application! 🚀


### 1.3 Containers Overview  

Kubernetes (also called **K8s**) was developed by **Google** based on their experience running **containers** in production. It is now [**open-source**](https://github.com/kubernetes/kubernetes) and one of the most popular **container orchestration tools** used to manage, scale, and deploy containerized applications. Before understanding Kubernetes, we need to first understand **containers** and **orchestration**.  

#### What is Docker and Why Do We Need It?  

Before [Docker](../4_docker-basics-for-devops/readme.md), deploying applications was complex due to several issues:  

- **OS Compatibility Issues** – Different application components (e.g., web server, database, caching system) may not be compatible with the same OS version, leading to a **compatibility nightmare** (matrix from hell).  
- **Dependency Conflicts** – Some services required one version of a library, while others required another version, causing conflicts.  
- **Difficult Setup for Developers** – New developers had to manually install dependencies, following long setup instructions.  
- **Different Environments (Dev, Test, Production)** – Code worked on a developer’s machine but failed in production due to environment differences.  

Docker solves these issues by running each application component in a separate **container** with its own **dependencies and libraries**. Developers don’t need to worry about OS compatibility—just install **Docker** and run containers with a single command:  

```sh
docker run <image-name>
```

Containers ensure the **same behavior across all environments** (development, testing, production).  

#### What Are Containers?  

Containers are **lightweight, isolated environments** that run applications with their own **processes, services, networking, and file system**. Unlike **virtual machines (VMs)**, containers **share the OS kernel** with the host machine, making them **faster and more efficient**.  

Containers are not new—technologies like **LXC, LXD** existed before Docker.  

#### How Docker Works?  

Docker containers share the underlying OS kernel, making them more **lightweight** than a VM.  

- If the host OS is **Ubuntu**, Docker can run **Fedora, Debian, or CentOS** containers (all Linux-based).  
- **Windows containers** require a **Windows host**—Docker cannot run a Windows container on a Linux OS.  

#### Virtual Machines vs Containers  

| Feature            | Virtual Machines (VMs)     | Docker Containers      |
|--------------------|---------------------------|-------------------------|
| **OS Requirement** | Each VM has its own OS     | All containers share the same OS kernel |
| **Resource Usage** | High (each VM includes an OS) | Low (only app + dependencies) |
| **Startup Time**   | Slow (minutes)            | Fast (seconds)          |
| **Size**          | Large (GBs)                | Small (MBs)             |
| **Isolation**      | Full isolation (strong security) | Less isolation (shared OS kernel) |

Docker is not meant to replace VMs—it is designed for **lightweight application deployment**, whereas VMs provide full **OS-level isolation**.  

#### How to Use Docker?  

Docker provides **pre-built images** for common applications (web servers, databases, etc.), which can be found on **Docker Hub**.  

Example commands to run services:  

```sh
docker run ansible
docker run mongo
docker run redis
docker run nodejs
```

Running **multiple instances** is easy: just start multiple containers and add a **load balancer**. If a container **fails**, simply restart a new one.  

#### Images vs Containers  

- **Image:** A **template** for creating a container (like a VM template).  
- **Container:** A **running instance** of an image, with its own processes and environment.  

#### How Docker Helps DevOps  

Traditionally, **developers wrote code** and gave it to **Ops teams** to deploy, leading to issues due to **environment differences**.  

With Docker:  
- Developers define their application in a **Dockerfile** (like a guide).  
- This **image runs identically** in all environments (no setup headaches).  
- Ops teams **just deploy the Docker image**—no more configuration struggles!  


### 1.4 Container Orchestration  
Now that we have our application packaged into a **Docker container**, the next step is to run it in **production**. But this comes with several challenges:  

- What if our application depends on **multiple containers** (e.g., databases, messaging services, backend APIs)?  
- How do we **scale up** when user demand increases and **scale down** when it decreases?  
- How do we ensure **high availability** in case of hardware failures?  

To handle these challenges, we need an **underlying platform** that manages container deployment, networking, and scaling. This process of **automatically deploying and managing containers** is called **container orchestration**.  

#### What is Kubernetes?  

Kubernetes is a **container orchestration tool** that automates the deployment, scaling, and management of containerized applications. It ensures that:  

- Containers are connected to each other properly.  
- Applications scale **up or down** based on demand.  
- Failures do not take down the entire application.  
- Workloads are distributed efficiently across available resources.  

#### Other Container Orchestration Tools  

While Kubernetes is the most popular, there are other container orchestration technologies:  

- [**Docker Swarm**](https://docs.docker.com/engine/swarm/) – Easy to set up but lacks advanced features.  
- [**Apache Mesos**](https://mesos.apache.org/) – Powerful but complex to configure.  
- [**Kubernetes**](https://kubernetes.io/) – The most widely used, highly customizable, and supported on **GCP, Azure, AWS, and private clouds**. 

#### Benefits of Container Orchestration with Kubernetes  

- **High Availability** – If one container or node fails, other instances keep running.  
- **Load Balancing** – Traffic is distributed across multiple containers for optimal performance.  
- **Auto-Scaling** – Kubernetes can **increase or decrease** the number of containers based on traffic.  
- **Cluster Scaling** – If resources are low, Kubernetes can **add or remove nodes** without downtime.  
- **Declarative Configurations** – Applications can be managed through **YAML configuration files**, making deployments automated and repeatable.  

Kubernetes is designed to manage **hundreds or even thousands of containers** across multiple nodes in a **clustered environment**.  


### 1.5 Kubernetes Architecture  
#### What is a Node?  

A **node** is a machine (physical or virtual) where Kubernetes is installed. It is also called a **worker node**, as it is responsible for running application containers. Previously, nodes were called **minions**, so you may see this term in some places.  

If a **node fails**, the applications running on it will also go down. To prevent this, Kubernetes uses **multiple nodes grouped together into a cluster**. This ensures:  

- **High Availability** – If one node fails, others keep the application running.  
- **Load Sharing** – Workload is distributed across multiple nodes for efficiency.  

#### What is a Kubernetes Cluster?  

A **cluster** is a set of nodes working together. It allows applications to be distributed and ensures reliability. But who manages the cluster and its components?  

#### What is a Master Node?  

A **master node** is responsible for managing the Kubernetes cluster. It watches over worker nodes, assigns workloads, and monitors the system.  

When you install Kubernetes, you install the following [components](https://kubernetes.io/docs/concepts/architecture/):  

##### 1. **API Server**  
- The **front end** of Kubernetes that receives all commands.  
- Users, CLI tools, and management interfaces interact with Kubernetes through the API server.  

##### 2. **etcd (Key-Value Store)**  
- A **distributed database** that stores all Kubernetes cluster data.  
- Ensures **consistency** across multiple master nodes.  
- Implements **locks** to prevent conflicts between masters.  

##### 3. **Scheduler**  
- Assigns **containers** to nodes based on availability and resource requirements.  

##### 4. **Controllers**  
- The **brains of Kubernetes** that monitor the system and take corrective actions.  
- Detect failures and restart containers automatically.  

##### 5. **Container Runtime**  
- Runs the containers inside Kubernetes.  
- Docker is the most commonly used runtime, but alternatives like [**CRI-O**](https://cri-o.io/) and [**rkt**](https://www.redhat.com/en/topics/containers/what-is-rkt) are available.  

##### 6. **Kubelet**  
- Runs on each **worker node**.  
- Ensures containers are running and reports back to the master.  

#### How Components Are Distributed Across Nodes  

Kubernetes consists of **master nodes** and **worker nodes**:  

- **Master Node:**  
  - Runs **API Server, etcd, Scheduler, and Controllers**.  
  - Manages the cluster.  

- **Worker Node (Minion):**  
  - Runs **Kubelet** (agent) and **Container Runtime (Docker, CRI-O, etc.)**.  
  - Hosts and runs application containers.  

The **worker nodes communicate with the master** to get work assignments and report their status.  

#### Introduction to kubectl (Kubernetes Command-Line Tool)  

The **kubectl** (kubernetes controller) tool is used to interact with a Kubernetes cluster. Some basic commands include:  

- **Deploy an application**  
  ```sh
  kubectl run <app-name> --image=<image-name>
  ```
  
- **Get cluster information**  
  ```sh
  kubectl cluster-info
  ```

- **List all nodes in the cluster**  
  ```sh
  kubectl get nodes
  ```

These commands help in **deploying applications, checking cluster status, and managing nodes**. More commands will be covered in later sections.  

### 1.6 Hands-on Labs: Familiarize with the Lab Environment
Use the link provided to access the lab and delve into the hands-on practice of the topic you just learned. [Lab 1.6](https://kodekloud.com/pages/free-labs/kubernetes/familiarize-lab-stable)

### 1.7 Graded Assignment 
1. **Question 1**  
**Which of the following are common components of a Kubernetes Cluster?**  
✅ **Master node**  
✅ **API Server**  
✅ **Worker node**  
❌ Docker Engine (Docker is a container runtime, but not a direct Kubernetes component)  

2. **Question 2**  
**What happens when you run the command 'kubectl delete pod my-pod' and the pod 'my-pod' is part of a deployment?**  
✅ **The pod 'my-pod' is deleted and a new pod is created to replace it.**  
   - Deployments manage Pods using **ReplicaSets**, so Kubernetes automatically creates a new Pod to maintain the desired state.  

3. **Question 3**  
**If a Kubernetes Pod is in the 'Pending' state, what does this indicate?**  
✅ **The Pod is being scheduled onto a node.**  
   - A Pod is pending when Kubernetes has accepted the workload, but it has not yet been assigned to a worker node (usually due to insufficient resources or scheduling delays).  

4. **Question 4**  
**What is the best practice for managing sensitive data such as passwords, tokens, and keys in a Kubernetes environment?**  
✅ **Use Kubernetes Secrets to manage them.**  
   - Kubernetes **Secrets** allow secure storage and access control for sensitive information.  

5. **Question 5**  
**Given a YAML configuration file named 'nginx.yaml' for a deployment of an nginx server, what is the command to create this deployment in Kubernetes?**  
✅ **kubectl create -f nginx.yaml**  
   - The **`-f`** flag specifies the filename containing the resource definition.  

6. **Question 6**  
**Which command do you use to apply a Kubernetes Deployment configuration file?**  
✅ **kubectl apply -f deployment.yaml**  
   - `kubectl apply` is used for updating and creating resources declaratively using configuration files.  

7. **Question 7**  
**What is the purpose of a Kubernetes Pod?**  
✅ **To group related containers and their shared resources.**  
   - A Pod is the smallest deployable unit in Kubernetes, containing one or more containers that share networking and storage.  

8. **Question 8**  
**Which of the following are valid Kubernetes resources?**  
✅ **ReplicaSet**  
✅ **Namespace**  
✅ **Pod**  
✅ **Deployment**  
✅ **Service**  
❌ **Container** (Containers run inside Pods but are not Kubernetes resources)  
❌ **Cluster** (A cluster is a group of nodes, not a resource)  



## Module 2. Kubernetes Concepts
### 2.1 PODs  
#### What is a Pod?  

A **Pod** is the smallest deployable unit in Kubernetes. It is an abstraction over containers and **encapsulates one or more containers** to run an application. Kubernetes does not run containers directly but instead wraps them inside Pods.  

Before deploying a Pod, we assume:  
- The **application is already built** into a Docker image and stored in a repository (e.g., Docker Hub).  
- The **Kubernetes cluster is up and running** (single or multi-node setup).  

#### How Pods Work in Kubernetes  

- **Single Pod with One Container**  
  - A **Pod typically runs one container** inside it.  
  - If user demand increases, we **create new Pods**, not add more containers inside an existing Pod.  
  - Each Pod has its **own IP address** and runs in **isolation** from other Pods.  

- **Scaling Applications with Pods**  
  - If more users access the app, we **create additional Pods**.  
  - If a node lacks capacity, Kubernetes **adds new Pods on a different node**.  

#### Multi-Container Pods  

- Pods **can have multiple containers**, but this is used only for **special cases**.  
- Example:  
  - A **web app container** and a **helper container** (e.g., for background processing).  
  - Containers in the same Pod **share storage, networking, and lifecycle**.  
  - They communicate **via localhost** since they are in the same network space.  

#### How Pods Simplify Deployment  

Before Kubernetes, when using just **Docker**, we had to:  
- Manually manage **networking** between containers.  
- Set up **shared storage** manually.  
- Track which containers belong together and restart them if needed.  

With **Kubernetes Pods**, all of this is handled automatically. Kubernetes ensures:  
- Containers inside a Pod **start and stop together**.  
- They share **storage and networking** by default.  
- Pods are **self-contained** and portable across environments.  

#### Creating a Pod with kubectl  

To create a Pod running an **nginx** container:  

```sh
kubectl run my-nginx --image=nginx
```

- The `kubectl run` command creates a Pod and deploys an **nginx container** inside it.  
- Kubernetes pulls the image from **Docker Hub** unless specified otherwise.  

#### Viewing Pods  

To check the list of Pods:  

```sh
kubectl get pods
```

- The Pod initially appears in `ContainerCreating` state.  
- Once fully started, it moves to `Running` state.  

#### Accessing a Pod  

- By default, a Pod is only accessible **within the cluster**.  
- To expose it externally, **networking and services** must be configured (covered in later lessons).  


### 2.2 Demo - Minikube Setup  
#### Installing kubectl  

Before installing **Minikube**, we need to install **kubectl**, which is the command-line tool for managing Kubernetes clusters.  

1. Download the latest **kubectl** binary:  
   ```sh
   curl -LO "https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/linux/amd64/kubectl"
   ```
2. Make it executable:  
   ```sh
   chmod +x kubectl
   ```
3. Move it to a system path directory:  
   ```sh
   sudo mv kubectl /usr/local/bin/
   ```
4. Verify the installation:  
   ```sh
   kubectl version --client
   ```

#### Installing Minikube  

Before installing **Minikube**, ensure **virtualization is enabled**:  

- On Linux:  
  ```sh
  grep -E --color 'vmx|svm' /proc/cpuinfo
  ```
  - If no output appears, enable virtualization in your **BIOS settings**.  

- On Windows/Mac, check documentation for specific commands to verify virtualization.  

Next, install **VirtualBox** (recommended hypervisor):  

```sh
sudo apt-get update
sudo apt-get install -y virtualbox
```

Download and install **Minikube**:  

1. Download Minikube:  
   ```sh
   curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
   ```
2. Make it executable:  
   ```sh
   chmod +x minikube-linux-amd64
   ```
3. Move it to a system path directory:  
   ```sh
   sudo mv minikube-linux-amd64 /usr/local/bin/minikube
   ```

#### Starting Minikube  

1. Start Minikube using VirtualBox as the driver:  
   ```sh
   minikube start --driver=virtualbox
   ```
   - Minikube will **download an ISO image** and set up a **single-node Kubernetes cluster** in a VirtualBox VM.  

2. Verify Minikube is running:  
   ```sh
   minikube status
   ```
   - If everything is correct, Minikube should report that the **control plane, kubelet, and API server** are running.  

3. Check Kubernetes node status:  
   ```sh
   kubectl get nodes
   ```
   - This should show one node named **minikube** in the **Ready** state.  

#### Deploying an Application  

To test the cluster, deploy a simple app:  

1. Create a deployment:  
   ```sh
   kubectl create deployment hello-minikube --image=k8s.gcr.io/echoserver:1.4
   ```
2. Verify the deployment:  
   ```sh
   kubectl get deployments
   ```
   - You should see the **hello-minikube** deployment running.  

3. Expose the deployment as a service:  
   ```sh
   kubectl expose deployment hello-minikube --type=NodePort --port=8080
   ```
4. Get the service URL:  
   ```sh
   minikube service hello-minikube --url
   ```
   - Copy and paste this URL into a browser to verify that the application is running.  

#### Cleaning Up  

To delete the deployment and service:  

```sh
kubectl delete service hello-minikube
kubectl delete deployment hello-minikube
```

To stop and delete the Minikube cluster:  

```sh
minikube stop
minikube delete
```

Your Minikube setup is now complete, and Kubernetes is ready for further exploration! 🚀

### 2.3 Demo - PODs  
#### Deploying a Pod in Minikube  

A **Pod** is the smallest unit in Kubernetes. In this demo, we will deploy an **nginx** pod in a **Minikube cluster** using `kubectl`.  

To create a pod:  
```sh
kubectl run nginx --image=nginx
```
- `nginx` → Name of the pod  
- `--image=nginx` → Specifies the Docker image (by default from **Docker Hub**)  

You can also specify a **different image registry** using the full URL:  
```sh
kubectl run nginx --image=myregistry.com/custom-nginx:latest
```

#### Checking Pod Status  

After creating the pod, verify its status:  
```sh
kubectl get pods
```
This command displays:  
- **Pod Name** (nginx)  
- **Status** (Running, Pending, or Error)  
- **Ready** (Indicates if the container inside is ready)  
- **Restarts** (Shows if the pod has restarted)  
- **Age** (How long the pod has been running)  

#### Getting Detailed Pod Information  

To get more details about the pod:  
```sh
kubectl describe pod nginx
```
This provides:  
- **Pod labels**  
- **Start time**  
- **Node assignment** (Which node the pod is running on)  
- **Pod IP address**  
- **Container details** (image used, status, ports, etc.)  
- **Event logs** (e.g., image pull, container creation, startup events)  

#### Checking Pod with Node Information  

Use the `-o wide` option for more details:  
```sh
kubectl get pods -o wide
```
This shows:  
- **Node where the pod is running**  
- **Pod’s internal IP address**  

Each pod gets an **internal IP address** within the Kubernetes cluster, but external access requires **services** (covered in later sections).  

### 2.4 A Note About Creating Pods  
#### Creating a Pod Using `kubectl run`  

To create a pod from the command line:  
```sh
kubectl run nginx --image=nginx
```
- This command **creates a pod** with an `nginx` container.  
- Starting from **Kubernetes 1.18**, `kubectl run` **creates a pod** by default (previously, it created a deployment).  

#### Creating a Deployment Instead  

If you want to create a **deployment**, use:  
```sh
kubectl create deployment nginx --image=nginx
```
- A **deployment** ensures automatic scaling, self-healing, and rolling updates.  

#### Useful Resources  

- **Kubernetes Concepts** → [Kubernetes Documentation](https://kubernetes.io/docs/concepts/)  
- **Pod Overview** → [Pod Documentation](https://kubernetes.io/docs/concepts/workloads/pods/pod-overview/)  

### 2.5 Graded Assignment
#### **Question 1**  
**The smallest unit you can create in the Kubernetes object model is:**  
✅ **POD**  
- A **Pod** is the smallest deployable unit in Kubernetes. It can contain one or more containers.  

#### **Question 2**  
**A Pod can only have one container in it**  
✅ **False**  
- A Pod **can have multiple containers**, but they typically serve different purposes (e.g., a main app and a helper container).  

#### **Question 3**  
**What is the right approach to scaling an application?**  
✅ **Deploy additional Pods**  
- In Kubernetes, **scaling is achieved by increasing the number of Pods**, not by adding more containers to an existing Pod.

---

## Module 3. Kubernetes Concepts - PODs, ReplicaSets, Deployments  
### 3.1 PODs with YAML  

A **Kubernetes YAML file** is used to define and create objects such as **Pods, Deployments, Services, and more**. Every Kubernetes YAML definition file consists of **four required fields**:  

**apiVersion** – Defines the Kubernetes API version to be used.  
- For **Pods**, use `v1`.  
- Other objects like **Deployments** may use `apps/v1`.  

**kind** – Specifies the type of object being created.  
- For **Pods**, set this to `Pod`.  
- Other options include `Deployment`, `Service`, etc.  

**metadata** – Stores information about the object, such as:  
- **name** – The name of the object.  
- **labels** – Key-value pairs used to categorize and filter objects.  

**spec** – Contains configuration details for the object.  
- For **Pods**, this includes the **containers** that should run inside.  

#### Creating a Pod Using YAML  

Example YAML file for a **Pod named "myapp-pod" running an Nginx container**  

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: myapp-pod
  labels:
    app: myapp
spec:
  containers:
    - name: myapp-container
      image: nginx
```

#### Explanation of the YAML Structure  

`apiVersion: v1` → Uses the **v1** API version for Pods.  
`kind: Pod` → Defines this as a **Pod** object.  
`metadata:` → Stores information like:  
- `name: myapp-pod` → Pod name.  
- `labels:` → Labels help group and filter Pods (e.g., `app: myapp`).  

`spec:` → Specifies what the Pod should contain:  
- `containers:` → A list of containers in the Pod.  
- `- name: myapp-container` → Name of the container inside the Pod.  
- `image: nginx` → Uses the **nginx** Docker image.  

#### Creating a Pod from YAML  

To create the Pod, use  

```sh
kubectl create -f pod-definition.yml
```

To check if the Pod is running  

```sh
kubectl get pods
```

For detailed information about the Pod  

```sh
kubectl describe pod myapp-pod
```

### 3.2 Demo - YAML - Tips  
Using **VIM** or other basic text editors to create Kubernetes **YAML files** can be difficult, especially for long or complex configurations. YAML is **strict about indentation and structure**, making errors common. To simplify YAML development, using an **Integrated Development Environment (IDE)** with YAML validation and Kubernetes support is recommended.  

Several IDEs support YAML development:  
- **JetBrains IntelliJ IDEA / PyCharm**  
- **Atom**  
- **Eclipse / NetBeans**  
- **Microsoft Visual Studio Code (VS Code)**  

VS Code is recommended because:  
- It is **free and cross-platform** (Windows, macOS, Linux).  
- It has **built-in YAML support** and **Kubernetes validation** via extensions.  

#### Installing VS Code  

1. Go to [VS Code Official Website](https://code.visualstudio.com/)  
2. Download the **appropriate installer** for your OS (e.g., `.deb` for Ubuntu).  
3. Install it using your system’s package manager or command line.  
4. Launch **VS Code** after installation.  

#### Installing YAML Extension for Kubernetes  

1. Open **VS Code**  
2. Go to the **Extensions** panel (Ctrl + Shift + X)  
3. Search for **YAML**  
4. Install the extension **"YAML by Red Hat"**  
5. Ensure it is enabled  

#### Configuring VS Code for Kubernetes YAML  

By default, the **YAML extension** only provides basic YAML validation. To enable **Kubernetes support**:  

1. Go to **Extensions**  
2. Click the **gear icon** next to the YAML extension  
3. Select **Extension Settings**  
4. Scroll down to **YAML Schemas**  
5. Click **Edit in settings.json**  
6. Add the following configuration:  

```json
"yaml.schemas": {
    "kubernetes": "*.yaml"
}
```
or
```json
"yaml.schemas": {
    "kubernetes": ["*-k8s.yaml", "*-k8s.yml", "kubernetes/*.yaml", "k8s/*.yaml"]
}
```
7. Restart **VS Code** for changes to take effect  

This ensures all `.yaml` files in VS Code are validated using **Kubernetes schemas**.  

#### Creating a Kubernetes YAML File in VS Code  

1. Open VS Code  
2. Create a new file: `nginx-k8s.yaml`  
3. Start with the **first root-level property**:  

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: nginx-pod
  labels:
    app: nginx
spec:
  containers:
    - name: nginx-container
      image: nginx
```

4. The **YAML extension** will:  
   - Suggest **autocompletion** (e.g., typing `ki` will suggest `kind`).  
   - Validate indentation and structure.  
   - Highlight **syntax errors** (e.g., incorrect indentation).  

#### Using the Outline Feature  

The **Outline View** in VS Code displays the YAML structure in a **tree format**, showing:  
- Root-level elements (`apiVersion`, `kind`, `metadata`, `spec`)  
- Sub-elements (`labels`, `containers`)  

This makes it **easier to debug YAML formatting issues**.  

### 3.3 Hands-on Labs: PODs with YAML
Use the link provided to access the lab and delve into the hands-on practice of the topic you just learned. [Lab 3.3](https://kodekloud.com/pages/free-labs/kubernetes/pods-stable)

### 3.4 Replication Controllers and ReplicaSets  
#### What is a Replication Controller?  

A **Replication Controller** ensures that a specific number of **Pod replicas** are running at all times. It provides:  

- **High Availability** – If a Pod crashes, a new one is created automatically.  
- **Load Balancing** – Multiple replicas distribute traffic efficiently.  
- **Scalability** – More Pods can be added when demand increases.  

Even if running a **single Pod**, a Replication Controller helps by recreating it if it fails.  

#### Replication Controller vs ReplicaSet  

- **Replication Controller** is the **older technology**, now replaced by **ReplicaSet**.  
- **ReplicaSet** is the recommended way to manage **replicas**.  
- Both work similarly, but **ReplicaSet supports selectors for managing existing Pods**.  

#### Creating a Replication Controller  

Replication Controllers are defined using YAML.  

```yaml
apiVersion: v1
kind: ReplicationController
metadata:
  name: myapp-rc
  labels:
    app: myapp
    type: frontend
spec:
  replicas: 3
  template:
    metadata:
      name: myapp-pod
      labels:
        app: myapp
    spec:
      containers:
        - name: myapp-container
          image: nginx
```

- **replicas:** Specifies the number of Pods to maintain.  
- **template:** Defines the **Pod** that will be replicated.  
- The **Pod template** is the same as a regular Pod definition.  

To create it:  
```sh
kubectl create -f rc-definition-k8s.yaml
```

To check the Replication Controller:  
```sh
kubectl get replicationcontroller
```

To check the Pods created:  
```sh
kubectl get pods
```

#### Creating a ReplicaSet  

ReplicaSet is defined similarly, but uses **apps/v1** instead of **v1**.  

```yaml
apiVersion: apps/v1
kind: ReplicaSet
metadata:
  name: myapp-replicaset
  labels:
    app: myapp
spec:
  replicas: 3
  selector:
    matchLabels:
      app: myapp
  template:
    metadata:
      labels:
        app: myapp
    spec:
      containers:
        - name: myapp-container
          image: nginx
```

- **selector:** Helps ReplicaSet identify which Pods it manages.  
- **matchLabels:** Matches Pods based on labels (e.g., `app: myapp`).  
- If Pods **already exist** with matching labels, the ReplicaSet **adopts them** instead of creating new ones.  

To create it:  
```sh
kubectl create -f replicaset-definition-k8s.yaml
```

To check the ReplicaSet:  
```sh
kubectl get replicaset
```

#### Scaling ReplicaSets  

To scale manually, update the YAML file:  
```yaml
spec:
  replicas: 6
```
Then apply the changes:  
```sh
kubectl replace -f replicaset-definition.yaml
```

Alternatively, use the **scale** command:  
```sh
kubectl scale --replicas=6 replicaset myapp-replicaset
```

#### Managing ReplicaSets  

- **Create a ReplicaSet:**  
  ```sh
  kubectl create -f replicaset-definition.yaml
  ```
- **View all ReplicaSets:**  
  ```sh
  kubectl get replicaset
  ```
- **View Pods controlled by a ReplicaSet:**  
  ```sh
  kubectl get pods
  ```
- **Delete a ReplicaSet:**  
  ```sh
  kubectl delete replicaset myapp-replicaset
  ```
- **Scale a ReplicaSet:**  
  ```sh
  kubectl scale --replicas=6 replicaset myapp-replicaset
  ```

### 3.5 Hands-on Labs: Replica Sets
Use the link provided to access the lab and delve into the hands-on practice of the topic you just learned. [Lab 3.5](https://kodekloud.com/pages/free-labs/kubernetes/replicasets-stable)

### 3.6 Deployments  

Kubernetes **Deployments** provide a higher-level abstraction for managing applications compared to **Pods** and **ReplicaSets**. They allow seamless upgrades, rollbacks, and scaling of applications.  

#### Why Use Deployments?  

- **High Availability** – Deploy multiple instances of an application to handle traffic.  
- **Rolling Updates** – Upgrade application versions **one by one** to avoid downtime.  
- **Rollbacks** – If an update introduces an issue, revert to a previous version.  
- **Batching Changes** – Pause, make multiple updates, and apply them all at once.  

#### Relationship Between Deployments, ReplicaSets, and Pods  

- **Pods** – The basic unit that runs a containerized application.  
- **ReplicaSets** – Ensures the desired number of Pods are always running.  
- **Deployments** – Manages ReplicaSets, allowing updates and rollbacks efficiently.  

A **Deployment automatically creates a ReplicaSet**, which in turn creates the required Pods.  

#### Creating a Deployment  

A Deployment is defined using YAML, similar to a ReplicaSet.  

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp-deployment
  labels:
    app: myapp
spec:
  replicas: 3
  selector:
    matchLabels:
      app: myapp
  template:
    metadata:
      labels:
        app: myapp
    spec:
      containers:
        - name: myapp-container
          image: nginx
```

#### Key Components  

- **apiVersion: apps/v1** → Uses `apps/v1` API for Deployments.  
- **kind: Deployment** → Specifies that this is a Deployment.  
- **metadata** → Contains the name and labels.  
- **spec:**  
  - **replicas: 3** → Defines the desired number of Pods.  
  - **selector** → Matches Pods managed by this Deployment.  
  - **template** → Defines the Pod configuration (similar to a Pod YAML file).  

#### Creating and Viewing a Deployment  

To create a Deployment:  
```sh
kubectl create -f deployment-definition.yaml
```

To check if the Deployment is running:  
```sh
kubectl get deployments
```

To view the ReplicaSet created by the Deployment:  
```sh
kubectl get replicaset
```

To list the Pods managed by the Deployment:  
```sh
kubectl get pods
```

To see all related objects (Deployment, ReplicaSet, and Pods):  
```sh
kubectl get all
```

### 3.7 Hands-on Labs: Deployments
Use the link provided to access the lab and delve into the hands-on practice of the topic you just learned. [Lab 3.7](https://kodekloud.com/pages/free-labs/kubernetes/deployments-stable)

### 3.8 Deployments - Update and Rollback  

When a **Deployment** is created, it triggers a **rollout** and assigns it a **revision number** (e.g., Revision 1). When an update is applied (such as changing the container image or scaling replicas), a **new revision** is created (Revision 2). This versioning system allows easy **rollbacks** if an issue occurs.  

#### Viewing Deployment Rollouts  

To check the status of a Deployment rollout:  
```sh
kubectl rollout status deployment myapp-deployment
```

To see the **revision history** of the Deployment:  
```sh
kubectl rollout history deployment myapp-deployment
```

#### Deployment Strategies  

There are two types of Deployment strategies:  

**Recreate Strategy**  
- **All Pods are terminated first**, and then new Pods are created.  
- Causes **downtime** while the application is restarting.  

**Rolling Update Strategy (Default)**  
- **Replaces Pods gradually**, updating one at a time.  
- Ensures **zero downtime** for users.  
- **Default strategy** in Kubernetes.  

#### Updating a Deployment  

To update the Deployment YAML file (e.g., updating the container image):  
1. Edit `deployment.yaml` and change the image:  
   ```yaml
   spec:
     containers:
       - name: myapp-container
         image: nginx:1.19
   ```
2. Apply the update:  
   ```sh
   kubectl apply -f deployment.yaml
   ```
3. A **new rollout is triggered**, and Kubernetes updates Pods **one by one**.

Alternatively, update the image directly using `kubectl set image`:  
```sh
kubectl set image deployment myapp-deployment myapp-container=nginx:1.20
```
**Note:** If you update using `set image`, the Deployment YAML file is **not updated**.  

#### Viewing Deployment Details  

Check the Deployment rollout strategy and events:  
```sh
kubectl describe deployment myapp-deployment
```

- **Recreate strategy:**  
  - The old ReplicaSet is **scaled to zero** first.  
  - The new ReplicaSet is **scaled up to the desired replicas**.  

- **Rolling update strategy:**  
  - The old ReplicaSet is **scaled down one at a time**.  
  - The new ReplicaSet is **scaled up one at a time**.  

#### Rolling Back a Deployment  

If the new update has issues, roll back to the previous version:  
```sh
kubectl rollout undo deployment myapp-deployment
```
This **destroys the new Pods** and **restores the old Pods** from the previous ReplicaSet.  

#### Checking ReplicaSets  

Each Deployment creates a **new ReplicaSet** for each revision.  
To see all ReplicaSets:  
```sh
kubectl get replicaset
```
Before a rollback:  
- The **old ReplicaSet** has **zero Pods**.  
- The **new ReplicaSet** has **running Pods**.  

After a rollback:  
- The **old ReplicaSet** is restored with Pods.  
- The **new ReplicaSet** is scaled down to zero.  

#### Summary of Commands  

- **Create a Deployment:**  
  ```sh
  kubectl create -f deployment.yaml
  ```
- **List Deployments:**  
  ```sh
  kubectl get deployments
  ```
- **Apply an update:**  
  ```sh
  kubectl apply -f deployment.yaml
  ```
- **Update a Deployment image:**  
  ```sh
  kubectl set image deployment myapp-deployment myapp-container=nginx:1.20
  ```
- **Check rollout status:**  
  ```sh
  kubectl rollout status deployment myapp-deployment
  ```
- **Check rollout history:**  
  ```sh
  kubectl rollout history deployment myapp-deployment
  ```
- **Rollback to the previous version:**  
  ```sh
  kubectl rollout undo deployment myapp-deployment
  ```

### 3.9 Lab: Update and Rollback
Use the link provided to access the lab and delve into the hands-on practice of the topic you just learned. [Lab 3.9](https://kodekloud.com/pages/free-labs/kubernetes/rolling-rollback-updates-stable)

### 3.10 Graded Assignment
1. **Question 1**  
**What are some of the reasons you might need to access the Kubernetes lab?**  
✅ **To gain hands-on experience with Kubernetes**  
✅ **To understand how to manage deployments**  
✅ **To practice rolling updates and rollbacks**  
  - **Explanation:** A Kubernetes lab helps in learning, debugging, managing deployments, and practicing updates and rollbacks.  

2. **Question 2**  
**You are practicing on a Kubernetes deployment in a lab environment. You need to check the status of a pod. Which command can you use?**  
✅ **kubectl get pods**  
✅ **kubectl describe pod**  
  - **Explanation:**  
    - `kubectl get pods` shows a list of running Pods and their status.  
    - `kubectl describe pod <pod-name>` provides detailed information about a specific Pod.  

3. **Question 3**  
**If you want to check the logs of a specific Pod, which command would you use?**  
✅ **kubectl logs <pod-name>**  
  - **Explanation:** `kubectl logs` retrieves logs from a running container inside a Pod.  

4. **Question 4**  
**You performed a Kubernetes rolling update and then realized there was a problem with the new version of the app. What should you do next?**  
✅ **Rollback the update**  
  - **Explanation:** Use `kubectl rollout undo deployment <deployment-name>` to revert to the previous version.  

5. **Question 5**  
**In Kubernetes, what is the purpose of rolling updates?**  
✅ **To deploy a new application version without downtime**  
  - **Explanation:** Rolling updates replace old Pods **gradually** without taking the application offline.  

6. **Question 6**  
**You are practicing a Kubernetes deployment in a lab environment. You want to scale up the number of replicas for a specific deployment. Which command should you use?**  
✅ **kubectl scale deployment <deployment-name> --replicas=4**  
  - **Explanation:** This command increases the number of running replicas for the Deployment.  

7. **Question 7**  
**In the context of Kubernetes deployments, what can cause a rolling update to fail?**  
✅ **The new version of the application is unstable**  
✅ **The Kubernetes API server is down**  
✅ **There are not enough nodes in the Kubernetes cluster**  
  - **Explanation:**  
    - If the **new application version is faulty**, the update may fail.  
    - If the **Kubernetes API server is down**, updates cannot be managed.  
    - **Not enough available nodes** can prevent new Pods from being scheduled.  

8. **Question 8**  
**In the context of Kubernetes, when might you need to use the 'kubectl apply' command?**  
✅ **When you want to create resources**  
  - **Explanation:** `kubectl apply` **creates** resources from a YAML file.  

1. **Question 9**  
**What would be the impact on running Pods when a rolling update is performed with a strategy of 'maxUnavailable:0'?**  
✅ **No Pods would be taken down, causing the update to fail**  
  - **Explanation:**  
    - `maxUnavailable:0` ensures **no existing Pods are terminated until new ones are ready**.  
    - If **no additional capacity is available**, the update may **stall or fail**.  

10. **Question 10**  
**Which of the following statements are true when you perform a Kubernetes rolling update?**  
✅ **The update is performed one pod at a time.**  
✅ **The update allows for easy rollback if something goes wrong.**  
✅ **The update is performed without application downtime.**  
  - **Explanation:**  
     - Rolling updates **replace Pods one by one**, ensuring zero downtime.  
     - If an issue occurs, you can **rollback** the update using `kubectl rollout undo`.

---

## Module 4. Networking in Kubernetes 
### 4.1 Basics of Networking in Kubernetes  

Kubernetes networking is designed to allow seamless communication between **Pods, Nodes, and Services** without manual intervention. Each **Pod gets its own unique IP address**, and Kubernetes requires a **flat network model** where all Pods can communicate without NAT.  

#### **Networking in a Single-Node Cluster**  

- A **single-node Kubernetes cluster** has an IP address (e.g., `192.168.1.2`).  
- Each **Pod** inside the node is assigned a **unique internal IP** (e.g., `10.244.0.2`).  
- Kubernetes **creates a virtual internal network** (e.g., `10.244.0.0/16`) that all Pods connect to.  
- **Pods communicate with each other using internal IPs**, but these IPs change if a Pod is restarted.  

#### **Networking in a Multi-Node Cluster**  

- A **multi-node Kubernetes cluster** has multiple nodes with unique IPs (e.g., `192.168.1.2` and `192.168.1.3`).  
- Each node contains **Pods with their own internal IPs**, assigned from a virtual network.  
- If **nodes have the same network address**, this will cause **IP conflicts** when Pods communicate.  

#### **Kubernetes Networking Requirements**  

To ensure smooth communication, Kubernetes **requires the following**:  

- **All Pods must communicate with each other** without NAT.  
- **All nodes must communicate with Pods** without additional network configurations.  
- **Pods must be able to reach any node** in the cluster.  
- Kubernetes **does not set up networking automatically**—you must use a networking solution.  

#### **Kubernetes Networking Solutions**  

To manage networking, Kubernetes uses **Container Network Interface (CNI) plugins**. Some popular solutions include:  

- **Flannel** – A simple and lightweight networking option.  
- **Calico** – Provides security features along with networking.  
- **Cilium** – Supports advanced security policies and observability.  
- **Cisco ACI** – A solution for enterprise environments.  
- **VMware NSX-T** – Integrates with VMware environments.  
- **WeaveNet** – Used in some Kubernetes lab environments.  

#### **How Kubernetes Networking Works with CNI Plugins**  

- The **CNI plugin** assigns each node a unique subnet (e.g., `10.244.1.0/24` for Node 1, `10.244.2.0/24` for Node 2).  
- **Each Pod** on a node is assigned an IP **from that node’s subnet**.  
- **Routing is configured** so that Pods from different nodes can communicate **without conflicts**.  

With a proper **CNI plugin**, Kubernetes networking ensures that **all Pods can communicate seamlessly**, regardless of which node they are on.

### 4.2 Graded Assignment
1. **Question 1**  
   **In Kubernetes, which of the following statements is true regarding IP addresses and Pods?**  
   ✅ A pod receives a unique IP address from a private network.  

   **Explanation:** In Kubernetes, each **Pod** (not container) gets a unique **internal IP address** from a private network managed by the cluster. Containers within the same Pod share the same IP.

2. **Question 2**  
   **What does Kubernetes expect from the networking setup in a cluster, according to the video?**  
   ✅ Networking should support communication between containers, nodes, and other pods.  

   **Explanation:** Kubernetes **requires all Pods and Nodes to communicate with each other without NAT**, ensuring seamless networking across the cluster.

3. **Question 3**  
   **Which of the following Kubernetes networking solutions does the video mention?**  
   ✅ NSX-T is a commonly used solution for VMware environments.  

   **Explanation:** NSX-T is a **VMware-specific** Kubernetes networking solution. Kubernetes does **not** automatically configure networking, and WaveNet is not typically recommended for on-premises clusters.

4. **Question 4**  
   **What is the problem when two Kubernetes nodes have the same internal network address, as seen in the video?**  
   ✅ Having the same internal network address leads to IP address conflicts between the pods.  

   **Explanation:** If two Kubernetes nodes have the **same network address**, Pods may be **assigned duplicate IPs**, leading to conflicts and preventing proper communication.


## Module 5. Services 
### 5.1 Services - NodePort  

Kubernetes services enable communication between various components within and outside of the application. They connect applications together, allowing interaction between front-end and back-end Pods, and also facilitate external access to applications.  

A **NodePort Service** is a way to expose an application running in a Kubernetes Pod to external users. It maps a **Node’s IP and a specific port** to a Pod’s port, making the application accessible outside the cluster.  

#### Why Do We Need Services?  

- **Pods have dynamic IPs** that change when restarted, making direct communication unreliable.  
- Services provide a **stable, fixed access point** that routes traffic to the correct Pods.  
- **External users cannot directly access Pods** due to internal Kubernetes networking.  
- A **NodePort Service** allows users to access a Pod using `NodeIP:NodePort`.  

#### Types of Services in Kubernetes  

1. **NodePort (External Access to Pods)**  
   - Exposes the application on a **specific port of the node**.  
   - External users can access it using `NodeIP:NodePort`.  

2. **ClusterIP (Internal Communication Between Services)**  
   - Creates a **virtual internal IP** inside the cluster.  
   - Used for **Pod-to-Pod communication** within the cluster.  

3. **LoadBalancer (External Load Balancing)**  
   - Integrates with cloud **Load Balancers** (e.g., AWS ELB, GCP Load Balancer).  
   - **Distributes traffic** among multiple Pods across different nodes.  

#### Understanding NodePort Services  

When a **NodePort service** is created, three key ports are involved:  

- **Target Port (Pod Port)** – The port inside the Pod where the application runs (`80`).  
- **Service Port (ClusterIP Port)** – The internal port exposed by the service (`80`).  
- **NodePort (Externally Accessible Port)** – The port exposed on the node (`30008`).  

NodePorts must be in the range **30000-32767**. If not specified, Kubernetes assigns one automatically.  

#### Creating a NodePort Service  

A **Service** is defined using a YAML file, similar to **Deployments and Pods**.  

```yaml
apiVersion: v1
kind: Service
metadata:
  name: myapp-service
spec:
  type: NodePort
  selector:
    app: myapp
  ports:
    - port: 80        # Service Port (Cluster IP)
      targetPort: 80  # Pod Port
      nodePort: 30008 # Exposed NodePort (30000-32767)
```

- **type: NodePort** – Defines the service type.  
- **selector:** Matches Pods using the label `app: myapp`.  
- **ports:**  
  - **targetPort:** Port inside the Pod where the application runs.  
  - **port:** The port assigned to the Service (inside the cluster).  
  - **nodePort:** The externally accessible port on the node.  

#### Deploying and Accessing the Service  

1. **Create the Service:**  
   ```sh
   kubectl create -f service-nodeport.yaml
   ```
2. **Check the Services:**  
   ```sh
   kubectl get services
   ```
   **Example Output:**
   ```
   NAME            TYPE       CLUSTER-IP       EXTERNAL-IP   PORT(S)        AGE
   myapp-service  NodePort   10.96.50.2       <none>        80:30008/TCP   2m
   ```
3. **Access the Web Application**  
   ```sh
   minikube service <service-name> --url
   curl http://<Node-IP>:30008
   ```
   Example:  
   ```sh
   curl http://192.168.1.2:30008
   ```

#### NodePort with Multiple Pods (Load Balancing)  

- If multiple Pods match the **selector**, the Service **automatically load balances** traffic across them.  
- Kubernetes uses a **random selection** algorithm to distribute traffic.  

#### NodePort Across Multiple Nodes  

- Kubernetes ensures that the **NodePort is available on all nodes** in the cluster.  
- The application can be accessed using **any node’s IP** with the same **NodePort**.  

Example:  
```sh
curl http://192.168.1.3:30008
```
Even if the Pod is **not on this node**, Kubernetes **forwards** the request to the correct node.


### 5.2 Services - ClusterIP  

Kubernetes **ClusterIP Service** enables communication between different components of an application within a Kubernetes cluster. It is the **default service type** and is used for **internal communication** between Pods.  

#### Why Do We Need ClusterIP?  

1. **Pods have dynamic IPs** – When a Pod restarts, its IP changes, making direct communication unreliable.  
2. **A Service provides a stable access point** – Instead of using Pod IPs, other Pods can communicate using a fixed **Service name**.  
3. **Load Balancing** – A ClusterIP service automatically **distributes requests** among multiple Pods.  
4. **Microservices Communication** – Enables different tiers (frontend, backend, database) to communicate seamlessly.  

#### How ClusterIP Works  

- A **ClusterIP service** groups multiple Pods under a **single, fixed internal IP address**.  
- The Service gets a **name** that other Pods can use to connect instead of using Pod IPs.  
- **Requests are load-balanced randomly** across the selected Pods.  
- **Pods use the Service name** (instead of an IP) to connect, ensuring flexibility even if Pods restart.  

#### Creating a ClusterIP Service  

A ClusterIP Service is defined using a YAML file.  

```yaml
apiVersion: v1
kind: Service
metadata:
  name: backend-service
spec:
  type: ClusterIP
  selector:
    app: backend
  ports:
    - port: 80        # Service Port (ClusterIP)
      targetPort: 80  # Pod Port
```

- **type: ClusterIP** – Specifies that this is a ClusterIP service.  
- **selector:** Matches Pods labeled `app: backend`.  
- **ports:**  
  - **targetPort:** The port inside the Pod where the backend application runs.  
  - **port:** The internal port where the service is exposed within the cluster.  

#### Deploying and Accessing the ClusterIP Service  

1. **Create the Service:**  
   ```sh
   kubectl create -f clusterip-service.yaml
   ```
2. **Check the Services:**  
   ```sh
   kubectl get services
   ```
   **Example Output:**
   ```
   NAME              TYPE        CLUSTER-IP       PORT(S)        AGE
   backend-service  ClusterIP   10.96.10.3       80/TCP         2m
   ```
3. **Accessing the Service from Another Pod**  
   ```sh
   curl http://backend-service:80
   ```
   Instead of using **Pod IPs**, the request is sent to `backend-service`, and Kubernetes forwards it to one of the backend Pods.

#### ClusterIP with Multiple Pods  

- If multiple **backend Pods** exist, the Service **automatically load-balances** requests among them.  
- When **new Pods** are created or deleted, the Service **updates automatically** without reconfiguration.  

### 5.3 Services - Load Balancer  

A **LoadBalancer Service** in Kubernetes allows external users to access applications via a **single, stable URL** instead of multiple IP and port combinations. This type of service is only available on **supported cloud platforms** like AWS, Google Cloud, and Azure.  

#### Why Use a Load Balancer?  

- **NodePort services expose applications on multiple node IPs and ports**, making it difficult for users to access a single endpoint.  
- **Users need a single URL** (e.g., `votingapp.com`) rather than multiple IP:Port combinations.  
- **Manually setting up a load balancer (like HAProxy or Nginx) requires additional effort** in configuration and maintenance.  
- **Cloud platforms provide built-in Load Balancers**, which can be directly integrated with Kubernetes.  

#### How Load Balancer Works  

- The **LoadBalancer Service** provisions a **native cloud load balancer** (e.g., AWS ELB, GCP Load Balancer).  
- It **forwards traffic to the appropriate NodePort Services**, which then route requests to Pods.  
- Users **only need to access a single external IP or domain**, which the cloud provider manages.  
- If deployed in an **unsupported environment** (like VirtualBox or on-premises setups), the service **behaves like a NodePort Service** without actual external load balancing.  

#### Creating a LoadBalancer Service  

The **Service definition file** is similar to **NodePort**, but with `type: LoadBalancer`.  

```yaml
apiVersion: v1
kind: Service
metadata:
  name: frontend-service
spec:
  type: LoadBalancer
  selector:
    app: frontend
  ports:
    - port: 80        # Service Port (ClusterIP)
      targetPort: 80  # Pod Port
```

- **type: LoadBalancer** – Configures an external load balancer (on a cloud platform).  
- **selector:** Links the service to **Pods labeled `app: frontend`**.  
- **ports:**  
  - **targetPort:** Port where the application runs inside the Pod.  
  - **port:** The internal ClusterIP port.  

#### Deploying and Accessing the LoadBalancer Service  

1. **Create the Service:**  
   ```sh
   kubectl create -f loadbalancer-service.yaml
   ```
2. **Check the Services:**  
   ```sh
   kubectl get services
   ```
   **Example Output (on a cloud platform):**
   ```
   NAME               TYPE           CLUSTER-IP       EXTERNAL-IP       PORT(S)       AGE
   frontend-service  LoadBalancer   10.96.15.10      34.123.45.67      80:30200/TCP  2m
   ```
3. **Access the Application:**  
   ```sh
   curl http://34.123.45.67
   ```
   Or, if a **DNS record is configured**, users can access the application via:  
   ```
   http://votingapp.com
   ```

#### What Happens in Unsupported Environments?  

- If deployed **on-premises (without cloud integration)**, it behaves like a **NodePort Service**, exposing the application on a high node port but **without external load balancing**.  
- A **manual load balancer** (like Nginx or HAProxy) would be required.  

### 5.4 Hands-on Labs: Services
Use the link provided to access the lab and delve into the hands-on practice of the topic you just learned. [Lab 5.4](https://kodekloud.com/pages/free-labs/kubernetes/services-stable) 

### 5.5 Graded Assignment 
### Kubernetes Quiz  

1. **Which of the following are real resources in Kubernetes?**  
   - ✅ Services  
   - ✅ Nodes  
   - ✅ Pods  
   - ✅ Deployments  
   - ❌ Containers (Containers run inside Pods but are not Kubernetes resources)  
   - ❌ Clusters (A cluster is a group of nodes, not a resource itself)  

2. **What is the primary role of Kubernetes?**  
   - ✅ Automated scaling of applications  
   - ❌ Creating and managing databases  
   - ❌ Solving complex mathematical problems  
   - ❌ Operating system virtualization  

3. **Which of the following are components of a Kubernetes cluster?**  
   - ✅ Master  
   - ✅ Nodes  
   - ✅ Services  
   - ✅ Pods  
   - ❌ Containers (Containers exist inside Pods, but are not Kubernetes components)  
   - ❌ Clusters (The cluster is the overall system, not a component)  

4. **You are deploying a new application on your Kubernetes cluster. Which command would you use to apply a new configuration?**  
   - ✅ `kubectl apply`  
   - ❌ `kubectl deploy` (No such command)  
   - ❌ `kubectl set` (Used for modifying resources but not applying new ones)  
   - ❌ `kubectl config apply` (Incorrect syntax)  

5. **Which of the following are use cases for Kubernetes?**  
   - ✅ Managing containerized applications  
   - ✅ Automating deployment  
   - ✅ Scaling applications  
   - ✅ Running batch jobs  
   - ❌ Data processing (While Kubernetes can be used for data processing, it is not a core use case)  

6. **You have a running application that is receiving more traffic than usual. What Kubernetes component can help you manage this increased load?**  
   - ✅ ReplicaSets (Ensures the right number of Pods are running)  
   - ✅ Deployments (Manages rolling updates and scaling)  
   - ❌ Services (Handles internal/external access, but not scaling)  
   - ❌ Pods (Pods alone do not scale; they need ReplicaSets or Deployments)  

7. **Why is it more beneficial to use Deployments instead of directly using Pods in Kubernetes?**  
   - ✅ Deployments provide self-healing mechanisms  
   - ❌ Deployments are less resource-consuming (Pods and Deployments use the same resources)  
   - ❌ Deployments work independently of Pods (Deployments manage Pods)  
   - ❌ Deployments can't be controlled as Pods can (Deployments control Pods)  

8. **What would you use to expose your application running on a set of Pods to the external network?**  
   - ✅ A Service  
   - ❌ A Node (Nodes are part of the cluster infrastructure)  
   - ❌ A Pod (Pods have dynamic IPs and are not designed for external access)  
   - ❌ A Container (Containers run inside Pods and cannot be accessed directly)


---

## Module 6. Microservices Architecture  
### 6.1 Microservices Architecture  

This lecture explains microservices architecture using a sample voting application. The voting app consists of multiple components, each built with different technologies and services, demonstrating how microservices work together.  

#### Application Components  
1. **Voting App (Frontend Web App - Python)**  
   - Provides an interface for users to vote (Cat or Dog).  
   - Votes are stored in Redis.  

2. **Redis (In-memory Database)**  
   - Stores user votes temporarily.  

3. **Worker (Background Processing - .NET)**  
   - Reads votes from Redis.  
   - Updates PostgreSQL database with the count.  

4. **PostgreSQL (Persistent Database)**  
   - Stores final vote counts permanently.  

5. **Result App (Frontend Web App - Node.js)**  
   - Displays results by reading data from PostgreSQL.  

Each service is independent, loosely coupled, and communicates via APIs, making the architecture highly scalable and resilient.  

#### Running the Application Using Docker  
- The assumption is that all required images are already available in a container registry.  
- Each service runs in an isolated container using `docker run` commands.  

##### Running Individual Containers  
```bash
docker run -d --name redis redis
docker run -d --name db postgres
docker run -d -p 5000:80 --name vote voting-app
docker run -d -p 5001:80 --name result result-app
docker run -d --name worker worker-app
```
Each container runs independently but lacks connectivity between them.  

#### Establishing Communication Between Services  
- Containers must communicate to work correctly.  
- The frontend voting app should connect to Redis, and the worker should access both Redis and PostgreSQL.  
- **Links** were traditionally used for inter-container communication but are now deprecated in favor of **Docker networking**.  

##### Linking Containers (Deprecated)  
```bash
docker run -d --name vote --link redis:redis voting-app
docker run -d --name result --link db:db result-app
docker run -d --name worker --link redis:redis --link db:db worker-app
```
- The `--link` option allows a container to reference another container by name.  
- This creates an entry in `/etc/hosts` inside the container, allowing service discovery.  
- **However, this approach is no longer recommended.**  

#### Modern Approach: Using Docker Networks  
Instead of `--link`, modern Docker networking features should be used:  
```bash
docker network create my-network
docker run -d --net=my-network --name redis redis
docker run -d --net=my-network --name db postgres
docker run -d --net=my-network --name vote voting-app
docker run -d --net=my-network --name result result-app
docker run -d --net=my-network --name worker worker-app
```
- A **Docker network** provides automatic service discovery and eliminates the need for `--link`.  
- Containers within the same network can communicate using their container names.  


### 6.2 Demo - Deploying Voting App on Kubernetes  

In this demo, we're going to deploy the **voting application** on our **Minikube cluster**. The application consists of **five components**, each deployed as a **Pod**, with associated **Services** for communication.

#### **Step 1: Set Up the Project Structure**  
- Create a project directory named **voting-app**.  
- Inside, create **YAML definition files** for each **Pod** and **Service**.

#### **Step 2: Create Pod Definitions**  
Each microservice will be deployed as a **Pod** in Kubernetes.

- **Voting App Pod** ([voting-app-pod.yaml](./voting-app/voting-app-pod-k8s.yaml))
- **Result App Pod** ([result-app-pod.yaml](./voting-app/result-app-pod-k8s.yaml))
- **Redis Pod** ([redis-pod.yaml](./voting-app/redis-pod-k8s.yaml))
- **PostgreSQL Pod** ([postgres-pod.yaml](./voting-app/postgres-pod-k8s.yaml))
- **Worker Pod** ([worker-pod.yaml](./voting-app/worker-pod-k8s.yaml))

#### **Step 3: Create Services to Expose Pods**  
Each **Pod** needs a **Service** to enable communication.

- **Redis Service** ([redis-service.yaml](./voting-app/redis-svc-k8s.yaml))
- **PostgreSQL Service** ([postgres-service.yaml](./voting-app/postgres-svc-k8s.yaml))
- **Voting App Service (External)** ([voting-app-service.yaml](./voting-app/voting-svc-k8s.yaml))
- **Result App Service (External)** ([result-app-service.yaml](./voting-app/result-svc-k8s.yaml))

#### **Step 4: Deploy Pods and Services on Kubernetes**  
##### **Check Existing Resources**
```bash
kubectl get pods,services
```
- Ensure no existing resources except the default **Kubernetes service**.

##### **Deploy Components One by One**  
```bash
kubectl create -f voting-app-pod.yaml
kubectl create -f voting-app-service.yaml
kubectl create -f redis-pod.yaml
kubectl create -f redis-service.yaml
kubectl create -f postgres-pod.yaml
kubectl create -f postgres-service.yaml
kubectl create -f worker-pod.yaml
kubectl create -f result-app-pod.yaml
kubectl create -f result-app-service.yaml
```
- Deploy **Pods** and their corresponding **Services**.

##### **Verify Deployment**  
```bash
kubectl get pods,services
```
- Ensure all **Pods** are in **Running** state.  
- Check **NodePort** values for external access.

#### **Step 5: Access the Application**  
##### **Find Minikube’s IP Address**
```bash
minikube service voting-service --url
minikube service result-service --url
```
- The command **generates a URL** for accessing the **Voting App** and **Results Page**.

##### **Test in Web Browser**  
- Open **`http://<Minikube-IP>:30004`** → Voting Page.  
- Open **`http://<Minikube-IP>:30005`** → Results Page.  

##### **Cast a Vote**  
1. Select **Cat** or **Dog**.  
2. Verify that the vote is stored in **Redis** and processed by **Worker**.  
3. Open **Results Page** → View updated results.  

#### **Step 6: Cleanup**  
To remove all created resources:  
```bash
kubectl delete -f voting-app-pod.yaml
kubectl delete -f voting-app-service.yaml
kubectl delete -f redis-pod.yaml
kubectl delete -f redis-service.yaml
kubectl delete -f postgres-pod.yaml
kubectl delete -f postgres-service.yaml
kubectl delete -f worker-pod.yaml
kubectl delete -f result-app-pod.yaml
kubectl delete -f result-app-service.yaml
```
### 6.3 Demo - Deploying Voting App on Kubernetes with Deployments  

In this demo, we will **improve our deployment** by using **Deployments** instead of **Pods**. This approach allows for **scaling, rolling updates, and rollback capabilities**.

#### **Step 1: Replace Pods with Deployments**  
Each microservice will now be deployed using **Deployments**, which will manage **ReplicaSets**.

- **Voting App Deployment** ([voting-app-deploy.yaml](./voting-app/voting-app-deployments-k8s.yaml))  
- **Result App Deployment** ([result-app-deploy.yaml](./voting-app/voting-app-deployments-k8s.yaml))  
- **Redis Deployment** ([redis-deploy.yaml](./voting-app/voting-app-deployments-k8s.yaml))  
- **PostgreSQL Deployment** ([postgres-deploy.yaml](./voting-app/voting-app-deployments-k8s.yaml))  
- **Worker Deployment** ([worker-deploy.yaml](./voting-app/voting-app-deployments-k8s.yaml))  

#### **Step 2: Create Services for Communication**  
The **Services** remain the same, as they will route traffic to **Pods** created by Deployments.

- **Redis Service** ([redis-service.yaml](./voting-app/redis-svc-k8s.yaml))  
- **PostgreSQL Service** ([postgres-service.yaml](./voting-app/postgres-svc-k8s.yaml))  
- **Voting App Service (External)** ([voting-app-service.yaml](./voting-app/voting-svc-k8s.yaml))  
- **Result App Service (External)** ([result-app-service.yaml](./voting-app/result-svc-k8s.yaml))  

#### **Step 3: Deploy Deployments and Services**  
##### **Verify Existing Resources**  
```bash
kubectl get deployments,services
```
- Ensure the **cluster is clean** before proceeding.

##### **Deploy Components One by One**  
```bash
kubectl create -f voting-app-deploy.yaml
kubectl create -f voting-app-service.yaml
kubectl create -f redis-deploy.yaml
kubectl create -f redis-service.yaml
kubectl create -f postgres-deploy.yaml
kubectl create -f postgres-service.yaml
kubectl create -f worker-deploy.yaml
kubectl create -f result-app-deploy.yaml
kubectl create -f result-app-service.yaml
```
- **Deployments** now manage **Pods**, replacing previous individual pod creations.

##### **Verify Deployment Status**  
```bash
kubectl get deployments,pods,services
```
- **Ensure all deployments and services are running correctly**.

#### **Step 4: Access the Application**  
##### **Find Minikube’s IP Address**
```bash
minikube service voting-service --url
minikube service result-service --url
```
- This generates URLs for **Voting App** and **Result Page**.

##### **Test in Web Browser**  
- Open **`http://<Minikube-IP>:30004`** → Voting Page.  
- Open **`http://<Minikube-IP>:30005`** → Results Page.  

##### **Cast a Vote**  
1. Select **Cat** or **Dog**.  
2. Verify that the vote is stored in **Redis** and processed by **Worker**.  
3. Open **Results Page** → View updated results.  

#### **Step 5: Scale the Application**  
##### **Scale Voting App to 3 Replicas**
```bash
kubectl scale deployment voting-app-deploy --replicas=3
```
##### **Verify Scaling**
```bash
kubectl get deployments,pods
```
- Observe **3 replicas of the voting app running**.

##### **Test Load Balancing**  
- Refresh the **Voting App** page multiple times.  
- Each refresh should be served by a **different Pod**.  

#### **Step 6: Cleanup**  
To remove all created resources:  
```bash
kubectl delete -f voting-app-deploy.yaml
kubectl delete -f voting-app-service.yaml
kubectl delete -f redis-deploy.yaml
kubectl delete -f redis-service.yaml
kubectl delete -f postgres-deploy.yaml
kubectl delete -f postgres-service.yaml
kubectl delete -f worker-deploy.yaml
kubectl delete -f result-app-deploy.yaml
kubectl delete -f result-app-service.yaml
```

### 6.4 A Note on Previous Demo  

The **manifest files** for the demo lecture are available in the following repository:  

🔗 **[Example Voting App - Kubernetes Specifications](https://github.com/kodekloudhub/example-voting-app/tree/master/k8s-specifications)**  

Feel free to **explore and fork** it for further practice. 

## Module 7. Conclusion
### 7.1 Conclusion  

We have reached the end of the **Kubernetes for Beginners** course. This course provided a strong foundation to help you **get started with Kubernetes**.  

### **What We Covered**  
- **Introduction to Containers & Docker** – Understanding containerization and its role in modern application deployment.  
- **Container Orchestration** – Why Kubernetes is the leading orchestration tool.  
- **Setting Up Kubernetes** – Various ways to install and configure Kubernetes, including **Minikube**.  
- **Kubernetes Core Concepts** –  
  - **Pods** – The smallest unit in Kubernetes.  
  - **ReplicaSets** – Ensuring high availability.  
  - **Deployments** – Managing application updates and scaling.  
  - **Services** – Enabling networking between different application components.  
- **Networking in Kubernetes** – Basic concepts of pod-to-pod and external communication.  
- **kubectl Commands & YAML Files** –  
  - Writing **Kubernetes definition files**.  
  - Practicing real-world **kubectl commands**.  
- **Deploying a Microservices Application** – Running a full-stack application in Kubernetes.  
- **Deploying on Google Cloud Platform** – Running Kubernetes in a cloud environment.  

### 7.2 **Next Steps**  
- **Practice** – Keep applying what you’ve learned by deploying different applications.  
- **Advanced Kubernetes** – Explore more on **Helm, ConfigMaps, Secrets, Ingress, and StatefulSets**.  
- **Certification** – If you plan to pursue certification, courses like **CKA (Certified Kubernetes Administrator)** or **CKAD (Certified Kubernetes Application Developer)** will help deepen your expertise.  

### 7.3 **References**  

#### **Installation Guides**  
- **Install and Set Up kubectl** – [🔗 Kubernetes Documentation](https://kubernetes.io/docs/tasks/tools/)  
- **Install Minikube** – [🔗 Minikube Docs](https://minikube.sigs.k8s.io/docs/start/)  
- **Install VirtualBox** –  
  - [🔗 VirtualBox Downloads](https://www.virtualbox.org/wiki/Downloads)  
  - [🔗 VirtualBox for Linux](https://www.virtualbox.org/wiki/Linux_Downloads)  

#### **Tutorials & Guides**  
- **Minikube Tutorial** – [🔗 Hello Minikube](https://kubernetes.io/docs/tutorials/hello-minikube/)  
- **Accessing Minikube Services on macOS** – If Minikube is installed on **macOS**, follow these steps to access services:  
  [🔗 Minikube Service Tunnel](https://minikube.sigs.k8s.io/docs/handbook/accessing/#using-minikube-service-with-tunnel)  

### 7.4  **Course Resource**  
📥 **Download the course resource:** [**KubernetesForBeginners-MumshadMannambeth**](https://kodekloud.com/wp-content/uploads/2021/10/KubernetesForBeginners-MumshadMannambeth-2.pdf)


---

## Certificate of Completion
To access my certificate, follow this link to my Coursera account:
[My Certificate on Coursera](https://coursera.org/share/97d10c2f427aed7a197e5803ccb1516b)