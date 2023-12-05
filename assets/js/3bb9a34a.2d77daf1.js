"use strict";(self.webpackChunksuse_edge_docs=self.webpackChunksuse_edge_docs||[]).push([[2935],{8601:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var s=i(5893),t=i(1151);const o={title:"SLE Micro on OSX on Apple Silicon (UTM)"},r="Intro",c={id:"demo_setup/slemicro-utm-aarch64",title:"SLE Micro on OSX on Apple Silicon (UTM)",description:"OSX Virtualization",source:"@site/docs/demo_setup/slemicro-utm-aarch64.md",sourceDirName:"demo_setup",slug:"/demo_setup/slemicro-utm-aarch64",permalink:"/docs/demo_setup/slemicro-utm-aarch64",draft:!1,unlisted:!1,editUrl:"https://github.com/suse-edge/suse-edge.github.io/tree/main/docs/demo_setup/slemicro-utm-aarch64.md",tags:[],version:"current",lastUpdatedBy:"Andrew Gracey",lastUpdatedAt:1701811074,formattedLastUpdatedAt:"Dec 5, 2023",frontMatter:{title:"SLE Micro on OSX on Apple Silicon (UTM)"},sidebar:"docs",previous:{title:"K3s on SLE Micro",permalink:"/docs/demo_setup/k3s-on-slemicro"},next:{title:"SLE Micro on X86_64 on libvirt (virt-install)",permalink:"/docs/demo_setup/slemicro-virt-install-x86_64"}},a={},l=[{value:"OSX Virtualization",id:"osx-virtualization",level:2},{value:"SLE Micro installation automation: ISO vs Image",id:"sle-micro-installation-automation-iso-vs-image",level:2},{value:"Ignition vs Butane vs Combustion",id:"ignition-vs-butane-vs-combustion",level:2},{value:"Ignition/Combustion and UTM",id:"ignitioncombustion-and-utm",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Image preparation",id:"image-preparation",level:2},{value:"Ignition &amp; Combustion files",id:"ignition--combustion-files",level:2},{value:"VM Creation",id:"vm-creation",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"intro",children:"Intro"}),"\n",(0,s.jsx)(n.h2,{id:"osx-virtualization",children:"OSX Virtualization"}),"\n",(0,s.jsx)(n.p,{children:"Virtualization of Linux hosts on OSX can be achieved with various tools.\nThere are commercial products such as VMWare Fusion or Parallels Desktop\nas well as open-source projects such as VirtualBox, UTM or Lima."}),"\n",(0,s.jsxs)(n.p,{children:["UTM is an OSX application that uses QEMU under the hood and offers a GUI\nto manage the VM lifecycle. It supports Apple silicon CPUs, and it can\nuse native OSX virtualization (Virtualization.framework) as well. It\nalso has a scripting interface via ",(0,s.jsx)(n.a,{href:"https://docs.getutm.app/scripting/scripting/",children:"Apple\nScript"})," to automate some\nprocesses and a proper CLI (utmctl) is on the works."]}),"\n",(0,s.jsxs)(n.p,{children:["Lima is based on QEMU (experimental support for\nVirtualization.framework) as well and it launches Linux virtual machines\nwith automatic file sharing and port forwarding (like WSL2), and\ncontainerd. Lima is expected to be used on macOS hosts, but can be used\non Linux hosts as well. Lima has a proper CLI tool (limactl) and the\nbest part is VMs can be defined in yaml files, so you can even deploy\nK8s clusters with just a single command\n(see ",(0,s.jsx)(n.a,{href:"https://github.com/lima-vm/lima/blob/master/examples/k8s.yaml",children:"https://github.com/lima-vm/lima/blob/master/examples/k8s.yaml"}),")"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"NOTE:"})," Rancher desktop is ",(0,s.jsx)(n.a,{href:"https://github.com/rancher-sandbox/rancher-desktop/issues/3702",children:"based on Lima"})]}),"\n",(0,s.jsxs)(n.p,{children:["However, Lima doesn't support SLE Micro\n(",(0,s.jsx)(n.a,{href:"https://github.com/lima-vm/lima/issues/1456",children:"yet"}),") as Lima customizes\nthe VM at boot to install some packages and services and SLE Micro uses a\ndifferent approach to those things (for example as it is immutable, it\nrequires installing packages using ignition/combustion)"]}),"\n",(0,s.jsx)(n.h2,{id:"sle-micro-installation-automation-iso-vs-image",children:"SLE Micro installation automation: ISO vs Image"}),"\n",(0,s.jsxs)(n.p,{children:["SLE Micro can be installed traditionally using an ISO file that boots\nonce and using click-ops you can customize it as you wish\n(see ",(0,s.jsx)(n.a,{href:"https://documentation.suse.com/sle-micro/5.3/single-html/SLE-Micro-deployment/#cha-install",children:"https://documentation.suse.com/sle-micro/5.3/single-html/SLE-Micro-deployment/#cha-install"}),")\nbut that won't be useful."]}),"\n",(0,s.jsxs)(n.p,{children:["ISO installation can be customized using boot parameters\n(see ",(0,s.jsx)(n.a,{href:"https://documentation.suse.com/sle-micro/5.3/single-html/SLE-Micro-deployment/#sec-boot-parameters-list",children:"https://documentation.suse.com/sle-micro/5.3/single-html/SLE-Micro-deployment/#sec-boot-parameters-list"}),")\nbut those don't cover all the options. However, ISO based installation\nsupports using AutoYaST (see ",(0,s.jsx)(n.a,{href:"https://documentation.suse.com/sle-micro/5.3/single-html/SLE-Micro-autoyast/",children:"https://documentation.suse.com/sle-micro/5.3/single-html/SLE-Micro-autoyast/"}),")\nto automate the installation process."]}),"\n",(0,s.jsx)(n.p,{children:"SLE Micro can be also deployed using pre-built images. Currently, there\nare two types of images available: raw disk images and selfinstall ISOs."}),"\n",(0,s.jsx)(n.p,{children:"SLE Micro raw images are delivered for the AMD64/Intel 64 architecture,\nIBM Z ZSeries and also AArch64, however the selfinstall images are\ncurrently delivered only for the AMD64/Intel 64 architecture. The\npre-built images (both selfinstall ISOs and raw disk images) are\nintended to be configured on the first boot by using either Ignition or\nCombustion."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"To summarize"}),", the two ways as of today to deploy SLE Micro on Aarch64\non an automated fashion would be using the ISO + AutoYaST or raw\nimages + Ignition/Combustion."]}),"\n",(0,s.jsx)(n.h2,{id:"ignition-vs-butane-vs-combustion",children:"Ignition vs Butane vs Combustion"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Ignition"})," is a provisioning tool that enables you to configure a\nsystem according to your specification on the first boot. When the\nsystem is booted for the first time, Ignition is loaded as part of an\ninitramfs and searches for a configuration file within a specific\ndirectory (on a USB flash disk, or you can provide a URL). All changes\nare performed before the kernel switches from the temporal file system\nto the real root file system (before the switch_root command is issued).\nIgnition uses a configuration file in the JSON format. The file is\ncalled config.ign. SLE Micro supports\n",(0,s.jsx)(n.a,{href:"https://coreos.github.io/ignition/configuration-v3_3/",children:"Ignition config spec 3.3.0"}),"\n(see\n",(0,s.jsx)(n.a,{href:"https://documentation.suse.com/sle-micro/5.3/single-html/SLE-Micro-deployment/#sec-ignition-configuration",children:"https://documentation.suse.com/sle-micro/5.3/single-html/SLE-Micro-deployment/#sec-ignition-configuration"}),"\nfor more information)."]}),"\n",(0,s.jsxs)(n.p,{children:["Ignition files can be complex to generate manually (specially for the\nfile permissions syntax in hex or multiline things) so you can use\n",(0,s.jsx)(n.a,{href:"https://opensuse.github.io/fuel-ignition/",children:"opensuse.github.io/fuel-ignition"}),"\nto help you generate a basic one."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Butane"})," is a more human readable (and writable) configuration syntax\nbased on yaml that can be translated to Ignition easily with the ",(0,s.jsx)(n.a,{href:"https://coreos.github.io/butane/",children:"butane\nCLI"})," as Butane is not consumable by\nIgnition."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Combustion"})," is a dracut module that enables you to configure your\nsystem on its first boot. Combustion reads a provided file called ",(0,s.jsx)(n.code,{children:"script"}),"\nand executes commands in it and thus performs changes to the file\nsystem. You can use Combustion to change the default partitions, set\nusers' passwords, create files, install packages, etc."]}),"\n",(0,s.jsxs)(n.p,{children:["The Combustion dracut module is invoked after the ",(0,s.jsx)(n.code,{children:"ignition.firstboot"}),"\nargument is passed to the kernel command line. Combustion then reads the\nconfiguration from script. Combustion tries to configure the network, if\nthe network flag has been found in script. After ",(0,s.jsx)(n.code,{children:"/sysroot"})," is mounted,\nCombustion tries to activate all mount points in ",(0,s.jsx)(n.code,{children:"/etc/fstab"})," and then\ncall ",(0,s.jsx)(n.code,{children:"transactional-update"})," to apply other changes (like setting root\npassword or installing packages).\nSee ",(0,s.jsx)(n.a,{href:"https://documentation.suse.com/sle-micro/5.3/single-html/SLE-Micro-deployment/#sec-combustion-script",children:"https://documentation.suse.com/sle-micro/5.3/single-html/SLE-Micro-deployment/#sec-combustion-script"}),"\nfor more information."]}),"\n",(0,s.jsx)(n.h2,{id:"ignitioncombustion-and-utm",children:"Ignition/Combustion and UTM"}),"\n",(0,s.jsx)(n.p,{children:"Ignition and Combustion are intended to automate the deployment of SLE\nMicro systems. To use them with UTM there are a couple of alternatives:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Use the QEMU ",(0,s.jsx)(n.code,{children:"fw_cfg"})," flag as ",(0,s.jsx)(n.code,{children:"-fw_cfg name=opt/org.opensuse.combustion/script,file=/var/combustion-script"}),"\nfor combustion or ",(0,s.jsx)(n.code,{children:"-fw_cfg name=opt/com.coreos/config,file=PATH_TO_config.ign"})," for ignition"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Create a raw disk or ISO file to host the Ignition or Combustion (or\nboth) files."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["For Ignition, the configuration file ",(0,s.jsx)(n.code,{children:"config.ign"})," must reside in the\n",(0,s.jsx)(n.code,{children:"ignition"})," subdirectory on the configuration media labeled ",(0,s.jsx)(n.code,{children:"ignition"}),". The\ndirectory structure must look as follows:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"<root directory>\n\u2514\u2500\u2500 ignition\n    \u2514\u2500\u2500 config.ign\n"})}),"\n",(0,s.jsxs)(n.p,{children:["For Combustion, the configuration device needs to be named ",(0,s.jsx)(n.code,{children:"combustion"}),", a\nspecific directory structure in that configuration medium needs to be\ncreated and include a configuration file named ",(0,s.jsx)(n.code,{children:"script"}),". In the root\ndirectory of the configuration medium, create a directory called\n",(0,s.jsx)(n.code,{children:"combustion"})," and place the ",(0,s.jsx)(n.code,{children:"script"})," into this directory along with other\nfiles---SSH key, configuration files, etc. The directory structure then\nshould look as follows:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"<root directory>\n\u2514\u2500\u2500 combustion\n    \u2514\u2500\u2500 script\n    \u2514\u2500\u2500 other files\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Combustion can be used along with Ignition. If you intend to do so,\nlabel your configuration medium ",(0,s.jsx)(n.code,{children:"ignition"})," and include the ",(0,s.jsx)(n.code,{children:"ignition"}),"\ndirectory with the ",(0,s.jsx)(n.code,{children:"config.ign"})," to your directory structure as shown\nbelow:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"<root directory>\n\u2514\u2500\u2500 combustion\n    \u2514\u2500\u2500 script\n    \u2514\u2500\u2500 other files\n\u2514\u2500\u2500 ignition\n    \u2514\u2500\u2500 config.ign\n"})}),"\n",(0,s.jsx)(n.p,{children:"In this scenario, Ignition runs before Combustion."}),"\n",(0,s.jsx)(n.h1,{id:"image-based-process-step-by-step",children:"Image-based process step by step"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"NOTE"}),": There is a helper script that automates all the steps included ",(0,s.jsx)(n.a,{href:"https://github.com/suse-edge/misc/blob/main/slemicro/create_vm.sh",children:"here"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"SLE Micro raw image"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Download the raw image file from the SUSE website at ",(0,s.jsx)(n.a,{href:"https://www.suse.com/download/sle-micro/",children:"https://www.suse.com/download/sle-micro/"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Select ARM architecture"}),"\n",(0,s.jsxs)(n.li,{children:["Look for the raw file (I.e.- ",(0,s.jsx)(n.code,{children:"SLE-Micro.aarch64-5.3.0-Default-GM.raw.xz"}),")"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"NOTE:"})," You need to have a valid user on the SUSE site to be able to\ndownload the file."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Access to ",(0,s.jsx)(n.a,{href:"https://scc.suse.com/",children:"SCC.suse.com"})," to generate a registration code"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Search for ",(0,s.jsx)(n.code,{children:"SUSE Linux Enterprise Micro"})," via the ",(0,s.jsx)(n.code,{children:"Products"})," menu, select the arch/version then copy and manually activate the registration code"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Butane, qemu and cdrtools installed (using brew for example)"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"brew install butane cdrtools qemu\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"UTM installed (using brew for example)"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"brew install --cask utm\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," If using the previous script, it is required to install UTM\n4.2.2 at least as it includes the proper support for the automation."]}),"\n",(0,s.jsx)(n.h2,{id:"image-preparation",children:"Image preparation"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Uncompress the SLE Micro image"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"xz -d ~/Downloads/SLE-Micro.*-Default-GM.raw.xz\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Move the file to a proper location and rename it to fit the VM\nhostname"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"cp ~/Downloads/SLE-Micro.*-Default-GM.raw ~/VMs/slemicro.raw\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Resize the image file. In this example, to 30G"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"qemu-img resize -f raw ~/VMs/slemicro.raw 30G > /dev/null\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"ignition--combustion-files",children:"Ignition & Combustion files"}),"\n",(0,s.jsx)(n.p,{children:"To automate the installation, we will leverage Butane, Ignition and\nCombustion as explained before:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Create a temporary folder to store the assets"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"TMPDIR=$(mktemp -d)\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Create the required folders for ignition and combustion"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"mkdir -p ${TMPDIR}/{combustion,ignition}\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Create a ",(0,s.jsx)(n.code,{children:"config.fcc"})," butane config file as required. See the\nfollowing example to set a ",(0,s.jsx)(n.code,{children:"root"}),' password for the root user, and to\nconfigure the hostname to be "slemicro"\'']}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'cat << \'EOF\' > ${TMPDIR}/config.fcc \nvariant: fcos \nversion: 1.4.0 \nstorage: \n  files: \n    - path: /etc/hostname \n      mode: 0644 \n      overwrite: true \n      contents: \n        inline: "slemicro" \npasswd: \n  users: \n   - name: root \n     password_hash: "$y$j9T$/t4THH10B7esLiIVBROsE.$G1lyxfy/MoFVOrfXSnWAUq70Tf3mjfZBIe18koGOuXB" \nEOF\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Create a script combustion file as required. See the following\nexample to register the SLE Micro instance to SUSE's SCC (use your\nown email/regcode) and to create a ",(0,s.jsx)(n.code,{children:"/etc/issue.d/combustion"})," file"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'cat << EOF > ${TMPDIR}/combustion/script  \n#!/bin/bash \n# combustion: network \n\n# Redirect output to the console \nexec > >(exec tee -a /dev/tty0) 2>&1\n\n# Set hostname at combustion phase for SUSEConnect\nhostname slemicro\n\n# Registration \nif ! which SUSEConnect > /dev/null 2>&1; then \n    zypper --non-interactive install suseconnect-ng \nfi \n\nSUSEConnect --email foobar@suse.com --url https://scc.suse.com --regcode YOURCODE \n\n# Leave a marker \necho "Configured with combustion" > /etc/issue.d/combustion \nEOF\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Convert the butane config to ignition"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"butane -p -o ${TMPDIR}/ignition/config.ign ${TMPDIR}/config.fcc\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Create an ISO file. It is requried for both ignition and combustion\nto work that the ISO is labeled as ",(0,s.jsx)(n.code,{children:"ignition"})," (hence the -V\nparameter)"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"mkisofs -full-iso9660-filenames -o ignition-and-combustion.iso -V ignition ${TMPDIR}\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Optional:"})," Remove the temporary folder"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"rm -Rf ${TMPDIR}\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"vm-creation",children:"VM Creation"}),"\n",(0,s.jsx)(n.p,{children:"Now it is time to finally use UTM to boot the VM"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(1124).Z+"",width:"902",height:"654"})}),"\n",(0,s.jsx)(n.p,{children:"Create a New Virtual Machine using Virtualization"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(410).Z+"",width:"452",height:"513"})}),"\n",(0,s.jsx)(n.p,{children:'Select "Other"'}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(8367).Z+"",width:"452",height:"513"})}),"\n",(0,s.jsx)(n.p,{children:'Enable the "Skip ISO boot" option as we will use the raw disk directly'}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(3464).Z+"",width:"452",height:"513"})}),"\n",(0,s.jsx)(n.p,{children:"Select the required CPU/RAM:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(527).Z+"",width:"452",height:"513"})}),"\n",(0,s.jsx)(n.p,{children:"Accept the storage size as it is, it will be deleted before booting it"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(3222).Z+"",width:"452",height:"513"})}),"\n",(0,s.jsx)(n.p,{children:"Skip the Shared Directory"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(264).Z+"",width:"452",height:"513"})}),"\n",(0,s.jsx)(n.p,{children:'Edit the VM name and enable the "Open VM Settings" toggle to customize\nit further:'}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(4424).Z+"",width:"452",height:"513"})}),"\n",(0,s.jsx)(n.p,{children:"Delete the VirtIO Drive"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(7157).Z+"",width:"900",height:"655"})}),"\n",(0,s.jsx)(n.p,{children:'Add a new Drive and select "Import"'}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(4453).Z+"",width:"928",height:"654"})}),"\n",(0,s.jsx)(n.p,{children:"Select the raw image file (~/VMs/slemicro.raw in this case)"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(5889).Z+"",width:"802",height:"450"})}),"\n",(0,s.jsx)(n.p,{children:"Repeat the last two steps to add the ignition-and-combustion.iso file"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(3513).Z+"",width:"802",height:"450"})}),"\n",(0,s.jsx)(n.p,{children:'Configure the ISO as Read Only and "CD/DVD (ISO) Image"'}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(2311).Z+"",width:"802",height:"463"})}),"\n",(0,s.jsx)(n.p,{children:"Finally, boot the VM."}),"\n",(0,s.jsx)(n.p,{children:"After a couple of seconds, the VM will boot up and will configure itself\nusing the ignition and combustion scripts, including registering itself\nto SCC"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(7283).Z+"",width:"802",height:"640"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(1230).Z+"",width:"1712",height:"483"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"NOTE:"})," In case the VM doesn't get network connectivity, try\n",(0,s.jsx)(n.a,{href:"https://github.com/utmapp/UTM/discussions/3530#discussioncomment-5072113",children:"https://github.com/utmapp/UTM/discussions/3530#discussioncomment-5072113"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"NOTE:"})," Once the VM is running, you can access via SSH via its IP as ",(0,s.jsx)(n.code,{children:"ssh root@<ip>"})]}),"\n",(0,s.jsx)(n.h1,{id:"iso-process-tbd",children:"ISO Process (TBD)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Download the ISO file"}),"\n",(0,s.jsx)(n.li,{children:"Create a new VM on UTM using the ISO file"}),"\n",(0,s.jsx)(n.li,{children:"Create the autoyast answer file"}),"\n",(0,s.jsx)(n.li,{children:"Use the AutoYaST boot parameter to map to the answer file"}),"\n",(0,s.jsx)(n.li,{children:"Boot the VM"}),"\n",(0,s.jsx)(n.li,{children:"Profit!"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},5889:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/12d3dfb41520356ee76857affe3041be04a652bc-206f55b25e5082a22dffcfe3c4b396b8.png"},527:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/1466bd582ba35bd66c26c0079802c056896e4eaa-85a9b6f5619fa6a175fc32efcf7fde67.png"},4453:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/5027d068b69ea4e908bd569ca7f907fe8e034e1d-9ceb0288822d81e78075bb1b01a3bd81.png"},264:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/5abda93849e7fe7f76805e8a3daa3fe9d82363ed-33484903fd1d3716ea7e4792d7a5f268.png"},7157:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/5e96b95370a5c483f022d179dabc0b704351523a-e1fcece863ceca41f984a5c7ae5788c0.png"},3222:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/6641b40ab6668c993e4b4b0384d3b49f586c06ff-97218ca25f480055d19be7b8839be1cb.png"},2311:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/914cbe42425661f0b5c9973160c591df72be64f1-581fca814d98f0d9ee0335151873de02.png"},3513:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/959fd78cfe57aa2edd60784ad04f8609d6ed21fb-b2418c10c2d55f94b5386de545fbc50f.png"},410:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/988c205e2d120f9ec168c26a6a5360c6288c5e0e-a9a83ff39aef91c4cc185d4b555c5b09.png"},7283:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/a7850c3aa119d254910375f49bc34251178c70f0-5c98e1ac416cd078010d0668551f769f.png"},8367:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/b29dc520bbf07d04e31e8b3b2649dc2ded0d6a57-dd1299c70f9ebf344be59735467d4a3a.png"},1124:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/baa5c862ccb1a301c59c47f7316a1014f529a679-9f4ce523da452455162377b7d77a845a.png"},3464:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/e2b08e7cb930ddffed32724d171a9b114d3a071a-edebed6753aa78104b172a4a1447c7e2.png"},4424:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/e93ace3490f64505a1fea7713de4e6fa603ae467-1fcd9e486afe2929dea98a70298ae05b.png"},1230:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/f6f9d54d3c3989b06cc286f5e4b8b912b081d38a-5a300261547b5b04522a09b6583a2089.png"},1151:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>r});var s=i(7294);const t={},o=s.createContext(t);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);