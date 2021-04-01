---
title: "Linux on the Lenovo Thinkpad W510 – Part 3"
subheader: "ArchLinux NVidia 340.xx Legacy Driver Updates"
datePublished: 2014-10-30T21:45:11+00:00
tags:
  - archlinux
  - Linux
  - thinkpad
  - w510
slug: "linux-lenovo-thinkpad-w510-part-3"
---
The NVidia drivers after 343.22 no longer support the NVidia Quadro FX 880M GPU
for the ThinkPad W510 so I had to switch to legacy drivers (340-xx).

To get everything working again, I make some changes to my kernel mode settings
and my xorg.conf. In <var>/boot/syslinux/syslinux.cfg</var> and
<var>/etc/xorg.conf.d/20-nvidia.conf</var> I am now using this:

- **20-nvidia.conf**

    ```conf
    Section "Monitor"
        Identifier     "Monitor0"
        VendorName     "Unknown"
        ModelName      "Unknown"
        HorizSync       28.0 - 33.0
        VertRefresh     43.0 - 72.0
        Option         "DPMS"
    EndSection

    Section "Device"
      Identifier "Nvidia Card"
      Driver "nvidia"
      VendorName "NVIDIA Corporation"
      BoardName "Quadro FX 880M:

      #Option "NoLogo" "true"
      Option "RegistryDwords" "EnableBrightnessControl=1"

    EndSection

    Section "Screen"
        Identifier     "Screen0"
        Device         "Device0"
        Monitor        "Monitor0"
        DefaultDepth    24
        SubSection     "Display"
            Depth       24
        EndSubSection
    EndSection
    ```

- **syslinux.cfg**

    ```conf
    LABEL archnvidia
        MENU LABEL Arch Linux (NVidia)
        LINUX ../vmlinuz-linux
        APPEND root=/dev/sda1 rw nomodeset nouveau.modeset=0
        INITRD ../initramfs-linux.img
    ```

And in the <var>syslinux.cfg</var> the line <code>DEFAULT arch</code> is now
<code>DEFAULT archnvidia</code> to default to the new kernel settings.

