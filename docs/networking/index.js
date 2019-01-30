module.exports = () => {
    return [
        '',
        {
            title: "网络概述",
            collapsable: true,
            children: [
                ['overview/','概述'],
                'overview/alreadyknow.md',
                'overview/networking.md',
            ]
        },
        {
            title: "使用 URL",
            collapsable: true,
            children: [
                ['urls/','概述'],
                'urls/definition.md',
                'urls/creatingUrls.md',
                'urls/urlInfo.md',
                'urls/readingURL.md',
                'urls/connecting.md',
                'urls/readingWriting.md'
            ]
        },
        {
            title: "套接字 Sockets",
            collapsable: true,
            children: [
                ['sockets/','概述'],
                'sockets/definition.md',
                'sockets/readingWriting.md',
                'sockets/clientServer.md',
            ]
        }
    ]
}