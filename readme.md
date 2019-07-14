# About this repo

This is a repo that follow the course of introduction to Vue.JS from Udemy:

https://www.udemy.com/master-vue-js-2018

also I'm starting with Docker so, here is included a docker file to run the app in a container!

the steps for that:

1. create a image from the dockerfile, I take a nginx image as base:

    ```
        sudo docker build -t intro-vue-udemy .
    ```

2. run the container:
    
    _yet I don't know how to mount the current folder as a volume in the docker file_
    
    ```
    docker run --rm -it -d -p 80:8080 -v /.../udemy-vue-course/:/home/node/app  intro-vue-udemy-ch3:latest
    ```