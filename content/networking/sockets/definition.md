# 什么是套接字 socket 
通常，服务器运行在特定的计算机上，并且具有绑定到特定端口号的socket 。服务器只是在等待，监听客户端的套接字以发出连接请求。

在客户端：客户端知道服务器运行的机器的主机名以及服务器正在侦听的端口号。要建立连接请求，客户端会尝试与服务器的机器和端口上的服务器汇合。客户端还需要向服务器标识自身，以便绑定到在此连接期间将使用的本地端口号。这通常由系统分配。

![](/assets/networking/5connect.gif)
如果一切顺利，服务器接受连接。一旦接受，服务器将获得绑定到同一本地端口的新套接字，并且其远程端点将设置为客户端的地址和端口。它需要一个新的套接字，以便它可以继续监听原始套接字的连接请求，同时适应所连接的客户端的需要。
![](/assets/networking/6connect.gif)

在客户端，如果连接被接受，则成功创建套接字并且客户端可以使用套接字与服务器通信。

客户端和服务器现在可以通过写入或读取其套接字进行通信。


> 定义： 
一个套接字是在网络上运行两个程序之间的双向通信链路的一个端点。套接字绑定到端口号，以便TCP层可以识别数据将被发送到的应用程序。

端点是IP地址和端口号的组合。每个TCP连接可以由其两个端点唯一标识。这样你可以在主机和服务器之间建立多个连接。

在java.net包中的Socket实现了Java程序和网络上另一个程序之间的双向连接。

socket位于平台相关的实现之上，隐藏了来自Java程序的任何特定系统的详细信息。通过使用java.net.socket类而不是依赖于本机代码，您的Java程序可以以独立于平台的方式在网络上进行通信。

此外，java.net还包括ServerSocket该类，它实现了一个服务器可以用来侦听和接受客户端连接的套接字。本课向您展示如何使用Socket和ServerSocket类。


如果您尝试连接到Web，则URL类和相关类（URLConnection，URLEncoder）可能比套接字类更合适。实际上，URL是与Web相对较高级别的连接，并将套接字用作底层实现的一部分。请参阅[ 使用URL有关通过URL连接到Web的信息](/content/networking/urls/index.md)。

## 扩展总结

服务器提供一个端口 9000；在同一台机器上，启动两个客户端连接，那么也可以成功，原因是什么？

客户端还需要向服务器标识自身，以便绑定到在此连接期间将使用的本地端口号。这通常由系统分配。

意思是说：客户端通过9000端口传输数据，但是本地绑定socket端口是系统自动分配的？还是怎么的？