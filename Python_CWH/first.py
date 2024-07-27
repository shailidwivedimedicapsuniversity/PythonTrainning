# modules, comments and pip

# pyjokes, pyttsx3 ,emoji, pygame modules, camelcase, platform etc are modules here 
# pip install package_name - it is use to install, upgrade, and manage Python packages 
# pip install --upgrade package_name, pip uninstall package_name, pip show package_name
# pip list

print("shaili")
#print poem
""" print('''      twinkle twinkle little star
      how i wonder what you are 
      up above. the world so high
      like a d,imond in the sky''') """
      

# sum of five number
# n = [1,2,3,4,5]
# sum = 0
# for i in n:
#     sum = sum+i
    
# print(sum)

# import pyjokes
# jokes = pyjokes.get_joke()
# print(jokes)

# import pyttsx3
# engine = pyttsx3.init()
# engine.say("you are best")
# engine.runAndWait()

# import pygame

# pygame.init()
# screen = pygame.display.set_mode((400, 300))
# pygame.draw.rect(screen, (0, 128, 255), pygame.Rect(30, 30, 60, 60))

# pygame.display.flip()

# input("Press Enter to quit...")
# pygame.quit()

# import pygame
# import sys

# # Initialize Pygame
# pygame.init()

# # Set up the screen
# screen = pygame.display.set_mode((800, 600))
# pygame.display.set_caption("Simple Drawing App")

# # Colors
# BLACK = (0, 0, 0)
# WHITE = (255, 255, 255)

# # Variables
# drawing = False
# points = []

# # Game loop
# while True:
#     for event in pygame.event.get():
#         if event.type == pygame.QUIT:
#             pygame.quit()
#             sys.exit()
#         elif event.type == pygame.MOUSEBUTTONDOWN:
#             drawing = True
#             points = [event.pos]
#         elif event.type == pygame.MOUSEBUTTONUP:
#             drawing = False
#         elif event.type == pygame.MOUSEMOTION:
#             if drawing:
#                 points.append(event.pos)

#     screen.fill(BLACK)

#     # Draw all points as a line
#     if len(points) > 1:
#         pygame.draw.lines(screen, WHITE, False, points, 2)

#     pygame.display.flip()

#emoji module
# import platform

# x = dir(platform)
# print(x)

# import emoji

# # Example 1: Printing emojis directly
# print(emoji.emojize(":thumbs_up:"))
# print(emoji.emojize(":rocket:"))

# # Example 2: Using emojis in strings
# message = "Hello! Have a :pizza: and :beer:"
# print(emoji.emojize(message))

# # Example 3: Printing with alias
# print(emoji.emojize("Python is :snake:"))

# # Example 4: Using emoticons
# print(emoji.emojize("I :love: Python! :heart_eyes:"))

#. Write a python program to print the contents of a directory using the os module.
import os

directory_path = '/home/oem'
contents = os.listdir(directory_path)
print(contents)

import camelcase
c = camelcase.CamelCase()
txt = "hello world"
print(c.hump(txt))