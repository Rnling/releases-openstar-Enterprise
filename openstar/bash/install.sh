#!/bin/bash
# bash 版本
set-x
version=1.2
build_path=/opt/down
install_path=/opt/openresty



# openresty
install_version=1.13.6.2
#1.11.2.2 nginx 1.11.2 , 1.11.2.1 nginx 1.11.2 , 1.9.15.1 nginx 1.9.15
openresty_uri=https://openresty.org/download/openresty-${install_version}.tar.gz

# GeoIp
dat_ip=192.168.84.41

# centos 6 = remi-release-6.rpm ; centos 7 = remi-release-7.rpm
rpm_uri=http://rpms.famillecollet.com/enterprise/remi-release-7.rpm
ali_repo=http://mirrors.aliyun.com/repo/Centos-7.repo

function yum_start(){
    yum install -y htop goaccess dos2unix
    # 替换为阿里的源
    mkdir -p /etc/yum.repos.d.bak
    mv -f /etc/yum.repos.d/* /etc/yum.repos.d.bak && wget ${ali_repo} -O /etc/yum.repos.d/CentOS-Base.repo
    yum clean all && yum makecache

    yum install -y epel-release
    rpm -Uvh ${rpm_uri}
    yum groupinstall -y "Development tools"
    yum install -y wget make gcc readline-devel perl pcre-devel openssl-devel git unzip zip
}

function geoip(){
    mkdir -p ${build_path}
    cd ${build_path}
    wget http://geolite.maxmind.com/download/geoip/api/c/GeoIP-1.4.8.tar.gz
    tar xvzf GeoIP-1.4.8.tar.gz
    cd GeoIP-1.4.8
    ./configure
    make
    make install
    echo '/usr/local/lib' > /etc/ld.so.conf.d/geoip.conf
    ldconfig

    cd ${install_path}
    wget http://${dat_ip}/geoip/GeoIP.dat
    # old http://geolite.maxmind.com/download/geoip/database/GeoLiteCountry/GeoIP.dat.gz
    # new https://geolite.maxmind.com/download/geoip/database/GeoLite2-Country.tar.gz
    #gunzip GeoIP.dat.gz

    wget http://${dat_ip}/geoip/GeoLiteCity.dat
    # old http://geolite.maxmind.com/download/geoip/database/GeoLiteCity.dat.gz
    # new https://geolite.maxmind.com/download/geoip/database/GeoLite2-City.tar.gz
    #gunzip GeoLiteCity.dat.gz
}

function openresty_install(){
    mkdir -p ${build_path}
    cd ${build_path}
    rm -rf openresty-${install_version}.tar.gz
    wget ${openresty_uri}
    tar zxvf openresty-${install_version}.tar.gz
    cd openresty-${install_version}
    ###############################
    #./configure --prefix=${install_path} --with-http_realip_module --with-http_v2_module --with-http_geoip_module
    ./configure --prefix=/opt/openresty --with-http_realip_module --with-http_v2_module
    gmake
    gmake install
    ##############################

    chown nobody:nobody -R ${install_path}
    cd ${install_path}
    chown root:nobody nginx/sbin/nginx
    chmod 751 nginx/sbin/nginx
    chmod u+s nginx/sbin/nginx
}

function check(){
    mkdir -p ${install_path}/nginx/conf/conf.d
    chown nobody:nobody -R ${install_path}
    chown root:nobody ${install_path}/nginx/sbin/nginx
    chmod 751 ${install_path}/nginx/sbin/nginx
    chmod u+s ${install_path}/nginx/sbin/nginx
    chown nobody:nobody ${install_path}/nginx/logs/*
    ln -sf ${install_path}/openstar/conf/nginx.conf ${install_path}/nginx/conf/nginx.conf
    ln -sf ${install_path}/openstar/conf/waf.conf ${install_path}/nginx/conf/waf.conf
    cd ${install_path}/nginx/html && (ls |grep "favicon.ico" || wget https://www.nginx.org/favicon.ico)
    echo "check Done~!"
}

if [ "$1" = "all" ];then

    yum_start

    rm -rf ${install_path}
    mkdir -p ${install_path}
    mkdir -p ${build_path}

    #geoip
    openresty_install

    ##############################
    cat /etc/profile |grep "openresty" ||(echo "PATH=${install_path}/nginx/sbin:\$PATH" >> /etc/profile && source /etc/profile)

    echo "Done!!!"

elif [ "$1" = "yum" ]; then
    yum_start

elif [ "$1" = "openresty" ]; then

    if [ "$2" = "new" ]; then
        yum_start
        mkdir -p ${install_path}
        mkdir -p ${build_path}
        #geoip
    fi
    openresty_install
    cat /etc/profile |grep "openresty" ||(echo "PATH=${install_path}/nginx/sbin:\$PATH" >> /etc/profile && source /etc/profile)

elif [ "$1" = "check" ]; then

    check
    cat /etc/profile |grep "openresty" ||(echo "PATH=${install_path}/nginx/sbin:\$PATH" >> /etc/profile && source /etc/profile)

elif [ "$1" = "geoip" ]; then

    #geoip

else
    #### 查看服务器信息 版本、内存、CPU 等等 ####
    echo "uname －a"
    uname -a
    echo "##########################"
    echo "cat /proc/version"
    cat /proc/version
    echo "##########################"
    echo "cat /proc/cpuinfo"
    cat /proc/cpuinfo
    echo "##########################"
    echo " cat /etc/issue  或cat /etc/redhat-release"
    cat /etc/redhat-release 2>/dev/null || cat /etc/issue
    echo "##########################"
    echo "getconf LONG_BIT  （Linux查看版本说明当前CPU运行在32bit模式下， 但不代表CPU不支持64bit）"
    getconf LONG_BIT

    echo "./install.sh [all/openstar/openresty/check/geoip]"

fi
