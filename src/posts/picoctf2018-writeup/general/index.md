---
date: 2019-05-02 18:07:00
title: PicoCTF 2018 Writeup General Skills.
description: Basic stuff I guess.
keyword:
    - ctf
    - hacking
---

So basically I think it's time to try my hand on some hacking, to see if I can do it.
[PicoCTF](https://2018game.picoctf.com) is a good site for some easy Capture The Flag (CTF) exercise according to my friends, so I guess I would start there.

Okay, let's take a look at the home page. You should be able to register for an account without any problem. After signing in you can go to the [Game tab](https://2018game.picoctf.com/game), where the game will be loaded. Then they will show some introductions so you can get comfortable with the game.

You should do this on some Unix-based OS, like Linux or Mac OS, because they have a lot of useful tools pre-installed.

Including too much image of the problems is going to bloat my repository, so I guess I will show image on hard problems only.

---

## General Warmup 1-2-3

To solve these, just use some kind of converter like [this](https://codebeautify.org/hex-string-converter)

---

## Resources

Go to the link and find the flag

---

## Grep 1

Download the file. Navigate to the directory where you downloaded it on Terminal, then execute `bash~grep "picoCTF" file`. Voila, you can see the flag.

---

## Net Cat

Okay, for this one you can run `bash~nc 2018shell.picoctf.com 49387`. The flag will be printed to your console.

---

## Strings

First download the file. Running a `bash~cat` on it shows that it is a binary file. However, running it as an executable yields nothing.

However, you can use the `bash~string` command to find plaintext, readable strings inside the file, excluding every binary characters. By running `bash~string file | grep "picoCTF"`, you can sift through the output of `bash~string file` for any string contains "picoCTF". You can see the flag by now

---

## Pipe

In the previous problem, I use a shell syntax called output piping. To put it simply, the output of the previous command will be **"piped"** to the input of the next command.

In this problem, running `bash~nc 2018shell.picoctf.com 37542` will yield a fast moving bunch of text. Instead of searching through this mess for the flag, we will pipe it to `bash~grep`, just like the previous problem.

Running `bash~nc 2018shell.picoctf.com 37542 | grep "picoCTF"` will show you the flag.

---

## Grep 2.

![Grep 2](grep2.png)

This problem will requires you to use the web-shell. Go to the [Shell tab](https://2018game.picoctf.com/shell), you will see a command prompt.

`bash~cd` to the directory given by the problems, then `bash~ls`, you'll be greeted by a bunch of directory. Traversing all of them by hand and check if there is any file contains the flag is not feasible.

However, `bash~grep` has an option `-R` which search the strings given recursively, and this is what we'll use. Executing `bash~grep -R "picoCTF"` will give you the flag.

---

## ACA-Shell-A

This one is an interesting one, as you will be put in a interactive and narrated shell. It's just like a game on terminal.

First, execute the command in the problem's instruction.

The narrator says that you can ask for help by running `bash~echo 'Help Me!'`. Sweet. Let's try it since we don't really know what to do.

The narrator reply with `Have you looked for any directory`. Let's try a `bash~ls` first

```bash
~/$ ls
blackmail
executables
passwords
photos
secret
```

Sweet. You can poke around in these directories, but what you need is in `secret`. Let's `bash~cd` into it.

A `bash~ls` reveals a bunch of files. The shell then asks you to sabotage the intel files. In order to delete them in a single command, run `bash~ rm intel_*`

The narrator will then tell you to run `bash~echo 'Drop it in!'`. Run it, and there will be a new file in the `~/executables` directory. `bash~cd` to it, then `bash~ls` to see what's the file name.

```bash
~/executables$ ls
dontLookHere
```

The `dontLookHere` file is an executable, means that you can run it by typing `./dontLookHere`. The screen will print out some hex code, and then the narrator will ask you to find the username. Typing `whoami` will give you the username.

The narrator will finally say that you have to copy a file in `tmp` called `TopSecret` to the `passwords` directory. In Linux, the `tmp` directory resides in root, aka `/`. So you should issue the following command:

```bash
~/executables$ cp /tmp/TopSecret ../passwords
../password: directory not found or permitted
```

What?
Let's ask the narrator to see if he has any clue.

```bash
~/executables$ echo "Help Me!"
You are going to have to do it from the home folder because of the ".." restrictions!
```

Oh okay, let's try again. `bash~cd ..` to get back to the home folder, then `bash~cp /tmp/TopSecret passwords` to copy the file. It does work this time.

The narrator will then says that the server will shut down in 10 seconds, and you must read the file quickly. Just run `bash~cd passwords` then `bash~cat TopSecret`. You will see the flag for this problem.

---

## Environ

This is going to be easy. Open the web-shell, then execute `bash~env`
The command will show you all the environment variables on the shell. In order to find the flag easily, pipe it to `bash~grep`

---

## SSH-Keyz.

![Ssh Key](ssh-key.png)

This is a very compicated problem and requires some knowledges in SSH and how it handles authentication keys. You can possibly skips the work and grab the flags by executing `bash~ssh 2018shell.picoctf.com@your_picoctf_username` and enter the password. However, I'll describe about the authentication key approach, because afterward you can SSH to the server without having to enter the password.

SSH Key Authentication work like this:

-   In order to authenticate, you must own a key pair, one is public and the other private. The private key can be used to decode any data that is encoded using the public key, but the other way around doesn't work.
-   When a client (your computer) send a request to connect to the host (the game's shell server) with a key, first the host will search for a public key that belongs to the client.
-   If a public key is found, the host will use it to encrypt a code, and send it to the client. The client will use the private key to decrypt the code, and send it back to the host. If the host see that the code sent match with the code received, it will establish a connection.

First you have to generate a key pair. It's really simple. Execute `bash~ssh-keygen -C "vietanisme@gmail.com" -t rsa` on your machine. If you are asked whether to overwrite a file, you can specified a directory to put the key.

After generating the key, you can just copy the public key to the host. First open the public key file and copy the content of it.
Open the webshell and run:

```bash
    echo "the content of the public key" > ~/.ssh/authorized_keys
```

Close the webshell. Open a terminal on your computer and run `bash~ssh 2018shell.picoctf.com@your_picoctf_username`. If all the steps above is done correctly, you should be able to login to the server without having to input password. The flag will be given on login.

---

## What base is this?

This is basically a more randomized and timed version of the first 3 problems. After `bash~nc` to the adresss provided by the description, you'll be presented with three quizzes, which require you to convert a string, either in hexadecimal, binary or octal into its ASCII presentation. Just use a converter like [this one](https://codebeautify.org/hex-string-converter) to convert it. Remember to be quick, because they only allow 30 seconds for each quiz.

---

## You can't see me

Login to the shell and goto the directory specified. Doing a `bash~ls` shows nothing.

May be the file is hidden? In order to list hidden file, run `bash~ls -a`.

The output is as follow

```bash
$ ls -a
. . ..
```

That's really confusing isn't it. However, if you are familiar with Linux shells, you'll see that one of the two `.` refers to that directory itself, while the `..` refers to its parent directory. If you run `bash~ls -A`, these two symbols will be ignored. So this means that the folder is actually containing a file with the name `.`.

However, you can not execute any command that refers directly to the name `.`, because the shell will mistake it for the current directory itself. So in order to find the flag, you should use some command that target the whole directory instead. `bash~grep` is a good bet.

To `bash~grep` at a directory, you must include the `-R` flag (recursive). The complete command is `bash~grep "picoCTF" -R .` (the `.` here refers to the folder, not the file). Run that, and the flag will magically appear before you

---

## Absolutely relative.

The problem is starting to get complicating. This problem requires you to understand C code.

![](ab-rel.png)

Open the shell at the directory and inspect it. You can find 3 files inside: `absolute-relative` is an executable, `absolute-relative.c` is the source code of the former, and `flag.txt` is the file that contain the flag.

You can not read the `flag.txt`, because you don't have the read permission. Only the executable have the permission to read that file, so it is the only way to get the flag.

Let's check the content of the script. Run `bash~cat absolute-relative.c` will yield

```c
#include <stdio.h>
#include <string.h>

#define yes_len 3
const char *yes = "yes";

int main()
{
    char flag[99];
    char permission[10];
    int i;
    FILE * file;

    file = fopen("/.../flag.txt" , "r");
    if (file) {
    	while (fscanf(file, "%s", flag)!=EOF)
    	fclose(file);
    }

    file = fopen( "./permission.txt" , "r");
    if (file) {
    	for (i = 0; i < 5; i++){
            fscanf(file, "%s", permission);
        }
        permission[5] = '\0';
        fclose(file);
    }

    if (!strncmp(permission, yes, yes_len)) {
        printf("You have the write permissions.\n%s\n", flag);
    } else {
        printf("You do not have sufficient permissions to view the flag.\n");
    }

    return 0;
}
```

This look like a lot but let's tackle it line by line. Two C function that you should understand is `c~fscanf` and `c~strncmp`, for which you could look up the documentation [here](http://www.cplusplus.com/reference/cstdio/fscanf/) and [here](http://www.cplusplus.com/reference/cstring/strncmp/)
From line 14 to line 18, the code read the final sentence of that `flag.txt` file into the `flag` variable. The while loop ensure that the `flag` variable will have the content of the final sentence in the file.

Next, from line 20 to 27 it read every string, seperated by a white-space character in a file called `./permission.txt`. It reads 5 string, then store the value in a char array called `permission`. Each reading iteration overwrite the variable, so the 5th string will be its final value.

The part of code from line 29 to 33 compare the `permission` string to the string `yes`, up to 3 characters.

Therefore, you must create a `permission.txt` file that contains 5 strings. The first 4 can be anything as long as it is shorter than 9 characters, so that it doesn't overflow the permission variable. The final one should be `yes`. The file must be put in your home folder, since the `/problem/...` is write protected.

After writing such a file, you should execute `/problems/absolutely-relative_3_c1a43555f1585c98aab8d5d2c7f0f9cc/absolutely-relative`. Because you invoke the executable from your home folder, the `./permission.txt` will refers to that `permission.txt` you created above. The flag should be displayed by now.

---

## In-Out-Error

This problem requires some knowledge in redirection. Let's go to the directory in the problem description first.

This folder have two files `flag.txt` and `in-out-err`, the latter being an executable. Let's run it first.

After writing "Please may I have the flag?", the file push out a stream of seemingly random characters. This is due to the fact that the error stream and output stream are printing simultaneously, and if ran on a interactive bash shell these two stream are merged into one. To retrieve the flag, you must split these two stream.

In Linux, there's a special directory call `/dev/null`. Redirecting any stream there will discard the output.
Since we don't know which of the two stream output and error contain the flag, one solution would be to redirect each of them to `/dev/null` and keep the other one intact.

To redirect a stream, use the `>` and `<` operator. If you want to redirect stdout, use `>`. If you want to redirect stderr, use `2>`

Let's run these two commands, see what comes out. When redirecting stdout, remember that the prompt to input "Please may I have the flag?" is redirected too. Worry not, just input it and you'll be fine.

Running `./in-out-error > /dev/null` yields the flag.

---

## Store

Let's begin by doing `netcat` into the server:

```bash
nc 2018shell.picoctf.com 53220
```

The output appears to be a shopping app. You initially have 1100 dollars. You can either buy imitation flags for 1000 dollars each, or you can buy the real flag for 100000 dollars.

Let's then look into the source code. Checkout line numbers 37-38

The total cost is calculated by this expression: `cpp~(int) 1000 * (int) number_flags`. The result will be evaluated with type int. As a result, when `number_flags` get a bit to high, the expression will overflow to some arbitrary negative number. If the cost is negative, instead of being charged, the shop will give you money for purchasing a lot of flag instead.

Now, let's get back to the netcat shell. I choose to buy 3000000 imitation flag.

```
Imitation Flags cost 1000 each, how many would you like?
3000000

Your total cost is: -1294967296

Your new balance: 1294968396
```

Now that you are rich, you can purchase the real flag.

## Script me

The problem is about adding bracket strings together with the given rule.

```
Rules:
() + () = ()()                                      => [combine]
((())) + () = ((())())                              => [absorb-right]
() + ((())) = (()(()))                              => [absorb-left]
(())(()) + () = (())(()())                          => [combined-absorb-right]
() + (())(()) = (()())(())                          => [combined-absorb-left]
(())(()) + ((())) = ((())(())(()))                  => [absorb-combined-right]
((())) + (())(()) = ((())(())(()))                  => [absorb-combined-left]
() + (()) + ((())) = (()()) + ((())) = ((()())(())) => [left-associative]
```

If you look closely, the rules actually boil down to these:

-   If the two strings have the same nested level, simple concatenate them to get the result.
-   If the first string have the higher nested level, the result is the first string with the second string inserted right before its final bracket.
-   If the second string have the higher nested level, the result is the second string with the first string inserted right after its first bracket.
-   Also, if there are multiple operations, the result is calculated accumulatingly from left to right (left-associative)

You can write a simple Python script to calculate this. The following script of mine also automatically send the answer.

```python
import sys
import socket


def level(s):
    res = 0
    l = 0
    for i in s:
        if i == '(':
            l += 1
        else:
            l -= 1
        res = max(res, l)
    return res


def add(str1, str2):
    str1 = str1.strip()
    str2 = str2.strip()
    l1 = level(str1)
    l2 = level(str2)
    if (l1 == l2):
        return str1 + str2
    if (l1 < l2):
        return str2[0] + str1 + str2[1:]
    if (l1 > l2):
        return str1[:-1] + str2 + str1[-1]


def eval_expression(s):
    n = s.split("+")
    res = n[0]
    for i in range(1, len(n)):
        res = add(res, n[i])
    return res


s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.connect(("2018shell.picoctf.com", 1542))
buffer = []
while True:
    data = s.recv(4096)
    if not data:
        break
    data = data.decode().split("\n")
    print(data)
    buffer.extend(data)
    if ('> ' in data):
        # print(buffer)
        i = len(buffer) - 1
        expression = ""
        while (not "(" in buffer[i]):
            i -= 1
        while ("(" in buffer[i] or ")" in buffer[i]):
            expression = buffer[i] + expression
            i -= 1
        expression = expression.split("=")[0].strip()
        res = eval_expression(expression) + '\n'
        buffer = []
        s.sendall(bytes(res, "utf-8"))

s.close()
```

---

## Roulette

The challenge is presented as a roulette game. You get a starter amount of money, you can bet some money in a number from 1 to 36, and if you win, you get back twice that bet. If you have earned 1 billion dollars you can get the flag.

Let's analyse the included code

```c
#include <limits.h>
#include <stdint.h>
#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <unistd.h>

#define MAX_NUM_LEN 12
#define HOTSTREAK 3
#define MAX_WINS 16
#define ONE_BILLION 1000000000
#define ROULETTE_SIZE 36
#define ROULETTE_SPINS 128
#define ROULETTE_SLOWS 16
#define NUM_WIN_MSGS 10
#define NUM_LOSE_MSGS 5

long cash = 0;
long wins = 0;

int is_digit(char c) { return '0' <= c && c <= '9'; }

long get_long() {
    printf("> ");
    uint64_t l = 0;
    char c = 0;
    while (!is_digit(c))
        c = getchar();
    while (is_digit(c)) {
        if (l >= LONG_MAX) {
            l = LONG_MAX;
            break;
        }
        l *= 10;
        l += c - '0';
        c = getchar();
    }
    while (c != '\n')
        c = getchar();
    return l;
}

long get_rand() {
    long seed;
    FILE *f = fopen("/dev/urandom", "r");
    fread(&seed, sizeof(seed), 1, f);
    fclose(f);
    seed = seed % 5000;
    if (seed < 0)
        seed = seed * -1;
    srand(seed);
    return seed;
}

long get_bet() {
    while (1) {
        puts("How much will you wager?");
        printf("Current Balance: $%lu \t Current Wins: %lu\n", cash, wins);
        long bet = get_long();
        if (bet <= cash) {
            return bet;
        } else {
            puts("You can't bet more than you have!");
        }
    }
}

long get_choice() {
    while (1) {
        printf("Choose a number (1-%d)\n", ROULETTE_SIZE);
        long choice = get_long();
        if (1 <= choice && choice <= ROULETTE_SIZE) {
            return choice;
        } else {
            puts("Please enter a valid choice.");
        }
    }
}

int print_flag() {
    char flag[48];
    FILE *file;
    file = fopen("flag.txt", "r");
    if (file == NULL) {
        printf("Failed to open the flag file\n");
        return -1;
    }
    fgets(flag, sizeof(flag), file);
    printf("%s", flag);
    return 0;
}

const char *win_msgs[NUM_WIN_MSGS] = {
    "Wow.. Nice One!",
    "You chose correct!",
    "Winner!",
    "Wow, you won!",
    "Alright, now you're cooking!",
    "Darn.. Here you go",
    "Darn, you got it right.",
    "You.. win.. this round...",
    "Congrats!",
    "You're not cheating are you?",
};

const char *lose_msgs1[NUM_LOSE_MSGS] = {"WRONG", "Nice try..", "YOU LOSE",
                                         "Not this time..",
                                         "Better luck next time..."};

const char *lose_msgs2[NUM_LOSE_MSGS] = {
    "Just give up!", "It's over for you.", "Stop wasting your time.",
    "You're never gonna win",
    "If you keep it up, maybe you'll get the flag in 100000000000 years"};

void spin_roulette(long spin) {
    int n;
    puts("");
    printf("Roulette  :  ");
    int i, j;
    int s = 12500;
    for (i = 0; i < ROULETTE_SPINS; i++) {
        n = printf("%d", (i % ROULETTE_SIZE) + 1);
        usleep(s);
        for (j = 0; j < n; j++) {
            printf("\b \b");
        }
    }
    for (i = ROULETTE_SPINS; i < (ROULETTE_SPINS + ROULETTE_SIZE); i++) {
        n = printf("%d", (i % ROULETTE_SIZE) + 1);
        if (((i % ROULETTE_SIZE) + 1) == spin) {
            for (j = 0; j < n; j++) {
                printf("\b \b");
            }
            break;
        }
        usleep(s);
        for (j = 0; j < n; j++) {
            printf("\b \b");
        }
    }
    for (int k = 0; k < ROULETTE_SIZE; k++) {
        n = printf("%d", ((i + k) % ROULETTE_SIZE) + 1);
        s = 1.1 * s;
        usleep(s);
        for (j = 0; j < n; j++) {
            printf("\b \b");
        }
    }
    printf("%ld", spin);
    usleep(s);
    puts("");
    puts("");
}

void play_roulette(long choice, long bet) {
    printf("Spinning the Roulette for a chance to win $%lu!\n", 2 * bet);
    long spin = (rand() % ROULETTE_SIZE) + 1;
    spin_roulette(spin);
    if (spin == choice) {
        cash += 2 * bet;
        puts(win_msgs[rand() % NUM_WIN_MSGS]);
        wins += 1;
    } else {
        puts(lose_msgs1[rand() % NUM_LOSE_MSGS]);
        puts(lose_msgs2[rand() % NUM_LOSE_MSGS]);
    }
    puts("");
}

int main(int argc, char *argv[]) {
    setvbuf(stdout, NULL, _IONBF, 0);
    cash = get_rand();
    puts("Welcome to ONLINE ROULETTE!");
    printf("Here, have $%ld to start on the house! You'll lose it all anyways "
           ">:)\n",
           cash);
    puts("");

    long bet;
    long choice;
    while (cash > 0) {
        bet = get_bet();
        cash -= bet;
        choice = get_choice();
        puts("");

        play_roulette(choice, bet);

        if (wins >= MAX_WINS) {
            printf("Wow you won %lu times? Looks like its time for you cash "
                   "you out.\n",
                   wins);
            printf("Congrats you made $%lu. See you next time!\n", cash);
            exit(-1);
        }

        if (cash > ONE_BILLION) {
            printf("*** Current Balance: $%lu ***\n", cash);
            if (wins >= HOTSTREAK) {
                puts(
                    "Wow, I can't believe you did it.. You deserve this flag!");
                print_flag();
                exit(0);
            } else {
                puts("Wait a second... You're not even on a hotstreak! Get out "
                     "of here cheater!");
                exit(-1);
            }
        }
    }
    puts("Haha, lost all the money I gave you already? See ya later!");
    return 0;
}
```
Here are some analysis that I can derive from that code.
- The program get a seed from `/dev/urandom` then seed the random module. Also this seed is returned and used as the initial cash balance. This value range between 1 and 5000. Because you have the seed, you can run a C program that take the seed and return the random sequence that the server use.
- The `get_long` function looks like it's susceptible to overflow. While getting input, the value is stored into a uint64 variable, but the result is converted into signed int32. So if you input anything bigger than the signed int max ($2^31 - 1$), the result will be it's two's complement ($-(2^32 - input)$). If you input 3294967296, the program will see that you have betted negative one billion dollars, so if you lose the round you will actually gain money.
- The program will exit in the following case:
    - You have won 16 rounds in total: no flag
    - You have more than 1 billion dollars in your balance, but won less than three round: no flag
    - You have more than 1 billion dollars in your balance, and won more than three round:
    this case will give you the flag
- Because the game exit after 16 rounds and doesn't give you the flag in this case, you can't possibly won one billion dollars by winning all 16 rounds. You can prove this quite easily:
    - The maximum amount of cash you can get initially is 5000.
    - If you bet all your balance and win the round, your balance get doubled.
    - After 16 winning rounds, your balance can best reach $$ 5000 * 2^16 $$ which is way below one billion dollars.

Therefore, you can devise the following strategy:
- Start the game, get the random seed that the server use (the initial balance). Plug that number in a C program, and get the random sequence that the server uses for rouletting. Remember to use GCC to compile that program on a Linux system, not on Mac OS because the pseudo-random generation process is different on these two OSes.
- Win the first three round with some small bet. Bear in mind that after a win round, the server takes another random number, so the roulette result is every second number. For example, if you have the following sequence: `23 35 24 24 10 4 7 3 21 ...`, you should bet on `23, 24, 10` to win three round.
- After that, bet a negative billion dollars, and deliberately lose that round.
- Grab the flag.