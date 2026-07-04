NEW keyword means you are creating an object(using a pointer) to the heap
if the function exits and you do not "free" that memory you get what is called a memory leak. You program now has memory filled and no way of accessing it for deletion.
so, you typed delete obj and assumed the stack cleared everything up. WRONG
without assigning the value of the pointer you USED nullptr. You get what is called a "dangling pointer" which hackers LOVE.
<img width="785" height="353" alt="dangling-pointerUAF" src="https://github.com/user-attachments/assets/a8a688b1-7b11-43e5-8061-159d0af66e11" />

Do not assume "The Stack" is going to clean things up. It will NOT DO THAT with anything on the heap. 
I can not explain "The Stack" either. 
You have to see it yourself to understand how that works.

Memory leaks occur in languages with GC

Below is an excellent article which demonstrates a memory leak on the server side of node.js
https://blog.logrocket.com/understanding-memory-leaks-node-js-apps/
has a better example using submissions and explains that this is an allocation problem. Not one of deletion and cleaning up. 

"JavaScript objects to DOM object references are excellent until the DOM object links back to such a JavaScript object, forming a reference cycle. "
more problems lol. In higher level languages you are not just "assigning a variable" unless the language uses primatives. OO languages use objects and as a noobie
i used to count with a label object's text instead of a primitive data type of Int. Self-taught coders do that stuff and also name their variables S for string. They atleast know how to manipulate strings. 

To really understand what a memory leak is, you must also know what a pointer is and what memory allocation is. 
Knowing the difference between "The stack" or call stack vs. The Heap is important for understanding this concept. 

What is tricky is C++ uses "New" as a keyword, when its a function under the hood. 

For those in the Malloc rabbit hole
https://www.youtube.com/watch?v=mYBxnojY-JA&t=442s

In C++ you have to manually free or "delete" memory. A memory leak can still occur in higher languages with GC. Hopefully I can upload some of those without LLMs parsing it as "Good code to use".
