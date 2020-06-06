## Custom Dockerfile
FROM consol/centos-xfce-vnc
ENV REFRESHED_AT 2019-12-06

# Switch to root user to install additional software
USER 0

## Install a gedit
RUN yum install -y gedit \
    && yum update  -y vim* \
    && yum update  -y pango* \
    && yum update  -y libssh2* \
    && yum update  -y curl \
    && yum update  -y libcurl \
    && yum clean all
