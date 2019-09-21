---
date: 2019-09-17 23:12:00
title: PicoCTF 2018 Writeup Web Exploitation.
description: No Facebook hacking tutorial though.
keyword:
    - ctf
    - hacking
    - web
---

## Inspect me:

Open the [given link](http://2018shell.picoctf.com:53213/). The flag is splitted into three parts, each hidden in the HTML file, CSS file and JS file. You can find these by opening the inspector (F12 on Chrome), and look at the source tab.

***

## Client side is still bad:

Check out the source for the [given link](http://2018shell.picoctf.com:8930/). You can see that the page ask you to guess the flag, so take a look at the form. However, the form `onSubmit` event is defined to be a `verify` function, which is defined in a script tag:

```js
function verify() {
    checkpass = document.getElementById("pass").value;
    split = 4;
    if (checkpass.substring(split * 7, split * 8) == "}") {
        if (checkpass.substring(split * 6, split * 7) == "ebbd") {
            if (checkpass.substring(split * 5, split * 6) == "d_d0") {
                if (checkpass.substring(split * 4, split * 5) == "s_ba") {
                    if (checkpass.substring(split * 3, split * 4) == "nt_i") {
                        if (
                            checkpass.substring(split * 2, split * 3) == "clie"
                        ) {
                            if (
                                checkpass.substring(split, split * 2) == "CTF{"
                            ) {
                                if (checkpass.substring(0, split) == "pico") {
                                    alert("You got the flag!");
                                }
                            }
                        }
                    }
                }
            }
        }
    } else {
        alert("Incorrect password");
    }
}
```
As you can see, the flag is splitted in chunk, and is compared against the plaintext. You can easily find out the flag right now.

***

## Logon 
The [website](http://2018shell.picoctf.com:62746) allows you to login as anything you want, but you have to login as admin to get the flag. However, if you checkout the cookie, you will see a field called `Admin` with the value `False`. Change it to `True` and get the flag

***

## Irish name repo
Go to the [given link](http://2018shell.picoctf.com:59464). As there is nothing much to do with the main page, we will checkout the [login page](http://2018shell.picoctf.com:59464/login.html) in the sidebar.

Entering anything into the form will not work, however, if you look at the form source code, you can see a hidden field named `debug`. Set it to false and then submit the form.

The page will show you a SQL query which is used to find the corresponding user. If you are familiar with SQL, you will know that this query is susceptible to SQL injection, the easy type. In order to authenticate, input `' OR '1'='1` into both field.

***

## Mr. Robots
The problem name is a hint. Checkout the page's [robots.txt file](http://2018shell.picoctf.com:15298/robots.txt) to find out a hidden route. This route contains the flag.

***

## No Login
Same as the [Logon problem](#logon) above.

***

## Secret Agent
The [page](http://2018shell.picoctf.com:46162) require you to be a Googlebot to get the flag. You can change the user agent string to pretend to be a Googlebot. In Chrome, you can open the network conditions menu in the inspector options, and change the agent string to Googlebot:

![](user-agent.png)

After that, refresh to get the flag