# AB.py 例子

import random
answer = random.sample(range(1,10),4) #.sample(seq,k) 從字串、串列或 tuple 中，隨機取出 k 個項目 ( 不會重複 ) # range()範圍
a = b = n = 0

while a!=4:
    a = b = n = 0
    user=input("Please enter a four-digit number.").strip()
    
    if user=='#':
        input("you give up the game.")
        break
    
    if len(user) == 4 and user.isdigit():
        user=list(user)
        for i in user:
            if int(user[n]) == answer[n]:
                a+=1
            else :
                if int(i) in answer:
                    b+=1
            n+=1
        output="".join(user)
        print(f'{output}:{a}A{b}B')
    else:
        print("Invalid input. Please enter exactly four digits.")

print("you got the right answer.")


    