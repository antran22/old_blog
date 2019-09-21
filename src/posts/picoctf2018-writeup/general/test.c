#include <limits.h>
#include <stdint.h>
#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <unistd.h>

int is_digit(char c) { return '0' <= c && c <= '9'; }

long get_long() {
    printf("> ");
    uint64_t l = 0;
    char c = 0;
    while (!is_digit(c))
        c = getchar();
    while (is_digit(c)) {
        printf("l = %llu\n", l);
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

int main () {
    long x = get_long();
    printf("x is : %ld\n", x);
}