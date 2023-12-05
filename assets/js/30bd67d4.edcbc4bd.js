"use strict";(self.webpackChunksuse_edge_docs=self.webpackChunksuse_edge_docs||[]).push([[8281],{880:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>a});var r=s(5893),t=s(1151);const i={sidebar_position:7,title:"RKE2 cluster with SELinux enabled"},l="Intro",o={id:"misc/rke2-selinux",title:"RKE2 cluster with SELinux enabled",description:"SELinux, or Security-Enhanced Linux, is a security framework for Linux operating systems that provides an additional layer of access control and mandatory access controls (MAC) beyond the traditional discretionary access controls (DAC). Developed by the National Security Agency (NSA) in collaboration with the open-source community, SELinux aims to enforce fine-grained control over processes, files, and system resources to enhance the overall security of the system.",source:"@site/docs/misc/rke2-selinux.md",sourceDirName:"misc",slug:"/misc/rke2-selinux",permalink:"/docs/misc/rke2-selinux",draft:!1,unlisted:!1,editUrl:"https://github.com/suse-edge/suse-edge.github.io/tree/main/docs/misc/rke2-selinux.md",tags:[],version:"current",lastUpdatedBy:"Andrew Gracey",lastUpdatedAt:1701811074,formattedLastUpdatedAt:"Dec 5, 2023",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"RKE2 cluster with SELinux enabled"},sidebar:"docs",previous:{title:"MetalLB Service in front of the Kubernetes API server",permalink:"/docs/misc/metallb-kube-api"}},c={},a=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"Installation for x86-64 architecture",id:"installation-for-x86-64-architecture",level:3},{value:"Installation on arm64 architecture",id:"installation-on-arm64-architecture",level:3},{value:"Install rke2-selinux",id:"install-rke2-selinux",level:4},{value:"Install RKE2",id:"install-rke2",level:4},{value:"Get the Kubeconfig",id:"get-the-kubeconfig",level:3},{value:"Verify the setup",id:"verify-the-setup",level:3}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"intro",children:"Intro"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"SELinux"}),", or Security-Enhanced Linux, is a security framework for Linux operating systems that provides an additional layer of access control and mandatory access controls (",(0,r.jsx)(n.code,{children:"MAC"}),") beyond the traditional discretionary access controls (",(0,r.jsx)(n.code,{children:"DAC"}),"). Developed by the National Security Agency (",(0,r.jsx)(n.code,{children:"NSA"}),") in collaboration with the open-source community, ",(0,r.jsx)(n.code,{children:"SELinux"})," aims to enforce fine-grained control over processes, files, and system resources to enhance the overall security of the system."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"In this guide, we'll show you how to deploy an RKE2 cluster with SELinux enabled and enforcing."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["1 VM. Hint ",(0,r.jsx)(n.a,{href:"https://suse-edge.github.io/docs/quickstart/slemicro-utm-aarch64",children:"SLE Micro on OSX on Apple Silicon (UTM)"})," or ",(0,r.jsx)(n.a,{href:"https://suse-edge.github.io/docs/quickstart/slemicro-virt-install-x86_64",children:"SLE Micro on X86_64 on libvirt (virt-install)"})," can be used as the base platform for validation here, but these instructions should work on any SLE Micro based system.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The VM should meet the ",(0,r.jsx)(n.a,{href:"https://docs.rke2.io/install/requirements#linuxwindows",children:"RKE2 requirements"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(n.h3,{id:"installation-for-x86-64-architecture",children:"Installation for x86-64 architecture"}),"\n",(0,r.jsx)(n.p,{children:"Once we've got the VM started and running, let's prepare the config to enable SELinux mode in the RKE2 configuration file:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'mkdir -p /etc/rancher/rke2 && echo "selinux: true" >> /etc/rancher/rke2/config.yaml\n'})}),"\n",(0,r.jsx)(n.p,{children:"Install RKE2 cluster"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"curl -sfL https://get.rke2.io | INSTALL_RKE2_CHANNEL=stable INSTALL_RKE2_METHOD=rpm RKE2_SELINUX=true sh -\n\n# Enable and Start RKE2\nsystemctl enable rke2-server.service\n"})}),"\n",(0,r.jsx)(n.p,{children:"Now, the VM should be rebooted for the transactional-update to finish properly:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"reboot\n"})}),"\n",(0,r.jsx)(n.h3,{id:"installation-on-arm64-architecture",children:"Installation on arm64 architecture"}),"\n",(0,r.jsxs)(n.p,{children:["As there are no RPM builds for RKE2 on ",(0,r.jsx)(n.code,{children:"arm64"})," architecture, the ",(0,r.jsx)(n.code,{children:"tarball"})," method will be used and the ",(0,r.jsx)(n.code,{children:"rke2-selinux"})," policy will be installed manually."]}),"\n",(0,r.jsx)(n.h4,{id:"install-rke2-selinux",children:"Install rke2-selinux"}),"\n",(0,r.jsxs)(n.p,{children:["The first thing that will be installed is the ",(0,r.jsx)(n.a,{href:"https://github.com/rancher/rke2-selinux",children:"rke2-selinux"})," policy."]}),"\n",(0,r.jsx)(n.p,{children:"Let's connect to the VM and run:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"cat >> install-selinux.sh << 'END'\n#!/bin/bash\n\n# Install rpm-testing.rancher.io repository key and the rke2-selinux package\nmkdir -p /var/lib/rpm-state\ncurl -o /root/public.key https://rpm-testing.rancher.io/public.key\ncurl -L -o /root/rke2-selinux.rpm https://github.com/rancher/rke2-selinux/releases/download/v0.15.testing.1/rke2-selinux-0.15-1.slemicro.noarch.rpm\nrpmkeys --import /root/public.key\n\n# Install RKE2 with SELinux\nzypper install -y /root/rke2-selinux.rpm\nEND\n\nchmod +x install-selinux.sh && transactional-update run /root/install-selinux.sh\n"})}),"\n",(0,r.jsx)(n.p,{children:"Now, the VM should be rebooted for the transactional-update to finish properly:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"reboot\n"})}),"\n",(0,r.jsx)(n.p,{children:"After restarting the VM, we can verify that the policy was successfully installed as follows:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"rpm -qa | grep rke2\n"})}),"\n",(0,r.jsx)(n.h4,{id:"install-rke2",children:"Install RKE2"}),"\n",(0,r.jsx)(n.p,{children:"As a second step, an RKE2 cluster will be installed, which will use the policy installed in the previous section."}),"\n",(0,r.jsxs)(n.p,{children:["As the ",(0,r.jsx)(n.code,{children:"rke2-policy"})," was installed manually on the VM, some of its paths may not be created correctly, so the following commands will ensure that all the paths are fine."]}),"\n",(0,r.jsx)(n.p,{children:"Let's connect to the VM and run:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"mkdir -p /var/lib/cni\nmkdir -p /opt/cni\nmkdir -p /var/lib/kubelet/pods\nmkdir -p /var/lib/rancher/rke2/agent/containerd/io.containerd.snapshotter.v1.overlayfs/snapshots\nmkdir -p /var/lib/rancher/rke2/data\nmkdir -p /var/run/flannel\nmkdir -p /var/run/k3s\nrestorecon -R -i /etc/systemd/system/rke2.service\nrestorecon -R -i /usr/lib/systemd/system/rke2.service\nrestorecon -R /var/lib/cni\nrestorecon -R /opt/cni\nrestorecon -R /var/lib/kubelet\nrestorecon -R /var/lib/rancher\nrestorecon -R /var/run/k3s\nrestorecon -R /var/run/flannel\n"})}),"\n",(0,r.jsx)(n.p,{children:"It's time for the RKE2 cluster to be installed but before that, RKE2 must be running Selinux mode:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'mkdir -p /etc/rancher/rke2 && echo "selinux: true" >> /etc/rancher/rke2/config.yaml\n'})}),"\n",(0,r.jsx)(n.p,{children:"Install RKE2 Using Install Script"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'curl -sfL https://get.rke2.io | INSTALL_RKE2_EXEC="server" RKE2_SELINUX=true INSTALL_RKE2_VERSION=v1.27.3+rke2r1 sh -\n\n# Enable and Start RKE2\nsystemctl enable --now rke2-server.service\n'})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"NOTE:"})," RKE2 version ",(0,r.jsx)(n.code,{children:"1.27"})," is the first that supports ",(0,r.jsx)(n.code,{children:"arm64"})," architecture and it is still an experimental feature."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"get-the-kubeconfig",children:"Get the Kubeconfig"}),"\n",(0,r.jsx)(n.p,{children:"To use the Kubeconfig outside of the node, the following commands can be used:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"# Replace <node-ip> with the actual ip\nexport NODE_IP=<node-ip>\n\nsudo scp ${NODE_IP}:/etc/rancher/rke2/rke2.yaml ~/.kube/config && sed -i '' \"s/127.0.0.1/${NODE_IP}/g\" ~/.kube/config && chmod 600 ~/.kube/config\n"})}),"\n",(0,r.jsx)(n.h3,{id:"verify-the-setup",children:"Verify the setup"}),"\n",(0,r.jsx)(n.p,{children:"Check SELinux status:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"sestatus\n"})}),"\n",(0,r.jsx)(n.p,{children:"The output should be similar to this one:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"SELinux status:                 enabled\nSELinuxfs mount:                /sys/fs/selinux\nSELinux root directory:         /etc/selinux\nLoaded policy name:             targeted\nCurrent mode:                   enforcing\nMode from config file:          enforcing\nPolicy MLS status:              enabled\nPolicy deny_unknown status:     allowed\nMemory protection checking:     requested (insecure)\nMax kernel policy version:      33\n"})}),"\n",(0,r.jsx)(n.p,{children:"Check that all pods are in Running state:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"kubectl get pod -A\n"})}),"\n",(0,r.jsx)(n.p,{children:"The output should be similar to this one:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"NAMESPACE     NAME                                                    READY   STATUS      RESTARTS       AGE\nkube-system   cloud-controller-manager-slemicro                       1/1     Running     0 (2m3s ago)   3d5h\nkube-system   etcd-slemicro                                           1/1     Running     0 (2m9s ago)   3d5h\nkube-system   kube-apiserver-slemicro                                 1/1     Running     0 (2m9s ago)   3d5h\nkube-system   kube-controller-manager-slemicro                        1/1     Running     0 (2m7s ago)   3d5h\n(2m9s ago)   3d5h\n...\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>l});var r=s(7294);const t={},i=r.createContext(t);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);