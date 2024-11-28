# Cloud services portfolio Assignment
## Introduction
This is the portfolio assignment in the subject [IDATA 2502](https://www.ntnu.no/studier/emner/IDATA2502) at NTNU. It involves creating a CI/CD pipline, as well as a testing suite for an infrastructure and
deploying a simple application to the cloud. For my project, i have decided to use the following technologies:
- **Infrastructure as Code**: Docker, Kubernetes
- **CI/CD**: Github Actions
- **Cloud**: Google Cloud Platform
- **Testing**: jest

With these technologies, i have successfully created a CI/CD pipeline that builds and tests the application,
and then deploys it to a Kubernetes cluster on Google Cloud Platform.
The application is a simple express todo app that stores todos in a sqlite databse.
The application is built and tested in a Docker container, and then deployed to a Kubernetes cluster on GCP.
The CI/CD pipeline is triggered on every push to the main branch.
