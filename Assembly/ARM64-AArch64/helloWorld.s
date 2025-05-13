.global _start
  _start:
    MOV X0,#1 
    LDR X1,=msg // Fetch the value of msg
    LDR X2,=msgLen // Fetch the value of msgLen
    MOV X8,#64 // Instruct the device to write in a console (Syscall number: write)
    SVC #0
    
    MOV X8,#93 // Syscall number: exit
    SVC #0
    

.section .data
  msg:
    .asciz "Hello, World!\n" // As suggested online, use .asciz for a group of characters.
  msgLen = .-msg // Declare the length of variable "msg"