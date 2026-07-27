import random
# Import the random library

n = random.randrange(1, 100)
# Declare the n, the number to be guessed

guess = int(input("Enter a number to be guessed (1 to 100): "))
# Declare the first input of the user 

# The while loop will be in loop until the player guess the correct number, outputting "too low" if guess is not equal and lower than n and "too high" if guess is not equal and higher than n.
while n != guess:        
	if guess < n:
		print("Too low")
		guess = int(input("Enter a number to be guessed (1 to 100): "))
	elif guess > n:
		print("Too high")
		guess = int(input("Enter a number to be guessed (1 to 100): "))        
	else:
	    break
print("You guessed!")