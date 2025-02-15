# Docker Basics For DevOps
**Instructor:** [Mumshad Mannambeth](https://www.coursera.org/instructor/~93669146) (via KodeKloud)

This beginner-level [course](https://www.coursera.org/learn/docker-basics-for-devops) introduces [Docker](https://www.docker.com/), an open platform for building, shipping, and running distributed applications. Through simple lectures and demos, you'll learn to set up Docker, practice commands, develop images using Dockerfiles, and utilize Docker Compose. Hands-on coding exercises and assignments provide practical experience, enabling you to create Dockerfiles and images directly in your browser. By the end of the course, you'll have the foundational skills to manage Docker environments effectively.


### Content
- [Docker Basics For DevOps](#docker-basics-for-devops)
    - [Content](#content)
  - [Module 1: Docker Introduction](#module-1-docker-introduction)
    - [1.1 Introduction](#11-introduction)
    - [1.2  Docker Overview](#12--docker-overview)
      - [Why Docker?](#why-docker)
      - [Containers vs. Virtual Machines (VMs)](#containers-vs-virtual-machines-vms)
      - [Understanding Containers](#understanding-containers)
      - [How Docker Works](#how-docker-works)
      - [Docker vs Hypervisors](#docker-vs-hypervisors)
      - [Images vs Containers](#images-vs-containers)
      - [How Docker Simplifies DevOps](#how-docker-simplifies-devops)
      - [Running Applications with Docker](#running-applications-with-docker)
    - [1.3 Getting Started with Docker](#13-getting-started-with-docker)
      - [Installation Options](#installation-options)
    - [1.4 Demo - Setup and Install Docker](#14-demo---setup-and-install-docker)
      - [Step 1: Identify a Supported System](#step-1-identify-a-supported-system)
      - [Step 2: Uninstall Any Older Version](#step-2-uninstall-any-older-version)
      - [Step 3: Install Docker](#step-3-install-docker)
      - [Step 4: Verify Installation](#step-4-verify-installation)
      - [Step 5: Run a Test Container](#step-5-run-a-test-container)
      - [Final Notes](#final-notes)
    - [1.5 Graded Assignment](#15-graded-assignment)
  - [Module 2: Docker Commands](#module-2-docker-commands)
    - [2.1 Basic Docker Commands](#21-basic-docker-commands)
      - [1. Running a Container](#1-running-a-container)
      - [2. Viewing Running Containers](#2-viewing-running-containers)
      - [3. Stopping and Removing Containers](#3-stopping-and-removing-containers)
      - [4. Managing Docker Images](#4-managing-docker-images)
      - [5. Running Containers with Commands](#5-running-containers-with-commands)
      - [6. Executing Commands in Running Containers](#6-executing-commands-in-running-containers)
      - [7. Running a Web Application Container](#7-running-a-web-application-container)
    - [2.2 Hands-on Lab: Basic Docker Commands](#22-hands-on-lab-basic-docker-commands)
    - [2.3 Graded Assignment](#23-graded-assignment)
  - [Module 3: Docker Run](#module-3-docker-run)
    - [3.1 Docker Run Commands](#31-docker-run-commands)
      - [Running Specific Versions of an Image](#running-specific-versions-of-an-image)
      - [Interactive Containers (-i and -t Flags)](#interactive-containers--i-and--t-flags)
      - [Port Mapping (-p and -P Flags)](#port-mapping--p-and--p-flags)
      - [Running Multiple Instances with Different Ports](#running-multiple-instances-with-different-ports)
      - [Persisting Data with Volumes](#persisting-data-with-volumes)
      - [Viewing Detailed Container Information](#viewing-detailed-container-information)
      - [Viewing Logs of a Running Container](#viewing-logs-of-a-running-container)
    - [3.2 Hands-on Lab: Docker Run Commands](#32-hands-on-lab-docker-run-commands)
    - [3.3 Graded Assignment](#33-graded-assignment)
  - [Module 4: Docker Images](#module-4-docker-images)
    - [4.1 Docker Images](#41-docker-images)
      - [Why Create a Custom Docker Image?](#why-create-a-custom-docker-image)
      - [Steps to Create a Docker Image](#steps-to-create-a-docker-image)
      - [Writing a Dockerfile](#writing-a-dockerfile)
      - [Building and Running the Image](#building-and-running-the-image)
      - [Pushing an Image to Docker Hub](#pushing-an-image-to-docker-hub)
      - [Understanding Docker Image Layers](#understanding-docker-image-layers)
      - [Benefits of Layered Architecture](#benefits-of-layered-architecture)
      - [The Future of Containerization](#the-future-of-containerization)
    - [4.2 Hands-on Lab: Docker Images](#42-hands-on-lab-docker-images)
    - [4.3 Environment Variables](#43-environment-variables)
      - [Why Use Environment Variables?](#why-use-environment-variables)
      - [Setting Environment Variables in Docker](#setting-environment-variables-in-docker)
      - [Running Multiple Containers with Different Configurations](#running-multiple-containers-with-different-configurations)
      - [Viewing Environment Variables in a Running Container](#viewing-environment-variables-in-a-running-container)
    - [4.4 Hands-on Lab: Environment Variables](#44-hands-on-lab-environment-variables)
    - [4.5 Commands vs Entrypoint](#45-commands-vs-entrypoint)
      - [Why Do Some Containers Exit Immediately?](#why-do-some-containers-exit-immediately)
      - [How Does Docker Define the Default Process?](#how-does-docker-define-the-default-process)
      - [Overriding the Default Command](#overriding-the-default-command)
      - [Making a Custom Command Permanent](#making-a-custom-command-permanent)
      - [**Understanding ENTRYPOINT**](#understanding-entrypoint)
      - [The Difference Between `CMD` and `ENTRYPOINT`](#the-difference-between-cmd-and-entrypoint)
      - [Overriding CMD vs ENTRYPOINT](#overriding-cmd-vs-entrypoint)
      - [Combining ENTRYPOINT and CMD](#combining-entrypoint-and-cmd)
      - [Overriding ENTRYPOINT at Runtime](#overriding-entrypoint-at-runtime)
      - [Summary](#summary)
    - [4.6 Hands-on Lab: Command vs Entrypoint](#46-hands-on-lab-command-vs-entrypoint)
    - [4.7 Graded Assignment](#47-graded-assignment)
  - [Module 5: Docker Engine and Storage](#module-5-docker-engine-and-storage)
    - [5.1 Docker Engine](#51-docker-engine)
      - [Components of Docker Engine](#components-of-docker-engine)
      - [Remote Docker Management](#remote-docker-management)
      - [How Docker Provides Isolation](#how-docker-provides-isolation)
        - [Namespaces in Docker](#namespaces-in-docker)
        - [Process ID (PID) Namespaces](#process-id-pid-namespaces)
      - [Managing CPU and Memory for Containers](#managing-cpu-and-memory-for-containers)
        - [Limiting CPU Usage](#limiting-cpu-usage)
        - [Limiting Memory Usage](#limiting-memory-usage)
    - [5.2 Docker Storage](#52-docker-storage)
      - [Where Does Docker Store Data?](#where-does-docker-store-data)
      - [Understanding Docker's Layered Architecture](#understanding-dockers-layered-architecture)
        - [How Docker Stores Image Layers](#how-docker-stores-image-layers)
        - [Benefits of Layered Storage](#benefits-of-layered-storage)
        - [Read-Only Image Layers](#read-only-image-layers)
      - [How Containers Store Data](#how-containers-store-data)
        - [Writable Container Layer](#writable-container-layer)
        - [Copy-on-Write Mechanism](#copy-on-write-mechanism)
        - [What Happens When a Container is Deleted?](#what-happens-when-a-container-is-deleted)
      - [Persisting Data in Docker](#persisting-data-in-docker)
        - [Using Docker Volumes](#using-docker-volumes)
        - [Volume Mounting vs. Bind Mounting](#volume-mounting-vs-bind-mounting)
        - [Using `--mount` Instead of `-v`](#using---mount-instead-of--v)
      - [Storage Drivers](#storage-drivers)
        - [What Are Storage Drivers?](#what-are-storage-drivers)
        - [Choosing a Storage Driver](#choosing-a-storage-driver)
    - [5.3 Hands-on Lab: Docker Storage](#53-hands-on-lab-docker-storage)
    - [5.4 Graded Assignment](#54-graded-assignment)
  - [Module 6: Docker Network and Registry](#module-6-docker-network-and-registry)
    - [6.1 Docker Networking](#61-docker-networking)
      - [Default Docker Networks](#default-docker-networks)
      - [Bridge Network (Default)](#bridge-network-default)
      - [Host Network](#host-network)
      - [None Network](#none-network)
      - [Creating Custom Networks](#creating-custom-networks)
      - [Container-to-Container Communication](#container-to-container-communication)
        - [Using IP Addresses](#using-ip-addresses)
        - [Using Container Names (DNS Resolution)](#using-container-names-dns-resolution)
      - [How Docker Implements Networking](#how-docker-implements-networking)
    - [6.2 Hands-on Lab: Docker Networking](#62-hands-on-lab-docker-networking)
    - [6.3 Docker Registry](#63-docker-registry)
      - [What is a Docker Registry?](#what-is-a-docker-registry)
      - [Docker Image Naming Convention](#docker-image-naming-convention)
      - [Pulling and Pushing Images from Docker Hub](#pulling-and-pushing-images-from-docker-hub)
        - [Pulling an Image](#pulling-an-image)
        - [Pushing an Image to Docker Hub](#pushing-an-image-to-docker-hub-1)
      - [Using Private Registries](#using-private-registries)
      - [Hosting Your Own Private Docker Registry](#hosting-your-own-private-docker-registry)
        - [Running a Private Registry Locally](#running-a-private-registry-locally)
        - [Tagging and Pushing an Image to a Private Registry](#tagging-and-pushing-an-image-to-a-private-registry)
    - [6.4 Hands-on Lab: Docker Registry](#64-hands-on-lab-docker-registry)
    - [6.5 Graded Assignment](#65-graded-assignment)
  - [Certificate of Completion](#certificate-of-completion)
    - [Next Steps After This Docker Course](#next-steps-after-this-docker-course)
    - [1️⃣ Master Docker Compose](#1️⃣-master-docker-compose)
    - [2️⃣ Learn Docker Swarm or Kubernetes](#2️⃣-learn-docker-swarm-or-kubernetes)
    - [3️⃣ Work with Docker in Production](#3️⃣-work-with-docker-in-production)
    - [4️⃣ Explore Containerized CI/CD Pipelines](#4️⃣-explore-containerized-cicd-pipelines)
    - [5️⃣ Learn Cloud-Native Docker Deployments](#5️⃣-learn-cloud-native-docker-deployments)
    - [6️⃣ Get Docker Certified (Optional)](#6️⃣-get-docker-certified-optional)
    - [7️⃣ Contribute to Open Source / Real Projects](#7️⃣-contribute-to-open-source--real-projects)

## Module 1: Docker Introduction
### 1.1 Introduction
- **Instructor:** Mumshad Mannambeth, DevOps and Cloud trainer at KodeKloud.
- **Course Objective:** 
  - Understand containers and Docker.
  - Learn how to run Docker containers and build images.
  - Explore networking in Docker and use Docker Compose.
  - Learn about Docker registry and private registry deployment.
  - Understand Docker internals.
  - Introduction to container orchestration tools like Docker Swarm and Kubernetes.
- **Hands-on Labs:** 
  - No need to set up your own environment; labs are available in-browser.
  - Labs provide access to a Docker host and a quiz portal.
  - Interactive quizzes validate actions and provide instant feedback.
- **Learning Approach:** 
  - Uses animation, illustrations, and analogies.
  - Includes demos and interactive labs for better understanding.

### 1.2  Docker Overview

#### Why Docker?
- Traditional application setup faced multiple challenges:
  - **Compatibility Issues:** Different services (Node.js, MongoDB, Redis, Ansible) required specific OS versions and dependencies.
  - **Complex Setup:** Developers had to follow lengthy setup instructions.
  - **Environment Inconsistencies:** Different OS versions in dev, test, and production led to deployment failures.
  - **Difficult Scaling & Upgrades:** Changing a single component required checking compatibility across the stack.

- **Solution with Docker:**
  - Each component runs in a **separate container** with its own dependencies and libraries.
  - Developers use a single `docker run` command to start their environment.
  - Ensures consistent behavior across different environments.

#### Containers vs. Virtual Machines (VMs)

| Feature           | Containers (Docker)                               | Virtual Machines (VMs)               |
|------------------|------------------------------------------------|--------------------------------|
| **Isolation**    | Shares the host OS kernel                        | Full OS isolation per VM      |
| **Size**         | Lightweight (Megabytes)                          | Heavy (Gigabytes)             |
| **Startup Time** | Fast (Seconds)                                   | Slow (Minutes)                |
| **Resource Usage** | Low (Shares OS resources)                      | High (Each VM has a full OS)  |
| **Flexibility**  | Runs only Linux-based containers on Linux host    | Can run any OS (Windows, Linux, etc.) |
| **Use Case**     | Application packaging and deployment              | Running different OS types and full environments |

- **VMs** are better for running different OS types on the same hardware.
- **Containers** are optimized for lightweight, fast application deployment.

#### Understanding Containers
- **Containers** are isolated environments with:
  - Their own processes, services, and network interfaces.
  - Shared kernel with the host OS.
  - Fast deployment and easy scalability.

- **Key Fact:**  
  - Docker runs **Linux-based containers** on Linux hosts.  
  - **Windows containers** require Docker running on Windows.

#### How Docker Works
1. **OS Structure:**  
   - Every Linux-based OS has a **common kernel** but different user-space software.
   - Containers share the host **kernel** but have isolated user-space.

2. **Cross-OS Compatibility:**  
   - Docker allows running different Linux distributions (Ubuntu, Debian, Fedora) on a **single host kernel**.
   - Cannot natively run Windows containers on Linux.

3. **Running Linux Containers on Windows:**  
   - Docker runs Linux containers on **a Linux VM inside Windows**, not directly on Windows.

#### Docker vs Hypervisors
- **Hypervisors (VMs)** allow multiple OS instances on a single machine.
- **Docker** is designed for packaging and running applications efficiently.
- In large deployments, **VMs + Docker** are used together:
  - **VMs** host **Docker containers** to combine benefits of both.

#### Images vs Containers

| Feature    | Image | Container |
|-----------|-------|-----------|
| **Definition** | A pre-built package or template | A running instance of an image |
| **Purpose** | Used to create containers | Executes applications |
| **State** | Read-only | Mutable (can run, stop, restart) |
| **Example** | `ubuntu:latest` (base image) | `ubuntu_container_1` (running instance) |

- **Images** are stored in repositories like **Docker Hub**.
- **Containers** are instances of images running on a Docker host.

#### How Docker Simplifies DevOps
- Before Docker:
  - Developers wrote setup instructions for Ops teams.
  - Manual setup often led to errors and inconsistencies.

- With Docker:
  - **Developers & Ops** collaborate on a **Dockerfile**.
  - The same **image** runs consistently in all environments (Dev, Test, Production).
  - Deployment is simplified, reducing failures.

#### Running Applications with Docker
- Most software is already **containerized** and available in **Docker Hub**.
- Setting up a service (e.g., MongoDB) is as simple as:
  ```sh
  docker run mongo
  ```
- Scaling up is easy:
  ```sh
  docker run -d -p 8080:80 nginx
  ```
  - Runs Nginx container in **detached mode (-d)**
  - Maps port **8080 on host** to **80 in the container**


### 1.3 Getting Started with Docker  

Docker has two editions:  

- **Community Edition (CE):** Free and open-source. Available on Linux, Mac, Windows, and cloud platforms like AWS and Azure.  
- **Enterprise Edition (EE):** Paid version with additional enterprise features such as image security, management, and orchestration tools like the Universal Control Plane.  

For this course, we will use **Docker Community Edition (CE)**.  

#### Installation Options  

- **On Linux:** Follow the upcoming demo to install Docker.  
- **On Mac/Windows:**  
  - Option 1: Install a **Linux VM** using VirtualBox or another virtualization tool and follow the Linux installation demo. *(Recommended for beginners)*  
  - Option 2: Install **Docker Desktop for Mac/Windows**, which provides a native Docker experience.  

If you're using Mac or Windows, refer to the **Docker for Mac/Windows** section later in the course before proceeding. Now, let's move on to installing Docker on a Linux machine. 🚀


### 1.4 Demo - Setup and Install Docker  

#### Step 1: Identify a Supported System  
- Docker requires a **64-bit operating system**.  
- Supported Ubuntu versions: **Disco, Cosmic, Bionic, Xenial**.  
- To check your Ubuntu version, run:  
  ```sh
  cat /etc/*release*
  ```  

#### Step 2: Uninstall Any Older Version  
- Ensure no previous Docker version is installed:  
  ```sh
  sudo apt-get remove docker docker-engine docker.io containerd runc
  ```  

#### Step 3: Install Docker  
There are two methods to install Docker:  

**Option 1: Manual Installation (Package Manager)**  
1. Update the system and install prerequisites:  
   ```sh
   sudo apt-get update
   sudo apt-get install \
       ca-certificates \
       curl \
       gnupg \
       lsb-release
   ```  
2. Add Docker’s official GPG key:  
   ```sh
   curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
   ```  
3. Add the Docker repository:  
   ```sh
   echo \
   "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
   ```  
4. Install Docker:  
   ```sh
   sudo apt-get update
   sudo apt-get install docker-ce docker-ce-cli containerd.io
   ```  

**Option 2: Install Using the Convenience Script (Easier Method)**  
1. Download the installation script:  
   ```sh
   curl -fsSL https://get.docker.com -o get-docker.sh
   ```  
2. Run the script:  
   ```sh
   sudo sh get-docker.sh
   ```  
This method **automates the installation** and works on most operating systems.  

#### Step 4: Verify Installation  
- Check Docker version:  
  ```sh
  docker version
  ```  
- If installed successfully, it should return the installed Docker version (e.g., **19.03.1**).  

#### Step 5: Run a Test Container  
1. Go to **Docker Hub** ([hub.docker.com](https://hub.docker.com)) and search for an image (e.g., **whalesay**).  
2. Run the following command to test Docker:  
   ```sh
   sudo docker run docker/whalesay cowsay "Hello World"
   ```  
3. Docker will **pull the image from Docker Hub** and execute the whalesay container.  
4. If successful, the output should display a **whale saying "Hello World"**.  

#### Final Notes  
- You **don’t need to install Docker manually** for this course as hands-on labs are provided.  
- However, if you wish to experiment, feel free to install and follow along. 🚀

### 1.5 Graded Assignment
1. **Which of the following best describes the impact of Docker on the collaboration between developers and operations teams in deploying applications?**  
   - ✅ **Docker bridges the gap between developers and operations teams by providing a shared framework.**  

2. **What does Docker primarily use to isolate application dependencies?**  
   - ✅ **Containers**  

3. **Which of the following is a key difference between the community and enterprise editions of Docker?**  
   - ✅ **The enterprise edition offers additional features such as advanced management capabilities.**  

4. **Which of the following are benefits of using Docker to simplify the setup of complex application stacks and address compatibility issues?**  
   - ✅ **Docker ensures that applications run the same regardless of where they are run.**  
   - ✅ **Docker containers are lightweight.**  

5. **How many main editions does Docker have?**  
   - **2** *(Community Edition and Enterprise Edition)*  

6. **Which of the following is not a reason to use Docker for deploying applications?**  
   - ✅ **It increases the size of applications.**  

7. **What is the file which is used by Docker to automate the deployment of applications?**  
   - **dockerfile**  

8. **Which of the following platforms does Docker support?**  
   - ✅ **All of the above (Windows, macOS, Linux)**

---

## Module 2: Docker Commands
### 2.1 Basic Docker Commands  
#### 1. Running a Container  
- The `docker run` command starts a container from an image.  
  ```sh
  docker run nginx
  ```  
- If the image is **not available locally**, Docker pulls it from **Docker Hub** on the first run.  
- Subsequent runs use the **locally cached image**.  

#### 2. Viewing Running Containers  
- List all **running** containers:  
  ```sh
  docker ps
  ```  
- List **all** containers (including stopped ones):  
  ```sh
  docker ps -a
  ```  

#### 3. Stopping and Removing Containers  
- **Stop** a running container:  
  ```sh
  docker stop <container_id or container_name>
  ```  
- **Remove** a stopped container:  
  ```sh
  docker rm <container_id or container_name>
  ```  

#### 4. Managing Docker Images  
- List **all available images** on the host:  
  ```sh
  docker images
  ```  
- **Remove** an image (ensure no containers are using it):  
  ```sh
  docker rmi <image_id or image_name>
  ```  
- **Pull an image** without running a container:  
  ```sh
  docker pull ubuntu
  ```  

#### 5. Running Containers with Commands  
- By default, containers **exit immediately** if no process is running inside them.  
- To keep a container **alive for a few seconds**, use:  
  ```sh
  docker run ubuntu sleep 5
  ```  
- To keep a container **running for longer**, use:  
  ```sh
  docker run ubuntu sleep 100
  ```  

#### 6. Executing Commands in Running Containers  
- **Run a command inside a running container:**  
  ```sh
  docker exec <container_id> cat /etc/hosts
  ```  

#### 7. Running a Web Application Container  
- **Run a web application in the foreground (attached mode):**  
  ```sh
  docker run kodecloud/simple-web-app
  ```  
  - The container runs and displays logs on the screen.  
  - **Press `Ctrl + C` to stop the container.**  

- **Run a container in the background (detached mode):**  
  ```sh
  docker run -d kodecloud/simple-web-app
  ```  
  - This runs the container **in the background**, allowing other tasks on the terminal.  
  - View the running container using:  
    ```sh
    docker ps
    ```  
- **Reattach to a running container:**  
  ```sh
  docker attach <container_id>
  ```  
  - You can use the **first few characters** of the container ID instead of the full ID.  

### 2.2 Hands-on Lab: Basic Docker Commands
Use the link provided to access the lab and delve into the hands-on practice of the topic you just learned.  [Lab 2.1](https://kodekloud.com/pages/free-labs/docker/docker-basic-commands)

### 2.3 Graded Assignment
1. **What Docker command is used to stop a running container?**  
   - **docker stop**  

2. **Which of the following Docker commands are related to managing containers?**  
   - ✅ **docker run**  
   - ✅ **docker stop**  
   - ✅ **docker ps**  

3. **What is the role of the 'docker pull' command?**  
   - ✅ **To download a Docker image from a registry**  

4. **Which of the following Docker commands require an image name or ID?**  
   - ✅ **docker run**  
   - ✅ **docker rmi**  
   - ✅ **docker pull**  

5. **Which command would you use to run a command inside a running Docker container?**  
   - ✅ **docker exec**  

6. **What does the 'docker run' command do?**  
   - ✅ **It runs a Docker container from an image**  

7. **Which Docker command is used to list all running containers?**  
   - ✅ **docker ps**  

8. **What is the Docker command to remove a Docker container?**  
   - **docker rm**  

---

## Module 3: Docker Run
### 3.1 Docker Run Commands
#### Running Specific Versions of an Image  
- By default, Docker pulls and runs the **latest version** of an image:  
  ```sh
  docker run redis
  ```  
- To run a **specific version**, use the **tag** (`:<version>`):  
  ```sh
  docker run redis:4.0
  ```  
- Image tags are listed on **[Docker Hub](https://hub.docker.com)** under the image description.

#### Interactive Containers (-i and -t Flags)  
- **By default**, Docker containers do not accept user input.  
- To run a container in **interactive mode** (`-i`):  
  ```sh
  docker run -i ubuntu
  ```  
- To attach a **pseudo-terminal** (`-t`), use both `-it`:  
  ```sh
  docker run -it ubuntu
  ```  
  - This allows user interaction inside the container’s shell.

#### Port Mapping (-p and -P Flags)  
- **Containers have internal IPs**, but they are not accessible externally by default.  
- To access a containerized web application from outside, use **port mapping**.  
- Example: Map port **5000 inside the container** to **port 80 on the host**:  
  ```sh
  docker run -p 80:5000 my-web-app
  ```  
- Users can now access the app via `http://<docker-host-ip>:80`.  

#### Running Multiple Instances with Different Ports  
- Example: Running two **MySQL containers** on different ports:  
  ```sh
  docker run -p 3306:3306 mysql
  docker run -p 8306:3306 mysql
  ```  
  - First MySQL instance maps to port **3306**.  
  - Second MySQL instance maps to port **8306**.  

#### Persisting Data with Volumes  
- **By default, Docker containers have isolated filesystems**, and all data inside them is lost when deleted.  
- **To persist data**, mount a directory from the **host** to the **container**:  
  ```sh
  docker run -v /opt/datadir:/var/lib/mysql mysql
  ```  
  - Data in `/var/lib/mysql` inside the container is **stored permanently** in `/opt/datadir` on the host.

#### Viewing Detailed Container Information  
- Use `docker inspect` to get full **JSON-formatted details** about a container:  
  ```sh
  docker inspect <container_id>
  ```  

#### Viewing Logs of a Running Container  
- **Check logs of a detached container** using:  
  ```sh
  docker logs <container_id>
  ```  

### 3.2 Hands-on Lab: Docker Run Commands
Use the link provided to access the lab and delve into the hands-on practice of the topic you just learned. [Lab 3.2](https://kodekloud.com/pages/free-labs/docker/docker-run) 

### 3.3 Graded Assignment
1. **Which command would you use to run a Docker container with a specific image tag?**  
   - ✅ **docker run imagename:tag**  

2. **Which of the following are reasons why it's important to map volumes for data persistence in Docker containers?**  
   - ✅ **Volumes persist data even when the container is deleted**  
   - ✅ **Volumes allow data to be shared between containers**  
   - ✅ **Volumes can be used to store sensitive data outside of the container**  

3. **If you want to run a Docker container with a specific command, which of the following options should be used with the 'docker run' command?**  
   - ✅ **--cmd**  

4. **Which of the following options are TRUE regarding data persistence in Docker?**  
   - ✅ **Volumes are used in Docker to persist data.**  
   - ✅ **Data in a Docker container is lost when the container is removed.**  

5. **What is the purpose of the '-d' option in the 'docker run' command?**  
   - ✅ **To run the Docker container in the background.**  

6. **If you want to check the logs of a running Docker container, what command would you use?**  
   - **docker logs**  

7. **Which command allows you to run a Docker container in the detached mode?**  
   - `docker run -d imagename`  
   - `docker run --detach imagename`  

8. **What is the result of running the 'docker run' command without specifying an image tag?**  
   - ✅ **Docker will run the container with the 'latest' tag**  

9. **Which of the following commands are used to manage Docker containers?**  
   - ✅ **docker start**  
   - ✅ **docker stop**  
   - ✅ **docker restart**  

10. **What command is used to view the logs of a Docker container?**  
   - **docker logs**  

---

## Module 4: Docker Images
### 4.1 Docker Images  

#### Why Create a Custom Docker Image?  
- If **a required service or component is not available** on Docker Hub  
- To **dockerize an application** for easier deployment and portability  

Example: A **Python Flask web application** can be dockerized by creating a **custom image**  

#### Steps to Create a Docker Image  
1. **Write a Dockerfile**  
2. **Build the image** using `docker build`  
3. **Push the image** to Docker Hub using `docker push`  

#### Writing a Dockerfile  
A **Dockerfile** is a **text file** with **step-by-step instructions** that Docker follows to build an image  

Example Dockerfile:  
```Dockerfile
# Base image (Operating System)
FROM ubuntu  

# Update packages and install dependencies  
RUN apt-get update && apt-get install -y python3-pip  

# Copy application source code to the image  
COPY . /opt/source-code  

# Set entry point (Command to run when container starts)  
ENTRYPOINT ["python3", "/opt/source-code/app.py"]
```  

**Dockerfile Instructions:**  
- `FROM` → Defines the **base image** (must always be the first line)  
- `RUN` → Executes commands inside the image (e.g., installing dependencies)  
- `COPY` → Copies files from **host** to the **image**  
- `ENTRYPOINT` → Specifies the **default command** to run when a container is started  

#### Building and Running the Image  
1. **Build the Docker Image:**  
   ```sh
   docker build -t my-custom-app .
   ```  
   - `-t` → Assigns a name (tag) to the image  
   - `.` → Uses the **current directory** as the build context  

2. **Verify the Image:**  
   ```sh
   docker images
   ```  

3. **Run a Container from the Image:**  
   ```sh
   docker run my-custom-app
   ```  

#### Pushing an Image to Docker Hub  
1. **Log in to Docker Hub:**  
   ```sh
   docker login
   ```  

2. **Tag the Image with Your Docker Hub Account:**  
   ```sh
   docker tag my-custom-app myusername/my-custom-app
   ```  

3. **Push the Image to Docker Hub:**  
   ```sh
   docker push myusername/my-custom-app
   ```  

#### Understanding Docker Image Layers  
- **Docker builds images in a layered architecture**  
- Each command in the Dockerfile creates **a new layer**  
- Example:  
  - **Base Image:** Ubuntu (120MB)  
  - **Installed Packages:** 300MB  
  - **Python Dependencies & App Code:** Additional small layers  
- **Layers are cached**, making builds **faster**  

**Check Image Layers:**  
```sh
docker history my-custom-app
```  

#### Benefits of Layered Architecture  
- **Caching speeds up builds**: If a build fails, Docker **reuses previous layers** instead of restarting from scratch  
- **Only modified layers are rebuilt**, making updates **efficient**  

#### The Future of Containerization  
- Almost **any application can be containerized**  
  - Databases (MySQL, PostgreSQL)  
  - Development tools  
  - Even applications like **Spotify, Skype, and browsers**  
- **Containers replace traditional software installations**  
  - Run an application  
  - Use it  
  - Delete it when done—**no need for manual cleanups!** 🚀  


### 4.2 Hands-on Lab: Docker Images
Use the link provided to access the lab and delve into the hands-on practice of the topic you just learned. [Lab 4.2](https://kodekloud.com/pages/free-labs/docker/docker-images) 

### 4.3 Environment Variables  
#### Why Use Environment Variables?  
- Hardcoding values like **background colors** inside application code is **not flexible**.  
- Best practice: **Move configuration values** into **environment variables**.  
- This allows **dynamic configuration** without modifying the application code.  

#### Setting Environment Variables in Docker  
- When running a Docker container, use the `-e` option to pass an environment variable.  

Example: Running a container with an environment variable  
```sh
docker run -e APP_COLOR=blue my-web-app
```  
- The application inside the container will now use **blue** as the background color instead of the default.

#### Running Multiple Containers with Different Configurations  
To deploy multiple containers with different colors, run:  
```sh
docker run -e APP_COLOR=red my-web-app  
docker run -e APP_COLOR=green my-web-app  
docker run -e APP_COLOR=yellow my-web-app  
```  
Each container will have a different **APP_COLOR** without modifying the application code.

#### Viewing Environment Variables in a Running Container  
Use `docker inspect` to check the **environment variables** of a running container:  
```sh
docker inspect <container_id>
```  
- Look under the **"Config"** section for the **list of environment variables** set inside the container.

### 4.4 Hands-on Lab: Environment Variables
Use the link provided to access the lab and delve into the hands-on practice of the topic you just learned. [Lab 4.4](https://kodekloud.com/pages/free-labs/docker/docker-env-vars)

### 4.5 Commands vs Entrypoint  

#### Why Do Some Containers Exit Immediately?  
- Containers are **not meant to host an OS**, unlike virtual machines.  
- They run a **specific process**, and when that process **exits**, the container stops.  
- Example:  
  ```sh
  docker run ubuntu
  ```  
  - The container runs and **exits immediately** because **Ubuntu’s default command is `bash`**.  
  - **Bash requires a terminal**, and without one, it exits.  

#### How Does Docker Define the Default Process?  
- **Each image has a default process** defined in its Dockerfile using the `CMD` instruction.  
- Examples:  
  - **Nginx image:** `CMD ["nginx", "-g", "daemon off;"]`  
  - **MySQL image:** `CMD ["mysqld"]`  
  - **Ubuntu image:** `CMD ["bash"]`  

#### Overriding the Default Command  
- Use a **custom command** when running a container:  
  ```sh
  docker run ubuntu sleep 5
  ```  
  - Runs Ubuntu, but instead of `bash`, it **executes `sleep 5`**, then exits.  

#### Making a Custom Command Permanent  
- Instead of passing a command every time, create **a custom image** with a **new default command**.  
- Example Dockerfile:  
  ```Dockerfile
  FROM ubuntu
  CMD ["sleep", "5"]
  ```  
- Build and run the new image:  
  ```sh
  docker build -t ubuntu-sleeper .
  docker run ubuntu-sleeper
  ```  
  - This image **always runs `sleep 5`** by default.  

#### **Understanding ENTRYPOINT**  

#### The Difference Between `CMD` and `ENTRYPOINT`  
| Feature | CMD | ENTRYPOINT |
|---------|-----|------------|
| **Purpose** | Default command to run | Main executable of the container |
| **Can be overridden?** | Yes, when a command is passed | No, arguments are appended instead |
| **Example Usage** | `CMD ["sleep", "5"]` | `ENTRYPOINT ["sleep"]` |

#### Overriding CMD vs ENTRYPOINT  
- If `CMD` is used, **passing a command replaces it completely**:  
  ```sh
  docker run ubuntu-sleeper sleep 10  # Overrides CMD
  ```  
- If `ENTRYPOINT` is used, **passing an argument appends to it**:  
  ```sh
  ENTRYPOINT ["sleep"]
  ```  
  ```sh
  docker run ubuntu-sleeper 10  # Runs sleep 10
  ```  

#### Combining ENTRYPOINT and CMD  
- **ENTRYPOINT** defines the executable  
- **CMD** provides default arguments  
- Example:  
  ```Dockerfile
  FROM ubuntu
  ENTRYPOINT ["sleep"]
  CMD ["5"]
  ```  
  - Running without arguments:  
    ```sh
    docker run ubuntu-sleeper
    ```  
    - Runs **`sleep 5`** (CMD is used).  
  - Running with arguments:  
    ```sh
    docker run ubuntu-sleeper 10
    ```  
    - Runs **`sleep 10`** (CMD is overridden).  

#### Overriding ENTRYPOINT at Runtime  
- To **change ENTRYPOINT** dynamically, use `--entrypoint`:  
  ```sh
  docker run --entrypoint sleep2.0 ubuntu-sleeper 10
  ```  
  - Runs **`sleep2.0 10`** instead of the default `sleep`.  

#### Summary  
- **CMD** provides a **default command**, which can be **completely replaced** when running the container.  
- **ENTRYPOINT** defines the **main executable**, and **arguments are appended** to it.  
- **Use both together** for flexibility: ENTRYPOINT as the command, CMD as the default argument.  

### 4.6 Hands-on Lab: Command vs Entrypoint
Use the link provided to access the lab and delve into the hands-on practice of the topic you just learned. [Lab 4.6](https://kodekloud.com/pages/free-labs/docker/docker-cmd-entrypoint)

### 4.7 Graded Assignment
1. **What steps are involved in deploying a Docker container from a custom Docker image?**  
   - ✅ **Build the Docker image from the Dockerfile**  
   - ✅ **Tag the Docker image with the account name**  
   - ✅ **Run the Docker container from the Docker image**  

2. **Why is it important to tag a Docker image with an account name before pushing it to Docker Hub?**  
   - ✅ **To ensure the image is stored under the right account on Docker Hub**  

3. **What command is used to run a Docker container from an image?**  
   - **docker run**  

4. **Which of the following statements about Docker images and Docker containers are true?**  
   - ✅ **A Docker image is a lightweight, standalone executable package**  
   - ✅ **Docker containers can be built from Dockerfiles**  
   - ✅ **A Docker container is a running instance of a Docker image**  
   - ✅ **Docker images can be built from Dockerfiles**  

5. **What happens when you try to run a Docker container from an image that isn't available locally?**  
   - ✅ **Docker will automatically pull the image from Docker Hub**  

6. **What command is used to build a Docker image from a Dockerfile?**  
   - **docker build**  

7. **What is the purpose of setting environment variables in a Docker container?**  
   - ✅ **To configure runtime behavior of the container**  

8. **What is the Dockerfile used for in Docker?**  
   - ✅ **To build custom Docker images**  

9. **How can we modify the behavior of a Docker container?**  
   - ✅ **By using environment variables**  

10. **Which of the following are valid reasons for creating custom Docker images?**  
   - ✅ **To pre-install software dependencies**  
   - ✅ **To create a reproducible environment**  
   - ✅ **To include application-specific configuration**  

---

## Module 5: Docker Engine and Storage
### 5.1 Docker Engine  
#### Components of Docker Engine  
When you install Docker on a Linux system, you install three key components:  

- **Docker Daemon** – A background process that manages Docker **containers, images, volumes, and networks**.  
- **Docker REST API Server** – An API interface that allows external programs to interact with the daemon.  
- **Docker CLI** – The command-line interface for running Docker commands.  

#### Remote Docker Management  
- The Docker CLI **can communicate with a remote Docker engine** using the `-H` option.  
- Example: Running an Nginx container on a **remote Docker host**  
  ```sh
  docker -H=10.123.2.1:2375 run nginx
  ```  

#### How Docker Provides Isolation  

##### Namespaces in Docker  
Docker uses **namespaces** to create isolated environments for:  
- **Process IDs (PID)** – Each container thinks it has its own independent process tree.  
- **Network** – Containers have their own isolated network stack.  
- **Interprocess Communication (IPC)** – Each container has a separate IPC namespace.  
- **Mounts** – Containers have their own **filesystem namespace**.  
- **Unix Time Sharing System (UTS)** – Containers have independent hostname and time settings.  

##### Process ID (PID) Namespaces  
- In a **standard Linux system**, process IDs are **unique** across the system.  
- Containers **run as processes on the host**, but Docker gives them **virtual PIDs starting from 1**.  

Example: Running an **NGINX container**  
- Inside the container:  
  ```sh
  ps aux
  ```
  - Nginx runs as PID **1** (inside the container namespace).  
- On the host system:  
  ```sh
  ps aux | grep nginx
  ```
  - Nginx has **a different PID** on the host.  

#### Managing CPU and Memory for Containers  

By default, **containers can use unlimited system resources**, but Docker provides **Cgroups (Control Groups)** to restrict them.  

##### Limiting CPU Usage  
- Limit container CPU usage to **50% of host CPU**:  
  ```sh
  docker run --cpus="0.5" nginx
  ```  

##### Limiting Memory Usage  
- Restrict a container to **100MB RAM**:  
  ```sh
  docker run --memory="100m" nginx
  ```  

### 5.2 Docker Storage  
#### Where Does Docker Store Data?  
- When Docker is installed, it creates a default storage location:  
  ```sh
  /var/lib/docker
  ```  
- Inside this directory, Docker stores:  
  - **Images** → `/var/lib/docker/image/`  
  - **Containers** → `/var/lib/docker/containers/`  
  - **Volumes** → `/var/lib/docker/volumes/`  

#### Understanding Docker's Layered Architecture  
##### How Docker Stores Image Layers  
- Docker builds images in **layers**, where each instruction in a **Dockerfile** creates a **new layer**.  
- Example:  
  - **Base OS Layer** (Ubuntu)  
  - **Package Installation Layer** (Python, Flask)  
  - **Application Code Layer**  
  - **Entrypoint Layer**  

##### Benefits of Layered Storage  
- **Reuses existing layers** when building similar images.  
- **Speeds up builds** by caching unchanged layers.  
- **Saves disk space** by sharing layers across multiple images.  

##### Read-Only Image Layers  
- **Once built, image layers cannot be modified**.  
- To make changes, you must **create a new image** using `docker build`.  

#### How Containers Store Data
##### Writable Container Layer  
- When a container starts, Docker adds a **writable layer** on top of the image.  
- Any **new or modified files** are stored in this layer.  
- Example: If a container writes logs, they go into this **writable layer**.  

##### Copy-on-Write Mechanism  
- If a container modifies a file from the image, Docker:  
  - Copies the file from **read-only image layers** to the **writable container layer**.  
  - All future modifications are made to this **copied version**.  
- **The original image remains unchanged.**  

##### What Happens When a Container is Deleted?  
- The **writable layer is lost**, along with all data stored inside the container.  
- **Solution:** Use **volumes** to persist data.

#### Persisting Data in Docker  
##### Using Docker Volumes  
- Volumes are **stored outside the container** and persist even if the container is removed.  
- **Create a volume:**  
  ```sh
  docker volume create data_volume
  ```  
- **Mount the volume inside a container:**  
  ```sh
  docker run -v data_volume:/var/lib/mysql mysql
  ```  
  - Data written inside `/var/lib/mysql` is stored in **data_volume**.  
  - If the container is deleted, **data remains** in the volume.

##### Volume Mounting vs. Bind Mounting  
- **Volume Mounting:**  
  - Uses Docker's **default storage location** (`/var/lib/docker/volumes/`).  
  - Example:  
    ```sh
    docker run -v data_volume:/var/lib/mysql mysql
    ```  

- **Bind Mounting:**  
  - Uses an **existing directory** on the host system.  
  - Example:  
    ```sh
    docker run -v /data/mysql:/var/lib/mysql mysql
    ```  
  - **Files are stored in `/data/mysql` instead of Docker’s default volume location.**  

##### Using `--mount` Instead of `-v`  
- The newer **mount syntax** provides more control:  
  ```sh
  docker run --mount type=bind,source=/data/mysql,target=/var/lib/mysql mysql
  ```  
  - **`type=bind`** → Specifies a bind mount.  
  - **`source=/data/mysql`** → Directory on the **Docker host**.  
  - **`target=/var/lib/mysql`** → Directory inside the **container**.  

#### Storage Drivers  
##### What Are Storage Drivers?  
- Docker uses **storage drivers** to manage image layers and the writable container layer.  
- **Popular storage drivers:**  
  - **AUFS** → Default on Ubuntu  
  - **Overlay2** → Default on modern Linux  
  - **Device Mapper** → Used on CentOS/Fedora  
  - **Btrfs/ZFS** → Advanced filesystem support  

##### Choosing a Storage Driver  
- Docker **automatically selects the best driver** based on the OS.  
- You can manually **change the driver** based on performance needs.  


### 5.3 Hands-on Lab: Docker Storage
Use the link provided to access the lab and delve into the hands-on practice of the topic you just learned. [Lab 5.3](https://kodekloud.com/pages/free-labs/docker/docker-storage)

### 5.4 Graded Assignment
1. **What are the responsibilities of Docker's namespaces?**  
   - ✅ **Provide isolation between containers**  
   - ✅ **Ensure security and privacy**  

2. **If an image is made up of 5 layers, and a container based on that image adds 2 more layers, how many layers does the container have in total?**  
   - **7**  

3. **What is the role of storage drivers in Docker's layered architecture?**  
   - ✅ **They enable the layered architecture.**  

4. **What does Docker use to manage resources such as CPU and memory?**  
   - **cgroups**  

5. **Which of the following are components of Docker engine architecture?**  
   - ✅ **Docker CLI**  
   - ✅ **Docker Daemon**  

6. **What does Docker use for isolation?**  
   - **namespaces**  

7. **Which component of Docker is responsible for resource management?**  
   - ✅ **C groups**  

8. **If a Docker storage driver is responsible for handling the details of the union file system, what does it imply?**  
   - ✅ **It handles the layered structures and file systems**  

9. **If an image has 7 layers and a container based on that image adds 3 more layers, how many layers does the container have in total?**  
   - **10**  

10. **Why does Docker use a layered architecture?**  
   - ✅ **To facilitate sharing and modifying**  

---

## Module 6: Docker Network and Registry
### 6.1 Docker Networking  
#### Default Docker Networks  
When Docker is installed, it automatically creates three networks:  
- **Bridge** – The default network for containers.  
- **Host** – Containers share the host’s network stack.  
- **None** – Containers have no network access.  

#### Bridge Network (Default)  
- A **private internal network** that all containers attach to by default.  
- Containers get an **internal IP** (e.g., `172.17.x.x`).  
- Containers can **communicate with each other** using these internal IPs.  
- To expose a container externally, **port mapping** is required:  
  ```sh
  docker run -p 5000:5000 my-web-app
  ```  

#### Host Network  
- The container **shares the host network** (no isolation).  
- The container **directly uses the host’s IP address**.  
- No need for port mapping, as ports are directly accessible.  
- Example: Running a container using the **host network**  
  ```sh
  docker run --network host my-web-app
  ```  
- **Limitation**: Cannot run multiple containers on the same port.  

#### None Network  
- Containers **do not attach to any network**.  
- No external or internal communication.  
- Used for **fully isolated** applications.  
- Example:  
  ```sh
  docker run --network none my-container
  ```  

#### Creating Custom Networks  
- By default, **all containers in the bridge network can communicate**.  
- To isolate containers, **custom networks** can be created.  
- Example:  
  ```sh
  docker network create --driver bridge --subnet 192.168.1.0/24 custom_network
  ```  
- **List all networks:**  
  ```sh
  docker network ls
  ```  
- **View a container’s network settings:**  
  ```sh
  docker inspect <container_id>
  ```  
  - Shows network type, **IP address**, **MAC address**, etc.  

#### Container-to-Container Communication  
##### Using IP Addresses  
- Containers can communicate via **internal IPs** (e.g., `172.17.0.3`).  
- **Problem**: IPs may change on reboot, causing connection failures.  

##### Using Container Names (DNS Resolution)  
- Docker has a **built-in DNS server** (`127.0.0.11`).  
- Containers can resolve each other **by name**, making connections more stable.  
- Example:  
  - A **web container** can access a **database container** using its name:  
    ```sh
    mysql://db_container:3306
    ```  

#### How Docker Implements Networking  
- **Network Namespaces** – Each container gets its **own network namespace** for isolation.  
- **Virtual Ethernet Pairs (veth)** – Used to connect containers together.  

### 6.2 Hands-on Lab: Docker Networking
Use the link provided to access the lab and delve into the hands-on practice of the topic you just learned. [Lab 6.2](https://kodekloud.com/pages/free-labs/docker/docker-network) 

### 6.3 Docker Registry  
#### What is a Docker Registry?  
A **Docker registry** is a **central repository** where Docker images are **stored, managed, and distributed**.  

- **Public Registries** – Open to everyone (e.g., **Docker Hub**, **Google Container Registry (GCR)**).  
- **Private Registries** – Restricted access, used for **internal applications** (e.g., **AWS ECR, Azure ACR, GCP Artifact Registry**).  

#### Docker Image Naming Convention  
When running a container using:  
```sh
docker run nginx
```  
- **nginx** is the **image name** (or repository name).  
- Docker assumes the image is from **Docker Hub** (`docker.io/library/nginx`).  
- The **full image name format** is:  
  ```sh
  <registry>/<username_or_org>/<image_name>:<tag>
  ```
  Example:  
  ```sh
  docker.io/library/nginx:latest  # Official Docker Hub image
  docker.io/myuser/myapp:v1.0     # Custom Docker Hub image
  gcr.io/myproject/myapp:v1.0     # Google Container Registry
  ```
  
#### Pulling and Pushing Images from Docker Hub  

##### Pulling an Image  
To **pull an image** from Docker Hub:  
```sh
docker pull nginx
```

##### Pushing an Image to Docker Hub  
1. **Login to Docker Hub**  
   ```sh
   docker login
   ```  
2. **Tag the image with your Docker Hub username**  
   ```sh
   docker tag myapp myuser/myapp:v1.0
   ```  
3. **Push the image to Docker Hub**  
   ```sh
   docker push myuser/myapp:v1.0
   ```  

#### Using Private Registries  
- Cloud providers like **AWS, Azure, and GCP** offer **private Docker registries**.  
- To use a **private registry**, you must **authenticate** first:  
  ```sh
  docker login my-private-registry.com
  ```  
- Running an image from a **private registry**:  
  ```sh
  docker run my-private-registry.com/myuser/myapp:v1.0
  ```  

#### Hosting Your Own Private Docker Registry  
If you need an **on-premise private registry**, you can **deploy your own registry** using Docker itself.  

##### Running a Private Registry Locally  
```sh
docker run -d -p 5000:5000 --name my-registry registry:2
```  
- This starts a **local registry** on **port 5000**.  

##### Tagging and Pushing an Image to a Private Registry  
1. **Tag the image with the local registry URL**  
   ```sh
   docker tag myapp localhost:5000/myapp:v1.0
   ```  
2. **Push the image to the private registry**  
   ```sh
   docker push localhost:5000/myapp:v1.0
   ```  
3. **Pull the image from the private registry**  
   ```sh
   docker pull localhost:5000/myapp:v1.0
   ```  

### 6.4 Hands-on Lab: Docker Registry
Use the link provided to access the lab and delve into the hands-on practice of the topic you just learned. [Lab 6.4](https://kodekloud.com/pages/free-labs/docker/docker-registry)

### 6.5 Graded Assignment
1. **Which of the following are default networks created by Docker?**  
   - ✅ **bridge**  
   - ✅ **none**  
   - ✅ **host**  

2. **What is the default network type when you run a new container in Docker if you don't specify a network?**  
   - **bridge**  

3. **What is the impact on a running container when it's disconnected from a network?**  
   - ✅ **The container will lose access to the network resources.**  

4. **What keyword is used in a Docker command to attach a container to a network?**  
   - **connect**  

5. **What is the Docker command to disconnect a container from a network?**  
   - **docker network disconnect**  

6. **What will happen if you attempt to delete a Docker network that has containers attached to it?**  
   - ✅ **The network will not be deleted and Docker will display an error message.**  

7. **In which scenarios would you require more than one custom network in Docker?**  
   - ✅ **When running containers that should be isolated from each other.**  

8. **Which of the following are true when working with Docker networks?**  
   - ✅ **You can't delete a network if any container is connected to it.**  
   - ✅ **Containers can be connected to more than one network.**  

9. **What is the command to create a custom network in Docker?**  
   - **docker network create**  

10. **Which Docker command allows you to connect an existing container to a network?**  
   - **docker network connect**

---

## Certificate of Completion
To access my certificate, follow this link to my Coursera account:
[My Certificate on Coursera](https://coursera.org/share/ddb68cb233e096a79cc6a8c80049d235)

### Next Steps After This Docker Course  
Now that you've completed the **Docker Basics for DevOps** course, here are some **next steps** to deepen your Docker expertise and apply your knowledge in real-world scenarios.  

### 1️⃣ Master Docker Compose  
[Docker Compose](./docker-compose.md) is a tool for defining and managing multi-container applications using a single YAML file.  
- Learn how to **define services, networks, and volumes** in `docker-compose.yml`.  
- Practice **running multiple containers** (e.g., web app + database).  
- Recommended learning:  
  - Official Docs → [Docker Compose](https://docs.docker.com/compose/)  
  - Hands-on: Deploy a **WordPress + MySQL stack** with Docker Compose.  

### 2️⃣ Learn Docker Swarm or Kubernetes  
For container **orchestration**, you need to choose between **Docker Swarm** and **Kubernetes**.  
- **Docker Swarm** – Lightweight built-in orchestration (easier to set up).  
- **Kubernetes (K8s)** – Industry-standard, scalable orchestration platform.  

Next Steps:  
- **Docker Swarm** → Learn about **services, stacks, and load balancing**.  
- **Kubernetes** → Learn about **Pods, Deployments, and Helm Charts**.  
- Recommended learning:  
  - **Docker Swarm:** [Swarm Mode Docs](https://docs.docker.com/engine/swarm/)  
  - **Kubernetes:** [Kubernetes Basics](https://kubernetes.io/docs/tutorials/kubernetes-basics/)  

### 3️⃣ Work with Docker in Production  
- Learn about **best practices for running Docker in production**.  
- Explore **logging and monitoring** tools:  
  - **ELK Stack (Elasticsearch, Logstash, Kibana)**  
  - **Prometheus + Grafana for metrics**.  
- Understand **Docker security best practices**:  
  - Run containers as **non-root users**.  
  - Use **multi-stage builds** to keep images lightweight.  
  - Scan images with **Trivy or Docker Scout**.  

### 4️⃣ Explore Containerized CI/CD Pipelines  
Integrate Docker into a **CI/CD pipeline** with tools like:  
- **Jenkins + Docker** → Build and deploy containers automatically.  
- **GitHub Actions** → Automate Docker builds and deployments.  
- **ArgoCD** → Kubernetes-native GitOps for deployments.  
- Hands-on Task:  
  - Set up a **GitHub Actions pipeline** to build and push Docker images to Docker Hub.  

### 5️⃣ Learn Cloud-Native Docker Deployments  
Deploy Docker applications on **cloud providers**:  
- **AWS ECS (Elastic Container Service)**  
- **Google Cloud Run**  
- **Azure Container Instances (ACI)**  
- **AWS EKS / GKE / AKS for Kubernetes**  

Recommended learning:  
- **AWS Fargate** (Serverless container service).  
- **Terraform + Docker** for infrastructure as code.  

### 6️⃣ Get Docker Certified (Optional)  
If you want to get certified, check out the **Docker Certified Associate (DCA)** exam.  
- Covers **Docker Engine, Networking, Security, Storage, and Orchestration**.  
- Study guide: [Docker Certification Guide](https://www.mirantis.com/certification/docker-certified-associate/)  

### 7️⃣ Contribute to Open Source / Real Projects  
- Work on **Docker-based projects** (GitHub, personal projects, DevOps roles).  
- Contribute to **open-source repositories** that use Docker.  
- Build and document your **own Docker images** and push them to Docker Hub.