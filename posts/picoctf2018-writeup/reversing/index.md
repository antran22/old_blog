---
date: 2019-09-21 11:50:00
title: PicoCTF 2018 Writeup Reverse Engineering.
description: Break it down.
keyword:
    - ctf
    - hacking
---

## Reversing Warmup 1:
If you're on Linux, just download the file and run it. If you aren't, [ssh into the shell](/picoctf-writeup/general/#ssh-keyz) and run the file at the given path. That's it.

## Reversing Warmup 2:
Run `bash~base64 -D <<< dGg0dF93NHNfczFtcEwz` on the terminal to decode the base64 code. Plug that string inside the flag template `picoCTF{}`
