---
title:  "Quick way to run a windows application on a mac"
date:   2019-08-02
category: tools
permalink: /blog/quick-way-run-windows-application-on-mac.html
image: run-windows-app-mac.jpg
---
From time to time, as a mac owner, you'll have to run a Windows application for testing (or other) purposes.

Obviously, there are tons of solutions allowing you to run windows on a mac, but not all are light, free and quick wins.

> VIRTUALIZATION TIME

The quickest and easisest way (to me) is to use [Virtualbox](https://www.virtualbox.org/) (open source and free), download a free virtual Windows machine from the [Microsoft developer website](https://developer.microsoft.com/en-us/microsoft-edge/tools/vms/), and spin it.

So, ok, those virtual machines expire after 90 days. In most case, this will be way enough for you to test your application, and run your stuff.

One thing you may need while you're playing with your windows machine, is to share things with your mac. Sharing folders between your machine and a VM is not native. Here's how you do it:

1. In Virtualbox, select your VM, and go to Settings > Shared Folders, and add the folder (on your mac) you wish to use on your VM
2. Then go to Settings > Storage and add an optical drive (+ and cdrom icon) to your IDE controller (choose 'Leave Empty')
3. Start your VM
4. In Virtulabox, go to Devices > Insert Guest Additions CD Image, and run the install program
5. Once the program has been installed, reboot your VM
6. That's it, ope file explorer, your file sharing folder should be appearing in there.

Hope this helps. 

