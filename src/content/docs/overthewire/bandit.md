---
title: Bandit
description: Niveles de bandit resueltos
---

###### Nivel 0
```bash
ssh bandit0@bandit.labs.overthewire.org -p 2220
# password: bandit0
```

###### Nivel 0 -> Nivel 1
```bash
cat readme | grep "password" | cut -d':' -f2 | xargs
# Flag: ZjLjTmM6FvvyRnrb2rfNWOZOTa6ip5If
```

###### Nivel 1 -> Nivel 2
```bash
cat /home/bandit1/-
# Flag: 263JGJPfgU6LtdEvgfWU1XP5yac29mFx
```

###### Nivel 2 -> Nivel 3
```bash
cat ‘spaces in this file name’
# Flag: MNk8KNH3Usiio41PRUEoDFPqfxLPlSmx
```

###### Nivel 3 -> Nivel 4 
```bash
find inhere/ -type f | xargs cat
# Flag: 2WmrDFRmJIq3IPxneAaMGhap0pFhF3NJ
```

###### Nivel 4 -> Nivel 5
```bash
find inhere/ -type f -exec cat {} + | grep -o '[a-zA-Z0-9]\{32\}'
# Flag: 4oQYVPkxZOOEOO5pTW81FB8j8lxXGUQw
```

###### Nivel 5 -> Nivel 6
```bash
find inhere/ -type f -size 1033c | xargs cat | grep -v ' '
# Flag: HWasnPhtq9AVKe0dmk45nxy20cvUa6EG
```

###### Nivel 6 -> Nivel 7
```bash
find / -type f -user bandit7 -group bandit6 -size 33c 2> /dev/null | xargs cat
# Flag: dfwvzFQi4mU0wfNbFOe9RoWskMLg7eEc
```

###### Nivel 8 -> Nivel 9
```bash
sort data.txt | uniq -u
# Flag: 4CKMh1JI91bUIZZPXDqGanal4xvAg0JM
```

###### Nivel 9 -> Nivel 10
```bash
strings data.txt | grep "====" | grep -o '[a-zA-Z0-9]\{32\}'
# Flag: FGUW5ilLVJrxX9kMYMmlN4MgbpfMiqey
```

###### Nivel 10 -> Nivel 11
```bash
base64 -d data.txt | awk 'NF{print $NF}'
# Flag: dtR173fZKb0RRsDFSGsg2RWnpNVj3qRr
```