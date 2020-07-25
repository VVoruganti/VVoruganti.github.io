---
title: "🌠 Turbocharge Windows Development with WSL"
date: "05/12/2020"
tags: ["WSL"]
---

I am currently using a Surface Book as my main laptop for everyday work and development.
Initially, when I was setting up Linux as a dual boot I found that I was not a
fan of the drastic cut to performance and battery life I would have to commit to.
So, I took it upon myself to try and optimize my development environment on Windows,
despite it being less than ideal.

The first thing I did was set up Windows Subsystem Linux (WSL). This is basically
a utility that was built by Microsoft that lets you run a terminal with a full Linux
kernel while still in Windows. It sort of operates like a virtual machine, but
you can access both your Linux and regular Windows file system from within it.
There are two versions of this and which one you want to use will vary depending
on your needs

WSL 1 is the original version which has the benefit of being faster when you are
messing with your Windows filesystem, while WSL 2 is the newer one and has better
performance in the linux file system.

I figured I would probably be staying within the Linux file system so I opted to
use WSL 2. Now, at the time of writing this, WSL 2 was only available if you used
the Windows Insider Build of Windows 10. I also chose to use the Ubuntu version
of WSL, but you can choose whichever one you like.

## Terminal Emulator

The first thing I wanted to do was find a good terminal emulator that I could
use that was fast and customizable. Initially, I was between
[ConEMU](https://conemu.github.io/) and [Alacritty](https://github.com/alacritty/alacritty).

ConEMU seems to be the more feature-rich application but I found the support for
color customization to be quite lackluster as the color schemes I tried were not
working. Also, I found performance with apps like `bash•vim` were quite slow. **Alacritty**
is great because it was built with performance in mind and messing with colors
was really straight forward.

I installed it using chocolatey

```bash
choco install alacritty
```

I then edited my _alacritty.yml_ file to make it open WSL by default and to mess
with the color scheme. For me this file was located in
C:Users\{my user}\AppData\Roaming\alacritty.

```yaml
shell:
  program: wsl
```

Another one I messed around with was the
[Windows terminal](https://www.microsoft.com/en-us/p/windows-terminal/9n0dx20hk701)
which was still in beta and experimental at the time. It had pretty could
performance, but I found it was still fairly buggy when using TUI application
or with managing nice color schemes.

## Tmux

The next thing I wanted to do was to configure Tmux to make sure that colors
stayed the same (I'm a bit of a stickler for color schemes if you haven't noticed).
I use the [OceanicNext](https://github.com/voronianski/oceanic-next-color-scheme)
Color scheme, but it wasn't really showing up properly in tmux. So I had to edit my
`bash•.tmux.conf` file.

```bash
set-option -sg escape-time 10
set-option -g default-terminal "tmux-256color"
set-option -sa terminal-overrides ",*256col*:RGB"
set-option -ga terminal-overrides ",*256col*:Tc"
```

After that my tmux looked just as beautiful as before.

## Xserver

Finally, I wanted to set up an Xserver so that I could run gui applications from
within WSL. This isn't really perfect but I could. I downloaded an application
called [VcXsrv](https://sourceforge.net/projects/vcxsrv/).

Now to set it up to work with WSL I set the following
variable in my `bash•.bashrc`. Just make sure to substitute in your own IP address.
you can find it in the command prompt with `bash•ipconfig`

**NOTE** the ip address given if you run `bash•ifconfig` in WSL is different than your
actual IP address, so make sure you use command _prompt_.

```bash
export DISPLAY:{MY IP ADDRESS}:0.0
export LIBGL_ALWAYS_INDIRECT=1
```

once you reload bash you can startup up VcXsrv and follow the prompt on the first
2 windows. On the third window make sure you check Disable Access Control

![VcXsrv Disable Access Control](../images/VcXsrv Disable Access Control.png)

continue through the prompts. Then once the server is running you can launch a program
like XFCE and it will appear on the screen.

![Working XFCE](../images/Working XFCE.png)

if you want to try XFCE like above install

```bash
sudo apt-get xfce-session
```

then once the server is running just run `bash•xfce-session` in the terminal

**NOTE** This is a notable difference between WSL 1 and 2. I don't think you
follow the same steps with WSL 1

Once I had that setup, I was able to run things like XFCE from within windows.

## Running Windows Applications

A neat trick of WSL is that if everything is running properly you can actually
run windows .exe programs from within WSL. You can try this out by typing
`bash•explorer.exe .` This is a handy trick to open a file explorer in your WSL partition.

Also handy if you want to run a windows program on files in WSL without manually
moving them to Windows. I used this trick to develop Löve2D games from WSL
and launch them from Windows.

If you want to see more of my own environment you can check out my
[dotfiles](https://github.com/VVoruganti/dotfiles) on my Github page
