---
title: "Löve2D on WSL"
date: "05/04/2020"
tags: ["Games", "WSL"]
---

Setting up love2d on WSL is fairly simple and similar to just setting it up on
windows by itself. This guide assumes that you already have WSL installed and your
environment setup. I am using WSL 2 for this and as of writing this guide, this
is only available if you use the windows insider preview build in order to get
the nightly build of windows.

## Setting it up on Windows

first go to [love2d.org](http://love2d.org) in order to  download the necessary
installer. In my case I clicked on the *64-bit installer.*

![Löve2D Installation Link](../images/love-install-link.png)

I followed the installer so that the application was installed on the system. You
can test that this is working by typing "love" into the windows search bar and
clicking on the application. A stock GIF should pop up in the love game window.

![Windows Environment Variables](../images/environment-variables-popup.png)

Before transitioning over to WSL you need to add love to your environment
variables.
In the windows search bar type *edit  the system environment variables* and open
the dialog window that pops up.

If this does not work go the control panel and manually search for this window

![Löve2D Default Popup](../images/love-default.png)

From here click on environment variables and add the *exe* for love2d to your path.
For me this was located at **C:/Program Files/LOVE** but this could vary depending
on what options you picked during installation

You can test this by opening up command prompt and typing `love` into the shell.
This should load the balloon GIF shown above. Once this is working you are ready
to transition to WSL.

## Setting it up on WSL

Open up WSL in your desired method

- Typing WSL into run
- Typing `wsl` in command prompt
- Using another terminal emulator

Now in WSL2 you can run windows *exe's* by typing in the name of the entire exe.
However it needs to be on your path for it to work. An example of this is to type
`explorer.exe` to open up the windows file explorer

Typing `explorer.exe .` in WSL will open the windows file explorer in the WSL
file system

So from WSL you can type `love.exe` to run love2d from within WSL. To make the
development process similar to linux/unix you can make an alias to it. The below
script will add the alias to your bashrc and source it.

```bash
$ echo "alias love='love.exe'" >> ~/.bashrc
$ source ~/.bashrc
```

If you are using a different shell or would prefer to put your aliases somewhere
else you can write it in manually.

Now you should be able to simply type `love` in your terminal to run love2d.

