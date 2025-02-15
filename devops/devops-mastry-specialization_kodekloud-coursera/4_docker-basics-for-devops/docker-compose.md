# Learning Docker Compose  

[Docker Compose](https://docs.docker.com/compose/) is a powerful tool for defining and running multi-container Docker applications. In [*Learning Docker Compose*](https://www.linkedin.com/learning/learning-docker-compose/), instructor [*Nicole Rifkin*](https://www.linkedin.com/learning/instructors/nicole-rifkin) breaks down its core concepts, explaining how it simplifies local development by managing complex service dependencies. The course covers Docker Compose’s strengths, its limitations, and practical use cases—helping developers and DevOps professionals streamline workflows, automate service management, and improve collaboration across teams.  

In DevOps, containerization is crucial for building scalable, reproducible, and efficient development environments. Docker Compose simplifies multi-container orchestration by allowing teams to define services, networks, and volumes in a single YAML file. This eliminates inconsistencies between development, testing, and production environments, making deployments faster and more reliable. With its ability to manage dependencies and scale services effortlessly, Docker Compose is an essential tool for DevOps engineers working with containerized applications.


### Content
- [Learning Docker Compose](#learning-docker-compose)
    - [Content](#content)
  - [1. Introduction](#1-introduction)
    - [1.1 Implement Docker Compose](#11-implement-docker-compose)
      - [Key Benefits of Docker Compose:](#key-benefits-of-docker-compose)
    - [1.2 What You Should Know](#12-what-you-should-know)
  - [2. Understanding Docker Compose](#2-understanding-docker-compose)
    - [2.1 Compose in the Docker Tool Ecosystem](#21-compose-in-the-docker-tool-ecosystem)
      - [Why Docker Compose?](#why-docker-compose)
      - [What is Docker Compose?](#what-is-docker-compose)
      - [Key Features of Docker Compose:](#key-features-of-docker-compose)
      - [Important Clarifications:](#important-clarifications)
    - [2.2 Docker Compose Basics](#22-docker-compose-basics)
      - [**What is Configuration as Code?**](#what-is-configuration-as-code)
      - [**Declarative vs. Procedural Approach**](#declarative-vs-procedural-approach)
      - [**Key Advantages of Docker Compose as Configuration as Code**](#key-advantages-of-docker-compose-as-configuration-as-code)
    - [2.3 Where to Use Docker Compose](#23-where-to-use-docker-compose)
      - [**Ideal Use Cases for Docker Compose**](#ideal-use-cases-for-docker-compose)
      - [**Limitations of Docker Compose**](#limitations-of-docker-compose)
      - [**Example Scenario – Why Compose is Not Ideal for Production**](#example-scenario--why-compose-is-not-ideal-for-production)
      - [**Production Alternatives to Docker Compose**](#production-alternatives-to-docker-compose)
  - [3. Getting Started With Docker Compose](#3-getting-started-with-docker-compose)
    - [3.1 Writing a Docker Compose Configuration](#31-writing-a-docker-compose-configuration)
      - [**Step 1: Creating the Configuration File**](#step-1-creating-the-configuration-file)
      - [**Step 2: Defining Services in the YAML File**](#step-2-defining-services-in-the-yaml-file)
      - [**Example: Basic `docker-compose.yaml` File**](#example-basic-docker-composeyaml-file)
      - [**Understanding Key Keywords in Docker Compose:**](#understanding-key-keywords-in-docker-compose)
      - [**Service Naming in Docker Compose**](#service-naming-in-docker-compose)
    - [3.2 Core Docker Compose Commands](#32-core-docker-compose-commands)
      - [**How to Use Docker Compose Commands**](#how-to-use-docker-compose-commands)
      - [**Starting Services**](#starting-services)
      - [**Building and Running Services Individually**](#building-and-running-services-individually)
      - [**Stopping and Removing Services**](#stopping-and-removing-services)
      - [**Restarting Services**](#restarting-services)
      - [**Getting Help**](#getting-help)
      - [**Summary of Core Commands**](#summary-of-core-commands)
  - [4. Docker Compose Core Features](#4-docker-compose-core-features)
    - [4.1 Build Arguments](#41-build-arguments)
      - [Difference Between Build Arguments and Environment Variables](#difference-between-build-arguments-and-environment-variables)
      - [Using Build Arguments in Docker Compose](#using-build-arguments-in-docker-compose)
        - [Example: Defining Build Arguments](#example-defining-build-arguments)
      - [Using Environment Variables in Docker Compose](#using-environment-variables-in-docker-compose)
        - [Example: Defining Environment Variables](#example-defining-environment-variables)
      - [Passing Host Machine Environment Variables](#passing-host-machine-environment-variables)
        - [Example: Using Host Environment Variables](#example-using-host-environment-variables)
      - [Using an Environment File (`env_file`)](#using-an-environment-file-env_file)
        - [Example: Using an `.env` File](#example-using-an-env-file)
      - [Summary](#summary)
    - [4.2 Mounting Volumes](#42-mounting-volumes)
      - [**What Are Volumes in Docker?**](#what-are-volumes-in-docker)
      - [**Basic Syntax for Mounting a Volume in Docker Compose**](#basic-syntax-for-mounting-a-volume-in-docker-compose)
      - [**Understanding the Components of a Volume Mount**](#understanding-the-components-of-a-volume-mount)
      - [**Example: Mounting a Persistent Volume for MySQL**](#example-mounting-a-persistent-volume-for-mysql)
      - [**Different Ways to Specify a Volume Path**](#different-ways-to-specify-a-volume-path)
      - [**Summary of Volume Configuration**](#summary-of-volume-configuration)
    - [4.3 Named Volumes](#43-named-volumes)
      - [**What Are Named Volumes?**](#what-are-named-volumes)
      - [**Advantages of Named Volumes**](#advantages-of-named-volumes)
      - [**Defining a Named Volume in `docker-compose.yaml`**](#defining-a-named-volume-in-docker-composeyaml)
        - [**Short Syntax Example**](#short-syntax-example)
        - [**Long Syntax Example** (Available in Docker Compose v3.2+)](#long-syntax-example-available-in-docker-compose-v32)
      - [**Removing Named Volumes**](#removing-named-volumes)
      - [**Common Issues with Unmanaged Volumes**](#common-issues-with-unmanaged-volumes)
      - [**Summary**](#summary-1)
    - [4.4 Exposing Ports](#44-exposing-ports)
      - [**Why Expose Ports in Docker?**](#why-expose-ports-in-docker)
      - [**Basic Port Mapping Syntax**](#basic-port-mapping-syntax)
      - [**Example: Exposing Ports in `docker-compose.yaml`**](#example-exposing-ports-in-docker-composeyaml)
      - [**Port Collision and How to Avoid It**](#port-collision-and-how-to-avoid-it)
      - [**Mapping Multiple Ports**](#mapping-multiple-ports)
      - [**YAML Parsing Issue: Why Quote Port Numbers?**](#yaml-parsing-issue-why-quote-port-numbers)
      - [**Summary of Port Exposing in Docker Compose**](#summary-of-port-exposing-in-docker-compose)
    - [4.5 Enforcing Start-Up Order](#45-enforcing-start-up-order)
      - [**Why Enforce Start-Up Order?**](#why-enforce-start-up-order)
      - [**Using `depends_on` in Docker Compose**](#using-depends_on-in-docker-compose)
        - [**Example: Storefront and Database Dependency**](#example-storefront-and-database-dependency)
      - [**Limitations of `depends_on`**](#limitations-of-depends_on)
        - [**Example: Using Health Checks for Start-Up Order**](#example-using-health-checks-for-start-up-order)
      - [**Handling More Complex Dependencies**](#handling-more-complex-dependencies)
      - [**Summary of Enforcing Start-Up Order**](#summary-of-enforcing-start-up-order)
  - [5. Dynamic Configurations in Docker Compose](#5-dynamic-configurations-in-docker-compose)
    - [5.1 Named Subsets of Services](#51-named-subsets-of-services)
      - [**What Are Named Subsets (Service Profiles) in Docker Compose?**](#what-are-named-subsets-service-profiles-in-docker-compose)
      - [**Use Case: Dividing Services by Team**](#use-case-dividing-services-by-team)
      - [**Defining Service Profiles in `docker-compose.yaml`**](#defining-service-profiles-in-docker-composeyaml)
      - [**Running Services Using Profiles**](#running-services-using-profiles)
        - [**Run Storefront-Related Services**](#run-storefront-related-services)
        - [**Run Scheduler-Related Services**](#run-scheduler-related-services)
        - [**Run Both Storefront and Scheduler Services**](#run-both-storefront-and-scheduler-services)
        - [**Stop Services with Profiles**](#stop-services-with-profiles)
      - [**Advantages of Using Service Profiles**](#advantages-of-using-service-profiles)
      - [**Summary**](#summary-2)
    - [5.2 Multiple Compose Files](#52-multiple-compose-files)
      - [**Why Use Multiple Docker Compose Files?**](#why-use-multiple-docker-compose-files)
      - [**Use Case for Multiple Compose Files**](#use-case-for-multiple-compose-files)
      - [**How Docker Compose Handles Multiple Files**](#how-docker-compose-handles-multiple-files)
        - [**Example: Default Merging Behavior**](#example-default-merging-behavior)
      - [**Defining Custom Override Files**](#defining-custom-override-files)
      - [**Running Docker Compose with Multiple Files**](#running-docker-compose-with-multiple-files)
        - [**Run Local Development Configuration**](#run-local-development-configuration)
        - [**Run Staging Configuration**](#run-staging-configuration)
        - [**Run Multiple Override Files Together**](#run-multiple-override-files-together)
      - [**Advantages of Multiple Compose Files**](#advantages-of-multiple-compose-files)
      - [**Summary of Multiple Compose Files**](#summary-of-multiple-compose-files)
    - [5.3 Environment Variables](#53-environment-variables)
      - [**Why Use Environment Variables in Docker Compose?**](#why-use-environment-variables-in-docker-compose)
      - [**Using Environment Variables in `docker-compose.yaml`**](#using-environment-variables-in-docker-composeyaml)
        - [**Example: Configurable MySQL Tag**](#example-configurable-mysql-tag)
      - [**Setting Default Values for Environment Variables**](#setting-default-values-for-environment-variables)
        - [**Example: Default to `latest` if `TAG` is not set**](#example-default-to-latest-if-tag-is-not-set)
      - [**Using an `.env` File for Environment Variables**](#using-an-env-file-for-environment-variables)
      - [**Using a Custom Environment File**](#using-a-custom-environment-file)
        - [**Example: Using a Custom Environment File**](#example-using-a-custom-environment-file)
      - [**Overriding Environment Variables**](#overriding-environment-variables)
        - [**Example:**](#example)
      - [**Enforcing Required Environment Variables**](#enforcing-required-environment-variables)
        - [**Example: Requiring `TAG` to Be Set**](#example-requiring-tag-to-be-set)
      - [**Summary of Environment Variable Usage in Docker Compose**](#summary-of-environment-variable-usage-in-docker-compose)
  - [6. Conclusion](#6-conclusion)
    - [Next Steps](#next-steps)
      - [**Further Learning \& Resources**](#further-learning--resources)
      - [**Stay Updated**](#stay-updated)



## 1. Introduction
### 1.1 Implement Docker Compose 
Docker Compose is a powerful tool that simplifies local development by managing multi-container Docker applications. It helps developers efficiently define and run services, reducing complexity and improving workflow.  

#### Key Benefits of Docker Compose:  
- **Simplifies Local Development** – Automates the setup of multiple containers.  
- **Enhances Developer Productivity** – Reduces manual configuration and environment inconsistencies.  
- **Solves Docker Pain Points** – Streamlines service dependencies and networking.  
- **Adds Flexibility** – Enables easy scaling and service modifications.  

This course will cover the core functionalities of Docker Compose with real-world examples, helping you leverage its capabilities effectively.

### 1.2 What You Should Know    
Before starting this course, you should have a basic understanding of:  
- **Containerization Concepts** – Familiarity with software containerization tools.  
- **Docker Fundamentals** – Understanding the difference between:  
  - **Docker Image** – A blueprint for creating containers.  
  - **Docker Container** – A running instance of an image.  
- **Storage Volumes & Port Mappings** – These concepts will be briefly reviewed when relevant, but prior knowledge is helpful.  

If you're new to Docker, it's recommended to take an introductory course on core Docker concepts before diving into Docker Compose.



## 2. Understanding Docker Compose
### 2.1 Compose in the Docker Tool Ecosystem  
#### Why Docker Compose?  
In real-world applications, software systems often consist of multiple Dockerized services with complex dependencies, such as:  
- **Multiple Services with Unique Configurations** – Each service may have its own environment settings.  
- **Service Dependencies** – Some services may rely on others and need to start in a specific order.  
- **Microservices Architecture** – Can involve **hundreds** of containers, making manual management impractical.  

#### What is Docker Compose?  
Docker Compose simplifies multi-container management by allowing developers to define configurations in a **single YAML file** instead of manually starting each container.  

#### Key Features of Docker Compose:  
- **Declarative Configuration** – Uses a YAML file (`docker-compose.yml`) to define services, networks, and volumes.  
- **Single Command Execution** – Instead of running multiple `docker run` commands, a single `docker-compose up` can start an entire stack.  
- **Standard with Docker** – Comes included with most Docker distributions.  

#### Important Clarifications:  
- **Docker Compose is not an additional Docker feature** – It doesn’t introduce new capabilities, but it makes managing existing Docker functionality much easier.  
- **Scaffolding for Configurations** – Acts like a markdown language to structure service definitions.  

This course will provide detailed examples of how to leverage Docker Compose in **any** Docker-based system efficiently.

### 2.2 Docker Compose Basics  
#### **What is Configuration as Code?**  
Configuration as code refers to defining system settings (e.g., persistent data locations, service connections, environment variables) in a structured file rather than manually configuring each component.  

#### **Declarative vs. Procedural Approach**  
- **Procedural Configuration (Traditional Docker CLI)**  
  - Requires executing a sequence of commands in a specific order.  
  - Implicit assumptions about the environment state can lead to failures.  
  - Example issue: Running a container that is already active results in errors unless the old container is manually stopped.  

- **Declarative Configuration (Docker Compose)**  
  - Defines the **desired state** rather than individual steps.  
  - Ensures the system reaches the same end state regardless of how many times the configuration is applied.  
  - Automatically manages startup and cleanup operations.  

#### **Key Advantages of Docker Compose as Configuration as Code**  
✅ **Version Control** – Store configuration in Git, making it easy to track changes and revert if needed.  
✅ **Self-Documenting** – Eliminates the need to remember complex CLI commands used months ago.  
✅ **Environment Management** – Separate configuration files for different environments (e.g., local, testing, production) for better flexibility.  

With Docker Compose, managing multiple containerized environments becomes seamless, reducing manual overhead and increasing reliability.

### 2.3 Where to Use Docker Compose  
#### **Ideal Use Cases for Docker Compose**  
Docker Compose is designed for managing containers **on a single host** and is best suited for:  
✅ **Local Development** – Simplifies setting up a complete development environment with multiple services.  
✅ **Staging Servers** – Allows testing applications in an environment similar to production.  
✅ **Continuous Integration (CI) Testing** – Enables running tests in an isolated, reproducible environment.  

#### **Limitations of Docker Compose**  
🚫 **Not Designed for Distributed Systems** – Cannot manage containers across multiple servers.  
🚫 **Lacks Auto-Scaling** – Cannot independently scale services based on demand.  

#### **Example Scenario – Why Compose is Not Ideal for Production**  
Imagine a business, **KinetEco**, which operates:  
- A **storefront** for selling solar panels.  
- A **scheduler** for booking installation services.  

If a promotional sale increases web traffic to the storefront, the only way to scale with Docker Compose would be to run **multiple instances of the entire configuration**. This means the scheduler would also scale unnecessarily, wasting resources.  

#### **Production Alternatives to Docker Compose**  
For managing production environments with scaling and multi-host deployments, use:  
- [**Docker Swarm**](https://docs.docker.com/engine/swarm/) – Lightweight built-in Docker orchestration for scaling services.  
- [**Kubernetes**](https://kubernetes.io/) – A robust, industry-standard container orchestration platform with auto-scaling and service management.  

While Docker Compose can be used in production, it is **not the best choice** for handling dynamic, high-traffic applications. Instead, it is a powerful tool for **development and testing** environments.


## 3. Getting Started With Docker Compose
### 3.1 Writing a Docker Compose Configuration  

#### **Step 1: Creating the Configuration File**  
- Every Docker Compose configuration is written in **YAML format** and saved as:  
  ```
  docker-compose.yaml
  ```
- [**YAML (Yet Another Markup Language)**](https://www.cloudbees.com/blog/yaml-tutorial-everything-you-need-get-started) is commonly used for data serialization (the process of converting data into a format that can be stored, transmitted, and reconstructed later. It's a standard way to capture objects into a sharable format) and configuration files, similar to JSON.

#### **Step 2: Defining Services in the YAML File**  
The `services` keyword is used to list all the containers required for the application.  
Each service is indented under `services`, using **either spaces or tabs** (consistent indentation is required).  

#### **Example: Basic `docker-compose.yaml` File**  
This example defines two services:  
- **`storefront`** (a backend service built from a local Dockerfile).  
- **`database`** (a MySQL container pulled from Docker Hub).  

```yaml
version: '3'  # Specifies Docker Compose version

services:
  storefront:  # Service name (can be any name)
    build: .  # Builds the image from a Dockerfile in the current directory

  database:
    image: mysql  # Uses an official MySQL image from Docker Hub
```

#### **Understanding Key Keywords in Docker Compose:**  
✅ **`version`** – Defines the Docker Compose file format version (e.g., `'3'`).  
✅ **`services`** – Declares all the containers in the application.  
✅ **`build: .`** – Tells Docker Compose to build the container from a local **Dockerfile** in the same directory.  
✅ **`image: mysql`** – Pulls the pre-built **MySQL image** from Docker Hub.  

#### **Service Naming in Docker Compose**  
- Services **can have any name** but should be meaningful (e.g., `storefront` instead of `Alice`).  
- Service names help **developers identify roles** within a system.  

### 3.2 Core Docker Compose Commands  
#### **How to Use Docker Compose Commands**  
To run Docker Compose commands, first navigate to the directory containing your `docker-compose.yaml` file in the terminal.  
All commands start with:  
```sh
docker-compose <command>
```

#### **Starting Services**  
- **`docker-compose up`**  
  - Builds images, creates containers, and starts all services defined in `docker-compose.yaml`.  
  - This is the **one-step** command for launching everything.  
  - Example:  
    ```sh
    docker-compose up
    ```
- **`docker-compose up <service-name>`**  
  - Starts only a specific service and its dependencies.  
  - Example:  
    ```sh
    docker-compose up storefront
    ```

#### **Building and Running Services Individually**  
If you want to manually perform each step instead of using `up`:  
- **`docker-compose build`** – Builds images for all services.  
- **`docker-compose create`** – Creates but does not start containers.  
- **`docker-compose start`** – Starts existing (previously created) containers.  

Example:  
```sh
docker-compose build
docker-compose create
docker-compose start
```

#### **Stopping and Removing Services**  
- **`docker-compose stop`**  
  - Stops running containers but keeps them available for restarting.  
  - Useful for saving system resources without removing anything.  
  - Example:  
    ```sh
    docker-compose stop
    ```
- **`docker-compose down`**  
  - Stops and **removes** all containers and networks created by `docker-compose up`.  
  - Recommended when making changes to the configuration.  
  - Example:  
    ```sh
    docker-compose down
    ```

#### **Restarting Services**  
- **`docker-compose restart`**  
  - Stops and then starts all running containers (equivalent to `stop` followed by `start`).  
  - Useful for fixing random system errors.  
  - Example:  
    ```sh
    docker-compose restart
    ```

#### **Getting Help**  
- **`docker-compose --help`**  
  - Displays a list of all available Docker Compose commands and descriptions.  
  - Example:  
    ```sh
    docker-compose --help
    ```

#### **Summary of Core Commands**  
| Command | Description |
|---------|-------------|
| `docker-compose up` | Starts all services in the `docker-compose.yaml` file. |
| `docker-compose up <service>` | Starts only a specific service and its dependencies. |
| `docker-compose build` | Builds images for all services. |
| `docker-compose create` | Creates containers without starting them. |
| `docker-compose start` | Starts previously created containers. |
| `docker-compose stop` | Stops running containers but keeps them available. |
| `docker-compose down` | Stops and **removes** all services and networks. |
| `docker-compose restart` | Stops and starts all running containers. |
| `docker-compose --help` | Displays available commands and their descriptions. |

These commands are essential for managing Docker services efficiently in a **local development environment**.


## 4. Docker Compose Core Features
### 4.1 Build Arguments  
#### Difference Between Build Arguments and Environment Variables  
Both **build arguments** and **environment variables** make Docker builds more flexible, but they serve different purposes:  

| Feature | Available When? | Accessible Inside the Container? | Common Use Case |
|---------|----------------|---------------------------------|----------------|
| **Build Arguments (`args`)** | Build time | ❌ No | Specifying tool versions, cloud region configurations |
| **Environment Variables (`environment`)** | Runtime | ✅ Yes | Configuring app settings, credentials, feature flags |

#### Using Build Arguments in Docker Compose  
To specify a **build argument** in `docker-compose.yaml`, the build path syntax must be changed from shorthand to an explicit format.  

##### Example: Defining Build Arguments  
This example defines an argument for specifying a **cloud region**:  

```yaml
version: '3'

services:
  storefront:
    build:
      context: .  # Explicit build context
      args:
        - CLOUD_REGION=us-east-1  # Define a build argument
```

- `context: .` → Specifies the directory where the `Dockerfile` is located.  
- `args:` → Defines the **build arguments** as key-value pairs.  
- These **arguments are only available during the image build process** and cannot be accessed inside a running container.  

#### Using Environment Variables in Docker Compose  
Environment variables are used **at runtime** to configure a running container.  

##### Example: Defining Environment Variables  
This example passes an environment variable `RUNTIME_ENV` to a service:  

```yaml
version: '3'

services:
  storefront:
    image: my-storefront
    environment:
      - RUNTIME_ENV=dev  # Set runtime environment variable
```

- `environment:` → Defines environment variables that the container can access.  
- These variables **can be accessed within the running container** (e.g., by an application inside the container).  

#### Passing Host Machine Environment Variables  
If an environment variable is already set on the **host machine**, it can be passed to the container **without specifying a value** in `docker-compose.yaml`.  

##### Example: Using Host Environment Variables  

1️⃣ Set the variable on the host machine:  
```sh
export RUNTIME_ENV=dev
```
2️⃣ Define it in `docker-compose.yaml` **without a value**:  
```yaml
version: '3'

services:
  storefront:
    image: my-storefront
    environment:
      - RUNTIME_ENV  # Uses the value from the host machine
```
🚀 **Effect**: If `RUNTIME_ENV=dev` is set on the host, the container will inherit `RUNTIME_ENV=dev`.

#### Using an Environment File (`env_file`)  
Instead of listing all environment variables manually, Docker Compose allows using an **environment file**.  

##### Example: Using an `.env` File  
📁 **File: `mysql_env_vars.env`**  
```sh
MYSQL_ROOT_PASSWORD=rootpassword
MYSQL_USER=myuser
MYSQL_PASSWORD=mypassword
MYSQL_DATABASE=mydatabase
```

📄 **`docker-compose.yaml` File:**  
```yaml
version: '3'

services:
  database:
    image: mysql
    env_file:
      - mysql_env_vars.env  # Load variables from an external file
```

📌 **Why Use `env_file`?**  
- **Keeps credentials & secrets separate** from the main configuration.  
- **Easier to manage and update** environment variables.  
- **More secure** than hardcoding sensitive information in `docker-compose.yaml`.  

#### Summary  
| Feature | Syntax | Example Usage |
|---------|--------|--------------|
| **Build Arguments** | `args` | `args: CLOUD_REGION=us-east-1` (Available at build time) |
| **Environment Variables** | `environment` | `environment: RUNTIME_ENV=dev` (Available at runtime) |
| **Host Environment Variables** | Omit value in `environment` | `environment: RUNTIME_ENV` (Uses host value) |
| **Environment File** | `env_file` | `env_file: - mysql_env_vars.env` (Loads from file) |

Using **build arguments** and **environment variables** properly makes Docker configurations more **dynamic, portable, and maintainable**.


### 4.2 Mounting Volumes  

#### **What Are Volumes in Docker?**  
Volumes are used for **persistent storage** in Docker, ensuring that data remains even after a container stops or is removed.  

#### **Basic Syntax for Mounting a Volume in Docker Compose**  
A volume must specify a **target**, and typically includes a **source** and an **access mode**.  
```yaml
services:
  database:
    image: mysql
    volumes:
      - <source>:<target>:<mode>
```

#### **Understanding the Components of a Volume Mount**  
- **Target (`<target>`)**  
  - The directory **inside the container** where the volume data is mounted.  
  - This must be defined, or the configuration will fail.  
  - Example (for MySQL, which stores data in `/var/lib/mysql`):  
    ```yaml
    volumes:
      - ./mysql_data:/var/lib/mysql
    ```

- **Source (`<source>`)**  
  - The **host machine directory** where data is stored.  
  - If not provided, Docker Compose will create a default volume.  
  - Example (mounting a folder from the host machine):  
    ```yaml
    volumes:
      - ./mysql:/var/lib/mysql
    ```

- **Access Mode (`<mode>`)**  
  - Defines whether the container can modify the volume.  
  - **`rw` (read-write, default)** – Allows reading and writing.  
  - **`ro` (read-only)** – Allows only reading data.  
  - Example (read-only mode for a data dump used to seed a database):  
    ```yaml
    volumes:
      - ./mysql_dump:/docker-entrypoint-initdb.d:ro
    ```

#### **Example: Mounting a Persistent Volume for MySQL**  
```yaml
version: '3'

services:
  database:
    image: mysql
    volumes:
      - ./mysql_data:/var/lib/mysql  # Mounts local folder `mysql_data` to store MySQL data
      - ./mysql_dump:/docker-entrypoint-initdb.d:ro  # Mounts a SQL dump as read-only
```

#### **Different Ways to Specify a Volume Path**  
Docker Compose follows **Bash directory path standards**, so you can define paths in different ways:  
- **Relative Path**:  
  ```yaml
  volumes:
    - ./mysql:/var/lib/mysql  # Refers to `mysql` folder in the same directory as `docker-compose.yaml`
  ```
- **Parent Directory (`..`)**:  
  ```yaml
  volumes:
    - ../data:/var/lib/mysql  # Refers to `data` folder one level above `docker-compose.yaml`
  ```
- **Absolute Path**:  
  ```yaml
  volumes:
    - /home/user/mysql:/var/lib/mysql  # Uses a full system path
  ```

#### **Summary of Volume Configuration**  
| Component | Definition | Example |
|-----------|-----------|---------|
| **Target** | Inside container path | `/var/lib/mysql` |
| **Source** | Host machine path | `./mysql_data` |
| **Access Mode** | `rw` (default) or `ro` | `./mysql_dump:/docker-entrypoint-initdb.d:ro` |

Using volumes correctly helps maintain **data persistence**, simplifies **database management**, and ensures **files remain even after container restarts**.

### 4.3 Named Volumes  
#### **What Are Named Volumes?**  
Named volumes allow Docker Compose to **manage the volume lifecycle** along with containers. Instead of creating a **randomly named** volume on every `docker-compose up`, named volumes persist across container restarts and can be explicitly referenced.

#### **Advantages of Named Volumes**  
✅ **Persistent Storage Across Container Restarts** – Data is not lost when containers are recreated.  
✅ **Avoids Accidental Data Loss** – Automatically copies volume data from old containers to new ones.  
✅ **Prevents Storage Bloat** – Can be cleaned up easily using `docker-compose down --volumes`.  
✅ **Easier to Reference and Manage** – Named volumes can be shared between multiple services.  

#### **Defining a Named Volume in `docker-compose.yaml`**  

##### **Short Syntax Example**  
```yaml
version: '3'

services:
  database:
    image: mysql
    volumes:
      - kineteco_data:/var/lib/mysql  # Use a named volume instead of a host directory

volumes:
  kineteco_data:  # Declare the named volume under the `volumes` section
```
📌 **Key Points:**  
- The volume **`kineteco_data`** is **defined globally** under `volumes`.  
- Instead of a host path (`./mysql_data:/var/lib/mysql`), the **named volume is referenced directly** in `services`.  

##### **Long Syntax Example** (Available in Docker Compose v3.2+)  
```yaml
version: '3.8'

services:
  database:
    image: mysql
    volumes:
      - type: volume
        source: kineteco_data
        target: /var/lib/mysql

volumes:
  kineteco_data:
    name: kineteco_data  # Explicitly assigns a name to the volume
```
📌 **Key Points:**  
- `type: volume` → Specifies that it's a **Docker-managed volume** (not a bind mount).  
- `source: kineteco_data` → Name of the volume.  
- `target: /var/lib/mysql` → Directory inside the container.  

#### **Removing Named Volumes**  
By default, `docker-compose down` does **not** delete volumes.  
To remove named volumes **when tearing down services**, use:  
```sh
docker-compose down --volumes
```
🚀 **Why?** – Prevents accumulating unused volumes that take up disk space.  

#### **Common Issues with Unmanaged Volumes**  
❌ Without named volumes, **Docker creates a new volume every time** `docker-compose up` runs.  
❌ Over time, **unused volumes accumulate**, causing **disk space issues**.  
❌ Example: A developer found **40GB of unused volumes** on their machine due to lack of named volume cleanup.  

#### **Summary**  

| Feature | Named Volume (`volumes:`) | Unnamed Volume (`./local/path`) |
|---------|-----------------|----------------|
| **Lifecycle Management** | Managed by Docker Compose | Created each time `up` runs |
| **Data Persistence** | Survives container restarts | Lost if container is removed |
| **Explicit Naming** | Yes, easy to track | No, random names |
| **Cleanup with `--volumes`** | Yes, can be removed easily | Accumulates unless manually deleted |

Using **named volumes** ensures **persistent, organized, and efficient** data storage management in Docker Compose.

### 4.4 Exposing Ports  
#### **Why Expose Ports in Docker?**  
By default, containers are **isolated** from the outside world. To allow communication between:  
- **Containers and external systems (host machine, internet, users)**  
- **Containers within the same Docker network**  

Ports need to be explicitly **mapped** between the **host machine** and the **container**.  

#### **Basic Port Mapping Syntax**  
The syntax for defining ports in **Docker Compose**:  
```yaml
ports:
  - "host_port:container_port"
```
Think of it as **"from host port to container port."**

#### **Example: Exposing Ports in `docker-compose.yaml`**  
```yaml
version: '3'

services:
  storefront:
    image: storefront-app
    ports:
      - "80:80"  # Maps port 80 on the host to port 80 in the container

  scheduler:
    image: scheduler-app
    ports:
      - "81:80"  # Maps port 81 on the host to port 80 in the container (avoiding conflicts)
```
📌 **Key Takeaways:**  
- The **storefront service** is accessible on `http://localhost:80`.  
- The **scheduler service** is accessible on `http://localhost:81`, even though it runs on port **80 inside the container** (avoiding a conflict).  

#### **Port Collision and How to Avoid It**  
If two containers try to bind to the **same host port**, it causes a **port collision**.  
- Example of a **conflict** (❌ **Not Allowed**):  
  ```yaml
  services:
    storefront:
      ports:
        - "80:80"
    scheduler:
      ports:
        - "80:80"  # Conflict! Both services cannot use the same host port
  ```
- **Solution:**  
  - **Use different host ports** (e.g., **80:80** for one service, **81:80** for another).  

#### **Mapping Multiple Ports**  
Some applications use multiple ports for different purposes.  
Example:  
```yaml
version: '3'

services:
  storefront:
    image: storefront-app
    ports:
      - "80:80"    # Main application traffic
      - "443:443"  # HTTPS traffic
      - "9090:9090"  # Monitoring metrics
```
📌 **Key Takeaways:**  
- The **storefront app** receives web traffic on **port 80**.  
- **HTTPS traffic** is handled on **port 443**.  
- A **monitoring agent** runs on **port 9090**.  

#### **YAML Parsing Issue: Why Quote Port Numbers?**  
For ports **below 60**, YAML **parses numbers in base-60**, which can cause unexpected behavior.  
✅ **Recommended:** Always wrap port numbers **in quotes**:  
```yaml
ports:
  - "50:50"
```
🚫 **Avoid (can cause issues with YAML parsing)**:  
```yaml
ports:
  - 50:50
```

#### **Summary of Port Exposing in Docker Compose**  

| Feature | Syntax | Example |
|---------|--------|---------|
| **Basic Port Mapping** | `host_port:container_port` | `ports: - "80:80"` |
| **Avoiding Port Collision** | Use different host ports | `ports: - "81:80"` |
| **Multiple Ports** | Define multiple mappings | `ports: - "443:443" - "9090:9090"` |
| **Quotes for Low Ports** | Wrap ports in quotes to avoid YAML issues | `"50:50"` |

Exposing ports properly is essential for **allowing external access** to your containerized services and ensuring **network communication** between different applications.


### 4.5 Enforcing Start-Up Order  
#### **Why Enforce Start-Up Order?**  
Some applications **depend on other services** to function correctly. For example:  
- A **web application** needs a **database** to be available before it starts.  
- A **scheduler** service might rely on a **message queue**.  

In **Docker Compose**, this dependency order is managed using the `depends_on` flag.

#### **Using `depends_on` in Docker Compose**  

##### **Example: Storefront and Database Dependency**  
```yaml
version: '3.8'

services:
  database:
    image: mysql

  storefront:
    image: storefront-app
    depends_on:
      - database  # Ensures database starts before storefront
```
📌 **Key Takeaways:**  
- `depends_on` ensures **services start in the correct order**.  
- **When running** `docker-compose up`, the database **starts before** `storefront`.  
- **When stopping** `docker-compose down`, `storefront` stops **before** `database`.  
- **Starting a specific service** (e.g., `docker-compose up storefront`) will also start its dependencies (`database`).  

#### **Limitations of `depends_on`**  
🚫 **Does Not Guarantee Readiness**  
- `depends_on` **only ensures that a container starts**, but **does not check if it is fully running or healthy**.  
- A database container **might still be initializing**, and the application may **fail if it tries to connect too early**.  

✅ **Solution: Use Health Checks**  
To ensure a service is fully running before another starts, use **health checks**.  

##### **Example: Using Health Checks for Start-Up Order**  
```yaml
version: '3.8'

services:
  database:
    image: mysql
    healthcheck:
      test: ["CMD", "mysqladmin", "ping", "-h", "localhost"]
      interval: 10s
      retries: 5
      start_period: 20s

  storefront:
    image: storefront-app
    depends_on:
      database:
        condition: service_healthy  # Waits for the database to be fully initialized
```
📌 **Key Takeaways:**  
- **`healthcheck`** ensures the MySQL database is **ready** before `storefront` starts.  
- `depends_on: condition: service_healthy` waits for the service to **pass its health check**.  

#### **Handling More Complex Dependencies**  
For more advanced scenarios where **a service must be fully operational before another starts**, use **third-party tools** like:  
- **Wait-for-it** (bash script to wait for a service to become available).  
- **Dockerize** (utility for waiting on dependent services).  

Example using **wait-for-it**:  
```yaml
services:
  storefront:
    image: storefront-app
    command: ["wait-for-it.sh", "database:3306", "--", "start-storefront"]
```
🚀 **This ensures that `storefront` does not start until `database:3306` is accessible**.

#### **Summary of Enforcing Start-Up Order**  

| Feature | `depends_on` | `depends_on + healthcheck` | Third-Party Tools |
|---------|-------------|---------------------------|------------------|
| **Ensures start-up order** | ✅ Yes | ✅ Yes | ✅ Yes |
| **Checks if service is fully ready** | ❌ No | ✅ Yes | ✅ Yes |
| **Best for basic dependencies** | ✅ Yes | ✅ Yes | ❌ No |
| **Best for strict service readiness** | ❌ No | ✅ Yes | ✅ Yes |

Using `depends_on` helps manage **container start-up order**, but **for critical dependencies, health checks or third-party tools** should be used for better reliability.

## 5. Dynamic Configurations in Docker Compose
### 5.1 Named Subsets of Services  
#### **What Are Named Subsets (Service Profiles) in Docker Compose?**  
Docker Compose allows defining **named subsets of services** within a single `docker-compose.yaml` file using **profiles**. This is useful when different groups need to run specific services without running the entire stack.  

#### **Use Case: Dividing Services by Team**  
Imagine an organization **KinetEco** with two engineering teams:  
- **Storefront Team** – Focuses on purchasing and e-commerce services.  
- **Scheduler Team** – Manages installation scheduling and service coordination.  

Each team only needs to run **their relevant services**, but the **database** is shared. Instead of creating **separate Compose files**, they can use **profiles** to run only the necessary services.  

#### **Defining Service Profiles in `docker-compose.yaml`**  

```yaml
version: '3.8'

services:
  database:
    image: mysql  # No profile specified, so it's part of the default profile

  storefront:
    image: storefront-app
    profiles:
      - storefront  # Part of the "storefront" profile

  scheduler:
    image: scheduler-app
    profiles:
      - scheduler  # Part of the "scheduler" profile
```

📌 **Key Takeaways:**  
- The **database service** is **not assigned** to a profile, meaning it belongs to the **default profile** and runs **with any profile**.  
- The **storefront service** belongs to the **"storefront" profile**, so it runs **only when this profile is enabled**.  
- The **scheduler service** belongs to the **"scheduler" profile**, so it runs **only when the scheduler profile is enabled**.  

#### **Running Services Using Profiles**  

By default, running `docker-compose up` **only starts services in the default profile** (in this case, just the **database**).  

To start a specific subset of services, use the `--profile` flag:  

##### **Run Storefront-Related Services**  
```sh
docker-compose --profile storefront up
```
🚀 **This starts:**  
✅ `storefront` service  
✅ `database` (since it's in the default profile)  

##### **Run Scheduler-Related Services**  
```sh
docker-compose --profile scheduler up
```
🚀 **This starts:**  
✅ `scheduler` service  
✅ `database` (default profile)  

##### **Run Both Storefront and Scheduler Services**  
```sh
docker-compose --profile storefront --profile scheduler up
```
🚀 **This starts:**  
✅ `storefront`  
✅ `scheduler`  
✅ `database` (default profile)  

##### **Stop Services with Profiles**  
```sh
docker-compose --profile storefront down
```
🚀 **Stops only `storefront` services but keeps `database` and other running services active**.  

#### **Advantages of Using Service Profiles**  
✅ **Efficient Development** – Developers only run the services they need, saving CPU/memory.  
✅ **Single Configuration File** – No need for multiple `docker-compose.yaml` files.  
✅ **Flexible Testing** – Integration testing teams can run **both profiles together**.  
✅ **Easy Command Execution** – Works with **up, down, restart**, etc.  

#### **Summary**  

| Feature | Without Profiles | With Profiles |
|---------|----------------|--------------|
| **Runs all services together** | ✅ Yes | ❌ No |
| **Runs only specific services** | ❌ No | ✅ Yes (`--profile <name>`) |
| **Reduces memory usage** | ❌ No | ✅ Yes |
| **Keeps a single configuration** | ❌ No (requires multiple files) | ✅ Yes |

Using **profiles** in Docker Compose makes it easy to **control which services run**, allowing teams to work efficiently without running unnecessary containers.

### 5.2 Multiple Compose Files  
#### **Why Use Multiple Docker Compose Files?**  
While **service profiles** help manage subsets of services, **multiple Docker Compose files** are useful when you have **entirely different configurations** that will **never run together**.  

#### **Use Case for Multiple Compose Files**  
✅ **Managing Different Environments**  
- **Local Development** (`docker-compose.local.yaml`)  
- **Staging Environment** (`docker-compose.staging.yaml`)  
- **CI Testing** (`docker-compose.ci.yaml`)  

📌 **Example Scenario:**  
You will **never** run **local development** and **staging** configurations on the same machine at the same time. This makes multiple Compose files a great solution.  

❌ **Bad Use Case:**  
- Using multiple Compose files to split different parts of **a single system** (e.g., database and API in separate files).  
- A developer may need to run **the entire system together**, making separate files inconvenient.  

#### **How Docker Compose Handles Multiple Files**  
By default, Docker Compose reads:  
1️⃣ **`docker-compose.yaml`** (the primary configuration)  
2️⃣ **`docker-compose.override.yaml`** (an override file that merges with the primary file)  

- The **override file inherits** from the main configuration.  
- **Arrays (e.g., `depends_on`) are merged** from both files.  
- **Single-value fields (e.g., `build` path) use the override file’s value.**  

##### **Example: Default Merging Behavior**  
📄 **`docker-compose.yaml` (Base Configuration)**  
```yaml
version: '3.8'

services:
  app:
    image: my-app
    environment:
      - ENV=production
```

📄 **`docker-compose.override.yaml` (Override Configuration)**  
```yaml
services:
  app:
    environment:
      - ENV=development
```
🚀 **Final Result (Merged Configuration)**  
```yaml
version: '3.8'

services:
  app:
    image: my-app
    environment:
      - ENV=development  # Override takes priority
```
📌 **Key Takeaways:**  
- `ENV=development` **overrides** `ENV=production`.  
- This allows different settings for **development, staging, and production** using separate files.

#### **Defining Custom Override Files**  
Instead of `docker-compose.override.yaml`, you can create custom override files like:  
- `docker-compose.local.yaml`  
- `docker-compose.staging.yaml`  
- `docker-compose.ci.yaml`  

#### **Running Docker Compose with Multiple Files**  
Use the `-f` flag to specify which Compose files to use.  

##### **Run Local Development Configuration**  
```sh
docker-compose -f docker-compose.yaml -f docker-compose.local.yaml up
```
✅ **Loads both** `docker-compose.yaml` **and** `docker-compose.local.yaml`  
✅ **Local settings override default settings**  

##### **Run Staging Configuration**  
```sh
docker-compose -f docker-compose.yaml -f docker-compose.staging.yaml up
```
✅ **Staging environment settings override default settings**  

##### **Run Multiple Override Files Together**  
```sh
docker-compose -f docker-compose.yaml -f docker-compose.local.yaml -f docker-compose.staging.yaml up
```
✅ **Combines overrides from multiple files**  

#### **Advantages of Multiple Compose Files**  
✅ **Keeps Environment-Specific Configurations Separate** – Avoids cluttering one file with too many conditionals.  
✅ **Allows Easy Switching Between Environments** – Use `-f` to apply different settings dynamically.  
✅ **Supports Multiple Override Files** – You can maintain **local, staging, and CI overrides** easily.  
✅ **Reusable Across Multiple Projects** – The same base file can be used with different override files in different projects.  

#### **Summary of Multiple Compose Files**  

| Feature | Single Compose File (`docker-compose.yaml`) | Multiple Compose Files (`docker-compose.local.yaml`, etc.) |
|---------|---------------------------------|-----------------------------|
| **Good for different environments** | ❌ No | ✅ Yes |
| **Merges configurations automatically** | ❌ No | ✅ Yes (`docker-compose.override.yaml`) |
| **Easier to switch configurations** | ❌ No | ✅ Yes (`-f flag`) |
| **Avoids maintaining duplicate files** | ❌ No | ✅ Yes |

Using **multiple Compose files** helps manage **local, staging, and CI environments** efficiently, making deployment **more flexible and scalable**.

### 5.3 Environment Variables  
#### **Why Use Environment Variables in Docker Compose?**  
Instead of creating **separate configuration overrides** for each environment, you can use **environment variables** to dynamically adjust settings **without modifying** the `docker-compose.yaml` file.  

Environment variables can be:  
- Passed from the **host machine shell** to Docker Compose.  
- Used as **build arguments** or **runtime environment variables** inside the container.  
- Set using an **`.env` file** for better organization.  

#### **Using Environment Variables in `docker-compose.yaml`**  
Environment variables are referenced using:  
```yaml
$VARIABLE_NAME
```
or  
```yaml
${VARIABLE_NAME}
```
(The **curly braces `{}` are optional**, but improve readability.)

##### **Example: Configurable MySQL Tag**  
```yaml
version: '3.8'

services:
  database:
    image: mysql:${TAG}  # Uses an environment variable to define the MySQL version
```
- If `TAG` is set to `"8.0"` on the host machine, the final image used will be `mysql:8.0`.  
- If `TAG` is **not set**, Docker will default to an **empty string** (which may cause errors).  

#### **Setting Default Values for Environment Variables**  
If an environment variable **is not set**, Docker Compose allows specifying a **default value** using the `:-` syntax.  

##### **Example: Default to `latest` if `TAG` is not set**  
```yaml
version: '3.8'

services:
  database:
    image: mysql:${TAG:-latest}  # Uses 'latest' if TAG is not provided
```
🚀 **Behavior:**  
- If `TAG=8.0` is set on the host → Uses `mysql:8.0`.  
- If `TAG` is **not set** → Uses `mysql:latest`.  

#### **Using an `.env` File for Environment Variables**  
Instead of defining environment variables **inline**, you can store them in an **`.env` file** in the project root directory.  

📄 **`.env` File Example**  
```sh
TAG=8.0
DB_USER=root
DB_PASSWORD=secret
```

📄 **`docker-compose.yaml` Using `.env` Variables**  
```yaml
version: '3.8'

services:
  database:
    image: mysql:${TAG}  # Uses TAG from the .env file
    environment:
      - MYSQL_USER=${DB_USER}
      - MYSQL_PASSWORD=${DB_PASSWORD}
```
🚀 **Behavior:**  
- Docker Compose **automatically loads** the `.env` file if it exists in the **same directory** as `docker-compose.yaml`.  
- The **environment variables in `.env` are injected** into the Compose configuration.  

#### **Using a Custom Environment File**  
If the `.env` file is stored **outside the project directory** or has a different name, specify it with the `--env-file` flag.  

##### **Example: Using a Custom Environment File**  
```sh
docker-compose --env-file /path/to/config.env up
```
📌 **Key Takeaways:**  
- Use `--env-file <file>` to load an **external environment file**.  
- Useful for **shared environment variables across multiple projects**.  

#### **Overriding Environment Variables**  
- **An environment variable set in the shell** will **always override** a value set in an `.env` file.  

##### **Example:**  
```sh
export TAG=5.7  # Overrides any value in the .env file
docker-compose up
```
🚀 **The MySQL image will be** `mysql:5.7`, even if `.env` has `TAG=8.0`.

#### **Enforcing Required Environment Variables**  
If a variable **must be set**, use the `:?` syntax to **throw an error** if it's missing.  

##### **Example: Requiring `TAG` to Be Set**  
```yaml
version: '3.8'

services:
  database:
    image: mysql:${TAG:?Error - TAG must be set}
```
🚀 **Behavior:**  
- If `TAG` **is set**, it works normally.  
- If `TAG` **is not set**, Compose throws an error:  
  ```sh
  Error - TAG must be set
  ```

#### **Summary of Environment Variable Usage in Docker Compose**  

| Method | Example | Notes |
|--------|---------|------|
| **Inline Environment Variable** | `image: mysql:${TAG}` | Uses `$TAG` from the host machine |
| **Default Value (`:-`)** | `image: mysql:${TAG:-latest}` | Defaults to `"latest"` if `TAG` is not set |
| **Required Variable (`:?`)** | `image: mysql:${TAG:?Error - TAG must be set}` | Throws an error if `TAG` is not set |
| **`.env` File** | `TAG=8.0` (stored in `.env`) | Automatically loaded if present |
| **Custom `.env` File** | `docker-compose --env-file /path/to/config.env up` | Manually specify an external file |
| **Host Shell Override** | `export TAG=5.7 && docker-compose up` | The shell environment always takes priority |

Using **environment variables** makes Docker Compose configurations **flexible, reusable, and easy to manage across multiple environments**.

## 6. Conclusion
### Next Steps  
Now that you’ve learned **Docker Compose**, you can:  
✅ **Simplify local development** by automating multi-container setups.  
✅ **Improve developer efficiency** by using configuration as code.  
✅ **Enhance flexibility** with **service profiles, multiple Compose files, and environment variables**.  

#### **Further Learning & Resources**  
- 📖 **Docker Compose Documentation** – A comprehensive guide on advanced features and best practices:  
  🔗 [Docker Docs - Compose](https://docs.docker.com/compose/)  
- 🛠 **Experiment with Your Own Projects** – Start using Docker Compose to build real-world applications.  
- 👨‍💻 **Explore Orchestration Tools** – If you need **scalability in production**, look into **Docker Swarm** or **Kubernetes**.  

#### **Stay Updated**  
- Follow **Nicole Rifkin on LinkedIn** for more content on **Docker and containerization**.  
- Stay engaged with the **Docker community** to learn best practices and new features.