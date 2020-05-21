---
date: 2019-09-29 23:08:00
title: PicoCTF 2019 Writeup - General Skillz.
description: Just some basic stuffz.
keyword:
    - ctf
    - hacking
---

I gotta say, this year game looks pretty fascinating. It's more of a computer game with hacking element than just a normal CTF game, which I think really appeal to kids and hacking beginner. The game is also much easier to use. I can copy paste the flag in directly without having to put it in a box first.

Alright, let's start the writeup.

## The firsts problems.
When your character wakes up, he will have to solve three problems. 
- The first one ask you what does `0x67` represent in ASCII. You can run `xxd -r << 0x67` to get the answer, `p`. Input the flag in the following format `picoCTF{p}`
- The second one ask you what is `0x3D` in decimal. It's $3 x 16 + 13 = 61$
The third problem is in the computer just a bit forward. It's just a typing game, so type a few required command in 60s to finish it.



