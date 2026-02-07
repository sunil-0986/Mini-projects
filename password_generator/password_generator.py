import random
import string

def password(length, uppercase=True, lowercase=True, numbers=True, special=True):

    

    uppercase_chars = string.ascii_uppercase if uppercase else ""
    lowercase_chars = string.ascii_lowercase if lowercase else ""
    number_chars = string.digits if numbers else ""
    special_chars = string.punctuation if special else ""

    possible_chars = (
        uppercase_chars +
        lowercase_chars +
        number_chars +
        special_chars
    )

    if not possible_chars:
        raise ValueError("At least one character type must be selected.")

    
    generated_password = "".join(
        random.choice(possible_chars) for _ in range(length)
    )

    
    with open("passwords.txt", "a") as f:
        f.write(generated_password + "\n")

    return generated_password


while True:
    try:
        length=int(input("Enter length of password you want:"))

        if length < 8:
            print("Minimum length should be 8. Please try again.\n")
        else:
            break
    except ValueError:
        print("Please Enter a valid number")
        

print(password(length=length,uppercase=True, lowercase=True,numbers=True, special=True))