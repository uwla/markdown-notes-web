# DOCKER MARKDOWN VUE

I created this app so I can render my markdown notes without compiling them (for example, with Pandoc). Pandoc is great but it usually takes signficant time to compile documents, and it also has a lot of dependencies, which requires lots of disk space. Also, as far as I known, Pandoc does not render [Mermaid flow charts](https://mermaid-js.github.io/mermaid/), which are awesome.

This project enables you to render your Markdown notes on the Browser and view all of them like a personal wiki, dynamic webpage.

Basically, you mount the directory where your notes are located to the Docker container and access it on localhost (port 8080 by default, but you can change all of that).

## Screenshots

![Image 1](./demo/screenshots/1.png)
![Image 2](./demo/screenshots/2.png)
![Image 3](./demo/screenshots/3.png)
![Image 4](./demo/screenshots/4.png)

## Demo

Just run:

```
cp .env.sample .env
docker-compose up -d
```

And access `localhost:8080/` on your browser to see the demo.

## Set up

Copy `.env.sample` to `.env`, modifying it to suit your needs. You just have to change the `FILES` variable to be the path to your notes directory.

Likewise, just run

```
docker-composeu up -d
```

## LICENSE

Do whathever you want with the code of this repo unless your hair is green.

If your hair is green, and your skin is also green, then, oohhh man you must be Hulk! If that is the case, I can't do nothing to prevent you from using this software.
