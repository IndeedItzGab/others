# The purpose of this exercise is to create a file that acts like our own database.
import json # Import "json" as shown in w3school.com for manipulating json related things.
import os

# Let's create a database1.json file and check whether it exists or not
if not os.path.exists("./database1.json"):
  file = open("./database1.json", "x") # "x" is responsible for creating a new file while using open()
  file.close() # Make sure to close the file

# Let's start creating object json inside our first database file.
if os.path.exists("./database1.json"):
  with open("./database1.json", "w") as file: # "w" is responsible for rewriting the file. Additionally, we used "with" so we don't need to use close() function again, well it is your choice which one you'll choose.
    file.write('{\n  "name": "Indeed"\n}') # Write the content
    # file.close() was not mentioned because we used "with" for opening the file.
    # You can use multi-line string for better interaction.